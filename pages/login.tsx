import { signIn, signOut, useSession } from 'next-auth/react'

const LoginPage = () => {
  const { data: session,
  } = useSession();


  if (session) {
    return (
      <div>
        <p className="text-gray-700">Signed in as {session.user.name}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Login</h1>
      <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded mb-4" onClick={() => signIn('google')}>Sign in with Google</button>
    </div>
  );
};

export default LoginPage;
