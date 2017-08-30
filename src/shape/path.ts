import { Shape } from './shape';


export class Path extends Shape {

    protected args: number[];

    constructor(ctx, x,y, ...args) {
        super(ctx, x,y);
        this.args = args;

        this.ctx.beginPath();

        this._draw(x,y,args);

        this.ctx.closePath();
        this.ctx.stroke();
        console.log('...constructor() Path');
    }

    draw(x, y , ...args) {

        super.start();
        this._draw(x, y,args);
        super.end();

        console.log('...draw() Path');
    }

    private _draw( x, y, ...args) {
        
        this.ctx.moveTo(x,y);
        for(let i=0; i<args.length-1; i+=2){
            this.ctx.lineTo(args[i], args[i+1]);
        }
        
    }
}