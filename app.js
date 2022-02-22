const btn = document.getElementById("btn");

const moveX = (amount, element, delay) => {
    return new Promise((resolve, reject) => {
        const bodyRightBorder = document.body.clientWidth;
        const rightButtonBorder = element.getBoundingClientRect().right;
        const leftButtonBorder = element.getBoundingClientRect().left;
        setTimeout(()=>{
            if(rightButtonBorder + amount > bodyRightBorder) {
                reject(bodyRightBorder);
            } else {
                element.style.transform = `translateX(${leftButtonBorder+amount}px)`;
                resolve();
            }
        }, delay)
    })
}

moveX(100, btn, 1000)
.then (()=> moveX(100, btn, 1000))
.then (()=> moveX(100, btn, 1000))
.then (()=> moveX(100, btn, 1000))
.then (()=> moveX(100, btn, 1000))
.then (()=> moveX(100, btn, 1000))
.then (()=> moveX(100, btn, 1000))
.then (()=> moveX(100, btn, 1000))
.then (()=> moveX(100, btn, 1000))
.then (()=> moveX(100, btn, 1000))
.then (()=> moveX(100, btn, 1000))
.catch((bodyRightBorder)=> {
    console.log(`sorry, you almost touched right border (${bodyRightBorder}px)`);
})
