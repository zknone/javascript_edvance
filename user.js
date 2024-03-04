class User {
    #task;
    constructor(task){
        this.#task = task;
    }

    do() {
        return this.#task.run();
    }
}

export default User;