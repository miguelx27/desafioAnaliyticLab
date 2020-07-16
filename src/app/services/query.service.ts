import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
 //links para consumir endpoints
  urlLayer: string = 'https://alw-lab.herokuapp.com/commerces/layer';
  urlGraph: string = 'https://alw-lab.herokuapp.com/commerces/graph';
  urlCommerces: string = 'https://alw-lab.herokuapp.com/commerces';

  constructor( private http: HttpClient) { }
  //GET Layers para el mapbox
  layer(){
    return this.http.get(this.urlLayer)
  }
  //GET data para la grafica
  graph(){
    return this.http.get(this.urlGraph);
  }
  //GET data de los comerciales
  commerces(){
    return this.http.get(this.urlCommerces);
  }
}
