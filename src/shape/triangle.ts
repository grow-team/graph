import { Path } from './path';


export class Triangle extends Path {

    protected args: number[];

    //(x1,y1, x2,y2, x3,y3)
    constructor(ctx, x,y, ...args ) {
        super(ctx, x,y, ...args);
        console.log('...constructor() Triangle');
    }

    draw() {
        super.draw();
        console.log('...draw() Triangle');
    }
}