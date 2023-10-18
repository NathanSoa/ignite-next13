// Componentes server-side podem ter await
// para carregar dados necessário para sua primeira visualização

// Streaming SSR => Renderiza o componente de forma parcial enquanto os dados estão sendo carregados

export default async function GithubProfile() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch('https://api.github.com/users/NathanSoa')
  const user = await response.json()

  return <pre>{JSON.stringify(user, null, 2)}</pre>
}
