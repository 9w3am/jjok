const d=`
@media print {
  html, body { height: auto !important; overflow: visible !important; background: #fff !important; }
  body > *:not(.print-root) { display: none !important; }
}
@media screen { .print-root { position: fixed; left: -100000px; top: 0; width: 1px; overflow: hidden; } }
`;async function m(t){const n=document.createElement("style");n.textContent=t.css+d;const e=document.createElement("div");e.className="print-root",e.innerHTML=t.body,document.head.append(n),document.body.append(e);const a=e.textContent??"",i=[...new Set([...t.families??[],'"Nanum Myeongjo"','"Pretendard Variable"'])];return await Promise.all(i.flatMap(o=>["400","700"].map(r=>document.fonts.load(`${r} 16px ${o}`,a).catch(()=>[])))),await document.fonts.ready,await new Promise(o=>requestAnimationFrame(()=>o(null))),()=>{n.remove(),e.remove()}}async function c(t){const n=await m(t);try{window.print()}finally{n()}}export{m as mountPrint,c as printInPlace};
