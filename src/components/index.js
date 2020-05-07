import './index.css';
import Icon from './icon.png';
import Data from '../assets/data.xml';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = "hello world!"
    element.classList.add('hello')
    let myIcon = new Image()
    myIcon.src = Icon
    myIcon.onclick = printMe
    element.appendChild(myIcon)
    console.log(Data);
    return element;
}

document.body.appendChild(component());