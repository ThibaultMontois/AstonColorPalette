export class Slider {

    name: string = '';
    max: number = 100;
    min: number = 0;
    value: number;

    constructor(name: string, max?: number, min?: number, value?: number) {
        this.name = name;
        if (max !== undefined) this.max = max;
        if (min !== undefined) this.min = min;
        this.value = value !== undefined ? value : (this.max - this.min) / 2;
    }

}