import React from 'react'
import "./Catalogue.css"
import { NavLink } from 'react-router-dom';
const Catalogue = (props) => {
  const categorias= props.categorias;
  return (
    <div className='fotos'>
        {console.log(categorias[4])}
        {categorias.map(item => (
          <div>
            <div className='C1'> 
            <img src={`https://res.cloudinary.com/djvcgibog/image/upload/v1686105441/SweetPopImages/${item.url}`} alt="" />
            </div>
            <NavLink to={`/categorias/${item.id_categoria}`}>
              <button> <p>{item.categoria}</p> </button>
            </NavLink>
          </div>
        ))}
        
    </div>

  )
}

export default Catalogue
