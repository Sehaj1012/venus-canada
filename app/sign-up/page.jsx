import { Register } from '@/actions/authServer';
import Head from 'next/head';
import Link from 'next/link';

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Create an Account</title>
      </Head>
      <div className="bg-[url('/login-background.jpeg')] bg-cover bg-center min-h-screen flex items-center justify-center">
        <div>
          <img src="/logo.png" alt="Logo" className="h-14 absolute top-5 left-5" />
          <img src="/name.png" alt="Electrical Consulting" className="h-8 absolute top-9 left-20" />
        </div>
        <div className="flex items-center justify-center min-h-screen w-1/4">
          <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-md shadow-md border-t-4 border-orange-500">
            <div>
              <h2 className="text-2xl font-bold text-center text-orange-500">Create an Account</h2>
            </div>
            <form className="mt-8 space-y-6" action={Register}>
              <div className="space-y-4 rounded-md shadow-sm">
                <div>
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-700 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-700 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-700 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-orange-600 border border-transparent rounded-md group hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="text-sm text-center text-gray-300">
              <Link href="/sign-in" className="font-medium text-orange-500 hover:text-orange-400">
                Already have an account? <span className='font-bold'>Sign In</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
