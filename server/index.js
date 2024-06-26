import pg from 'pg'
import express from 'express'
import fs from 'fs'
 
const PORT = process.env.PORT || 3010;
const app = express();
const client = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'NewsBlog',
  password: '',
  port: 5432,
})
const urlencodedParser = express.urlencoded({extended: false});
await client.connect()
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  const now = new Date();
  const datatime = `Дата: ${now.getDay()}.${now.getMonth()+1}.${now.getFullYear()} Время: ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  const data = `${datatime} ${req.method} ${req.url}  ${req.socket.remoteAddress}`;
  console.log(data);
  fs.appendFileSync("log.txt", data + "\n");
  next();
});
app.get("/", (req, res, next)=>{
    res.writeHead(200,{"Content-Type": "text/plain; charset=utf-8"})
    res.end(`Привет, клиент. Ваш сервер работает! \n Это означает, что разработчик не криворукий(но это не точно).`);
});
app.get("/getall", async (req,res,next)=>{
  try{
  const resSQL = await client.query(`SELECT * FROM "public"."News";`);
  res.send(resSQL.rows);
}
catch
{
  res.send((500).toString());
}

});
app.get("/getone",async (req,res,next)=>{
  try{
  const idNews = req.headers.idnews;
  const resSQL = await client.query(`SELECT * FROM "public"."News" WHERE "idnews"=${idNews};`);
  res.send(resSQL.rows);
  }
catch
{
  res.send((500).toString());
}
});
app.post("/createnews",urlencodedParser, async (req,res,next)=>{
  try{
    const namenews = decodeURI(req.headers.namenews);
    const textnews = decodeURI(req.headers.textnews);
    const datapublish = decodeURI(req.headers.datapublish);
    if(namenews && textnews && datapublish){
    const resSQL = await client.query(`INSERT INTO "public"."News" ("namenews","textnews","datepublish") VALUES('${namenews}','${textnews}','${datapublish}')`);
    res.send((200).toString());}
  } catch (error) {
    console.error(error);

  }
});
 
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});