import express, {Request, Response} from 'express';  
// Import the middleware here as such  

//import the controller here 

const secureDataRouter = express.Router();  


secureDataRouter.post('/secured'); 

export default secureDataRouter; 