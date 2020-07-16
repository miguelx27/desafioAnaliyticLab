import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-commerces',
  templateUrl: './commerces.component.html',
  styleUrls: ['./commerces.component.scss']
})
export class CommercesComponent implements OnInit {

  commerces = []

  constructor( private queryCommerces : QueryService ) { }

  ngOnInit() {
    //query en la que se obtiene la data de los comercios
    this.queryCommerces.commerces().subscribe((res: any[]) => {
      this.commerces = res
    })
  }

}
