export async function ChildrenServerComponent() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return <h1>Children Server Component</h1>
}
