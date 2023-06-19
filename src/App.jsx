import { useState } from 'react'
import './App.css'
import TopBar from './components/topBar'
import Stories from './components/stories'
import Posts from './components/posts'
import {storiesData} from "./mocks/stories"

function App() {
  const [stories, setStories] = useState(storiesData);

  return (
    <>
      <TopBar />
      <Stories stories={ stories } />
      <Posts />
    </>
  )
}

export default App
