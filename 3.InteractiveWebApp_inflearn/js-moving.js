(function() {
    const kyoGroup = document.querySelectorAll('.kyo');
    const stage = document.querySelector('.stage');

    function clickHandler(event){
        console.log(this);
        console.log(event.currentTarget);
        // stage.removeChild(this); 
        
        console.log(this.parentNode); // find stage component without querySelector definition
        this.parentNode.removeChild(this);
    }

    for (let i = 0; i < kyoGroup.length; i++) {
        kyoGroup[i].addEventListener('click', clickHandler);
    }
})();
