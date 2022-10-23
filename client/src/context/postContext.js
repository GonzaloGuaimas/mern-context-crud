import {useState, createContext, useContext, useEffect} from 'react'
import {getPostsRequest} from '../api/posts'
const context = createContext()
export const usePosts = () => {
   const cntxt = useContext(context)
   return cntxt
}
export const PostProvider = ({children}) => {
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        const res = await getPostsRequest()
        setPosts(res.data)
        console.log(res)
    }
    useEffect(() => {
        getPosts()
      },[])
    

    return <context.Provider value={{
        posts,
        getPosts
    }}>
        {children}
    </context.Provider>
}