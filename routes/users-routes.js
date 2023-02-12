const express = require('express');

const router = express.Router();

const DUMMY_USERS = [
    {
        id: 'u1',
        name: 'Carlos Roberto Ueda'
    }
];

router.get('/:uid', (req, res, next) => {
    const userId = req.params.uid;
    const user = DUMMY_USERS.find(user => user.id === userId);
    res.json({user});
});

module.exports = router;