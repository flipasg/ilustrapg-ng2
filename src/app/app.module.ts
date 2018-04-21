import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { MainComponent } from './components/main/main.component';
import { PageComponent } from './components/page/page.component';
import { APP_ROUTING } from './app.routes';
import { PageService } from './services/page.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    MainpageComponent,
    NavbarComponent,
    MainComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    APP_ROUTING
  ],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
