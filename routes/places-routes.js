const express = require('express');

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
        const error = new Error('Could not find a place for the provided pid.');
        error.code = 404;
        throw error;
    }    
    res.json({place});
});

router.get('/user/:uid', (req, res, next) => {
    const userId = req.params.uid;
    const place = DUMYY_PLACES.find(user => user.creator === userId);
    if(!place) {
        const error = new Error('Could not find a place for the provided uid.');
        error.code = 404;
        next(error);
    }  else {
        res.json({place});
    }    
});

module.exports = router;