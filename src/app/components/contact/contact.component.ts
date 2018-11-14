import { Component, OnInit, Input, Output, EventEmitter, trigger, state, style, transition, animate } from '@angular/core';
import { PageInformation, PageService } from '../../services/page.service';
import { PageComponent } from '../page/page.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../menu/menu.component.scss', '../page/page.component.scss'],
  animations: [
    trigger('state', [
      state('void, hidden', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('* => visible', animate('250ms linear')),
      transition('* => hidden', animate('100ms linear')),
    ])
  ]
})
export class ContactComponent extends PageComponent {
  pageInformation: any;
  pageId: string;
  phone = '678102883';
  email = 'ilustrapg@gmail.com';

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.pageInformation = this.pageService.getContactInformation();
    this.pageId = this.pageInformation.id;
  }


}
