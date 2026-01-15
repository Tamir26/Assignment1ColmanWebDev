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

module.exports = {
    getAllPosts
};