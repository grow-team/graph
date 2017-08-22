export class Graph {
    private ctx: any;
    constructor(id: string) {
        let canvas = document.getElementById(id);
        this.ctx = canvas.getContext && canvas.getContext('2d');
        //todo: 兼容性
    }
}