export async function LongWait() {
  await new Promise((resolve) => setTimeout(resolve, 5000))

  return <h1>Loaded in 5 seconds</h1>
}
