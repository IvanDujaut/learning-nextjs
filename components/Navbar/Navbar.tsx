import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <menu>
        <Link href="/" legacyBehavior>
          <a>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a>About</a>
        </Link>
      </menu>
    </nav>
  )
}
