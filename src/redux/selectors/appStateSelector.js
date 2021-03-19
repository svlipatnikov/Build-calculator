export const isAuthenticatedSelector = (state) => state.appState.isAuthenticated;
export const isLoadingSelector = (state) => state.appState.isLoading;
export const errorSelector = (store) => store.appState.error;
export const isErrorSelector = (store) => store.appState.error.isError;
