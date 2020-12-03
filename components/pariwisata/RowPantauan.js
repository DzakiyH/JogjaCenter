import React, { Component } from 'react';
import styles from './RowPantauan.module.css';

class RowPantauan extends Component {
    render() {
        return (
            <div className={styles.pantauanCctv}>
                <span><i className="fas fa-video"></i></span>
                <div>
                    <h3>Sebaran Lokasi Wisata</h3>
                    <button className="button">
                    <i className="fas fa-check"></i>Malioboro
                    </button>
                </div>
                <p>
                    Pemantauan CCTV dapat dilakukan secara langsung (live)
                    <br />maupun rekaman, Penghitungan jumlah kendaraan<br />dilakukan
                    secara real time.
                </p>
                <div className={styles.pantauanDropdown}>
                    <div className={styles.dropdown}>
                    <select id="location">
                        <option value="yogyakarta">Yogyakarta</option>
                        <option value="yogyakarta">yogyakarta</option>
                        <option value="yogyakarta">yogyakarta</option>
                        <option value="yogyakarta">yogyakarta</option>
                    </select>
                    </div>
                </div>
            </div>
        )
    }
}


export default RowPantauan;