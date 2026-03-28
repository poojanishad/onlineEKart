import{D as e,S as t,d as n,f as r,g as i,l as a,m as o,o as s,w as c,x as l}from"./redux-toolkit.modern-C2Jt0uAY.js";import{t as u}from"./axios-CdANMwTa.js";import{o as d,t as f}from"./index-BDWRJeC5.js";import{t as p}from"./formatCurrency-BGHwWR9m.js";import{t as m}from"./skeleton-DqS8Oi86.js";var h=e(c(),1),g=u.create({baseURL:`https://dummyjson.com`}),_=e=>g.get(`/products/${e}`),v=r(),y=i.div`
  background: #f3f1ec;
  min-height: 100vh;
  padding: 30px 20px;
`,b=i.div`
  max-width: 1200px;
  margin: auto;
`,x=i.div`
  font-size: 14px;
  color: #777;
  margin-bottom: 15px;
`,S=i.button`
  margin-bottom: 20px;
  border: none;
  background: none;
  cursor: pointer;
  color: #333;
  font-weight: 500;
  font-size: 15px;
  &:hover { text-decoration: underline; }
`,C=i.div`
  display: flex;
  gap: 40px;
  background: white;
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.05);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,w=i.div`
  flex: 1;
  background: #f3f1ec;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`,T=i.img`
  max-width: 80%;
  transition: 0.3s;
  &:hover { transform: scale(1.05); }
`,E=i.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  flex-wrap: wrap;
  justify-content: center;

  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    border-radius: 8px;
    cursor: pointer;
    border: 2px solid transparent;
    transition: border-color 0.2s;
    background: #fff;
    &:hover { border-color: #ff9800; }
  }
`,D=i.div`
  flex: 1;

  h1 { margin: 0; font-size: 26px; }

  .category {
    color: #888;
    margin: 5px 0;
    text-transform: capitalize;
    font-size: 14px;
  }

  .price {
    font-size: 28px;
    font-weight: bold;
    margin: 10px 0;
  }
`,O=i.div`
  margin-top: 20px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`,k=i.button`
  padding: 12px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
`,A=i(k)`
  background: #ff9800;
  color: white;
`,j=i.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #f5a623;
  margin: 8px 0;
`,M=i(k)`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${({$added:e})=>e?`#4caf50`:`black`};
  color: white;
  transition: background 0.3s;
`,N=i.h2`
  text-align: center;
  color: red;
  margin-top: 80px;
