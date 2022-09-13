/*
슬라이더 제어용 스크립트
*/

let i = 0; //슬라이드 번호

const pos = document.querySelectorAll("[type='radio']")

function slide() {
    i++;
    if(i>=4){
        i = 0;
    }
    //라디오버튼 체크상태 변경
    pos[i].checked= true;
}
let inter = setInterval(slide, 3000);

function change(po) {
    i= po
    clearInterval(inter)
    inter = setInterval(slide, 3000);
}