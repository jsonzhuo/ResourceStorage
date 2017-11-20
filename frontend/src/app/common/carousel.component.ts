import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'rs-carousel',
    templateUrl: './carousel.component.html',
    styles: [`img{width:100%;max-height:400px;}`],
    providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})
export class CarouselComponent {
    constructor(config: NgbCarouselConfig) {
        // customize default values of carousels used by this component tree
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
    }
}
