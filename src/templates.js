import {row, col, css} from './utils'

function title(block) {
	/*return `
		<div class="row">
			<div class="col-sm">
				<h1>${block.value}</h1>
			</div>
		</div>
		`
*/
	//const tag = block.options.tag ?? 'h1'
	//const styles = block.options.styles
	const {tag = 'h1', styles} = block.options
	return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}

function text(block) {
	/*return `
		<div class="row">
			<div class="col-sm">
				<p>${block.value}</p>
			</div>
		</div>
		`
	*/
	const {tag = 'p', styles} = block.options
	return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}

function columns(block) {
	//const html = block.value.map(item => `<div class="col-sm">${item}</div>`)
	//const html = block.value.map(item => col(item))
	const html = block.value.map(col).join('')
	/*return `
		<div class="row">
			${html.join('')}
		</div>
		`
	*/
	//return row(`${html.join('')}`)
	const styles = block.options.styles
	return row(html, css(styles))
}

function image(block) {
	/*return `
		<div class="row">
			<img src="${block.value}" />
		</div>
	`
	*/
	const {tag = 'img', styles, imageStyles: is, alt} = block.options
	return row(`<${tag} src="${block.value}" alt="${alt}" style="${css(is)}" />`, css(styles))
}

export const templates = {
	title,
	text,
	image,
	columns
}