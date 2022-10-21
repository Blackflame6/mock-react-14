import {useState, useEffect} from 'react'
import Posts from './components/Posts'
import Loading from './components/Loading'
import Title from './components/Title'
import OnePost from './components/OnePost'

const App = () => {

    const [posts, setPosts] = useState([])
    const [onePost, setOnePost] = useState(null)

    useEffect(() => {
        const getPosts = async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts')
            const json = await data.json()
            
            setPosts(json)
        }

        getPosts()
    }, [])


  return (
    <>
   <Title /> 
   {onePost === null ? <Posts onePost={onePost} setOnePost={setOnePost} posts={posts} id="list" /> : <OnePost  />} 
    </>
  )
           
            // if (posts.length > 0 ) {
            //     return (
            //         <>
            //          <Title />
            //          <Posts posts={posts} id="list" /> 
            //         </>

            //     )
            // } 
        //    if (onePost === null ) {
        //         return (
        //             <>
        //               <OnePost />
        //             </>
        //         )
        //     }
        
    

    
}

export default App