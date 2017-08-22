import { Shape } from './shape';


export class Arc extends Shape {

    protected r: number = 10;
    protected startDegree: number = 0;
    protected endDegree: number = 360;
    protected anticlockwise: boolean = false;
    
    //(x,y, r, startDegree,endDegree, anticlockwise)
    constructor(ctx, x, y, ...args) {
        super(ctx, x, y);

        this.r = args[0];
        this.startDegree = args[1];
        this.endDegree = args[2];
        this.anticlockwise = args[3];
        // let [this.r, this.startDegree, this.endDegree, this.anticlockwise] = args;
        console.log('...constructor() Arc');
    }

    draw() {
        super.start();
        let unit = Math.PI/180;
        this.ctx.arc(this.x,this.y, this.r, this.startDegree*unit, this.endDegree*unit, this.anticlockwise);
        super.end();
        console.log('...draw() Arc');
    }
}