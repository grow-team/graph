import { Shape } from './shape';


export class Path extends Shape {

    protected args: number[];

    constructor(ctx, x,y, ...args) {
        super(ctx, x,y);
        this.draw(x, y, ...args);
        console.log('...constructor() Path');
    }

    draw(x, y , ...args) {
        super.start();

        this.ctx.moveTo(x,y);
        for(let i=0; i<args.length-1; i+=2){
            this.ctx.lineTo(args[i], args[i+1]);
        }

        super.end();
        console.log('...draw() Path');
    }

}