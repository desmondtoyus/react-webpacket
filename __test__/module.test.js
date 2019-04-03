'use strict'
const modules = require('./../contents/module');

describe('viewTemplate()', function () {
    it('Should exist', function () {
        expect(modules.viewTemplate).toBeDefined();
    });
    it('should be a function', function () {
        expect(modules.viewTemplate).toBeInstanceOf(Function);
    });
    it('should return a string', function () {
        const result = modules.viewTemplate('home');
        expect(result).toMatchSnapshot();
    });
    it('should return error', function () {
        expect(modules.viewTemplate()).toBeFalsy()
    });

});

describe('reducerTemplate()', function () {
    it('Should exist', function () {
        expect(modules.reducerTemplate).toBeDefined();
    });
    it('should be a function', function () {
        expect(modules.reducerTemplate).toBeInstanceOf(Function);
    });
    it('should return a string', function () {
        const result = modules.reducerTemplate('shared');
        expect(result).toMatchSnapshot();
    });
    it('should return error', function () {
        expect(modules.reducerTemplate()).toBeFalsy();
    });
    
});
describe('actionTemplate()', function () {
    it('Should exist', function () {
        expect(modules.actionTemplate).toBeDefined();
    });
    it('should be a function', function () {
        expect(modules.actionTemplate).toBeInstanceOf(Function);
    });
    it('should return a string', function () {
        const result = modules.actionTemplate('shared');
        expect(result).toMatchSnapshot();
    });
    it('should return error', function () {
        expect(modules.actionTemplate()).toBeFalsy();
    });
});
describe('pageUrls()', function () {
    it('Should exist', function () {
        expect(modules.pageUrls).toBeDefined();
    });
    it('should be a function', function () {
        expect(modules.pageUrls).toBeInstanceOf(Function);
    });
    it('should return a string', function () {
        const result = modules.pageUrls(['home']);
        expect(result).toMatchSnapshot();
    });
    it('should return false for string', function () {
        const result = modules.pageUrls('home');
        expect(result).toBeFalsy();
    });
    it('should return error', function () {
        expect(modules.pageUrls()).toBeFalsy();
    });
});
describe('rootReducers()', function () {
    it('Should exist', function () {
        expect(modules.rootReducers).toBeDefined();
    });
    it('should be a function', function () {
        expect(modules.rootReducers).toBeInstanceOf(Function);
    });
    it('should return a string', function () {
        const result = modules.rootReducers(['shared']);
        expect(result).toMatchSnapshot();
    });
    it('should return false for string', function () {
        const result = modules.rootReducers('shared');
        expect(result).toBeFalsy();
    });
    it('should return error', function () {
        expect(modules.rootReducers()).toBeFalsy();
    });
});

describe('configStore()', function () {
    it('Should exist', function () {
        expect(modules.configStore).toBeDefined();
    });
    it('should be a function', function () {
        expect(modules.configStore).toBeInstanceOf(Function);
    });
    it('should return a string', function () {
        const result = modules.configStore(['shared']);
        expect(result).toMatchSnapshot();
    });
    it('should return false for string', function () {
        const result = modules.configStore('shared');
        expect(result).toBeFalsy();
    });
    it('should return error', function () {
        expect(modules.configStore()).toBeFalsy();
    });
});

describe('caddActionToType()', function () {
    it('Should exist', function () {
        expect(modules.addActionToType).toBeDefined();
    });
    it('should be a function', function () {
        expect(modules.addActionToType).toBeInstanceOf(Function);
    });
    it('should return a string', function () {
        const result = modules.addActionToType(['ADD_USER']);
        expect(result).toMatchSnapshot();
    });
    it('should return false for string', function () {
        const result = modules.addActionToType('ADD_USER');
        expect(result).toBeFalsy();
    });
    it('should return error', function () {
        expect(modules.addActionToType()).toBeFalsy();
    });
});

describe('createApp()', function () {
    it('Should exist', function () {
        expect(modules.createApp).toBeDefined();
    });
    it('should be a function', function () {
        expect(modules.createApp).toBeInstanceOf(Function);
    });
    it('should return a string', function () {
        const result = modules.createApp(['home']);
        expect(result).toMatchSnapshot();
    });
    it('should return false for string', function () {
        const result = modules.createApp('home');
        expect(result).toBeFalsy();
    });
    it('should return error', function () {
        expect(modules.createApp()).toBeFalsy();
    });
});

// createApp

