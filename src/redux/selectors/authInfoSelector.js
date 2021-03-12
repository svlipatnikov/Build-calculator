export const authInfoSelector = (state) => state.authInfo;

export const isAuthenticatedSelector = (state) => authInfoSelector(state).isAuthenticated;
