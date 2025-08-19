import{j as e}from"./jsx-runtime-DiklIkkE.js";import{R as qa,r as X}from"./index-DRjF_FHU.js";const Sa=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M15.8333 10H4.16663M4.16663 10L9.99996 15.8334M4.16663 10L9.99996 4.16669",stroke:"currentColor",strokeWidth:"1.67",strokeLinecap:"round",strokeLinejoin:"round"})}),Ca=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M4.16675 10H15.8334M15.8334 10L10.0001 4.16669M15.8334 10L10.0001 15.8334",stroke:"currentColor",strokeWidth:"1.67",strokeLinecap:"round",strokeLinejoin:"round"})}),Fa=({currentPage:a,totalPages:n,size:r="md",color:i="primary-light",framed:o=!1,style:t="dot",onPageChange:s,disabled:p=!1})=>{const c=b=>{!p&&s&&b!==a&&s(b)},h=["pagination-dots",`pagination-dots--${r}`,`pagination-dots--${i}`,`pagination-dots--${t}`,o?"pagination-dots--framed":""].filter(Boolean).join(" ");return e.jsx("div",{className:h,role:"tablist","aria-label":"Pagination dots",children:Array.from({length:n},(b,f)=>{const y=f+1,k=y===a;return e.jsx("button",{className:`pagination-dot ${k?"pagination-dot--active":""}`,onClick:()=>c(y),disabled:p,role:"tab","aria-selected":k,"aria-label":`Go to page ${y}`},y)})})},Aa=({page:a,isActive:n=!1,isEllipsis:r=!1,shape:i="square",onClick:o,disabled:t=!1})=>{const s=()=>{!t&&!r&&o&&o(a)};return e.jsx("button",{className:`pagination-number ${i==="circle"?"pagination-number--circle":"pagination-number--square"} ${n?"pagination-number--active":""} ${r?"pagination-number--ellipsis":""}`,onClick:s,disabled:t||r,"aria-current":n?"page":void 0,"aria-label":r?"More pages":`Page ${a}`,children:r?"...":a})},v=({direction:a,type:n="link",disabled:r=!1,onClick:i,children:o})=>{const t=a==="previous"?e.jsx(Sa,{}):e.jsx(Ca,{}),s=a==="previous"?"Previous":"Next";return e.jsx("button",{className:`pagination-nav pagination-nav--${a} pagination-nav--${n}`,onClick:i,disabled:r,"aria-label":`Go to ${a} page`,children:n==="icon-only"?t:a==="previous"?e.jsxs(e.Fragment,{children:[t,e.jsx("span",{children:o||s})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:o||s}),t]})})},re=({currentPage:a,totalPages:n,maxPageButtons:r,onPageChange:i,onPrevious:o,onNext:t,disabled:s})=>{const p=Ma(a,n,r);return e.jsxs("div",{className:"pagination-button-group",children:[e.jsxs("button",{className:"pagination-button-group__button pagination-button-group__button--previous",onClick:o,disabled:s||a<=1,"aria-label":"Go to previous page",children:[e.jsx(Sa,{}),e.jsx("span",{children:"Previous"})]}),p.map((c,h)=>e.jsxs(qa.Fragment,{children:[h>0&&e.jsx("div",{className:"pagination-button-group__divider"}),e.jsx("button",{className:`pagination-button-group__button pagination-button-group__button--page ${c===a?"pagination-button-group__button--active":""}`,onClick:()=>i&&i(c),disabled:s||typeof c!="number","aria-current":c===a?"page":void 0,"aria-label":typeof c=="number"?`Page ${c}`:"More pages",children:typeof c=="number"?c:"..."})]},h)),e.jsx("div",{className:"pagination-button-group__divider"}),e.jsxs("button",{className:"pagination-button-group__button pagination-button-group__button--next",onClick:t,disabled:s||a>=n,"aria-label":"Go to next page",children:[e.jsx("span",{children:"Next"}),e.jsx(Ca,{})]})]})},Ma=(a,n,r)=>{if(n<=r)return Array.from({length:n},(t,s)=>s+1);const i=[],o=Math.floor(r/2);if(i.push(1),a<=o+2){for(let t=2;t<=Math.min(r-1,n-1);t++)i.push(t);n>r&&i.push("...")}else if(a>=n-o-1){n>r&&i.push("...");for(let t=Math.max(n-r+2,2);t<=n-1;t++)i.push(t)}else{i.push("...");for(let t=a-o+1;t<=a+o-1;t++)i.push(t);i.push("...")}return n>1&&i.push(n),i},g=({currentPage:a,totalPages:n,type:r="page-default",shape:i="square",breakpoint:o="desktop",alignment:t="center",showNavigation:s=!0,showPageNumbers:p=!0,showPageInfo:c=!1,maxPageButtons:h=7,labels:b={},onPageChange:f,onPrevious:y,onNext:k,className:Ga="",disabled:u=!1,dotsConfig:Y={size:"md",color:"primary-light",framed:!1},...P})=>{const{previous:ee="Previous",next:ae="Next",pageInfo:Z=`Page ${a} of ${n}`}=b,L=m=>{m!==a&&f&&f(m)},D=()=>{a>1&&(y?y():f&&f(a-1))},w=()=>{a<n&&(k?k():f&&f(a+1))},Na=Ma(a,n,h),x=["pagination",`pagination--${r}`,`pagination--${o}`,`pagination--${t}`,Ga].filter(Boolean).join(" ");if(r==="dots"||r==="lines"){const m=r==="dots"?"dot":"line";return e.jsx("nav",{className:x,"aria-label":"Pagination",...P,children:e.jsx(Fa,{currentPage:a,totalPages:n,size:Y.size,color:Y.color,framed:Y.framed,style:m,onPageChange:L,disabled:u})})}if(o==="mobile")return r.includes("button-group")?e.jsx("nav",{className:x,"aria-label":"Pagination",...P,children:e.jsx(re,{currentPage:a,totalPages:n,maxPageButtons:5,onPageChange:L,onPrevious:D,onNext:w,disabled:u})}):e.jsxs("nav",{className:x,"aria-label":"Pagination",...P,children:[s&&e.jsx(v,{direction:"previous",type:"icon-only",disabled:u||a<=1,onClick:D}),c&&e.jsx("div",{className:"pagination-info",children:Z}),s&&e.jsx(v,{direction:"next",type:"icon-only",disabled:u||a>=n,onClick:w})]});if(r.includes("button-group"))return e.jsx("nav",{className:x,"aria-label":"Pagination",...P,children:e.jsx(re,{currentPage:a,totalPages:n,maxPageButtons:h,onPageChange:L,onPrevious:D,onNext:w,disabled:u})});if(r.includes("minimal")){const m=r.includes("card")?"secondary":"link";return e.jsxs("nav",{className:x,"aria-label":"Pagination",...P,children:[t==="left"&&c&&e.jsx("div",{className:"pagination-info",children:Z}),s&&e.jsxs("div",{className:"pagination-actions",children:[e.jsx(v,{direction:"previous",type:m,disabled:u||a<=1,onClick:D,children:ee}),e.jsx(v,{direction:"next",type:m,disabled:u||a>=n,onClick:w,children:ae})]}),(t==="center"||t==="right")&&c&&e.jsx("div",{className:"pagination-info",children:Z})]})}const ne=r.includes("card")?"secondary":"link";return e.jsxs("nav",{className:x,"aria-label":"Pagination",...P,children:[s&&e.jsx(v,{direction:"previous",type:ne,disabled:u||a<=1,onClick:D,children:ee}),p&&e.jsx("div",{className:"pagination-numbers",children:Na.map((m,Ia)=>e.jsx(Aa,{page:typeof m=="number"?m:0,isActive:m===a,isEllipsis:typeof m=="string",shape:i,onClick:L,disabled:u},Ia))}),s&&e.jsx(v,{direction:"next",type:ne,disabled:u||a>=n,onClick:w,children:ae})]})};g.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:"Current page number (1-based)"},totalPages:{required:!0,tsType:{name:"number"},description:"Total number of pages"},type:{required:!1,tsType:{name:"union",raw:"'page-default' | 'page-minimal' | 'card-default' | 'card-minimal' | 'card-button-group' | 'dots' | 'lines'",elements:[{name:"literal",value:"'page-default'"},{name:"literal",value:"'page-minimal'"},{name:"literal",value:"'card-default'"},{name:"literal",value:"'card-minimal'"},{name:"literal",value:"'card-button-group'"},{name:"literal",value:"'dots'"},{name:"literal",value:"'lines'"}]},description:"Type of pagination layout",defaultValue:{value:"'page-default'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}]},description:"Shape of page number buttons",defaultValue:{value:"'square'",computed:!1}},breakpoint:{required:!1,tsType:{name:"union",raw:"'desktop' | 'mobile'",elements:[{name:"literal",value:"'desktop'"},{name:"literal",value:"'mobile'"}]},description:"Responsive breakpoint",defaultValue:{value:"'desktop'",computed:!1}},alignment:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"Alignment for certain types",defaultValue:{value:"'center'",computed:!1}},showNavigation:{required:!1,tsType:{name:"boolean"},description:"Show Previous/Next buttons",defaultValue:{value:"true",computed:!1}},showPageNumbers:{required:!1,tsType:{name:"boolean"},description:"Show page numbers",defaultValue:{value:"true",computed:!1}},showPageInfo:{required:!1,tsType:{name:"boolean"},description:'Show page info text (e.g., "Page 1 of 10")',defaultValue:{value:"false",computed:!1}},maxPageButtons:{required:!1,tsType:{name:"number"},description:"Maximum number of page buttons to show",defaultValue:{value:"7",computed:!1}},labels:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  previous?: string;
  next?: string;
  pageInfo?: string; // Template: "Page {current} of {total}"
}`,signature:{properties:[{key:"previous",value:{name:"string",required:!1}},{key:"next",value:{name:"string",required:!1}},{key:"pageInfo",value:{name:"string",required:!1}}]}},description:"Custom labels",defaultValue:{value:"{}",computed:!1}},onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"Event handlers"},onPrevious:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNext:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},dotsConfig:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  size?: 'md' | 'lg';
  color?: 'primary-light' | 'primary-dark' | 'gray-light' | 'gray-dark';
  framed?: boolean;
}`,signature:{properties:[{key:"size",value:{name:"union",raw:"'md' | 'lg'",elements:[{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}],required:!1}},{key:"color",value:{name:"union",raw:"'primary-light' | 'primary-dark' | 'gray-light' | 'gray-dark'",elements:[{name:"literal",value:"'primary-light'"},{name:"literal",value:"'primary-dark'"},{name:"literal",value:"'gray-light'"},{name:"literal",value:"'gray-dark'"}],required:!1}},{key:"framed",value:{name:"boolean",required:!1}}]}},description:"Pagination dots configuration",defaultValue:{value:`{
  size: 'md',
  color: 'primary-light',
  framed: false
}`,computed:!1}}}};const $a={title:"Components/Pagination",component:g,parameters:{layout:"centered",docs:{description:{component:"A comprehensive pagination component with multiple layout types, responsive design, and accessibility features."}}},tags:["autodocs"],argTypes:{currentPage:{description:"Current active page number (1-based)",control:{type:"number",min:1}},totalPages:{description:"Total number of pages",control:{type:"number",min:1}},type:{description:"Type of pagination layout",control:"select",options:["page-default","page-minimal","card-default","card-minimal","card-button-group","dots","lines"]},shape:{description:"Shape of page number buttons",control:"select",options:["square","circle"]},breakpoint:{description:"Responsive breakpoint",control:"select",options:["desktop","mobile"]},alignment:{description:"Alignment for certain types",control:"select",options:["left","center","right"]},showNavigation:{description:"Show Previous/Next buttons",control:"boolean"},showPageNumbers:{description:"Show page numbers",control:"boolean"},showPageInfo:{description:"Show page info text",control:"boolean"},maxPageButtons:{description:"Maximum number of page buttons to show",control:{type:"number",min:3,max:10}},disabled:{description:"Disabled state",control:"boolean"}}},l=a=>{const[n,r]=X.useState(a.currentPage||1);return e.jsx(g,{...a,currentPage:n,onPageChange:r,onPrevious:()=>r(Math.max(1,n-1)),onNext:()=>r(Math.min(a.totalPages,n+1))})},d={render:l,args:{currentPage:1,totalPages:10,type:"page-default",shape:"square",breakpoint:"desktop",alignment:"center",showNavigation:!0,showPageNumbers:!0,showPageInfo:!1,maxPageButtons:7,disabled:!1}},z={render:l,args:{...d.args,type:"page-minimal",showPageNumbers:!1,showPageInfo:!0}},j={render:l,args:{...d.args,type:"card-default"}},S={render:l,args:{...d.args,type:"card-minimal",showPageNumbers:!1,showPageInfo:!0}},C={render:l,args:{...d.args,type:"card-button-group",showNavigation:!0,showPageNumbers:!0}},M={render:l,args:{...d.args,shape:"circle"}},G={render:l,args:{...d.args,breakpoint:"mobile",showPageNumbers:!1,showPageInfo:!0},parameters:{viewport:{defaultViewport:"mobile1"}}},N={render:l,args:{...d.args,type:"card-minimal",breakpoint:"mobile",showPageNumbers:!1,showPageInfo:!0},parameters:{viewport:{defaultViewport:"mobile1"}}},I={render:l,args:{...d.args,type:"card-button-group",breakpoint:"mobile"},parameters:{viewport:{defaultViewport:"mobile1"}}},q={render:l,args:{...d.args,type:"card-minimal",alignment:"left",showPageNumbers:!1,showPageInfo:!0}},F={render:l,args:{...d.args,type:"card-minimal",alignment:"right",showPageNumbers:!1,showPageInfo:!0}},A={render:l,args:{...d.args,totalPages:1}},U={render:l,args:{...d.args,totalPages:2}},T={render:l,args:{...d.args,currentPage:15,totalPages:50,maxPageButtons:7}},$={render:l,args:{...d.args,currentPage:10,totalPages:10}},V={args:{...d.args,disabled:!0}},W={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"48px",padding:"32px",maxWidth:"1200px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",fontWeight:"600"},children:"Page Default - Desktop"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",color:"#666"},children:"Square Shape"}),e.jsx(g,{currentPage:1,totalPages:10,type:"page-default",shape:"square",breakpoint:"desktop"})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",color:"#666"},children:"Circle Shape"}),e.jsx(g,{currentPage:1,totalPages:10,type:"page-default",shape:"circle",breakpoint:"desktop"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",fontWeight:"600"},children:"Page Minimal - Desktop"}),e.jsx(g,{currentPage:1,totalPages:10,type:"page-minimal",shape:"square",breakpoint:"desktop",showPageNumbers:!1,showPageInfo:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",fontWeight:"600"},children:"Card Default - Desktop"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",color:"#666"},children:"Square Shape"}),e.jsx(g,{currentPage:1,totalPages:10,type:"card-default",shape:"square",breakpoint:"desktop"})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",color:"#666"},children:"Circle Shape"}),e.jsx(g,{currentPage:1,totalPages:10,type:"card-default",shape:"circle",breakpoint:"desktop"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",fontWeight:"600"},children:"Card Minimal - Desktop"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",color:"#666"},children:"Left Aligned"}),e.jsx(g,{currentPage:1,totalPages:10,type:"card-minimal",alignment:"left",breakpoint:"desktop",showPageNumbers:!1,showPageInfo:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",color:"#666"},children:"Center Aligned"}),e.jsx(g,{currentPage:1,totalPages:10,type:"card-minimal",alignment:"center",breakpoint:"desktop",showPageNumbers:!1,showPageInfo:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",color:"#666"},children:"Right Aligned"}),e.jsx(g,{currentPage:1,totalPages:10,type:"card-minimal",alignment:"right",breakpoint:"desktop",showPageNumbers:!1,showPageInfo:!0})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",fontWeight:"600"},children:"Card Button Group - Desktop"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",color:"#666"},children:"Left Aligned"}),e.jsx(g,{currentPage:1,totalPages:10,type:"card-button-group",alignment:"left",breakpoint:"desktop"})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",color:"#666"},children:"Center Aligned"}),e.jsx(g,{currentPage:1,totalPages:10,type:"card-button-group",alignment:"center",breakpoint:"desktop"})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",color:"#666"},children:"Right Aligned"}),e.jsx(g,{currentPage:1,totalPages:10,type:"card-button-group",alignment:"right",breakpoint:"desktop"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px",fontWeight:"600"},children:"Mobile Versions"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"375px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",color:"#666"},children:"Page Default Mobile"}),e.jsx(g,{currentPage:1,totalPages:10,type:"page-default",breakpoint:"mobile",showPageNumbers:!1,showPageInfo:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",color:"#666"},children:"Card Minimal Mobile"}),e.jsx(g,{currentPage:1,totalPages:10,type:"card-minimal",breakpoint:"mobile",showPageNumbers:!1,showPageInfo:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",color:"#666"},children:"Card Default Mobile"}),e.jsx(g,{currentPage:1,totalPages:10,type:"card-default",breakpoint:"mobile",showPageNumbers:!1,showPageInfo:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",color:"#666"},children:"Button Group Mobile"}),e.jsx(g,{currentPage:1,totalPages:10,type:"card-button-group",breakpoint:"mobile"})]})]})]})]}),parameters:{docs:{description:{story:"All pagination variants from the Figma design showing different types, shapes, alignments, and responsive behaviors."}},layout:"fullscreen"}},_={render:l,args:{currentPage:5,totalPages:20,type:"page-default",shape:"square",breakpoint:"desktop",alignment:"center",showNavigation:!0,showPageNumbers:!0,showPageInfo:!1,maxPageButtons:7,disabled:!1}},B={render:l,args:{...d.args,type:"card-minimal",showPageNumbers:!1,showPageInfo:!0,labels:{previous:"Anterior",next:"Siguiente",pageInfo:"Página 1 de 10"}}},R={render:a=>{const[n,r]=X.useState(a.currentPage||1),[i,o]=X.useState([]),t=s=>{o(p=>[`${new Date().toLocaleTimeString()}: ${s}`,...p.slice(0,4)])};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"center"},children:[e.jsx(g,{...a,currentPage:n,onPageChange:s=>{r(s),t(`Page changed to ${s}`)},onPrevious:()=>{const s=Math.max(1,n-1);r(s),t(`Previous clicked, now on page ${s}`)},onNext:()=>{const s=Math.min(a.totalPages,n+1);r(s),t(`Next clicked, now on page ${s}`)}}),i.length>0&&e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f8f9fa",borderRadius:"8px",maxWidth:"400px",width:"100%"},children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px"},children:"Event Log:"}),e.jsx("div",{style:{fontSize:"12px",fontFamily:"monospace"},children:i.map((s,p)=>e.jsx("div",{style:{margin:"2px 0"},children:s},p))})]})]})},args:{...d.args,totalPages:10}},E={render:l,args:{currentPage:1,totalPages:5,type:"dots",dotsConfig:{size:"md",color:"primary-light",framed:!0}},parameters:{docs:{description:{story:"Pagination dots for carousel-style navigation with medium size, primary color scheme, and framed background."}}}},H={render:l,args:{currentPage:2,totalPages:4,type:"dots",dotsConfig:{size:"lg",color:"primary-dark",framed:!0}},parameters:{docs:{description:{story:"Large pagination dots with dark primary color scheme and framed background."}}}},O={render:l,args:{currentPage:1,totalPages:6,type:"dots",dotsConfig:{size:"md",color:"gray-light",framed:!1}},parameters:{docs:{description:{story:"Pagination dots without frame background using gray color scheme."}}}},J={render:l,args:{currentPage:2,totalPages:4,type:"lines",dotsConfig:{size:"md",color:"primary-light",framed:!0}},parameters:{docs:{description:{story:"Line-style pagination indicators with equal width segments."}}}},K={render:l,args:{currentPage:1,totalPages:3,type:"lines",dotsConfig:{size:"lg",color:"gray-dark",framed:!1}},parameters:{docs:{description:{story:"Large line-style pagination with gray dark color scheme and no frame."}}}},Q={render:()=>{const[a,n]=X.useState({}),r=(o,t)=>{n(s=>({...s,[o]:t}))},i=[{name:"MD Dots - Primary Light (Framed)",type:"dots",config:{size:"md",color:"primary-light",framed:!0}},{name:"MD Dots - Primary Dark (Framed)",type:"dots",config:{size:"md",color:"primary-dark",framed:!0}},{name:"MD Lines - Primary Light (Framed)",type:"lines",config:{size:"md",color:"primary-light",framed:!0}},{name:"MD Lines - Primary Dark (Framed)",type:"lines",config:{size:"md",color:"primary-dark",framed:!0}},{name:"MD Dots - Primary Light (Unframed)",type:"dots",config:{size:"md",color:"primary-light",framed:!1}},{name:"MD Dots - Primary Dark (Unframed)",type:"dots",config:{size:"md",color:"primary-dark",framed:!1}},{name:"MD Lines - Primary Light (Unframed)",type:"lines",config:{size:"md",color:"primary-light",framed:!1}},{name:"MD Lines - Primary Dark (Unframed)",type:"lines",config:{size:"md",color:"primary-dark",framed:!1}},{name:"LG Dots - Primary Light (Framed)",type:"dots",config:{size:"lg",color:"primary-light",framed:!0}},{name:"LG Dots - Primary Dark (Framed)",type:"dots",config:{size:"lg",color:"primary-dark",framed:!0}},{name:"LG Lines - Primary Light (Framed)",type:"lines",config:{size:"lg",color:"primary-light",framed:!0}},{name:"LG Lines - Primary Dark (Framed)",type:"lines",config:{size:"lg",color:"primary-dark",framed:!0}},{name:"LG Dots - Primary Light (Unframed)",type:"dots",config:{size:"lg",color:"primary-light",framed:!1}},{name:"LG Dots - Primary Dark (Unframed)",type:"dots",config:{size:"lg",color:"primary-dark",framed:!1}},{name:"LG Lines - Primary Light (Unframed)",type:"lines",config:{size:"lg",color:"primary-light",framed:!1}},{name:"LG Lines - Primary Dark (Unframed)",type:"lines",config:{size:"lg",color:"primary-dark",framed:!1}},{name:"MD Dots - Gray Dark (Framed)",type:"dots",config:{size:"md",color:"gray-dark",framed:!0}},{name:"MD Lines - Gray Dark (Framed)",type:"lines",config:{size:"md",color:"gray-dark",framed:!0}},{name:"MD Dots - Gray Dark (Unframed)",type:"dots",config:{size:"md",color:"gray-dark",framed:!1}},{name:"MD Lines - Gray Dark (Unframed)",type:"lines",config:{size:"md",color:"gray-dark",framed:!1}},{name:"LG Dots - Gray Dark (Framed)",type:"dots",config:{size:"lg",color:"gray-dark",framed:!0}},{name:"LG Lines - Gray Dark (Framed)",type:"lines",config:{size:"lg",color:"gray-dark",framed:!0}},{name:"LG Dots - Gray Dark (Unframed)",type:"dots",config:{size:"lg",color:"gray-dark",framed:!1}},{name:"LG Lines - Gray Dark (Unframed)",type:"lines",config:{size:"lg",color:"gray-dark",framed:!1}},{name:"MD Dots - Gray Light (Framed)",type:"dots",config:{size:"md",color:"gray-light",framed:!0}},{name:"MD Lines - Gray Light (Framed)",type:"lines",config:{size:"md",color:"gray-light",framed:!0}},{name:"MD Dots - Gray Light (Unframed)",type:"dots",config:{size:"md",color:"gray-light",framed:!1}},{name:"MD Lines - Gray Light (Unframed)",type:"lines",config:{size:"md",color:"gray-light",framed:!1}},{name:"LG Dots - Gray Light (Framed)",type:"dots",config:{size:"lg",color:"gray-light",framed:!0}},{name:"LG Lines - Gray Light (Framed)",type:"lines",config:{size:"lg",color:"gray-light",framed:!0}},{name:"LG Dots - Gray Light (Unframed)",type:"dots",config:{size:"lg",color:"gray-light",framed:!1}},{name:"LG Lines - Gray Light (Unframed)",type:"lines",config:{size:"lg",color:"gray-light",framed:!1}}];return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"48px",padding:"20px"},children:i.map((o,t)=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"12px"},children:[e.jsx("h4",{style:{margin:"0",fontSize:"14px",fontWeight:"600",textAlign:"center"},children:o.name}),e.jsx(g,{currentPage:a[o.name]||1,totalPages:3,type:o.type,dotsConfig:o.config,onPageChange:s=>r(o.name,s)})]},t))})},parameters:{docs:{description:{story:"Comprehensive showcase of all pagination dots and lines variants matching the Figma design specifications."}}}};var te,se,oe;d.parameters={...d.parameters,docs:{...(te=d.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: InteractivePagination,
  args: {
    currentPage: 1,
    totalPages: 10,
    type: 'page-default',
    shape: 'square',
    breakpoint: 'desktop',
    alignment: 'center',
    showNavigation: true,
    showPageNumbers: true,
    showPageInfo: false,
    maxPageButtons: 7,
    disabled: false
  }
}`,...(oe=(se=d.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,le,de;z.parameters={...z.parameters,docs:{...(ie=z.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: InteractivePagination,
  args: {
    ...Default.args,
    type: 'page-minimal',
    showPageNumbers: false,
    showPageInfo: true
  }
}`,...(de=(le=z.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ge,ce,me;j.parameters={...j.parameters,docs:{...(ge=j.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: InteractivePagination,
  args: {
    ...Default.args,
    type: 'card-default'
  }
}`,...(me=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var pe,ue,fe;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: InteractivePagination,
  args: {
    ...Default.args,
    type: 'card-minimal',
    showPageNumbers: false,
    showPageInfo: true
  }
}`,...(fe=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:fe.source}}};var he,ye,Pe;C.parameters={...C.parameters,docs:{...(he=C.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: InteractivePagination,
  args: {
    ...Default.args,
    type: 'card-button-group',
    showNavigation: true,
    showPageNumbers: true
  }
}`,...(Pe=(ye=C.parameters)==null?void 0:ye.docs)==null?void 0:Pe.source}}};var xe,ve,be;M.parameters={...M.parameters,docs:{...(xe=M.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: InteractivePagination,
  args: {
    ...Default.args,
    shape: 'circle'
  }
}`,...(be=(ve=M.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var ke,De,we;G.parameters={...G.parameters,docs:{...(ke=G.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: InteractivePagination,
  args: {
    ...Default.args,
    breakpoint: 'mobile',
    showPageNumbers: false,
    showPageInfo: true
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(we=(De=G.parameters)==null?void 0:De.docs)==null?void 0:we.source}}};var Le,ze,je;N.parameters={...N.parameters,docs:{...(Le=N.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: InteractivePagination,
  args: {
    ...Default.args,
    type: 'card-minimal',
    breakpoint: 'mobile',
    showPageNumbers: false,
    showPageInfo: true
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(je=(ze=N.parameters)==null?void 0:ze.docs)==null?void 0:je.source}}};var Se,Ce,Me;I.parameters={...I.parameters,docs:{...(Se=I.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: InteractivePagination,
  args: {
    ...Default.args,
    type: 'card-button-group',
    breakpoint: 'mobile'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(Me=(Ce=I.parameters)==null?void 0:Ce.docs)==null?void 0:Me.source}}};var Ge,Ne,Ie;q.parameters={...q.parameters,docs:{...(Ge=q.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: InteractivePagination,
  args: {
    ...Default.args,
    type: 'card-minimal',
    alignment: 'left',
    showPageNumbers: false,
    showPageInfo: true
  }
}`,...(Ie=(Ne=q.parameters)==null?void 0:Ne.docs)==null?void 0:Ie.source}}};var qe,Fe,Ae;F.parameters={...F.parameters,docs:{...(qe=F.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: InteractivePagination,
  args: {
    ...Default.args,
    type: 'card-minimal',
    alignment: 'right',
    showPageNumbers: false,
    showPageInfo: true
  }
}`,...(Ae=(Fe=F.parameters)==null?void 0:Fe.docs)==null?void 0:Ae.source}}};var Ue,Te,$e;A.parameters={...A.parameters,docs:{...(Ue=A.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: InteractivePagination,
  args: {
    ...Default.args,
    totalPages: 1
  }
}`,...($e=(Te=A.parameters)==null?void 0:Te.docs)==null?void 0:$e.source}}};var Ve,We,_e;U.parameters={...U.parameters,docs:{...(Ve=U.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: InteractivePagination,
  args: {
    ...Default.args,
    totalPages: 2
  }
}`,...(_e=(We=U.parameters)==null?void 0:We.docs)==null?void 0:_e.source}}};var Be,Re,Ee;T.parameters={...T.parameters,docs:{...(Be=T.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: InteractivePagination,
  args: {
    ...Default.args,
    currentPage: 15,
    totalPages: 50,
    maxPageButtons: 7
  }
}`,...(Ee=(Re=T.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source}}};var He,Oe,Je;$.parameters={...$.parameters,docs:{...(He=$.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: InteractivePagination,
  args: {
    ...Default.args,
    currentPage: 10,
    totalPages: 10
  }
}`,...(Je=(Oe=$.parameters)==null?void 0:Oe.docs)==null?void 0:Je.source}}};var Ke,Qe,Xe;V.parameters={...V.parameters,docs:{...(Ke=V.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(Xe=(Qe=V.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ye,Ze,ea;W.parameters={...W.parameters,docs:{...(Ye=W.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '48px',
    padding: '32px',
    maxWidth: '1200px'
  }}>
      {/* Page Default Desktop */}
      <div>
        <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '16px',
        fontWeight: '600'
      }}>Page Default - Desktop</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <div>
            <h4 style={{
            margin: '0 0 8px 0',
            fontSize: '14px',
            color: '#666'
          }}>Square Shape</h4>
            <Pagination currentPage={1} totalPages={10} type="page-default" shape="square" breakpoint="desktop" />
          </div>
          <div>
            <h4 style={{
            margin: '0 0 8px 0',
            fontSize: '14px',
            color: '#666'
          }}>Circle Shape</h4>
            <Pagination currentPage={1} totalPages={10} type="page-default" shape="circle" breakpoint="desktop" />
          </div>
        </div>
      </div>

      {/* Page Minimal Desktop */}
      <div>
        <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '16px',
        fontWeight: '600'
      }}>Page Minimal - Desktop</h3>
        <Pagination currentPage={1} totalPages={10} type="page-minimal" shape="square" breakpoint="desktop" showPageNumbers={false} showPageInfo={true} />
      </div>

      {/* Card Default Desktop */}
      <div>
        <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '16px',
        fontWeight: '600'
      }}>Card Default - Desktop</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <div>
            <h4 style={{
            margin: '0 0 8px 0',
            fontSize: '14px',
            color: '#666'
          }}>Square Shape</h4>
            <Pagination currentPage={1} totalPages={10} type="card-default" shape="square" breakpoint="desktop" />
          </div>
          <div>
            <h4 style={{
            margin: '0 0 8px 0',
            fontSize: '14px',
            color: '#666'
          }}>Circle Shape</h4>
            <Pagination currentPage={1} totalPages={10} type="card-default" shape="circle" breakpoint="desktop" />
          </div>
        </div>
      </div>

      {/* Card Minimal Desktop */}
      <div>
        <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '16px',
        fontWeight: '600'
      }}>Card Minimal - Desktop</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <div>
            <h4 style={{
            margin: '0 0 8px 0',
            fontSize: '14px',
            color: '#666'
          }}>Left Aligned</h4>
            <Pagination currentPage={1} totalPages={10} type="card-minimal" alignment="left" breakpoint="desktop" showPageNumbers={false} showPageInfo={true} />
          </div>
          <div>
            <h4 style={{
            margin: '0 0 8px 0',
            fontSize: '14px',
            color: '#666'
          }}>Center Aligned</h4>
            <Pagination currentPage={1} totalPages={10} type="card-minimal" alignment="center" breakpoint="desktop" showPageNumbers={false} showPageInfo={true} />
          </div>
          <div>
            <h4 style={{
            margin: '0 0 8px 0',
            fontSize: '14px',
            color: '#666'
          }}>Right Aligned</h4>
            <Pagination currentPage={1} totalPages={10} type="card-minimal" alignment="right" breakpoint="desktop" showPageNumbers={false} showPageInfo={true} />
          </div>
        </div>
      </div>

      {/* Card Button Group Desktop */}
      <div>
        <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '16px',
        fontWeight: '600'
      }}>Card Button Group - Desktop</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <div>
            <h4 style={{
            margin: '0 0 8px 0',
            fontSize: '14px',
            color: '#666'
          }}>Left Aligned</h4>
            <Pagination currentPage={1} totalPages={10} type="card-button-group" alignment="left" breakpoint="desktop" />
          </div>
          <div>
            <h4 style={{
            margin: '0 0 8px 0',
            fontSize: '14px',
            color: '#666'
          }}>Center Aligned</h4>
            <Pagination currentPage={1} totalPages={10} type="card-button-group" alignment="center" breakpoint="desktop" />
          </div>
          <div>
            <h4 style={{
            margin: '0 0 8px 0',
            fontSize: '14px',
            color: '#666'
          }}>Right Aligned</h4>
            <Pagination currentPage={1} totalPages={10} type="card-button-group" alignment="right" breakpoint="desktop" />
          </div>
        </div>
      </div>

      {/* Mobile Versions */}
      <div>
        <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '16px',
        fontWeight: '600'
      }}>Mobile Versions</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        maxWidth: '375px'
      }}>
          <div>
            <h4 style={{
            margin: '0 0 8px 0',
            fontSize: '14px',
            color: '#666'
          }}>Page Default Mobile</h4>
            <Pagination currentPage={1} totalPages={10} type="page-default" breakpoint="mobile" showPageNumbers={false} showPageInfo={true} />
          </div>
          <div>
            <h4 style={{
            margin: '0 0 8px 0',
            fontSize: '14px',
            color: '#666'
          }}>Card Minimal Mobile</h4>
            <Pagination currentPage={1} totalPages={10} type="card-minimal" breakpoint="mobile" showPageNumbers={false} showPageInfo={true} />
          </div>
          <div>
            <h4 style={{
            margin: '0 0 8px 0',
            fontSize: '14px',
            color: '#666'
          }}>Card Default Mobile</h4>
            <Pagination currentPage={1} totalPages={10} type="card-default" breakpoint="mobile" showPageNumbers={false} showPageInfo={true} />
          </div>
          <div>
            <h4 style={{
            margin: '0 0 8px 0',
            fontSize: '14px',
            color: '#666'
          }}>Button Group Mobile</h4>
            <Pagination currentPage={1} totalPages={10} type="card-button-group" breakpoint="mobile" />
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All pagination variants from the Figma design showing different types, shapes, alignments, and responsive behaviors.'
      }
    },
    layout: 'fullscreen'
  }
}`,...(ea=(Ze=W.parameters)==null?void 0:Ze.docs)==null?void 0:ea.source}}};var aa,na,ra;_.parameters={..._.parameters,docs:{...(aa=_.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  render: InteractivePagination,
  args: {
    currentPage: 5,
    totalPages: 20,
    type: 'page-default',
    shape: 'square',
    breakpoint: 'desktop',
    alignment: 'center',
    showNavigation: true,
    showPageNumbers: true,
    showPageInfo: false,
    maxPageButtons: 7,
    disabled: false
  }
}`,...(ra=(na=_.parameters)==null?void 0:na.docs)==null?void 0:ra.source}}};var ta,sa,oa;B.parameters={...B.parameters,docs:{...(ta=B.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  render: InteractivePagination,
  args: {
    ...Default.args,
    type: 'card-minimal',
    showPageNumbers: false,
    showPageInfo: true,
    labels: {
      previous: 'Anterior',
      next: 'Siguiente',
      pageInfo: 'Página 1 de 10'
    }
  }
}`,...(oa=(sa=B.parameters)==null?void 0:sa.docs)==null?void 0:oa.source}}};var ia,la,da;R.parameters={...R.parameters,docs:{...(ia=R.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
    const [logs, setLogs] = useState<string[]>([]);
    const addLog = (message: string) => {
      setLogs(prev => [\`\${new Date().toLocaleTimeString()}: \${message}\`, ...prev.slice(0, 4)]);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      alignItems: 'center'
    }}>
        <Pagination {...args} currentPage={currentPage} onPageChange={page => {
        setCurrentPage(page);
        addLog(\`Page changed to \${page}\`);
      }} onPrevious={() => {
        const newPage = Math.max(1, currentPage - 1);
        setCurrentPage(newPage);
        addLog(\`Previous clicked, now on page \${newPage}\`);
      }} onNext={() => {
        const newPage = Math.min(args.totalPages, currentPage + 1);
        setCurrentPage(newPage);
        addLog(\`Next clicked, now on page \${newPage}\`);
      }} />
        
        {logs.length > 0 && <div style={{
        padding: '16px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        maxWidth: '400px',
        width: '100%'
      }}>
            <h4 style={{
          margin: '0 0 8px 0',
          fontSize: '14px'
        }}>Event Log:</h4>
            <div style={{
          fontSize: '12px',
          fontFamily: 'monospace'
        }}>
              {logs.map((log, index) => <div key={index} style={{
            margin: '2px 0'
          }}>{log}</div>)}
            </div>
          </div>}
      </div>;
  },
  args: {
    ...Default.args,
    totalPages: 10
  }
}`,...(da=(la=R.parameters)==null?void 0:la.docs)==null?void 0:da.source}}};var ga,ca,ma;E.parameters={...E.parameters,docs:{...(ga=E.parameters)==null?void 0:ga.docs,source:{originalSource:`{
  render: InteractivePagination,
  args: {
    currentPage: 1,
    totalPages: 5,
    type: 'dots',
    dotsConfig: {
      size: 'md',
      color: 'primary-light',
      framed: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination dots for carousel-style navigation with medium size, primary color scheme, and framed background.'
      }
    }
  }
}`,...(ma=(ca=E.parameters)==null?void 0:ca.docs)==null?void 0:ma.source}}};var pa,ua,fa;H.parameters={...H.parameters,docs:{...(pa=H.parameters)==null?void 0:pa.docs,source:{originalSource:`{
  render: InteractivePagination,
  args: {
    currentPage: 2,
    totalPages: 4,
    type: 'dots',
    dotsConfig: {
      size: 'lg',
      color: 'primary-dark',
      framed: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Large pagination dots with dark primary color scheme and framed background.'
      }
    }
  }
}`,...(fa=(ua=H.parameters)==null?void 0:ua.docs)==null?void 0:fa.source}}};var ha,ya,Pa;O.parameters={...O.parameters,docs:{...(ha=O.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  render: InteractivePagination,
  args: {
    currentPage: 1,
    totalPages: 6,
    type: 'dots',
    dotsConfig: {
      size: 'md',
      color: 'gray-light',
      framed: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination dots without frame background using gray color scheme.'
      }
    }
  }
}`,...(Pa=(ya=O.parameters)==null?void 0:ya.docs)==null?void 0:Pa.source}}};var xa,va,ba;J.parameters={...J.parameters,docs:{...(xa=J.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  render: InteractivePagination,
  args: {
    currentPage: 2,
    totalPages: 4,
    type: 'lines',
    dotsConfig: {
      size: 'md',
      color: 'primary-light',
      framed: true
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Line-style pagination indicators with equal width segments.'
      }
    }
  }
}`,...(ba=(va=J.parameters)==null?void 0:va.docs)==null?void 0:ba.source}}};var ka,Da,wa;K.parameters={...K.parameters,docs:{...(ka=K.parameters)==null?void 0:ka.docs,source:{originalSource:`{
  render: InteractivePagination,
  args: {
    currentPage: 1,
    totalPages: 3,
    type: 'lines',
    dotsConfig: {
      size: 'lg',
      color: 'gray-dark',
      framed: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Large line-style pagination with gray dark color scheme and no frame.'
      }
    }
  }
}`,...(wa=(Da=K.parameters)==null?void 0:Da.docs)==null?void 0:wa.source}}};var La,za,ja;Q.parameters={...Q.parameters,docs:{...(La=Q.parameters)==null?void 0:La.docs,source:{originalSource:`{
  render: () => {
    const [activePage, setActivePage] = useState<{
      [key: string]: number;
    }>({});
    const handlePageChange = (variant: string, page: number) => {
      setActivePage(prev => ({
        ...prev,
        [variant]: page
      }));
    };
    const variants = [{
      name: 'MD Dots - Primary Light (Framed)',
      type: 'dots' as const,
      config: {
        size: 'md' as const,
        color: 'primary-light' as const,
        framed: true
      }
    }, {
      name: 'MD Dots - Primary Dark (Framed)',
      type: 'dots' as const,
      config: {
        size: 'md' as const,
        color: 'primary-dark' as const,
        framed: true
      }
    }, {
      name: 'MD Lines - Primary Light (Framed)',
      type: 'lines' as const,
      config: {
        size: 'md' as const,
        color: 'primary-light' as const,
        framed: true
      }
    }, {
      name: 'MD Lines - Primary Dark (Framed)',
      type: 'lines' as const,
      config: {
        size: 'md' as const,
        color: 'primary-dark' as const,
        framed: true
      }
    }, {
      name: 'MD Dots - Primary Light (Unframed)',
      type: 'dots' as const,
      config: {
        size: 'md' as const,
        color: 'primary-light' as const,
        framed: false
      }
    }, {
      name: 'MD Dots - Primary Dark (Unframed)',
      type: 'dots' as const,
      config: {
        size: 'md' as const,
        color: 'primary-dark' as const,
        framed: false
      }
    }, {
      name: 'MD Lines - Primary Light (Unframed)',
      type: 'lines' as const,
      config: {
        size: 'md' as const,
        color: 'primary-light' as const,
        framed: false
      }
    }, {
      name: 'MD Lines - Primary Dark (Unframed)',
      type: 'lines' as const,
      config: {
        size: 'md' as const,
        color: 'primary-dark' as const,
        framed: false
      }
    }, {
      name: 'LG Dots - Primary Light (Framed)',
      type: 'dots' as const,
      config: {
        size: 'lg' as const,
        color: 'primary-light' as const,
        framed: true
      }
    }, {
      name: 'LG Dots - Primary Dark (Framed)',
      type: 'dots' as const,
      config: {
        size: 'lg' as const,
        color: 'primary-dark' as const,
        framed: true
      }
    }, {
      name: 'LG Lines - Primary Light (Framed)',
      type: 'lines' as const,
      config: {
        size: 'lg' as const,
        color: 'primary-light' as const,
        framed: true
      }
    }, {
      name: 'LG Lines - Primary Dark (Framed)',
      type: 'lines' as const,
      config: {
        size: 'lg' as const,
        color: 'primary-dark' as const,
        framed: true
      }
    }, {
      name: 'LG Dots - Primary Light (Unframed)',
      type: 'dots' as const,
      config: {
        size: 'lg' as const,
        color: 'primary-light' as const,
        framed: false
      }
    }, {
      name: 'LG Dots - Primary Dark (Unframed)',
      type: 'dots' as const,
      config: {
        size: 'lg' as const,
        color: 'primary-dark' as const,
        framed: false
      }
    }, {
      name: 'LG Lines - Primary Light (Unframed)',
      type: 'lines' as const,
      config: {
        size: 'lg' as const,
        color: 'primary-light' as const,
        framed: false
      }
    }, {
      name: 'LG Lines - Primary Dark (Unframed)',
      type: 'lines' as const,
      config: {
        size: 'lg' as const,
        color: 'primary-dark' as const,
        framed: false
      }
    }, {
      name: 'MD Dots - Gray Dark (Framed)',
      type: 'dots' as const,
      config: {
        size: 'md' as const,
        color: 'gray-dark' as const,
        framed: true
      }
    }, {
      name: 'MD Lines - Gray Dark (Framed)',
      type: 'lines' as const,
      config: {
        size: 'md' as const,
        color: 'gray-dark' as const,
        framed: true
      }
    }, {
      name: 'MD Dots - Gray Dark (Unframed)',
      type: 'dots' as const,
      config: {
        size: 'md' as const,
        color: 'gray-dark' as const,
        framed: false
      }
    }, {
      name: 'MD Lines - Gray Dark (Unframed)',
      type: 'lines' as const,
      config: {
        size: 'md' as const,
        color: 'gray-dark' as const,
        framed: false
      }
    }, {
      name: 'LG Dots - Gray Dark (Framed)',
      type: 'dots' as const,
      config: {
        size: 'lg' as const,
        color: 'gray-dark' as const,
        framed: true
      }
    }, {
      name: 'LG Lines - Gray Dark (Framed)',
      type: 'lines' as const,
      config: {
        size: 'lg' as const,
        color: 'gray-dark' as const,
        framed: true
      }
    }, {
      name: 'LG Dots - Gray Dark (Unframed)',
      type: 'dots' as const,
      config: {
        size: 'lg' as const,
        color: 'gray-dark' as const,
        framed: false
      }
    }, {
      name: 'LG Lines - Gray Dark (Unframed)',
      type: 'lines' as const,
      config: {
        size: 'lg' as const,
        color: 'gray-dark' as const,
        framed: false
      }
    }, {
      name: 'MD Dots - Gray Light (Framed)',
      type: 'dots' as const,
      config: {
        size: 'md' as const,
        color: 'gray-light' as const,
        framed: true
      }
    }, {
      name: 'MD Lines - Gray Light (Framed)',
      type: 'lines' as const,
      config: {
        size: 'md' as const,
        color: 'gray-light' as const,
        framed: true
      }
    }, {
      name: 'MD Dots - Gray Light (Unframed)',
      type: 'dots' as const,
      config: {
        size: 'md' as const,
        color: 'gray-light' as const,
        framed: false
      }
    }, {
      name: 'MD Lines - Gray Light (Unframed)',
      type: 'lines' as const,
      config: {
        size: 'md' as const,
        color: 'gray-light' as const,
        framed: false
      }
    }, {
      name: 'LG Dots - Gray Light (Framed)',
      type: 'dots' as const,
      config: {
        size: 'lg' as const,
        color: 'gray-light' as const,
        framed: true
      }
    }, {
      name: 'LG Lines - Gray Light (Framed)',
      type: 'lines' as const,
      config: {
        size: 'lg' as const,
        color: 'gray-light' as const,
        framed: true
      }
    }, {
      name: 'LG Dots - Gray Light (Unframed)',
      type: 'dots' as const,
      config: {
        size: 'lg' as const,
        color: 'gray-light' as const,
        framed: false
      }
    }, {
      name: 'LG Lines - Gray Light (Unframed)',
      type: 'lines' as const,
      config: {
        size: 'lg' as const,
        color: 'gray-light' as const,
        framed: false
      }
    }];
    return <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '48px',
      padding: '20px'
    }}>
        {variants.map((variant, index) => <div key={index} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px'
      }}>
            <h4 style={{
          margin: '0',
          fontSize: '14px',
          fontWeight: '600',
          textAlign: 'center'
        }}>
              {variant.name}
            </h4>
            <Pagination currentPage={activePage[variant.name] || 1} totalPages={3} type={variant.type} dotsConfig={variant.config} onPageChange={page => handlePageChange(variant.name, page)} />
          </div>)}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all pagination dots and lines variants matching the Figma design specifications.'
      }
    }
  }
}`,...(ja=(za=Q.parameters)==null?void 0:za.docs)==null?void 0:ja.source}}};const Va=["Default","PageMinimal","CardDefault","CardMinimal","CardButtonGroup","CircleShape","MobileDefault","MobileCardMinimal","MobileButtonGroup","LeftAligned","RightAligned","SinglePage","TwoPages","ManyPages","CurrentPageAtEnd","DisabledState","FigmaVariants","Playground","CustomLabels","WithEventHandlers","PaginationDots","PaginationDotsLarge","PaginationDotsUnframed","PaginationLines","PaginationLinesLarge","AllDotsVariants"];export{Q as AllDotsVariants,C as CardButtonGroup,j as CardDefault,S as CardMinimal,M as CircleShape,$ as CurrentPageAtEnd,B as CustomLabels,d as Default,V as DisabledState,W as FigmaVariants,q as LeftAligned,T as ManyPages,I as MobileButtonGroup,N as MobileCardMinimal,G as MobileDefault,z as PageMinimal,E as PaginationDots,H as PaginationDotsLarge,O as PaginationDotsUnframed,J as PaginationLines,K as PaginationLinesLarge,_ as Playground,F as RightAligned,A as SinglePage,U as TwoPages,R as WithEventHandlers,Va as __namedExportsOrder,$a as default};
