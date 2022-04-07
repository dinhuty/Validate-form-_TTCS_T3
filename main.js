
const log = document.getElementById('log')
const reg = document.getElementById('reg')
const c_log =document.querySelector('.container-login')
const c_reg =document.querySelector('.container-register')
log.onclick = function () {
    reg.classList.remove('acctive')
    log.classList.add('acctive')
    c_reg.classList.remove('on')
    c_log.classList.add('on')
}
reg.onclick = function () {
    log.classList.remove('acctive')
    reg.classList.add('acctive')
    c_log.classList.remove('on')
    c_reg.classList.add('on')
}

var gm = document.getElementById('gmail')
var err_gmail = document.getElementById('error_gmail')

gm.onblur = function () {
    if(gm.value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )){
        err_gmail.innerHTML="";
        err_gmail.style.marginTop = '0'
      }else{
          err_gmail.innerHTML="Vui lòng nhập đúng định dạng"
          err_gmail.style.marginTop = '-10px'
      }
}
var ps1 = document.getElementById('password')
var ps2 = document.getElementById('password2')
var err_ps1 = document.getElementById('error_password')
var err_ps2 = document.getElementById('error_password2')

ps1.onblur = function () {
    var px =String(ps1.value)
    if(px.length<8){
        err_ps1.innerHTML="Mật khẩu phải dài hơn 8 kí tự"
        err_ps1.style.marginTop = '-10px'
  
    }else{
        err_ps1.innerHTML="";
        err_ps1.style.marginTop = '0'
        ps2.onblur = function () {
            var px =String(ps1.value)
            var px2 =String(ps2.value)
    
        
            if(px2!=px){
                err_ps2.innerHTML="Mật khẩu đã nhập không khớp"
                err_ps2.style.marginTop = '-10px'
            }else{
                err_ps2.innerHTML="";
                err_ps2.style.marginTop = '0'
            }   
        }
        
    }
}


// loading
const load = document.getElementById('loading')
const percent = document.getElementById('per')

var i = 0
setInterval(() => {
    percent.style.width = i+'%'
    i++
    if(i==101){
        i=0
    }
}, 100);

const span_arr = document.querySelectorAll('.title_span')
console.log(span_arr)

var dem=0
setInterval(() => {
    span_arr.forEach((element) => {
        element.classList.remove('acctive_span')
    });
    span_arr[dem].classList.add('acctive_span')
    dem++
    if(dem==span_arr.length){
        dem=0
    }
}, 800);