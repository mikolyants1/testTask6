import express,{Express} from 'express'
import cors from 'cors'
import router from './router/router.js';

const app:Express = express();

const PORT:number = 5000;

app.use(express.json());

app.use(cors());

app.use('/posts',router);

app.listen(5000,()=>{
 console.log(`server listen on ${PORT}`)
})