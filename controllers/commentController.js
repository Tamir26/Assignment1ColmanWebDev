const commentmodel = require('../models/commentModel');


const getCommentsForPost = async (req, res) => {
    const postId = req.params.postId;
    try {
        const comments = await commentmodel.find({ post: postId });
        res.json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving comments', error: error.message });
    }
};

const createComment = async (req, res) => {
    const postId = req.params.postId;
    try {
        const comment = await commentmodel.create({ ...req.body, post: postId });
        res.status(201).json(comment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating comment', error: error.message });
    }
};

module.exports = {
    getCommentsForPost,
    createComment
};