import React, { Component } from 'react';
import styles from './Trends.module.css';

class Trends extends Component {
    render() {
        return (
            <div className={styles.trends}>
                <h3>Trends</h3>
                <div className={styles.dropdown}>
                <select id="time">
                    <option value="30">Last 30 days</option>
                    <option value="30">Last 30 days</option>
                    <option value="30">Last 30 days</option>
                    <option value="30">Last 30 days</option>
                </select>
                </div>
                <div id="line-chart" style={{ height: 500 }}></div>
            </div>
        )
    }

    componentDidMount() {
        var chart = am4core.create('line-chart', am4charts.XYChart);

        // Add data
        chart.data = [
            {
            country: 'Lithuania',
            litres: 501.9,
            units: 250,
            },
            {
            country: 'Czech Republic',
            litres: 301.9,
            units: 222,
            },
            {
            country: 'Ireland',
            litres: 201.1,
            units: 170,
            },
            {
            country: 'Germany',
            litres: 165.8,
            units: 122,
            },
            {
            country: 'Australia',
            litres: 139.9,
            units: 99,
            },
            {
            country: 'Austria',
            litres: 128.3,
            units: 85,
            },
            {
            country: 'UK',
            litres: 99,
            units: 93,
            },
            {
            country: 'Belgium',
            litres: 60,
            units: 50,
            },
            {
            country: 'The Netherlands',
            litres: 50,
            units: 42,
            },
        ];

        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = 'country';

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        // Create series
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = 'litres';
        series.dataFields.categoryX = 'country';
        series.name = 'Sales';
        series.columns.template.tooltipText =
            'Series: {name}\nCategory: {categoryX}\nValue: {valueY}';
        series.columns.template.fill = am4core.color('#F0F2F8');
        series.columns.template.stroke = am4core.color("#707070");

        var series2 = chart.series.push(new am4charts.LineSeries());
        series2.name = 'Units';
        series2.stroke = am4core.color('#A3A0FB');
        series2.strokeWidth = 3;
        series2.dataFields.valueY = 'units';
        series2.dataFields.categoryX = 'country';

        chart.legend = new am4charts.Legend();
        chart.legend.position = "top";
        chart.legend.contentAlign = "left";
        chart.legend.marginBottom = 20;
    }

    componentWillUnmount() {
        if(this.chart) {
            this.chart.dispose();
        }
    }
}

export default Trends