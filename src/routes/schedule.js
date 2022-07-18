const express = require('express');
const router = express.Router();

router.get('/schedule',(req, res)=>
    {
        res.send("Horarios");
    }
);
module.exports = router;