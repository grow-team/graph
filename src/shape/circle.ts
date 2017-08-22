import { Arc } from './arc';


export class Circle extends Arc {

    //(x,y, r)
    constructor(...args) {
        let [ctx, x, y, r] = args;
        super(ctx, x, y, r);
        console.log('...constructor() Circle');
    }

    draw() {
        super.start();
        this.ctx.arc(this.x, this.y, this.r, 0, Math.PI*2); //anticlockwise
        super.end();
        console.log('...draw() Circle');
    }
}