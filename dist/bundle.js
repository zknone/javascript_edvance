class AbstractView {
    constructor(){
        this.app = document.querySelector('#root');
    }

    setTitle(title) {
        document.title = title;
        console.log(this.app);
    }

    render(){
        return;
    };

    destroy(){
        return;
    };
}

class MainView extends AbstractView{
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

class App {
    routes = [{
        path: "",
        view: MainView,
    }];

    constructor() {
        window.addEventListener('hashchange', this.route.bind(this));
        this.route();
    }

    route(){
        if(this.currentView) {
            this.currentView.destroy();
        }
        const view = this.routes.find((item) => item.path === location.hash).view;
        this.currentView = new view();
        this.currentView.render();
    }
}


new App();
