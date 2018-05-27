import { Component, OnInit } from '@angular/core';
import { PageService, PagesInformation, PageInformation } from '../../services/page.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  get pages(): PagesInformation {
    return this._pageService.getPagesInformation();
  }

  activePage = 'bellabestia';
  title = 'Patricia Garcia';
  subtitle = 'Ilustración y diseño gráfico.';
  description = '';
  constructor(private _pageService: PageService) {

  }

  ngOnInit() {
    this._pageService.getActivePage().subscribe((activePage: PageInformation) => {
      this.activePage = activePage.id;
      $('#aside-menu').removeClass('menu-layout');
      $('.overlay').hide();

    });
  }

  pageChange(page) {
    this._pageService.setActivePage(page);
  }

}
