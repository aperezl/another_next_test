import useSWR, { SWRConfig, unstable_serialize } from 'swr'
import { request } from 'graphql-request'

const userQuery = `
  {
    getUser {
      id
      name
    }
  }
`

const linkQuery = `
{
  links {
    id
    description
    title
    url
    category
    imageUrl
    users
  }
}
`

const fetcher = (endpoint, query) => {
  return request(endpoint, query)
}
function useUser (id) {
  const { data, error } = useSWR(['/api/graphql', userQuery], fetcher)
  return {
    user: data.getUser,
    isLoading: !error && !data,
    isError: error
  }
}
function useLinks () {
  const { data, error } = useSWR(['/api/graphql', userQuery], fetcher)
  return {
    links: data,
    isLoading: !error && !data,
    isError: error
  }
}

function Avatar ({ id }) {
  const { user, isLoading, isError } = useUser(id)
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>
  return <span>name: {user?.name}</span>
}
function Content () {
  const { user, isLoading, isError } = useUser()
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>
  return <h1>Welcome back, {user?.name}</h1>
}

function Navbar () {
  return (
    <div>
      <Avatar id={1} />
    </div>
  )
}

function Links () {
  return <>Hola</>
}

export default function Swr ({ fallback }) {
  return (
    <>
      <SWRConfig value={{ fallback }}>
        <Navbar />
        <hr />
        <Content />
        <hr />
        <Links />
      </SWRConfig>
    </>
  )
}

export async function getStaticProps () {
  // `getStaticProps` is executed on the server side.
  const data = {
    getUser: {
      name: 'Antonio Perez'
    }
  }
  return {
    props: {
      fallback: {
        [unstable_serialize(['/api/graphql', userQuery])]: data
      }
    }
  }
}
