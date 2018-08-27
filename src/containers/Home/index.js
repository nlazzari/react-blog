import React from 'react'
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchPostsRequest } from './actions';
import { selectHomePosts } from './selectors';
import PostSummary from '../../components/PostSummary';
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
        const { id, title, subtitle, image, slug, author, created_at } = post;
        const { history } = this.props;
        return (
            <PostSummary
                id={id}
                title={title}
                subtitle={subtitle}
                image={image}
                slug={slug}
                author={author}
                createdAt={created_at}
                isFeature={isFeature}
                history={history}
            />
        );
    }

    render() {
        const { posts } = this.props;
        const {
            featurePost,
            firstRowPosts,
            secondRowPosts,
            remainingPosts,
        } = this.organizePostsByType(posts);

        return (<React.Fragment>
            {featurePost ?
                (<section className={classnames('section', styles.section)}>
                    <div className="container" key={`feature-post-key-${featurePost.id}`}>
                        { this.postSummary(featurePost, true) }
                    </div>
                </section>) : null}
            { this.gridRow(firstRowPosts) }
            { this.gridRow(secondRowPosts) }
            <section className="section">
                <div className="container">
                    {remainingPosts.map((post) => (
                       <React.Fragment key={`remaining-post-key-${post.id}`}>
                            {this.postSummary(post)}
                       </React.Fragment>))
                    }
                </div>
            </section>
        </React.Fragment>
        );
    }
}

Home.propTypes = {
    posts: PropTypes.object,
    fetchPosts: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => createStructuredSelector({
    posts: selectHomePosts(),
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