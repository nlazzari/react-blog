import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './style.module.css';

export default function PostSummary({title, subtitle, image, isFeature}) {
    const featureClass = isFeature ? styles.postSummaryFeature : '';
    const imageStyles = {
        backgroundImage: `url(${image})`,
    };
    return (
<article className={classnames('card', styles.postSummary, featureClass)} >
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

PostSummary.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    isFeature: PropTypes.bool,
};