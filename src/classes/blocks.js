import {row, col, css} from '../utils'

class Block
{
	constructor(/*type,*/ value, options) {
		//this.type = type
		this.value = value
		this.options = options
	}

	toHTML() {
		throw new Error('Метод toHTML должен быть реализован')
	}
}

export class TitleBlock extends Block
{
	constructor(value, options) {
		super(/*'title',*/ value, options)
	}

	toHTML() {
		const {tag = 'h1', styles} = this.options
		return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
	}
}

export class ImageBlock extends Block
{
	constructor(value, options) {
		super(/*'image',*/ value, options)
	}

	toHTML() {
		const {tag = 'img', styles, imageStyles: is, alt} = this.options
		return row(`<${tag} src="${this.value}" alt="${alt}" style="${css(is)}" />`, css(styles))
	}
}

export class ColumnsBlock extends Block
{
	constructor(value, options) {
		super(/*'columns',*/ value, options)
	}

	toHTML() {
		const html = this.value.map(col).join('')
		const styles = this.options.styles
		return row(html, css(styles))
	}
}

export class TextBlock extends Block
{
	constructor(value, options) {
		super(/*'text',*/ value, options)
	}

	toHTML() {
		const {tag = 'p', styles} = this.options
		return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
	}
}