import * as jwt from 'jsonwebtoken'; 

// import our secret keys here 
const SECRET = process.env.JWT_SECRET as string; 
const EXPIRATION = process.env.JWT_EXPIRES_IN as string;  

// add checks for the env 
if (!SECRET) { 
    throw new Error ('Error no secret provided'); 
} 

if (!EXPIRATION) { 
    throw new Error ('Error no expiration time provided'); 
}; 

// set the default payload here 
export interface jwtPayload { 
    Name: string, 
    role: string, 
    Email: string, 
}; 

// a function to actually create a token from the payload 
export function signToken(payload: jwtPayload) : string { 
    const token = jwt.sign(payload, SECRET, { expiresIn: EXPIRATION } as jwt.SignOptions);
    return token; 
}; 

/*So when it comes to verifying token function what happens is that we take the incoming request which has to be the same type of data that we are expecting in our payload, check the "stamp" with our servers stamp aka the jwt_secret and then from there if it matches then we are good  */
