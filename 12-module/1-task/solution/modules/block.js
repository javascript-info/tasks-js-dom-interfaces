export default class Block {

    constructor() {
        this.el = document.createElement('div');
    }

    render(html) {
        this.el.innerHTML = html;
    }
}
