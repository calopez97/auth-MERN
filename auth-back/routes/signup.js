const { jsonResponse } = require('../lib/jsonResponse');

const router = require('express').Router();

router.post('/', (req, res) => {
    const { userName, name, password } = req.body;

    if(!!!userName || !!!name || !!!password){
        return(
            res.status(400).json(
                jsonResponse(400, { error: "Fields are required"})
            )
        )
    }

    res.status(200).json(
        jsonResponse(200, { message: "User created" })
    )

})

module.exports = router;


//TODO terminar de ver el tuto de vidamrr