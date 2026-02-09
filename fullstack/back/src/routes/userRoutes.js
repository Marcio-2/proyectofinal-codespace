const { registerUser, loginUser, getProfile, updateProfile } = require('../controllers/userController');
const { Router } = require('express');
const multer = require('multer');
const verifyToken = require('../middleware/verifyToken');

const userRouter = Router();

//Multer para subir fotos de usuario
const storage = multer.diskStorage({
  destination: 'uploads/users', 
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); 
  },
});
const upload = multer({ storage });

userRouter.post('/register', upload.single('photo'), registerUser);
userRouter.post('/login', loginUser);
// Rutas protegidas 
userRouter.use(verifyToken);

userRouter.get('/me', getProfile);
userRouter.put('/me', upload.single('photo'), updateProfile);

module.exports = userRouter;
