import { useSession } from "next-auth/react"
import Link from "next/link"
import { useState } from "react"
import Header from "../../components/Header"
import { request, gql, GraphQLClient  } from 'graphql-request'


const NewPost = () => {
  const { data: session, status } = useSession()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [slug, setSlug] = useState('')

  const submitData = async e => {
    e.preventDefault()
    console.log('data')
    const client = new GraphQLClient('/api/graphql', { headers: {}})
    const mutation = gql`
      mutation Mutation($params: newPostParams) {
        createPost(params: $params)
      }
    `
    
    const variables = {
      title,
      slug,
      body,
      published: false
    }
    const data = await client.request(mutation, { params: variables })
    console.log({ data })
  }
  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (!session) {
    return (
      <div>
        <p>You must be logged in to create a new post.</p>
        <Link href="/">
          <a>Login</a>
        </Link>
      </div>
    )
  }
  
  return (
    <div>
      <Header />
      <form onSubmit={submitData}>
        <div className="flex flex-col">
          <label>Title</label>
          <input className="bg-gray-100" autoFocus type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="flex flex-col">
          <label>Slug</label>
          <input className="bg-gray-100" autoFocus type="text" value={slug} onChange={e => setSlug(e.target.value)} />
        </div>
        <div className="flex flex-col">
          <label>Body</label>
          <textarea className="h-screen bg-gray-100" value={body} onChange={e => setBody(e.target.value)} />
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={!title || !body}
          >
            Submit
          </button>
        </div>
        
      </form>
    </div>
  )
}

export default NewPost