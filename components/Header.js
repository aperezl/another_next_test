import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  const isActive = pathname => router.pathname === pathname

  { status === 'loading' && <p>Loading...</p> }
  return (
    <>
      <Link href='/'>
        <a>Posts</a>
      </Link>
      {session
        ? (
          <div>
            <Link href='/admin/draft'>
              <a>Draft</a>
            </Link>
            <Link href='/admin/new'>
              <a>New</a>
            </Link>
          </div>
          )
        : (
            null
          )}
    </>
  )
}

export default Header
