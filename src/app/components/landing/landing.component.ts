import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
 

  //slides = [{'image': '/assets/queseria.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'},{'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}];
  constructor(public sanitizer: DomSanitizer) { }
  title = 'La Queseria de Azu';

  lat = 5.799936244268962;
  lng = -73.06181109884628;
  ngOnInit(): void {
  }

  getSourceURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/IKfjzpKS8SI");
}
  

}
