


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



const navigation = getNode('.navigation');
// const list = getNodes('.navigation > li');


function makeArray(arrLike){
  return Array.from(arrLike);
}


function handler(e) {
    let target = e.target.closest('li');  // li에 is-active 추가해줘야 하므로 타켓과 가장 근접한 li 찾음
    let list = makeArray(navigation.children); //자식 찾음

    if(!target) return; // 다른 곳을 누르면 함수 종료(이거 안넣으면 null값 나옴)

    // Array.from(list);   // forEach를 쓰기위해 array로 바꿔줌(for(let i)...이렇게 해도 되긴하는데 비효율적이니까)
    // let arr = [ ...list ]
    // Array.prototype.slice.call(list)

    // let arr = makeArray(list);

    list.forEach(item=>removeClass(item, 'is-active'))  // 일단 is-active 다 지우고

    addClass(target, 'is-active');   // target만 다시 추가

    // console.log(target);
}

navigation.addEventListener('click', handler);

// navigation.addEventListener('click', function(e){
//   let target = e.target;
//   console.log(target);
// })























