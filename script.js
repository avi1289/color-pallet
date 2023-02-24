let button =  document.querySelector('.refresh-btn');
let container = document.querySelector('.container');
const maxcolor =9
const generatepelate = ()=>{
    container.innerHTML=""
    for(let i=0;i<maxcolor;i++){
        let hex = Math.floor(Math.random()*0xffffff).toString(16);
        hex = `#${hex.padStart(6,"0")}`
        const color  = document.createElement('li');
        color.classList.add('color');
        color.innerHTML = `
                             <div class="rect-box" style="background:${hex}"></div>
                                <span class="hex-value">${hex}</span></li>`
        //adding click event to current li element to cpy the color
        color.addEventListener('click',()=>copyColor(color,hex))
        container.appendChild(color);
        
        
    }
}


generatepelate()


const copyColor = (elem,hexValue)=>{
    console.log(elem,hexValue)
    const colorElement  = elem.querySelector('.hex-value')
    navigator.clipboard.writeText(hexValue).then(()=>{
        colorElement.innerHTML = 'copied'
    })
}

button.addEventListener('click',generatepelate);