import jwt from 'jsonwebtoken'; 

// import our secret keys here 
const SECRET = process.env.JWT_SECRET as string; 
const EXPIRATION = process.env.JWT_EXPIRES_IN as string; 

// set the default payload here 
export interface jwtPayload { 
    Name: string, 
    role: string, 
    Email: string, 
}; 

// a function to actually create a token from the payload 
export function signToken(payload: jwtPayload) : string { 
    const token = jwt.sign(payload, SECRET, { expiresIn: EXPIRATION});  
    return token; 
}