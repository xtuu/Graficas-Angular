import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';



@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
})
export class BarrasComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };


  public barChartType: ChartType = 'bar';


  public barChartData: ChartData<'bar'> = {
    labels: ['2022', '2023', '2024', '2025', '2026', '2027', '2028'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#41F248', hoverBackgroundColor: '#FFFFFF'},
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#44FCDA' , hoverBackgroundColor: '#FFFFFF'},
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series C', backgroundColor: '#4990E6' , hoverBackgroundColor: '#FFFFFF'},
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series D', backgroundColor: '#743CFF' , hoverBackgroundColor: '#FFFFFF'},
      
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

  public randomize(): void {

    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),

    ];

    this.barChartData.datasets[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),

    ];
    this.barChartData.datasets[2].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),

    ];
    this.barChartData.datasets[3].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),

    ];


    this.chart?.update();
  }

}
