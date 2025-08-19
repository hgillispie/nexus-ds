import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as g}from"./index-DRjF_FHU.js";const ze=({size:s="md"})=>{const t=s==="lg"?24:20,a=s==="lg"?2:1.67;return e.jsx("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:s==="lg"?"M15 18L9 12L15 6":"M12.5 15L7.5 10L12.5 5",stroke:"currentColor",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round"})})},Ae=({size:s="md"})=>{const t=s==="lg"?24:20,a=s==="lg"?2:1.67;return e.jsx("svg",{width:t,height:t,viewBox:`0 0 ${t} ${t}`,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:s==="lg"?"M9 18L15 12L9 6":"M7.5 15L12.5 10L7.5 5",stroke:"currentColor",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round"})})},q=({direction:s,size:t="md",theme:a="primary",onClick:l,disabled:u=!1})=>{const h=s==="left"?ze:Ae;return e.jsx("button",{className:`carousel-arrow carousel-arrow--${s} carousel-arrow--${t} carousel-arrow--${a}`,onClick:l,disabled:u,"aria-label":`${s==="left"?"Previous":"Next"} slide`,children:e.jsx(h,{size:t})})},Ie=({currentSlide:s,totalSlides:t,size:a="md",theme:l="primary",onDotClick:u,disabled:h=!1})=>{const $=f=>{!h&&u&&f!==s&&u(f)},v=["carousel-dots",`carousel-dots--${a}`,`carousel-dots--${l}`].filter(Boolean).join(" ");return e.jsx("div",{className:v,role:"tablist","aria-label":"Slide navigation",children:Array.from({length:t},(f,n)=>{const x=n===s;return e.jsx("button",{className:`carousel-dot ${x?"carousel-dot--active":""}`,onClick:()=>$(n),disabled:h,role:"tab","aria-selected":x,"aria-label":`Go to slide ${n+1}`},n)})})},y=({slides:s,size:t="md",theme:a="primary",autoPlay:l=0,showArrows:u=!0,showDots:h=!0,altTexts:$=[],onSlideChange:v,className:f="",disabled:n=!1,...x})=>{const[d,Se]=g.useState(0),[Ee,N]=g.useState(!1),w=g.useRef(null),C=g.useRef(null),S=g.useRef(null),p=s.length,P=r=>{n||Ee||r===d||(N(!0),Se(r),v&&v(r),setTimeout(()=>N(!1),300))},R=()=>{const r=d===0?p-1:d-1;P(r)},M=()=>{const r=d===p-1?0:d+1;P(r)},be=r=>{n||(C.current=r.touches[0].clientX)},ke=r=>{n||(S.current=r.touches[0].clientX)},Te=()=>{if(n||C.current===null||S.current===null)return;const r=C.current-S.current;Math.abs(r)>50&&(r>0?M():R()),C.current=null,S.current=null};g.useEffect(()=>{if(l>0&&!n)return w.current=setInterval(()=>{M()},l),()=>{w.current&&clearInterval(w.current)}},[l,d,n,p]),g.useEffect(()=>()=>{w.current&&clearInterval(w.current)},[]);const je=["carousel",`carousel--${t}`,`carousel--${a}`,f].filter(Boolean).join(" "),De=(r,m)=>typeof r=="string"?e.jsx("img",{src:r,alt:$[m]||`Slide ${m+1}`,className:"carousel-image",loading:m===0?"eager":"lazy"}):r;return e.jsxs("div",{className:je,...x,onTouchStart:be,onTouchMove:ke,onTouchEnd:Te,children:[e.jsxs("div",{className:"carousel-container",children:[e.jsx("div",{className:"carousel-track",style:{transform:`translateX(-${d*100}%)`},children:s.map((r,m)=>e.jsx("div",{className:`carousel-slide ${m===d?"carousel-slide--active":""}`,"aria-hidden":m!==d,children:De(r,m)},m))}),u&&p>1&&e.jsxs(e.Fragment,{children:[e.jsx(q,{direction:"left",size:t,theme:a,onClick:R,disabled:n}),e.jsx(q,{direction:"right",size:t,theme:a,onClick:M,disabled:n})]})]}),h&&p>1&&e.jsx(Ie,{currentSlide:d,totalSlides:p,size:t,theme:a,onDotClick:P,disabled:n})]})};y.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{slides:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | React.ReactNode)[]"},description:"Array of image URLs or slide content"},size:{required:!1,tsType:{name:"union",raw:"'md' | 'lg'",elements:[{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of the carousel",defaultValue:{value:"'md'",computed:!1}},theme:{required:!1,tsType:{name:"union",raw:"'primary' | 'dark' | 'light'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"}]},description:"Theme variant",defaultValue:{value:"'primary'",computed:!1}},autoPlay:{required:!1,tsType:{name:"number"},description:"Auto-play interval in milliseconds (0 to disable)",defaultValue:{value:"0",computed:!1}},showArrows:{required:!1,tsType:{name:"boolean"},description:"Show navigation arrows",defaultValue:{value:"true",computed:!1}},showDots:{required:!1,tsType:{name:"boolean"},description:"Show pagination dots",defaultValue:{value:"true",computed:!1}},altTexts:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Custom alt text for images",defaultValue:{value:"[]",computed:!1}},onSlideChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Event handlers"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}}}};const $e={title:"Components/Carousel",component:y,parameters:{layout:"centered",docs:{description:{component:"A responsive carousel component with navigation arrows, pagination dots, auto-play functionality, and touch support."}}},tags:["autodocs"],argTypes:{slides:{description:"Array of image URLs or slide content",control:"object"},size:{description:"Size of the carousel",control:"select",options:["md","lg"]},theme:{description:"Theme variant for controls",control:"select",options:["primary","dark","light"]},autoPlay:{description:"Auto-play interval in milliseconds (0 to disable)",control:{type:"number",min:0,step:1e3}},showArrows:{description:"Show navigation arrows",control:"boolean"},showDots:{description:"Show pagination dots",control:"boolean"},disabled:{description:"Disabled state",control:"boolean"}}},o=['data:image/svg+xml,%3Csvg width="800" height="400" xmlns="http://www.w3.org/2000/svg"%3E%3Cg%3E%3Crect width="100%25" height="100%25" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" font-size="24" text-anchor="middle" alignment-baseline="middle" font-family="Arial, sans-serif" fill="%23666"%3ESlide 1%3C/text%3E%3C/g%3E%3C/svg%3E','data:image/svg+xml,%3Csvg width="800" height="400" xmlns="http://www.w3.org/2000/svg"%3E%3Cg%3E%3Crect width="100%25" height="100%25" fill="%23e0e0e0"/%3E%3Ctext x="50%25" y="50%25" font-size="24" text-anchor="middle" alignment-baseline="middle" font-family="Arial, sans-serif" fill="%23666"%3ESlide 2%3C/text%3E%3C/g%3E%3C/svg%3E','data:image/svg+xml,%3Csvg width="800" height="400" xmlns="http://www.w3.org/2000/svg"%3E%3Cg%3E%3Crect width="100%25" height="100%25" fill="%23d0d0d0"/%3E%3Ctext x="50%25" y="50%25" font-size="24" text-anchor="middle" alignment-baseline="middle" font-family="Arial, sans-serif" fill="%23666"%3ESlide 3%3C/text%3E%3C/g%3E%3C/svg%3E'],c=s=>{const[t,a]=g.useState(0);return e.jsxs("div",{style:{width:"640px",maxWidth:"100%"},children:[e.jsx(y,{...s,onSlideChange:l=>{a(l),console.log("Slide changed to:",l+1)}}),e.jsxs("p",{style:{marginTop:"16px",textAlign:"center",fontSize:"14px",color:"#666"},children:["Current slide: ",t+1," of ",s.slides.length]})]})},i={render:c,args:{slides:o,size:"md",theme:"primary",autoPlay:0,showArrows:!0,showDots:!0,disabled:!1}},E={render:c,args:{...i.args,size:"lg",slides:o},parameters:{docs:{description:{story:"Large size carousel with bigger navigation arrows and dots."}}}},b={render:c,args:{...i.args,theme:"dark",slides:o},parameters:{docs:{description:{story:"Dark theme with semi-transparent dark backgrounds for controls."}}}},k={render:c,args:{...i.args,theme:"light",slides:o},parameters:{docs:{description:{story:"Light theme with semi-transparent light backgrounds for controls."}}}},T={render:c,args:{...i.args,autoPlay:3e3,slides:o},parameters:{docs:{description:{story:"Auto-play carousel that advances every 3 seconds."}}}},j={render:c,args:{...i.args,showArrows:!1,slides:o},parameters:{docs:{description:{story:"Carousel without navigation arrows, controlled only by dots."}}}},D={render:c,args:{...i.args,showDots:!1,slides:o},parameters:{docs:{description:{story:"Carousel without pagination dots, controlled only by arrows."}}}},z={render:c,args:{...i.args,slides:[o[0]]},parameters:{docs:{description:{story:"Carousel with single slide - navigation controls are automatically hidden."}}}},A={render:c,args:{...i.args,slides:[...o,'data:image/svg+xml,%3Csvg width="800" height="400" xmlns="http://www.w3.org/2000/svg"%3E%3Cg%3E%3Crect width="100%25" height="100%25" fill="%23c0c0c0"/%3E%3Ctext x="50%25" y="50%25" font-size="24" text-anchor="middle" alignment-baseline="middle" font-family="Arial, sans-serif" fill="%23666"%3ESlide 4%3C/text%3E%3C/g%3E%3C/svg%3E','data:image/svg+xml,%3Csvg width="800" height="400" xmlns="http://www.w3.org/2000/svg"%3E%3Cg%3E%3Crect width="100%25" height="100%25" fill="%23b0b0b0"/%3E%3Ctext x="50%25" y="50%25" font-size="24" text-anchor="middle" alignment-baseline="middle" font-family="Arial, sans-serif" fill="%23666"%3ESlide 5%3C/text%3E%3C/g%3E%3C/svg%3E','data:image/svg+xml,%3Csvg width="800" height="400" xmlns="http://www.w3.org/2000/svg"%3E%3Cg%3E%3Crect width="100%25" height="100%25" fill="%23a0a0a0"/%3E%3Ctext x="50%25" y="50%25" font-size="24" text-anchor="middle" alignment-baseline="middle" font-family="Arial, sans-serif" fill="%23666"%3ESlide 6%3C/text%3E%3C/g%3E%3C/svg%3E']},parameters:{docs:{description:{story:"Carousel with many slides showing pagination dots behavior."}}}},I={render:c,args:{...i.args,disabled:!0,slides:o},parameters:{docs:{description:{story:"Disabled carousel - all interactions are prevented."}}}},L={render:()=>{const s=[{name:"Medium + Primary Theme",size:"md",theme:"primary"},{name:"Large + Primary Theme",size:"lg",theme:"primary"},{name:"Medium + Dark Theme",size:"md",theme:"dark"},{name:"Large + Dark Theme",size:"lg",theme:"dark"},{name:"Medium + Light Theme",size:"md",theme:"light"},{name:"Large + Light Theme",size:"lg",theme:"light"}];return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"48px",padding:"20px"},children:s.map((t,a)=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"16px"},children:[e.jsx("h4",{style:{margin:"0",fontSize:"16px",fontWeight:"600",textAlign:"center"},children:t.name}),e.jsx("div",{style:{width:"640px",maxWidth:"100%"},children:e.jsx(y,{slides:o,size:t.size,theme:t.theme,showArrows:!0,showDots:!0,autoPlay:0})})]},a))})},parameters:{docs:{description:{story:"Comprehensive showcase of all carousel variants matching the Figma design specifications."}}}},W={render:()=>{const s=[e.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"24px",fontWeight:"bold"},children:"Custom Slide 1"},"slide1"),e.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"24px",fontWeight:"bold"},children:"Custom Slide 2"},"slide2"),e.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"24px",fontWeight:"bold"},children:"Custom Slide 3"},"slide3")];return e.jsx("div",{style:{width:"640px",maxWidth:"100%"},children:e.jsx(y,{slides:s,size:"lg",theme:"light",showArrows:!0,showDots:!0,autoPlay:0})})},parameters:{docs:{description:{story:"Carousel with custom React components as slide content instead of images."}}}};var V,X,_;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: InteractiveCarousel,
  args: {
    slides: placeholderImages,
    size: 'md',
    theme: 'primary',
    autoPlay: 0,
    showArrows: true,
    showDots: true,
    disabled: false
  }
}`,...(_=(X=i.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};var B,F,U;E.parameters={...E.parameters,docs:{...(B=E.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: InteractiveCarousel,
  args: {
    ...Default.args,
    size: 'lg',
    slides: placeholderImages
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size carousel with bigger navigation arrows and dots.'
      }
    }
  }
}`,...(U=(F=E.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var G,O,H;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: InteractiveCarousel,
  args: {
    ...Default.args,
    theme: 'dark',
    slides: placeholderImages
  },
  parameters: {
    docs: {
      description: {
        story: 'Dark theme with semi-transparent dark backgrounds for controls.'
      }
    }
  }
}`,...(H=(O=b.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var J,K,Q;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: InteractiveCarousel,
  args: {
    ...Default.args,
    theme: 'light',
    slides: placeholderImages
  },
  parameters: {
    docs: {
      description: {
        story: 'Light theme with semi-transparent light backgrounds for controls.'
      }
    }
  }
}`,...(Q=(K=k.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,ee;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: InteractiveCarousel,
  args: {
    ...Default.args,
    autoPlay: 3000,
    slides: placeholderImages
  },
  parameters: {
    docs: {
      description: {
        story: 'Auto-play carousel that advances every 3 seconds.'
      }
    }
  }
}`,...(ee=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,se,re;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: InteractiveCarousel,
  args: {
    ...Default.args,
    showArrows: false,
    slides: placeholderImages
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel without navigation arrows, controlled only by dots.'
      }
    }
  }
}`,...(re=(se=j.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ae,ne,ie;D.parameters={...D.parameters,docs:{...(ae=D.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: InteractiveCarousel,
  args: {
    ...Default.args,
    showDots: false,
    slides: placeholderImages
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel without pagination dots, controlled only by arrows.'
      }
    }
  }
}`,...(ie=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var oe,le,de;z.parameters={...z.parameters,docs:{...(oe=z.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: InteractiveCarousel,
  args: {
    ...Default.args,
    slides: [placeholderImages[0]]
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with single slide - navigation controls are automatically hidden.'
      }
    }
  }
}`,...(de=(le=z.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,me,ge;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: InteractiveCarousel,
  args: {
    ...Default.args,
    slides: [...placeholderImages, 'data:image/svg+xml,%3Csvg width="800" height="400" xmlns="http://www.w3.org/2000/svg"%3E%3Cg%3E%3Crect width="100%25" height="100%25" fill="%23c0c0c0"/%3E%3Ctext x="50%25" y="50%25" font-size="24" text-anchor="middle" alignment-baseline="middle" font-family="Arial, sans-serif" fill="%23666"%3ESlide 4%3C/text%3E%3C/g%3E%3C/svg%3E', 'data:image/svg+xml,%3Csvg width="800" height="400" xmlns="http://www.w3.org/2000/svg"%3E%3Cg%3E%3Crect width="100%25" height="100%25" fill="%23b0b0b0"/%3E%3Ctext x="50%25" y="50%25" font-size="24" text-anchor="middle" alignment-baseline="middle" font-family="Arial, sans-serif" fill="%23666"%3ESlide 5%3C/text%3E%3C/g%3E%3C/svg%3E', 'data:image/svg+xml,%3Csvg width="800" height="400" xmlns="http://www.w3.org/2000/svg"%3E%3Cg%3E%3Crect width="100%25" height="100%25" fill="%23a0a0a0"/%3E%3Ctext x="50%25" y="50%25" font-size="24" text-anchor="middle" alignment-baseline="middle" font-family="Arial, sans-serif" fill="%23666"%3ESlide 6%3C/text%3E%3C/g%3E%3C/svg%3E']
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with many slides showing pagination dots behavior.'
      }
    }
  }
}`,...(ge=(me=A.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var ue,he,pe;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: InteractiveCarousel,
  args: {
    ...Default.args,
    disabled: true,
    slides: placeholderImages
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled carousel - all interactions are prevented.'
      }
    }
  }
}`,...(pe=(he=I.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};var fe,we,ye;L.parameters={...L.parameters,docs:{...(fe=L.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => {
    const variants = [{
      name: 'Medium + Primary Theme',
      size: 'md' as const,
      theme: 'primary' as const
    }, {
      name: 'Large + Primary Theme',
      size: 'lg' as const,
      theme: 'primary' as const
    }, {
      name: 'Medium + Dark Theme',
      size: 'md' as const,
      theme: 'dark' as const
    }, {
      name: 'Large + Dark Theme',
      size: 'lg' as const,
      theme: 'dark' as const
    }, {
      name: 'Medium + Light Theme',
      size: 'md' as const,
      theme: 'light' as const
    }, {
      name: 'Large + Light Theme',
      size: 'lg' as const,
      theme: 'light' as const
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
        gap: '16px'
      }}>
            <h4 style={{
          margin: '0',
          fontSize: '16px',
          fontWeight: '600',
          textAlign: 'center'
        }}>
              {variant.name}
            </h4>
            <div style={{
          width: '640px',
          maxWidth: '100%'
        }}>
              <Carousel slides={placeholderImages} size={variant.size} theme={variant.theme} showArrows={true} showDots={true} autoPlay={0} />
            </div>
          </div>)}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all carousel variants matching the Figma design specifications.'
      }
    }
  }
}`,...(ye=(we=L.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};var ve,xe,Ce;W.parameters={...W.parameters,docs:{...(ve=W.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => {
    const customSlides = [<div key="slide1" style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '24px',
      fontWeight: 'bold'
    }}>
        Custom Slide 1
      </div>, <div key="slide2" style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '24px',
      fontWeight: 'bold'
    }}>
        Custom Slide 2
      </div>, <div key="slide3" style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '24px',
      fontWeight: 'bold'
    }}>
        Custom Slide 3
      </div>];
    return <div style={{
      width: '640px',
      maxWidth: '100%'
    }}>
        <Carousel slides={customSlides} size="lg" theme="light" showArrows={true} showDots={true} autoPlay={0} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with custom React components as slide content instead of images.'
      }
    }
  }
}`,...(Ce=(xe=W.parameters)==null?void 0:xe.docs)==null?void 0:Ce.source}}};const Pe=["Default","Large","DarkTheme","LightTheme","AutoPlay","WithoutArrows","WithoutDots","SingleSlide","ManySlides","Disabled","AllVariants","CustomContent"];export{L as AllVariants,T as AutoPlay,W as CustomContent,b as DarkTheme,i as Default,I as Disabled,E as Large,k as LightTheme,A as ManySlides,z as SingleSlide,j as WithoutArrows,D as WithoutDots,Pe as __namedExportsOrder,$e as default};
