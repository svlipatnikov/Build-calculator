/* eslint-disable */
import { setAuthFlag, setLoadingFlag, setError } from 'redux/actions/appStateAction';
import appStateReducer from '../appStateReducer';

describe('appStateReducer', () => {
  const initState = {
    isAuthenticated: !!localStorage.getItem('access_token'),
    isLoading: false,
    error: {
      isError: false,
      isShown: false,
      statusCode: null,
      statusText: '',
    },
  };
  const action = { type: '' };
  const newState = appStateReducer(initState, action);

  it('should be defined', () => {
    expect(newState).toBeDefined();
  });

  it('should return an new state Object', () => {
    expect(newState).toBeInstanceOf(Object);
  });

  it('should return Object with isAuthenticated field', () => {
    expect(newState.isAuthenticated).toBeDefined();
  });

  it('should return Object with isLoading field', () => {
    expect(newState.isLoading).toBeDefined();
  });

  it('should return Object with error object field', () => {
    expect(newState.error).toBeDefined();
    expect(newState.error).toBeInstanceOf(Object);
  });
});

describe('setAuthFlag action', () => {
  const action = setAuthFlag;

  it('should set truthy isAuthenticated flag', () => {
    const initState = { isAuthenticated: false };
    const newState = appStateReducer(initState, action(true));
    expect(newState.isAuthenticated).toBeTruthy;
  });

  it('should set truthy flasy isAuthenticated flag', () => {
    const initState = { isAuthenticated: true };
    const newState = appStateReducer(initState, action(false));
    expect(newState.isAuthenticated).toBeFalsy;
  });
});

describe('setLoadingFlag action', () => {
  const action = setLoadingFlag;

  it('should set truthy isLoading flag', () => {
    const initState = { isLoading: false };
    const newState = appStateReducer(initState, action(true));
    expect(newState.isLoading).toBeTruthy;
  });

  it('should set truthy flasy isLoading flag', () => {
    const initState = { isLoading: true };
    const newState = appStateReducer(initState, action(false));
    expect(newState.isLoading).toBeFalsy;
  });
});

describe('setError action', () => {
  const action = setError;
  const initState = {};

  it('should have isError, isShown, statusCode, statusText field', () => {
    const newState = appStateReducer(initState, action(123, 'test', false));
    expect(newState.error.isError).toBeDefined();
    expect(newState.error.isShown).toBeDefined();
    expect(newState.error.statusCode).toBeDefined();
    expect(newState.error.statusText).toBeDefined();
  });

  it('should always return isError truthy state', () => {
    const newState = appStateReducer(initState, action(456, 'test2', false));
    expect(newState.error.isError).toBeTruthy;
  });

  it('should return default isShown truthy state', () => {
    const newState = appStateReducer(initState, action(789, 'test3'));
    expect(newState.error.isShown).toBeTruthy;
  });

  it('should return redefined isShown to flasy state', () => {
    const newState = appStateReducer(initState, action(789, 'test3', false));
    expect(newState.error.isShown).toBeFalsy;
  });

  it('should return expected statusCode value', () => {
    const newState = appStateReducer(initState, action(4, 'test4'));
    expect(newState.error.statusCode).toBe(4);
  });

  it('should return expected statusText value', () => {
    const newState = appStateReducer(initState, action(4, 'test status text'));
    expect(newState.error.statusText).toBe('test status text');
  });
});
