import { DivComponent } from '../../common/div-components.js';
import './search.css';

export class Search extends DivComponent {
    constructor(state){
        super();
        this.state = state;
    }

    render() {
        this.el.classList.add("search");
        this.el.innerHTML = `
            <div class="search__wrapper">
                <input 
                    type="text" 
                    placeholder="Find author or book..."
                    class="search__input"
                    value=${this.state.searchQuery ? this.state.searchQuery: ""}
                >
                </input>
                <img src="/static/search.svg" alt="Search icon." />
            </div>
            <button class="search__button" aria-label="Search.">
                <img src="/static/search-white.svg" alt="Search icon."/>
            </button>
        `;

        return this.el;
    }
}