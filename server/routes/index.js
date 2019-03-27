let express = require("express");
let router = express.Router();

let indexController = require("../controllers/index");
/* GET home page. */
router.get("/", indexController.diplayHomePage);

router.get("/about", indexController.displayAboutPage);

router.get("/contact", indexController.displayContactPage);

router.get("/products", indexController.displayProductPage);

router.get("/services", indexController.displayAboutPage);

router.get("/favThings", indexController.diplayFavThings);

// GET login page
router.get("/login", indexController.processLoginPage);

// POST  - processes the login page
router.post("/login", indexController.processLoginPage);

// GET - display the user registration page
router.get("/register", indexController.displayResgisterPage);

// POST - processes the user registration page
router.post("/register", indexController.processRegisterPage);

// GET - perform user logout
router.get("/logout", indexController.performLogout);

module.exports = router;
