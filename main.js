//simple-piano
let whitekeys=["z","x","c","v","b","n","m"];
let blackkeys=["s","d","g","h","j"];
let keypress= document.querySelectorAll(".keyboard button");
let keym=document.querySelectorAll(".keym");
let WhiteKeys=document.querySelectorAll(".keym.white");
let BlackKeys=document.querySelectorAll(".keym.black");
function playnote(key){
   key.classList.add("active");
   let audioid=key.dataset.note;
   let note=document.getElementById(audioid);
   note.currentTime=0;
   note.play();
   note.addEventListener("ended",()=>{
     key.classList.remove("active");
   })
}
keym.forEach(key =>{
  key.addEventListener("click",()=> playnote(key));
})
keypress[0].addEventListener("click",()=>{
  keypress[0].classList.add("key-press");
  keypress[1].classList.remove("key-press");
  WhiteKeys.forEach((key,index) =>{
    key.innerHTML =`<span>${whitekeys[index]}</span>`
})
   BlackKeys.forEach((key,index)=>{
   key.innerHTML =`<span>${blackkeys[index]}</span>`
})
  document.addEventListener("keydown",e=>{
    if(keypress[0].classList.contains("key-press")){
      if(e.repeat) return;
    let kvalue=e.key;
    let whiteindex=whitekeys.indexOf(kvalue);
    let blackindex=blackkeys.indexOf(kvalue);
    if(whiteindex!= -1)playnote(WhiteKeys[whiteindex]);
    if(blackindex!= -1)playnote(BlackKeys[blackindex]);}
  })  
  
})
keypress[1].addEventListener("click",()=>{
  keypress[1].classList.add("key-press");
  keypress[0].classList.remove("key-press");
  WhiteKeys.forEach((key) =>{
    key.innerHTML ="";
})
  BlackKeys.forEach((key)=>{
  key.innerHTML ="";
})  
})
