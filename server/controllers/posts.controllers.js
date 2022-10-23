import Post from '../models/Post.js'
export const getPosts = async (req, res) => {
    const posts = await Post.find()
    return res.json(posts)
}
 export const createPost = async (req, res) => {
    const {title, description} = req.body
    const newPost = new Post({title, description})
    console.log(newPost)
    await newPost.save()
    return res.json(newPost)
}
 export const updatePost = async (req, res) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true} )
    console.log(post)
    return res.send('updated')
 }
 export const deletePost = async (req, res) =>{
    const post = await Post.findByIdAndDelete(req.params.id)
    if(!post) return res.status(404).send('Not Found')
    return res.status(204).send('deleted')
 }
 export const getPost = async (req, res) => {
    const post = await Post.findById(req.params.id)
    if(!post) return res.status(404).send('Not Found')
    console.log(post)
    return res.json(post)
 }
