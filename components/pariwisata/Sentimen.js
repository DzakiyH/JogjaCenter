import React, { Component } from 'react';
import styles from './Sentimen.module.css';

class Sentimen extends Component {
    render() {
        return (
            <div>
                <div class={styles.row1}>
                <span><i class="fas fa-smile"></i></span>
                <h4>Sentimen public terhadap lokasi wisata</h4>
                <div class={styles.dropdown}>
                    <select id="location">
                    <option value="yogyakarta">Yogyakarta</option>
                    <option value="yogyakarta">yogyakarta</option>
                    <option value="yogyakarta">yogyakarta</option>
                    <option value="yogyakarta">yogyakarta</option>
                    </select>
                    <select id="time">
                    <option value="30">Last 30 days</option>
                    <option value="30">Last 30 days</option>
                    <option value="30">Last 30 days</option>
                    <option value="30">Last 30 days</option>
                    </select>
                </div>
                </div>
                <div class={styles.row2}>
                <button class="button is-active"><i class="fas fa-check"></i>Malioboro</button>
                <button class="button">Tamansari</button>
                <button class="button">Kaliurang</button>
                <button class="button">Keraton</button>
                <button class="button">Titik Nol</button>
                </div>
                <div class={styles.row3}>
                <div class={styles.bar1}>56% positif</div>
                <div class={styles.bar2}>34% negatif</div>
                <div class={styles.bar3}>10% netral</div>
                </div>
            </div>
        )
    }
}

export default Sentimen;