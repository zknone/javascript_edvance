import { DivComponent } from "../../common/div-components.js";
import './card-list.css';

export class CardList extends DivComponent {
    constructor(appState, parentState){
        super();
        this.appState = appState;
        this.parentState = parentState;
    }

    render(){
        if (this.parentState.loading) {
            this.el.innerHTML = '<div class="card-list__loader">Loading...</div>';
            return this.el;
        }

        this.el.classList.add("card-list");
        this.el.innerHTML = `
            <h1>Found ${this.parentState.list.length} books</h1>
        `;

        return this.el;
    }
}