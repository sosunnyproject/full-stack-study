window.addEventListener('DOMContentLoaded', function(){ 
    // need this load, DOMContentLoaded if you add script tag insdie head tag
    console.log("loaded");
    const kyo = document.querySelector('.kyo.c');

    function clickKyoHandler(){
        console.log("clicked");
        kyo.classList.toggle('special');
    }

    kyo.addEventListener('click', clickKyoHandler);
})