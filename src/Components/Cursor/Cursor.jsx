import React from "react";
import "./Cursor.css";

function Cursor() {
  let crsr = document.querySelector("#cursor");
  let crsr_blr = document.querySelector("#cursor-blur");
  document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsr_blr.style.left = dets.x - 200 + "px";
    crsr_blr.style.top = dets.y - 200 + "px";
  });

  let liAll = document.querySelectorAll('#nav li')
  liAll.forEach((ele)=>{
    ele.addEventListener("mouseenter", ()=>{
      crsr.style.scale = 3;
      crsr.style.border="1px solid #ffff";
      crsr.style.backgroundColor = "transparent";
      // btnLi.style.zIndex="-100"
      // crsr.style.zIndex="1";
    })
    ele.addEventListener("mouseleave", ()=>{
      crsr.style.scale = 1;
      crsr.style.border="0px solid #95C11E";
      crsr.style.backgroundColor = "#95C11E";
    })
  }) 

   

  return (
    <>
      <div id="cursor"></div>
      <div id="cursor-blur"></div>
    </>
  );
}

export default Cursor;
