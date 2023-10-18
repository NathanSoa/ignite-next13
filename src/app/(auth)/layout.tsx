import { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className="text-xl font-bold">This is my auth header</header>
      {children}
    </div>
  )
}
