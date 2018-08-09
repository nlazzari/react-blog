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

export default function Home() {
   
    return ( <React.Fragment>
{ featurePost ?
    (<section class={classnames('section', styles.section)}>
        <div class="container">
            <PostSummary
                title={featurePost.title}
                subtitle={featurePost.subtitle}
                image={featurePost.image}
                isFeature
            />
        </div>
    </section>) : null}
<section class="section">
  <div class="container">
    <div class="columns">
        { firstRowPosts.map((post) => (
            <div class="column">
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
<section class="section">
    <div class="container">
        <div class="columns">
            { secondRowPosts.map((post) => (
                <div class="column">
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
<section class="section">
  <div class="container">
    { remainingPosts.map((post) => (
       <PostSummary
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