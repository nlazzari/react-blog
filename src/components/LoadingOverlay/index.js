import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';
import styles from './style.module.css';

export default class LoadingOverlay extends React.Component {
    render() {
        const { loading } = this.props;
        return (
            loading ? (
                <div className={styles.wrapper} >
                    <div className={styles.loading}>
                        <Spinner
                            name='ball-grid-pulse'
                            className={styles.spinner}
                        />
                    </div>
                </div>
            ) : null 
        );
    }
}

LoadingOverlay.propTypes = {
    loading: PropTypes.bool,
};
