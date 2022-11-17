const { Router } = require('express');
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', function(req,res) {
    controller.getUsers()
    .then ((messageList) => {
        response.sucess(req,res,messageList,200);
    }) 
    .catch (error => {
        response.error(req,res, 'Unexpected Error', 500, error)
    }) 
});

router.post('/', function(req,res) {
    controller.addUser(req.body.name)
        .then(data => {
            response.sucess(req,res,data, 201);
        })
        .catch(err => {
            response.error(req,res,'Internal error', 500, err);
        })   
});

module.exports = router;