import './layer.less';
import tpl from './layer.html';

//采用了es6的写法
function layer() {
	return {
		name: 'layer',
		tpl: tpl
	}
}

export default layer;