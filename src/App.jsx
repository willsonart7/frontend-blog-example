import { useState, useEffect } from 'react'
import './App.css'
import PostList from './Components/Posts/List/Index'
import { PostService } from './Services/PostService'

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState([])


  const getPosts = async () => {
    const data = await PostService.getPosts()
    setPosts(data)
    setIsLoading(false)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div>
          <h2 className='text-2xl font-semibold text-blue-700'>
            Example admin posts
          </h2>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <div>search</div>
                {
                  isLoading ?
                    <div className=" flex justify-center items-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                    </div>
                    :
                    <PostList posts={posts} />
                }
                <div>input</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
