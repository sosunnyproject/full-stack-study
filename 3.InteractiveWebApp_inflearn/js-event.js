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
    // console.log(this);
    // console.log(event.target.parentNode);
    // console.log(event.target);
    // console.log(event.target.getAttribute('data-value'));
    let button = event.target;
    if(!event.target.classList.contains('menu-btn')){
        // console.log("not menu-btn");
        button = event.target.parentNode;
        // console.log(button);
    }

    let buttonData = button.getAttribute('data-value');
    console.log(buttonData);
}

menu.addEventListener('click', clickHandler);