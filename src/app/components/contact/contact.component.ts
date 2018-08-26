import { Component, OnInit } from '@angular/core';
import { PageInformation, PageService } from '../../services/page.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../menu/menu.component.scss', '../page/page.component.scss']
})
export class ContactComponent implements OnInit {
  pageInformation: any;
  pageId: string;
  phone = '678102883';
  email = 'ilustrapg@gmail.com';
  constructor(public pageService: PageService) { }

  ngOnInit() {
    this.pageInformation = this.pageService.getContactInformation();
    this.pageId = this.pageInformation.id;
  }

}
