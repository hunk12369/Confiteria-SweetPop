import React from 'react'
import Catalogue from './Catalogue'
import "./Category.css"
import FotterLogo from './FotterLogo'
import Header from './Header'

import OlasAdorno from './OlasAdorno'
const Category = () => {
  return (
    <div className='paginaCategorias'>
        <div className='pantalla'>
        <div className='tituloCate'><h1>Categorias</h1></div>
        <div className='subtituloCate'><h2>SweetPop</h2></div>
        <div className='linea'></div>
        <div className='foto1Categorias'>
        <img src="src/assets/images/transparent-sanrio-cinnamoroll-cinnamon-animals-kawaii-cinnamoroll 2.png" alt=''/>
        </div>
        </div>
        <div className='olasCategorias'>
        <OlasAdorno/>
        </div>
        
    <Header/>
    <FotterLogo/>
    <Catalogue/>
    <div className='olasCategorias2'>
    <OlasAdorno/>
    </div>
    </div>
    

  )
}

export default Category