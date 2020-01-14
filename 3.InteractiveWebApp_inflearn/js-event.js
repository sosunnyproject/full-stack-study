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
    // if 대신에 while로 하면 하위의 하위여도 계속 menu-btn 부모 노드를 찾을때까지 loop 돌음.
    // 단, menu-btn 상위를 클릭하면 에러날 수 있음.
    while(!elem.classList.contains('menu-btn')) {  // --> menu: gray area 클릭하면 에러남.
        elem = elem.parentNode;
        if(elem.nodeName === "BODY") {             // 버튼 밖의 area 를 누르면 아무것도 실행 안하도록.
            elem = null;
            return;
        }
    }
    console.log(elem.dataset.value);
}

menu.addEventListener('click', clickHandler);