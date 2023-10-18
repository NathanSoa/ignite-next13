'use client'
// Transforma o componente em um componente do lado do cliente
// Ele continua sendo renderizado pelo servidor
// Mas ele passa pelo processo de hidratação
// Pega o HTML seco e converte ele em interativo com JS

interface ProductParams {
  params: {
    data: string[]
  }
}

export default function Product({ params }: ProductParams) {
  const [id, color, direction] = params.data

  function addToCart() {
    console.log('Adding to cart')
  }

  return (
    <div>
      <p>Product with id: {id}</p>
      <p>Color: {color}</p>
      <p>Direction: {direction}</p>

      <button
        onClick={addToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Adicionar ao carrinho
      </button>
    </div>
  )
}
