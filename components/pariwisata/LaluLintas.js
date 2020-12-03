import React, { Component } from 'react';
import styles from './LaluLintas.module.css';

class LaluLintas extends Component {
    render() {
        return (
            <div>
                <div class={styles.laluLintas}>
                    <h3>Lalulintas kendaraan dari waktu ke waktu</h3>
                </div>
                <div className='columns'>
                    <div class="column">
                    <div id="column-chart" style={{ width: '100%', height: 500 }}></div>
                    </div>
                    <div class="column">
                    <div class={styles.pieText}>
                        <h5>Distribusi Kendaraan</h5>
                        <div class={styles.dropdown}>
                        <select id="location">
                            <option value="yogyakarta">Yogyakarta</option>
                            <option value="yogyakarta">yogyakarta</option>
                            <option value="yogyakarta">yogyakarta</option>
                            <option value="yogyakarta">yogyakarta</option>
                        </select>
                        </div>
                    </div>
                    <div id="pie-chart" style={{ width: '100%', height: 500 }}></div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.columnChart();
        this.pieChart();
    }

    componentWillUnmount() {
        if(this.chart) {
            this.chart.dispose();
        }
    }

    columnChart = () => {
        am4core.ready(function() {
      
          // Themes begin
          am4core.useTheme(am4themes_animated);
          // Themes end
          
          var chart = am4core.create("column-chart", am4charts.XYChart);
          
          chart.data = [{
            "year": "1994",
            "cars": 1587,
            "motorcycles": 650,
            "bicycles": 121
          }, {
            "year": "1995",
            "cars": 1567,
            "motorcycles": 683,
            "bicycles": 146
          }, {
            "year": "1996",
            "cars": 1617,
            "motorcycles": 691,
            "bicycles": 138
          }, {
            "year": "1997",
            "cars": 1630,
            "motorcycles": 642,
            "bicycles": 127
          }, {
            "year": "1998",
            "cars": 1660,
            "motorcycles": 699,
            "bicycles": 105
          }, {
            "year": "1999",
            "cars": 1683,
            "motorcycles": 721,
            "bicycles": 109
          }, {
            "year": "2000",
            "cars": 1691,
            "motorcycles": 737,
            "bicycles": 112
          }, {
            "year": "2001",
            "cars": 1298,
            "motorcycles": 680,
            "bicycles": 101
          }, {
            "year": "2002",
            "cars": 1275,
            "motorcycles": 664,
            "bicycles": 97
          }, {
            "year": "2003",
            "cars": 1246,
            "motorcycles": 648,
            "bicycles": 93
          }, {
            "year": "2004",
            "cars": 1318,
            "motorcycles": 697,
            "bicycles": 111
          }, {
            "year": "2005",
            "cars": 1213,
            "motorcycles": 633,
            "bicycles": 87
          }, {
            "year": "2006",
            "cars": 1199,
            "motorcycles": 621,
            "bicycles": 79
          }, {
            "year": "2007",
            "cars": 1110,
            "motorcycles": 210,
            "bicycles": 81
          }, {
            "year": "2008",
            "cars": 1165,
            "motorcycles": 232,
            "bicycles": 75
          }, {
            "year": "2009",
            "cars": 1145,
            "motorcycles": 219,
            "bicycles": 88
          }, {
            "year": "2010",
            "cars": 1163,
            "motorcycles": 201,
            "bicycles": 82
          }, {
            "year": "2011",
            "cars": 1180,
            "motorcycles": 285,
            "bicycles": 87
          }, {
            "year": "2012",
            "cars": 1159,
            "motorcycles": 277,
            "bicycles": 71
          }];
          
          chart.dateFormatter.inputDateFormat = "yyyy";
          var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
          dateAxis.renderer.minGridDistance = 60;
          dateAxis.startLocation = 0.5;
          dateAxis.endLocation = 0.5;
          dateAxis.baseInterval = {
            timeUnit: "year",
            count: 1
          }
          
          var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
          valueAxis.tooltip.disabled = true;
          
          var series = chart.series.push(new am4charts.LineSeries());
          series.dataFields.dateX = "year";
          series.name = "cars";
          series.dataFields.valueY = "cars";
          series.tooltipText = "[#000]{valueY.value}[/]";
          series.tooltip.background.fill = am4core.color("#FFF");
          series.tooltip.getStrokeFromObject = true;
          series.tooltip.background.strokeWidth = 3;
          series.tooltip.getFillFromObject = false;
          series.fillOpacity = 0.6;
          series.strokeWidth = 2;
          series.stacked = true;
          series.tensionX = 0.8;
          
          var series2 = chart.series.push(new am4charts.LineSeries());
          series2.name = "motorcycles";
          series2.dataFields.dateX = "year";
          series2.dataFields.valueY = "motorcycles";
          series2.tooltipText = "[#000]{valueY.value}[/]";
          series2.tooltip.background.fill = am4core.color("#FFF");
          series2.tooltip.getFillFromObject = false;
          series2.tooltip.getStrokeFromObject = true;
          series2.tooltip.background.strokeWidth = 3;
          series2.sequencedInterpolation = true;
          series2.fillOpacity = 0.6;
          series2.stacked = true;
          series2.strokeWidth = 2;
          series2.tensionX = 0.8;
          
          var series3 = chart.series.push(new am4charts.LineSeries());
          series3.name = "bicycles";
          series3.dataFields.dateX = "year";
          series3.dataFields.valueY = "bicycles";
          series3.tooltipText = "[#000]{valueY.value}[/]";
          series3.tooltip.background.fill = am4core.color("#FFF");
          series3.tooltip.getFillFromObject = false;
          series3.tooltip.getStrokeFromObject = true;
          series3.tooltip.background.strokeWidth = 3;
          series3.sequencedInterpolation = true;
          series3.fillOpacity = 0.6;
          series3.defaultState.transitionDuration = 1000;
          series3.stacked = true;
          series3.strokeWidth = 2;
          series3.tensionX = 0.8;
          
          chart.cursor = new am4charts.XYCursor();
          chart.cursor.xAxis = dateAxis;
          chart.scrollbarX = new am4core.Scrollbar();
          
          // Add a legend
          chart.legend = new am4charts.Legend();
          chart.legend.position = "top";
          
          });
      }

      pieChart = () => {
        // Create chart instance
        var chart = am4core.create('pie-chart', am4charts.PieChart);
      
        // Add data
        chart.data = [
          {
            kendaraan: 'Sepeda Motor',
            jumlah: 501.9,
            color: am4core.color("#3B86FF"),
          },
          {
            kendaraan: 'Mobil',
            jumlah: 301.9,
            color: am4core.color('#A3A0FB'),
          },
          {
            kendaraan: 'Ireland',
            jumlah: 201.1,
            color: am4core.color('#FFDA83'),
          },
          {
            kendaraan: 'Bis',
            jumlah: 165.8,
            color: am4core.color('#FF8373'),
          },
          {
            kendaraan: 'sepeda',
            jumlah: 100,
            color: am4core.color('#55D8FE'),
          },
        ];
      
        // Add and configure Series
        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = 'jumlah';
        pieSeries.dataFields.category = 'kendaraan';
        pieSeries.slices.template.propertyFields.fill = "color";
        pieSeries.labels.template.disabled = true;
        
      
        // Let's cut a hole in our Pie chart the size of 40% the radius
        chart.innerRadius = am4core.percent(40);
      
        // Put a thick white border around each Slice
        // pieSeries.slices.template.stroke = am4core.color('#4a2abb');
        // pieSeries.slices.template.strokeWidth = 2;
        // pieSeries.slices.template.strokeOpacity = 1;
      
        // Add a legend
        chart.legend = new am4charts.Legend();
        chart.legend.position = 'right';
        chart.legend.valueLabels.template.text = ": {value.value}%";
      }
}

export default LaluLintas;
