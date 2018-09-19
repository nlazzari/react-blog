import React from 'react'
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchPostsRequest } from './actions';
import { selectHomePosts, selectLoading } from './selectors';
import PostSummary from '../../components/PostSummary';
import PostSummaryList from '../../components/PostSummaryList';
import LoadingOverlay from '../../components/LoadingOverlay';
import classnames from 'classnames';

import styles from './styles.module.css';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.gridRow = this.gridRow.bind(this);
        this.organizePostsByType = this.organizePostsByType.bind(this);
        this.postSummary = this.postSummary.bind(this);
    }

    componentDidMount() {
        const { fetchPosts } = this.props;
        fetchPosts();
    }

    gridRow(posts) {
        return (
            <section className="section">
                <div className="container">
                    <div className="columns">
                        {posts.map((post) => (
                            <div className="column" key={`grid-row-post-key-${post.id}`}>
                                {this.postSummary(post)}
                            </div>))
                        }
                    </div>
                </div>
            </section>
        );
    }

    organizePostsByType(posts) {
        const allPosts = posts && posts.toJS();
        const postsByType = {
            featurePost: undefined,
            firstRowPosts: [],
            secondRowPosts: [],
            remainingPosts: [],
        };

        if (allPosts && allPosts.length) {
            Object.assign(postsByType, {
                featurePost: allPosts[0],
                firstRowPosts: allPosts.slice(1, 4),
                secondRowPosts: allPosts.slice(4, 7),
                remainingPosts: allPosts.slice(7),
            });
        }
        
        return postsByType;
    }

    postSummary(post, isFeature = false) {
        const { id, title, subtitle, image, slug, categories, author, created_at } = post;
        const { history } = this.props;
        return (
            <PostSummary
                id={id}
                title={title}
                subtitle={subtitle}
                image={image}
                slug={slug}
                categories={categories}
                author={author}
                createdAt={created_at}
                isFeature={isFeature}
                history={history}
            />
        );
    }

    render() {
        const { posts, loading, history } = this.props;
        const {
            featurePost,
            firstRowPosts,
            secondRowPosts,
            remainingPosts,
        } = this.organizePostsByType(posts);

        return (<React.Fragment>
            <LoadingOverlay loading={loading} />
            {featurePost ?
                (<section className={classnames('section', styles.section)}>
                    <div className="container" key={`feature-post-key-${featurePost.id}`}>
                        { this.postSummary(featurePost, true) }
                    </div>
                </section>) : null}
            { firstRowPosts ? this.gridRow(firstRowPosts) : null }
            { secondRowPosts ? this.gridRow(secondRowPosts) : null }
            { remainingPosts ? (<PostSummaryList postSummaries={remainingPosts} history={history} />) : null }
        </React.Fragment>
        );
    }
}

Home.propTypes = {
    posts: PropTypes.object,
    loading: PropTypes.bool,
    fetchPosts: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => createStructuredSelector({
    posts: selectHomePosts(),
    loading: selectLoading(),
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts() {
            dispatch(fetchPostsRequest());
        },
    };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withConnect,
)(Home);