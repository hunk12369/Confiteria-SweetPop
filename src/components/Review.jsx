import React from 'react'
import Header from './Header'
import OlasAdorno from './OlasAdorno'
import ProductosReview from './ProductosReview'
import "./Review.css"
const Review = () => {
  return (
<div className='paginaReseñas'>
  <div className='pantallaReseñas'>
    <div className='tituloReseñas'>
      <span>Reseñas</span>
    </div>
    <div className='Foto1Reseñas'>
      <img src="src/assets/images/resenas.png" alt="" />
    </div>
    <div className='subtituloReseñas'>
      <p>SweetPop</p>
    </div>
    <div className='linea'></div>
    <div className='foto2Reseñas'>
      <img src="src/assets/images/transparent-sanrio-cinnamoroll-cinnamon-animals-kawaii-cinnamoroll 2.png" alt=''/>
    </div>
  </div>
  <Header/>
  <div className='olasReseñas'>
    <OlasAdorno/>
  </div>
  <div className='olasCategorias2'>
    <OlasAdorno/>
  </div>
  <ProductosReview/>
</div>

  )
}

export default Review