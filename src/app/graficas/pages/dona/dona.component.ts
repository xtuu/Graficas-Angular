import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, ChartEvent } from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
})
export class DonaComponent implements OnInit {



  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100] },
    ],

  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    // console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    // console.log(event, active);
  }




  constructor() { }

  ngOnInit(): void {
  }

}
