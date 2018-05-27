import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactory, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { PageService, PageInformation } from '../../services/page.service';
import { PageComponent } from '../page/page.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  @ViewChild('mainPageContainer', { read: ViewContainerRef }) container;
  pages: any;
  pageNames: string[];
  componentRef: ComponentRef<PageComponent>;

  constructor(private _pageService: PageService, private resolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
    this._pageService.getActivePage().subscribe((activePage: PageInformation) => {
      this.createComponent(activePage.id);
    });
    this._pageService.setFirstPage();
  }

  createComponent(type) {
    this.container.clear();
    let factory: ComponentFactory<PageComponent>;
    if (type === 'home') {
      factory = this.resolver.resolveComponentFactory(HomeComponent);
    } else {
      factory = this.resolver.resolveComponentFactory(PageComponent);
    }

    this.componentRef = this.container.createComponent(factory);

    this.componentRef.instance.pageName = type;

  }

}
