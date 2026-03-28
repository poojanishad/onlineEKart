import{a as e,d as t,f as n,g as r,h as i,m as a,v as o}from"./redux-toolkit.modern-C2Jt0uAY.js";import{i as s,n as c,r as l}from"./index-BDWRJeC5.js";import{t as u}from"./formatCurrency-BGHwWR9m.js";var d=n(),f=[`mens-shirts`,`womens-dresses`,`tops`,`womens-tops`],p=r.div`
  background: #f3f1ec;
  min-height: 100vh;
  padding: 30px;
`,m=r.div`
  max-width: 1100px;
  margin: auto;
`,h=r.h2`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
`,g=r.div`
  display: flex;
  gap: 20px;
  background: white;
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 15px;
  align-items: center;
`,_=r.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`,v=r.div`
  flex: 1;
`,y=r.div`
  font-weight: bold;
`,b=r.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,x=r.button`
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  background: black;
  color: white;
  border-radius: 5px;
`,S=r.button`
  background: red;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
`,C=r.div`
  margin-top: 30px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  text-align: right;
`,w=r.div`
  text-align: center;
  margin-top: 80px;
  color: #777;
  display: flex;
  flex-direction: column;
  align-items: center;
`,T=r.button`
  margin-top: 15px;
  padding: 10px 20px;
  background: black;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`,E=()=>{let{items:n}=i(e=>e.cart),r=a(),E=n.reduce((e,t)=>e+t.price*t.quantity,0);return(0,d.jsx)(p,{children:(0,d.jsxs)(m,{children:[(0,d.jsxs)(h,{children:[(0,d.jsx)(t,{icon:e}),`Your Cart`]}),n.length===0&&(0,d.jsxs)(w,{children:[(0,d.jsx)(t,{icon:e,size:`3x`,style:{opacity:.3}}),(0,d.jsx)(`p`,{style:{marginTop:`10px`},children:`Your cart is empty`}),(0,d.jsx)(o,{to:`/`,children:(0,d.jsx)(T,{children:`Go Shopping`})})]}),n.map(e=>{let t=f.includes(e.category);return(0,d.jsxs)(g,{children:[(0,d.jsx)(_,{src:e.thumbnail,alt:e.title}),(0,d.jsxs)(v,{children:[(0,d.jsx)(`h4`,{children:e.title}),(0,d.jsx)(y,{children:u(e.price)}),t&&(0,d.jsxs)(`div`,{style:{fontSize:`12px`,marginTop:`5px`},children:[`Size: `,e.selectedSize||`M`]})]}),(0,d.jsxs)(b,{children:[(0,d.jsx)(x,{onClick:()=>r(c(e.id)),children:`-`}),e.quantity,(0,d.jsx)(x,{onClick:()=>r(l(e.id)),children:`+`})]}),(0,d.jsx)(S,{onClick:()=>r(s(e.id)),children:`Remove`})]},e.id)}),n.length>0&&(0,d.jsx)(C,{children:(0,d.jsxs)(`h3`,{children:[`Total: `,u(E)]})})]})})};export{E as default};