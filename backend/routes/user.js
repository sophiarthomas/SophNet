const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Got a GET request at /user')
})

// Adding a new user 
router.post('/', (req, res) => {
})

router.get('/new', (req, res) => {
  res.send("User New Form")
})

router.route('/:name').get((req, res) => {
    req.params.name
    res.send(`Get User with ID ${req.params.name}`)
}).put((req, res) => {
    req.params.name
    res.send(`Put User with ID ${req.params.name}`)
}).delete((req, res) => {
    res.send(`Delete ${res.params.name}`)
})

// // Dynamic parameter /:{}
// router.get((req, res) => {
//     req.params.name
//     res.send(`Get User with ID ${req.params.name}`)})
// router.put('/:name', (req, res) => {
//     req.params.name
//     res.send(`Get User with ID ${req.params.name}`)})

module.exports = router