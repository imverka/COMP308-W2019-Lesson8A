let express = require('express');
let router = express.Router();

let passport = require('passport');

let contactController = require('../controllers/contact');

function requireAuth(req, res, next) {
    // check if user is logged in
    if (!req.isAuthenticated() || (req.user.username != "admin")) {
        return res.redirect('/login');
    }
    next();
}

// GET Contacts list page - READ
router.get('/', requireAuth, contactController.displayContactList);


//GET route for ADD page.... this will display the add page
router.get('/add', requireAuth, contactController.displayAddPage);

//POST route for processing the ADD PAge
router.post('/add', requireAuth, contactController.processAddPage);

//GET request - display the edit page

router.get('/edit/:id', requireAuth, contactController.displayEditPage);

//POST request to update the database with data from edit page
router.post('/edit/:id', requireAuth, contactController.processEditPage);

//GET request to perform the delete action  
router.get('/delete/:id', requireAuth, contactController.deletePage);

module.exports = router;