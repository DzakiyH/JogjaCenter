import React, { Component } from 'react';
import styles from './UmkmMap.module.css';

class UmkmMap extends Component {
    render() {
        return (
            <div className={styles.umkm}>
                <h4>Data analytics - Ekonomi</h4>
                <div className={styles.dropdown}>
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
                <div id="map-umkm" style={{ height: 500 }}></div>
            </div>
        )
    }

    componentDidMount() {
        var mymap = L.map('map-umkm').setView([-7.803249, 110.3398253], 13);
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
            html: "<div style='background-color:#F0193D;' class='marker-pin'></div><i class='fas fa-shopping-cart awesome'>",
            iconSize: [30, 42],
            iconAnchor: [15, 42]
        });

        var marker = L.marker([-7.749224, 110.3599366], {
        icon: icon
        }).addTo(mymap);

        icon = L.divIcon({
            className: 'custom-div-icon',
            html: "<div style='background-color:#F0193D;' class='marker-pin'></div><i class='fas fa-shopping-cart awesome'>",
            iconSize: [30, 42],
            iconAnchor: [15, 42]
        });

        var marker = L.marker([-7.7833196, 110.4298239], {
        icon: icon
        }).addTo(mymap);
    }
}

export default UmkmMap;