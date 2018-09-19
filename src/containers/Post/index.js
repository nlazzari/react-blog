import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchPostRequest } from './actions';
import {
    selectTitle,
    selectSubtitle,
    selectBody,
    selectImage,
    selectCategories,
    selectAuthor,
    selectCreatedAt,
} from './selectors';
import CategoryIcon from '../../components/CategoryIcon';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import styles from './style.module.css';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.categoryList = this.categoryList.bind(this);
        this.date = this.date.bind(this);
        this.imageStyles = this.imageStyles.bind(this);
    }

    componentDidMount() {
        const { fetchPost } = this.props;
        fetchPost({ ...this.props.location.state, id: this.props.match.params.id });
        window.scrollTo(0, 0);
    }

    categoryList() {
        const { categories } = this.props;
        const categoryList = categories && categories.toJS();
        return categoryList && categoryList.map((category) => (
            <CategoryIcon
                key={`category-${category}`}
                category={category}
                isLink
            />
        ));
    }

    date() {
        const { createdAt } = this.props;
        return moment(createdAt).format('MMMM Do YYYY');
    }

    imageStyles() {
        const { image } = this.props;
        return {
            backgroundImage: `url(${image})`,
        };
    }

    render() {
        const { title, subtitle, body, author } = this.props;
        const authorState = author && author.toJS();
        const { first_name: firstName, last_name: lastName } = authorState || {};
        return (
            <section className="section">
                <div className="container">
                    <article>
                        <div className={styles.categoryListWrapper}>
                            { this.categoryList() }
                        </div>
                        <h2 className={styles.title} >
                            {title}
                        </h2>
                        <h3 className={styles.subtitle} >
                            {subtitle}
                        </h3>
                        <h4 className={styles.authorContainer}>
                            <span>
                                {`${firstName} ${lastName} - `}
                            </span>
                            <span>
                                {this.date()
                            }</span>
                        </h4>
                        <div style={this.imageStyles()} className={styles.image} ></div>
                        <div className={styles.body}>
                            <ReactMarkdown source={body} />
                        </div>
                    </article>
                </div>
            </section>       
        );
    }
}

Post.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    body: PropTypes.string,
    image: PropTypes.string,
    categories: PropTypes.object,
    author: PropTypes.object,
    fetchPost: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => createStructuredSelector({
    title: selectTitle(),
    subtitle: selectSubtitle(),
    body: selectBody(),
    image: selectImage(),
    categories: selectCategories(),
    author: selectAuthor(),
    createdAt: selectCreatedAt(),
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPost(data) {
            dispatch(fetchPostRequest(data));
        },
    };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withConnect,
)(Post);