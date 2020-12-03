import React, { Component } from 'react';
import styles from './Persebaran.module.css';

class Persebaran extends Component {
    componentDidMount() {
        var mymap = L.map('map-lokasi').setView([-7.803249, 110.3398253], 13);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoibWF1bGFmYXoiLCJhIjoiY2tidThpcmlmMGg5czJ5bGMycXNqeTFlcyJ9.UnR0a4GKASVX7eqR7JUyEg'
        }).addTo(mymap);

        var icon = L.divIcon({
            className: 'custom-div-icon',
            html: "<div style='background-color:#F0193D;' class='marker-pin'></div><i class='fas fa-camera awesome'>",
            iconSize: [30, 42],
            iconAnchor: [15, 42]
        });

        var marker = L.marker([-7.749224, 110.3599366], {
        icon: icon
        }).addTo(mymap);

        icon = L.divIcon({
            className: 'custom-div-icon',
            html: "<div style='background-color:#F0193D;' class='marker-pin'></div><i class='fas fa-camera awesome'>",
            iconSize: [30, 42],
            iconAnchor: [15, 42]
        });

        var marker = L.marker([-7.7833196, 110.4298239], {
        icon: icon
        }).addTo(mymap);
    }

    render() {
        return (
            <div style={{ padding: '10px 10px' }}>
                    <div class={styles.persebaranText}>
                    <span><i class="fas fa-camera-retro"></i></span>
                    <h3>Sebaran Lokasi Wisata</h3>
                    <p>
                        Data sebaran lokasi wisata diambil berdasarkan data
                        aktivitas
                        <br />sosial media dan akan diperbarui setiap hari
                    </p>
                    <div class={styles.persebaranDropdown}>
                        <div class={styles.dropdown}>
                        <select id="location">
                            <option value="yogyakarta">Yogyakarta</option>
                            <option value="yogyakarta">yogyakarta</option>
                            <option value="yogyakarta">yogyakarta</option>
                            <option value="yogyakarta">yogyakarta</option>
                        </select>
                        </div>
                        <div class={styles.dropdown}>
                        <select id="location">
                            <option value="30">Last 30 days</option>
                            <option value="30">Last 30 days</option>
                            <option value="30">Last 30 days</option>
                            <option value="30">Last 30 days</option>
                        </select>
                        </div>
                    </div>
                    </div>
                <div class="columns">
                    <div class="column" style={{ minWidth:'70%', padding:0 }}>
                    <div id="map-lokasi" style={{ width: '100%', height: '100%' }}></div>
                    </div>
                    <div class="column" style={{ maxWidth: '30%' }}>
                    <div className={styles.socialMedia}>
                        <div class='card' id={styles.card}>
                        <div class={styles.cardBody}>
                            <div class={styles.cardName}>
                            <span class={styles.twitter}
                                ><i class="fab fa-twitter"></i
                            ></span>
                            <h5>twitter</h5>
                            </div>
                            <div class={styles.cardValue}>
                            <div class={styles.value}>
                                <div>
                                <h5>246K</h5>
                                <span>&#8595;13.8%</span>
                                </div>
                                <img src="Bar-chart.png" alt=""/>
                            </div>
                            <div class="graph">
                                
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class='card' id={styles.card}>
                        <div class={styles.cardBody}>
                            <div class={styles.cardName}>
                            <span class={styles.twitter}
                                ><i class="fab fa-twitter"></i
                            ></span>
                            <h5>twitter</h5>
                            </div>
                            <div class={styles.cardValue}>
                            <div class={styles.value}>
                                <div>
                                <h5>246K</h5>
                                <span>&#8595;13.8%</span>
                                </div>
                                <img src="Bar-chart.png" alt=""/>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class='card' id={styles.card}>
                        <div class={styles.cardBody}>
                            <div class={styles.cardName}>
                            <span class={styles.twitter}
                                ><i class="fab fa-twitter"></i
                            ></span>
                            <h5>twitter</h5>
                            </div>
                            <div class={styles.cardValue}>
                            <div class={styles.value}>
                                <div>
                                <h5>246K</h5>
                                <span>&#8595;13.8%</span>
                                </div>
                                <img src="Bar-chart.png" alt=""/>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class='card' id={styles.card}>
                        <div class={styles.cardBody}>
                            <div class={styles.cardName}>
                            <span class={styles.twitter}
                                ><i class="fab fa-twitter"></i
                            ></span>
                            <h5>twitter</h5>
                            </div>
                            <div class={styles.cardValue}>
                            <div class={styles.value}>
                                <div>
                                <h5>246K</h5>
                                <span>&#8595;13.8%</span>
                                </div>
                                <img src="Bar-chart.png" alt=""/>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="card">
                        <div class={styles.cardBody}>
                            <h6>Badge</h6>
                            <div class={styles.badges}>
                            <div class={styles.badge}><span></span></div>
                            <div class={styles.badge}><span></span></div>
                            <div class={styles.badge}><span></span></div>
                            <div class={styles.badge}><span></span></div>
                            </div>
                        </div>
                        </div>
                        <div class={styles.buttonSosmed}>
                        <button type="button" class="button" id={styles.btnMapping}>
                            More Details
                        </button>
                        <button type="button" class="button" id={styles.btnDetails}>
                            Mapping
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Persebaran;