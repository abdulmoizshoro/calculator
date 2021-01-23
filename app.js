var a = document.getElementById("calc-input")
function input(num){
    a.value += num
}
function inputClear(){
    a.value = ""
}
function result(){
    a.value = eval(a.value)
}