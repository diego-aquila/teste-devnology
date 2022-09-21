export default class Link {

    #id: string
    #titulo: string
    #link: string


    constructor(titulo: string, link: string, id: string = null) {
        this.#titulo = titulo
        this.#link = link
        this.#id = id
    }

    static vazio() {

        return new Link('', '')
    }


    get id() {
        return this.#id

    }

    get titulo() {
        return this.#titulo

    }

    get link() {
        return this.#link

    }

    
}