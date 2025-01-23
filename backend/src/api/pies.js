var express = require('express'),
    router = express.Router();


const pies = [
    {kind: 'apple'},
    {kind: 'pumpkin'}
]


router.get('/', function(req, res){
        res.json(pies)
})

router.get('/:piename', function(req, res){
    let pieName = req.params['piename']
    const result = pies.find((el)=>{
        return pieName === el.kind
    })
    res.json(result)
})

module.exports = router;
