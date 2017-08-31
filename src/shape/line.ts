import { Path } from './path';


export class Line extends Path {

    protected args: number[];

    constructor(ctx, x,y, ...args ) {
        super(ctx, x,y, ...args);
        console.log('...constructor() Line');
    }

    draw(x, y , ...args) {
        super.draw(x, y , ...args);
        console.log('...draw() Line');
        return this;
    }
    
    clear(){
        console.log('clear myself');
        return this;
    }
}