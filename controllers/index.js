const router =  require("express").Router();
const homeRoutes = require("./homepageRoute");


const dashboardRoutes = require("./maindashboard");
const loginPageRoutes = require("./loginpage");
const commentRoutes =  require("./commentRoutes");
const apiRoutes = require("./controllers");

router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);

router.use("/login", loginPageRoutes);
router.use("/commentRoutes", commentRoutes);

module.exports = router;