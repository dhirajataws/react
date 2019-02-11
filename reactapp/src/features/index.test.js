import init from '.';

it('initialises reducers  ', () => {
    const mock = config => config.reducers = { test: 'test' }
    const config = init([mock]);
    expect(config.reducers.test).toBeDefined();
    expect(config.reducers.test).toEqual('test');
})