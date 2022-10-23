import Post from '../models/Post.js'
export const getPosts = async (req, res) => {
    try{
      const posts = await Post.find()
      return res.json(posts)
    }catch(error){
      return res.status(400).json({message: error.message})
    }
}
 export const createPost = async (req, res) => {
   try{
      const {title, description} = req.body
      const newPost = new Post({title, description})
      console.log(newPost)
      await newPost.save()
      return res.json(newPost)
   }catch(error){
     return res.status(400).json({message: error.message})
   }
   
}
 export const updatePost = async (req, res) => {
   try{
      const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true} )
      console.log(post)
      return res.json(post)
   }catch(error){
     return res.status(400).json({message: error.message})
   }
   
 }
 export const deletePost = async (req, res) =>{
   try{
      const post = await Post.findByIdAndDelete(req.params.id)
      if(!post) return res.status(404).send('Not Found')
      return res.status(204).send('deleted')
   }catch(error){
     return res.status(400).json({message: error.message})
   }
    
 }
 export const getPost = async (req, res) => {
   try{
      const post = await Post.findById(req.params.id)
      if(!post) return res.status(404).send('Not Found')
      console.log(post)
      return res.json(post)
   }catch(error){
     return res.status(400).json({message: error.message})
   }
    
 }
