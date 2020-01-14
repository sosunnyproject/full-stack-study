/*
(function() {
    const characters = document.querySelector('.characters');

    function clickKyoHandler2(e) {
        // 같은 것을 가리킴. 
        console.log(this);
        console.log(e.currentTarget);
        console.log(e.target.parentNode.className);
    }

    characters.addEventListener('click', clickKyoHandler2);
})();
*/
const menu = document.querySelector('.menu');

function clickHandler(event) {
   
    let button = event.target;
    /*
    if(!event.target.classList.contains('menu-btn')){
        // console.log("not menu-btn");
        button = event.target.parentNode;
        // console.log(button);
        // CSS 조작 방법: pointer-events: none 처리
    }
    */

    let buttonData = button.getAttribute('data-value');
    console.log(buttonData);
}

menu.addEventListener('click', clickHandler);