import React, { Component } from 'react';
import Layout from '../components/Layout';
import Kepadatan from '../components/pariwisata/Kepadatan';
import Persebaran from '../components/pariwisata/Persebaran';
import Sentimen from '../components/pariwisata/Sentimen';
import TopPost from '../components/pariwisata/TopPost';
import TopUsers from '../components/pariwisata/TopUsers';
import RowPantauan from '../components/pariwisata/RowPantauan';
import PantauanCctv from '../components/pariwisata/PantauanCctv';
import LaluLintas from '../components/pariwisata/LaluLintas';

class Pariwisata extends Component {
    render() {
        return (
            <Layout>
                <Kepadatan/>
                <Persebaran/>
                <Sentimen/>
                <div className="columns">
                    <div className="col">
                        <TopPost/>
                    </div>
                    <div className="column">
                        <TopUsers/>
                    </div>
                </div>
                <RowPantauan/>
                <PantauanCctv/>
                <LaluLintas/>
            </Layout>
        )
    }
}

export default Pariwisata;