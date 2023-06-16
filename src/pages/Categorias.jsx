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
      {apiCategorias && apiCategorias[0] && console.log(apiCategorias[2].categoria)}
      {apiCategorias && apiCategorias[0] && apiCategorias[0].categoria && (<Category categorias= {apiCategorias}/>)}
      
    </div>
  )
}

export default Categorias