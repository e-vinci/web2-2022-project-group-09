/* eslint-disable */
const express = require('express');

const router = express.Router();

const Point = require('../models/point');

router.get('/', (req, res) => {
    console.log(Point.get(req.session.user_id))
    return res.json(Point.get(req.session.user_id))

});


router.post('/', (req, res) => {
    console.log(req.body.nbePoint,req.body.nbeErreu)
    const user_id = req.session.user_id;
    const nbePoint = req?.body?.nbePoint?.length !== 0 ? req.body.nbePoint : undefined;
    const nbeErreu =req?.body?.nbeErreu?.length !== 0 ? req.body.nbeErreu : undefined;
    if(!nbePoint || !nbeErreu) return res.sendStatus(400);
    return res.json(Point.addPoint(nbePoint,nbeErreu,user_id))

});




//get top 10 points

router.get('/getRanking', (req, res) => {
    console.log(Point.getRanking())
    return res.json(Point.getRanking())

});


router.get('/getMorePoints', (req, res) => {
    console.log(Point.getMorePoints())
    return res.json(Point.getMorePoints())

});


router.get('/getFirst', (req, res) => {
    console.log(Point.getFirst())
    return res.json(Point.getFirst())

});

router.get('/getSeconde', (req, res) => {
    console.log(Point.getSeconde())
    return res.json(Point.getSeconde())

});

router.get('/getThird', (req, res) => {
    console.log(Point.getThird())
    return res.json(Point.getThird())

});




module.exports = router;