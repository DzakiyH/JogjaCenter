import React, { Component } from 'react';
import styles from './TripHda.module.css';

class TripHda extends Component {
    render() {
        return (
            <div className='columns' id={styles.tripHda}>
                <div className="column">
                <div className={styles.tripText}>
                    <span><i className="fas fa-bus"></i></span>
                <h4>Trip Production and Trip Attraction</h4>
                </div>
                <div id="chart-column" style={{ width: '100%', height: 500 }}></div>
                </div>
                <div className="column">
                <div className={styles.hdaText}>
                    <span><i className="fas fa-bus"></i></span>
                <h4>Heatmap HDA Transjogja 2019</h4>
                </div>
                <div id="heatmap-hda" style={{ width: '100%', height: 500 }}></div>
          </div>
            </div>
        )
    }

    componentDidMount() {
        this.columnChart();
        this.hdaHeatMap();
    }

    componentWillUnmount() {
        if(this.chart) {
            this.chart.dispose();
        }
    }

    columnChart() {
        am4core.useTheme(am4themes_animated);
        am4core.useTheme(am4themes_kelly);

        // Create chart instance
        var chart = am4core.create('chart-column', am4charts.XYChart);

        // Add data
        chart.data = [
            {
            country: 'Lithuania',
            research: 501.9,
            marketing: 250,
            },
            {
            country: 'Czech Republic',
            research: 301.9,
            marketing: 222,
            },
            {
            country: 'Ireland',
            research: 201.1,
            marketing: 170,
            },
            {
            country: 'Germany',
            research: 165.8,
            marketing: 122,
            },
            {
            country: 'Australia',
            research: 139.9,
            marketing: 99,
            },
            {
            country: 'Austria',
            research: 128.3,
            marketing: 85,
            },
            {
            country: 'UK',
            research: 99,
            marketing: 93,
            },
            {
            country: 'Belgium',
            research: 60,
            marketing: 50,
            },
            {
            country: 'The Netherlands',
            research: 50,
            marketing: 42,
            },
        ];

        // Create axes
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = 'country';
        categoryAxis.title.text = 'Local country offices';
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 20;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = 'Expenditure (M)';

        // Create series
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = 'research';
        series.dataFields.categoryX = 'country';
        series.name = 'Research';
        series.tooltipText = '{name}: [bold]{valueY}[/]';
        // This has no effect
        // series.stacked = true;

        var series2 = chart.series.push(new am4charts.ColumnSeries());
        series2.dataFields.valueY = 'marketing';
        series2.dataFields.categoryX = 'country';
        series2.name = 'Marketing';
        series2.tooltipText = '{name}: [bold]{valueY}[/]';
        // Do not try to stack on top of previous series
        // series2.stacked = true;

        // Add cursor
        chart.cursor = new am4charts.XYCursor();

        // Add legend
        chart.legend = new am4charts.Legend();
        chart.legend.position = 'right';
        chart.legend.valign = "top";
    }

