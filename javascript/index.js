

$(".nave .open").click(function(){
    let left =$(".nave").css("left")
    if(left=="0px"){
        let inner=$(".nave .hide").outerWidth(true)
        $(".nave").animate({left:`-${inner}px`},1000)
    }else{
        $(".nave").animate({left:`0px`},1000)
    }
})

let inner=$(".nave .hide").outerWidth(true)
$(".nave").animate({left:`-${inner}px`},1000)

$(".btn-close").click(function(){
    $(".nave").css({left:`-${inner}px`})
})

$(".sing").click(function(){
    $(this).find("p").slideToggle(500)
    $(".sing").not($(this)).find("p").css({display:"none"})
})


var x=new Date("2023-04-03 12:00:00 am").getTime();
 var dur=setInterval(function(){
var y=new Date().getTime();
var z=x-y

var days=Math.floor(z/(1000*60*60*24));

var hours=Math.floor(z%(1000*60*60*24)/(1000*60*60));
var mints=Math.floor(z%(1000*60*60)/(1000*60));
var secs=Math.floor(z%(1000*60)/(1000));
document.getElementById("day").innerHTML=days +"D";
document.getElementById("hour").innerHTML=hours +"H"
document.getElementById("mint").innerHTML=mints +"M"
document.getElementById("sec").innerHTML=secs+"S";

if(z<0){
    clearInterval(dur);
}
},1000)

var textarea=document.querySelector("textarea");
 var counter=document.getElementById("count")
var max=100;
textarea.addEventListener("input",countChar)
function countChar(){
    var numChar=textarea.value.length;
    console.log(textarea.value);
    let num=max-numChar;
    counter.innerHTML=num
    if(num<0){
        counter.innerHTML='your available character finished'

    }
}





let person=new Map()

person.set("name","ahmed").set("age",45)
person.get("name");



var perso={

    name:"fuyiytr",
    age:50
}


