import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { PageService, PageInformation, PhotoSwipeImage } from '../../services/page.service';
import { ActivatedRoute } from '@angular/router';
import PhotoSwipe = require('photoswipe');
import { Item } from 'photoswipe';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  pswpElement: HTMLElement;
  pageName: string;
  pageInformation: PageInformation;
  @ViewChild('photoSwipe') photoSwipe: ElementRef;
  images: PhotoSwipeImage[] = [];
  constructor(private _activatedRouter: ActivatedRoute,
    private _pageService: PageService) { }

  ngOnInit() {
    this._activatedRouter.params
      .map((params: any) => params.name)
      .subscribe((pageName: string) => {
        this.pageName = pageName;
        this.pageInformation = this._pageService.getPageInformationByName(pageName);
        this.images = this._pageService.getPageImagesByName(this.pageName);
      });
  }

  openSlideshow() {

    const options = {
      index: 0
    };

    const images = <Item[]> this.images;

    // Initializes and opens PhotoSwipe
    const gallery = new PhotoSwipe(this.photoSwipe.nativeElement, PhotoSwipeUI_Default, images, options);
    gallery.init();
  }

  onThumbnailsClick(e) {
    this.openSlideshow();
  }

}
