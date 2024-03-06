(function () {
    'use strict';

    class User {
        #task;
        constructor(task){
            this.#task = task;
        }

        do() {
            return this.#task.run();
        }
    }

    class Task {
        #message;
        constructor(){
            this.#message = 'Ciao!';
        }
        run(){
            console.log(this.#message);
        }
    }

    const task = new Task;
    task.run();

    const user = new User(task);
    user.do();

})();
