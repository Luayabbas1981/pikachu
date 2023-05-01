const frame = document.querySelector(".frame")
const frameArr = Array.from(document.querySelectorAll(".frame > div "))

let colors=["#f44336","#e91e63","#9c27b0","#673ab7","#2196f3","#00bcd4","#009688",
"#ff9800","#c73000","#795548","#9e9e9e"]

   
    frameArr.map((item)=>{
        let x = Math.floor(Math.random()* 20)+1
        let y = Math.floor(Math.random()* 20)+1
       item.style=`--mainColor:#607d8b ; --x:${x + "px"} ; --y:${y + "px"} `
    } )
    

console.log(frameArr)


  setInterval(()=>{
    let c = Math.floor(Math.random()* colors.length )
    frameArr.map((item,i)=>{
        
       
        
        item.style=`--mainColor:${colors[c]}`
    })

},4800)   

