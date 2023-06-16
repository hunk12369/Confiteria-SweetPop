import React from 'react'
import Catalogue from './Catalogue'
import "./Category.css"
import FotterLogo from './FotterLogo'
import Header from './Header'

import OlasAdorno from './OlasAdorno'
const Category = (props) => {
  const categorias= props.categorias;
  return (
    <div className='paginaCategorias'>
        {console.log(categorias)}
        <div className='pantalla'>
        <div className='categorias'>
        <div><span>Categorias</span></div>
        <div><h6>SweetPop</h6></div>
        <div className='linea'></div>
        </div>
        <div className='foto1Categorias'>
        <img src="src/assets/images/transparent-sanrio-cinnamoroll-cinnamon-animals-kawaii-cinnamoroll 2.png" alt=''/>
        </div>
        </div>
        <OlasAdorno/>
        <Catalogue categorias={categorias}/>
        <FotterLogo/>
        <div className='olasCategorias2'>
        <OlasAdorno/>
        </div>
        
    </div>
    

  )
}

export default Category