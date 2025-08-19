import{j as e}from"./jsx-runtime-DiklIkkE.js";import{f as te}from"./index-BxLnRenJ.js";import{r as g}from"./index-DRjF_FHU.js";const r=({value:a=0,endValue:x,min:n=0,max:o=100,step:h=1,showLabels:Is=!0,labelFormat:V=s=>`${s}%`,disabled:m=!1,width:As="100%",height:Ps=4,handleSize:Qs=20,className:Ns="",style:Bs,onChange:i,onSlideStart:R,onSlideEnd:j,"aria-label":Ks,"aria-labelledby":le})=>{const s=x!==void 0,[v,oe]=g.useState(null),[t,y]=g.useState(Math.max(n,Math.min(o,a))),[l,S]=g.useState(s?Math.max(n,Math.min(o,x)):a),ae=g.useRef(null);g.useEffect(()=>{s&&t>l&&(v==="start"?S(t):v==="end"&&y(l))},[t,l,s,v]),g.useEffect(()=>{y(Math.max(n,Math.min(o,a)))},[a,n,o]),g.useEffect(()=>{s&&x!==void 0&&S(Math.max(n,Math.min(o,x)))},[x,n,o,s]);const T=g.useCallback(d=>{if(!ae.current)return n;const u=ae.current.getBoundingClientRect(),c=Math.max(0,Math.min(1,(d-u.left)/u.width)),b=n+c*(o-n),p=Math.round(b/h)*h;return Math.max(n,Math.min(o,p))},[n,o,h]),ie=g.useCallback(d=>u=>{if(m)return;u.preventDefault(),oe(d),R==null||R();const c=p=>{const f=T(p.clientX);d==="start"?(y(f),!s&&i&&i(f)):d==="end"&&s&&S(f)},b=()=>{oe(null),j==null||j(),i&&i(s?[Math.min(t,l),Math.max(t,l)]:t),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",b)};document.addEventListener("mousemove",c),document.addEventListener("mouseup",b)},[m,T,s,i,R,j,t,l]),Us=g.useCallback(d=>{if(m||v)return;const u=T(d.clientX);if(s){const c=Math.abs(u-t),b=Math.abs(u-l);if(c<b?y(u):S(u),i){const p=[t,l].sort((f,L)=>f-L);i([p[0],p[1]])}}else y(u),i&&i(u)},[m,v,T,s,t,l,i]),de=g.useCallback(d=>u=>{if(m)return;let c=0;switch(u.key){case"ArrowLeft":case"ArrowDown":c=-h;break;case"ArrowRight":case"ArrowUp":c=h;break;case"Home":c=n-(d==="start"?t:l);break;case"End":c=o-(d==="start"?t:l);break;case"PageDown":c=-h*10;break;case"PageUp":c=h*10;break;default:return}u.preventDefault();const p=Math.max(n,Math.min(o,(d==="start"?t:l)+c));if(d==="start"?(y(p),!s&&i&&i(p)):d==="end"&&s&&S(p),s&&i){const f=d==="start"?[p,l].sort((L,ne)=>L-ne):[t,p].sort((L,ne)=>L-ne);i([f[0],f[1]])}},[m,h,n,o,t,l,s,i]),w=(t-n)/(o-n)*100,M=s?(l-n)/(o-n)*100:w,Gs=s?Math.min(w,M):0,Os=s?Math.abs(M-w):w,Xs=["slider",m&&"slider--disabled",v&&"slider--dragging",Ns].filter(Boolean).join(" ");return e.jsxs("div",{className:Xs,style:{...Bs,width:As,"--slider-track-height":`${Ps}px`,"--slider-handle-size":`${Qs}px`},children:[e.jsxs("div",{className:"slider__track-container",ref:ae,onClick:Us,children:[e.jsx("div",{className:"slider__track"}),e.jsx("div",{className:"slider__progress",style:{left:`${Gs}%`,width:`${Os}%`}}),e.jsx("div",{className:`slider__handle slider__handle--start ${v==="start"?"slider__handle--dragging":""}`,style:{left:`${w}%`},role:"slider",tabIndex:m?-1:0,"aria-valuemin":n,"aria-valuemax":o,"aria-valuenow":t,"aria-valuetext":V(t),"aria-label":Ks||(s?"Start value":"Slider value"),"aria-labelledby":le,"aria-disabled":m,onMouseDown:ie("start"),onKeyDown:de("start")}),s&&e.jsx("div",{className:`slider__handle slider__handle--end ${v==="end"?"slider__handle--dragging":""}`,style:{left:`${M}%`},role:"slider",tabIndex:m?-1:0,"aria-valuemin":n,"aria-valuemax":o,"aria-valuenow":l,"aria-valuetext":V(l),"aria-label":"End value","aria-labelledby":le,"aria-disabled":m,onMouseDown:ie("end"),onKeyDown:de("end")})]}),Is&&e.jsxs("div",{className:"slider__labels",children:[e.jsx("span",{className:"slider__label slider__label--start",style:{left:`${w}%`},children:V(t)}),s&&e.jsx("span",{className:"slider__label slider__label--end",style:{left:`${M}%`},children:V(l)})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:"Current value for single slider or start value for range slider",defaultValue:{value:"0",computed:!1}},endValue:{required:!1,tsType:{name:"number"},description:"End value for range slider (if provided, enables range mode)"},min:{required:!1,tsType:{name:"number"},description:"Minimum value (default: 0)",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"Maximum value (default: 100)",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"Step increment (default: 1)",defaultValue:{value:"1",computed:!1}},showLabels:{required:!1,tsType:{name:"boolean"},description:"Show value labels",defaultValue:{value:"true",computed:!1}},labelFormat:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:"Custom label format function",defaultValue:{value:"(val) => `${val}%`",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Track width in pixels",defaultValue:{value:"'100%'",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Track height in pixels",defaultValue:{value:"4",computed:!1}},handleSize:{required:!1,tsType:{name:"number"},description:"Handle size in pixels",defaultValue:{value:"20",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom CSS class",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom styles"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number | [number, number]) => void",signature:{arguments:[{type:{name:"union",raw:"number | [number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}]},name:"value"}],return:{name:"void"}}},description:"Callback when value changes"},onSlideStart:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when sliding starts"},onSlideEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when sliding ends"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelledby"}}};const er={title:"Components/Slider",component:r,parameters:{layout:"padded",docs:{description:{component:`
The Slider component provides an intuitive way for users to select a value from a range. It supports both single value selection and range selection with two handles.

## Features

- **Single & Range modes**: Select a single value or define a range with two handles
- **Keyboard accessible**: Full keyboard navigation support with arrow keys, home, end, page up/down
- **Touch-friendly**: Optimized for mobile and touch devices with larger touch targets
- **Customizable**: Adjustable dimensions, colors, and formatting options
- **Responsive design**: Adapts to different screen sizes with appropriate touch targets
- **ARIA compliant**: Full accessibility support with proper roles and values
- **Step control**: Configurable step increments for precise value selection

## Usage

The Slider is ideal for:
- Volume controls and audio settings
- Price range filters in e-commerce
- Date and time range selection
- Image brightness/contrast adjustment
- Progress indication with user control
- Numerical input with visual feedback

## Single Mode
Pass only the \`value\` prop to create a single-handle slider for selecting one value.

## Range Mode
Pass both \`value\` and \`endValue\` props to create a range slider with two handles for selecting a range of values.

## Keyboard Navigation
- **Arrow keys**: Increment/decrement by step amount
- **Home/End**: Jump to minimum/maximum values
- **Page Up/Down**: Large increments (10x step)
        `}}},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Current value for single slider or start value for range slider"},endValue:{control:{type:"range",min:0,max:100,step:1},description:"End value for range slider (enables range mode when provided)"},min:{control:{type:"number"},description:"Minimum value (default: 0)"},max:{control:{type:"number"},description:"Maximum value (default: 100)"},step:{control:{type:"number",min:1,max:10,step:1},description:"Step increment (default: 1)"},showLabels:{control:{type:"boolean"},description:"Show value labels below the slider"},disabled:{control:{type:"boolean"},description:"Disabled state"},width:{control:{type:"text"},description:"Track width (CSS value or number of pixels)"},height:{control:{type:"range",min:2,max:10,step:1},description:"Track height in pixels"},handleSize:{control:{type:"range",min:16,max:32,step:2},description:"Handle size in pixels"},onChange:{action:"value-changed",description:"Callback when value changes"},onSlideStart:{action:"slide-started",description:"Callback when sliding starts"},onSlideEnd:{action:"slide-ended",description:"Callback when sliding ends"}},args:{onChange:te(),onSlideStart:te(),onSlideEnd:te()}},F={args:{value:0,showLabels:!0},parameters:{docs:{description:{story:"Empty slider at 0% - initial state."}}}},k={args:{value:25,showLabels:!0},parameters:{docs:{description:{story:"Quarter progress (25%) - early stage selection."}}}},D={args:{value:50,showLabels:!0},parameters:{docs:{description:{story:"Half progress (50%) - midpoint selection."}}}},_={args:{value:75,showLabels:!0},parameters:{docs:{description:{story:"Three quarters progress (75%) - near maximum selection."}}}},$={args:{value:100,showLabels:!0},parameters:{docs:{description:{story:"Full progress (100%) - maximum value selected."}}}},z={args:{value:25,endValue:50,showLabels:!0},parameters:{docs:{description:{story:"Range slider from 25% to 50% - mid-range selection."}}}},W={args:{value:25,endValue:75,showLabels:!0},parameters:{docs:{description:{story:"Range slider from 25% to 75% - wide range selection."}}}},C={args:{value:50,endValue:75,showLabels:!0},parameters:{docs:{description:{story:"Range slider from 50% to 75% - upper range selection."}}}},H={args:{value:25,endValue:100,showLabels:!0},parameters:{docs:{description:{story:"Range slider from 25% to 100% - maximum range selection."}}}},q={args:{value:50,endValue:100,showLabels:!0},parameters:{docs:{description:{story:"Range slider from 50% to 100% - upper half selection."}}}},E={args:{value:75,endValue:100,showLabels:!0},parameters:{docs:{description:{story:"Range slider from 75% to 100% - final quarter selection."}}}},I={args:{value:60,showLabels:!1},parameters:{docs:{description:{story:"Slider without value labels - clean minimal design."}}}},A={args:{value:42,showLabels:!0,labelFormat:a=>`$${a}`},parameters:{docs:{description:{story:"Slider with custom label formatting - displays values as currency."}}}},P={args:{value:18,endValue:24,min:0,max:40,showLabels:!0,labelFormat:a=>`${a}°C`},parameters:{docs:{description:{story:"Temperature range selector with custom formatting and min/max values."}}}},Q={args:{value:65,height:2,handleSize:16,showLabels:!0},parameters:{docs:{description:{story:"Small slider with thinner track and smaller handles."}}}},N={args:{value:65,height:8,handleSize:28,showLabels:!0},parameters:{docs:{description:{story:"Large slider with thicker track and bigger handles for easy interaction."}}}},B={args:{value:45,step:5,showLabels:!0,labelFormat:a=>`${a}%`},parameters:{docs:{description:{story:"Slider with step size of 5 - values snap to increments of 5."}}}},K={args:{value:70,step:10,showLabels:!0,labelFormat:a=>`${a}%`},parameters:{docs:{description:{story:"Slider with step size of 10 - values snap to increments of 10."}}}},U={args:{value:40,disabled:!0,showLabels:!0},parameters:{docs:{description:{story:"Disabled slider with muted colors and no interaction."}}}},G={args:{value:30,endValue:70,disabled:!0,showLabels:!0},parameters:{docs:{description:{story:"Disabled range slider showing selected range but preventing interaction."}}}},O={args:{value:65,showLabels:!0,labelFormat:a=>`${a}%`,"aria-label":"Volume level"},parameters:{docs:{description:{story:"Volume control slider for audio applications."}}}},X={args:{value:200,endValue:800,min:0,max:1e3,step:50,showLabels:!0,labelFormat:a=>`$${a}`,"aria-label":"Price range filter"},parameters:{docs:{description:{story:"Price range filter for e-commerce applications with currency formatting."}}}},J={args:{value:80,showLabels:!0,labelFormat:a=>`${a}%`,"aria-label":"Screen brightness"},parameters:{docs:{description:{story:"Brightness control slider for display settings."}}}},Y={args:{value:25,endValue:65,min:18,max:100,showLabels:!0,labelFormat:a=>`${a} years`,"aria-label":"Age range selector"},parameters:{docs:{description:{story:"Age range selector for demographic filtering with custom min/max values."}}}},Z={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",maxWidth:"400px"},children:[e.jsx(r,{value:0,showLabels:!0}),e.jsx(r,{value:25,showLabels:!0}),e.jsx(r,{value:50,showLabels:!0}),e.jsx(r,{value:75,showLabels:!0}),e.jsx(r,{value:100,showLabels:!0})]}),parameters:{docs:{description:{story:"Multiple sliders showing different progress states in a vertical layout."}}}},ee={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",maxWidth:"400px"},children:[e.jsx(r,{value:25,endValue:50,showLabels:!0}),e.jsx(r,{value:25,endValue:75,showLabels:!0}),e.jsx(r,{value:25,endValue:100,showLabels:!0}),e.jsx(r,{value:50,endValue:75,showLabels:!0}),e.jsx(r,{value:50,endValue:100,showLabels:!0}),e.jsx(r,{value:75,endValue:100,showLabels:!0})]}),parameters:{docs:{description:{story:"Multiple range sliders showing different range selections in a vertical layout."}}}},se={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"24px",maxWidth:"600px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"14px",fontWeight:"600",fontFamily:"Inter, -apple-system, Roboto, Helvetica, sans-serif"},children:"Single Sliders"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(r,{value:25,showLabels:!0}),e.jsx(r,{value:50,showLabels:!0}),e.jsx(r,{value:75,showLabels:!0})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"14px",fontWeight:"600",fontFamily:"Inter, -apple-system, Roboto, Helvetica, sans-serif"},children:"Range Sliders"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(r,{value:25,endValue:50,showLabels:!0}),e.jsx(r,{value:25,endValue:75,showLabels:!0}),e.jsx(r,{value:50,endValue:100,showLabels:!0})]})]})]}),parameters:{docs:{description:{story:"Grid layout comparing single sliders and range sliders side by side."}}}},re={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%",maxWidth:"800px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",fontWeight:"600",fontFamily:"Inter, -apple-system, Roboto, Helvetica, sans-serif"},children:"Desktop Width"}),e.jsx(r,{value:65,width:"100%",showLabels:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",fontWeight:"600",fontFamily:"Inter, -apple-system, Roboto, Helvetica, sans-serif"},children:"Tablet Width"}),e.jsx(r,{value:45,width:"400px",showLabels:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",fontWeight:"600",fontFamily:"Inter, -apple-system, Roboto, Helvetica, sans-serif"},children:"Mobile Width"}),e.jsx(r,{value:80,width:"250px",showLabels:!0})]})]}),parameters:{docs:{description:{story:"Responsive slider examples showing different widths for various device sizes."}}}};var ue,ce,pe;F.parameters={...F.parameters,docs:{...(ue=F.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    value: 0,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty slider at 0% - initial state.'
      }
    }
  }
}`,...(pe=(ce=F.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,ge,he;k.parameters={...k.parameters,docs:{...(me=k.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    value: 25,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Quarter progress (25%) - early stage selection.'
      }
    }
  }
}`,...(he=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ve,fe,be;D.parameters={...D.parameters,docs:{...(ve=D.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    value: 50,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Half progress (50%) - midpoint selection.'
      }
    }
  }
}`,...(be=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var ye,we,xe;_.parameters={..._.parameters,docs:{...(ye=_.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    value: 75,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Three quarters progress (75%) - near maximum selection.'
      }
    }
  }
}`,...(xe=(we=_.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};var Se,Le,Ve;$.parameters={...$.parameters,docs:{...(Se=$.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    value: 100,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Full progress (100%) - maximum value selected.'
      }
    }
  }
}`,...(Ve=(Le=$.parameters)==null?void 0:Le.docs)==null?void 0:Ve.source}}};var Re,je,Te;z.parameters={...z.parameters,docs:{...(Re=z.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    value: 25,
    endValue: 50,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Range slider from 25% to 50% - mid-range selection.'
      }
    }
  }
}`,...(Te=(je=z.parameters)==null?void 0:je.docs)==null?void 0:Te.source}}};var Me,Fe,ke;W.parameters={...W.parameters,docs:{...(Me=W.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    value: 25,
    endValue: 75,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Range slider from 25% to 75% - wide range selection.'
      }
    }
  }
}`,...(ke=(Fe=W.parameters)==null?void 0:Fe.docs)==null?void 0:ke.source}}};var De,_e,$e;C.parameters={...C.parameters,docs:{...(De=C.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    value: 50,
    endValue: 75,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Range slider from 50% to 75% - upper range selection.'
      }
    }
  }
}`,...($e=(_e=C.parameters)==null?void 0:_e.docs)==null?void 0:$e.source}}};var ze,We,Ce;H.parameters={...H.parameters,docs:{...(ze=H.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    value: 25,
    endValue: 100,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Range slider from 25% to 100% - maximum range selection.'
      }
    }
  }
}`,...(Ce=(We=H.parameters)==null?void 0:We.docs)==null?void 0:Ce.source}}};var He,qe,Ee;q.parameters={...q.parameters,docs:{...(He=q.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    value: 50,
    endValue: 100,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Range slider from 50% to 100% - upper half selection.'
      }
    }
  }
}`,...(Ee=(qe=q.parameters)==null?void 0:qe.docs)==null?void 0:Ee.source}}};var Ie,Ae,Pe;E.parameters={...E.parameters,docs:{...(Ie=E.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    value: 75,
    endValue: 100,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Range slider from 75% to 100% - final quarter selection.'
      }
    }
  }
}`,...(Pe=(Ae=E.parameters)==null?void 0:Ae.docs)==null?void 0:Pe.source}}};var Qe,Ne,Be;I.parameters={...I.parameters,docs:{...(Qe=I.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    value: 60,
    showLabels: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Slider without value labels - clean minimal design.'
      }
    }
  }
}`,...(Be=(Ne=I.parameters)==null?void 0:Ne.docs)==null?void 0:Be.source}}};var Ke,Ue,Ge;A.parameters={...A.parameters,docs:{...(Ke=A.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    value: 42,
    showLabels: true,
    labelFormat: value => \`$\${value}\`
  },
  parameters: {
    docs: {
      description: {
        story: 'Slider with custom label formatting - displays values as currency.'
      }
    }
  }
}`,...(Ge=(Ue=A.parameters)==null?void 0:Ue.docs)==null?void 0:Ge.source}}};var Oe,Xe,Je;P.parameters={...P.parameters,docs:{...(Oe=P.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    value: 18,
    endValue: 24,
    min: 0,
    max: 40,
    showLabels: true,
    labelFormat: value => \`\${value}°C\`
  },
  parameters: {
    docs: {
      description: {
        story: 'Temperature range selector with custom formatting and min/max values.'
      }
    }
  }
}`,...(Je=(Xe=P.parameters)==null?void 0:Xe.docs)==null?void 0:Je.source}}};var Ye,Ze,es;Q.parameters={...Q.parameters,docs:{...(Ye=Q.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    value: 65,
    height: 2,
    handleSize: 16,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Small slider with thinner track and smaller handles.'
      }
    }
  }
}`,...(es=(Ze=Q.parameters)==null?void 0:Ze.docs)==null?void 0:es.source}}};var ss,rs,as;N.parameters={...N.parameters,docs:{...(ss=N.parameters)==null?void 0:ss.docs,source:{originalSource:`{
  args: {
    value: 65,
    height: 8,
    handleSize: 28,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Large slider with thicker track and bigger handles for easy interaction.'
      }
    }
  }
}`,...(as=(rs=N.parameters)==null?void 0:rs.docs)==null?void 0:as.source}}};var ns,ts,ls;B.parameters={...B.parameters,docs:{...(ns=B.parameters)==null?void 0:ns.docs,source:{originalSource:`{
  args: {
    value: 45,
    step: 5,
    showLabels: true,
    labelFormat: value => \`\${value}%\`
  },
  parameters: {
    docs: {
      description: {
        story: 'Slider with step size of 5 - values snap to increments of 5.'
      }
    }
  }
}`,...(ls=(ts=B.parameters)==null?void 0:ts.docs)==null?void 0:ls.source}}};var os,is,ds;K.parameters={...K.parameters,docs:{...(os=K.parameters)==null?void 0:os.docs,source:{originalSource:`{
  args: {
    value: 70,
    step: 10,
    showLabels: true,
    labelFormat: value => \`\${value}%\`
  },
  parameters: {
    docs: {
      description: {
        story: 'Slider with step size of 10 - values snap to increments of 10.'
      }
    }
  }
}`,...(ds=(is=K.parameters)==null?void 0:is.docs)==null?void 0:ds.source}}};var us,cs,ps;U.parameters={...U.parameters,docs:{...(us=U.parameters)==null?void 0:us.docs,source:{originalSource:`{
  args: {
    value: 40,
    disabled: true,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled slider with muted colors and no interaction.'
      }
    }
  }
}`,...(ps=(cs=U.parameters)==null?void 0:cs.docs)==null?void 0:ps.source}}};var ms,gs,hs;G.parameters={...G.parameters,docs:{...(ms=G.parameters)==null?void 0:ms.docs,source:{originalSource:`{
  args: {
    value: 30,
    endValue: 70,
    disabled: true,
    showLabels: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled range slider showing selected range but preventing interaction.'
      }
    }
  }
}`,...(hs=(gs=G.parameters)==null?void 0:gs.docs)==null?void 0:hs.source}}};var vs,fs,bs;O.parameters={...O.parameters,docs:{...(vs=O.parameters)==null?void 0:vs.docs,source:{originalSource:`{
  args: {
    value: 65,
    showLabels: true,
    labelFormat: value => \`\${value}%\`,
    'aria-label': 'Volume level'
  },
  parameters: {
    docs: {
      description: {
        story: 'Volume control slider for audio applications.'
      }
    }
  }
}`,...(bs=(fs=O.parameters)==null?void 0:fs.docs)==null?void 0:bs.source}}};var ys,ws,xs;X.parameters={...X.parameters,docs:{...(ys=X.parameters)==null?void 0:ys.docs,source:{originalSource:`{
  args: {
    value: 200,
    endValue: 800,
    min: 0,
    max: 1000,
    step: 50,
    showLabels: true,
    labelFormat: value => \`$\${value}\`,
    'aria-label': 'Price range filter'
  },
  parameters: {
    docs: {
      description: {
        story: 'Price range filter for e-commerce applications with currency formatting.'
      }
    }
  }
}`,...(xs=(ws=X.parameters)==null?void 0:ws.docs)==null?void 0:xs.source}}};var Ss,Ls,Vs;J.parameters={...J.parameters,docs:{...(Ss=J.parameters)==null?void 0:Ss.docs,source:{originalSource:`{
  args: {
    value: 80,
    showLabels: true,
    labelFormat: value => \`\${value}%\`,
    'aria-label': 'Screen brightness'
  },
  parameters: {
    docs: {
      description: {
        story: 'Brightness control slider for display settings.'
      }
    }
  }
}`,...(Vs=(Ls=J.parameters)==null?void 0:Ls.docs)==null?void 0:Vs.source}}};var Rs,js,Ts;Y.parameters={...Y.parameters,docs:{...(Rs=Y.parameters)==null?void 0:Rs.docs,source:{originalSource:`{
  args: {
    value: 25,
    endValue: 65,
    min: 18,
    max: 100,
    showLabels: true,
    labelFormat: value => \`\${value} years\`,
    'aria-label': 'Age range selector'
  },
  parameters: {
    docs: {
      description: {
        story: 'Age range selector for demographic filtering with custom min/max values.'
      }
    }
  }
}`,...(Ts=(js=Y.parameters)==null?void 0:js.docs)==null?void 0:Ts.source}}};var Ms,Fs,ks;Z.parameters={...Z.parameters,docs:{...(Ms=Z.parameters)==null?void 0:Ms.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    maxWidth: '400px'
  }}>
      <Slider value={0} showLabels={true} />
      <Slider value={25} showLabels={true} />
      <Slider value={50} showLabels={true} />
      <Slider value={75} showLabels={true} />
      <Slider value={100} showLabels={true} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Multiple sliders showing different progress states in a vertical layout.'
      }
    }
  }
}`,...(ks=(Fs=Z.parameters)==null?void 0:Fs.docs)==null?void 0:ks.source}}};var Ds,_s,$s;ee.parameters={...ee.parameters,docs:{...(Ds=ee.parameters)==null?void 0:Ds.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    maxWidth: '400px'
  }}>
      <Slider value={25} endValue={50} showLabels={true} />
      <Slider value={25} endValue={75} showLabels={true} />
      <Slider value={25} endValue={100} showLabels={true} />
      <Slider value={50} endValue={75} showLabels={true} />
      <Slider value={50} endValue={100} showLabels={true} />
      <Slider value={75} endValue={100} showLabels={true} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Multiple range sliders showing different range selections in a vertical layout.'
      }
    }
  }
}`,...($s=(_s=ee.parameters)==null?void 0:_s.docs)==null?void 0:$s.source}}};var zs,Ws,Cs;se.parameters={...se.parameters,docs:{...(zs=se.parameters)==null?void 0:zs.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px',
    maxWidth: '600px'
  }}>
      <div>
        <h4 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        fontWeight: '600',
        fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif'
      }}>Single Sliders</h4>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <Slider value={25} showLabels={true} />
          <Slider value={50} showLabels={true} />
          <Slider value={75} showLabels={true} />
        </div>
      </div>
      <div>
        <h4 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        fontWeight: '600',
        fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif'
      }}>Range Sliders</h4>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <Slider value={25} endValue={50} showLabels={true} />
          <Slider value={25} endValue={75} showLabels={true} />
          <Slider value={50} endValue={100} showLabels={true} />
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Grid layout comparing single sliders and range sliders side by side.'
      }
    }
  }
}`,...(Cs=(Ws=se.parameters)==null?void 0:Ws.docs)==null?void 0:Cs.source}}};var Hs,qs,Es;re.parameters={...re.parameters,docs:{...(Hs=re.parameters)==null?void 0:Hs.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '100%',
    maxWidth: '800px'
  }}>
      <div>
        <h4 style={{
        margin: '0 0 8px 0',
        fontSize: '14px',
        fontWeight: '600',
        fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif'
      }}>Desktop Width</h4>
        <Slider value={65} width="100%" showLabels={true} />
      </div>
      <div>
        <h4 style={{
        margin: '0 0 8px 0',
        fontSize: '14px',
        fontWeight: '600',
        fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif'
      }}>Tablet Width</h4>
        <Slider value={45} width="400px" showLabels={true} />
      </div>
      <div>
        <h4 style={{
        margin: '0 0 8px 0',
        fontSize: '14px',
        fontWeight: '600',
        fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif'
      }}>Mobile Width</h4>
        <Slider value={80} width="250px" showLabels={true} />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Responsive slider examples showing different widths for various device sizes.'
      }
    }
  }
}`,...(Es=(qs=re.parameters)==null?void 0:qs.docs)==null?void 0:Es.source}}};const sr=["Empty","Quarter","Half","ThreeQuarters","Full","RangeQuarterHalf","RangeQuarterThreeQuarters","RangeHalfThreeQuarters","RangeQuarterFull","RangeHalfFull","RangeThreeQuartersFull","WithoutLabels","CustomLabelFormat","TemperatureRange","SmallSlider","LargeSlider","StepByFive","StepByTen","Disabled","DisabledRange","VolumeControl","PriceRange","BrightnessControl","AgeRange","MultipleSliders","MixedRangeSliders","GridLayout","ResponsiveExample"];export{Y as AgeRange,J as BrightnessControl,A as CustomLabelFormat,U as Disabled,G as DisabledRange,F as Empty,$ as Full,se as GridLayout,D as Half,N as LargeSlider,ee as MixedRangeSliders,Z as MultipleSliders,X as PriceRange,k as Quarter,q as RangeHalfFull,C as RangeHalfThreeQuarters,H as RangeQuarterFull,z as RangeQuarterHalf,W as RangeQuarterThreeQuarters,E as RangeThreeQuartersFull,re as ResponsiveExample,Q as SmallSlider,B as StepByFive,K as StepByTen,P as TemperatureRange,_ as ThreeQuarters,O as VolumeControl,I as WithoutLabels,sr as __namedExportsOrder,er as default};
