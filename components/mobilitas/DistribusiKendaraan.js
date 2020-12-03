import React, { Component } from 'react';
import styles from './DistribusiKendaraan.module.css';

class DistribusiKendaraan extends Component {
    barChart() {
        am4core.ready(() => {
          // Themes begin
          am4core.useTheme(am4themes_animated);
          // Themes end
      
          var chart = am4core.create('bar-chart', am4charts.XYChart);
          chart.padding(40, 40, 40, 40);
      
          var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
          categoryAxis.dataFields.category = 'kendaraan';
          categoryAxis.renderer.inversed = true;
          categoryAxis.renderer.grid.template.disabled = false;
          
      
          var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
          valueAxis.min = 0;
          valueAxis.renderer.grid.template.disabled = false;
          valueAxis.renderer.labels.template.disabled = true;
      
          var series = chart.series.push(new am4charts.ColumnSeries());
          series.dataFields.categoryY = 'kendaraan';
          series.dataFields.valueX = 'persentase';
          series.columns.template.strokeOpacity = 0;
          series.columns.template.column.cornerRadiusBottomRight = 5;
          series.columns.template.column.cornerRadiusTopRight = 5;
      
      
          // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
          series.columns.template.adapter.add('fill', function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
          });
      
          
          chart.data = [
            {
              kendaraan: 'Andong',
              persentase: 20,
            },
            {
              kendaraan: 'Becak',
              persentase: 30,
            },
            {
              kendaraan: 'Sepeda',
              persentase: 70,
            },
            {
              kendaraan: 'Mobil',
              persentase: 60,
            },
            {
              kendaraan: 'Motor',
              persentase: 80,
            },
          ];
        });
      }
      
      pieChart() {
        // Create chart instance
        var chart = am4core.create('pie-chart', am4charts.PieChart);
      
        // Add data
        chart.data = [
          {
            kendaraan: 'Andong',
            persentase: 20,
            color: am4core.color("#3B86FF")
          },
          {
            kendaraan: 'Becak',
            persentase: 30,
            color: am4core.color('#A3A0FB'),
          },
          {
            kendaraan: 'Sepeda',
            persentase: 70,
            color: am4core.color('#FFDA83'),
          },
          {
            kendaraan: 'Mobil',
            persentase: 60,
            color: am4core.color('#FF8373'),
          },
          {
            kendaraan: 'Motor',
            persentase: 80,
            color: am4core.color('#55D8FE'),
          },
        ];
      
        // Add and configure Series
        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = 'persentase';
        pieSeries.dataFields.category = 'kendaraan';
        pieSeries.slices.template.propertyFields.fill = "color";
        pieSeries.labels.template.disabled = true;
      
        // Let's cut a hole in our Pie chart the size of 40% the radius
        chart.radius = am4core.percent(70);
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

      componentDidMount() {
          this.barChart();
          this.pieChart();
      }

      componentWillUnmount() {
          if(this.chart) {
              this.chart.dispose();
          }
      }

    render() {
        return (
            <div>
                <div className={styles.topText}>
                    <h4>Distribusi Kendaraan</h4>
                    <h5>Penghitungan jumlah kendaraan</h5>
                </div>
                <div className="columns" style={{ height: 600 }}>
                    <div className="column" id={styles.bar}>
                        <h5>Kapasitas Maksimal</h5>
                        <div id="bar-chart" style={{ height: '100%' }}></div>
                    </div>
                    <div className="column">
                        <div id="pie-chart" style={{ height: '100%' }}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DistribusiKendaraan;