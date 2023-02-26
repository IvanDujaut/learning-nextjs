import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const { query } = useRouter()
  const [anAvocate, setAnAvocate] = useState<TProduct>()

  useEffect(() => {
    if (query.id) {
      window
        .fetch(`api/avo/${query.id}`)
        .then((response) => response.json())
        .then((data) => {
          setAnAvocate(data)
        })
    }
  })

  return (
    <section>
      <h1>Página producto: {anAvocate?.name}</h1>
    </section>
  )
}

export default ProductPage
