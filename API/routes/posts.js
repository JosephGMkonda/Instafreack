const router = require("express").Router()
const Posts = require("../models/Posts")
const User = require("../models/Users")

//create a post 
router.post("/", async (req,res) => {
    const newPost = new Posts(req.body);

    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)

    }catch(err){
        res.status(500).json(err)
    }
})

//update posts
router.put("/:id", async (req,res) => {
    try{
        const post = await Posts.findById(req.params.id);

        if(post.userId === req.body.userId){
            await post.updateOne({$set:req.body});
            res.status(200).json("the post has been updated")


        }else{
            res.status(403).json("you can only update your post");
        }


    }catch(err){
        res.status(500).json(err)
    }
})

//deleted 

router.delete("/:id", async (req,res) => {
    try{
        const post = await Posts.findById(req.params.id);

        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("the post has been deleted")


        }else{
            res.status(403).json("you can only delete your post");
        }


    }catch(err){
        res.status(500).json(err)
    }
})

//post like
router.put("/:id/like", async (req, res) => {
    

        const post = await Posts.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push: {likes: req.body.userId}});
            res.status(200).json("The post has been liked");
        }else{
            await post.updateOne({$pull: {likes: req.body.userId}});
            res.status(200).json("The Post has been disliked");
        }


    // }catch(err){
    //     res.status(500).json(err)
    // }
})

//get posts
router.get("/:id", async (req,res) => {
    try{

        const post = await Posts.findById(req.params.id)
        res.status(200).json(post)

    }catch(err){
        res.status(500).json(err)
    }
})


//get user profile
router.get("/profile/:username", async (req,res) => {
    try{

        const user = await User.findOne({username: req.params.username});
        const posts = await Posts.find({userId:user._id})
        res.status(200).json(posts)

      

    }catch(err){
        res.status(500).json(err)
    }
})

//get timeline posts
router.get("/timeline/:userId", async (req,res) => {

    try{
        const  currentUser = await User.findById(req.params.userId);
        const userPosts = await Posts.find({userId: currentUser._id});
        const friendsPosts = await Promise.all(
            currentUser.following.map((friendId) =>{
                return Posts.find({userId: friendId});
            })

        );

        res.status(200).json(userPosts.concat(...friendsPosts));




    }catch(err){
        res.status(500).json(err)
    }
})



module.exports = router