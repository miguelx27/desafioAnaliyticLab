import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js'
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  data = []

  constructor( private queryMapbox: QueryService) { }

  ngOnInit(): void {
    //query en el cual se obtiene las datos de la grafica y se llama a la función loadGrapgh
    this.queryMapbox.graph().subscribe((res: any[]) => {
      this.data = res
      this.loadGraph();
    });
           
  }

  //Carga de data en la gráficas y creación de las mismas
  loadGraph (){
                var labels = this.data.map(function(e) {
                  return e.name;
                });
                var data = this.data.map(function(e) {
                  return e.sales;
                });;
                var ctx = document.getElementById('myChart');
                  new Chart(ctx, {
                   type: 'line',
                   data: {
                     labels: labels,
                     datasets: [
                       {
                         label: 'Ventas',
                         data: data,
                         backgroundColor: 'rgba(66, 100, 251, .3)'
                       },
                     ],
                   },
                 });
                var ctx2 = document.getElementById('myChart2');
                  new Chart(ctx2, {
                   type: 'bar',
                   data: {
                     labels: labels,
                     datasets: [
                       {
                         label: 'Ventas',
                         data: data,
                         backgroundColor: 'rgba(66, 100, 251, .3)'
                       },
                     ],
                   },
                 });
  }

}
