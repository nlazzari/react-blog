import React from 'react'
import PropTypes from 'prop-types';
import PostSummary from '../PostSummary';

export default function PostSummaryList({ postSummaries, history }) {
    return (
        <section className="section">
            <div className="container">
                {postSummaries && postSummaries.map((post) => {
                    const { id, title, subtitle, image, slug, categories, author, created_at } = post || {};
                    return (<React.Fragment key={`post-summary-list-key-${post.id}`}>
                        <PostSummary
                            id={id}
                            title={title}
                            subtitle={subtitle}
                            image={image}
                            slug={slug}
                            categories={categories}
                            author={author}
                            createdAt={created_at}
                            history={history}
                        />
                    </React.Fragment>);       
                })
                }
            </div>
        </section>
    );
}

PostSummaryList.propTypes = {
    postSummaries: PropTypes.array,
}
