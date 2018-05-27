import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.overlay').on('click', function () {
      $('#aside-menu').removeClass('menu-layout');
      $('.overlay').hide();
    });
    $('#nav-toggler').on('click', function () {
      if ($('#aside-menu').hasClass('menu-layout')) {
        $('#aside-menu').removeClass('menu-layout');
        $('.overlay').hide();
      } else {
        $('#aside-menu').addClass('menu-layout');
        $('.overlay').show();
      }
    });
  }
}
