import{D as e,d as t,f as n,g as r,h as i,i as a,l as o,m as s,v as c,w as l}from"./redux-toolkit.modern-C2Jt0uAY.js";import{a as u}from"./index-BDWRJeC5.js";import{t as d}from"./formatCurrency-BGHwWR9m.js";import{t as f}from"./skeleton-DqS8Oi86.js";var p=e(l(),1),m=n(),h=r.div`
  position: absolute;
  top: 40px;
  left: 20px;
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid #c9a23f;
  color: #c9a23f;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 12px;
  font-weight: bold;
`,g=r.div`
  background: #f3f1ec;
  border-radius: 16px;
  overflow: hidden;
  padding: 15px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 25px rgba(0,0,0,0.1);
  }
`,_=r.div`
  position: relative;
`,v=r.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: black;
  color: white;
  font-size: 10px;
  padding: 5px 8px;
  border-radius: 6px;
  text-transform: uppercase;
`,y=r.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fff;
  font-size: 12px;
  padding: 4px 6px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
`,b=r.img`
  width: 100%;
  height: 160px;
  object-fit: contain;
  margin-top: 20px;
  transition: transform 0.3s ease;

  ${g}:hover & {
    transform: scale(1.05);
  }
`,x=r.div`
  margin-top: 15px;
  padding: 10px;
`,S=r.h4`
  font-size: 14px;
  margin: 0;
  min-height: 40px;
  line-height: 1.3;
`,C=r.p`
  font-size: 12px;
  color: #777;
  margin: 5px 0;
  line-height: 1.4;
`,w=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`,T=r.div`
  font-weight: bold;
  font-size: 14px;
`,E=r.div`
  font-size: 12px;
  color: #d2691e;
  font-weight: 500;
`,D=p.memo(({product:e})=>{if(!e)return null;let{id:n,title:r=`Untitled Product`,description:i=``,price:a=0,category:s=`product`,rating:l=0,thumbnail:u}=e,f=[`mens-shirts`,`mens-shoes`].includes(s)&&e.size;return(0,m.jsx)(c,{to:`/product/${n}`,style:{textDecoration:`none`,color:`inherit`},children:(0,m.jsxs)(g,{children:[(0,m.jsxs)(_,{children:[(0,m.jsx)(v,{children:s.toUpperCase()}),f&&(0,m.jsx)(h,{children:e.size}),(0,m.jsxs)(y,{children:[(0,m.jsx)(t,{icon:o,style:{color:`#f5a623`}}),Number(l).toFixed(1)]}),(0,m.jsx)(b,{src:u||`https://placehold.co/150`,alt:r,loading:`lazy`,onError:e=>{e.target.src=`https://placehold.co/150`}})]}),(0,m.jsxs)(x,{children:[(0,m.jsx)(S,{children:r}),(0,m.jsx)(C,{children:i?i.slice(0,50)+(i.length>50?`...`:``):`No description available`}),(0,m.jsxs)(w,{children:[(0,m.jsx)(T,{children:d(a)}),(0,m.jsx)(E,{children:`VIEW →`})]})]})]})})}),O=20,k=[`mens-shirts`,`mens-shoes`],A=r.div`
  background: #f6f7fb;
  min-height: 100vh;
`,j=r.div`
  max-width: 1200px;
  margin: auto;
  padding: 30px 20px;
`,M=r.div`
  margin-bottom: 25px;

  h1 {
    margin: 0;
    font-size: 28px;
  }

  p {
    color: #777;
    margin-top: 5px;
  }
`,N=r.div`
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
  flex-wrap: wrap;
`,P=r.input`
  padding: 12px 15px;
  border-radius: 10px;
  border: 1px solid #ddd;
  flex: 1;
  min-width: 200px;
`,F=r.select`
  padding: 12px 15px;
  border-radius: 10px;
  border: 1px solid #ddd;
