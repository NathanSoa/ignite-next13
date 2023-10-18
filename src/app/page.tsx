import GithubProfile from './components/GithubProfile'
import { LongWait } from './components/LongWait'

import { Suspense } from 'react'

// Quando temos um componente assincrono dentro de um sicrono,
// por padrão, o Next vai esperar o assincrono carregar para depois renderizar o sincrono também
// Para resolver isso, podemos usar o Suspense, que é um componente do React
// Colocando ele em volta de um componente que demora para carregar
// Passamos uma propriedade fallback, que é o que vai ser renderizado enquanto o componente não carrega

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>some text goes here</p>
      <Suspense fallback={<p>Carregando LongWait</p>}>
        <LongWait />
      </Suspense>
      <Suspense fallback={<p>Carregando Github</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  )
}
