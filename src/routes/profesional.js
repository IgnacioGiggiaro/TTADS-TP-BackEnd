const express = require('express');
const router = express.Router();

router.get('/profesional',(req, res)=>
    {
        res.send("Profesional");
    }
);
module.exports = router;