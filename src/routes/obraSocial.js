const express = require('express');
const router = express.Router();

router.get('/obraSocial',(req, res)=>
    {
        res.send("Obra Social");
    }
);

module.exports = router;