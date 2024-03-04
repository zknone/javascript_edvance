class Task {
    #message;
    constructor(){
        this.#message = 'Ciao!';
    }
    run(){
        console.log(this.#message);
    }
}

export default Task;