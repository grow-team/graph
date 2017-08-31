import { Shape } from './shape';


export class Path extends Shape {

    protected args: number[];

    constructor(ctx, x,y, ...args) {
        super(ctx, x,y);

        this.args = args;
        this.ctx.beginPath();

        this.ctx.moveTo(x,y);
        for(let i=0; i<args.length-1; i+=2){
            this.ctx.lineTo(args[i], args[i+1]);
        }

        this.ctx.closePath();
        this.ctx.stroke();
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

// rollup存在编译问题 ，当连续两个方式都使用了 ...args，在第一个方法中将args转换成了数组，此时传递给第二个方法时候，参数个数出现问题

// let _draw =  function(ctx,x,y,...args){
//     console.log( args instanceof Array);
//     ctx.moveTo(x,y);
//     for(let i=0; i<args.length-1; i+=2){
//         ctx.lineTo(args[i], args[i+1]);
//     }
// }