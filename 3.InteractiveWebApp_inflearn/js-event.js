// 1. es6 스타일
const kyo = document.querySelector('.kyo.c');
const clickKyoHandler = () => {
    console.log("clicked");
    kyo.classList.toggle('special');
}

kyo.addEventListener('click', clickKyoHandler);


// 2. 전역 아닌 지역 변수로 함수 생성
(function() {
    const kyo = document.querySelector('.kyo.c');

    function clickKyoHandler2() {
        console.log("clicked");
        kyo.classList.toggle('special');
    }

    kyo.addEventListener('click', clickKyoHandler2);
})();
