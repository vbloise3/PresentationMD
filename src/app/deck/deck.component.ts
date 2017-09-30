import { Component, OnInit } from '@angular/core';
import { SlideComponent } from '../slide/slide.component';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  name = 'Nested Components';
  slides: SlideComponent[] = new Array<SlideComponent>();

  constructor() {
    this.slides[0] = new SlideComponent();
    this.slides[0].mySlide = new SlideComponent().createSlide({name: 'Slide 0', sequenceNumber: 0, content: 'Slide 0, Uggin!'});

    this.slides[1] = new SlideComponent();
    this.slides[1].mySlide = new SlideComponent().createSlide({name: 'Slide 1', sequenceNumber: 1, content: 'Slide 1, also!'});
  }

  ngOnInit() {
  }

}
