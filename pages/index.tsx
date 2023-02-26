import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  /** vamos a utilizar una de nuestras
   * APIs en REACT, esto se utiliza de
   * la misma forma como si lo hicieramos
   * en cualquier aplicacion de REACT es
   * decir que una forma que podemos utilizar
   * es utilizar a traves del useState
   */
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data);
      })
  }, []);

  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>
      {productList.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  )
}

export default HomePage
