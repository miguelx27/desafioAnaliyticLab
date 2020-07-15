import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import * as mapboxgl from 'mapbox-gl';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss']
})
export class MapboxComponent implements OnInit {
  
  layers = []
  constructor( private queryMapbox : QueryService) { }

  ngOnInit() {
    	mapboxgl.accessToken = environment.mapboxKey
      var map = new mapboxgl.Map({
        container: 'map-box',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 11,
        center: [-74.075278, 4.645401],
      });
          this.queryMapbox.layer().subscribe((res: any[]) => {
            map.on('load', function () {
              // Add an image to use as a custom marker
              map.loadImage(
                'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
                function (error, image) {
                  if (error) throw error;
                  map.addImage('custom-marker', image);
                  // Add a GeoJSON source with 2 points
                  map.addSource('points', {
                    type: 'geojson',
                    data: res,
                  });

                  // Add a symbol layer
                  map.addLayer({
                    id: 'points',
                    type: 'symbol',
                    source: 'points',
                    layout: {
                      'icon-image': 'custom-marker',
                      'text-field': ['get', 'name'],
                      'text-font': [
                        'Open Sans Semibold',
                        'Arial Unicode MS Bold',
                      ],
                      'text-offset': [0, 1.25],
                      'text-anchor': 'top',
                    },
                  });
                }
              );
            });
          });

  }

}
