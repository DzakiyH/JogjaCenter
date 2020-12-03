import React, { Component } from 'react';
import styles from './MapCctv.module.css';

class MapCctv extends Component {
    componentDidMount() {
        var mymap = L.map('mapCctv').setView([-7.803249, 110.3398253], 13);
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
            html: "<div style='background-color:#F0193D;' class='marker-pin'></div><i class='fas fa-video awesome'>",
            iconSize: [30, 42],
            iconAnchor: [15, 42]
        });

        var marker = L.marker([-7.749224, 110.3599366], {
        icon: icon
        }).addTo(mymap);

        icon = L.divIcon({
            className: 'custom-div-icon',
            html: "<div style='background-color:#F0193D;' class='marker-pin'></div><i class='fas fa-video awesome'>",
            iconSize: [30, 42],
            iconAnchor: [15, 42]
        });

        var marker = L.marker([-7.7833196, 110.4298239], {
        icon: icon
        }).addTo(mymap);
    }

    render() {
        return (
            <div className={styles.cctv}>
                <h4>Data Analytics - Mobilitas</h4>
                <div className={styles.mapCctv} id='mapCctv'></div>
            </div>
        )
    }
}

export default MapCctv;