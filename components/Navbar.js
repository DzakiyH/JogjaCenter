import React , { Component } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

class Bar extends Component {
    render() {
        return (
            <nav style={{ position: 'sticky', top: 0, zIndex: 2 }}>
                <div className={styles.navbar}>
                    <div className={styles.brand}>
                        <Link href="/"><a><img src="logo.png" alt="logo"/></a></Link>
                        <div className={styles.brandText}>
                            <h4>Jogja Center</h4>
                            <h6>Daerah Istimewa Yogyakarta</h6>
                        </div>
                    </div>
                    <div className={styles.userOption}>
                        <span id={styles.straightLine}></span>
                        <i className="fa fa-user"></i>
                        <div style={styles.dropdown}>
                            <select id={styles.location}>
                                <option value="user">Iwan</option>
                                <option value="user1">Iwan1</option>
                            </select>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Bar;