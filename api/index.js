const router = require('express').Router();


router.get('/', (req,res) => {
  res.render("paul")

})

router.get('/test', (req,res) => {
  res.render("test")
})






module.exports = router;