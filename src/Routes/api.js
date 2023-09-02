const express = require("express");
const router = express.Router();
const blogDetailsController = require('../Controllers/blogDetailsController');
const  blogController  = require("../Controllers/blogController");
const  commentController  = require("../Controllers/commentController");
const  messageController = require("../Controllers/messageController");
const  portfolioController = require("../Controllers/portfolioController");
const  productController = require("../Controllers/productController");
const  profitController = require("../Controllers/profitController");
const projectController = require("../Controllers/projectController")
const serviceController = require("../Controllers/serviceController")
const titleController = require("../Controllers/titleController")


// here we are setting blog Details page api 
router.get('/blogDetails1' , blogDetailsController.blogDetails1);
router.get('/blogDetails2' , blogDetailsController.blogDetails2);
router.get('/blogDetails3' , blogDetailsController.blogDetails3);
router.get('/blogDetails4' , blogDetailsController.blogDetails4);

// here we are setting blog Controller page api 
router.get('/blogController1' , blogController.blogController1);
router.get('/blogController2' , blogController.blogController2);
router.get('/blogController3' , blogController.blogController3);
router.get('/blogController4' , blogController.blogController4);

// here we are setting Comment Controller page api 
router.get('/commentController1' , commentController.commentController1);
router.get('/commentController2' , commentController.commentController2);
router.get('/commentController3' , commentController.commentController3);
router.get('/commentController4' , commentController.commentController4);


// here we are setting message Controller page api 
router.get('/messageController1' , messageController.messageController1);
router.get('/messageController2' , messageController.messageController2);
router.get('/messageController3' , messageController.messageController3);
router.get('/messageController4' , messageController.messageController4);

// here we are setting portfolio Controller1 page api 
router.get('/portfolioController1' , portfolioController.portfolioController1);
router.get('/portfolioController2' , portfolioController.portfolioController2);
router.get('/portfolioController3' , portfolioController.portfolioController3);
router.get('/portfolioController4' , portfolioController.portfolioController4);

// here we are setting portfolio Controller1 page api 
router.get('/profitController1' , profitController.profitController1);
router.get('/profitController2' , profitController.profitController2);
router.get('/profitController3' , profitController.profitController3);
router.get('/profitController4' , profitController.profitController4);

// here we are setting portfolio Controller1 page api 
router.get('/productController1' , productController.productController1);
router.get('/productController2' , productController.productController2);
router.get('/productController3' , productController.productController3);
router.get('/productController4' , productController.productController4);

// here we are setting project  Controller1 page api 
router.get('/projectController1' , projectController.projectController1);
router.get('/projectController2' , projectController.projectController2);
router.get('/projectController3' , projectController.projectController3);
router.get('/projectController4' , projectController.projectController4);

// here we are service Controller  Controller1 page api 
router.get('/serviceController1' , serviceController.serviceController1);
router.get('/serviceController2' , serviceController.serviceController2);
router.get('/serviceController3' , serviceController.serviceController3);

// here we are title Controller  Controller1 page api 
router.get('/titleController1' , titleController.titleController1);
router.get('/titleController2' , titleController.titleController2);
router.get('/titleController3' , titleController.titleController3);
router.get('/titleController4' , titleController.titleController4);




module.exports = router;