const router = require('express').Router();
const { User } = require('../../models');

// Get All Users    /api/users
router.get('/', (req, res) => {
    User.findAll()
        .then(userData => res.json(userData))
        .catch(err => res.status(500).json(err));
});

// Get User By Id   /api/users/:id
router.get('/:id', (req, res) => {
    User.get
});


// Add User         /api/users
router.post('/', (req, res) => {});


// Edit User
router.put('/:id', (req, res) => {});



// Delete User
router.delete('/:id', (req, res) => {});



module.exports = router;
