const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const pg = require('pg')

const UserController = require('./controllers/registr.js')
const UsController = require('./controllers/getOneUser.js')
const PriceCompany = require('./controllers/getPriceCompany.js')

const PORT = 3000
const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static('public'))
//app.use(express.static(path.resolve(__dirname, 'client')))
app.use(express.json())
const urlencodedParser = bodyParser.urlencoded({extended: true})

app.get('/', (req, res) =>{
    res.render('index')
})

app.get('/view', (req,res) => {
    res.render('view')
})

app.get('/Product', (req, res) =>{
    res.render('Product')
})

app.get('/Invest', (req, res) =>{
    let result = PriceCompany.GetCompany('Microsoft')
    console.log(result)
    result.then(info=> {
        info = info.rows[0]
        if (info){
            res.render('Invest',  {
                ComName: info.name,
                Price: info.price,
                Text: info.txt
            })
        }
    })
})

app.get('/Apple',(req,res)=>{
    let result = PriceCompany.GetCompany('Apple')
    console.log(result)
    result.then(info=> {
        info = info.rows[0]
        if (info){
            res.render('Apple',  {
                ComName: info.name,
                Price: info.price,
                Text: info.txt
            })
        }
    })
})

app.get('/Qualcomm',(req,res)=>{
    let result = PriceCompany.GetCompany('Qualcomm')
    console.log(result)
    result.then(info=> {
        info = info.rows[0]
        if (info){
            res.render('Qualcomm',  {
                ComName: info.name,
                Price: info.price,
                Text: info.txt
            })
        }
    })
})
app.get('/Adobe',(req,res)=>{
    let result = PriceCompany.GetCompany('Adobe')
    console.log(result)
    result.then(info=> {
        info = info.rows[0]
        if (info){
            res.render('Adobe',  {
                ComName: info.name,
                Price: info.price,
                Text: info.txt
            })
        }
    })
})

app.post('/send', (req, res) =>{
    console.log(req.body)
    UserController.Insert(req.body.firstName, req.body.Email, 1111)
    res.render('view')
})


app.listen(PORT, () => 
console.log(`Server started on port ${PORT}...`))


