import express from "express";
const router = express.Router();
import { register, login} from "../controllers/auth"

router.post('/register',register); //it is post not get as we are going to get a post request
//and no need to write api becuz in server.js we already have api in the route
router.post("/login",login);
module.exports=router;