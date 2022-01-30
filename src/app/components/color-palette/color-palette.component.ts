import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { ColorBlockComponent } from '../color-block/color-block.component';
import { ColorBlock } from '../models/color-block.model';
import { Slider } from '../models/slider.model';
import { CssText } from '../models/css-text.model';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements AfterViewInit {

  @ViewChildren(ColorBlockComponent) blocksList!: QueryList<ColorBlockComponent>;

  blocks: ColorBlock[] = [
    new ColorBlock(),
    new ColorBlock(30),
    new ColorBlock(180)
  ];

  sliders: Slider[] = [
    new Slider('hue', 360),
    new Slider('saturation'),
    new Slider('lightness')
  ];

  texts: CssText[] = [];

  constructor() { }

  ngAfterViewInit(): void {
    this.texts.push(new CssText('primary', this.blocksList.get(0) as ColorBlockComponent));
    this.texts.push(new CssText('secondary', this.blocksList.get(1) as ColorBlockComponent));
    this.texts.push(new CssText('tertiary', this.blocksList.get(2) as ColorBlockComponent));

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