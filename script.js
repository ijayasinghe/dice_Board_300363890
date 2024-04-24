// diplay date
var date=new Date();
var display=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()+" at "+date.getHours()+":"+date.getMinutes();

document.getElementById("day").innerHTML=display;


function roll(){
    const srcList = ["dice-1.svg","dice-2.svg","dice-3.svg","dice-4.svg","dice-5.svg","dice-6.svg"];

    var index1= Math.floor(Math.random() * 6)
    var index2= Math.floor(Math.random() * 6)
   
    
    document.getElementById("dice-1").src=srcList[index1]
    document.getElementById("dice-2").src=srcList[index2]

    var total = (index1+1) + (index2+1);
    document.getElementById("total").innerHTML=total;

    if(total>=8){
        var message="You Win: Try Again!"
    }
    else{
        var message="You didn't win: Try Again!"
    }
    document.getElementById("message").innerHTML=message;
}
