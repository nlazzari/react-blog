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


const titleToKey = (title) => {
    const charArray = title.split(' ');
    const length = charArray.length;
    return `${charArray.join('')}${length}`;
};

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.organizePostsByType = this.organizePostsByType.bind(this);
    }

    componentDidMount() {
        const { fetchPosts } = this.props;
        fetchPosts();
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
                    <div className="container" key={`post-key-${titleToKey(featurePost.title)}`}>
                        <PostSummary
                            title={featurePost.title}
                            subtitle={featurePost.subtitle}
                            image={featurePost.image}
                            isFeature
                        />
                    </div>
                </section>) : null}
            <section className="section">
                <div className="container">
                    <div className="columns">
                        {firstRowPosts.map((post) => (
                            <div className="column" key={`post-key-${titleToKey(post.title)}`}>
                                <PostSummary
                                    title={post.title}
                                    subtitle={post.subtitle}
                                    image={post.image}
                                />
                            </div>))
                        }
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="columns">
                        {secondRowPosts.map((post) => (
                            <div className="column" key={`post-key-${titleToKey(post.title)}`}>
                                <PostSummary
                                    title={post.title}
                                    subtitle={post.subtitle}
                                    image={post.image}
                                />
                            </div>))
                        }
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    {remainingPosts.map((post) => (
                        <PostSummary
                            key={`post-key-${titleToKey(post.title)}`}
                            title={post.title}
                            subtitle={post.subtitle}
                            image={post.image}
                        />))
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