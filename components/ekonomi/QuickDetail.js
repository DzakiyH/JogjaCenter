import React, { Component } from 'react';
import styles from './QuickDetail.module.css';

class QuickDetail extends Component {
    render() {
        return (
            <div className={styles.quickDetail}>
                <h6>Quick Detail</h6>
                <div className={styles.card}>
                    <div className={styles.cardBody}>
                    <div className={styles.detailIcon}><i className="fas fa-user-plus">  </i></div>
                    <span>290 New Customers</span>
                    <span className={styles.time}>Last 24 Hours</span>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardBody}>
                    <div className={styles.detailIcon}><i className="fas fa-user-plus">  </i></div>
                    <span>290 New Customers</span>
                    <span className={styles.time}>Last 24 Hours</span>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardBody}>
                    <div className={styles.detailIcon}><i className="fas fa-user-plus">  </i></div>
                    <span>290 New Customers</span>
                    <span className={styles.time}>Last 24 Hours</span>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardBody}>
                    <div className={styles.detailIcon}><i className="fas fa-user-plus">  </i></div>
                    <span>290 New Customers</span>
                    <span className={styles.time}>Last 24 Hours</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuickDetail;