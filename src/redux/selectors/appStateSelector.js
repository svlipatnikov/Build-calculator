export const isAuthenticatedSelector = (store) => store.appState.isAuthenticated;
export const isLoadingSelector = (store) => store.appState.isLoading;
export const errorSelector = (store) => store.appState.error;
export const isErrorSelector = (store) => store.appState.error.isError;
