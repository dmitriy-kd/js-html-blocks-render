import image from './assets/image.jpg'
import {TitleBlock, ImageBlock, ColumnsBlock, TextBlock} from './classes/blocks'

export const model = [
	new TitleBlock('Конструктор сайтов на Vanilla JavaScript', {
		tag: 'h2',
		/*styles: `background: linear-gradient(to right, #ff0099, #493240); color: #fff;
		text-align: center; padding: 1rem;`
		*/
		styles: {
			background: 'linear-gradient(to right, #ff0099, #493240)',
			color: '#fff',
			'text-align': 'center',
			padding: '1.5rem'
		},
	}),
	/*{type: 'title', value: 'Конструктор сайтов на Vanilla JavaScript', options: {
		tag: 'h2',
		/*styles: `background: linear-gradient(to right, #ff0099, #493240); color: #fff;
		text-align: center; padding: 1rem;`
		*/
	/*	styles: {
			background: 'linear-gradient(to right, #ff0099, #493240)',
			color: '#fff',
			'text-align': 'center',
			padding: '1.5rem'
		},
	}},
	*/
	new TextBlock('The study programming on JavaScript with Vladilen Minin', {
		styles: {
			background: 'linear-gradient(to left, #f2994a, #f2c94c)',
			padding: '1rem',
			'font-weight': 'bold'
		}
	}),
	/*{type: 'text', value: 'The study programming on JavaScript with Vladilen Minin', options: {
		styles: {
			background: 'linear-gradient(to left, #f2994a, #f2c94c)',
			padding: '1rem',
			'font-weight': 'bold'
		}
	}},
	*/
	new ColumnsBlock(['Constructor on pure JS',
		'SOLID & OOP principles on one tutor',
		'UI on JS'], {
		styles: {
			background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
			padding: '2rem',
			color: '#fff',
			'font-weight': 'bold'
		}
	}),
	/*{type: 'columns', value: [
		'Constructor on pure JS',
		'SOLID & OOP principles on one tutor',
		'UI on JS',
	], options: {
		styles: {
			background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
			padding: '2rem',
			color: '#fff',
			'font-weight': 'bold'
		}
	}},
	*/
	new ImageBlock(image, {
		styles: {
			display: 'flex',
			'justify-content': 'center'
		},
		imageStyles: {
			width: '100%',
			height: 'auto',
		},
		alt: 'Наша картинка',
	})
	/*{type: 'image', value: image, options: {
		styles: {
			display: 'flex',
			'justify-content': 'center'
		},
		imageStyles: {
			width: '100%',
			height: 'auto',
		},
		alt: 'Наша картинка',
	}}*/
]