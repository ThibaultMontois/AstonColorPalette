import { Component, Input } from '@angular/core';
import { ColorBlock } from '../models/color-block.model';

@Component({
  selector: 'app-color-block',
  templateUrl: './color-block.component.html',
  styleUrls: ['./color-block.component.scss']
})
export class ColorBlockComponent {

  @Input() block!: ColorBlock;

  constructor() { }

  getName(): string {
    return this.block.name;
  }

  getHSL(): string {
    return `hsl(${this.block.hue + this.block.hueModifier}, ${this.block.saturation}%, ${this.block.lightness}%)`;
  }

  changeValue(name: string, value: number): void {
    switch (name) {
      case 'hue':
        this.block.hue = value;
        break;
      case 'saturation':
        this.block.saturation = value;
        break;
      case 'lightness':
        this.block.lightness = value;
    }
  }

}