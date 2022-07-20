const express = require('express');
const router = express.Router();

router.get('/turno',(req, res)=>
    {
        res.send("turno");
    }
);
module.exports = router;