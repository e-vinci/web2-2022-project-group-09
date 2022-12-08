/* eslint-disable */
const express = require('express');

const router = express.Router();

const Point = require('../models/point')

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

module.exports = router;