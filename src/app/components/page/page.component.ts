import { Component, OnInit } from '@angular/core';
import { PageService, PageInformation } from '../../services/page.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  pageInformation:PageInformation = {
    title: '',
    description: ''
  };
  constructor(private _activatedRouter: ActivatedRoute,
    private _pageService: PageService) { }

  ngOnInit() {
    this._activatedRouter.params
      .map((params: any) => params.name)
      .subscribe((pageName: string) => {
        this.pageInformation = this._pageService.getPageInformationByName(pageName);
      });
  }

}
