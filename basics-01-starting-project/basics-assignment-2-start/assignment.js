const task3Element = document.getElementById('task-3');

function greet() {
    alert('Hello, World!');
}

greet();

function IdentifyUser(userName) {
    alert(`Hello, ${userName}!`);

}

IdentifyUser('Max');

task3Element.addEventListener('click', greet)

function params(a,b,c) {
    let result = `${a} ${b} ${c}`;
    return result
}
let paramResult = params('yam','butter','ewedu')
alert(paramResult)