import { createSelector } from 'reselect';

const selectHomeDomain = () => (state) => {
    return state.get('Home');
};

const selectHomePosts = () => createSelector(
    selectHomeDomain(),
    (substate) => {
        return substate.get('posts');
    }
);

export {
    selectHomePosts,
};