    hdaHeatMap() {
        // Apply chart themes
        am4core.useTheme(am4themes_animated);

        var chart = am4core.create('heatmap-hda', am4charts.XYChart);
        chart.maskBullets = false;

        var xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        var yAxis = chart.yAxes.push(new am4charts.CategoryAxis());

        xAxis.dataFields.category = 'hour';
        yAxis.dataFields.category = 'weekday';

        xAxis.renderer.grid.template.disabled = true;
        xAxis.renderer.minGridDistance = 40;

        yAxis.renderer.grid.template.disabled = true;
        yAxis.renderer.inversed = true;
        yAxis.renderer.minGridDistance = 30;

        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryX = 'hour';
        series.dataFields.categoryY = 'weekday';
        series.dataFields.value = 'value';
        series.sequencedInterpolation = true;
        series.defaultState.transitionDuration = 3000;
        series.columns.template.width = am4core.percent(100);
        series.columns.template.height = am4core.percent(100);

        series.heatRules.push({
            target: series.columns.template,
            property: 'fill',
            min: am4core.color('#ffffff'),
            max: am4core.color('#692155'),
        });

        var columnTemplate = series.columns.template;
        columnTemplate.strokeWidth = 2;
        columnTemplate.strokeOpacity = 1;
        columnTemplate.stroke = am4core.color('#ffffff');
        columnTemplate.tooltipText =
            "{weekday}, {hour}: {value.workingValue.formatNumber('#.')}";

        // heat legend
        var heatLegend = chart.rightAxesContainer.createChild(am4charts.HeatLegend);
        heatLegend.orientation = "vertical";
        heatLegend.width = 40;
        heatLegend.height = am4core.percent(100);
        heatLegend.series = series;
        heatLegend.marginLeft = 20;
        heatLegend.valueAxis.renderer.labels.template.fontSize = 9;
        heatLegend.valueAxis.renderer.minGridDistance = 30;

        // heat legend behavior
        series.columns.template.events.on('over', (event) => {
            handleHover(event.target);
        });

        series.columns.template.events.on('hit', (event) => {
            handleHover(event.target);
        });

        function handleHover(column) {
            if (!isNaN(column.dataItem.value)) {
            heatLegend.valueAxis.showTooltipAt(column.dataItem.value);
            } else {
            heatLegend.valueAxis.hideTooltip();
            }
        }

        series.columns.template.events.on('out', (event) => {
            heatLegend.valueAxis.hideTooltip();
        });

        chart.data = [
            {
            hour: '12pm',
            weekday: 'Sun',
            value: 2990,
            },
            {
            hour: '1am',
            weekday: 'Sun',
            value: 2520,
            },
            {
            hour: '2am',
            weekday: 'Sun',
            value: 2334,
            },
            {
            hour: '3am',
            weekday: 'Sun',
            value: 2230,
            },
            {
            hour: '4am',
            weekday: 'Sun',
            value: 2325,
            },
            {
            hour: '5am',
            weekday: 'Sun',
            value: 2019,
            },
            {
            hour: '6am',
            weekday: 'Sun',
            value: 2128,
            },
            {
            hour: '7am',
            weekday: 'Sun',
            value: 2246,
            },
            {
            hour: '8am',
            weekday: 'Sun',
            value: 2421,
            },
            {
            hour: '9am',
            weekday: 'Sun',
            value: 2788,
            },
            {
            hour: '10am',
            weekday: 'Sun',
            value: 2959,
            },
            {
            hour: '11am',
            weekday: 'Sun',
            value: 3018,
            },
            {
            hour: '12am',
            weekday: 'Sun',
            value: 3154,
            },
            {
            hour: '1pm',
            weekday: 'Sun',
            value: 3172,
            },
            {
            hour: '2pm',
            weekday: 'Sun',
            value: 3368,
            },
            {
            hour: '3pm',
            weekday: 'Sun',
            value: 3464,
            },
            {
            hour: '4pm',
            weekday: 'Sun',
            value: 3746,
            },
            {
            hour: '5pm',
            weekday: 'Sun',
            value: 3656,
            },
            {
            hour: '6pm',
            weekday: 'Sun',
            value: 3336,
            },
            {
            hour: '7pm',
            weekday: 'Sun',
            value: 3292,
            },
            {
            hour: '8pm',
            weekday: 'Sun',
            value: 3269,
            },
            {
            hour: '9pm',
            weekday: 'Sun',
            value: 3300,
            },
            {
            hour: '10pm',
            weekday: 'Sun',
            value: 3403,
            },
            {
            hour: '11pm',
            weekday: 'Sun',
            value: 3323,
            },
            {
            hour: '12pm',
            weekday: 'Mon',
            value: 3346,
            },
            {
            hour: '1am',
            weekday: 'Mon',
            value: 2725,
            },
            {
            hour: '2am',
            weekday: 'Mon',
            value: 3052,
            },
            {
            hour: '3am',
            weekday: 'Mon',
            value: 3876,
            },
            {
            hour: '4am',
            weekday: 'Mon',
            value: 4453,
            },
            {
            hour: '5am',
            weekday: 'Mon',
            value: 3972,
            },
            {
            hour: '6am',
            weekday: 'Mon',
            value: 4644,
            },
            {
            hour: '7am',
            weekday: 'Mon',
            value: 5715,
            },
            {
            hour: '8am',
            weekday: 'Mon',
            value: 7080,
            },
            {
            hour: '9am',
            weekday: 'Mon',
            value: 8022,
            },
            {
            hour: '10am',
            weekday: 'Mon',
            value: 8446,
            },
            {
            hour: '11am',
            weekday: 'Mon',
            value: 9313,
            },
            {
            hour: '12am',
            weekday: 'Mon',
            value: 9011,
            },
            {
            hour: '1pm',
            weekday: 'Mon',
            value: 8508,
            },
            {
            hour: '2pm',
            weekday: 'Mon',
            value: 8515,
            },
            {
            hour: '3pm',
            weekday: 'Mon',
            value: 8399,
            },
            {
            hour: '4pm',
            weekday: 'Mon',
            value: 8649,
            },
            {
            hour: '5pm',
            weekday: 'Mon',
            value: 7869,
            },
            {
            hour: '6pm',
            weekday: 'Mon',
            value: 6933,
            },
            {
            hour: '7pm',
            weekday: 'Mon',
            value: 5969,
            },
            {
            hour: '8pm',
            weekday: 'Mon',
            value: 5552,
            },
            {
            hour: '9pm',
            weekday: 'Mon',
            value: 5434,
            },
            {
            hour: '10pm',
            weekday: 'Mon',
            value: 5070,
            },
            {
            hour: '11pm',
            weekday: 'Mon',
            value: 4851,
            },
            {
            hour: '12pm',
            weekday: 'Tue',
            value: 4468,
            },
            {
            hour: '1am',
            weekday: 'Tue',
            value: 3306,
            },
            {
            hour: '2am',
            weekday: 'Tue',
            value: 3906,
            },
            {
            hour: '3am',
            weekday: 'Tue',
            value: 4413,
            },
            {
            hour: '4am',
            weekday: 'Tue',
            value: 4726,
            },
            {
            hour: '5am',
            weekday: 'Tue',
            value: 4584,
            },
            {
            hour: '6am',
            weekday: 'Tue',
            value: 5717,
            },
            {
            hour: '7am',
            weekday: 'Tue',
            value: 6504,
            },
            {
            hour: '8am',
            weekday: 'Tue',
            value: 8104,
            },
            {
            hour: '9am',
            weekday: 'Tue',
            value: 8813,
            },
            {
            hour: '10am',
            weekday: 'Tue',
            value: 9278,
            },
            {
            hour: '11am',
            weekday: 'Tue',
            value: 10425,
            },
            {
            hour: '12am',
            weekday: 'Tue',
            value: 10137,
            },
            {
            hour: '1pm',
            weekday: 'Tue',
            value: 9290,
            },
            {
            hour: '2pm',
            weekday: 'Tue',
            value: 9255,
            },
            {
            hour: '3pm',
            weekday: 'Tue',
            value: 9614,
            },
            {
            hour: '4pm',
            weekday: 'Tue',
            value: 9713,
            },
            {
            hour: '5pm',
            weekday: 'Tue',
            value: 9667,
            },
            {
            hour: '6pm',
            weekday: 'Tue',
            value: 8774,
            },
            {
            hour: '7pm',
            weekday: 'Tue',
            value: 8649,
            },
            {
            hour: '8pm',
            weekday: 'Tue',
            value: 9937,
            },
            {
            hour: '9pm',
            weekday: 'Tue',
            value: 10286,
            },
            {
            hour: '10pm',
            weekday: 'Tue',
            value: 9175,
            },
            {
            hour: '11pm',
            weekday: 'Tue',
            value: 8581,
            },
            {
            hour: '12pm',
            weekday: 'Wed',
            value: 8145,
            },
            {
            hour: '1am',
            weekday: 'Wed',
            value: 7177,
            },
            {
            hour: '2am',
            weekday: 'Wed',
            value: 5657,
            },
            {
            hour: '3am',
            weekday: 'Wed',
            value: 6802,
            },
            {
            hour: '4am',
            weekday: 'Wed',
            value: 8159,
            },
            {
            hour: '5am',
            weekday: 'Wed',
            value: 8449,
            },
            {
            hour: '6am',
            weekday: 'Wed',
            value: 9453,
            },
            {
            hour: '7am',
            weekday: 'Wed',
            value: 9947,
            },
            {
            hour: '8am',
            weekday: 'Wed',
            value: 11471,
            },
            {
            hour: '9am',
            weekday: 'Wed',
            value: 12492,
            },
            {
            hour: '10am',
            weekday: 'Wed',
            value: 9388,
            },
            {
            hour: '11am',
            weekday: 'Wed',
            value: 9928,
            },
            {
            hour: '12am',
            weekday: 'Wed',
            value: 9644,
            },
            {
            hour: '1pm',
            weekday: 'Wed',
            value: 9034,
            },
            {
            hour: '2pm',
            weekday: 'Wed',
            value: 8964,
            },
            {
            hour: '3pm',
            weekday: 'Wed',
            value: 9069,
            },
            {
            hour: '4pm',
            weekday: 'Wed',
            value: 8898,
            },
            {
            hour: '5pm',
            weekday: 'Wed',
            value: 8322,
            },
            {
            hour: '6pm',
            weekday: 'Wed',
            value: 6909,
            },
            {
            hour: '7pm',
            weekday: 'Wed',
            value: 5810,
            },
            {
            hour: '8pm',
            weekday: 'Wed',
            value: 5151,
            },
            {
            hour: '9pm',
            weekday: 'Wed',
            value: 4911,
            },
            {
            hour: '10pm',
            weekday: 'Wed',
            value: 4487,
            },
            {
            hour: '11pm',
            weekday: 'Wed',
            value: 4118,
            },
            {
            hour: '12pm',
            weekday: 'Thu',
            value: 3689,
            },
            {
            hour: '1am',
            weekday: 'Thu',
            value: 3081,
            },
            {
            hour: '2am',
            weekday: 'Thu',
            value: 6525,
            },
            {
            hour: '3am',
            weekday: 'Thu',
            value: 6228,
            },
            {
            hour: '4am',
            weekday: 'Thu',
            value: 6917,
            },
            {
            hour: '5am',
            weekday: 'Thu',
            value: 6568,
            },
            {
            hour: '6am',
            weekday: 'Thu',
            value: 6405,
            },
            {
            hour: '7am',
            weekday: 'Thu',
            value: 8106,
            },
            {
            hour: '8am',
            weekday: 'Thu',
            value: 8542,
            },
            {
            hour: '9am',
            weekday: 'Thu',
            value: 8501,
            },
            {
            hour: '10am',
            weekday: 'Thu',
            value: 8802,
            },
            {
            hour: '11am',
            weekday: 'Thu',
            value: 9420,
            },
            {
            hour: '12am',
            weekday: 'Thu',
            value: 8966,
            },
            {
            hour: '1pm',
            weekday: 'Thu',
            value: 8135,
            },
            {
            hour: '2pm',
            weekday: 'Thu',
            value: 8224,
            },
            {
            hour: '3pm',
            weekday: 'Thu',
            value: 8387,
            },
            {
            hour: '4pm',
            weekday: 'Thu',
            value: 8218,
            },
            {
            hour: '5pm',
            weekday: 'Thu',
            value: 7641,
            },
            {
            hour: '6pm',
            weekday: 'Thu',
            value: 6469,
            },
            {
            hour: '7pm',
            weekday: 'Thu',
            value: 5441,
            },
            {
            hour: '8pm',
            weekday: 'Thu',
            value: 4952,
            },
            {
            hour: '9pm',
            weekday: 'Thu',
            value: 4643,
            },
            {
            hour: '10pm',
            weekday: 'Thu',
            value: 4393,
            },
            {
            hour: '11pm',
            weekday: 'Thu',
            value: 4017,
            },
            {
            hour: '12pm',
            weekday: 'Fri',
            value: 4022,
            },
            {
            hour: '1am',
            weekday: 'Fri',
            value: 3063,
            },
            {
            hour: '2am',
            weekday: 'Fri',
            value: 3638,
            },
            {
            hour: '3am',
            weekday: 'Fri',
            value: 3968,
            },
            {
            hour: '4am',
            weekday: 'Fri',
            value: 4070,
            },
            {
            hour: '5am',
            weekday: 'Fri',
            value: 4019,
            },
            {
            hour: '6am',
            weekday: 'Fri',
            value: 4548,
            },
            {
            hour: '7am',
            weekday: 'Fri',
            value: 5465,
            },
            {
            hour: '8am',
            weekday: 'Fri',
            value: 6909,
            },
            {
            hour: '9am',
            weekday: 'Fri',
            value: 7706,
            },
            {
            hour: '10am',
            weekday: 'Fri',
            value: 7867,
            },
            {
            hour: '11am',
            weekday: 'Fri',
            value: 8615,
            },
            {
            hour: '12am',
            weekday: 'Fri',
            value: 8218,
            },
            {
            hour: '1pm',
            weekday: 'Fri',
            value: 7604,
            },
            {
            hour: '2pm',
            weekday: 'Fri',
            value: 7429,
            },
            {
            hour: '3pm',
            weekday: 'Fri',
            value: 7488,
            },
            {
            hour: '4pm',
            weekday: 'Fri',
            value: 7493,
            },
            {
            hour: '5pm',
            weekday: 'Fri',
            value: 6998,
            },
            {
            hour: '6pm',
            weekday: 'Fri',
            value: 5941,
            },
            {
            hour: '7pm',
            weekday: 'Fri',
            value: 5068,
            },
            {
            hour: '8pm',
            weekday: 'Fri',
            value: 4636,
            },
            {
            hour: '9pm',
            weekday: 'Fri',
            value: 4241,
            },
            {
            hour: '10pm',
            weekday: 'Fri',
            value: 3858,
            },
            {
            hour: '11pm',
            weekday: 'Fri',
            value: 3833,
            },
            {
            hour: '12pm',
            weekday: 'Sat',
            value: 3503,
            },
            {
            hour: '1am',
            weekday: 'Sat',
            value: 2842,
            },
            {
            hour: '2am',
            weekday: 'Sat',
            value: 2808,
            },
            {
            hour: '3am',
            weekday: 'Sat',
            value: 2399,
            },
            {
            hour: '4am',
            weekday: 'Sat',
            value: 2280,
            },
            {
            hour: '5am',
            weekday: 'Sat',
            value: 2139,
            },
            {
            hour: '6am',
            weekday: 'Sat',
            value: 2527,
            },
            {
            hour: '7am',
            weekday: 'Sat',
            value: 2940,
            },
            {
            hour: '8am',
            weekday: 'Sat',
            value: 3066,
            },
            {
            hour: '9am',
            weekday: 'Sat',
            value: 3494,
            },
            {
            hour: '10am',
            weekday: 'Sat',
            value: 3287,
            },
            {
            hour: '11am',
            weekday: 'Sat',
            value: 3416,
            },
            {
            hour: '12am',
            weekday: 'Sat',
            value: 3432,
            },
            {
            hour: '1pm',
            weekday: 'Sat',
            value: 3523,
            },
            {
            hour: '2pm',
            weekday: 'Sat',
            value: 3542,
            },
            {
            hour: '3pm',
            weekday: 'Sat',
            value: 3347,
            },
            {
            hour: '4pm',
            weekday: 'Sat',
            value: 3292,
            },
            {
            hour: '5pm',
            weekday: 'Sat',
            value: 3416,
            },
            {
            hour: '6pm',
            weekday: 'Sat',
            value: 3131,
            },
            {
            hour: '7pm',
            weekday: 'Sat',
            value: 3057,
            },
            {
            hour: '8pm',
            weekday: 'Sat',
            value: 3227,
            },
            {
            hour: '9pm',
            weekday: 'Sat',
            value: 3060,
            },
            {
            hour: '10pm',
            weekday: 'Sat',
            value: 2855,
            },
            {
            hour: '11pm',
            weekday: 'Sat',
            value: 2625,
            },
        ];
    }
}

export default TripHda;