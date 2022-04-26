let container = document.createElement('div')
container.setAttribute('id','cont')
container.classList.add('container')
document.body.appendChild(container)

let h1 = document.createElement('h1')
h1.innerHTML = '<u>Disney API</u>'
h1.classList.add('text-center','h1')
document.getElementById('cont').appendChild(h1)

let h3 = document.createElement('h3')
h3.innerHTML = 'Please Enter Number between 6 to 49'
h3.classList.add('text-center','h3')
document.getElementById('cont').appendChild(h3)


let div = document.createElement('div')
div.setAttribute('id','div')
div.classList.add('results','col-sm-12','col-md-6','col-lg-6','col-xl-6','col-xxl-6')
document.getElementById('cont').appendChild(div)

let div3 = document.createElement('div')
div3.setAttribute('id','div3')
document.body.appendChild(div3)

let form = document.createElement('form')
form.setAttribute('id','form')
document.getElementById('div3').appendChild(form)


let text1 = document.createElement('input')
text1.setAttribute('id','text1')
text1.innerHTML = 'enter width'
text1.setAttribute('onkeyup','disney(text1.value)')
text1.setAttribute('onkeypress','typing()')
text1.setAttribute('placeholder','Searc here')
text1.classList.add('text','text-center')
document.getElementById('form').appendChild(text1)


let div1 = document.createElement('div')
div1.setAttribute('id','div1')
div1.classList.add('result','col-sm-12','col-md-6','col-lg-6','col-xl-6','col-xxl-6')
document.getElementById('cont').appendChild(div1)



let id = document.createElement('p')
id.innerHTML = ""
let films = document.createElement('p')
films.innerHTML = ""
let tvShows = document.createElement('p')
tvShows.innerHTML = ""
let videoGames = document.createElement('p')
videoGames.innerHTML = ""
let parkAttractions = document.createElement('p')
parkAttractions.innerHTML = ""
let allies = document.createElement('p')
allies.innerHTML = ""
let enemies = document.createElement('p')
enemies.innerHTML = ""
let name1 = document.createElement('p')
name1.innerHTML = ""
let imageUrl = document.createElement('p')
imageUrl.innerHTML = ""
imageUrl.classname="img"
let url = document.createElement('p')
url.innerHTML = ""



function disney(a){
	if(a>0 && a<138){
	let y=parseInt(a)
fetch(`https://api.disneyapi.dev/characters/${y}`)
.then((x)=>x.json())
.then((res)=>{
	id.innerHTML = `<span id="style">Id : </span>${res._id}<br>`
	div1.appendChild(id)
	films.innerHTML = `<span id="style">Film : </span>${res.films}<br>`
	div1.appendChild(films)
	tvShows.innerHTML = `<span id="style">Tv Show : </span>${res.tvShows}<br>`
	div1.appendChild(tvShows)
	videoGames.innerHTML = `<span id="style">Video Games : </span>${res.videoGames}<br>`
	div1.appendChild(videoGames)
	parkAttractions.innerHTML = `<span id="style">Park Attractions : </span>${res.parkAttractions}<br>`
	div1.appendChild(parkAttractions)
	allies.innerHTML = `<span id="style">Allies : </span>${res.allies}<br>`
	div1.appendChild(allies)
	enemies.innerHTML = `<span id="style">Enemies : </span>${res.enemies}<br>`
	div1.appendChild(enemies)
	name1.innerHTML = `<span id="style">Name : </span>${res.name}<br>`
	div1.appendChild(name1)
	imageUrl.innerHTML = `<span id="style">Image URL : </span><img id="imag" src="${res.imageUrl}"/><br>`
	div1.appendChild(imageUrl)
	url.innerHTML = `<span id="style">URL : </span>${res.url}<br>`
	div1.appendChild(url)

})
	}	
	else
alert("please enter number between 6 - 137")
}

function typing(){
	let show = document.getElementById("result");
	if(event.charCode>=48 && event.charCode<=57 || event.key==="+" || event.key==="-" || event.key==="/" || event.key==="*"){
	   show.value += key;
	}
	else if(event.key==="Enter"){
		equal();
	}
	else{
	 alert("type only numbers");
	  event.preventDefault();
	}
 }