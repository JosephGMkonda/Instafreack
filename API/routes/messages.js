const router = require("express").Router()
const Messages = require("../models/Messages")

router.post("/", async (req,res) => {
    const newMessage = new Messages(req.body);

    try{
        const newMessages = await newMessage.save()
        res.status(200).json(newMessages)

    }catch(err){
        res.status(500).json(err)
    }


});

router.get("/:conversationId", async (req,res) => {
    try{

        const messages =  await Messages.find({
            conversationId: req.params.conversationId,
        })
        res.status(200).json(messages)

    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router;