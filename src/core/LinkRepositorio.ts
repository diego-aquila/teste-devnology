import Link from "./Link";

export default interface LinkRepositorio {

    save(link: Link): Promise<Link>
    delete(link: Link): Promise<void>
    getAll(): Promise<Link[]>
    

}