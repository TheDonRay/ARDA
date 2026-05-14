import 'dotenv/config'; 
import app from './app.js'; 

// database import here    

// env STUFF 
const PORT = process.env.PORT; 
if (!PORT) { 
    throw new Error('No PORT listed on env file to call upon'); 
}; 

app.listen(PORT, () => { 
    console.log(`ARDA Server Successfully running on port: http://localhost:${PORT}`); 
}); 

