
import { useEffect, useState } from "react";
import ColecaoLinks from "../backend/db/ColecaoLinks";
import Botao from "../components/Botao";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";

import Link from "../core/Link";
import LinkRepositorio from "../core/LinkRepositorio";


export default function Home() {

  const repo: LinkRepositorio = new ColecaoLinks()

  const [link, setLink] = useState<Link>(Link.vazio())
  const [links, setLinks] = useState<Link[]>([])
  const [tituloForm, setTituloForm] = useState('Lista de Links Favoritos')
  const [screen, setScreen] = useState<'listaLinks' | 'formulario'>('listaLinks')
  
  useEffect(getAll, [])
  
  function getAll() {
    repo.getAll().then(links => {
      setLinks(links)
      setScreen('listaLinks')
    })

  }  
  
  function linkSelecionado(link: Link) {
    setLink(link)
    setScreen('formulario')
    setTituloForm('Editar link')


  }
  
 async function linkExcluido(link: Link) {
    await repo.delete(link)
    getAll()

  }

  async function saveLink (link: Link) {
    await repo.save(link)
    setScreen('listaLinks')
    setTituloForm('Lista de Links Favoritos')
    getAll()
     
  }

  function newLink () {
    
    setScreen('formulario')
    setTituloForm('Inserir novo link')
    setLink(Link.vazio())
     
  }

  function cancelar() {

    setScreen('listaLinks')
    setTituloForm('Lista de Links Favoritos')


  }



  return (
    <div className={`
    
    flex justify-center min-h-screen
    bg-gradient-to-l from-blue-500 to-purple-500
    text-white

    `} >
      
     <Layout titulo={tituloForm}>
    {screen === 'listaLinks' ? (


    
     <>
    <div className="flex justify-end">

     <Botao cor="green" className="mb-4"
     onClick={newLink}>
      Novo Link
     </Botao>

    </div>

      <Tabela links={links} linkSelecionado={linkSelecionado} linkExcluido={linkExcluido}></Tabela>
      
      </> 
    ) : (

      <Form links={link} 
      linkChange={saveLink}
      cancelado={cancelar}



      ></Form>

    )}

     </Layout>
      
    </div>
  )
}
