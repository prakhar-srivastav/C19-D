const express =require ('express')
const path = require('path')
const hbs = require('hbs')
const {generateImage} = require('./utils/models')
app= express()

// defining variables
const port =process.env.PORT || 3000
const publicPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')


//configuring hbs
app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)





// setting up the way for static files
app.use(express.static(publicPath))



app.get('',(req,res)=>{

	res.render('index',{
		title:'Welcome',
		name:'Prakhar Srivastava'
	})
})

app.get('/dcgans',(req,res)=>{

	
	res.render('dcgans',{
		title:'DCGANS',
		name:'Prakhar Srivastava'
	})
})

app.get('/dcgans_fetch',(req,res)=>{

    console.log(req.query.seed)
	generateImage(req.query.seed)
	res.send()
})



app.get('/aboutMe',(req,res)=>{

	res.render('aboutMe',{
		title:'About the Project',
		name:'Prakhar Srivastava'
	})
})

app.get('*',(req,res)=>{

	res.render('404',{
		title:'Error',
		name:'Prakhar Srivastava'
	})
})

app.listen(port, ()=>{
	console.log("Server up and running on port "+ port)
})