import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactory, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { PageService, PageInformation } from '../../services/page.service';
import { PageComponent } from '../page/page.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  @ViewChild('mainPageContainer', { read: ViewContainerRef }) container;
  pages: any;
  pageNames: string[];
  componentRef: ComponentRef<any>;
  hiddenHome = false;

  constructor(private _pageService: PageService, private resolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
    this._pageService.getActivePage().subscribe((activePage: PageInformation) => {
      this.createComponent(activePage.id);
    });
  }

  createComponent(type) {
    this.hiddenHome = true;
    if (this.componentRef) {
      this.componentRef.instance.end.subscribe(() => {
        this.create(type);
      });
      this.componentRef.instance.close();
    } else {
      this.create(type);
    }
  }

  create(type) {
    this.destroyComponent();

    let factory: ComponentFactory<any>;
    if (type === 'home') {
      factory = this.resolver.resolveComponentFactory(HomeComponent);
    } else if (type === 'contact') {
      factory = this.resolver.resolveComponentFactory(ContactComponent);
    } else {
      factory = this.resolver.resolveComponentFactory(PageComponent);
    }

    this.componentRef = this.container.createComponent(factory);

    this.componentRef.instance.type = type;
    this.componentRef.instance.pageName = type;
  }

  destroyComponent() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

}
