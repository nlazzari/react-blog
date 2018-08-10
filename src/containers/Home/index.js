import React from 'react'
// import PropTypes from 'prop-types';
import posts from '../../data/starter-posts.json';
import PostSummary from '../../components/PostSummary';
import classnames from 'classnames';

import styles from './styles.module.css';

const featurePost = posts[0];
const firstRowPosts = posts.slice(1, 4);
const secondRowPosts = posts.slice(4, 7);
const remainingPosts = posts.slice(7);

const titleToKey = (title) => {
    const charArray = title.split(' ');
    const length = charArray.length;
    return `${charArray.join('')}${length}`;
};

export default function Home() {

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