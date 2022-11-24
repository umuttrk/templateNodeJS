import express,{Request,Response} from 'express';
const app = express();

app.listen(3000, "0.0.0.0", (): void => {
    console.log("server is listening on port 3000");
});

app.get('/',(req:Request,res:Response):any=>{
    return res.send('<h1>hello world</h1>')
})