`,P=[`mens-shirts`,`mens-shoes`],F=()=>{let{id:e}=t(),r=l(),i=o(),{cartIconRef:c}=d(),u=(0,h.useRef)(null),[g,k]=(0,h.useState)(null),[F,I]=(0,h.useState)(``),[L,R]=(0,h.useState)(!1),[z,B]=(0,h.useState)(null),[V,H]=(0,h.useState)(``);(0,h.useEffect)(()=>{e&&(async()=>{try{B(null),k(null);let t=await _(e);if(!t.data)throw Error(`Product not found`);k(t.data),I(t.data.images?.[0]||t.data.thumbnail)}catch(e){B(e.response?.status===404?`Product not found`:e.message)}})()},[e]),(0,h.useEffect)(()=>{H(``)},[e]);let U=P.includes(g?.category),W=()=>{let e=u.current,t=c.current;if(!e||!t)return;let n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=e.cloneNode(!0);i.style.cssText=`
      position: fixed;
      top: ${n.top}px;
      left: ${n.left}px;
      width: ${n.width}px;
      height: ${n.height}px;
      transition: all 0.7s ease-in-out;
      z-index: 9999;
      border-radius: 8px;
      pointer-events: none;
      object-fit: contain;
    `,document.body.appendChild(i),setTimeout(()=>{i.style.top=r.top+`px`,i.style.left=r.left+`px`,i.style.width=`20px`,i.style.height=`20px`,i.style.opacity=`0.4`},10),setTimeout(()=>i.remove(),750)};return z?(0,v.jsx)(N,{children:z}):g?(0,v.jsx)(y,{children:(0,v.jsxs)(b,{children:[(0,v.jsxs)(x,{children:[`Home / `,g.category,` / `,g.title]}),(0,v.jsx)(S,{onClick:()=>r(-1),children:`← Back`}),(0,v.jsxs)(C,{children:[(0,v.jsxs)(w,{children:[(0,v.jsx)(T,{ref:u,src:F,alt:g.title,onError:e=>{e.target.src=`https://placehold.co/300`}}),(0,v.jsx)(E,{children:g.images?.map((e,t)=>(0,v.jsx)(`img`,{src:e,alt:`${g.title} view ${t+1}`,onClick:()=>I(e),style:{borderColor:F===e?`#ff9800`:`transparent`},onError:e=>{e.target.src=`https://placehold.co/60`}},t))})]}),(0,v.jsxs)(D,{children:[(0,v.jsx)(`h1`,{children:g.title}),(0,v.jsx)(`div`,{className:`category`,children:g.category}),(0,v.jsxs)(j,{children:[(0,v.jsx)(n,{icon:a}),Number(g.rating||0).toFixed(1),(0,v.jsxs)(`span`,{style:{color:`#999`,fontSize:13},children:[`(`,g.reviews?.length||0,` reviews)`]})]}),(0,v.jsx)(`div`,{className:`price`,children:p(g.price)}),U&&(0,v.jsxs)(`div`,{style:{margin:`12px 0`},children:[(0,v.jsx)(`strong`,{children:`Select Size:`}),(0,v.jsx)(`div`,{style:{display:`flex`,gap:`10px`,marginTop:`8px`},children:[`S`,`M`,`L`,`XL`].map(e=>(0,v.jsx)(`button`,{onClick:()=>H(e),style:{padding:`6px 14px`,borderRadius:`6px`,border:V===e?`2px solid black`:`1px solid #ccc`,background:V===e?`#000`:`#fff`,color:V===e?`#fff`:`#000`,cursor:`pointer`,fontWeight:V===e?600:400,transition:`all 0.2s`},children:e},e))})]}),(0,v.jsx)(`p`,{style:{color:`#555`,lineHeight:1.7},children:g.description}),(0,v.jsxs)(O,{children:[(0,v.jsx)(M,{onClick:()=>{if(U&&!V){alert(`Please select a size before adding to cart`);return}i(f({...g,selectedSize:V})),W(),R(!0),setTimeout(()=>R(!1),2e3)},$added:L,disabled:U&&!V,style:{opacity:U&&!V?.5:1,cursor:U&&!V?`not-allowed`:`pointer`},children:L?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(n,{icon:s}),` Added!`]}):U&&!V?`Select Size First`:`Add to Cart`}),(0,v.jsx)(A,{children:`Buy Now`})]})]})]})]})}):(0,v.jsx)(y,{children:(0,v.jsx)(b,{children:(0,v.jsxs)(C,{children:[(0,v.jsxs)(w,{children:[(0,v.jsx)(m,{height:300,width:300,borderRadius:12}),(0,v.jsx)(`div`,{style:{display:`flex`,gap:10,marginTop:15},children:[1,2,3].map(e=>(0,v.jsx)(m,{width:60,height:60,borderRadius:8},e))})]}),(0,v.jsxs)(D,{children:[(0,v.jsx)(m,{height:36,width:`70%`,style:{marginBottom:10}}),(0,v.jsx)(m,{height:18,width:`40%`,style:{marginBottom:10}}),(0,v.jsx)(m,{height:32,width:`30%`,style:{marginBottom:16}}),(0,v.jsx)(m,{count:4,style:{marginBottom:6}}),(0,v.jsx)(m,{height:44,width:160,style:{marginTop:20}})]})]})})})};export{F as default};