import { Component, Input } from '@angular/core';
import { CssText } from '../models/css-text.model';

@Component({
  selector: 'app-css-text',
  templateUrl: './css-text.component.html',
  styleUrls: ['./css-text.component.scss']
})
export class CssTextComponent {

  @Input() text!: CssText;

  constructor() { }

  toString(): string {
    return `--clr-${this.text.name}: ${this.text.block.getHSL()};`;
  }

}