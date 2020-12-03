import React, { Component } from 'react';
import Layout from '../components/Layout';
import UmkmMap from '../components/ekonomi/UmkmMap';
import Trends from '../components/ekonomi/Trends';
import TopProducts from '../components/ekonomi/TopProducts';
import QuickDetail from '../components/ekonomi/QuickDetail';

class Ekonomi extends Component {
    render() {
        return (
            <Layout>
                <UmkmMap/>
                <Trends/>
                <div className="columns">
                    <div className="column">
                        <TopProducts/>
                    </div>
                    <div className="column">
                        <QuickDetail/>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Ekonomi;