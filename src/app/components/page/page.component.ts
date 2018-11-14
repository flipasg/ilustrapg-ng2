// tslint:disable-next-line:max-line-length
import { Component, OnInit, ViewChild, ElementRef, Input, style, transition, animate, keyframes, OnDestroy, state, trigger, Output, EventEmitter } from '@angular/core';
import { PageService, PageInformation, PhotoSwipeImage } from '../../services/page.service';
import { ActivatedRoute } from '@angular/router';
import { Item, constructor } from 'photoswipe';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  animations: [
    trigger('state', [
      state('void, hidden', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('* => visible', animate('250ms linear')),
      transition('* => hidden', animate('100ms linear')),
    ])
  ]
})
export class PageComponent implements OnInit {
  pswpElement: HTMLElement;
  pageName: string;
  pageInformation: PageInformation;
  pageId: string;
  @ViewChild('photoSwipe') photoSwipe: ElementRef;
  images: PhotoSwipeImage[] = [];
  page: any;
  proyectMapping: {
    bellabestia: 2,
    circe: 3,
    cuentos: 4,
    culpables: 5,
    medeacomic: 6,
    narciso: 7,
    retratos: 8,
    voluntadpalabras: 9,
    vozeslava: 1
  };
  @Input() type = 'success';
  @Output() output = new EventEmitter();
  @Output() end = new EventEmitter();
  visibility = 'visible';

  constructor(public pageService: PageService) { }

  ngOnInit() {
    this.pageInformation = this.pageService.getPageInformationByName(this.pageName);
    this.pageId = this.pageInformation.id;
    this.images = this.pageService.getPageImagesByName(this.pageName);
  }

  animationDone(e) {
    if (e.toState === 'hidden') {
      this.end.emit(true);
    }
  }

  close() {
    this.visibility = 'hidden';
  }

  openSlideshow(photoSwipeImage) {

    const options = {
      index: this.images.findIndex(photo => photo.src === photoSwipeImage.src)
    };

    const images = <Item[]>this.images;

    // Initializes and opens PhotoSwipe
    const gallery = new PhotoSwipe(this.photoSwipe.nativeElement, PhotoSwipeUI_Default, images.map(image => image.src), options);
    gallery.init();
  }

  onThumbnailsClick(photoSwipeImage) {
    this.openSlideshow(photoSwipeImage);
  }
  changePage(index) {
    for (const key in this.proyectMapping) {
      if (this.proyectMapping.hasOwnProperty(key)) {
        const element = this.proyectMapping[key];
        if (element == index) {
          this.pageService.setActivePage(key);
          return true;
        }
      }
    }
    return false;
  }
}
