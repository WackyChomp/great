import { usePuterStore } from '~/lib/puter'

export const meta = () => ([
  { title: 'GREAT | Auth'},
  { name: 'description', content: 'Log into your account' },
])


const auth = () => {
  const { isLoading, auth } = usePuterStore();
 
  return (
    <main className='bg-red-900 bg-cover min-h-screen flex items-center justify-center'>
      <div className="gradient_border shadow-2xl">
        <section className="bg-green-600 flex flex-col gap-10 rounded-2xl p-10">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1>Welcome</h1>
            <h2>Log to proceed further!</h2>
          </div>
          <div>
            {isLoading ? (
              <button className='auth_button animate-pulse'>
                <p>Signing in . .. ...</p>
              </button>
            ): (
              <>
              {auth.isAuthenticated ? (
                <button onClick={auth.signOut}>
                  Logout
                </button>
              ): (
                <button onClick={auth.signIn}>
                  Log In
                </button>
              )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}

export default auth