import React, { useEffect, useState } from 'react'
import Sale from '../components/Sale'
import { getProductosCategorias } from '../services/Productos';
import { useParams } from 'react-router'
const VentaProductos = () => {
  
  const {slug} = useParams();
  console.log(slug);
  
  const [apiProductosCategorias, setProductosCategorias] = useState([]);
  useEffect(() => {
    getProductosCategorias(slug).then((data) => {setProductosCategorias(data)})

  }, []);
  return (
    <div>
        {console.log(apiProductosCategorias)}
        {apiProductosCategorias && apiProductosCategorias[0] && (<Sale productosCategorias={apiProductosCategorias}/>)}
    </div>
  )
}

export default VentaProductos