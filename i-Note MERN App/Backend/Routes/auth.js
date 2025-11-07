const express = require('express');
const router = express.Router()
const User = require('../Model/User');
const {body, validationResult } = require('express-validator');

// create a user using post api/auth/ . Doest require auth 
router.post('/',[
     body('name', 'Name must be at least 3 characters long').isLength({ min: 3 }),
     body('email', 'Enter a valid email').isEmail(),
     body('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
] ,(req, res)=>{
   
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});

    }
    res.send(req.body)
})

module.exports = router