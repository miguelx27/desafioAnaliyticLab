import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  urlLayer: string = 'https://alw-lab.herokuapp.com/commerces/layer';
  urlGraph: string = 'https://alw-lab.herokuapp.com/commerces/graph';

  constructor( private http: HttpClient) { }
  layer(){
    return this.http.get(this.urlLayer)
  }
  graph(){
    return this.http.get(this.urlGraph);
  }
}
