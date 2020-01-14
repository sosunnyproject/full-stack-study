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
    // console.log(event.target);
    // console.log(event.target.dataset.value) // == button.getAttribute('data-value');

    let elem = event.target;
    while(!elem.classList.contains('menu-btn')) {  // --> menu: gray area 클릭하면 에러남.
        elem = elem.parentNode;
    }
    console.log(elem.dataset.value);
}

menu.addEventListener('click', clickHandler);