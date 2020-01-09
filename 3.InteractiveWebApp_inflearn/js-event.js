window.addEventListener('DOMContentLoaded', function(){
    const kyo = document.querySelector('.kyo.c');

    function clickKyoHandler(){
        kyo.classList.toggle('special');
    }

    kyo.addEventListener('click', clickKyoHandler);
})