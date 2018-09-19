import React from 'react'
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchCategoryPostsRequest } from './actions';
import { selectCategoryPosts, selectLoading } from './selectors';
import PostSummaryList from '../../components/PostSummaryList';
import CategoryIcon from '../../components/CategoryIcon';
import LoadingOverlay from '../../components/LoadingOverlay';
import styles from './style.module.css';

class Category extends React.Component {
    componentDidMount() {
        const { fetchPosts, match: { params: { category } } } = this.props;
        fetchPosts(category);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.category !== prevProps.match.params.category) {
            const { fetchPosts, match: { params: { category } } } = this.props;
            fetchPosts(category);
        }
    }

    render() {
        const { posts, loading, history, match: { params: { category } } } = this.props;
        const categoryPosts = posts && posts.toJS();
        return (
           <React.Fragment>
                <LoadingOverlay loading={loading} />
                <section className="section">
                    <div className="container">
                        <h2 className={styles.title} >
                            <CategoryIcon category={category} showText />
                        </h2>
                    </div>
                </section>
                {categoryPosts ? (<PostSummaryList postSummaries={categoryPosts} history={history} />) : null}
           </React.Fragment>
        );
    }
}

Category.propTypes = {
    posts: PropTypes.array,
    loading: PropTypes.bool,
    fetchPosts: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => createStructuredSelector({
    posts: selectCategoryPosts(),
    loading: selectLoading(),
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts(category) {
            dispatch(fetchCategoryPostsRequest(category));
        },
    };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withConnect,
)(Category);
