import React, { useEffect, useState } from 'react'
import Category from '../components/Category'
import { getCategorias } from '../services/Productos'

const Categorias = () => {
    const [apiCategorias, setCategorias] = useState([]);
    useEffect(() => {
      getCategorias().then((data) => {setCategorias(data)})
  
    }, []);
    return (
    <div>
      {apiCategorias && apiCategorias[2] && console.log(apiCategorias[2].categoria)}
      {apiCategorias && apiCategorias[2] && apiCategorias[2].categoria && (<Category categorias= {apiCategorias}/>)}
      
    </div>
  )
}

export default Categorias