import { DivComponent } from '../../common/div-components.js';
import './search.css';

export class Search extends DivComponent {
    constructor(state){
        super();
        this.state = state;
    }

    search() {
        const value = this.el.querySelector(".search__input").value;
        this.state.searchQuery = value;
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


        this.el.querySelector('.search__button').addEventListener('click', this.search.bind(this));
        this.el.querySelector('.search__input').addEventListener('keydown', (event) => {
            if (event.code === 'Enter') {
                this.search();
            }
        })
        return this.el;
    }
}