'use client'

import { ReactNode, useState } from 'react'

export function ClientComponent({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount((prev) => prev + 1)
  }

  return (
    <button onClick={handleClick}>
      Count ({count}) {children}
    </button>
  )
}
