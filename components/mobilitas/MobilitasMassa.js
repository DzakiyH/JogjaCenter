import React, { Component } from 'react';
import styles from './MobilitasMassa.module.css';

class MobilitasMassa extends Component {
    render() {
        return (
            <div className={styles.mobility}>
                <div className={styles.mobilityText}>
                    <span><i className="fas fa-bus-alt"></i></span>
                    <h3>Mobilitas Massa</h3>
                    <button className="btn">
                        <i className="fas fa-bus"></i>transjogja
                    </button>
                </div>
                <div id="heatmap-mobility" style={{ width: '100%', height:700 }}></div>
            </div>
        )
    }

    componentDidMount() {
        am4core.ready(() => {
            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end
        
            var chart = am4core.create('heatmap-mobility', am4charts.XYChart);
        
        
            var xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
            var yAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        
            xAxis.dataFields.category = 'x';
            yAxis.dataFields.category = 'y';
        
            xAxis.renderer.grid.template.disabled = true;
            xAxis.renderer.minGridDistance = 40;
        
            yAxis.renderer.grid.template.disabled = true;
            yAxis.renderer.inversed = true;
            yAxis.renderer.minGridDistance = 30;
        
            var series = chart.series.push(new am4charts.ColumnSeries());
            series.dataFields.categoryX = 'x';
            series.dataFields.categoryY = 'y';
            series.dataFields.value = 'value';
            series.sequencedInterpolation = true;
        
            // Set up column appearance
            var column = series.columns.template;
            column.strokeOpacity = 1;
            column.stroke = am4core.color('#ffffff');
            column.width = am4core.percent(100);
            column.height = am4core.percent(100);
            column.propertyFields.fill = 'color';
        
            // Set up bullet appearance
            var bullet2 = series.bullets.push(new am4charts.LabelBullet());
            bullet2.label.text = '{value}';
            bullet2.label.fill = am4core.color('#fff');
            bullet2.zIndex = 1;
            bullet2.fontSize = 17;
            bullet2.interactionsEnabled = false;
        
            // define colors
            var colors = {
              critical: '#ca0101',
              bad: '#e17a2d',
              medium: '#e1d92d',
              good: '#5dbe24',
              verygood: '#0b7d03',
            };
        
            chart.data = [
              {
                y: 'Critical',
                x: 'Very good',
                color: colors.medium,
                value: 20,
              },
              {
                y: 'Bad',
                x: 'Very good',
                color: colors.good,
                value: 15,
              },
              {
                y: 'Medium',
                x: 'Very good',
                color: colors.verygood,
                value: 25,
              },
              {
                y: 'Good',
                x: 'Very good',
                color: colors.verygood,
                value: 15,
              },
              {
                y: 'Very good',
                x: 'Very good',
                color: colors.verygood,
                value: 12,
              },
        
              {
                y: 'Critical',
                x: 'Good',
                color: colors.bad,
                value: 30,
              },
              {
                y: 'Bad',
                x: 'Good',
                color: colors.medium,
                value: 24,
              },
              {
                y: 'Medium',
                x: 'Good',
                color: colors.good,
                value: 25,
              },
              {
                y: 'Good',
                x: 'Good',
                color: colors.verygood,
                value: 15,
              },
              {
                y: 'Very good',
                x: 'Good',
                color: colors.verygood,
                value: 25,
              },
        
              {
                y: 'Critical',
                x: 'Medium',
                color: colors.bad,
                value: 33,
              },
              {
                y: 'Bad',
                x: 'Medium',
                color: colors.bad,
                value: 14,
              },
              {
                y: 'Medium',
                x: 'Medium',
                color: colors.medium,
                value: 20,
              },
              {
                y: 'Good',
                x: 'Medium',
                color: colors.good,
                value: 19,
              },
              {
                y: 'Very good',
                x: 'Medium',
                color: colors.good,
                value: 25,
              },
        
              {
                y: 'Critical',
                x: 'Bad',
                color: colors.critical,
                value: 31,
              },
              {
                y: 'Bad',
                x: 'Bad',
                color: colors.critical,
                value: 24,
              },
              {
                y: 'Medium',
                x: 'Bad',
                color: colors.bad,
                value: 25,
              },
              {
                y: 'Good',
                x: 'Bad',
                color: colors.medium,
                value: 15,
              },
              {
                y: 'Very good',
                x: 'Bad',
                color: colors.good,
                value: 15,
              },
              {
                y: 'Critical',
                x: 'Critical',
                color: colors.critical,
                value: 12,
              },
              {
                y: 'Bad',
                x: 'Critical',
                color: colors.critical,
                value: 14,
              },
              {
                y: 'Medium',
                x: 'Critical',
                color: colors.critical,
                value: 15,
              },
              {
                y: 'Good',
                x: 'Critical',
                color: colors.bad,
                value: 25,
              },
              {
                y: 'Very good',
                x: 'Critical',
                color: colors.medium,
                value: 19,
              },
              {
                y: 'Critical',
                x: 'Very good',
                color: colors.medium,
                value: 20,
              },
              {
                y: 'Bad',
                x: 'Very good',
                color: colors.good,
                value: 15,
              },
              {
                y: 'Medium',
                x: 'Very good',
                color: colors.verygood,
                value: 25,
              },
              {
                y: 'Good',
                x: 'Very good',
                color: colors.verygood,
                value: 15,
              },
              {
                y: 'Very good',
                x: 'Very good',
                color: colors.verygood,
                value: 12,
              },
        
              {
                y: 'Critical',
                x: 'Good',
                color: colors.bad,
                value: 30,
              },
              {
                y: 'Bad',
                x: 'Good',
                color: colors.medium,
                value: 24,
              },
              {
                y: 'Medium',
                x: 'Good',
                color: colors.good,
                value: 25,
              },
              {
                y: 'Good',
                x: 'Good',
                color: colors.verygood,
                value: 15,
              },
              {
                y: 'Very good',
                x: 'Good',
                color: colors.verygood,
                value: 25,
              },
        
              {
                y: 'Critical',
                x: 'Medium',
                color: colors.bad,
                value: 33,
              },
              {
                y: 'Bad',
                x: 'Medium',
                color: colors.bad,
                value: 14,
              },
              {
                y: 'Medium',
                x: 'Medium',
                color: colors.medium,
                value: 20,
              },
              {
                y: 'Good',
                x: 'Medium',
                color: colors.good,
                value: 19,
              },
              {
                y: 'Very good',
                x: 'Medium',
                color: colors.good,
                value: 25,
              },
        
              {
                y: 'Critical',
                x: 'Bad',
                color: colors.critical,
                value: 31,
              },
              {
                y: 'Bad',
                x: 'Bad',
                color: colors.critical,
                value: 24,
              },
              {
                y: 'Medium',
                x: 'Bad',
                color: colors.bad,
                value: 25,
              },
              {
                y: 'Good',
                x: 'Bad',
                color: colors.medium,
                value: 15,
              },
              {
                y: 'Very good',
                x: 'Bad',
                color: colors.good,
                value: 15,
              },
        
              {
                y: 'Critical',
                x: 'sad',
                color: colors.critical,
                value: 12,
              },
              {
                y: 'Bad',
                x: 'sad',
                color: colors.critical,
                value: 14,
              },
              {
                y: 'Medium',
                x: 'sad',
                color: colors.critical,
                value: 15,
              },
              {
                y: 'Good',
                x: 'sad',
                color: colors.bad,
                value: 25,
              },
              {
                y: 'Very good',
                x: 'sad',
                color: colors.medium,
                value: 19,
              },
            ];
        
            var baseWidth = Math.min(
              chart.plotContainer.maxWidth,
              chart.plotContainer.maxHeight
            );
            // var maxRadius = baseWidth / Math.sqrt(chart.data.length) / 2-2; // 2 is jast a margin
            // series.heatRules.push({
            //   min: 10,
            //   max: maxRadius,
            //   property: 'radius',
            //   target: bullet1.circle,
            // });
        
            chart.plotContainer.events.on('maxsizechanged', function () {
              var side = Math.min(
                chart.plotContainer.maxWidth,
                chart.plotContainer.maxHeight
              );
            });
          });
    }

    componentWillUnmount() {
        if(this.chart) {
            this.chart.dispose();
        }
    }
}

export default MobilitasMassa;