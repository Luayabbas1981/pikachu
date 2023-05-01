const frame = document.querySelector(".frame")
const frameArr = Array.from(document.querySelectorAll(".frame > div:not(.div35) "))
const btn = frameArr[34]

let colors=["#f44336","#e91e63","#9c27b0","#673ab7","#2196f3","#0390a2","#009688",
"#ec8d01","#c73000","#795548","#7c7b7b"]

    frameArr.map((item)=>{
        let x = Math.floor(Math.random()* 20)+1
        let y = Math.floor(Math.random()* 20)+1
       item.style=`--mainColor:#607d8b ; --x:${x + "px"} ; --y:${y + "px"} `
    } )
    
    
  changeColor= ()=>{
    let c = Math.floor(Math.random()* colors.length )
    frameArr.map((item)=>{
       
        item.style=`--mainColor:${colors[c]}`
        

    })

  }  

