
const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]



const swiper = new Swiper('.swiper', {  // 옵션 객체
  autoplay: true,
  loop: true,   // 맨 마지막 갔다가 다시 슈루룩 맨앞으로 오는게 싫어서 무한루프 걸음
  speed: 2000,
  parallax: true, // 시차, 신박한 기능!
  pagination: {
    el: '.pagination',
    clickable: true,
    bulletClass: 'bullet',  // 점들의 class 이름을 바꿔줌
    bulletActiveClass: 'is-active',
    // bullet들 커스텀
    renderBullet: function(index, className){
      // 템플릿 리터럴(``)로 리턴
      return /* html */ `
        <span class="${className}">
          <img src="./assets/part01/${data[index].src}" alt="${data[index]}.alt"/>
        </span>
      `
    }
  }

})















