import { Rect } from './rect';


export class Square extends Rect {

    //(x,y, width)
    constructor(ctx, x, y, width) {
        super(ctx, x, y, width, width);
        console.log('...constructor() Square');
    }

    draw() {
        super.draw();
        console.log('...draw() Square');
    }
}