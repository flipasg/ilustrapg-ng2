import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { PageComponent } from '../page/page.component';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('enterAnimation', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class HomeComponent extends PageComponent {



}
