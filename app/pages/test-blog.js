import Head from 'next/head'
import Home from '../components/blog/Home'
import Navbar from '../components/blog/Navbar'
import Posts from '../components/blog/Posts'
import Services from '../components/blog/Services'

export default function TestBlog() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Posts />
    </>
  )
}