`,I=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`,L=r.div`
  text-align: center;
  margin-top: 50px;
  color: #888;
`,R=r.div`
  text-align: center;
  padding: 24px 0 8px;
  color: #aaa;
  font-size: 14px;
`,z=r.div`
  height: 1px;
  margin-top: 20px;
`,B=()=>{let e=s(),{items:n=[],status:r,error:o}=i(e=>e.products),[c,l]=(0,p.useState)(localStorage.getItem(`search`)||``),[d,h]=(0,p.useState)(localStorage.getItem(`category`)||``),[g,_]=(0,p.useState)(localStorage.getItem(`size`)||``),[v,y]=(0,p.useState)(c),[b,x]=(0,p.useState)(O),S=(0,p.useRef)(null),C=k.includes(d);(0,p.useEffect)(()=>{r===`idle`&&e(u())},[e,r]),(0,p.useEffect)(()=>{let e=setTimeout(()=>y(c),400);return()=>clearTimeout(e)},[c]),(0,p.useEffect)(()=>localStorage.setItem(`search`,c),[c]),(0,p.useEffect)(()=>localStorage.setItem(`category`,d),[d]),(0,p.useEffect)(()=>localStorage.setItem(`size`,g),[g]),(0,p.useEffect)(()=>{k.includes(d)||_(``)},[d]),(0,p.useEffect)(()=>{x(O)},[v,d,g]);let w=(0,p.useCallback)(()=>{x(e=>e+O)},[]);(0,p.useEffect)(()=>{let e=S.current;if(!e)return;let t=new IntersectionObserver(e=>{e[0].isIntersecting&&w()},{rootMargin:`200px`});return t.observe(e),()=>t.disconnect()},[w,r]);let T=(0,p.useMemo)(()=>{let e={"mens-shirts":[`M`,`L`,`XL`],"mens-shoes":[`L`,`XL`]},t=(t,n)=>{let r=e[t]||[`M`,`L`];return r[n%r.length]};return n.map(e=>({...e,size:t(e.category,e.id)}))},[n]),E=(0,p.useMemo)(()=>[...new Set(n.map(e=>e.category))].filter(Boolean),[n]),B=(0,p.useMemo)(()=>T.filter(e=>(e.title?.toLowerCase()||``).includes(v.toLowerCase())&&(d?e.category===d:!0)&&(g?e.size===g:!0)),[T,v,d,g]),V=(0,p.useMemo)(()=>B.slice(0,b),[B,b]),H=b<B.length;return r===`failed`?(0,m.jsx)(L,{children:o||`Failed to load products`}):(0,m.jsx)(A,{children:(0,m.jsxs)(j,{children:[(0,m.jsxs)(M,{children:[(0,m.jsx)(`h1`,{children:`Discover Products`}),(0,m.jsx)(`p`,{children:`Browse and explore our latest collection`})]}),(0,m.jsxs)(N,{children:[(0,m.jsx)(P,{type:`text`,placeholder:`Search products...`,value:c,onChange:e=>l(e.target.value)}),(0,m.jsxs)(F,{value:d,onChange:e=>h(e.target.value),children:[(0,m.jsx)(`option`,{value:``,children:`All Categories`}),E.map(e=>(0,m.jsx)(`option`,{value:e,children:e},e))]}),C&&(0,m.jsxs)(F,{value:g,onChange:e=>_(e.target.value),children:[(0,m.jsx)(`option`,{value:``,children:`All Sizes`}),(0,m.jsx)(`option`,{value:`S`,children:`S`}),(0,m.jsx)(`option`,{value:`M`,children:`M`}),(0,m.jsx)(`option`,{value:`L`,children:`L`}),(0,m.jsx)(`option`,{value:`XL`,children:`XL`})]})]}),r===`loading`?(0,m.jsx)(I,{children:Array(8).fill(null).map((e,t)=>(0,m.jsx)(f,{height:250,borderRadius:16},t))}):(0,m.jsxs)(m.Fragment,{children:[B.length===0&&(0,m.jsxs)(L,{children:[(0,m.jsx)(t,{icon:a,style:{marginRight:`8px`}}),`No products found`]}),(0,m.jsx)(I,{children:V.map(e=>(0,m.jsx)(D,{product:e},e.id))}),H&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(z,{ref:S}),(0,m.jsx)(R,{children:`Loading more products…`})]})]})]})})};export{B as default};