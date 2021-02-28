import {Site} from './site'
import {Sidebar} from './sidebar'

export class Exe
{
	constructor(model) {
		this.model = model
	}

	init() {
		//const $site = document.querySelector('#site')
const site = new Site('#site')

site.render(this.model)

const updateCallback = newBlock => {
	model.push(newBlock)
	site.render(this.model)
}

new Sidebar('#panel', updateCallback)

//model.forEach(block => {
	//let html = ''
	
	/*if (block.type === 'title') {
		html = title(block)
	} else if (block.type === 'text') {
		html = text(block)
	} else if (block.type === 'columns') {
		html = columns(block)
	} else if (block.type === 'image') {
		html = image(block)
	}*/

	//const toHTML = templates[block.type]


	/*if (toHTML) {
		$site.insertAdjacentHTML('beforeend', toHTML(block))
	}*/
//	site.insertAdjacentHTML('beforeend', block.toHTML())
	
//})
	}
}