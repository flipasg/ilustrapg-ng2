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
import { KeyPipe } from './pipes/key.pipe';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    MainpageComponent,
    NavbarComponent,
    MainComponent,
    PageComponent,
    KeyPipe,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    APP_ROUTING,
    BrowserAnimationsModule
  ],
  providers: [PageService],
  bootstrap: [AppComponent],
  entryComponents: [PageComponent, HomeComponent, ContactComponent]
})
export class AppModule { }
