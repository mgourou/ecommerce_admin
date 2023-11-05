import styles from '@/styles/Login.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import GoogleButton from "react-google-button"
import GitHubButton from 'react-github-button'

export default function Login() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <div className={styles.login}>
      Not signed in <br />
      <GoogleButton className={styles.test} onClick={() => signIn('google')}></GoogleButton>
      <GitHubButton className={styles.test} onClick={() => signIn('github')}>Sign in</GitHubButton>
    </div>
  )
}

