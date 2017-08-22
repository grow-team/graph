export abstract class Shape {

    //ctx: 作用域
    protected ctx: any;
    protected x: number = 0;
    protected y: number = 0;

    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        console.log('...constructor() Shape');
    }

    protected start() {
        this.ctx.beginPath();
    }
    protected end() {
        this.ctx.closePath();
        this.ctx.stroke();
    }

    abstract draw(): void;
}