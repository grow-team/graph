import { Path } from './path';


export class Line extends Path {

    protected args: number[];

    //(x1,y1, x2,y2)
    constructor(ctx, x,y, ...args ) {
        super(ctx, x,y, ...args);
        console.log('...constructor() Line');
    }

    draw() {
        super.draw();
        console.log('...draw() Line');
    }
}