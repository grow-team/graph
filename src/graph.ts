import { Line } from './shape/line';

export class Graph {
    private ctx: any;
    constructor(id: string) {
        let canvas = document.getElementById(id);
        this.ctx = canvas.getContext && canvas.getContext('2d');
        //todo: 兼容性
    }
    line(x,y,...args) {
        let line = new Line(this.ctx,x,y,...args);

        return line;
    }
}