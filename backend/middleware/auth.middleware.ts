import { verifyToken } from '../services/jwt.service.js'; 
import {Request, Response, NextFunction} from 'express'; 

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  // step 1: grab the token from the Authorization header
  //         hint: req.headers.authorization gives you "Bearer <token>"

  // step 2: check it exists and starts with "Bearer "
  //         if not → return 401

  // step 3: strip the "Bearer " part to get just the token

  // step 4: call verifyToken() inside a try/catch
  //         if valid → attach payload to req.user, call next()
  //         if invalid → return 401
}; 

