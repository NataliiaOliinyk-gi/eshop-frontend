// export const selectAuthRequestData = store => {
//     const { loading, error, success } = store.auth;
//     return {
//         loading,
//         error,
//         success,
//     }
// }

import { createSelector } from "reselect";

const selectAuth = (store) => store.auth;

export const selectAuthRequestData = createSelector(
    [selectAuth],
    (auth) => ({
        loading: auth.loading,
        error: auth.error,
        success: auth.success,
    })
);

export const selectIsLogin = store => {
    const { token, user } = store.auth;
    return Boolean(token) && Boolean(user);
}