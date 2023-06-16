import React, { useEffect, useState } from 'react'
import Discount from '../components/Discount'
import { getDescuento } from '../services/Productos';

const Descuento = () => {
  const [apiDescuentos, setDescuentos] = useState([]);
  useEffect(() => {
    getDescuento().then((data) => {setDescuentos(data)})

  }, []);
  return (
    <div>
      {console.log(apiDescuentos)}
      {apiDescuentos && apiDescuentos[2] && (<Discount descuentos={apiDescuentos}/>)}
    </div>
  )
}

export default Descuento