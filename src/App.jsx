import { Suspense } from 'react';
import './App.css'
import Content from './components/content/Content'
import Navbar from './components/Navbar/Navbar'

const fetchBlog = async () => {
  const res = await fetch('blogs.json');
  return res.json();
}

function App() {

  const blogPromiss = fetchBlog();

  return (
    <div className='w-full md:max-w-7xl mx-auto' >
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Suspense fallback={'Blogs are loading........'}>
          <Content blogPromiss={blogPromiss}></Content>
        </Suspense>
      </main>
    </div>
  )
}

export default App
