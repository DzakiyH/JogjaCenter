import React, { Component } from 'react';
import TopPost from './TopPost';
import styles from './TopUsers.module.css';

class TopUsers extends Component {
    render() {
        return (
            <div className={styles.topUsers}>
                <h3 >Top Users</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex consectetur ullam dolore. Ea a nobis sint pariatur modi exercitationem consectetur.</p>
                <div className='card' id={styles.active1, styles.card}>
                    <div className={styles.cardBody}>
                    <img src="photo-profile.png" alt="" />
                    <h5 className={styles.name}>David James</h5>
                    <h6 className={styles.date}>Jan 6</h6>
                    </div>
                </div>
                <div className='card' id={styles.active2, styles.card}>
                    <div className={styles.cardBody}>
                    <img src="photo-profile.png" alt="" />
                    <h5 className={styles.name}>David James</h5>
                    <h6 className={styles.date}>Jan 6</h6>
                    </div>
                </div>
                <div className="card" id={styles.card}>
                    <div className={styles.cardBody}>
                    <img src="photo-profile.png" alt="" />
                    <h5 className={styles.name}>David James</h5>
                    <h6 className={styles.date}>Jan 6</h6>
                    </div>
                </div>
                <div className='card' id={styles.active3, styles.card}>
                    <div className={styles.cardBody}>
                    <img src="photo-profile.png" alt="" />
                    <h5 className={styles.name}>David James</h5>
                    <h6 className={styles.date}>Jan 6</h6>
                    </div>
                </div>
                <div className='card' id={styles.active4, styles.card}>
                    <div className={styles.cardBody}>
                    <img src="photo-profile.png" alt="" />
                    <h5 className={styles.name}>David James</h5>
                    <h6 className={styles.date}>Jan 6</h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopUsers;