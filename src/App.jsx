import './App.css'
import PostList from './components/posts/list'

function App() {

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
                <PostList />
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
