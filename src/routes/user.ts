import { Router } from 'express';
import {userInfo,login,fileDown,upload,userEdit,findUserInfo,userAdd,findchainList,findsystemList,findNotice} from '../controllers/userController'
import {findChainInfo} from '../controllers/chainController'
import {moduleAdd} from '../controllers/moduleController'
import authorToken from '../middleware/author'
import multer from 'multer'
const router = Router();
router.post('/login',login);
router.get('/fileDown',authorToken.verifyToken,fileDown);
router.post('/fileUpload',multer({ dest: './src/public/'}).single('file'),upload);
router.get('/user/find',authorToken.verifyToken,userInfo);
router.post('/user/edit',authorToken.verifyToken,userEdit);
router.get('/user/info',authorToken.verifyToken,findUserInfo);

router.post('/userAdd',authorToken.verifyToken,userAdd);
router.post('/moduleAdd',authorToken.verifyToken,moduleAdd);
router.post('/findChainInfo',authorToken.verifyToken,findChainInfo);
router.get('/findchainList',authorToken.verifyToken,findchainList);
router.get('/findsystemList',authorToken.verifyToken,findsystemList);
router.post('/userAdd',authorToken.verifyToken,userAdd);
router.post('/findNotice',authorToken.verifyToken,findNotice);
export default router