const tf = require('@tensorflow/tfjs')
require('@tensorflow/tfjs-node')
const PNG = require("pngjs").PNG
const  fs = require("fs")
const path = require('path')
// Models will be stored here
const models=[]



// Model Path
const generatorPath= 'file://C:/Users/prakhar/Desktop/covid-app/models/generator/model.json'




//Generator Model
tf.loadLayersModel(generatorPath).then((model)=>{
    
  models.push(model)
  console.log("DCGANS Model Loaded")
}).catch((error)=>{
	console.log(error)
})


//Function for Generator to generate an image in public/img 
const generator = (seed)=>
{
	const input = tf.randomNormal([1,120],seed=parseInt(seed))
	return models[0].predict(input).arraySync()[0]
}


const generateImage = (seed)=>
{
    console.log(seed)

    const image= generator(seed)

	for(var i=0 ;i<64;i++)
	 {
	 	for(var j=0 ;j<64;j++)
	 	{
	 		for(var k =0;k<3;k++)
	 		{
             image[i][j][k]= (image[i][j][k]+1.0)*120
             image[i][j][k]= (image[i][j][k])
             
	 		}
	 	}
	 }
    
     

let newfile = new PNG({ width: 64, height: 64 })
var idx=0
for (var x = 0; x < 64; x++) {
  for (var y = 0; y < 64; y++) {

    newfile.data[idx++] = image[x][y][0]
    newfile.data[idx++] = image[x][y][1]
    newfile.data[idx++] = image[x][y][2]
    newfile.data[idx++] = 0xff;
  }
}
console.log(path.join(__dirname,"../../public/img/sample.png"))
newfile
  .pack()
  .pipe(fs.createWriteStream(path.join(__dirname,"../../public/img/sample.png")))
  .on("finish", function () {
    console.log("Written!")
  })

  return 
}


module.exports =
{
	generateImage
}