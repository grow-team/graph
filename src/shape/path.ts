import { Shape } from './shape';


export class Path extends Shape {

    protected args: number[];

    constructor(ctx, x,y, ...args) {
        super(ctx, x,y);
        this.args = args;
        console.log('...constructor() Path');
    }

    draw() {
        super.start();

        let args = this.args;
        this.ctx.moveTo(this.x, this.y);
        for(let i=0; i<args.length-1; i+=2){
            this.ctx.lineTo(args[i], args[i+1]);
        }

        super.end();
        console.log('...draw() Path');
    }
}