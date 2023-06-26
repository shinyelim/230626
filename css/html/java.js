//버튼을 변수에 담고
//버튼을 눌렸을때 그 안의 텍스트 내용을 consloe.log로 출력
//addEvent
/*const start = document.getElementById('start')
const stop = document.getElementById('stop')

console.log(start)
start.addEventListener('click', () =>{
console.log(start.innerHTML)
})
stop.addEventListener('click',()=>{
console.log(stop.innerHTML)
})*/
/*타이틀에 변수선언
1.plus,minus 버튼을 변수에 담고
이벤트리스너를 각각 버튼마다 이벤트를 걸어주고
3.plus 를 눌렀을때 1px 씩 폰트사이즈 증가
title,style,fontsize = $(index)px
minus 눌렀을때 1px씩 폰트사이즈가 감소*/
const title = document.getElementById('title')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const change = document.getElementById('change')
let index = 0 ;
plus.addEventListener('click',() => {
index++
title.style.fontSize = `$(index)px`
})
minus.addEventListener('click',() => {
  index--
  title.style.fontSize = `$(index)px`
  })
change.addEventListener('click',() => {

})
setTimeout(()=>{
  if (title.classList.contains('active')) {
    title.classList.remove('active')
    console.log('active 삭제') 
   }else{
     title.classList.add('active')
     console.log('active 추가') 
   }
},2000)
  





//구글에서 '변수명짓기'에서 변수이름을 지어보면 됨
//5.change 버튼을 눌렀을때마다 타이틀의 색이 변하도록,active클래스로 제어(추가/제거)  