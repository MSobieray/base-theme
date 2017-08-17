import Vue from 'vue'
import Test from './test'
import '../css/styles.css'
new Vue({
	el: "#vue",
	data: {
		message: 'Hello World'
	}
})

  function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = Test;
 
    element.appendChild(btn);

    return element;
  }
  document.body.appendChild(component());