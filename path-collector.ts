type MapChar = string[][];
const START = '@'
const END = "x"
const UP_DOWN = "|"
const LEFT_RIGHT = "-"
const TURN = "+"

const UP = 'UP'
const DOWN = 'DOWN'
const RIGHT = 'RIGHT'
const LEFT = 'LEFT'

const validLetters = /^[A-Z]$/
const turnChars = /^[A-Z+]$/
const verticalChars = /^[A-Z+x|]$/
const horisontalChars = /^[A-Z+x-]$/

const allowedChars = /^[A-Z@x|+-]$/

const intersectionDirection = {
    UP: [RIGHT, LEFT],
    DOWN: [RIGHT, LEFT],
    RIGHT: [UP, DOWN],
    LEFT: [UP, DOWN]
}


export class CharacterPathCollector {
    private map: MapChar
    
    constructor(map: MapChar) {
      this.map = map
    }

    pathCollector(): [string, string] {
        const startPos = this.findChar(START)
        let neighbors = this.getNeighbors(startPos)

        if (neighbors.length !== 1) throw new Error('Invalid starting point. There should be exactly one path.');

        let path = '@'
        let letters = ''
        let neighbor = neighbors[0]
        const visitedPositions: number[][] = []

        while (neighbor.char != END) {
            path = path.concat(neighbor.char)

            if (validLetters.test(neighbor.char) && !visitedPositions.find(pos => pos[0] === neighbor.newPos[0] && pos[1] === neighbor.newPos[1])) {
                letters = letters.concat(neighbor.char)
                visitedPositions.push(neighbor.newPos)
            }

            let newDirections

            if (neighbor.isIntersection) {
                newDirections = [neighbor.direction]
            } else {
                switch (neighbor.direction) {
                    case UP:
                        if (neighbor.char === UP_DOWN) newDirections = [UP]
                        else if (neighbor.char === TURN) newDirections = [RIGHT, LEFT]
                        else newDirections = [RIGHT, UP, LEFT]

                        break
                    case DOWN:
                        if (neighbor.char === UP_DOWN) newDirections = [DOWN]
                        else if (neighbor.char === TURN) newDirections = [RIGHT, LEFT]
                        else newDirections = [RIGHT, DOWN, LEFT]

                        break
                    case LEFT:
                        if (neighbor.char === LEFT_RIGHT) newDirections = [LEFT]
                        else if (neighbor.char === TURN) newDirections = [UP, DOWN]
                        else newDirections = [LEFT, UP, DOWN]

                        break
                    case RIGHT:
                        if (neighbor.char === LEFT_RIGHT) newDirections = [RIGHT]
                        else if (neighbor.char === TURN) newDirections = [UP, DOWN]
                        else newDirections = [DOWN, UP, RIGHT]

                        break
                }
            }
            neighbors = this.getNeighbors(neighbor.newPos, newDirections)

            if (neighbors.length !== 1) throw new Error ('Invalid map.')

            neighbor = neighbors[0]
        }

        if (neighbor.char === END) path = path.concat(neighbor.char)

        return [path, letters]
    }

    private findChar(char: string): number[] {
        let charIndex = [-1,-1]
        let numberOfInstances = 0

        for (let i = 0; i < this.map.length; i++) {
            for (let j = 0; j < this.map[i].length; j++) {
                    if (this.map[i][j] === char) {
                        charIndex = [i, j]
                        numberOfInstances += 1
                    }
                    if (this.map[i][j] !== ' ' && !allowedChars.test(this.map[i][j])) {
                        throw new Error('Map has invalid characters.')
                    }
            }
        }
        if (numberOfInstances > 1 && char === START)  throw new Error('Found multiple starting points.')

        if (numberOfInstances === 0) throw new Error(`Character '${char}' not found in the map.`)

        return charIndex;
    }

    private getNeighbors(charPos: number[], directions: string[] = [], checkIntersection: boolean = true) {
        if (directions.length === 0) {
            directions = [UP, DOWN, LEFT, RIGHT]
        }

        let possibleMoves: { direction: string; newPos: number[]; char: string; isIntersection: Boolean; }[] = []
        let intersectionMoves: { direction: string; newPos: number[]; char: string; isIntersection: Boolean; }[] = []

        directions.forEach(direction => {
            switch (direction) {
                case UP: {
                    if (charPos[0] - 1 < 0) break

                    const upChar = this.map[charPos[0] - 1][charPos[1]]
                    const charTest = !checkIntersection ? allowedChars : verticalChars

                    if (checkIntersection) intersectionMoves = this.getNeighbors([charPos[0] - 1, charPos[1]], intersectionDirection.UP, false)

                    if (charTest.test(upChar) || intersectionMoves.length === 2) possibleMoves.push({ direction: UP, newPos: [charPos[0] - 1, charPos[1]], char: upChar, isIntersection: intersectionMoves.length === 2 })

                    break
                }
                case DOWN: {
                    if (charPos[0] + 1 >= this.map.length || this.map[charPos[0] + 1].length <= charPos[1]) break

                    const downChar = this.map[charPos[0] + 1][charPos[1]]
                    const charTest = !checkIntersection ? allowedChars : verticalChars

                    if (checkIntersection) intersectionMoves = this.getNeighbors([charPos[0] + 1, charPos[1]], intersectionDirection.DOWN, false)

                    if (charTest.test(downChar) || intersectionMoves.length === 2) possibleMoves.push({ direction: DOWN, newPos: [charPos[0] + 1, charPos[1]], char: downChar, isIntersection: intersectionMoves.length === 2 })

                    break
                }
                case LEFT: {
                    if (charPos[1] - 1 < 0) break

                    const leftChar = this.map[charPos[0]][charPos[1] - 1]
                    let charTest = !checkIntersection ? allowedChars : horisontalChars

                    if (checkIntersection) intersectionMoves = this.getNeighbors([charPos[0], charPos[1] - 1], intersectionDirection.LEFT, false)

                    if (charTest.test(leftChar) || intersectionMoves.length === 2) possibleMoves.push({ direction: LEFT, newPos: [charPos[0], charPos[1] - 1], char: leftChar, isIntersection: intersectionMoves.length === 2 })

                    break
                }
                case RIGHT: {
                    if (charPos[1] + 1 >= this.map[charPos[0]].length) break

                    const rightChar = this.map[charPos[0]][charPos[1] + 1]
                    const charTest = !checkIntersection ? allowedChars : horisontalChars

                    if (checkIntersection) intersectionMoves = this.getNeighbors([charPos[0], charPos[1] + 1], intersectionDirection.RIGHT, false)

                    if (charTest.test(rightChar) || intersectionMoves.length === 2) possibleMoves.push({ direction: RIGHT, newPos: [charPos[0], charPos[1] + 1], char: rightChar, isIntersection: intersectionMoves.length === 2 })

                    break
                }
            }
        })

        return possibleMoves;
    }
}