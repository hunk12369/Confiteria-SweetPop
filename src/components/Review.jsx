import React from 'react'
import Header from './Header'
import OlasAdorno from './OlasAdorno'
import ProductosReview from './ProductosReview'
import "./Review.css"
const Review = () => {
  return (
<div className='paginaReseñas'>
  <div className='pantallaReseñas'>
    <Header/>
    <div className='reseñas'>
    <div className='bonito2'>
    <div><span>Reseñas</span></div>
    <div className='Foto1Reseñas'>
      <img src="src/assets/images/resenas.png" alt="" />
    </div>
    </div>
    <div><h7>SweetPop</h7></div>
    <div className='linea'></div>
    </div>
    <div className='foto2Reseñas'>
      <img src="src/assets/images/transparent-sanrio-cinnamoroll-cinnamon-animals-kawaii-cinnamoroll 2.png" alt=''/>
    </div>
  </div>
  <OlasAdorno/>
  <ProductosReview/>
  <div className='olasReseñas'>
    <OlasAdorno/>
  </div>
  
</div>

  )
}

export default Review