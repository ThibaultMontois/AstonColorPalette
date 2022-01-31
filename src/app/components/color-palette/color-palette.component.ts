import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { ColorBlockComponent } from '../color-block/color-block.component';
import { ColorBlock } from '../models/color-block.model';
import { Slider } from '../models/slider.model';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements AfterViewInit {

  @ViewChildren(ColorBlockComponent) blocksList!: QueryList<ColorBlockComponent>;

  blocks: ColorBlock[] = [
    new ColorBlock('primary'),
    new ColorBlock('secondary', 30),
    new ColorBlock('tertiary', 180)
  ];

  sliders: Slider[] = [
    new Slider('hue', 360),
    new Slider('saturation'),
    new Slider('lightness')
  ];

  constructor() { }

  ngAfterViewInit(): void {
    this.sliders.forEach((slider: Slider) => {
      this.onSliderInput(slider);
    });
  }

  onSliderInput(slider: Slider): void {
    this.blocksList.forEach((block: ColorBlockComponent) => {
      block.changeValue(slider.name, slider.value);
    });
  }

}