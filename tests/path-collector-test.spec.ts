import { CharacterPathCollector } from '../path-collector'
import {
    map1, map1_path, map1_letters,
    map2, map2_letters, map2_path,
    map3, map3_letters, map3_path,
    map4, map4_letters, map4_path,
    map5, map5_letters, map5_path,
    map6, map6_letters, map6_path,
    map7, map7_result,
    map8, map8_result,
    map9, map9_result,
    map10, map10_result,
    map11, map11_result,
    map12, map12_result,
    map13, map13_result, map14, map14_result, map15, map15_result, map16, map16_result
} from './path-collector-mocks'

describe('Path Collector correct maps', () => {
    describe('Map1 should return correct results', ()=> {
        const pathCollectorFn = new CharacterPathCollector(map1);

        const [path, letters] = pathCollectorFn.pathCollector();

        test('it should return correct result for path', () => {      
            expect(path).toBe(map1_path);
        });
        test('it should return correct result for letters', () => {
            expect(letters).toBe(map1_letters);
        });
    })
    describe('Map2 should return correct results', ()=> {
        const pathCollectorFn = new CharacterPathCollector(map2);

        const [path, letters] = pathCollectorFn.pathCollector();

        test('it should return correct result for path', () => {      
            expect(path).toBe(map2_path);
        });
        test('it should return correct result for letters', () => {
            expect(letters).toBe(map2_letters);
        });
    })
    describe('Map3 should return correct results', ()=> {
        const pathCollectorFn = new CharacterPathCollector(map3);

        const [path, letters] = pathCollectorFn.pathCollector();

        test('it should return correct result for path', () => {      
            expect(path).toBe(map3_path);
        });
        test('it should return correct result for letters', () => {
            expect(letters).toBe(map3_letters);
        });
    })
    describe('Map4 should return correct results', ()=> {
        const pathCollectorFn = new CharacterPathCollector(map4);

        const [path, letters] = pathCollectorFn.pathCollector();

        test('it should return correct result for path', () => {      
            expect(path).toBe(map4_path);
        });
        test('it should return correct result for letters', () => {
            expect(letters).toBe(map4_letters);
        });
    })
    describe('Map5 should return correct results', ()=> {
        const pathCollectorFn = new CharacterPathCollector(map5);

        const [path, letters] = pathCollectorFn.pathCollector();

        test('it should return correct result for path', () => {      
            expect(path).toBe(map5_path);
        });
        test('it should return correct result for letters', () => {
            expect(letters).toBe(map5_letters);
        });
    })
    describe('Map6 should return correct results', ()=> {
        const pathCollectorFn = new CharacterPathCollector(map6);

        const [path, letters] = pathCollectorFn.pathCollector();

        test('it should return correct result for path', () => {      
            expect(path).toBe(map6_path);
        });
        test('it should return correct result for letters', () => {
            expect(letters).toBe(map6_letters);
        });
    })
})


describe('Path Collector invalid maps', () => {
    describe('Map7 should return fail successfully', ()=> {
        const pathCollectorFn = new CharacterPathCollector(map7);

        test('it should return correct error message', () => {            
            expect(() => pathCollectorFn.pathCollector()).toThrow(map7_result);
        });
    })
    describe('Map8 should return fail successfully', ()=> {
        const pathCollectorFn = new CharacterPathCollector(map8);

        test('it should return correct error message', () => {            
            expect(() => pathCollectorFn.pathCollector()).toThrow(map8_result);
        });
    })
    describe('Map9 should return fail successfully', ()=> {
        const pathCollectorFn = new CharacterPathCollector(map9);

        test('it should return correct error message', () => {            
            expect(() => pathCollectorFn.pathCollector()).toThrow(map9_result);
        });
    })
    describe('Map10 should return fail successfully', ()=> {
        const pathCollectorFn = new CharacterPathCollector(map10);

        test('it should return correct error message', () => {            
            expect(() => pathCollectorFn.pathCollector()).toThrow(map10_result);
        });
    })
    describe('Map11 should return fail successfully', ()=> {
        const pathCollectorFn = new CharacterPathCollector(map11);

        test('it should return correct error message', () => {            
            expect(() => pathCollectorFn.pathCollector()).toThrow(map11_result);
        });
    })
    describe('Map12 should return fail successfully', ()=> {
        const pathCollectorFn = new CharacterPathCollector(map12);

        test('it should return correct error message', () => {            
            expect(() => pathCollectorFn.pathCollector()).toThrow(map12_result);
        });
    })
    describe('Map13 should return fail successfully', ()=> {
        const pathCollectorFn = new CharacterPathCollector(map13);

        test('it should return correct error message', () => {            
            expect(() => pathCollectorFn.pathCollector()).toThrow(map13_result);
        });
    })
    describe('Map14 should return fail successfully', ()=> {
        const pathCollectorFn = new CharacterPathCollector(map14);

        test('it should return correct error message', () => {            
            expect(() => pathCollectorFn.pathCollector()).toThrow(map14_result);
        });
    })
    describe('Map15 should return fail successfully', ()=> {
        const pathCollectorFn = new CharacterPathCollector(map15);

        test('it should return correct error message', () => {            
            expect(() => pathCollectorFn.pathCollector()).toThrow(map15_result);
        });
    })
    describe('Map16 should return fail successfully', ()=> {
        const pathCollectorFn = new CharacterPathCollector(map16);

        test('it should return correct error message', () => {            
            expect(() => pathCollectorFn.pathCollector()).toThrow(map16_result);
        });
    })
})