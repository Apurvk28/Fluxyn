console.log('AUTH ROUTE LOADED');

const router = require('express').Router();

const {
  register,
  login,
} = require('../controllers/authController');

// REGISTER
router.post('/register', register);

// LOGIN
router.post('/login', login);

// TEST ROUTE
router.get('/test', (req, res) => {
  res.json({
    success: true,
    message: 'Auth route working',
  });
});

module.exports = router;