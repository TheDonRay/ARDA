import express, {Request, Response} from 'express'; 
const app = express(); 

app.use(express.json()); // some built in middleware handling that I put 

// import routes here below  


app.get('/ARDA', (req: Request, res: Response) => { 
    res.json({ 
        Server: 'Welcome to ARDA, simple backend API to understand how data is transferred through JWT and session managed'
    }); 
});  



export default app; 