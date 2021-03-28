/* eslint-disable */
import { setAuthFlag, setLoadingFlag, setError, clearError } from 'redux/actions/appStateAction';
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

  it('should return an Object', () => {
    expect(newState).toBeInstanceOf(Object);
  });

  it('should return an Object with isAuthenticated field', () => {
    expect(newState.isAuthenticated).toBeDefined();
  });

  it('should return an Object with isLoading field', () => {
    expect(newState.isLoading).toBeDefined();
  });

  it('should return an Object with error object field', () => {
    expect(newState.error).toBeDefined();
    expect(newState.error).toBeInstanceOf(Object);
  });

  it('should retutn an error object with isError, isShown, statusCode, statusText field', () => {
    expect(newState.error.isError).toBeDefined();
    expect(newState.error.isShown).toBeDefined();
    expect(newState.error.statusCode).toBeDefined();
    expect(newState.error.statusText).toBeDefined();
  });
});

describe('setAuthFlag action', () => {
  it('should return truthy isAuthenticated flag when access_token is defined', () => {
    const action = { type: '' };
    localStorage.setItem('access_token', 'test data');
    const initState = { isAuthenticated: !!localStorage.getItem('access_token') };
    const newState = appStateReducer(initState, action);
    expect(newState.isAuthenticated).toBeTruthy();
  });

  it('should return falsy isAuthenticated flag when access_token is undefined', () => {
    const action = { type: '' };
    localStorage.removeItem('access_token');
    const initState = { isAuthenticated: !!localStorage.getItem('access_token') };
    const newState = appStateReducer(initState, action);
    expect(newState.isAuthenticated).toBeFalsy();
  });

  it('should set truthy isAuthenticated flag', () => {
    const action = setAuthFlag;
    const initState = { isAuthenticated: false };
    const newState = appStateReducer(initState, action(true));
    expect(newState.isAuthenticated).toBeTruthy();
  });

  it('should set flasy isAuthenticated flag', () => {
    const action = setAuthFlag;
    const initState = { isAuthenticated: true };
    const newState = appStateReducer(initState, action(false));
    expect(newState.isAuthenticated).toBeFalsy();
  });
});

describe('setLoadingFlag action', () => {
  const action = setLoadingFlag;

  it('should set truthy isLoading flag', () => {
    const initState = { isLoading: false };
    const newState = appStateReducer(initState, action(true));
    expect(newState.isLoading).toBeTruthy();
  });

  it('should set flasy isLoading flag', () => {
    const initState = { isLoading: true };
    const newState = appStateReducer(initState, action(false));
    expect(newState.isLoading).toBeFalsy();
  });
});

describe('setError action', () => {
  const action = setError;
  const initState = {};

  it('should always return isError flag in truthy state', () => {
    const newState = appStateReducer(initState, action(456, 'test2', false));
    expect(newState.error.isError).toBeTruthy();
  });

  it('should return isShown flag in truthy state by default', () => {
    const newState = appStateReducer(initState, action(789, 'test3'));
    expect(newState.error.isShown).toBeTruthy();
  });

  it('should redefined isShown flag to flasy state', () => {
    const newState = appStateReducer(initState, action(789, 'test3', false));
    expect(newState.error.isShown).toBeFalsy();
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

describe('clearError action', () => {
  const action = clearError;

  it('should always set isError flag to flasy state', () => {
    const initState = {
      error: {
        isError: true,
      },
    };
    const newState = appStateReducer(initState, action());
    expect(newState.error.isError).toBeFalsy();
  });
});
