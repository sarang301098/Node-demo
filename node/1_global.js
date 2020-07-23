
setTimeout(()=>{
    console.log("5sec Delay");
},5000);

var time=0;
setInterval(()=>{
    time+=2;
    console.log(time+" sec");
},2000);

var time2=0;
var timer = setInterval(()=>{
    time2+=2;
    console.log(time2+" sec");
    if(time2>5){
        clearInterval(timer);
    }
},2000);

console.log(__dirname);
console.log(__filename);