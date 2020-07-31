
const form =document.querySelector('form')
const seed = document.querySelector('input')
const message = document.querySelector('#message')
const img = document.querySelector('img')



form.addEventListener('submit', (e)=>{

	e.preventDefault()
	
    if(!seed.value)
    {
    	message.textContent="Please provide seed value"
    	img.src=""
    	img.width=0
        img.height=0
    	return 
    }

    const url ='/dcgans_fetch?seed='+ seed.value
 	fetch(url).then((response)=>{
          
          
          //Setting Message Properties
           message.textContent="Seed Value:" + seed.value
           
           //Setting image properties
           img.src = "./img/sample.png?t=" +new Date().getTime();
           img.width=200
           img.height=200
          
     })
 

})