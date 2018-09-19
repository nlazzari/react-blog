import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './style.module.css';

export default class PostSummary extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { history, id, title, subtitle, image, slug, categories, author, createdAt } = this.props;
        const state = { id, title, subtitle, image, slug, categories, author, createdAt };
        history.push(`/post/${id}/${slug}`, state);
    }

    render() {
        const { title, subtitle, image, isFeature } = this.props;
        const featureClass = isFeature ? styles.postSummaryFeature : '';
        const imageStyles = {
            backgroundImage: `url(${image})`,
        };
        return (
            <article
                className={classnames('card', styles.postSummary, featureClass)}
                onClick={this.handleClick}
            >
                <div className={classnames('card-content', styles.cardContent)}>
                    <div className={classnames(styles.titleContainer)}>
                        <p className={classnames('title', styles.title)}>
                            <span>
                                {title}
                            </span>
                        </p>
                        <p className={classnames('subtitle', styles.subtitle)}>
                            <span>
                                {subtitle}
                            </span>
                        </p>
                    </div>
                </div>
                <img className={classnames(styles.background)}
                    style={imageStyles}
                    alt=''
                />
            </article>
        );
    }
}

PostSummary.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    slug: PropTypes.string,
    categories: PropTypes.array,
    author: PropTypes.object,
    createdAt: PropTypes.string,
    isFeature: PropTypes.bool,
};