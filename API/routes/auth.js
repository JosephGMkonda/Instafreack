const router = require("express").Router();
const User = require("../models/Users")


// Register

router.post("/register", async (req,res) => {
   const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
   });

   try{
    const user = await newUser.save()
    res.status(200).json(user);
   }catch(err){
    res.status(500).json(err)
   }


});

// Login
router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({username:req.body.username});
        !user && res.status(404).json("user not found");

        // const validPassword = await user.compare(req.body.password,user.password)
        // !validPassword && res.status(404).json("wrong password")

        res.status(200).json(user)

    }catch(err){
        res.status(500).json(err)


    }
})

module.exports = router;