import {useState, createContext, useContext} from 'react'
const context = createContext()
export const usePosts = () => {
   const cntxt = useContext(context)
   return cntxt
}
export const PostProvider = ({children}) => {
    const [posts, setPosts] = useState([])
    return <context.Provider value={{
        posts
    }}>
        {children}
    </context.Provider>
}