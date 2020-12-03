import Head from 'next/head';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = props => {
    return (
        <div>
            <Head>
                <script src="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js"></script>
                <link href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"rel="stylesheet"/>

                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/>
                <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>

                <link rel="stylesheet" href="assets/fontawesome/css/all.css" />

                <script src="https://cdn.amcharts.com/lib/4/core.js"></script>
                <script src="https://cdn.amcharts.com/lib/4/charts.js"></script>
                <script src="https://cdn.amcharts.com/lib/4/themes/animated.js"></script>
                <script src="//cdn.amcharts.com/lib/4/themes/kelly.js"></script>
            </Head>
            <Navbar/>
            <div className="columns is-gapless">
                <div className="column is-narrow">
                    <Sidebar/>
                </div>
                <div className="column">
                    <div className="container is-fluid">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout;