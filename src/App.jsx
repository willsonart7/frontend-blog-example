import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from "uuid"
import AddPost from './Actions/AddPost'
import DeletePost from './Actions/DeletePost'
import filterPost from './Actions/filterPost'
import restorePosts from './Actions/restorePosts'
import SetPosts from './Actions/SetPosts'
import './App.css'
import Form from './Components/Posts/Form'
import PostList from './Components/Posts/List'
import Search from './Components/Posts/Search'
import { PostService } from './Services/PostService'

function App() {

  const posts = useSelector(state => (state.posts))
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(true)

  const getPosts = async () => {
    const data = await PostService.getPosts()
    dispatch(SetPosts(data))
    setIsLoading(false)
  }

  const onFilterPosts = (postName) => {
    setIsLoading(true)
    if (!postName) {
      dispatch(restorePosts())
      setIsLoading(false)
      return
    }
    dispatch(filterPost(postName))
    setIsLoading(false)
  }

  const onCreatePost = async (body) => {
    setIsLoading(true)
    const newPost = {
      id: uuidv4(),
      name: body.name, 
      description: body.description
    }
    await PostService.createPost(newPost)
    dispatch(AddPost(newPost))
    setIsLoading(false)
  }

  const onDeletePost = async (postId) => {
    setIsLoading(true)
    await PostService.deletePost(postId)
    dispatch(DeletePost(postId))
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
                <Search onFilterPosts={onFilterPosts} />
                {
                  isLoading ?
                    <div className=" flex justify-center items-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                    </div>
                    :
                    <PostList onDeletePost={onDeletePost} posts={posts} />
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
