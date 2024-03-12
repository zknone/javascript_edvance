import { AbstractView } from '../../common/view.js';
import './main.css';
import onChange from 'on-change';
import { Header } from '../../components/header/header.js';

export class MainView extends AbstractView{
    state = {
        searchQuery: undefined,
        list: [],
        loading: false,
        offset: 0, 
    };

    constructor(appState){
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this))
        this.setTitle('Book search');
    }

    appStateHook(path) {
        if (path === 'favorites') {
            console.log(path);
        }
    }

    render() {
        const main = document.createElement('div');
        main.classList.add('main');
        this.app.innerHTML = '';
        this.app.append(main);
        this.renderHeader();
        this.appState.favorites.push('1');
    }

    renderHeader() {
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    }
}