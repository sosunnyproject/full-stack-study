
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
