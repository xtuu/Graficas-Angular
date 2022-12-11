import { Component, Input, ViewChild, OnInit } from '@angular/core';


import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
})
export class GraficaBarraComponent implements OnInit {


  @Input() horizontal: boolean = false



  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };


  public barChartType: ChartType = 'bar';


  @Input() barChartData: ChartData = {
    datasets: []
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }


  constructor() { }

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartType = 'doughnut'
    }

  }

}
