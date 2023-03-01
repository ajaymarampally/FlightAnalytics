import { Component, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { XYZ } from 'ol/source';
import { Map, View } from 'ol';
import { Tile as TileLayer } from 'ol/layer';
import { OSM } from 'ol/source';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  tileSource = new XYZ({
    url: 'https://api.maptiler.com/maps/positron/256/{z}/{x}/{y}.png?key=LVYpnDodO56WQdIEHQEe'
  });

  ngAfterViewInit(): void {
    const map = new Map({
      target: 'map',
      view: new View({
        center: [0, 0],
        zoom: 2
      }),
      layers: [
        new TileLayer({
          source: new OSM()
      })
      ]
    });  }



}
