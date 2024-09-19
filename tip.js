function select(selector) {
    let elem = document.querySelector(selector);
    let tip  = document.querySelector(".tipjs-tip");
    elem.text=(text)=> {
        tip.innerText = text;
    }
    elem.danger=()=>{
        tip.classList.add("danger");
    }
    elem.addEventListener("mousemove", (tipevent)=> {
        let x = 5+tipevent.clientX;
        let y = 20+tipevent.clientY;
        tip.style.top = y+"px";
        tip.style.left = x+"px";
        tip.classList.add("show-tipjs-tip");
    })
    elem.addEventListener("mouseout", ()=> {
        tip.classList.remove("show-tipjs-tip");
    })
    return elem
}
