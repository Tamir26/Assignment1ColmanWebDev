const postModel = require('../models/postModel');

const getAllPosts = async (req, res) => {
    try {
        const { sender } = req.query;
        const filter = sender ? { sender } : {};
        const posts = await postModel.find(filter);
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving posts', error: error.message });
    }
};
const getPostById = async(req, res) => {
    const id = req.params.id;
    try {
        const post = await postModel.findById(id);
        if (!post) {
            return res.status(404).json({message: 'Post not found'});
        } else{  
          res.json(post);}

    }catch(error) {
        console.error(error);
        res.status(500).json({message: 'Error retrieving post', error: error.message});
    }};
module.exports = {
    getAllPosts
    ,getPostById,
};