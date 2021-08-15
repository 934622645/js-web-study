let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


myButton.onclick = () => setUserName();

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
}