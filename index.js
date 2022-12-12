function myclick(){
    const inputvalue=document.getElementById("inputvalue").value;
    console.log("input",inputvalue)
    if(!inputvalue){
        alert("plz fill")
    }  
    else{
        let divdata =""
        let random_color =""
        for (i=0;i<inputvalue;i++){
                random_color=getrandomcolor()
                console.log("randomcolor:",random_color)
              divdata =divdata+`
            <div  class="div_here" style="background-color:${random_color}" id="paticular_div${i}">INPUT ${inputvalue}
            <button onclick="dlt('${i}')">Delete</button>
            </div>
            `
            console.log("i:",i)
        }
        document.getElementById("showbox").innerHTML=divdata
    }
} 
function getrandomcolor(){
    let letters = '0123456789ABCDEF'
    let color ='#'
    for(let i=0;i<6;i++){
        color=color+letters[Math.floor(Math.random()*16)]
    }
    return color;
}
function dlt(i){
    let dlt_task = document.getElementById(`paticular_div${i}`)
    console.log("delete",dlt_task)
    dlt_task.remove()
}