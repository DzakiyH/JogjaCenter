import React, { Component } from 'react';
import styles from './TopProducts.module.css';

class TopProducts extends Component {
    render() {
        return (
            <div className={styles.topProduct}>
                <h4>Produk Unggulan</h4>
                <div className={styles.topRow}>
                    <h5 id="product">product</h5>
                    <h5 id="availability">availability</h5>
                    <h5 id="total">total</h5>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardBody}>
                    <img src="product.jpg" alt="" />
                    <span id="price">$29,192</span>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardBody}>
                    <img src="product.jpg" alt="" />
                    <span id="price">$29,192</span>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardBody}>
                    <img src="product.jpg" alt="" />
                    <span id="price">$29,192</span>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardBody}>
                    <img src="product.jpg" alt="" />
                    <span id="price">$29,192</span>
                    </div>
                </div>
                <div className={styles.cardButton}>
                    <button className="btn btn-primary">Show More</button>
                </div>
            </div>
        )
    }
}

export default TopProducts;