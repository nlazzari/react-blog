import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { faPlane, faHome, faCouch,  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { capitalize } from 'lodash';
import classnames from 'classnames';
import styles from './style.module.css';

export default function CategoryIcon({ category, showText, isLink, wrapperClass, iconClass, textClass }) {
    let icon;
    const categoryText = category.toLowerCase();
    switch (categoryText) {
        case 'travel':
            icon = faPlane;
            break;
        case 'homes':
            icon = faHome;
            break;
        case 'interiors':
            icon = faCouch;
            break;
        default:
            console.log('No icon for that category');
            break;
    }
    const categoryIcon = (<React.Fragment>
        <FontAwesomeIcon
            className={classnames(styles.icon, iconClass)}
            icon={icon}
        />
        <span className={textClass}>
            {showText ? capitalize(category) : ''}
        </span>
    </React.Fragment>);
    return (
        <div className={classnames(styles.wrapper, wrapperClass)}>
            { isLink ? (
                <Link to={`/category/${categoryText}`}>
                    {categoryIcon}
                </Link>
            ) : categoryIcon }
        </div>
    )
}

CategoryIcon.defaultProps = {
    showText: true,
    isLink: false,
}

CategoryIcon.propTypes = {
    category: PropTypes.string,
    showText: PropTypes.bool,
    isLink: PropTypes.bool,
    wrapperClass: PropTypes.string,
    iconClass: PropTypes.string,
    textClass: PropTypes.string,
};
