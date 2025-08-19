import{j as o}from"./jsx-runtime-DiklIkkE.js";import{r as v}from"./index-DRjF_FHU.js";import{R as Ir}from"./index-DHHUZ-3A.js";function R(e){return Object.keys(e)}function Re(e){return e&&typeof e=="object"&&!Array.isArray(e)}function Ve(e,t){const r={...e},n=t;return Re(e)&&Re(t)&&Object.keys(t).forEach(s=>{Re(n[s])&&s in e?r[s]=Ve(r[s],n[s]):r[s]=n[s]}),r}function Vr(e){return e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}function Hr(e){var t;return typeof e!="string"||!e.includes("var(--mantine-scale)")?e:(t=e.match(/^calc\((.*?)\)$/))==null?void 0:t[1].split("*")[0].trim()}function de(e){const t=Hr(e);return typeof t=="number"?t:typeof t=="string"?t.includes("calc")||t.includes("var")?t:t.includes("px")?Number(t.replace("px","")):t.includes("rem")?Number(t.replace("rem",""))*16:t.includes("em")?Number(t.replace("em",""))*16:Number(t):NaN}function nt(e){return e==="0rem"?"0rem":`calc(${e} * var(--mantine-scale))`}function _t(e,{shouldScale:t=!1}={}){function r(n){if(n===0||n==="0")return`0${e}`;if(typeof n=="number"){const s=`${n/16}${e}`;return t?nt(s):s}if(typeof n=="string"){if(n===""||n.startsWith("calc(")||n.startsWith("clamp(")||n.includes("rgba("))return n;if(n.includes(","))return n.split(",").map(i=>r(i)).join(",");if(n.includes(" "))return n.split(" ").map(i=>r(i)).join(" ");const s=n.replace("px","");if(!Number.isNaN(Number(s))){const i=`${Number(s)/16}${e}`;return t?nt(i):i}}return n}return r}const m=_t("rem",{shouldScale:!0}),ot=_t("em");function q(e){return Object.keys(e).reduce((t,r)=>(e[r]!==void 0&&(t[r]=e[r]),t),{})}function Ft(e){if(typeof e=="number")return!0;if(typeof e=="string"){if(e.startsWith("calc(")||e.startsWith("var(")||e.includes(" ")&&e.trim()!=="")return!0;const t=/^[+-]?[0-9]+(\.[0-9]+)?(px|em|rem|ex|ch|lh|rlh|vw|vh|vmin|vmax|vb|vi|svw|svh|lvw|lvh|dvw|dvh|cm|mm|in|pt|pc|q|cqw|cqh|cqi|cqb|cqmin|cqmax|%)?$/;return e.trim().split(/\s+/).every(n=>t.test(n))}return!1}function Pt(e){const t=v.createContext(null);return[({children:s,value:i})=>o.jsx(t.Provider,{value:i,children:s}),()=>{const s=v.useContext(t);if(s===null)throw new Error(e);return s}]}function F(e,t="size",r=!0){if(e!==void 0)return Ft(e)?r?m(e):e:`var(--${t}-${e})`}function _(e){return F(e,"mantine-spacing")}function je(e){return e===void 0?"var(--mantine-radius-default)":F(e,"mantine-radius")}function le(e){return F(e,"mantine-font-size")}function Or(e){return F(e,"mantine-line-height",!1)}function Wr(e){if(e)return F(e,"mantine-shadow",!1)}function Dr(e,t){return e in t?de(t[e]):de(e)}function He(e,t){const r=e.map(n=>({value:n,px:Dr(n,t)}));return r.sort((n,s)=>n.px-s.px),r}function V(e){return typeof e=="object"&&e!==null?"base"in e?e.base:void 0:e}function Yr(e,t){try{return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}catch{return e.addListener(t),()=>e.removeListener(t)}}function Ur(e,t){return typeof window<"u"&&"matchMedia"in window?window.matchMedia(e).matches:!1}function Xr(e,t,{getInitialValueInEffect:r}={getInitialValueInEffect:!0}){const[n,s]=v.useState(r?t:Ur(e)),i=v.useRef(null);return v.useEffect(()=>{if("matchMedia"in window)return i.current=window.matchMedia(e),s(i.current.matches),Yr(i.current,a=>s(a.matches))},[e]),n||!1}const Et=typeof document<"u"?v.useLayoutEffect:v.useEffect;function qr(e,t){const r=v.useRef(!1);v.useEffect(()=>()=>{r.current=!1},[]),v.useEffect(()=>{if(r.current)return e();r.current=!0},t)}function Qr(e,t){return Xr("(prefers-reduced-motion: reduce)",e,t)}function Lt(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=Lt(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Q(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=Lt(e))&&(n&&(n+=" "),n+=t);return n}const Kr={};function Zr(e){const t={};return e.forEach(r=>{Object.entries(r).forEach(([n,s])=>{t[n]?t[n]=Q(t[n],s):t[n]=s})}),t}function Oe({theme:e,classNames:t,props:r,stylesCtx:n}){const i=(Array.isArray(t)?t:[t]).map(a=>typeof a=="function"?a(e,r,n):a||Kr);return Zr(i)}function Fe({theme:e,styles:t,props:r,stylesCtx:n}){return(Array.isArray(t)?t:[t]).reduce((i,a)=>typeof a=="function"?{...i,...a(e,r,n)}:{...i,...a},{})}const It=v.createContext(null);function K(){const e=v.useContext(It);if(!e)throw new Error("[@mantine/core] MantineProvider was not found in tree");return e}function Jr(){return K().cssVariablesResolver}function en(){return K().classNamesPrefix}function We(){return K().getStyleNonce}function tn(){return K().withStaticClasses}function rn(){return K().headless}function nn(){var e;return(e=K().stylesTransform)==null?void 0:e.sx}function on(){var e;return(e=K().stylesTransform)==null?void 0:e.styles}function sn(){return K().env||"default"}function an(e){return/^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(e)}function dn(e){let t=e.replace("#","");if(t.length===3){const a=t.split("");t=[a[0],a[0],a[1],a[1],a[2],a[2]].join("")}if(t.length===8){const a=parseInt(t.slice(6,8),16)/255;return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16),a}}const r=parseInt(t,16),n=r>>16&255,s=r>>8&255,i=r&255;return{r:n,g:s,b:i,a:1}}function ln(e){const[t,r,n,s]=e.replace(/[^0-9,./]/g,"").split(/[/,]/).map(Number);return{r:t,g:r,b:n,a:s===void 0?1:s}}function cn(e){const t=/^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i,r=e.match(t);if(!r)return{r:0,g:0,b:0,a:1};const n=parseInt(r[1],10),s=parseInt(r[2],10)/100,i=parseInt(r[3],10)/100,a=r[5]?parseFloat(r[5]):void 0,d=(1-Math.abs(2*i-1))*s,l=n/60,f=d*(1-Math.abs(l%2-1)),u=i-d/2;let c,p,x;return l>=0&&l<1?(c=d,p=f,x=0):l>=1&&l<2?(c=f,p=d,x=0):l>=2&&l<3?(c=0,p=d,x=f):l>=3&&l<4?(c=0,p=f,x=d):l>=4&&l<5?(c=f,p=0,x=d):(c=d,p=0,x=f),{r:Math.round((c+u)*255),g:Math.round((p+u)*255),b:Math.round((x+u)*255),a:a||1}}function De(e){return an(e)?dn(e):e.startsWith("rgb")?ln(e):e.startsWith("hsl")?cn(e):{r:0,g:0,b:0,a:1}}function fe(e,t){if(e.startsWith("var("))return`color-mix(in srgb, ${e}, black ${t*100}%)`;const{r,g:n,b:s,a:i}=De(e),a=1-t,d=l=>Math.round(l*a);return`rgba(${d(r)}, ${d(n)}, ${d(s)}, ${i})`}function ce(e,t){return typeof e.primaryShade=="number"?e.primaryShade:t==="dark"?e.primaryShade.dark:e.primaryShade.light}function Ne(e){return e<=.03928?e/12.92:((e+.055)/1.055)**2.4}function un(e){const t=e.match(/oklch\((.*?)%\s/);return t?parseFloat(t[1]):null}function mn(e){if(e.startsWith("oklch("))return(un(e)||0)/100;const{r:t,g:r,b:n}=De(e),s=t/255,i=r/255,a=n/255,d=Ne(s),l=Ne(i),f=Ne(a);return .2126*d+.7152*l+.0722*f}function ie(e,t=.179){return e.startsWith("var(")?!1:mn(e)>t}function me({color:e,theme:t,colorScheme:r}){if(typeof e!="string")throw new Error(`[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof e}`);if(e==="bright")return{color:e,value:r==="dark"?t.white:t.black,shade:void 0,isThemeColor:!1,isLight:ie(r==="dark"?t.white:t.black,t.luminanceThreshold),variable:"--mantine-color-bright"};if(e==="dimmed")return{color:e,value:r==="dark"?t.colors.dark[2]:t.colors.gray[7],shade:void 0,isThemeColor:!1,isLight:ie(r==="dark"?t.colors.dark[2]:t.colors.gray[6],t.luminanceThreshold),variable:"--mantine-color-dimmed"};if(e==="white"||e==="black")return{color:e,value:e==="white"?t.white:t.black,shade:void 0,isThemeColor:!1,isLight:ie(e==="white"?t.white:t.black,t.luminanceThreshold),variable:`--mantine-color-${e}`};const[n,s]=e.split("."),i=s?Number(s):void 0,a=n in t.colors;if(a){const d=i!==void 0?t.colors[n][i]:t.colors[n][ce(t,r||"light")];return{color:n,value:d,shade:i,isThemeColor:a,isLight:ie(d,t.luminanceThreshold),variable:s?`--mantine-color-${n}-${i}`:`--mantine-color-${n}-filled`}}return{color:e,value:e,isThemeColor:a,isLight:ie(e,t.luminanceThreshold),shade:i,variable:void 0}}function ue(e,t){const r=me({color:e||t.primaryColor,theme:t});return r.variable?`var(${r.variable})`:e}function Pe(e,t){const r={from:(e==null?void 0:e.from)||t.defaultGradient.from,to:(e==null?void 0:e.to)||t.defaultGradient.to,deg:(e==null?void 0:e.deg)??t.defaultGradient.deg??0},n=ue(r.from,t),s=ue(r.to,t);return`linear-gradient(${r.deg}deg, ${n} 0%, ${s} 100%)`}function Y(e,t){if(typeof e!="string"||t>1||t<0)return"rgba(0, 0, 0, 1)";if(e.startsWith("var(")){const i=(1-t)*100;return`color-mix(in srgb, ${e}, transparent ${i}%)`}if(e.startsWith("oklch"))return e.includes("/")?e.replace(/\/\s*[\d.]+\s*\)/,`/ ${t})`):e.replace(")",` / ${t})`);const{r,g:n,b:s}=De(e);return`rgba(${r}, ${n}, ${s}, ${t})`}const J=Y,pn=({color:e,theme:t,variant:r,gradient:n,autoContrast:s})=>{const i=me({color:e,theme:t}),a=typeof s=="boolean"?s:t.autoContrast;if(r==="none")return{background:"transparent",hover:"transparent",color:"inherit",border:"none"};if(r==="filled"){const d=a&&i.isLight?"var(--mantine-color-black)":"var(--mantine-color-white)";return i.isThemeColor?i.shade===void 0?{background:`var(--mantine-color-${e}-filled)`,hover:`var(--mantine-color-${e}-filled-hover)`,color:d,border:`${m(1)} solid transparent`}:{background:`var(--mantine-color-${i.color}-${i.shade})`,hover:`var(--mantine-color-${i.color}-${i.shade===9?8:i.shade+1})`,color:d,border:`${m(1)} solid transparent`}:{background:e,hover:fe(e,.1),color:d,border:`${m(1)} solid transparent`}}if(r==="light"){if(i.isThemeColor){if(i.shade===void 0)return{background:`var(--mantine-color-${e}-light)`,hover:`var(--mantine-color-${e}-light-hover)`,color:`var(--mantine-color-${e}-light-color)`,border:`${m(1)} solid transparent`};const d=t.colors[i.color][i.shade];return{background:Y(d,.1),hover:Y(d,.12),color:`var(--mantine-color-${i.color}-${Math.min(i.shade,6)})`,border:`${m(1)} solid transparent`}}return{background:Y(e,.1),hover:Y(e,.12),color:e,border:`${m(1)} solid transparent`}}if(r==="outline")return i.isThemeColor?i.shade===void 0?{background:"transparent",hover:`var(--mantine-color-${e}-outline-hover)`,color:`var(--mantine-color-${e}-outline)`,border:`${m(1)} solid var(--mantine-color-${e}-outline)`}:{background:"transparent",hover:Y(t.colors[i.color][i.shade],.05),color:`var(--mantine-color-${i.color}-${i.shade})`,border:`${m(1)} solid var(--mantine-color-${i.color}-${i.shade})`}:{background:"transparent",hover:Y(e,.05),color:e,border:`${m(1)} solid ${e}`};if(r==="subtle"){if(i.isThemeColor){if(i.shade===void 0)return{background:"transparent",hover:`var(--mantine-color-${e}-light-hover)`,color:`var(--mantine-color-${e}-light-color)`,border:`${m(1)} solid transparent`};const d=t.colors[i.color][i.shade];return{background:"transparent",hover:Y(d,.12),color:`var(--mantine-color-${i.color}-${Math.min(i.shade,6)})`,border:`${m(1)} solid transparent`}}return{background:"transparent",hover:Y(e,.12),color:e,border:`${m(1)} solid transparent`}}return r==="transparent"?i.isThemeColor?i.shade===void 0?{background:"transparent",hover:"transparent",color:`var(--mantine-color-${e}-light-color)`,border:`${m(1)} solid transparent`}:{background:"transparent",hover:"transparent",color:`var(--mantine-color-${i.color}-${Math.min(i.shade,6)})`,border:`${m(1)} solid transparent`}:{background:"transparent",hover:"transparent",color:e,border:`${m(1)} solid transparent`}:r==="white"?i.isThemeColor?i.shade===void 0?{background:"var(--mantine-color-white)",hover:fe(t.white,.01),color:`var(--mantine-color-${e}-filled)`,border:`${m(1)} solid transparent`}:{background:"var(--mantine-color-white)",hover:fe(t.white,.01),color:`var(--mantine-color-${i.color}-${i.shade})`,border:`${m(1)} solid transparent`}:{background:"var(--mantine-color-white)",hover:fe(t.white,.01),color:e,border:`${m(1)} solid transparent`}:r==="gradient"?{background:Pe(n,t),hover:Pe(n,t),color:"var(--mantine-color-white)",border:"none"}:r==="default"?{background:"var(--mantine-color-default)",hover:"var(--mantine-color-default-hover)",color:"var(--mantine-color-default-color)",border:`${m(1)} solid var(--mantine-color-default-border)`}:{}},fn={dark:["#C9C9C9","#b8b8b8","#828282","#696969","#424242","#3b3b3b","#2e2e2e","#242424","#1f1f1f","#141414"],gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],red:["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],pink:["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],grape:["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],violet:["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],indigo:["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],blue:["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],teal:["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],green:["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],lime:["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],yellow:["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],orange:["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"]},it="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",Ye={scale:1,fontSmoothing:!0,focusRing:"auto",white:"#fff",black:"#000",colors:fn,primaryShade:{light:6,dark:8},primaryColor:"blue",variantColorResolver:pn,autoContrast:!1,luminanceThreshold:.3,fontFamily:it,fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",respectReducedMotion:!1,cursorType:"default",defaultGradient:{from:"blue",to:"cyan",deg:45},defaultRadius:"sm",activeClassName:"mantine-active",focusClassName:"",headings:{fontFamily:it,fontWeight:"700",textWrap:"wrap",sizes:{h1:{fontSize:m(34),lineHeight:"1.3"},h2:{fontSize:m(26),lineHeight:"1.35"},h3:{fontSize:m(22),lineHeight:"1.4"},h4:{fontSize:m(18),lineHeight:"1.45"},h5:{fontSize:m(16),lineHeight:"1.5"},h6:{fontSize:m(14),lineHeight:"1.5"}}},fontSizes:{xs:m(12),sm:m(14),md:m(16),lg:m(18),xl:m(20)},lineHeights:{xs:"1.4",sm:"1.45",md:"1.55",lg:"1.6",xl:"1.65"},radius:{xs:m(2),sm:m(4),md:m(8),lg:m(16),xl:m(32)},spacing:{xs:m(10),sm:m(12),md:m(16),lg:m(20),xl:m(32)},breakpoints:{xs:"36em",sm:"48em",md:"62em",lg:"75em",xl:"88em"},shadows:{xs:`0 ${m(1)} ${m(3)} rgba(0, 0, 0, 0.05), 0 ${m(1)} ${m(2)} rgba(0, 0, 0, 0.1)`,sm:`0 ${m(1)} ${m(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${m(10)} ${m(15)} ${m(-5)}, rgba(0, 0, 0, 0.04) 0 ${m(7)} ${m(7)} ${m(-5)}`,md:`0 ${m(1)} ${m(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${m(20)} ${m(25)} ${m(-5)}, rgba(0, 0, 0, 0.04) 0 ${m(10)} ${m(10)} ${m(-5)}`,lg:`0 ${m(1)} ${m(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${m(28)} ${m(23)} ${m(-7)}, rgba(0, 0, 0, 0.04) 0 ${m(12)} ${m(12)} ${m(-7)}`,xl:`0 ${m(1)} ${m(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${m(36)} ${m(28)} ${m(-7)}, rgba(0, 0, 0, 0.04) 0 ${m(17)} ${m(17)} ${m(-7)}`},other:{},components:{}};function st(e){return e==="auto"||e==="dark"||e==="light"}function gn({key:e="mantine-color-scheme-value"}={}){let t;return{get:r=>{if(typeof window>"u")return r;try{const n=window.localStorage.getItem(e);return st(n)?n:r}catch{return r}},set:r=>{try{window.localStorage.setItem(e,r)}catch(n){console.warn("[@mantine/core] Local storage color scheme manager was unable to save color scheme.",n)}},subscribe:r=>{t=n=>{n.storageArea===window.localStorage&&n.key===e&&st(n.newValue)&&r(n.newValue)},window.addEventListener("storage",t)},unsubscribe:()=>{window.removeEventListener("storage",t)},clear:()=>{window.localStorage.removeItem(e)}}}const hn="[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color",at="[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";function Ge(e){return e<0||e>9?!1:parseInt(e.toString(),10)===e}function dt(e){if(!(e.primaryColor in e.colors))throw new Error(hn);if(typeof e.primaryShade=="object"&&(!Ge(e.primaryShade.dark)||!Ge(e.primaryShade.light)))throw new Error(at);if(typeof e.primaryShade=="number"&&!Ge(e.primaryShade))throw new Error(at)}function xn(e,t){var n;if(!t)return dt(e),e;const r=Ve(e,t);return t.fontFamily&&!((n=t.headings)!=null&&n.fontFamily)&&(r.headings.fontFamily=t.fontFamily),dt(r),r}const Ue=v.createContext(null),yn=()=>v.useContext(Ue)||Ye;function O(){const e=v.useContext(Ue);if(!e)throw new Error("@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app");return e}function Vt({theme:e,children:t,inherit:r=!0}){const n=yn(),s=v.useMemo(()=>xn(r?n:Ye,e),[e,n,r]);return o.jsx(Ue.Provider,{value:s,children:t})}Vt.displayName="@mantine/core/MantineThemeProvider";function bn(){const e=O(),t=We(),r=R(e.breakpoints).reduce((n,s)=>{const i=e.breakpoints[s].includes("px"),a=de(e.breakpoints[s]),d=i?`${a-.1}px`:ot(a-.1),l=i?`${a}px`:ot(a);return`${n}@media (max-width: ${d}) {.mantine-visible-from-${s} {display: none !important;}}@media (min-width: ${l}) {.mantine-hidden-from-${s} {display: none !important;}}`},"");return o.jsx("style",{"data-mantine-styles":"classes",nonce:t==null?void 0:t(),dangerouslySetInnerHTML:{__html:r}})}function Ae(e){return Object.entries(e).map(([t,r])=>`${t}: ${r};`).join("")}function se(e,t){return(Array.isArray(e)?e:[e]).reduce((n,s)=>`${s}{${n}}`,t)}function vn(e,t){const r=Ae(e.variables),n=r?se(t,r):"",s=Ae(e.dark),i=Ae(e.light),a=s?se(t===":host"?`${t}([data-mantine-color-scheme="dark"])`:`${t}[data-mantine-color-scheme="dark"]`,s):"",d=i?se(t===":host"?`${t}([data-mantine-color-scheme="light"])`:`${t}[data-mantine-color-scheme="light"]`,i):"";return`${n}

${a}

${d}`}function Cn({color:e,theme:t,autoContrast:r}){return t.autoContrast&&me({color:e||t.primaryColor,theme:t}).isLight?"var(--mantine-color-black)":"var(--mantine-color-white)"}function lt(e,t){return Cn({color:e.colors[e.primaryColor][ce(e,t)],theme:e,autoContrast:null})}function ge({theme:e,color:t,colorScheme:r,name:n=t,withColorValues:s=!0}){if(!e.colors[t])return{};if(r==="light"){const d=ce(e,"light"),l={[`--mantine-color-${n}-text`]:`var(--mantine-color-${n}-filled)`,[`--mantine-color-${n}-filled`]:`var(--mantine-color-${n}-${d})`,[`--mantine-color-${n}-filled-hover`]:`var(--mantine-color-${n}-${d===9?8:d+1})`,[`--mantine-color-${n}-light`]:J(e.colors[t][d],.1),[`--mantine-color-${n}-light-hover`]:J(e.colors[t][d],.12),[`--mantine-color-${n}-light-color`]:`var(--mantine-color-${n}-${d})`,[`--mantine-color-${n}-outline`]:`var(--mantine-color-${n}-${d})`,[`--mantine-color-${n}-outline-hover`]:J(e.colors[t][d],.05)};return s?{[`--mantine-color-${n}-0`]:e.colors[t][0],[`--mantine-color-${n}-1`]:e.colors[t][1],[`--mantine-color-${n}-2`]:e.colors[t][2],[`--mantine-color-${n}-3`]:e.colors[t][3],[`--mantine-color-${n}-4`]:e.colors[t][4],[`--mantine-color-${n}-5`]:e.colors[t][5],[`--mantine-color-${n}-6`]:e.colors[t][6],[`--mantine-color-${n}-7`]:e.colors[t][7],[`--mantine-color-${n}-8`]:e.colors[t][8],[`--mantine-color-${n}-9`]:e.colors[t][9],...l}:l}const i=ce(e,"dark"),a={[`--mantine-color-${n}-text`]:`var(--mantine-color-${n}-4)`,[`--mantine-color-${n}-filled`]:`var(--mantine-color-${n}-${i})`,[`--mantine-color-${n}-filled-hover`]:`var(--mantine-color-${n}-${i===9?8:i+1})`,[`--mantine-color-${n}-light`]:J(e.colors[t][Math.max(0,i-2)],.15),[`--mantine-color-${n}-light-hover`]:J(e.colors[t][Math.max(0,i-2)],.2),[`--mantine-color-${n}-light-color`]:`var(--mantine-color-${n}-${Math.max(i-5,0)})`,[`--mantine-color-${n}-outline`]:`var(--mantine-color-${n}-${Math.max(i-4,0)})`,[`--mantine-color-${n}-outline-hover`]:J(e.colors[t][Math.max(i-4,0)],.05)};return s?{[`--mantine-color-${n}-0`]:e.colors[t][0],[`--mantine-color-${n}-1`]:e.colors[t][1],[`--mantine-color-${n}-2`]:e.colors[t][2],[`--mantine-color-${n}-3`]:e.colors[t][3],[`--mantine-color-${n}-4`]:e.colors[t][4],[`--mantine-color-${n}-5`]:e.colors[t][5],[`--mantine-color-${n}-6`]:e.colors[t][6],[`--mantine-color-${n}-7`]:e.colors[t][7],[`--mantine-color-${n}-8`]:e.colors[t][8],[`--mantine-color-${n}-9`]:e.colors[t][9],...a}:a}function wn(e){return!!e&&typeof e=="object"&&"mantine-virtual-color"in e}function ee(e,t,r){R(t).forEach(n=>Object.assign(e,{[`--mantine-${r}-${n}`]:t[n]}))}const Ht=e=>{const t=ce(e,"light"),r=e.defaultRadius in e.radius?e.radius[e.defaultRadius]:m(e.defaultRadius),n={variables:{"--mantine-z-index-app":"100","--mantine-z-index-modal":"200","--mantine-z-index-popover":"300","--mantine-z-index-overlay":"400","--mantine-z-index-max":"9999","--mantine-scale":e.scale.toString(),"--mantine-cursor-type":e.cursorType,"--mantine-webkit-font-smoothing":e.fontSmoothing?"antialiased":"unset","--mantine-moz-font-smoothing":e.fontSmoothing?"grayscale":"unset","--mantine-color-white":e.white,"--mantine-color-black":e.black,"--mantine-line-height":e.lineHeights.md,"--mantine-font-family":e.fontFamily,"--mantine-font-family-monospace":e.fontFamilyMonospace,"--mantine-font-family-headings":e.headings.fontFamily,"--mantine-heading-font-weight":e.headings.fontWeight,"--mantine-heading-text-wrap":e.headings.textWrap,"--mantine-radius-default":r,"--mantine-primary-color-filled":`var(--mantine-color-${e.primaryColor}-filled)`,"--mantine-primary-color-filled-hover":`var(--mantine-color-${e.primaryColor}-filled-hover)`,"--mantine-primary-color-light":`var(--mantine-color-${e.primaryColor}-light)`,"--mantine-primary-color-light-hover":`var(--mantine-color-${e.primaryColor}-light-hover)`,"--mantine-primary-color-light-color":`var(--mantine-color-${e.primaryColor}-light-color)`},light:{"--mantine-color-scheme":"light","--mantine-primary-color-contrast":lt(e,"light"),"--mantine-color-bright":"var(--mantine-color-black)","--mantine-color-text":e.black,"--mantine-color-body":e.white,"--mantine-color-error":"var(--mantine-color-red-6)","--mantine-color-placeholder":"var(--mantine-color-gray-5)","--mantine-color-anchor":`var(--mantine-color-${e.primaryColor}-${t})`,"--mantine-color-default":"var(--mantine-color-white)","--mantine-color-default-hover":"var(--mantine-color-gray-0)","--mantine-color-default-color":"var(--mantine-color-black)","--mantine-color-default-border":"var(--mantine-color-gray-4)","--mantine-color-dimmed":"var(--mantine-color-gray-6)","--mantine-color-disabled":"var(--mantine-color-gray-2)","--mantine-color-disabled-color":"var(--mantine-color-gray-5)","--mantine-color-disabled-border":"var(--mantine-color-gray-3)"},dark:{"--mantine-color-scheme":"dark","--mantine-primary-color-contrast":lt(e,"dark"),"--mantine-color-bright":"var(--mantine-color-white)","--mantine-color-text":"var(--mantine-color-dark-0)","--mantine-color-body":"var(--mantine-color-dark-7)","--mantine-color-error":"var(--mantine-color-red-8)","--mantine-color-placeholder":"var(--mantine-color-dark-3)","--mantine-color-anchor":`var(--mantine-color-${e.primaryColor}-4)`,"--mantine-color-default":"var(--mantine-color-dark-6)","--mantine-color-default-hover":"var(--mantine-color-dark-5)","--mantine-color-default-color":"var(--mantine-color-white)","--mantine-color-default-border":"var(--mantine-color-dark-4)","--mantine-color-dimmed":"var(--mantine-color-dark-2)","--mantine-color-disabled":"var(--mantine-color-dark-6)","--mantine-color-disabled-color":"var(--mantine-color-dark-3)","--mantine-color-disabled-border":"var(--mantine-color-dark-4)"}};ee(n.variables,e.breakpoints,"breakpoint"),ee(n.variables,e.spacing,"spacing"),ee(n.variables,e.fontSizes,"font-size"),ee(n.variables,e.lineHeights,"line-height"),ee(n.variables,e.shadows,"shadow"),ee(n.variables,e.radius,"radius"),e.colors[e.primaryColor].forEach((i,a)=>{n.variables[`--mantine-primary-color-${a}`]=`var(--mantine-color-${e.primaryColor}-${a})`}),R(e.colors).forEach(i=>{const a=e.colors[i];if(wn(a)){Object.assign(n.light,ge({theme:e,name:a.name,color:a.light,colorScheme:"light",withColorValues:!0})),Object.assign(n.dark,ge({theme:e,name:a.name,color:a.dark,colorScheme:"dark",withColorValues:!0}));return}a.forEach((d,l)=>{n.variables[`--mantine-color-${i}-${l}`]=d}),Object.assign(n.light,ge({theme:e,color:i,colorScheme:"light",withColorValues:!1})),Object.assign(n.dark,ge({theme:e,color:i,colorScheme:"dark",withColorValues:!1}))});const s=e.headings.sizes;return R(s).forEach(i=>{n.variables[`--mantine-${i}-font-size`]=s[i].fontSize,n.variables[`--mantine-${i}-line-height`]=s[i].lineHeight,n.variables[`--mantine-${i}-font-weight`]=s[i].fontWeight||e.headings.fontWeight}),n};function jn({theme:e,generator:t}){const r=Ht(e),n=t==null?void 0:t(e);return n?Ve(r,n):r}const ze=Ht(Ye);function $n(e){const t={variables:{},light:{},dark:{}};return R(e.variables).forEach(r=>{ze.variables[r]!==e.variables[r]&&(t.variables[r]=e.variables[r])}),R(e.light).forEach(r=>{ze.light[r]!==e.light[r]&&(t.light[r]=e.light[r])}),R(e.dark).forEach(r=>{ze.dark[r]!==e.dark[r]&&(t.dark[r]=e.dark[r])}),t}function Sn(e){return`
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`}function Ot({cssVariablesSelector:e,deduplicateCssVariables:t}){const r=O(),n=We(),s=Jr(),i=jn({theme:r,generator:s}),a=e===":root"&&t,d=a?$n(i):i,l=vn(d,e);return l?o.jsx("style",{"data-mantine-styles":!0,nonce:n==null?void 0:n(),dangerouslySetInnerHTML:{__html:`${l}${a?"":Sn(e)}`}}):null}Ot.displayName="@mantine/CssVariables";function te(e,t){var s,i;const r=typeof window<"u"&&"matchMedia"in window&&((s=window.matchMedia("(prefers-color-scheme: dark)"))==null?void 0:s.matches),n=e!=="auto"?e:r?"dark":"light";(i=t())==null||i.setAttribute("data-mantine-color-scheme",n)}function Tn({manager:e,defaultColorScheme:t,getRootElement:r,forceColorScheme:n}){const s=v.useRef(null),[i,a]=v.useState(()=>e.get(t)),d=n||i,l=v.useCallback(u=>{n||(te(u,r),a(u),e.set(u))},[e.set,d,n]),f=v.useCallback(()=>{a(t),te(t,r),e.clear()},[e.clear,t]);return v.useEffect(()=>(e.subscribe(l),e.unsubscribe),[e.subscribe,e.unsubscribe]),Et(()=>{te(e.get(t),r)},[]),v.useEffect(()=>{var c;if(n)return te(n,r),()=>{};n===void 0&&te(i,r),typeof window<"u"&&"matchMedia"in window&&(s.current=window.matchMedia("(prefers-color-scheme: dark)"));const u=p=>{i==="auto"&&te(p.matches?"dark":"light",r)};return(c=s.current)==null||c.addEventListener("change",u),()=>{var p;return(p=s.current)==null?void 0:p.removeEventListener("change",u)}},[i,n]),{colorScheme:d,setColorScheme:l,clearColorScheme:f}}function kn({respectReducedMotion:e,getRootElement:t}){Et(()=>{var r;e&&((r=t())==null||r.setAttribute("data-respect-reduced-motion","true"))},[e])}function Wt({theme:e,children:t,getStyleNonce:r,withStaticClasses:n=!0,withGlobalClasses:s=!0,deduplicateCssVariables:i=!0,withCssVariables:a=!0,cssVariablesSelector:d=":root",classNamesPrefix:l="mantine",colorSchemeManager:f=gn(),defaultColorScheme:u="light",getRootElement:c=()=>document.documentElement,cssVariablesResolver:p,forceColorScheme:x,stylesTransform:g,env:h}){const{colorScheme:b,setColorScheme:C,clearColorScheme:T}=Tn({defaultColorScheme:u,forceColorScheme:x,manager:f,getRootElement:c});return kn({respectReducedMotion:(e==null?void 0:e.respectReducedMotion)||!1,getRootElement:c}),o.jsx(It.Provider,{value:{colorScheme:b,setColorScheme:C,clearColorScheme:T,getRootElement:c,classNamesPrefix:l,getStyleNonce:r,cssVariablesResolver:p,cssVariablesSelector:d,withStaticClasses:n,stylesTransform:g,env:h},children:o.jsxs(Vt,{theme:e,children:[a&&o.jsx(Ot,{cssVariablesSelector:d,deduplicateCssVariables:i}),s&&o.jsx(bn,{}),t]})})}Wt.displayName="@mantine/core/MantineProvider";const Rn={always:"mantine-focus-always",auto:"mantine-focus-auto",never:"mantine-focus-never"};function Nn({theme:e,options:t,unstyled:r}){return Q((t==null?void 0:t.focusable)&&!r&&(e.focusClassName||Rn[e.focusRing]),(t==null?void 0:t.active)&&!r&&e.activeClassName)}function Gn({selector:e,stylesCtx:t,options:r,props:n,theme:s}){return Oe({theme:s,classNames:r==null?void 0:r.classNames,props:(r==null?void 0:r.props)||n,stylesCtx:t})[e]}function ct({selector:e,stylesCtx:t,theme:r,classNames:n,props:s}){return Oe({theme:r,classNames:n,props:s,stylesCtx:t})[e]}function An({rootSelector:e,selector:t,className:r}){return e===t?r:void 0}function zn({selector:e,classes:t,unstyled:r}){return r?void 0:t[e]}function Mn({themeName:e,classNamesPrefix:t,selector:r,withStaticClass:n}){return n===!1?[]:e.map(s=>`${t}-${s}-${r}`)}function Bn({themeName:e,theme:t,selector:r,props:n,stylesCtx:s}){return e.map(i=>{var a,d;return(d=Oe({theme:t,classNames:(a=t.components[i])==null?void 0:a.classNames,props:n,stylesCtx:s}))==null?void 0:d[r]})}function _n({options:e,classes:t,selector:r,unstyled:n}){return e!=null&&e.variant&&!n?t[`${r}--${e.variant}`]:void 0}function Fn({theme:e,options:t,themeName:r,selector:n,classNamesPrefix:s,classNames:i,classes:a,unstyled:d,className:l,rootSelector:f,props:u,stylesCtx:c,withStaticClasses:p,headless:x,transformedStyles:g}){return Q(Nn({theme:e,options:t,unstyled:d||x}),Bn({theme:e,themeName:r,selector:n,props:u,stylesCtx:c}),_n({options:t,classes:a,selector:n,unstyled:d}),ct({selector:n,stylesCtx:c,theme:e,classNames:i,props:u}),ct({selector:n,stylesCtx:c,theme:e,classNames:g,props:u}),Gn({selector:n,stylesCtx:c,options:t,props:u,theme:e}),An({rootSelector:f,selector:n,className:l}),zn({selector:n,classes:a,unstyled:d||x}),p&&!x&&Mn({themeName:r,classNamesPrefix:s,selector:n,withStaticClass:t==null?void 0:t.withStaticClass}),t==null?void 0:t.className)}function Pn({theme:e,themeName:t,props:r,stylesCtx:n,selector:s}){return t.map(i=>{var a;return Fe({theme:e,styles:(a=e.components[i])==null?void 0:a.styles,props:r,stylesCtx:n})[s]}).reduce((i,a)=>({...i,...a}),{})}function Ee({style:e,theme:t}){return Array.isArray(e)?[...e].reduce((r,n)=>({...r,...Ee({style:n,theme:t})}),{}):typeof e=="function"?e(t):e??{}}function En(e){return e.reduce((t,r)=>(r&&Object.keys(r).forEach(n=>{t[n]={...t[n],...q(r[n])}}),t),{})}function Ln({vars:e,varsResolver:t,theme:r,props:n,stylesCtx:s,selector:i,themeName:a,headless:d}){var l;return(l=En([d?{}:t==null?void 0:t(r,n,s),...a.map(f=>{var u,c,p;return(p=(c=(u=r.components)==null?void 0:u[f])==null?void 0:c.vars)==null?void 0:p.call(c,r,n,s)}),e==null?void 0:e(r,n,s)]))==null?void 0:l[i]}function In({theme:e,themeName:t,selector:r,options:n,props:s,stylesCtx:i,rootSelector:a,styles:d,style:l,vars:f,varsResolver:u,headless:c,withStylesTransform:p}){return{...!p&&Pn({theme:e,themeName:t,props:s,stylesCtx:i,selector:r}),...!p&&Fe({theme:e,styles:d,props:s,stylesCtx:i})[r],...!p&&Fe({theme:e,styles:n==null?void 0:n.styles,props:(n==null?void 0:n.props)||s,stylesCtx:i})[r],...Ln({theme:e,props:s,stylesCtx:i,vars:f,varsResolver:u,selector:r,themeName:t,headless:c}),...a===r?Ee({style:l,theme:e}):null,...Ee({style:n==null?void 0:n.style,theme:e})}}function Vn({props:e,stylesCtx:t,themeName:r}){var a;const n=O(),s=(a=on())==null?void 0:a();return{getTransformedStyles:d=>s?[...d.map(f=>s(f,{props:e,theme:n,ctx:t})),...r.map(f=>{var u;return s((u=n.components[f])==null?void 0:u.styles,{props:e,theme:n,ctx:t})})].filter(Boolean):[],withStylesTransform:!!s}}function M({name:e,classes:t,props:r,stylesCtx:n,className:s,style:i,rootSelector:a="root",unstyled:d,classNames:l,styles:f,vars:u,varsResolver:c,attributes:p}){const x=O(),g=en(),h=tn(),b=rn(),C=(Array.isArray(e)?e:[e]).filter(j=>j),{withStylesTransform:T,getTransformedStyles:w}=Vn({props:r,stylesCtx:n,themeName:C});return(j,$)=>({className:Fn({theme:x,options:$,themeName:C,selector:j,classNamesPrefix:g,classNames:l,classes:t,unstyled:d,className:s,rootSelector:a,props:r,stylesCtx:n,withStaticClasses:h,headless:b,transformedStyles:w([$==null?void 0:$.styles,f])}),style:In({theme:x,themeName:C,selector:j,options:$,props:r,stylesCtx:n,rootSelector:a,styles:f,style:i,vars:u,varsResolver:c,headless:b,withStylesTransform:T}),...p==null?void 0:p[j]})}function A(e,t,r){var a;const n=O(),s=(a=n.components[e])==null?void 0:a.defaultProps,i=typeof s=="function"?s(n):s;return{...t,...i,...q(r)}}function Me(e){return R(e).reduce((t,r)=>e[r]!==void 0?`${t}${Vr(r)}:${e[r]};`:t,"").trim()}function Hn({selector:e,styles:t,media:r,container:n}){const s=t?Me(t):"",i=Array.isArray(r)?r.map(d=>`@media${d.query}{${e}{${Me(d.styles)}}}`):[],a=Array.isArray(n)?n.map(d=>`@container ${d.query}{${e}{${Me(d.styles)}}}`):[];return`${s?`${e}{${s}}`:""}${i.join("")}${a.join("")}`.trim()}function ne(e){const t=We();return o.jsx("style",{"data-mantine-styles":"inline",nonce:t==null?void 0:t(),dangerouslySetInnerHTML:{__html:Hn(e)}})}function On(e){const{m:t,mx:r,my:n,mt:s,mb:i,ml:a,mr:d,me:l,ms:f,p:u,px:c,py:p,pt:x,pb:g,pl:h,pr:b,pe:C,ps:T,bd:w,bdrs:j,bg:$,c:N,opacity:k,ff:P,fz:B,fw:D,lts:Te,ta:ke,lh:mr,fs:pr,tt:fr,td:gr,w:hr,miw:xr,maw:yr,h:br,mih:vr,mah:Cr,bgsz:wr,bgp:jr,bgr:$r,bga:Sr,pos:Tr,top:kr,left:Rr,bottom:Nr,right:Gr,inset:Ar,display:zr,flex:Mr,hiddenFrom:Br,visibleFrom:_r,lightHidden:Fr,darkHidden:Pr,sx:Er,...Lr}=e;return{styleProps:q({m:t,mx:r,my:n,mt:s,mb:i,ml:a,mr:d,me:l,ms:f,p:u,px:c,py:p,pt:x,pb:g,pl:h,pr:b,pe:C,ps:T,bd:w,bg:$,c:N,opacity:k,ff:P,fz:B,fw:D,lts:Te,ta:ke,lh:mr,fs:pr,tt:fr,td:gr,w:hr,miw:xr,maw:yr,h:br,mih:vr,mah:Cr,bgsz:wr,bgp:jr,bgr:$r,bga:Sr,pos:Tr,top:kr,left:Rr,bottom:Nr,right:Gr,inset:Ar,display:zr,flex:Mr,bdrs:j,hiddenFrom:Br,visibleFrom:_r,lightHidden:Fr,darkHidden:Pr,sx:Er}),rest:Lr}}const Wn={m:{type:"spacing",property:"margin"},mt:{type:"spacing",property:"marginTop"},mb:{type:"spacing",property:"marginBottom"},ml:{type:"spacing",property:"marginLeft"},mr:{type:"spacing",property:"marginRight"},ms:{type:"spacing",property:"marginInlineStart"},me:{type:"spacing",property:"marginInlineEnd"},mx:{type:"spacing",property:"marginInline"},my:{type:"spacing",property:"marginBlock"},p:{type:"spacing",property:"padding"},pt:{type:"spacing",property:"paddingTop"},pb:{type:"spacing",property:"paddingBottom"},pl:{type:"spacing",property:"paddingLeft"},pr:{type:"spacing",property:"paddingRight"},ps:{type:"spacing",property:"paddingInlineStart"},pe:{type:"spacing",property:"paddingInlineEnd"},px:{type:"spacing",property:"paddingInline"},py:{type:"spacing",property:"paddingBlock"},bd:{type:"border",property:"border"},bdrs:{type:"radius",property:"borderRadius"},bg:{type:"color",property:"background"},c:{type:"textColor",property:"color"},opacity:{type:"identity",property:"opacity"},ff:{type:"fontFamily",property:"fontFamily"},fz:{type:"fontSize",property:"fontSize"},fw:{type:"identity",property:"fontWeight"},lts:{type:"size",property:"letterSpacing"},ta:{type:"identity",property:"textAlign"},lh:{type:"lineHeight",property:"lineHeight"},fs:{type:"identity",property:"fontStyle"},tt:{type:"identity",property:"textTransform"},td:{type:"identity",property:"textDecoration"},w:{type:"spacing",property:"width"},miw:{type:"spacing",property:"minWidth"},maw:{type:"spacing",property:"maxWidth"},h:{type:"spacing",property:"height"},mih:{type:"spacing",property:"minHeight"},mah:{type:"spacing",property:"maxHeight"},bgsz:{type:"size",property:"backgroundSize"},bgp:{type:"identity",property:"backgroundPosition"},bgr:{type:"identity",property:"backgroundRepeat"},bga:{type:"identity",property:"backgroundAttachment"},pos:{type:"identity",property:"position"},top:{type:"size",property:"top"},left:{type:"size",property:"left"},bottom:{type:"size",property:"bottom"},right:{type:"size",property:"right"},inset:{type:"size",property:"inset"},display:{type:"identity",property:"display"},flex:{type:"identity",property:"flex"}};function Xe(e,t){const r=me({color:e,theme:t});return r.color==="dimmed"?"var(--mantine-color-dimmed)":r.color==="bright"?"var(--mantine-color-bright)":r.variable?`var(${r.variable})`:r.color}function Dn(e,t){const r=me({color:e,theme:t});return r.isThemeColor&&r.shade===void 0?`var(--mantine-color-${r.color}-text)`:Xe(e,t)}function Yn(e,t){if(typeof e=="number")return m(e);if(typeof e=="string"){const[r,n,...s]=e.split(" ").filter(a=>a.trim()!=="");let i=`${m(r)}`;return n&&(i+=` ${n}`),s.length>0&&(i+=` ${Xe(s.join(" "),t)}`),i.trim()}return e}const ut={text:"var(--mantine-font-family)",mono:"var(--mantine-font-family-monospace)",monospace:"var(--mantine-font-family-monospace)",heading:"var(--mantine-font-family-headings)",headings:"var(--mantine-font-family-headings)"};function Un(e){return typeof e=="string"&&e in ut?ut[e]:e}const Xn=["h1","h2","h3","h4","h5","h6"];function qn(e,t){return typeof e=="string"&&e in t.fontSizes?`var(--mantine-font-size-${e})`:typeof e=="string"&&Xn.includes(e)?`var(--mantine-${e}-font-size)`:typeof e=="number"||typeof e=="string"?m(e):e}function Qn(e){return e}const Kn=["h1","h2","h3","h4","h5","h6"];function Zn(e,t){return typeof e=="string"&&e in t.lineHeights?`var(--mantine-line-height-${e})`:typeof e=="string"&&Kn.includes(e)?`var(--mantine-${e}-line-height)`:e}function Jn(e,t){return typeof e=="string"&&e in t.radius?`var(--mantine-radius-${e})`:typeof e=="number"||typeof e=="string"?m(e):e}function eo(e){return typeof e=="number"?m(e):e}function to(e,t){if(typeof e=="number")return m(e);if(typeof e=="string"){const r=e.replace("-","");if(!(r in t.spacing))return m(e);const n=`--mantine-spacing-${r}`;return e.startsWith("-")?`calc(var(${n}) * -1)`:`var(${n})`}return e}const Be={color:Xe,textColor:Dn,fontSize:qn,spacing:to,radius:Jn,identity:Qn,size:eo,lineHeight:Zn,fontFamily:Un,border:Yn};function mt(e){return e.replace("(min-width: ","").replace("em)","")}function ro({media:e,...t}){const n=Object.keys(e).sort((s,i)=>Number(mt(s))-Number(mt(i))).map(s=>({query:s,styles:e[s]}));return{...t,media:n}}function no(e){if(typeof e!="object"||e===null)return!1;const t=Object.keys(e);return!(t.length===1&&t[0]==="base")}function oo(e){return typeof e=="object"&&e!==null?"base"in e?e.base:void 0:e}function io(e){return typeof e=="object"&&e!==null?R(e).filter(t=>t!=="base"):[]}function so(e,t){return typeof e=="object"&&e!==null&&t in e?e[t]:e}function Dt({styleProps:e,data:t,theme:r}){return ro(R(e).reduce((n,s)=>{if(s==="hiddenFrom"||s==="visibleFrom"||s==="sx")return n;const i=t[s],a=Array.isArray(i.property)?i.property:[i.property],d=oo(e[s]);if(!no(e[s]))return a.forEach(f=>{n.inlineStyles[f]=Be[i.type](d,r)}),n;n.hasResponsiveStyles=!0;const l=io(e[s]);return a.forEach(f=>{d!=null&&(n.styles[f]=Be[i.type](d,r)),l.forEach(u=>{const c=`(min-width: ${r.breakpoints[u]})`;n.media[c]={...n.media[c],[f]:Be[i.type](so(e[s],u),r)}})}),n},{hasResponsiveStyles:!1,styles:{},inlineStyles:{},media:{}}))}function pe(){return`__m__-${v.useId().replace(/:/g,"")}`}function Yt(e){return e.startsWith("data-")?e:`data-${e}`}function ao(e){return Object.keys(e).reduce((t,r)=>{const n=e[r];return n===void 0||n===""||n===!1||n===null||(t[Yt(r)]=e[r]),t},{})}function Ut(e){return e?typeof e=="string"?{[Yt(e)]:!0}:Array.isArray(e)?[...e].reduce((t,r)=>({...t,...Ut(r)}),{}):ao(e):null}function Le(e,t){return Array.isArray(e)?[...e].reduce((r,n)=>({...r,...Le(n,t)}),{}):typeof e=="function"?e(t):e??{}}function lo({theme:e,style:t,vars:r,styleProps:n}){const s=Le(t,e),i=Le(r,e);return{...s,...i,...n}}const Xt=v.forwardRef(({component:e,style:t,__vars:r,className:n,variant:s,mod:i,size:a,hiddenFrom:d,visibleFrom:l,lightHidden:f,darkHidden:u,renderRoot:c,__size:p,...x},g)=>{var P;const h=O(),b=e||"div",{styleProps:C,rest:T}=On(x),w=nn(),j=(P=w==null?void 0:w())==null?void 0:P(C.sx),$=pe(),N=Dt({styleProps:C,theme:h,data:Wn}),k={ref:g,style:lo({theme:h,style:t,vars:r,styleProps:N.inlineStyles}),className:Q(n,j,{[$]:N.hasResponsiveStyles,"mantine-light-hidden":f,"mantine-dark-hidden":u,[`mantine-hidden-from-${d}`]:d,[`mantine-visible-from-${l}`]:l}),"data-variant":s,"data-size":Ft(a)?void 0:a||void 0,size:p,...Ut(i),...T};return o.jsxs(o.Fragment,{children:[N.hasResponsiveStyles&&o.jsx(ne,{selector:`.${$}`,styles:N.styles,media:N.media}),typeof c=="function"?c(k):o.jsx(b,{...k})]})});Xt.displayName="@mantine/core/Box";const S=Xt;function qt(e){return e}function W(e){const t=v.forwardRef(e);return t.extend=qt,t.withProps=r=>{const n=v.forwardRef((s,i)=>o.jsx(t,{...r,...s,ref:i}));return n.extend=t.extend,n.displayName=`WithProps(${t.displayName})`,n},t}function Z(e){const t=v.forwardRef(e);return t.withProps=r=>{const n=v.forwardRef((s,i)=>o.jsx(t,{...r,...s,ref:i}));return n.extend=t.extend,n.displayName=`WithProps(${t.displayName})`,n},t.extend=qt,t}var Qt={root:"m_87cf2631"};const co={__staticSelector:"UnstyledButton"},qe=Z((e,t)=>{const r=A("UnstyledButton",co,e),{className:n,component:s="button",__staticSelector:i,unstyled:a,classNames:d,styles:l,style:f,attributes:u,...c}=r,p=M({name:i,props:r,classes:Qt,className:n,style:f,classNames:d,styles:l,unstyled:a,attributes:u});return o.jsx(S,{...p("root",{focusable:!0}),component:s,ref:t,type:s==="button"?"button":void 0,...c})});qe.classes=Qt;qe.displayName="@mantine/core/UnstyledButton";var Kt={root:"m_1b7284a3"};const uo=(e,{radius:t,shadow:r})=>({root:{"--paper-radius":t===void 0?void 0:je(t),"--paper-shadow":Wr(r)}}),Qe=Z((e,t)=>{const r=A("Paper",null,e),{classNames:n,className:s,style:i,styles:a,unstyled:d,withBorder:l,vars:f,radius:u,shadow:c,variant:p,mod:x,attributes:g,...h}=r,b=M({name:"Paper",props:r,classes:Kt,className:s,style:i,classNames:n,styles:a,unstyled:d,attributes:g,vars:f,varsResolver:uo});return o.jsx(S,{ref:t,mod:[{"data-with-border":l},x],...b("root"),variant:p,...h})});Qe.classes=Kt;Qe.displayName="@mantine/core/Paper";const ae=e=>({in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:`scale(.9) translateY(${e==="bottom"?10:-10}px)`},transitionProperty:"transform, opacity"}),he={fade:{in:{opacity:1},out:{opacity:0},transitionProperty:"opacity"},"fade-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(30px)"},transitionProperty:"opacity, transform"},"fade-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(-30px)"},transitionProperty:"opacity, transform"},"fade-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(30px)"},transitionProperty:"opacity, transform"},"fade-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(-30px)"},transitionProperty:"opacity, transform"},scale:{in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-y":{in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-x":{in:{opacity:1,transform:"scaleX(1)"},out:{opacity:0,transform:"scaleX(0)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"skew-up":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:"translateY(-20px) skew(-10deg, -5deg)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"skew-down":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:"translateY(20px) skew(-10deg, -5deg)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-left":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:"translateY(20px) rotate(-5deg)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-right":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:"translateY(20px) rotate(5deg)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(-100%)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(100%)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"slide-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(100%)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"slide-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(-100%)"},common:{transformOrigin:"right"},transitionProperty:"transform, opacity"},pop:{...ae("bottom"),common:{transformOrigin:"center center"}},"pop-bottom-left":{...ae("bottom"),common:{transformOrigin:"bottom left"}},"pop-bottom-right":{...ae("bottom"),common:{transformOrigin:"bottom right"}},"pop-top-left":{...ae("top"),common:{transformOrigin:"top left"}},"pop-top-right":{...ae("top"),common:{transformOrigin:"top right"}}},pt={entering:"in",entered:"in",exiting:"out",exited:"out","pre-exiting":"out","pre-entering":"out"};function mo({transition:e,state:t,duration:r,timingFunction:n}){const s={WebkitBackfaceVisibility:"hidden",willChange:"transform, opacity",transitionDuration:`${r}ms`,transitionTimingFunction:n};return typeof e=="string"?e in he?{transitionProperty:he[e].transitionProperty,...s,...he[e].common,...he[e][pt[t]]}:{}:{transitionProperty:e.transitionProperty,...s,...e.common,...e[pt[t]]}}function po({duration:e,exitDuration:t,timingFunction:r,mounted:n,onEnter:s,onExit:i,onEntered:a,onExited:d,enterDelay:l,exitDelay:f}){const u=O(),c=Qr(),p=u.respectReducedMotion?c:!1,[x,g]=v.useState(p?0:e),[h,b]=v.useState(n?"entered":"exited"),C=v.useRef(-1),T=v.useRef(-1),w=v.useRef(-1);function j(){window.clearTimeout(C.current),window.clearTimeout(T.current),cancelAnimationFrame(w.current)}const $=k=>{j();const P=k?s:i,B=k?a:d,D=p?0:k?e:t;g(D),D===0?(typeof P=="function"&&P(),typeof B=="function"&&B(),b(k?"entered":"exited")):w.current=requestAnimationFrame(()=>{Ir.flushSync(()=>{b(k?"pre-entering":"pre-exiting")}),w.current=requestAnimationFrame(()=>{typeof P=="function"&&P(),b(k?"entering":"exiting"),C.current=window.setTimeout(()=>{typeof B=="function"&&B(),b(k?"entered":"exited")},D)})})},N=k=>{if(j(),typeof(k?l:f)!="number"){$(k);return}T.current=window.setTimeout(()=>{$(k)},k?l:f)};return qr(()=>{N(n)},[n]),v.useEffect(()=>()=>{j()},[]),{transitionDuration:x,transitionStatus:h,transitionTimingFunction:r||"ease"}}function Zt({keepMounted:e,transition:t="fade",duration:r=250,exitDuration:n=r,mounted:s,children:i,timingFunction:a="ease",onExit:d,onEntered:l,onEnter:f,onExited:u,enterDelay:c,exitDelay:p}){const x=sn(),{transitionDuration:g,transitionStatus:h,transitionTimingFunction:b}=po({mounted:s,exitDuration:n,duration:r,timingFunction:a,onExit:d,onEntered:l,onEnter:f,onExited:u,enterDelay:c,exitDelay:p});return g===0||x==="test"?s?o.jsx(o.Fragment,{children:i({})}):e?i({display:"none"}):null:h==="exited"?e?i({display:"none"}):null:o.jsx(o.Fragment,{children:i(mo({transition:t,duration:g,state:h,timingFunction:b}))})}Zt.displayName="@mantine/core/Transition";var H={root:"m_5ae2e3c",barsLoader:"m_7a2bd4cd",bar:"m_870bb79","bars-loader-animation":"m_5d2b3b9d",dotsLoader:"m_4e3f22d7",dot:"m_870c4af","loader-dots-animation":"m_aac34a1",ovalLoader:"m_b34414df","oval-loader-animation":"m_f8e89c4b"};const Jt=v.forwardRef(({className:e,...t},r)=>o.jsxs(S,{component:"span",className:Q(H.barsLoader,e),...t,ref:r,children:[o.jsx("span",{className:H.bar}),o.jsx("span",{className:H.bar}),o.jsx("span",{className:H.bar})]}));Jt.displayName="@mantine/core/Bars";const er=v.forwardRef(({className:e,...t},r)=>o.jsxs(S,{component:"span",className:Q(H.dotsLoader,e),...t,ref:r,children:[o.jsx("span",{className:H.dot}),o.jsx("span",{className:H.dot}),o.jsx("span",{className:H.dot})]}));er.displayName="@mantine/core/Dots";const tr=v.forwardRef(({className:e,...t},r)=>o.jsx(S,{component:"span",className:Q(H.ovalLoader,e),...t,ref:r}));tr.displayName="@mantine/core/Oval";const rr={bars:Jt,oval:tr,dots:er},fo={loaders:rr,type:"oval"},go=(e,{size:t,color:r})=>({root:{"--loader-size":F(t,"loader-size"),"--loader-color":r?ue(r,e):void 0}}),$e=W((e,t)=>{const r=A("Loader",fo,e),{size:n,color:s,type:i,vars:a,className:d,style:l,classNames:f,styles:u,unstyled:c,loaders:p,variant:x,children:g,attributes:h,...b}=r,C=M({name:"Loader",props:r,classes:H,className:d,style:l,classNames:f,styles:u,unstyled:c,attributes:h,vars:a,varsResolver:go});return g?o.jsx(S,{...C("root"),ref:t,...b,children:g}):o.jsx(S,{...C("root"),ref:t,component:p[i],variant:x,size:n,...b})});$e.defaultLoaders=rr;$e.classes=H;$e.displayName="@mantine/core/Loader";function ho(e){return v.Children.toArray(e).filter(Boolean)}var nr={root:"m_4081bf90"};const xo={preventGrowOverflow:!0,gap:"md",align:"center",justify:"flex-start",wrap:"wrap"},yo=(e,{grow:t,preventGrowOverflow:r,gap:n,align:s,justify:i,wrap:a},{childWidth:d})=>({root:{"--group-child-width":t&&r?d:void 0,"--group-gap":_(n),"--group-align":s,"--group-justify":i,"--group-wrap":a}}),X=W((e,t)=>{const r=A("Group",xo,e),{classNames:n,className:s,style:i,styles:a,unstyled:d,children:l,gap:f,align:u,justify:c,wrap:p,grow:x,preventGrowOverflow:g,vars:h,variant:b,__size:C,mod:T,attributes:w,...j}=r,$=ho(l),N=$.length,k=_(f??"md"),B={childWidth:`calc(${100/N}% - (${k} - ${k} / ${N}))`},D=M({name:"Group",props:r,stylesCtx:B,className:s,style:i,classes:nr,classNames:n,styles:a,unstyled:d,attributes:w,vars:h,varsResolver:yo});return o.jsx(S,{...D("root"),ref:t,variant:b,mod:[{grow:x},T],size:C,...j,children:$})});X.classes=nr;X.displayName="@mantine/core/Group";const bo={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"identity",property:"alignItems"},justify:{type:"identity",property:"justifyContent"},wrap:{type:"identity",property:"flexWrap"},direction:{type:"identity",property:"flexDirection"}};var or={root:"m_8bffd616"};const Ke=Z((e,t)=>{const r=A("Flex",null,e),{classNames:n,className:s,style:i,styles:a,unstyled:d,vars:l,gap:f,rowGap:u,columnGap:c,align:p,justify:x,wrap:g,direction:h,attributes:b,...C}=r,T=M({name:"Flex",classes:or,props:r,className:s,style:i,classNames:n,styles:a,unstyled:d,attributes:b,vars:l}),w=O(),j=pe(),$=Dt({styleProps:{gap:f,rowGap:u,columnGap:c,align:p,justify:x,wrap:g,direction:h},theme:w,data:bo});return o.jsxs(o.Fragment,{children:[$.hasResponsiveStyles&&o.jsx(ne,{selector:`.${j}`,styles:$.styles,media:$.media}),o.jsx(S,{ref:t,...T("root",{className:j,style:q($.inlineStyles)}),...C})]})});Ke.classes=or;Ke.displayName="@mantine/core/Flex";var ir={root:"m_b6d8b162"};function vo(e){if(e==="start")return"start";if(e==="end"||e)return"end"}const Co={inherit:!1},wo=(e,{variant:t,lineClamp:r,gradient:n,size:s,color:i})=>({root:{"--text-fz":le(s),"--text-lh":Or(s),"--text-gradient":t==="gradient"?Pe(n,e):void 0,"--text-line-clamp":typeof r=="number"?r.toString():void 0,"--text-color":i?ue(i,e):void 0}}),y=Z((e,t)=>{const r=A("Text",Co,e),{lineClamp:n,truncate:s,inline:i,inherit:a,gradient:d,span:l,__staticSelector:f,vars:u,className:c,style:p,classNames:x,styles:g,unstyled:h,variant:b,mod:C,size:T,attributes:w,...j}=r,$=M({name:["Text",f],props:r,classes:ir,className:c,style:p,classNames:x,styles:g,unstyled:h,attributes:w,vars:u,varsResolver:wo});return o.jsx(S,{...$("root",{focusable:!0}),ref:t,component:l?"span":"p",variant:b,mod:[{"data-truncate":vo(s),"data-line-clamp":typeof n=="number","data-inline":i,"data-inherit":a},C],size:T,...j})});y.classes=ir;y.displayName="@mantine/core/Text";var sr={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};const jo=(e,{radius:t,color:r,gradient:n,variant:s,size:i,autoContrast:a})=>{const d=e.variantColorResolver({color:r||e.primaryColor,theme:e,gradient:n,variant:s||"filled",autoContrast:a});return{root:{"--badge-height":F(i,"badge-height"),"--badge-padding-x":F(i,"badge-padding-x"),"--badge-fz":F(i,"badge-fz"),"--badge-radius":t===void 0?void 0:je(t),"--badge-bg":r||s?d.background:void 0,"--badge-color":r||s?d.color:void 0,"--badge-bd":r||s?d.border:void 0,"--badge-dot-color":s==="dot"?ue(r,e):void 0}}},we=Z((e,t)=>{const r=A("Badge",null,e),{classNames:n,className:s,style:i,styles:a,unstyled:d,vars:l,radius:f,color:u,gradient:c,leftSection:p,rightSection:x,children:g,variant:h,fullWidth:b,autoContrast:C,circle:T,mod:w,attributes:j,...$}=r,N=M({name:"Badge",props:r,classes:sr,className:s,style:i,classNames:n,styles:a,unstyled:d,attributes:j,vars:l,varsResolver:jo});return o.jsxs(S,{variant:h,mod:[{block:b,circle:T,"with-right-section":!!x,"with-left-section":!!p},w],...N("root",{variant:h}),ref:t,...$,children:[p&&o.jsx("span",{...N("section"),"data-position":"left",children:p}),o.jsx("span",{...N("label"),children:g}),x&&o.jsx("span",{...N("section"),"data-position":"right",children:x})]})});we.classes=sr;we.displayName="@mantine/core/Badge";var oe={root:"m_77c9d27d",inner:"m_80f1301b",label:"m_811560b9",section:"m_a74036a",loader:"m_a25b86ee",group:"m_80d6d844",groupSection:"m_70be2a01"};const ft={orientation:"horizontal"},$o=(e,{borderWidth:t})=>({group:{"--button-border-width":m(t)}}),Ze=W((e,t)=>{const r=A("ButtonGroup",ft,e),{className:n,style:s,classNames:i,styles:a,unstyled:d,orientation:l,vars:f,borderWidth:u,variant:c,mod:p,attributes:x,...g}=A("ButtonGroup",ft,e),h=M({name:"ButtonGroup",props:r,classes:oe,className:n,style:s,classNames:i,styles:a,unstyled:d,attributes:x,vars:f,varsResolver:$o,rootSelector:"group"});return o.jsx(S,{...h("group"),ref:t,variant:c,mod:[{"data-orientation":l},p],role:"group",...g})});Ze.classes=oe;Ze.displayName="@mantine/core/ButtonGroup";const So=(e,{radius:t,color:r,gradient:n,variant:s,autoContrast:i,size:a})=>{const d=e.variantColorResolver({color:r||e.primaryColor,theme:e,gradient:n,variant:s||"filled",autoContrast:i});return{groupSection:{"--section-height":F(a,"section-height"),"--section-padding-x":F(a,"section-padding-x"),"--section-fz":a!=null&&a.includes("compact")?le(a.replace("compact-","")):le(a),"--section-radius":t===void 0?void 0:je(t),"--section-bg":r||s?d.background:void 0,"--section-color":d.color,"--section-bd":r||s?d.border:void 0}}},Je=W((e,t)=>{const r=A("ButtonGroupSection",null,e),{className:n,style:s,classNames:i,styles:a,unstyled:d,vars:l,variant:f,gradient:u,radius:c,autoContrast:p,attributes:x,...g}=r,h=M({name:"ButtonGroupSection",props:r,classes:oe,className:n,style:s,classNames:i,styles:a,unstyled:d,attributes:x,vars:l,varsResolver:So,rootSelector:"groupSection"});return o.jsx(S,{...h("groupSection"),ref:t,variant:f,...g})});Je.classes=oe;Je.displayName="@mantine/core/ButtonGroupSection";const To={in:{opacity:1,transform:`translate(-50%, calc(-50% + ${m(1)}))`},out:{opacity:0,transform:"translate(-50%, -200%)"},common:{transformOrigin:"center"},transitionProperty:"transform, opacity"},ko=(e,{radius:t,color:r,gradient:n,variant:s,size:i,justify:a,autoContrast:d})=>{const l=e.variantColorResolver({color:r||e.primaryColor,theme:e,gradient:n,variant:s||"filled",autoContrast:d});return{root:{"--button-justify":a,"--button-height":F(i,"button-height"),"--button-padding-x":F(i,"button-padding-x"),"--button-fz":i!=null&&i.includes("compact")?le(i.replace("compact-","")):le(i),"--button-radius":t===void 0?void 0:je(t),"--button-bg":r||s?l.background:void 0,"--button-hover":r||s?l.hover:void 0,"--button-color":l.color,"--button-bd":r||s?l.border:void 0,"--button-hover-color":r||s?l.hoverColor:void 0}}},U=Z((e,t)=>{const r=A("Button",null,e),{style:n,vars:s,className:i,color:a,disabled:d,children:l,leftSection:f,rightSection:u,fullWidth:c,variant:p,radius:x,loading:g,loaderProps:h,gradient:b,classNames:C,styles:T,unstyled:w,"data-disabled":j,autoContrast:$,mod:N,attributes:k,...P}=r,B=M({name:"Button",props:r,classes:oe,className:i,style:n,classNames:C,styles:T,unstyled:w,attributes:k,vars:s,varsResolver:ko}),D=!!f,Te=!!u;return o.jsxs(qe,{ref:t,...B("root",{active:!d&&!g&&!j}),unstyled:w,variant:p,disabled:d||g,mod:[{disabled:d||j,loading:g,block:c,"with-left-section":D,"with-right-section":Te},N],...P,children:[typeof g=="boolean"&&o.jsx(Zt,{mounted:g,transition:To,duration:150,children:ke=>o.jsx(S,{component:"span",...B("loader",{style:ke}),"aria-hidden":!0,children:o.jsx($e,{color:"var(--button-color)",size:"calc(var(--button-height) / 1.8)",...h})})}),o.jsxs("span",{...B("inner"),children:[f&&o.jsx(S,{component:"span",...B("section"),mod:{position:"left"},children:f}),o.jsx(S,{component:"span",mod:{loading:g},...B("label"),children:l}),u&&o.jsx(S,{component:"span",...B("section"),mod:{position:"right"},children:u})]})]})});U.classes=oe;U.displayName="@mantine/core/Button";U.Group=Ze;U.GroupSection=Je;const[Ro,No]=Pt("Card component was not found in tree");var et={root:"m_e615b15f",section:"m_599a2148"};const Se=Z((e,t)=>{const r=A("CardSection",null,e),{classNames:n,className:s,style:i,styles:a,vars:d,withBorder:l,inheritPadding:f,mod:u,...c}=r,p=No();return o.jsx(S,{ref:t,mod:[{"with-border":l,"inherit-padding":f},u],...p.getStyles("section",{className:s,style:i,styles:a,classNames:n}),...c})});Se.classes=et;Se.displayName="@mantine/core/CardSection";const Go=(e,{padding:t})=>({root:{"--card-padding":_(t)}}),E=Z((e,t)=>{const r=A("Card",null,e),{classNames:n,className:s,style:i,styles:a,unstyled:d,vars:l,children:f,padding:u,attributes:c,...p}=r,x=M({name:"Card",props:r,classes:et,className:s,style:i,classNames:n,styles:a,unstyled:d,attributes:c,vars:l,varsResolver:Go}),g=v.Children.toArray(f),h=g.map((b,C)=>typeof b=="object"&&b&&"type"in b&&b.type===Se?v.cloneElement(b,{"data-first-section":C===0||void 0,"data-last-section":C===g.length-1||void 0}):b);return o.jsx(Ro,{value:{getStyles:x},children:o.jsx(Qe,{ref:t,unstyled:d,...x("root"),...p,children:h})})});E.classes=et;E.displayName="@mantine/core/Card";E.Section=Se;var ar={root:"m_7485cace"};const Ao=(e,{size:t,fluid:r})=>({root:{"--container-size":r?void 0:F(t,"container-size")}}),I=W((e,t)=>{const r=A("Container",null,e),{classNames:n,className:s,style:i,styles:a,unstyled:d,vars:l,fluid:f,mod:u,attributes:c,strategy:p,...x}=r,g=M({name:"Container",classes:ar,props:r,className:s,style:i,classNames:n,styles:a,unstyled:d,attributes:c,vars:l,varsResolver:Ao});return o.jsx(S,{ref:t,mod:[{fluid:f,strategy:p||"block"},u],...g("root"),...x})});I.classes=ar;I.displayName="@mantine/core/Container";const[gt,dr]=Pt("Grid component was not found in tree"),Ie=(e,t)=>e==="content"?"auto":e==="auto"?"0rem":e?`${100/(t/e)}%`:void 0,ht=(e,t,r)=>r||e==="auto"?"100%":e==="content"?"unset":Ie(e,t),xt=(e,t)=>{if(e)return e==="auto"||t?"1":"auto"},yt=(e,t)=>e===0?"0":e?`${100/(t/e)}%`:void 0;function zo({span:e,order:t,offset:r,selector:n}){var x;const s=O(),i=dr(),a=i.breakpoints||s.breakpoints,l=V(e)===void 0?12:V(e),f=q({"--col-order":(x=V(t))==null?void 0:x.toString(),"--col-flex-grow":xt(l,i.grow),"--col-flex-basis":Ie(l,i.columns),"--col-width":l==="content"?"auto":void 0,"--col-max-width":ht(l,i.columns,i.grow),"--col-offset":yt(V(r),i.columns)}),u=R(a).reduce((g,h)=>{var b;return g[h]||(g[h]={}),typeof t=="object"&&t[h]!==void 0&&(g[h]["--col-order"]=(b=t[h])==null?void 0:b.toString()),typeof e=="object"&&e[h]!==void 0&&(g[h]["--col-flex-grow"]=xt(e[h],i.grow),g[h]["--col-flex-basis"]=Ie(e[h],i.columns),g[h]["--col-width"]=e[h]==="content"?"auto":void 0,g[h]["--col-max-width"]=ht(e[h],i.columns,i.grow)),typeof r=="object"&&r[h]!==void 0&&(g[h]["--col-offset"]=yt(r[h],i.columns)),g},{}),p=He(R(u),a).filter(g=>R(u[g.value]).length>0).map(g=>({query:i.type==="container"?`mantine-grid (min-width: ${a[g.value]})`:`(min-width: ${a[g.value]})`,styles:u[g.value]}));return o.jsx(ne,{styles:f,media:i.type==="container"?void 0:p,container:i.type==="container"?p:void 0,selector:n})}var tt={container:"m_8478a6da",root:"m_410352e9",inner:"m_dee7bd2f",col:"m_96bdd299"};const Mo={span:12},rt=W((e,t)=>{const r=A("GridCol",Mo,e),{classNames:n,className:s,style:i,styles:a,vars:d,span:l,order:f,offset:u,...c}=r,p=dr(),x=pe();return o.jsxs(o.Fragment,{children:[o.jsx(zo,{selector:`.${x}`,span:l,order:f,offset:u}),o.jsx(S,{ref:t,...p.getStyles("col",{className:Q(s,x),style:i,classNames:n,styles:a}),...c})]})});rt.classes=tt;rt.displayName="@mantine/core/GridCol";function bt({gutter:e,selector:t,breakpoints:r,type:n}){const s=O(),i=r||s.breakpoints,a=q({"--grid-gutter":_(V(e))}),d=R(i).reduce((u,c)=>(u[c]||(u[c]={}),typeof e=="object"&&e[c]!==void 0&&(u[c]["--grid-gutter"]=_(e[c])),u),{}),f=He(R(d),i).filter(u=>R(d[u.value]).length>0).map(u=>({query:n==="container"?`mantine-grid (min-width: ${i[u.value]})`:`(min-width: ${i[u.value]})`,styles:d[u.value]}));return o.jsx(ne,{styles:a,media:n==="container"?void 0:f,container:n==="container"?f:void 0,selector:t})}const Bo={gutter:"md",grow:!1,columns:12},_o=(e,{justify:t,align:r,overflow:n})=>({root:{"--grid-justify":t,"--grid-align":r,"--grid-overflow":n}}),z=W((e,t)=>{const r=A("Grid",Bo,e),{classNames:n,className:s,style:i,styles:a,unstyled:d,vars:l,grow:f,gutter:u,columns:c,align:p,justify:x,children:g,breakpoints:h,type:b,attributes:C,...T}=r,w=M({name:"Grid",classes:tt,props:r,className:s,style:i,classNames:n,styles:a,unstyled:d,attributes:C,vars:l,varsResolver:_o}),j=pe();return b==="container"&&h?o.jsxs(gt,{value:{getStyles:w,grow:f,columns:c,breakpoints:h,type:b},children:[o.jsx(bt,{selector:`.${j}`,...r}),o.jsx("div",{...w("container"),children:o.jsx(S,{ref:t,...w("root",{className:j}),...T,children:o.jsx("div",{...w("inner"),children:g})})})]}):o.jsxs(gt,{value:{getStyles:w,grow:f,columns:c,breakpoints:h,type:b},children:[o.jsx(bt,{selector:`.${j}`,...r}),o.jsx(S,{ref:t,...w("root",{className:j}),...T,children:o.jsx("div",{...w("inner"),children:g})})]})});z.classes=tt;z.displayName="@mantine/core/Grid";z.Col=rt;function Fo({spacing:e,verticalSpacing:t,cols:r,selector:n}){var u;const s=O(),i=t===void 0?e:t,a=q({"--sg-spacing-x":_(V(e)),"--sg-spacing-y":_(V(i)),"--sg-cols":(u=V(r))==null?void 0:u.toString()}),d=R(s.breakpoints).reduce((c,p)=>(c[p]||(c[p]={}),typeof e=="object"&&e[p]!==void 0&&(c[p]["--sg-spacing-x"]=_(e[p])),typeof i=="object"&&i[p]!==void 0&&(c[p]["--sg-spacing-y"]=_(i[p])),typeof r=="object"&&r[p]!==void 0&&(c[p]["--sg-cols"]=r[p]),c),{}),f=He(R(d),s.breakpoints).filter(c=>R(d[c.value]).length>0).map(c=>({query:`(min-width: ${s.breakpoints[c.value]})`,styles:d[c.value]}));return o.jsx(ne,{styles:a,media:f,selector:n})}function _e(e){return typeof e=="object"&&e!==null?R(e):[]}function Po(e){return e.sort((t,r)=>de(t)-de(r))}function Eo({spacing:e,verticalSpacing:t,cols:r}){const n=Array.from(new Set([..._e(e),..._e(t),..._e(r)]));return Po(n)}function Lo({spacing:e,verticalSpacing:t,cols:r,selector:n}){var f;const s=t===void 0?e:t,i=q({"--sg-spacing-x":_(V(e)),"--sg-spacing-y":_(V(s)),"--sg-cols":(f=V(r))==null?void 0:f.toString()}),a=Eo({spacing:e,verticalSpacing:t,cols:r}),d=a.reduce((u,c)=>(u[c]||(u[c]={}),typeof e=="object"&&e[c]!==void 0&&(u[c]["--sg-spacing-x"]=_(e[c])),typeof s=="object"&&s[c]!==void 0&&(u[c]["--sg-spacing-y"]=_(s[c])),typeof r=="object"&&r[c]!==void 0&&(u[c]["--sg-cols"]=r[c]),u),{}),l=a.map(u=>({query:`simple-grid (min-width: ${u})`,styles:d[u]}));return o.jsx(ne,{styles:i,container:l,selector:n})}var lr={container:"m_925c2d2c",root:"m_2415a157"};const Io={cols:1,spacing:"md",type:"media"},re=W((e,t)=>{const r=A("SimpleGrid",Io,e),{classNames:n,className:s,style:i,styles:a,unstyled:d,vars:l,cols:f,verticalSpacing:u,spacing:c,type:p,attributes:x,...g}=r,h=M({name:"SimpleGrid",classes:lr,props:r,className:s,style:i,classNames:n,styles:a,unstyled:d,attributes:x,vars:l}),b=pe();return p==="container"?o.jsxs(o.Fragment,{children:[o.jsx(Lo,{...r,selector:`.${b}`}),o.jsx("div",{...h("container"),children:o.jsx(S,{ref:t,...h("root",{className:b}),...g})})]}):o.jsxs(o.Fragment,{children:[o.jsx(Fo,{...r,selector:`.${b}`}),o.jsx(S,{ref:t,...h("root",{className:b}),...g})]})});re.classes=lr;re.displayName="@mantine/core/SimpleGrid";var cr={root:"m_6d731127"};const Vo={gap:"md",align:"stretch",justify:"flex-start"},Ho=(e,{gap:t,align:r,justify:n})=>({root:{"--stack-gap":_(t),"--stack-align":r,"--stack-justify":n}}),L=W((e,t)=>{const r=A("Stack",Vo,e),{classNames:n,className:s,style:i,styles:a,unstyled:d,vars:l,align:f,justify:u,gap:c,variant:p,attributes:x,...g}=r,h=M({name:"Stack",props:r,classes:cr,className:s,style:i,classNames:n,styles:a,unstyled:d,attributes:x,vars:l,varsResolver:Ho});return o.jsx(S,{ref:t,...h("root"),variant:p,...g})});L.classes=cr;L.displayName="@mantine/core/Stack";const Oo=["h1","h2","h3","h4","h5","h6"],Wo=["xs","sm","md","lg","xl"];function Do(e,t){const r=t!==void 0?t:`h${e}`;return Oo.includes(r)?{fontSize:`var(--mantine-${r}-font-size)`,fontWeight:`var(--mantine-${r}-font-weight)`,lineHeight:`var(--mantine-${r}-line-height)`}:Wo.includes(r)?{fontSize:`var(--mantine-font-size-${r})`,fontWeight:`var(--mantine-h${e}-font-weight)`,lineHeight:`var(--mantine-h${e}-line-height)`}:{fontSize:m(r),fontWeight:`var(--mantine-h${e}-font-weight)`,lineHeight:`var(--mantine-h${e}-line-height)`}}var ur={root:"m_8a5d1357"};const Yo={order:1},Uo=(e,{order:t,size:r,lineClamp:n,textWrap:s})=>{const i=Do(t||1,r);return{root:{"--title-fw":i.fontWeight,"--title-lh":i.lineHeight,"--title-fz":i.fontSize,"--title-line-clamp":typeof n=="number"?n.toString():void 0,"--title-text-wrap":s}}},G=W((e,t)=>{const r=A("Title",Yo,e),{classNames:n,className:s,style:i,styles:a,unstyled:d,order:l,vars:f,size:u,variant:c,lineClamp:p,textWrap:x,mod:g,attributes:h,...b}=r,C=M({name:"Title",props:r,classes:ur,className:s,style:i,classNames:n,styles:a,unstyled:d,attributes:h,vars:f,varsResolver:Uo});return[1,2,3,4,5,6].includes(l)?o.jsx(S,{...C("root"),component:`h${l}`,variant:c,ref:t,mod:[{order:l,"data-line-clamp":typeof p=="number"},g],size:u,...b}):null});G.classes=ur;G.displayName="@mantine/core/Title";const Xo={fontFamily:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',primaryColor:"blue",colors:{dark:["#F9FAFB","#F3F4F6","#E5E7EB","#D1D5DB","#9CA3AF","#6B7280","#535862","#374151","#1F2937","#181D27"]},headings:{fontFamily:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',sizes:{h1:{fontSize:"2.25rem",lineHeight:"2.5rem"},h2:{fontSize:"1.875rem",lineHeight:"2.25rem"},h3:{fontSize:"1.5rem",lineHeight:"2rem"},h4:{fontSize:"1.25rem",lineHeight:"1.75rem"},h5:{fontSize:"1.125rem",lineHeight:"1.75rem"},h6:{fontSize:"1rem",lineHeight:"1.5rem"}}}},Jo={title:"Components/Mantine Layout",parameters:{layout:"fullscreen",docs:{description:{component:"Layout components using Mantine Core for consistent page structures. These provide a solid foundation for building responsive layouts."}}},decorators:[e=>o.jsx(Wt,{theme:Xo,children:o.jsx(e,{})})],tags:["autodocs"]},xe={render:()=>o.jsx("div",{style:{backgroundColor:"#f3f4f6",minHeight:"100vh",padding:"20px"},children:o.jsxs("div",{style:{marginBottom:"32px"},children:[o.jsx(G,{order:3,mb:"md",children:"Mantine Container Sizes"}),o.jsxs(L,{gap:"md",children:[o.jsx(I,{size:"xs",p:"md",style:{backgroundColor:"#e5e7eb",border:"1px dashed #9ca3af"},children:o.jsx(y,{children:"Container XS (max-width: 540px)"})}),o.jsx(I,{size:"sm",p:"md",style:{backgroundColor:"#e5e7eb",border:"1px dashed #9ca3af"},children:o.jsx(y,{children:"Container SM (max-width: 720px)"})}),o.jsx(I,{size:"md",p:"md",style:{backgroundColor:"#e5e7eb",border:"1px dashed #9ca3af"},children:o.jsx(y,{children:"Container MD (max-width: 960px)"})}),o.jsx(I,{size:"lg",p:"md",style:{backgroundColor:"#e5e7eb",border:"1px dashed #9ca3af"},children:o.jsx(y,{children:"Container LG (max-width: 1140px)"})}),o.jsx(I,{size:"xl",p:"md",style:{backgroundColor:"#e5e7eb",border:"1px dashed #9ca3af"},children:o.jsx(y,{children:"Container XL (max-width: 1320px)"})})]})]})}),parameters:{docs:{description:{story:"Mantine Container component with different size variants for consistent page width management."}}}},ye={render:()=>o.jsxs(I,{size:"lg",p:"md",children:[o.jsx(G,{order:3,mb:"lg",children:"Mantine Grid Layouts"}),o.jsxs("div",{style:{marginBottom:"32px"},children:[o.jsx(G,{order:4,mb:"md",children:"2 Column Grid"}),o.jsxs(z,{children:[o.jsx(z.Col,{span:6,children:o.jsx("div",{style:{backgroundColor:"#dbeafe",padding:"16px",borderRadius:"8px",textAlign:"center"},children:o.jsx(y,{children:"Column 1"})})}),o.jsx(z.Col,{span:6,children:o.jsx("div",{style:{backgroundColor:"#dbeafe",padding:"16px",borderRadius:"8px",textAlign:"center"},children:o.jsx(y,{children:"Column 2"})})})]})]}),o.jsxs("div",{style:{marginBottom:"32px"},children:[o.jsx(G,{order:4,mb:"md",children:"3 Column Grid"}),o.jsxs(z,{children:[o.jsx(z.Col,{span:4,children:o.jsx("div",{style:{backgroundColor:"#dcfce7",padding:"16px",borderRadius:"8px",textAlign:"center"},children:o.jsx(y,{children:"Column 1"})})}),o.jsx(z.Col,{span:4,children:o.jsx("div",{style:{backgroundColor:"#dcfce7",padding:"16px",borderRadius:"8px",textAlign:"center"},children:o.jsx(y,{children:"Column 2"})})}),o.jsx(z.Col,{span:4,children:o.jsx("div",{style:{backgroundColor:"#dcfce7",padding:"16px",borderRadius:"8px",textAlign:"center"},children:o.jsx(y,{children:"Column 3"})})})]})]}),o.jsxs("div",{style:{marginBottom:"32px"},children:[o.jsx(G,{order:4,mb:"md",children:"Responsive Grid"}),o.jsxs(z,{children:[o.jsx(z.Col,{span:{base:12,sm:6,md:4,lg:3},children:o.jsx("div",{style:{backgroundColor:"#fef3c7",padding:"16px",borderRadius:"8px",textAlign:"center"},children:o.jsx(y,{children:"Responsive 1"})})}),o.jsx(z.Col,{span:{base:12,sm:6,md:4,lg:3},children:o.jsx("div",{style:{backgroundColor:"#fef3c7",padding:"16px",borderRadius:"8px",textAlign:"center"},children:o.jsx(y,{children:"Responsive 2"})})}),o.jsx(z.Col,{span:{base:12,sm:6,md:4,lg:3},children:o.jsx("div",{style:{backgroundColor:"#fef3c7",padding:"16px",borderRadius:"8px",textAlign:"center"},children:o.jsx(y,{children:"Responsive 3"})})}),o.jsx(z.Col,{span:{base:12,sm:6,md:4,lg:3},children:o.jsx("div",{style:{backgroundColor:"#fef3c7",padding:"16px",borderRadius:"8px",textAlign:"center"},children:o.jsx(y,{children:"Responsive 4"})})})]})]}),o.jsxs("div",{children:[o.jsx(G,{order:4,mb:"md",children:"SimpleGrid (Auto-fit)"}),o.jsxs(re,{cols:{base:1,sm:2,lg:3},spacing:"md",children:[o.jsx("div",{style:{backgroundColor:"#f3e8ff",padding:"16px",borderRadius:"8px",textAlign:"center"},children:o.jsx(y,{children:"Auto Item 1"})}),o.jsx("div",{style:{backgroundColor:"#f3e8ff",padding:"16px",borderRadius:"8px",textAlign:"center"},children:o.jsx(y,{children:"Auto Item 2"})}),o.jsx("div",{style:{backgroundColor:"#f3e8ff",padding:"16px",borderRadius:"8px",textAlign:"center"},children:o.jsx(y,{children:"Auto Item 3"})})]})]})]}),parameters:{docs:{description:{story:"Mantine Grid and SimpleGrid components with responsive configurations."}}}},be={render:()=>o.jsxs(I,{size:"lg",p:"md",children:[o.jsx(G,{order:3,mb:"lg",children:"Mantine Card Components"}),o.jsxs(re,{cols:{base:1,sm:2},spacing:"lg",mb:"xl",children:[o.jsxs(E,{shadow:"sm",padding:"lg",radius:"md",withBorder:!0,children:[o.jsx(E.Section,{children:o.jsx("div",{style:{height:"120px",backgroundColor:"#f8fafc",display:"flex",alignItems:"center",justifyContent:"center"},children:o.jsx(y,{c:"dimmed",children:"Image Area"})})}),o.jsxs(X,{justify:"space-between",mt:"md",mb:"xs",children:[o.jsx(y,{fw:500,children:"Card with Image Section"}),o.jsx(we,{color:"blue",variant:"light",children:"Featured"})]}),o.jsx(y,{size:"sm",c:"dimmed",children:"This is a card with an image section at the top, followed by content and actions."}),o.jsx(U,{color:"blue",fullWidth:!0,mt:"md",radius:"md",children:"View Details"})]}),o.jsxs(E,{shadow:"sm",padding:"lg",radius:"md",withBorder:!0,children:[o.jsxs(X,{justify:"space-between",mb:"xs",children:[o.jsx(y,{fw:500,children:"Simple Card"}),o.jsx(we,{color:"green",variant:"light",children:"Available"})]}),o.jsx(y,{size:"sm",c:"dimmed",mb:"md",children:"A simple card without image section, focusing on content and actions."}),o.jsxs(X,{justify:"space-between",children:[o.jsx(U,{variant:"light",color:"gray",size:"sm",children:"Cancel"}),o.jsx(U,{color:"green",size:"sm",children:"Confirm"})]})]}),o.jsxs(E,{shadow:"md",padding:"xl",radius:"lg",style:{background:"linear-gradient(45deg, #667eea 0%, #764ba2 100%)"},children:[o.jsx(y,{c:"white",fw:700,size:"lg",mb:"sm",children:"Premium Card"}),o.jsx(y,{c:"white",size:"sm",mb:"md",children:"This card has a gradient background and elevated shadow for premium content."}),o.jsx(U,{color:"white",variant:"filled",children:"Upgrade Now"})]}),o.jsx(E,{shadow:"sm",padding:"lg",radius:"md",withBorder:!0,children:o.jsxs(L,{gap:"md",children:[o.jsxs(X,{justify:"space-between",children:[o.jsx(y,{fw:500,children:"Stats Card"}),o.jsx(y,{size:"xs",c:"dimmed",children:"Last 30 days"})]}),o.jsxs(re,{cols:2,children:[o.jsxs("div",{style:{textAlign:"center"},children:[o.jsx(y,{size:"xl",fw:700,c:"blue",children:"1,234"}),o.jsx(y,{size:"xs",c:"dimmed",children:"Total Users"})]}),o.jsxs("div",{style:{textAlign:"center"},children:[o.jsx(y,{size:"xl",fw:700,c:"green",children:"5,678"}),o.jsx(y,{size:"xs",c:"dimmed",children:"Total Sales"})]})]})]})})]})]}),parameters:{docs:{description:{story:"Mantine Card component with different variants and use cases."}}}},ve={render:()=>o.jsxs(I,{size:"lg",p:"md",children:[o.jsx(G,{order:3,mb:"lg",children:"Mantine Flex Layouts"}),o.jsxs(L,{gap:"xl",children:[o.jsxs("div",{children:[o.jsx(G,{order:4,mb:"md",children:"Flex with Center Alignment"}),o.jsxs(Ke,{direction:"row",justify:"center",align:"center",gap:"md",p:"md",style:{backgroundColor:"#f3f4f6",borderRadius:"8px",minHeight:"80px"},children:[o.jsx("div",{style:{backgroundColor:"#3b82f6",color:"white",padding:"12px",borderRadius:"6px"},children:o.jsx(y,{c:"white",children:"Item 1"})}),o.jsx("div",{style:{backgroundColor:"#3b82f6",color:"white",padding:"12px",borderRadius:"6px"},children:o.jsx(y,{c:"white",children:"Item 2"})}),o.jsx("div",{style:{backgroundColor:"#3b82f6",color:"white",padding:"12px",borderRadius:"6px"},children:o.jsx(y,{c:"white",children:"Item 3"})})]})]}),o.jsxs("div",{children:[o.jsx(G,{order:4,mb:"md",children:"Group with Space Between"}),o.jsxs(X,{justify:"space-between",p:"md",style:{backgroundColor:"#f3f4f6",borderRadius:"8px"},children:[o.jsx("div",{style:{backgroundColor:"#10b981",color:"white",padding:"12px",borderRadius:"6px"},children:o.jsx(y,{c:"white",children:"Start"})}),o.jsx("div",{style:{backgroundColor:"#10b981",color:"white",padding:"12px",borderRadius:"6px"},children:o.jsx(y,{c:"white",children:"Middle"})}),o.jsx("div",{style:{backgroundColor:"#10b981",color:"white",padding:"12px",borderRadius:"6px"},children:o.jsx(y,{c:"white",children:"End"})})]})]}),o.jsxs("div",{children:[o.jsx(G,{order:4,mb:"md",children:"Stack (Column Layout)"}),o.jsxs(L,{gap:"sm",style:{backgroundColor:"#f3f4f6",padding:"16px",borderRadius:"8px",maxWidth:"200px"},children:[o.jsx("div",{style:{backgroundColor:"#f59e0b",color:"white",padding:"12px",borderRadius:"6px",textAlign:"center"},children:o.jsx(y,{c:"white",children:"Item 1"})}),o.jsx("div",{style:{backgroundColor:"#f59e0b",color:"white",padding:"12px",borderRadius:"6px",textAlign:"center"},children:o.jsx(y,{c:"white",children:"Item 2"})}),o.jsx("div",{style:{backgroundColor:"#f59e0b",color:"white",padding:"12px",borderRadius:"6px",textAlign:"center"},children:o.jsx(y,{c:"white",children:"Item 3"})})]})]})]})]}),parameters:{docs:{description:{story:"Mantine Flex, Group, and Stack components for flexible layouts."}}}},Ce={render:()=>o.jsx("div",{style:{backgroundColor:"#f9fafb",minHeight:"100vh"},children:o.jsx(I,{size:"lg",p:"xl",children:o.jsxs(L,{gap:"xl",children:[o.jsxs("div",{style:{textAlign:"center"},children:[o.jsx(G,{order:1,mb:"md",children:"Mantine Layout Demo"}),o.jsx(y,{size:"lg",c:"dimmed",children:"A complete layout built with Mantine's Container, Grid, Card, and Flex components"})]}),o.jsxs(re,{cols:{base:1,md:3},spacing:"lg",children:[o.jsx(E,{shadow:"sm",padding:"lg",radius:"md",withBorder:!0,style:{cursor:"pointer"},children:o.jsxs(L,{gap:"md",children:[o.jsx("div",{style:{width:"48px",height:"48px",backgroundColor:"#3b82f6",borderRadius:"8px"}}),o.jsxs("div",{children:[o.jsx(G,{order:3,mb:"xs",children:"Feature 1"}),o.jsx(y,{size:"sm",c:"dimmed",children:"Description of the first feature with some details about its functionality."})]})]})}),o.jsx(E,{shadow:"sm",padding:"lg",radius:"md",withBorder:!0,style:{cursor:"pointer"},children:o.jsxs(L,{gap:"md",children:[o.jsx("div",{style:{width:"48px",height:"48px",backgroundColor:"#10b981",borderRadius:"8px"}}),o.jsxs("div",{children:[o.jsx(G,{order:3,mb:"xs",children:"Feature 2"}),o.jsx(y,{size:"sm",c:"dimmed",children:"Description of the second feature with some details about its functionality."})]})]})}),o.jsx(E,{shadow:"sm",padding:"lg",radius:"md",withBorder:!0,style:{cursor:"pointer"},children:o.jsxs(L,{gap:"md",children:[o.jsx("div",{style:{width:"48px",height:"48px",backgroundColor:"#f59e0b",borderRadius:"8px"}}),o.jsxs("div",{children:[o.jsx(G,{order:3,mb:"xs",children:"Feature 3"}),o.jsx(y,{size:"sm",c:"dimmed",children:"Description of the third feature with some details about its functionality."})]})]})})]}),o.jsxs(z,{children:[o.jsx(z.Col,{span:{base:12,lg:8},children:o.jsx(E,{shadow:"md",padding:"xl",radius:"lg",withBorder:!0,children:o.jsxs(L,{gap:"md",children:[o.jsx(G,{order:2,children:"Main Content"}),o.jsx(y,{children:"This is the main content area built using a combination of Mantine's Grid and Card components. The layout is responsive and adapts to different screen sizes automatically."}),o.jsxs(X,{justify:"space-between",align:"center",children:[o.jsx(y,{size:"sm",c:"dimmed",children:"Updated 2 hours ago"}),o.jsx(U,{color:"blue",children:"Read More"})]})]})})}),o.jsx(z.Col,{span:{base:12,lg:4},children:o.jsx(E,{shadow:"sm",padding:"lg",radius:"md",withBorder:!0,children:o.jsxs(L,{gap:"md",children:[o.jsx(G,{order:3,children:"Sidebar"}),o.jsxs("div",{style:{padding:"12px",backgroundColor:"#f3f4f6",borderRadius:"6px"},children:[o.jsx(y,{size:"sm",fw:500,mb:"xs",children:"Quick Stat"}),o.jsx(y,{size:"xl",fw:700,c:"blue",children:"1,234"})]}),o.jsxs("div",{style:{padding:"12px",backgroundColor:"#f3f4f6",borderRadius:"6px"},children:[o.jsx(y,{size:"sm",fw:500,mb:"xs",children:"Another Stat"}),o.jsx(y,{size:"xl",fw:700,c:"green",children:"5,678"})]})]})})})]})]})})}),parameters:{docs:{description:{story:"Real-world example showing how Mantine layout components work together to build complete page layouts."}}}};var vt,Ct,wt;xe.parameters={...xe.parameters,docs:{...(vt=xe.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  render: () => <div style={{
    backgroundColor: '#f3f4f6',
    minHeight: '100vh',
    padding: '20px'
  }}>
      <div style={{
      marginBottom: '32px'
    }}>
        <Title order={3} mb="md">Mantine Container Sizes</Title>
        <Stack gap="md">
          <Container size="xs" p="md" style={{
          backgroundColor: '#e5e7eb',
          border: '1px dashed #9ca3af'
        }}>
            <Text>Container XS (max-width: 540px)</Text>
          </Container>
          <Container size="sm" p="md" style={{
          backgroundColor: '#e5e7eb',
          border: '1px dashed #9ca3af'
        }}>
            <Text>Container SM (max-width: 720px)</Text>
          </Container>
          <Container size="md" p="md" style={{
          backgroundColor: '#e5e7eb',
          border: '1px dashed #9ca3af'
        }}>
            <Text>Container MD (max-width: 960px)</Text>
          </Container>
          <Container size="lg" p="md" style={{
          backgroundColor: '#e5e7eb',
          border: '1px dashed #9ca3af'
        }}>
            <Text>Container LG (max-width: 1140px)</Text>
          </Container>
          <Container size="xl" p="md" style={{
          backgroundColor: '#e5e7eb',
          border: '1px dashed #9ca3af'
        }}>
            <Text>Container XL (max-width: 1320px)</Text>
          </Container>
        </Stack>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Mantine Container component with different size variants for consistent page width management.'
      }
    }
  }
}`,...(wt=(Ct=xe.parameters)==null?void 0:Ct.docs)==null?void 0:wt.source}}};var jt,$t,St;ye.parameters={...ye.parameters,docs:{...(jt=ye.parameters)==null?void 0:jt.docs,source:{originalSource:`{
  render: () => <Container size="lg" p="md">
      <Title order={3} mb="lg">Mantine Grid Layouts</Title>
      
      <div style={{
      marginBottom: '32px'
    }}>
        <Title order={4} mb="md">2 Column Grid</Title>
        <Grid>
          <Grid.Col span={6}>
            <div style={{
            backgroundColor: '#dbeafe',
            padding: '16px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
              <Text>Column 1</Text>
            </div>
          </Grid.Col>
          <Grid.Col span={6}>
            <div style={{
            backgroundColor: '#dbeafe',
            padding: '16px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
              <Text>Column 2</Text>
            </div>
          </Grid.Col>
        </Grid>
      </div>

      <div style={{
      marginBottom: '32px'
    }}>
        <Title order={4} mb="md">3 Column Grid</Title>
        <Grid>
          <Grid.Col span={4}>
            <div style={{
            backgroundColor: '#dcfce7',
            padding: '16px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
              <Text>Column 1</Text>
            </div>
          </Grid.Col>
          <Grid.Col span={4}>
            <div style={{
            backgroundColor: '#dcfce7',
            padding: '16px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
              <Text>Column 2</Text>
            </div>
          </Grid.Col>
          <Grid.Col span={4}>
            <div style={{
            backgroundColor: '#dcfce7',
            padding: '16px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
              <Text>Column 3</Text>
            </div>
          </Grid.Col>
        </Grid>
      </div>

      <div style={{
      marginBottom: '32px'
    }}>
        <Title order={4} mb="md">Responsive Grid</Title>
        <Grid>
          <Grid.Col span={{
          base: 12,
          sm: 6,
          md: 4,
          lg: 3
        }}>
            <div style={{
            backgroundColor: '#fef3c7',
            padding: '16px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
              <Text>Responsive 1</Text>
            </div>
          </Grid.Col>
          <Grid.Col span={{
          base: 12,
          sm: 6,
          md: 4,
          lg: 3
        }}>
            <div style={{
            backgroundColor: '#fef3c7',
            padding: '16px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
              <Text>Responsive 2</Text>
            </div>
          </Grid.Col>
          <Grid.Col span={{
          base: 12,
          sm: 6,
          md: 4,
          lg: 3
        }}>
            <div style={{
            backgroundColor: '#fef3c7',
            padding: '16px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
              <Text>Responsive 3</Text>
            </div>
          </Grid.Col>
          <Grid.Col span={{
          base: 12,
          sm: 6,
          md: 4,
          lg: 3
        }}>
            <div style={{
            backgroundColor: '#fef3c7',
            padding: '16px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
              <Text>Responsive 4</Text>
            </div>
          </Grid.Col>
        </Grid>
      </div>

      <div>
        <Title order={4} mb="md">SimpleGrid (Auto-fit)</Title>
        <SimpleGrid cols={{
        base: 1,
        sm: 2,
        lg: 3
      }} spacing="md">
          <div style={{
          backgroundColor: '#f3e8ff',
          padding: '16px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
            <Text>Auto Item 1</Text>
          </div>
          <div style={{
          backgroundColor: '#f3e8ff',
          padding: '16px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
            <Text>Auto Item 2</Text>
          </div>
          <div style={{
          backgroundColor: '#f3e8ff',
          padding: '16px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
            <Text>Auto Item 3</Text>
          </div>
        </SimpleGrid>
      </div>
    </Container>,
  parameters: {
    docs: {
      description: {
        story: 'Mantine Grid and SimpleGrid components with responsive configurations.'
      }
    }
  }
}`,...(St=($t=ye.parameters)==null?void 0:$t.docs)==null?void 0:St.source}}};var Tt,kt,Rt;be.parameters={...be.parameters,docs:{...(Tt=be.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  render: () => <Container size="lg" p="md">
      <Title order={3} mb="lg">Mantine Card Components</Title>
      
      <SimpleGrid cols={{
      base: 1,
      sm: 2
    }} spacing="lg" mb="xl">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <div style={{
            height: '120px',
            backgroundColor: '#f8fafc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
              <Text c="dimmed">Image Area</Text>
            </div>
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Card with Image Section</Text>
            <Badge color="blue" variant="light">
              Featured
            </Badge>
          </Group>

          <Text size="sm" c="dimmed">
            This is a card with an image section at the top, followed by content and actions.
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            View Details
          </Button>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group justify="space-between" mb="xs">
            <Text fw={500}>Simple Card</Text>
            <Badge color="green" variant="light">
              Available
            </Badge>
          </Group>

          <Text size="sm" c="dimmed" mb="md">
            A simple card without image section, focusing on content and actions.
          </Text>

          <Group justify="space-between">
            <Button variant="light" color="gray" size="sm">
              Cancel
            </Button>
            <Button color="green" size="sm">
              Confirm
            </Button>
          </Group>
        </Card>

        <Card shadow="md" padding="xl" radius="lg" style={{
        background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)'
      }}>
          <Text c="white" fw={700} size="lg" mb="sm">
            Premium Card
          </Text>
          <Text c="white" size="sm" mb="md">
            This card has a gradient background and elevated shadow for premium content.
          </Text>
          <Button color="white" variant="filled">
            Upgrade Now
          </Button>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack gap="md">
            <Group justify="space-between">
              <Text fw={500}>Stats Card</Text>
              <Text size="xs" c="dimmed">Last 30 days</Text>
            </Group>
            
            <SimpleGrid cols={2}>
              <div style={{
              textAlign: 'center'
            }}>
                <Text size="xl" fw={700} c="blue">
                  1,234
                </Text>
                <Text size="xs" c="dimmed">
                  Total Users
                </Text>
              </div>
              <div style={{
              textAlign: 'center'
            }}>
                <Text size="xl" fw={700} c="green">
                  5,678
                </Text>
                <Text size="xs" c="dimmed">
                  Total Sales
                </Text>
              </div>
            </SimpleGrid>
          </Stack>
        </Card>
      </SimpleGrid>
    </Container>,
  parameters: {
    docs: {
      description: {
        story: 'Mantine Card component with different variants and use cases.'
      }
    }
  }
}`,...(Rt=(kt=be.parameters)==null?void 0:kt.docs)==null?void 0:Rt.source}}};var Nt,Gt,At;ve.parameters={...ve.parameters,docs:{...(Nt=ve.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
  render: () => <Container size="lg" p="md">
      <Title order={3} mb="lg">Mantine Flex Layouts</Title>
      
      <Stack gap="xl">
        <div>
          <Title order={4} mb="md">Flex with Center Alignment</Title>
          <Flex direction="row" justify="center" align="center" gap="md" p="md" style={{
          backgroundColor: '#f3f4f6',
          borderRadius: '8px',
          minHeight: '80px'
        }}>
            <div style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '12px',
            borderRadius: '6px'
          }}>
              <Text c="white">Item 1</Text>
            </div>
            <div style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '12px',
            borderRadius: '6px'
          }}>
              <Text c="white">Item 2</Text>
            </div>
            <div style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '12px',
            borderRadius: '6px'
          }}>
              <Text c="white">Item 3</Text>
            </div>
          </Flex>
        </div>

        <div>
          <Title order={4} mb="md">Group with Space Between</Title>
          <Group justify="space-between" p="md" style={{
          backgroundColor: '#f3f4f6',
          borderRadius: '8px'
        }}>
            <div style={{
            backgroundColor: '#10b981',
            color: 'white',
            padding: '12px',
            borderRadius: '6px'
          }}>
              <Text c="white">Start</Text>
            </div>
            <div style={{
            backgroundColor: '#10b981',
            color: 'white',
            padding: '12px',
            borderRadius: '6px'
          }}>
              <Text c="white">Middle</Text>
            </div>
            <div style={{
            backgroundColor: '#10b981',
            color: 'white',
            padding: '12px',
            borderRadius: '6px'
          }}>
              <Text c="white">End</Text>
            </div>
          </Group>
        </div>

        <div>
          <Title order={4} mb="md">Stack (Column Layout)</Title>
          <Stack gap="sm" style={{
          backgroundColor: '#f3f4f6',
          padding: '16px',
          borderRadius: '8px',
          maxWidth: '200px'
        }}>
            <div style={{
            backgroundColor: '#f59e0b',
            color: 'white',
            padding: '12px',
            borderRadius: '6px',
            textAlign: 'center'
          }}>
              <Text c="white">Item 1</Text>
            </div>
            <div style={{
            backgroundColor: '#f59e0b',
            color: 'white',
            padding: '12px',
            borderRadius: '6px',
            textAlign: 'center'
          }}>
              <Text c="white">Item 2</Text>
            </div>
            <div style={{
            backgroundColor: '#f59e0b',
            color: 'white',
            padding: '12px',
            borderRadius: '6px',
            textAlign: 'center'
          }}>
              <Text c="white">Item 3</Text>
            </div>
          </Stack>
        </div>
      </Stack>
    </Container>,
  parameters: {
    docs: {
      description: {
        story: 'Mantine Flex, Group, and Stack components for flexible layouts.'
      }
    }
  }
}`,...(At=(Gt=ve.parameters)==null?void 0:Gt.docs)==null?void 0:At.source}}};var zt,Mt,Bt;Ce.parameters={...Ce.parameters,docs:{...(zt=Ce.parameters)==null?void 0:zt.docs,source:{originalSource:`{
  render: () => <div style={{
    backgroundColor: '#f9fafb',
    minHeight: '100vh'
  }}>
      <Container size="lg" p="xl">
        <Stack gap="xl">
          <div style={{
          textAlign: 'center'
        }}>
            <Title order={1} mb="md">
              Mantine Layout Demo
            </Title>
            <Text size="lg" c="dimmed">
              A complete layout built with Mantine's Container, Grid, Card, and Flex components
            </Text>
          </div>

          <SimpleGrid cols={{
          base: 1,
          md: 3
        }} spacing="lg">
            <Card shadow="sm" padding="lg" radius="md" withBorder style={{
            cursor: 'pointer'
          }}>
              <Stack gap="md">
                <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#3b82f6',
                borderRadius: '8px'
              }}></div>
                <div>
                  <Title order={3} mb="xs">Feature 1</Title>
                  <Text size="sm" c="dimmed">
                    Description of the first feature with some details about its functionality.
                  </Text>
                </div>
              </Stack>
            </Card>

            <Card shadow="sm" padding="lg" radius="md" withBorder style={{
            cursor: 'pointer'
          }}>
              <Stack gap="md">
                <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#10b981',
                borderRadius: '8px'
              }}></div>
                <div>
                  <Title order={3} mb="xs">Feature 2</Title>
                  <Text size="sm" c="dimmed">
                    Description of the second feature with some details about its functionality.
                  </Text>
                </div>
              </Stack>
            </Card>

            <Card shadow="sm" padding="lg" radius="md" withBorder style={{
            cursor: 'pointer'
          }}>
              <Stack gap="md">
                <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#f59e0b',
                borderRadius: '8px'
              }}></div>
                <div>
                  <Title order={3} mb="xs">Feature 3</Title>
                  <Text size="sm" c="dimmed">
                    Description of the third feature with some details about its functionality.
                  </Text>
                </div>
              </Stack>
            </Card>
          </SimpleGrid>

          <Grid>
            <Grid.Col span={{
            base: 12,
            lg: 8
          }}>
              <Card shadow="md" padding="xl" radius="lg" withBorder>
                <Stack gap="md">
                  <Title order={2}>Main Content</Title>
                  <Text>
                    This is the main content area built using a combination of Mantine's Grid and Card components. 
                    The layout is responsive and adapts to different screen sizes automatically.
                  </Text>
                  <Group justify="space-between" align="center">
                    <Text size="sm" c="dimmed">Updated 2 hours ago</Text>
                    <Button color="blue">
                      Read More
                    </Button>
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>

            <Grid.Col span={{
            base: 12,
            lg: 4
          }}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Stack gap="md">
                  <Title order={3}>Sidebar</Title>
                  
                  <div style={{
                  padding: '12px',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '6px'
                }}>
                    <Text size="sm" fw={500} mb="xs">Quick Stat</Text>
                    <Text size="xl" fw={700} c="blue">1,234</Text>
                  </div>
                  
                  <div style={{
                  padding: '12px',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '6px'
                }}>
                    <Text size="sm" fw={500} mb="xs">Another Stat</Text>
                    <Text size="xl" fw={700} c="green">5,678</Text>
                  </div>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Real-world example showing how Mantine layout components work together to build complete page layouts.'
      }
    }
  }
}`,...(Bt=(Mt=Ce.parameters)==null?void 0:Mt.docs)==null?void 0:Bt.source}}};const ei=["ContainerExamples","GridExamples","CardExamples","FlexExamples","CombinedExample"];export{be as CardExamples,Ce as CombinedExample,xe as ContainerExamples,ve as FlexExamples,ye as GridExamples,ei as __namedExportsOrder,Jo as default};
