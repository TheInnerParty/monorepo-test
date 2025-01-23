import express from 'express';

const pieRoutes = express.Router();


const pies = [
    {kind: 'apple'},
    {kind: 'pumpkin'}
]


pieRoutes.get('/', function(req, res){
        res.json(pies)
})

pieRoutes.get('/:piename', function(req, res){
    let pieName = req.params['piename']
    const result = pies.find((el)=>{
        return pieName === el.kind
    })
    res.json(result)
})

export { pieRoutes}
