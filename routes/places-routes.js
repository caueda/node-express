const express = require('express');
const HttpError = require('./models/http-error');

const router = express.Router();

const DUMYY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world.',
        location: {
            lat: 40.7498023,
            lng: -74.0028328
        },
        address: '20 W 34th St., New York, NY 10001, United States',
        creator: 'u1'
    }
];

router.get('/:pid', (req, res, next) => {
    const placeId = req.params.pid;
    const place = DUMYY_PLACES.find(place => place.id === placeId);
    if(!place) {
        throw new HttpError('Could not find a place for the provided pid.', 404);
    }    
    res.json({place});
});

router.get('/user/:uid', (req, res, next) => {
    const userId = req.params.uid;
    const place = DUMYY_PLACES.find(user => user.creator === userId);
    if(!place) {
        next(new HttpError('Could not find a place for the provided uid.', 404));
    }  else {
        res.json({place});
    }    
});

module.exports = router;