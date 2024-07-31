import express from 'express';
import apisRouter from './routes/apis.mjs';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// Configure CORS options
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use('/api', apisRouter);

app.listen(4000, () => {
    console.log('Server ready at http://localhost:4000');
});
