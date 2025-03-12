let butt = document.querySelectorAll(".box");
let msg = document.querySelector("p");

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

let reset = () =>{
    butt.forEach((em)=>{
        em.innerText = "";
        em.disabled = false;
        msg.classList.add('class', 'hide');
    })
}

butt.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turn){
            box.innerText = "X";
            box.style.color = "red";
            turn = false;
        }else{
            box.innerText = "O";
            box.style.color = "green";
            turn = true;
        }
        box.disabled = true;
        winner();
    })
})

let winner = () =>{
    win.forEach((part)=>{
        let first = butt.item(part[0]).innerText;
        let second = butt.item(part[1]).innerText;
        let third = butt.item(part[2]).innerText;

        if(first != "" && second != "" && third != ""){
            if(first == second && second == third){
                msg.innerText = `Winer is ${first}`;
                msg.classList.remove('class', 'hide');
                butt.forEach((box)=>{
                    box.disabled = true;
                })
            }
        }
    })
}