import { Component, OnInit } from '@angular/core';
import { Queso } from 'src/app/interface/queso';
import { QuesoService } from 'src/app/services/queso.service';
import { QUESOS } from '../../mocks/mock-quesos';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
  quesos = [
    {id:1,title: 'Paipa', subtitle: 'Subtitle', content: 'Content here', url: '../../../assets/paipa.PNG'},
    {id:2,title: 'Mozarella', subtitle: 'Subtitle', content: 'Content here', url: '../../../assets/mozarella.PNG'},
    {id:3,title: 'Otro', subtitle: 'Subtitle', content: 'Content here', url: '../../../assets/mozarella.PNG'},
    {id:4,title: 'Paipa', subtitle: 'Subtitle', content: 'Content here', url: '../../../assets/paipa.PNG'},
    {id:5,title: 'Mozarella', subtitle: 'Subtitle', content: 'Content here', url: '../../../assets/mozarella.PNG'},
    {id:6,title: 'Otro', subtitle: 'Subtitle', content: 'Content here', url: '../../../assets/mozarella.PNG'},
];


  constructor(private quesoService: QuesoService) {


   }

  ngOnInit(): void {


   
  }

  onCardClick(event: Event) { 

  } 


}


