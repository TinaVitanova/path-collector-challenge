"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map16_result = exports.map16 = exports.map15_result = exports.map15 = exports.map14_result = exports.map14 = exports.map13_result = exports.map13 = exports.map12_result = exports.map12 = exports.map11_result = exports.map11 = exports.map10_result = exports.map10 = exports.map9_result = exports.map9 = exports.map8_result = exports.map8 = exports.map7_result = exports.map7 = exports.map6_letters = exports.map6_path = exports.map6 = exports.map5_letters = exports.map5_path = exports.map5 = exports.map4_letters = exports.map4_path = exports.map4 = exports.map3_letters = exports.map3_path = exports.map3 = exports.map2_letters = exports.map2_path = exports.map2 = exports.map1_letters = exports.map1_path = exports.map1 = void 0;
exports.map1 = [
    ['@', '-', '-', '-', 'A', '-', '-', '-', '+'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
    ['x', '-', 'B', '-', '+', ' ', ' ', ' ', 'C'],
    [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
    [' ', ' ', ' ', ' ', '+', '-', '-', '-', '+'],
];
exports.map1_path = '@---A---+|C|+---+|+-B-x';
exports.map1_letters = 'ACB';
exports.map2 = [
    ['@', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['|', ' ', '+', '-', 'C', '-', '-', '+', ' ', ' '],
    ['A', ' ', '|', ' ', ' ', ' ', ' ', '|', ' ', ' '],
    ['+', '-', '-', '-', 'B', '-', '-', '+', ' ', ' '],
    [' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    [' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
    [' ', ' ', '+', '-', '-', '-', 'D', '-', '-', '+']
];
exports.map2_path = '@|A+---B--+|+--C-+|-||+---D--+|x';
exports.map2_letters = 'ABCD';
exports.map3 = [
    ['@', '-', '-', '-', 'A', '-', '-', '-', '+'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
    ['x', '-', 'B', '-', '+', ' ', ' ', ' ', '|'],
    [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
    [' ', ' ', ' ', ' ', '+', '-', '-', '-', 'C']
];
exports.map3_path = '@---A---+|||C---+|+-B-x';
exports.map3_letters = 'ACB';
exports.map4 = [
    [' ', ' ', ' ', ' ', '+', '-', 'O', '-', 'N', '-', '+'],
    [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|'],
    [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', '+', '-', 'I', '-', '+'],
    ['@', '-', 'G', '-', 'O', '-', '+', ' ', '|', ' ', '|', ' ', '|'],
    [' ', ' ', ' ', ' ', '|', ' ', '|', ' ', '+', '-', '+', ' ', 'E'],
    [' ', ' ', ' ', ' ', '+', '-', '+', ' ', ' ', ' ', ' ', ' ', 'S'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
];
exports.map4_path = '@-G-O-+|+-+|O||+-O-N-+|I|+-+|+-I-+|ES|x';
exports.map4_letters = 'GOONIES';
exports.map5 = [
    [' ', '+', '-', 'L', '-', '+'],
    [' ', '|', ' ', ' ', '+', 'A', '-', '+'],
    ['@', 'B', '+', ' ', '+', '+', ' ', 'H'],
    [' ', '+', '+', ' ', ' ', ' ', ' ', 'x'],
];
exports.map5_path = '@B+++B|+-L-+A+++A-+Hx';
exports.map5_letters = 'BLAH';
exports.map6 = [
    ['@', '-', 'A', '-', '-', '+'],
    [' ', ' ', ' ', ' ', ' ', '|'],
    [' ', ' ', ' ', ' ', ' ', '+', '-', 'B', '-', '-', 'x', '-', 'C', '-', '-', 'D'],
];
exports.map6_path = '@-A--+|+-B--x';
exports.map6_letters = 'AB';
exports.map7 = [
    [' ', ' ', '-', '-', 'A', '-', '-', '-', '+'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
    ['x', '-', 'B', '-', '+', ' ', ' ', ' ', 'C'],
    [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
    [' ', ' ', ' ', ' ', '+', '-', '-', '-', '+'],
];
exports.map7_result = `Character \'@\' not found in the map.`;
exports.map8 = [
    ['@', '-', '-', '-', 'A', '-', '-', '-', '+'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
    [' ', ' ', 'B', '-', '+', ' ', ' ', ' ', 'C'],
    [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
    [' ', ' ', ' ', ' ', '+', '-', '-', '-', '+'],
];
exports.map8_result = 'Invalid map.';
exports.map9 = [
    ['@', '-', '-', '-', 'A', '-', '@', '-', '+'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
    ['x', '-', 'B', '-', '+', ' ', ' ', ' ', 'C'],
    [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
    [' ', ' ', ' ', ' ', '+', '-', '-', '-', '+'],
];
exports.map9_result = 'Found multiple starting points.';
exports.map10 = [
    ['@', '-', '-', '-', 'A', '-', '-', '-', '+'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'C'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    [' ', ' ', ' ', ' ', '@', '-', 'B', '-', '+'],
];
exports.map10_result = 'Found multiple starting points.';
exports.map11 = [
    ['@', '-', '-', '-', 'A', '-', '-', 'x', '+'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['x', '-', 'B', '-', '+', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', '@', ' ', ' ', ' ', ' '],
];
exports.map11_result = 'Found multiple starting points.';
exports.map12 = [
    [' ', ' ', ' ', ' ', ' ', 'x', '-', 'B'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
    ['@', '-', '-', 'A', '-', '-', '-', '+'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
    [' ', ' ', 'x', '+', ' ', ' ', ' ', 'C'],
    [' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
    [' ', ' ', ' ', '+', '-', '-', '-', '+'],
];
exports.map12_result = 'Invalid map.';
exports.map13 = [
    ['@', '-', '-', 'A', '-', '+'],
    [' ', ' ', ' ', ' ', ' ', '|'],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', 'B', '-', '+'],
];
exports.map13_result = 'Invalid map.';
exports.map14 = [
    ['x', '-', 'B', '-', '@', '-', 'A', '-', 'x'],
];
exports.map14_result = 'Invalid starting point. There should be exactly one path.';
exports.map15 = [
    ['@', '-', 'A', '-', '+', '-', 'B', '-', 'x'],
];
exports.map15_result = 'Invalid map.';
exports.map16 = [
    ['@', '-', '-', 'A', '-', '-', '-', '+'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
    [' ', ' ', 'x', '+', ' ', ' ', ' ', 'C'],
    [' ', ' ', ' ', '/', ' ', ' ', ' ', '|'],
    [' ', ' ', ' ', '+', '-', '-', '-', '+'],
];
exports.map16_result = 'Map has invalid characters.';
