import { AbstractView } from "../../common/view.js";
import './main.css';

export class MainView extends AbstractView{
    constructor(){
        super();
        this.setTitle('Book search');
    }

    render() {
        const main = document.createElement('div');
        main.innerHTML = "Hello!";
        this.app.innerHTML = '';
        this.app.append(main);
    }
}