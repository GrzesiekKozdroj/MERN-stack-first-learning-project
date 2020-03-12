const express = require('express')
const router = express.Router()
const Thought = require('../models/mdbmodel')

//get back all the posts
router.get('/', async (req,res) => {
    try{
        const posts = await Thought.find().limit(10)
        res.json(posts)
    }catch(err){
        res.json({message:err})
    }
})
//get one post
router.get('/:postId', async (req,res) => {
    try{
        const msg = await Thought.findById(req.params.postId)
        res.send(msg)
    }catch(err){
        res.json({message:err})
    }
})
//delete post
router.delete('/:postId', async (req,res)=>{
    try{
        const removedPost = await Thought.remove({_id:req.params.postId})
        res.json(removedPost)
    }catch(err){
        res.json({message:err})
    }
})

//update post
router.patch('./:postId', async (req, res) => {
    try{
        const editPost = await Thought.updateOne({_id:req.params.postId}, {$set: {title: req.body.title, body:req.body.body} } )
        res.json(editPost)
    }catch(err){
        res.json({message:err})
    }
})
//send post
router.post('/', async (req,res) => {
    const post = new Thought({
        title: req.body.title ,
        body: req.body.body
    })
    try{
        const savedPost = await post.save()
        res.json(savedPost)
    }catch(err){
        console.log(err);
        res.json({message:err})
    }
})


module.exports = router