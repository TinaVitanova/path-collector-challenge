"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_collector_1 = require("../path-collector");
const path_collector_mocks_1 = require("./path-collector-mocks");
describe('Path Collector correct maps', () => {
    describe('Map1 should return correct results', () => {
        const pathCollectorFn = new path_collector_1.CharacterPathCollector(path_collector_mocks_1.map1);
        const [path, letters] = pathCollectorFn.pathCollector();
        test('it should return correct result for path', () => {
            expect(path).toBe(path_collector_mocks_1.map1_path);
        });
        test('it should return correct result for letters', () => {
            expect(letters).toBe(path_collector_mocks_1.map1_letters);
        });
    });
    describe('Map2 should return correct results', () => {
        const pathCollectorFn = new path_collector_1.CharacterPathCollector(path_collector_mocks_1.map2);
        const [path, letters] = pathCollectorFn.pathCollector();
        test('it should return correct result for path', () => {
            expect(path).toBe(path_collector_mocks_1.map2_path);
        });
        test('it should return correct result for letters', () => {
            expect(letters).toBe(path_collector_mocks_1.map2_letters);
        });
    });
    describe('Map3 should return correct results', () => {
        const pathCollectorFn = new path_collector_1.CharacterPathCollector(path_collector_mocks_1.map3);
        const [path, letters] = pathCollectorFn.pathCollector();
        test('it should return correct result for path', () => {
            expect(path).toBe(path_collector_mocks_1.map3_path);
        });
        test('it should return correct result for letters', () => {
            expect(letters).toBe(path_collector_mocks_1.map3_letters);
        });
    });
    describe('Map4 should return correct results', () => {
        const pathCollectorFn = new path_collector_1.CharacterPathCollector(path_collector_mocks_1.map4);
        const [path, letters] = pathCollectorFn.pathCollector();
        test('it should return correct result for path', () => {
            expect(path).toBe(path_collector_mocks_1.map4_path);
        });
        test('it should return correct result for letters', () => {
            expect(letters).toBe(path_collector_mocks_1.map4_letters);
        });
    });
    describe('Map5 should return correct results', () => {
        const pathCollectorFn = new path_collector_1.CharacterPathCollector(path_collector_mocks_1.map5);
        const [path, letters] = pathCollectorFn.pathCollector();
        test('it should return correct result for path', () => {
            expect(path).toBe(path_collector_mocks_1.map5_path);
        });
        test('it should return correct result for letters', () => {
            expect(letters).toBe(path_collector_mocks_1.map5_letters);
        });
    });
    describe('Map6 should return correct results', () => {
        const pathCollectorFn = new path_collector_1.CharacterPathCollector(path_collector_mocks_1.map6);
        const [path, letters] = pathCollectorFn.pathCollector();
        test('it should return correct result for path', () => {
            expect(path).toBe(path_collector_mocks_1.map6_path);
        });
        test('it should return correct result for letters', () => {
            expect(letters).toBe(path_collector_mocks_1.map6_letters);
        });
    });
});
describe('Path Collector invalid maps', () => {
    describe('Map7 should return fail successfully', () => {
        const pathCollectorFn = new path_collector_1.CharacterPathCollector(path_collector_mocks_1.map7);
        test('it should return correct error message', () => {
            expect(() => pathCollectorFn.pathCollector()).toThrow(path_collector_mocks_1.map7_result);
        });
    });
    describe('Map8 should return fail successfully', () => {
        const pathCollectorFn = new path_collector_1.CharacterPathCollector(path_collector_mocks_1.map8);
        test('it should return correct error message', () => {
            expect(() => pathCollectorFn.pathCollector()).toThrow(path_collector_mocks_1.map8_result);
        });
    });
    describe('Map9 should return fail successfully', () => {
        const pathCollectorFn = new path_collector_1.CharacterPathCollector(path_collector_mocks_1.map9);
        test('it should return correct error message', () => {
            expect(() => pathCollectorFn.pathCollector()).toThrow(path_collector_mocks_1.map9_result);
        });
    });
    describe('Map10 should return fail successfully', () => {
        const pathCollectorFn = new path_collector_1.CharacterPathCollector(path_collector_mocks_1.map10);
        test('it should return correct error message', () => {
            expect(() => pathCollectorFn.pathCollector()).toThrow(path_collector_mocks_1.map10_result);
        });
    });
    describe('Map11 should return fail successfully', () => {
        const pathCollectorFn = new path_collector_1.CharacterPathCollector(path_collector_mocks_1.map11);
        test('it should return correct error message', () => {
            expect(() => pathCollectorFn.pathCollector()).toThrow(path_collector_mocks_1.map11_result);
        });
    });
    describe('Map12 should return fail successfully', () => {
        const pathCollectorFn = new path_collector_1.CharacterPathCollector(path_collector_mocks_1.map12);
        test('it should return correct error message', () => {
            expect(() => pathCollectorFn.pathCollector()).toThrow(path_collector_mocks_1.map12_result);
        });
    });
    describe('Map13 should return fail successfully', () => {
        const pathCollectorFn = new path_collector_1.CharacterPathCollector(path_collector_mocks_1.map13);
        test('it should return correct error message', () => {
            expect(() => pathCollectorFn.pathCollector()).toThrow(path_collector_mocks_1.map13_result);
        });
    });
    describe('Map14 should return fail successfully', () => {
        const pathCollectorFn = new path_collector_1.CharacterPathCollector(path_collector_mocks_1.map14);
        test('it should return correct error message', () => {
            expect(() => pathCollectorFn.pathCollector()).toThrow(path_collector_mocks_1.map14_result);
        });
    });
    describe('Map15 should return fail successfully', () => {
        const pathCollectorFn = new path_collector_1.CharacterPathCollector(path_collector_mocks_1.map15);
        test('it should return correct error message', () => {
            expect(() => pathCollectorFn.pathCollector()).toThrow(path_collector_mocks_1.map15_result);
        });
    });
    describe('Map16 should return fail successfully', () => {
        const pathCollectorFn = new path_collector_1.CharacterPathCollector(path_collector_mocks_1.map16);
        test('it should return correct error message', () => {
            expect(() => pathCollectorFn.pathCollector()).toThrow(path_collector_mocks_1.map16_result);
        });
    });
});
