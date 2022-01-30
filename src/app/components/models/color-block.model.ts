export class ColorBlock {

    hueModifier: number = 0;
    hue: number = 180;
    saturation: number = 50;
    lightness: number = 50;

    constructor(hueModifier?: number, hue?: number, saturation?: number, lightness?: number) {
        if (hueModifier !== undefined) this.hueModifier = hueModifier;
        if (hue !== undefined) this.hue = hue;
        if (saturation !== undefined) this.saturation = saturation;
        if (lightness !== undefined) this.lightness = lightness;
    }

}