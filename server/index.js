import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';

import useRouter from './routes/user.routes.js';
import rentalRouter from './routes/rental.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb'}));

app.get('/', (req, res) => {
    res.send({ message: 'Hello from the other side!'});
})

app.use('/api/v1/users', useRouter);
app.use('/api/v1/rentals', rentalRouter);

const startServer = async() => {
	try {
		// connect to database
		connectDB(process.env.MONGODB_URL)

		app.listen(8080, () => console.log('Listen up! Server started up on http://localhost:8080'));

	} catch (error) {
		console.log(error);
	}
}

startServer();