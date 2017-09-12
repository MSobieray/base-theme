import Vue from 'vue'
import Test from './test'
import '../css/styles.css'
new Vue({
	el: "#vue",
	data: {
		message: 'Hello'
	}
})

  function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click n Check The Console!';
    btn.onclick = Test;

    element.appendChild(btn);

    return element;
  }
  document.body.appendChild(component());