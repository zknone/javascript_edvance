import { DivComponent } from "../../common/div-components.js";
import './header.css';

export class Header extends DivComponent {
    constructor(appState){
        super();
        this.appState = appState;
    }

    render(){
        this.el.classList.add("header");
        this.el.innerHTML = `
            <div>
                <img src="/static/logo.svg" alt="Logo image."/>
            </div>
            <ul class="menu">
                <li class="menu__item">
                    <a class="menu__item-link" href="#">
                        <img src="/static/search.svg" alt="Search icon."/>
                        <p class="menu__item-text">Book search</p>
                    </a>
                </li>
                <li class="menu__item">
                    <a class="menu__item-link" href="#favorites">
                        <img src="/static/favorites.svg" alt="Favorites icon."/>
                        <p class="menu__item-text">Favorites</p>
                    </a>
                    <p class="menu__counter">
                        ${this.appState.favorites.length}
                    </p>
                </li>
            </ul>    
        `;

        return this.el;
    }
}