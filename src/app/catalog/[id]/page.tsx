import { ChildrenServerComponent } from './ChildrenServerComponent'
import { ClientComponent } from './ClientComponent'

interface CatalogParams {
  id: string
}

interface CatalogPageProps {
  params: CatalogParams
}

// Client boundary: Componentes declarados dentro de um client component pai também serão client components
// A única maneira de termos um server component dentro de um client component é se ele for usado como children

export default function Catalog({ params }: CatalogPageProps) {
  return (
    <div>
      <h1>Catalog: {params.id}</h1>
      <ClientComponent>
        <ChildrenServerComponent />
      </ClientComponent>
    </div>
  )
}
