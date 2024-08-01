import Head from 'next/head'
import { redirect } from 'next/navigation'
/* Page.js doesn't contain any code because when you open the website,
it redirects to the page in sign-in folder. */
export default function SignIn() {
  redirect("/sign-in")
  return (
    <>
    </>
  )
}
