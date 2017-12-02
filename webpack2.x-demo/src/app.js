//采用了es6的写法

import './css/common.css'
import Layer from './components/layer/layer.js';

const App = function() {
	let dom = document.getElementById('app');
	let layer = new Layer();
	dom.innerHTML = layer.tpl;

};

new App()