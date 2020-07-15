import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MapboxComponent } from './components/mapbox/mapbox.component';
import { HttpClientModule } from '@angular/common/http'
import { QueryService } from './services/query.service';
import { GraphComponent } from './components/graph/graph.component' 

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MapboxComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [QueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
