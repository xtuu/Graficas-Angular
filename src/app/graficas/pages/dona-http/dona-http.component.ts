import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, ChartEvent } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
})
export class DonaHttpComponent implements OnInit {


  public doughnutChartLabels: string[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];

  public doughnutChartData: ChartData<'doughnut'> = {

    labels: this.doughnutChartLabels,
    datasets: [],

  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    // console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    // console.log(event, active);
  }


  constructor(
    private graficaService: GraficasService
  ) { }

  ngOnInit(): void {
    this.graficaService.getDataRedesSociales()
      .subscribe(data => {

        const labels = Object.keys(data)
        labels.forEach(label => {
          this.doughnutChartLabels.push(label)
        })

        const values = Object.values(data)
        this.doughnutChartData.datasets.push({ data: values })
        // console.log(values)
      })
  }





}
