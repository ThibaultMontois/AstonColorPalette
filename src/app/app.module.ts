import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorPaletteComponent } from './components/color-palette/color-palette.component';
import { ColorBlockComponent } from './components/color-block/color-block.component';
import { SliderComponent } from './components/slider/slider.component';
import { CssTextComponent } from './components/css-text/css-text.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorPaletteComponent,
    ColorBlockComponent,
    SliderComponent,
    CssTextComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
