const router = require('express').Router();


router.get('/', (req,res) => {
  res.render("home")

})

router.get('/blog', (req,res) => {
  res.render("blog")
})


router.get('/signup', (req,res) => {
  res.render("signup")
})




module.exports = router;