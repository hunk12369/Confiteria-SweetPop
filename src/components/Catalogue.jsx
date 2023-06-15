import React from 'react'
import "./Catalogue.css"
const Catalogue = (props) => {
  const categoriasDatos= props.categoriasDatos;
  return (
    <div className='fotos'>
        {console.log(categoriasDatos[4])}
        {categoriasDatos.map(item => (
          <div>
            <div className='C1'> 
            <img src={`https://res.cloudinary.com/djvcgibog/image/upload/v1686105441/SweetPopImages/${item.url}`} alt="" />
            </div>
            <button> <p>{item.categoria}</p> </button>
          </div>
        ))}
        
    </div>

  )
}

export default Catalogue
