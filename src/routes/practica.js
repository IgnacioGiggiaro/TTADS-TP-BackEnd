const express = require('express');
const router = express.Router();

router.get('/practica',(req, res)=>
    {
        res.send("Practica");
    }
);
module.exports = router;