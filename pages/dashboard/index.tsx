import { verify } from 'crypto';
import { signOut, useSession } from 'next-auth/react'
import React from 'react'

function index() {
  const { data: session } = useSession();
  console.log(session)
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'grid',
        placeItems: 'center'
      }}
    >
      <h1>Dashboard</h1>
      <hr />
      <p>Welcome, {session?.user.name}</p>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  )
}

export default index