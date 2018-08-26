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

  get contact(): any {
    return this._pageService.getContactInformation();
  }

  activePage = '';
  title = 'Patricia Garcia Ramirez';
  subtitle = 'Ilustración y diseño gráfico.';
  constructor(private _pageService: PageService) {

  }

  ngOnInit() {
    this._pageService.getActivePage().subscribe((activePage: PageInformation) => {
      this.activePage = activePage.id;
      $('#aside-menu').removeClass('menu-layout');
      $('.overlay').hide();
      if (activePage.id == 'contact') {
        $('.contant-link').css('font-family', 'Barlow-Bold');
      } else {
        $('.contant-link').css('font-family', 'Barlow-Light');
      }
      $('.contant-link').css('text-decoration', 'none');
    });
  }

  pageChange(page) {
    this._pageService.setActivePage(page);
  }

  openContact() {
    this._pageService.setContactActive();
  }
}
