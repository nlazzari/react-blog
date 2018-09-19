import { createSelector } from 'reselect';

const selectCategoryDomain = () => (state) => {
    return state.get('Category');
};

const selectCategoryPosts = () => createSelector(
    selectCategoryDomain(),
    (substate) => {
        return substate.get('posts');
    }
);

const selectLoading = () => createSelector(
    selectCategoryDomain(),
    (substate) => {
        return substate.get('loading');
    }
);

export {
    selectCategoryPosts,
    selectLoading,
};
