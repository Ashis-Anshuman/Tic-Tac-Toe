let butt = document.querySelectorAll(".box");

let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]
let turn = true;

butt.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turn){
            box.innerText = "X";
            turn = false;
        }else{
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;
        winner();
    })
})

let winner = () =>{
    win.forEach((part)=>{
        let first = butt.item(part[0]).innerText;
        let second = butt.item(part[1]).innerText
        let third = butt.item(part[2]).innerText
        if(first != "" && second != "" && third != ""){
            if(first == second && second == third){
                console.log("WINER");
                // butt.forEach((em)=>{
                //     em.innerText = "";
                // })
            }
        }
    })
    // for(let i = 0; i<=win.length; i++){
    //     for(let j = 0; j <=win[i].length; j++){
    //         if(butt.item(win[i][j]).innerText===){

    //         }
    //     }
    // }
}