import firebase from "../config";
import Link from "../../core/Link";
import LinkRepositorio from "../../core/LinkRepositorio";

export default class ColecaoLinks implements LinkRepositorio {


    #conversor = {
        toFirestore(link: Link) {
            return {

                titulo: link.titulo,
                link: link.link,


            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Link {

            const dados = snapshot.data(options)
            return new Link(dados.titulo, dados.link, snapshot.id)
        }
    }

    async save(link: Link): Promise<Link> {

        if(link?.id) {
           await this.colecao().doc(link.id).set(link)

           return link
        } else {

           const docRef = await this.colecao().add(link)
           const doc = await docRef.get()
           return doc.data()
        }

        

    }
    
    async delete(link: Link): Promise<void> {
        return this.colecao().doc(link.id).delete()

    }

    async getAll(): Promise<Link[]> {
         const query = await this.colecao().get()
         return query.docs.map(doc => doc.data()) ?? []

    }

    private colecao() {

        return firebase.firestore().collection('links').withConverter(this.#conversor)

    }

}