function generateScheme(){
	const colorPicker = document.getElementById('color-picker').value.substr(-6)
	const options = document.getElementById('select').value

	fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker}&mode=${options}`)
	.then(response => response.json())
	.then((data)=>{

		let section = document.querySelector("section")
		section.innerHTML = ''

		for(let scheme of data.colors){
			section.innerHTML+= `
			<div class="containers">
			<img src=${scheme.image.bare}>
			<div class="h3-container">
			<h3>${scheme.hex.value}</h3>
			</div>
			</div>
			`
		}
	})}

document.querySelector("button").addEventListener("click" , generateScheme)
