import React, { useEffect, useState } from 'react'
import Offer from '../components/Offer'
import { getOferta } from '../services/Productos';
const Ofertas = () => {
  const [apiOfertas, setOfertas] = useState([]);
  useEffect(() => {
    getOferta().then((data) => {setOfertas(data)})

  }, []);
  return (
    <div> 
      {console.log(apiOfertas)}
      {apiOfertas && apiOfertas[2] && (<Offer ofertas={apiOfertas}/>)}
    </div>
  )
}

export default Ofertas