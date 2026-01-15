const express = require('express');
const router = express.Router({ mergeParams: true }); 
const commentController = require('../controllers/commentController');


router.get('/', commentController.getCommentsForPost);
router.post('/', commentController.createComment);

module.exports = router;