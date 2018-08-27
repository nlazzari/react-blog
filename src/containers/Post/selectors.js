import { createSelector } from 'reselect';

const selectPostDomain = () => (state) => {
    return state.get('Post');
};

const selectPostData = () => createSelector(
    (_, props) => props && props.match.params.id,
    selectPostDomain(),
    (id, substate) => {
        return substate.getIn(['post', `post/${id}`]);
    }
);

const selectTitle = () => createSelector(
    selectPostData(),
    (substate) => {
        return substate && substate.get('title');
    }
);

const selectSubtitle = () => createSelector(
    selectPostData(),
    (substate) => {
        return substate && substate.get('subtitle');
    }
);

const selectBody = () => createSelector(
    selectPostData(),
    (substate) => {
        return substate && substate.get('body');
    }
);

const selectImage = () => createSelector(
    selectPostData(),
    (substate) => {
        return substate && substate.get('image');
    }
);

const selectAuthor = () => createSelector(
    selectPostData(),
    (substate) => {
        return substate && substate.get('author');
    }
);

const selectCreatedAt = () => createSelector(
    selectPostData(),
    (substate) => {
        return substate && substate.get('createdAt');
    }
);


export {
    selectTitle,
    selectSubtitle,
    selectBody,
    selectImage,
    selectAuthor,
    selectCreatedAt,
};
