import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SetPost from './Actions/SetPost'
import './App.css'
import Form from './Components/Posts/Form'
import PostList from './Components/Posts/List'
import Search from './Components/Posts/Search'
import { PostService } from './Services/PostService'

function App() {

  const posts = useSelector(state => (state.posts))
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(true)
  const [postFiltered, setPostFiltered] = useState([])

  const getPosts = async () => {
    const data = await PostService.getPosts()
    dispatch(SetPost(data))
    setIsLoading(false)
  }

  const onFilterPosts = (postName) => {
    setIsLoading(true)
    if (!postName) {
      setPostFiltered(posts)
      setIsLoading(false)
      return
    }
    const newPostsFiltered = posts.filter(post => (post.name == postName))
    setPostFiltered(newPostsFiltered)
    setIsLoading(false)
  }

  const onCreatePost = async (body) => {
    setIsLoading(true)
    await PostService.createPost(body)
    getPosts()
  }

  const onDeletePost = async (postId) => {
    setIsLoading(true)
    await PostService.deletePost(postId)
    getPosts()
  }

  useEffect(() => {
    getPosts()
  }, [])


  useEffect(() => {
    setPostFiltered(posts)
  }, [posts])

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
                <Search onFilterPosts={onFilterPosts} />
                {
                  isLoading ?
                    <div className=" flex justify-center items-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                    </div>
                    :
                    <PostList onDeletePost={onDeletePost} posts={postFiltered} />
                }
                <Form onCreatePost={onCreatePost} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
