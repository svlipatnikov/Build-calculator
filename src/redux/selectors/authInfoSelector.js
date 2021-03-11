export const authInfoSelector = (state) => state.authInfo;

export const authFlagSelector = (state) => authInfoSelector(state).isAuth;
