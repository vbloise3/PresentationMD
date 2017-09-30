import { Component, OnInit } from '@angular/core';

export interface SlideConfig {
  name: string;
  sequenceNumber: number;
  content: string;
}

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  mySlide = this.createSlide({name: 'black', sequenceNumber: 0, content: 'yose!'});

  constructor() {
  }

  createSlide(config: SlideConfig): {name: string; sequenceNumber: number, content: string} {
    const newSlide = {name: config.name, sequenceNumber: config.sequenceNumber, content: config.content};
    if (config.name) {
      newSlide.name = config.name;
    }
    if (config.sequenceNumber) {
      newSlide.sequenceNumber = config.sequenceNumber;
    }
    return newSlide;
  }

  ngOnInit() {
  }
  setSlideNumber(slideNumber: number) {
    this.mySlide.sequenceNumber = slideNumber;
    this.mySlide.name = 'Slide ' + slideNumber;
  }
}
