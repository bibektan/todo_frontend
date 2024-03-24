class Task{
    #id
    #text

    constructor(id, text){
        this.#id = id
        this.#text = text
    }

    getId(){
        return this.#id
    }

    getTask(){
        return this.#text
    }
}

export { Task }