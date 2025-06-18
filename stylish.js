export function randomStyle(alpha=0.4){
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    return `rgba(${r},${g},${b},${alpha})`;
}
 export let textcolor;
 export function cycleStyle(element){
   const bg=randomStyle(0.4);
   const fbg=randomStyle(0.4);
   const fatherElement=element.parentElement;
   const black='rgba(0,0,0,0.50)';
   const white='rgba(255,255,255,0.50)';
   fatherElement.style.background=fbg;
  
   if(textcolor===black || textcolor===undefined)
    textcolor=white;
else if(textcolor===white)
textcolor=black;
    element.style.background=bg;
    element.style.color=textcolor;
}