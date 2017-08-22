import { Shape } from './shape';


export class Rect extends Shape {

    protected width: number;
    protected height: number;

    //(x,y, width,height)
    constructor(ctx, x, y, ...args) {
        super(ctx, x, y);
        this.width = args[0];
        this.height = args[1];
        console.log('...constructor() Rect');
    }

    draw() {
        this.ctx.strokeRect(this.x, this.y, this.width, this.height);
        console.log('...draw() Rect');
    }
}