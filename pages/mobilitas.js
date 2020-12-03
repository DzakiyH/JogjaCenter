import React, { Component } from 'react';
import Layout from '../components/Layout';
import MapCctv from '../components/mobilitas/MapCctv';
import DistribusiKendaraan from '../components/mobilitas/DistribusiKendaraan';
import UrbanHotspot from '../components/mobilitas/UrbanHotspot';
import MobilitasMassa from '../components/mobilitas/MobilitasMassa';
import TripHda from '../components/mobilitas/TripHda';

class Mobilitas extends Component {
    render() {
        return (
            <Layout>
                <MapCctv/>
                <DistribusiKendaraan/>
                <UrbanHotspot/>
                <MobilitasMassa/>
                <TripHda/>
            </Layout>
        )
    }
}

export default Mobilitas;