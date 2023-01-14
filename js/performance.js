let panel, start, frames=0;
const create=()=>{
    const div = document.createElement('div');

    div.style.position = 'fixed';
    div.style.left = '0px';
    div.style.top = '0px';
    div.style.width = '100px';
    div.style.height = '30px';
    div.style.backgroundColor = 'rgba(0,0,0, 0.5)';
    div.style.color = 'white';
    div.style.fontSize = '14px';

    return div;
}

const tick=()=>{
    frames++;
    const now = window.performance.now();
    if (now >= start + 1000) {
        panel.innerText=frames+' FPS';
        frames=0;
        start=now;
    }
    window.requestAnimationFrame(tick);
}

const init=(parent=document.body)=>{
    panel=create();
    window.requestAnimationFrame(()=>{
        start=window.performance.now();
        parent.appendChild(panel);
        tick();
    });
}

export default{
    init
}
