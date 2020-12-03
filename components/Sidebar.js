import React from 'react';
import styles from './Sidebar.module.css';
import Link from 'next/link';

const Sidebar = () => {
    return (
            <div className={styles.sidebar}>
                <div className={styles.sidebarItems}>
                    <Link href="/mobilitas"><a><i className="fa fa-th-large"></i></a></Link>
                    <Link href="/ekonomi"><a><i className="fas fa-map-marked-alt"></i></a></Link>
                    <Link href="/pariwisata"><a><i className="fa fa-thumbs-up"></i></a></Link>
                </div>
            </div>
    )
}

export default Sidebar;