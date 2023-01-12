
const contents = getNode('.contents');
const textField = getNode("#comment37");
const container = getNode('.comment_container');


function clearText(field){
  field.value = "";
}


function handler(e){
  let target = e.target

  // 아이콘(자식) 눌렀을 때도 좋아요 눌리게 하기 위한 작업
  // 만약에 data-name이 없는 자식이 선택됐다면 그럼 그 부모는? 이렇게 계속 올라가서 data-name이 있는 부모를 찾아감
  while(!attr(target, 'data-name')){  // data-name을 찾을 때까지
    target = target.parentNode;   // 부모를 계속 넣음

    if(target.nodeName === 'BODY'){   // nodeName이나 tagName 찍어보면 다 대문자로 나오기때무네 BODY
      target = null;
      break;
    }
  }


  if(target.dataset.name === 'like'){
    console.log('like!');
    toggleClass(target, 'active')
  }

  if(target.dataset.name === 'comment'){
    // console.log('댓글달기!');
    textField.focus();    // input 에는 focus 기능이 있기 때문에 input에 focus하면 거기로 초점 이동함ㄴ
  }

  if(target.dataset.name === 'send'){
    console.log(textField.value);
    let template = `
    <div class="id">
    <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
        <div class="comment_field">
            <div class="text_container">
                <div class="name"><a href="#">심선범</a></div>
                <div class="text_field">${textField.value}</div>
            </div>
        </div>
    </div>
    `
    insertLast('.comment_container', template);
    clearText(textField);

  }
  // console.log();
}


contents.addEventListener('click', handler)


// 엔터키 눌렀을 때도 댓글 달리게 하는거
textField.addEventListener('keydown',(e)=>{

  if(e.keyCode === 13){
    textField.value

    let template = `
    <div class="id">
    <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
        <div class="comment_field">
            <div class="text_container">
                <div class="name"><a href="#">심선범</a></div>
                <div class="text_field">${textField.value}</div>
            </div>
        </div>
    </div>
    `
    insertLast('.comment_container', template);

    clearText(textField);

  }
})















