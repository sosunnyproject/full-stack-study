(function() {
    // const kyoGroup = document.querySelectorAll('.kyo');
    const stage = document.querySelector('.stage');

    function clickHandler(event){
        // 이벤트 위임
        console.log(event.currentTarget);  // returns div stage
        console.log(event.target);         // returns specific icon

        if(event.target.classList.contains('kyo')) {
            stage.removeChild(event.target);
        }

    }
    stage.addEventListener('click', clickHandler);
})();
