let hemburge=document.querySelector("#click");
document.getElementById("icon2").style.display="none"

function updatemenu(){
    
    if(hemburge.checked==true){
        document.getElementById("icon2").style.display="block"
        document.getElementById("icon1").style.display="none"
        
    }else{
        document.getElementById("icon2").style.display="none"
        document.getElementById("icon1").style.display="block"
    }
    
}