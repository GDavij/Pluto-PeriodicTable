import  express  from 'express'
const app = express()
const port = process.env.PORT || 8080

app.set('views', 'dist/views')
app.set('view engine' , 'ejs')

app.use(express.static('dist'))

app.use('css' , express.static(__dirname + 'public/css'))
app.use('js' , express.static(__dirname + 'code'))
app.use('json' , express.static(__dirname + 'public/json'))
app.use('img' , express.static(__dirname + 'public/images'))

app.get('/', (req , res) => {
res.render('Pages/Index')
})


if( port !== undefined && port !== null){
app.listen(port , () => { console.info(`
+/--------------------------------------
Server Msg: On and On
Server Status: 200
LocalPort: ${port}
+/--------------------------------------
`)})
}else{
    console.info(`
    +/--------------------------------------
Server Msg: Port Doesn't Got into Server, and it received as Null or Undefined
Server Status: 500
LocalPort: ${port} /##Error
+/--------------------------------------
    `)
}
