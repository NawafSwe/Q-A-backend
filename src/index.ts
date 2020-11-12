// importing packages
import express, {Request, Response} from "express";
// Create a new express app instance
const app: express.Application = express();
app.get('/', async (req: Request, res: Response) => {
    res.send('hi world');
});
app.listen(3000);
console.log('server running fine on port 3000');

