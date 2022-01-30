import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Slider } from '../models/slider.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  @Input() slider!: Slider;

  @Output() sliderInput: EventEmitter<Slider> = new EventEmitter<Slider>();

  constructor() { }

  onInput(evt: Event): void {
    const input = evt.target as HTMLInputElement;
    this.slider.value = parseInt(input.value);
    this.sliderInput.emit(this.slider);
  }

}