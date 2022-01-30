import { ColorBlockComponent } from "../color-block/color-block.component";

export class CssText {

    name: string;
    block: ColorBlockComponent;

    constructor(name: string, block: ColorBlockComponent) {
        this.name = name;
        this.block = block;
    }

}