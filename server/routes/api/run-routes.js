const { Runs } = require('../../models');
const router = require('express').Router();

// Routes

// Get All Runs

router.get('/', (req, res) =>{
    Runs.findAll()
        .then(runsData => res.json(runsData))
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        });
});


// Get Run By Id
router.get('/:id', (req, res) => {
    Runs.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(runsData => {
        if (!runsData) {
            res.status(404).json({ message: 'There is no user with this id'})
            return;
        } else res.json(runsData);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
});



// Find Run By Location
router.get('/:location', (req, res) => {});


// Post Run
router.post('/', (req, res) => {
    Runs.create({
        run_name: req.body.run_name,
        run_date: req.body.run_date,
        run_calories: req.body.run_calories,
        run_distance: req.body.run_distance,
        run_location: req.body.run_distance,
        run_notes: req.body.run_notes
    })
    .then(runsData => {
        res.json(runsData);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    });
});



// Edit Run by id
router.put('/:id', (req, res) => {});


// Delete Run by id
router.delete('/:id', (req, res) => {});




module.exports = router;
