import React, { Component } from 'react';
import styles from './UrbanHotspot.module.css';

class UrbanHotspot extends Component {
    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZHpha2l5IiwiYSI6ImNrZ2s5aGh3YzAwYnIyc3AweDZiMGwyemwifQ.hredRm5Df6C2eBu0HULz_w';
        var map = new mapboxgl.Map({
        container: 'map-urban', // container element id
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [110.3748 , -7.7875], // initial map center in [lon, lat]
        zoom: 11
        });

        map.on('load', function() {
            map.addSource("urban", {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "properties":{
                            "total": "41726"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [110.38732051849365,-7.787959010803244]
                        }
                    },
                        {
                        "type": "Feature",
                        "properties": {
                            "total": "623721"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                            110.37384510040283,
                            -7.787873971779246
                            ]
                        }
                        },
                        {
                        "type": "Feature",
                        "properties": {
                            "total": "66381"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                            110.39018511772154,
                            -7.834355849028364
                            ]
                        }
                        },
                        {
                        "type": "Feature",
                        "properties": {
                            "total": "668381"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                            110.36540150642395,
                            -7.7965159743002665
                            ]
                        }
                        }
                    ]              
                }
            });

            map.addLayer({
                "id": "circle_hotspot",
                "type": "circle",
                "source": "urban",
                "paint": {
                "circle-radius": {
                    stops: [
                        [0, 15],
                        [20, 300]
                    ],
                    base: 2
                },
                "circle-color": "#b06b83",
                "circle-opacity": 0.9
                }
            });

            map.addLayer({
                "id": "count_hotspot",
                "type": "symbol",
                "source": "urban",
                "layout":{
                    "text-field": ["get", "total"],
                    "text-size": 10,            },
                "paint":{
                    "text-color": "#ffffff"
                }
            });
        }),
            map.on("click", "circle_hotspot", function (e) {
                var coordinates = e.features[0].geometry.coordinates.slice();
                var description = e.features[0].properties.description;
                
                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                
                new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML("Kepadatan: " + description)
                .addTo(map);
                });
                
                // Change the cursor to a pointer when the mouse is over the places layer.
                map.on("mouseenter", "circle_hotspot", function () {
                map.getCanvas().style.cursor = "pointer";
                });
                
                // Change it back to a pointer when it leaves.
                map.on("mouseleave", "circle_hotspot", function () {
                map.getCanvas().style.cursor = '';
                });
        }

        render() {
            return (
                <div className={styles.urban}>
                    <div className={styles.urbanText}>
                <span><i className="fas fa-broadcast-tower"></i></span>
                <h3>Urban Hotspot</h3>
                <p>
                    Data kepadatan penduduk didapat dari analisis mobilitas
                    <br />massa yang dilacak melalui operator seluler
                </p>
                <button className="btn">
                    <i className="fas fa-tablet"></i>telco
                </button>
                </div>
                <div id="map-urban" style={{ height:500 }}></div>
                </div>
            )
        }
}

export default UrbanHotspot;