import{j as e}from"./jsx-runtime-DiklIkkE.js";import{f as Qr}from"./index-BxLnRenJ.js";import{R as Ur}from"./index-DRjF_FHU.js";const Rr={xxs:{diameter:64,strokeWidth:6,fontSize:14,labelFontSize:12},xs:{diameter:160,strokeWidth:16,fontSize:24,labelFontSize:12},sm:{diameter:200,strokeWidth:20,fontSize:30,labelFontSize:12},md:{diameter:240,strokeWidth:24,fontSize:36,labelFontSize:14},lg:{diameter:280,strokeWidth:28,fontSize:48,labelFontSize:14}},i=({value:Pr,max:I=100,size:l="md",shape:a="circle",showLabel:O=!0,label:p="Active users",showPercentage:Er=!0,percentageText:Tr,backgroundColor:J,progressColor:K,textColor:Mr,labelColor:Ar,disabled:Fr=!1,className:_r="","aria-label":Br,animationDuration:Y=1e3,onProgressChange:d,...$r})=>{const m=Math.max(0,Math.min(Pr,I)),u=Math.round(m/I*100),qr=Rr[l],{diameter:o,strokeWidth:t,fontSize:Z,labelFontSize:jr}=qr,r=(o-t)/2,g=2*Math.PI*r,s=o/2,Dr=a==="half-circle"?g/2:g,Hr=a==="half-circle"?Dr*(100-u)/100:g*(100-u)/100,Nr=Tr||`${u}%`;Ur.useEffect(()=>{d==null||d(m)},[m,d]);const Wr=(V=!1)=>{const n=Math.PI,c=0,G=s+r*Math.cos(n),Q=s+r*Math.sin(n),U=s+r*Math.cos(c),R=s+r*Math.sin(c);return`M ${G} ${Q} A ${r} ${r} 0 0 1 ${U} ${R}`},Ir=()=>{const V=Math.PI*(u/100),n=Math.PI,c=Math.PI-V,G=s+r*Math.cos(n),Q=s+r*Math.sin(n),U=s+r*Math.cos(c),R=s+r*Math.sin(c),Gr=V>Math.PI?1:0;return`M ${G} ${Q} A ${r} ${r} 0 ${Gr} 1 ${U} ${R}`},Vr=["progresscircle",`progresscircle--${l}`,`progresscircle--${a.replace("-","_")}`,Fr&&"progresscircle--disabled",_r].filter(Boolean).join(" "),X=a==="half-circle"?o/2+t:o;return e.jsx("div",{className:Vr,...$r,children:e.jsxs("div",{className:"progresscircle__container",children:[e.jsxs("svg",{className:"progresscircle__svg",width:o,height:X,viewBox:`0 0 ${o} ${X}`,role:"progressbar","aria-valuenow":m,"aria-valuemin":0,"aria-valuemax":I,"aria-label":Br,children:[a==="circle"?e.jsx("circle",{className:"progresscircle__background",cx:s,cy:s,r,fill:"none",stroke:J,strokeWidth:t,strokeLinecap:"round"}):e.jsx("path",{className:"progresscircle__background",d:Wr(!0),fill:"none",stroke:J,strokeWidth:t,strokeLinecap:"round"}),a==="circle"?e.jsx("circle",{className:"progresscircle__progress",cx:s,cy:s,r,fill:"none",stroke:K,strokeWidth:t,strokeLinecap:"round",strokeDasharray:g,strokeDashoffset:Hr,style:{transition:`stroke-dashoffset ${Y}ms ease-in-out`,transform:"rotate(-90deg)",transformOrigin:"center"}}):e.jsx("path",{className:"progresscircle__progress",d:Ir(),fill:"none",stroke:K,strokeWidth:t,strokeLinecap:"round",style:{transition:`d ${Y}ms ease-in-out`}})]}),e.jsxs("div",{className:"progresscircle__content",children:[O&&p&&l!=="xxs"&&e.jsx("div",{className:"progresscircle__label",style:{fontSize:`${jr}px`,color:Ar,...a==="half-circle"&&{transform:`translateY(${-Z/2}px)`}},children:p}),Er&&e.jsx("div",{className:"progresscircle__percentage",style:{fontSize:`${Z}px`,color:Mr},children:Nr}),l==="xxs"&&O&&p&&e.jsx("div",{className:"progresscircle__external-label",children:p})]})]})})};i.__docgenInfo={description:"",methods:[],displayName:"ProgressCircle",props:{value:{required:!0,tsType:{name:"number"},description:"Progress value between 0 and 100"},max:{required:!1,tsType:{name:"number"},description:"Maximum value (default: 100)",defaultValue:{value:"100",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'circle' | 'half-circle'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'half-circle'"}]},description:"Shape variant",defaultValue:{value:"'circle'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"Show label text",defaultValue:{value:"true",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label text (overrides default)",defaultValue:{value:"'Active users'",computed:!1}},showPercentage:{required:!1,tsType:{name:"boolean"},description:"Show percentage text",defaultValue:{value:"true",computed:!1}},percentageText:{required:!1,tsType:{name:"string"},description:"Custom percentage text"},backgroundColor:{required:!1,tsType:{name:"string"},description:"Background stroke color"},progressColor:{required:!1,tsType:{name:"string"},description:"Progress stroke color"},textColor:{required:!1,tsType:{name:"string"},description:"Text color"},labelColor:{required:!1,tsType:{name:"string"},description:"Label text color"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom CSS class",defaultValue:{value:"''",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessibility label"},animationDuration:{required:!1,tsType:{name:"number"},description:"Animation duration in milliseconds",defaultValue:{value:"1000",computed:!1}},onProgressChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"Callback when progress changes"}}};const Yr={title:"Components/ProgressCircle",component:i,parameters:{layout:"padded",docs:{description:{component:`
The ProgressCircle component provides a circular visual representation of progress or completion status. It supports multiple sizes, shapes, and labeling options for various use cases.

## Features

- **Multiple sizes**: Extra extra small (xxs) to large (lg) for different contexts
- **Two shapes**: Full circle and half circle variants
- **Flexible labeling**: Show/hide labels and percentages independently
- **Responsive design**: Adapts to different screen sizes
- **Accessibility**: Full ARIA support with proper roles and values
- **Customizable**: Colors, animations, and text options
- **SVG-based**: Crisp rendering at any scale

## Usage

The ProgressCircle is ideal for:
- Dashboard metrics and KPIs
- User profile completion
- Skill or competency levels
- Battery or storage indicators
- Goal achievement tracking
- Loading states for circular interfaces

## Sizes

### Extra Extra Small (xxs)
Compact 64px circle perfect for inline metrics or small cards.

### Extra Small (xs) 
160px circle suitable for sidebar widgets or mobile interfaces.

### Small (sm)
200px circle ideal for card components or grid layouts.

### Medium (md)
240px circle perfect for dashboard highlights or feature callouts.

### Large (lg)
280px circle designed for hero sections or primary metrics.

## Shapes

### Circle
Complete 360° progress indication showing full completion status.

### Half Circle
180° semicircle format that takes less vertical space while maintaining readability.
        `}}},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Progress value between 0 and 100"},max:{control:{type:"number"},description:"Maximum value (default: 100)"},size:{control:{type:"radio"},options:["xxs","xs","sm","md","lg"],description:"Size variant of the progress circle"},shape:{control:{type:"radio"},options:["circle","half-circle"],description:"Shape variant - full circle or half circle"},showLabel:{control:{type:"boolean"},description:"Show label text"},label:{control:{type:"text"},description:"Label text content"},showPercentage:{control:{type:"boolean"},description:"Show percentage text"},percentageText:{control:{type:"text"},description:"Custom percentage text"},disabled:{control:{type:"boolean"},description:"Disabled state"},animationDuration:{control:{type:"range",min:0,max:3e3,step:100},description:"Animation duration in milliseconds"},onProgressChange:{action:"progress-changed",description:"Callback when progress changes"}},args:{onProgressChange:Qr()}},h={args:{value:40,size:"xxs",shape:"circle"},parameters:{docs:{description:{story:"Extra extra small (64px) circle - perfect for inline metrics or compact displays."}}}},f={args:{value:40,size:"xs",shape:"circle"},parameters:{docs:{description:{story:"Extra small (160px) circle - ideal for sidebar widgets or mobile interfaces."}}}},v={args:{value:40,size:"sm",shape:"circle"},parameters:{docs:{description:{story:"Small (200px) circle - perfect for card components or grid layouts."}}}},x={args:{value:40,size:"md",shape:"circle"},parameters:{docs:{description:{story:"Medium (240px) circle - ideal for dashboard highlights or feature callouts."}}}},b={args:{value:40,size:"lg",shape:"circle"},parameters:{docs:{description:{story:"Large (280px) circle - designed for hero sections or primary metrics."}}}},y={args:{value:40,size:"sm",shape:"half-circle"},parameters:{docs:{description:{story:"Small half circle - compact design that takes less vertical space."}}}},S={args:{value:40,size:"md",shape:"half-circle"},parameters:{docs:{description:{story:"Medium half circle - space-efficient while maintaining good readability."}}}},w={args:{value:40,size:"lg",shape:"half-circle"},parameters:{docs:{description:{story:"Large half circle - prominent display with efficient space usage."}}}},z={args:{value:40,size:"md",shape:"circle",showLabel:!0,label:"Active users"},parameters:{docs:{description:{story:"Progress circle with descriptive label - perfect for dashboard metrics."}}}},C={args:{value:40,size:"md",shape:"circle",showLabel:!1},parameters:{docs:{description:{story:"Progress circle without label - clean and minimal design focusing on the percentage."}}}},L={args:{value:85,size:"md",shape:"circle",showLabel:!0,label:"Storage used"},parameters:{docs:{description:{story:"Progress circle with custom label text for specific use cases."}}}},k={args:{value:40,size:"xxs",shape:"circle",showLabel:!0,label:"Users"},parameters:{docs:{description:{story:"Extra small circle with external label positioned below the circle."}}}},P={args:{value:0,size:"md",shape:"circle"},parameters:{docs:{description:{story:"Empty progress circle showing 0% - initial or reset state."}}}},E={args:{value:25,size:"md",shape:"circle"},parameters:{docs:{description:{story:"Quarter progress (25%) - early stage completion."}}}},T={args:{value:50,size:"md",shape:"circle"},parameters:{docs:{description:{story:"Half progress (50%) - midpoint completion."}}}},M={args:{value:75,size:"md",shape:"circle"},parameters:{docs:{description:{story:"Three quarters progress (75%) - near completion."}}}},A={args:{value:100,size:"md",shape:"circle"},parameters:{docs:{description:{story:"Complete progress (100%) - fully finished state."}}}},F={args:{value:65,size:"md",shape:"circle",progressColor:"#10B981",backgroundColor:"#F3F4F6",textColor:"#059669",labelColor:"#6B7280"},parameters:{docs:{description:{story:"Progress circle with custom green theme colors for success states."}}}},_={args:{value:42,size:"md",shape:"circle",percentageText:"42 GB",label:"Storage"},parameters:{docs:{description:{story:"Progress circle with custom text instead of percentage for data visualization."}}}},B={args:{value:80,size:"md",shape:"circle",animationDuration:2500},parameters:{docs:{description:{story:"Progress circle with slow animation for dramatic reveal effects."}}}},$={args:{value:90,size:"md",shape:"circle",animationDuration:500},parameters:{docs:{description:{story:"Progress circle with fast animation for quick updates."}}}},q={args:{value:60,size:"md",shape:"circle",disabled:!0},parameters:{docs:{description:{story:"Disabled progress circle with muted colors and reduced opacity."}}}},j={args:{value:78,size:"sm",shape:"circle",label:"Profile completion",showLabel:!0},parameters:{docs:{description:{story:"User profile completion indicator for onboarding flows."}}}},D={args:{value:85,size:"md",shape:"half-circle",label:"JavaScript",showLabel:!0},parameters:{docs:{description:{story:"Skill level indicator using half circle for space efficiency."}}}},H={args:{value:23,size:"xs",shape:"circle",label:"Battery",progressColor:"#EF4444",showLabel:!0},parameters:{docs:{description:{story:"Battery level indicator with red color for low battery warning."}}}},N={args:{value:94,size:"lg",shape:"circle",label:"Annual goal",progressColor:"#10B981",showLabel:!0},parameters:{docs:{description:{story:"Goal achievement tracker with green color indicating near completion."}}}},W={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"24px",maxWidth:"800px"},children:[e.jsx(i,{value:85,size:"sm",label:"Active users"}),e.jsx(i,{value:92,size:"sm",label:"Conversion rate",progressColor:"#10B981"}),e.jsx(i,{value:67,size:"sm",label:"Server load",progressColor:"#F59E0B"}),e.jsx(i,{value:34,size:"sm",label:"Storage used",progressColor:"#EF4444"})]}),parameters:{docs:{description:{story:"Dashboard metrics grid showing multiple progress circles with different colors and labels."}}}};var ee,re,se;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    value: 40,
    size: 'xxs',
    shape: 'circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Extra extra small (64px) circle - perfect for inline metrics or compact displays.'
      }
    }
  }
}`,...(se=(re=h.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ae,oe,te;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    value: 40,
    size: 'xs',
    shape: 'circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Extra small (160px) circle - ideal for sidebar widgets or mobile interfaces.'
      }
    }
  }
}`,...(te=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ie,ne,ce;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    value: 40,
    size: 'sm',
    shape: 'circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Small (200px) circle - perfect for card components or grid layouts.'
      }
    }
  }
}`,...(ce=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var le,pe,de;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    value: 40,
    size: 'md',
    shape: 'circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Medium (240px) circle - ideal for dashboard highlights or feature callouts.'
      }
    }
  }
}`,...(de=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var me,ue,ge;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    value: 40,
    size: 'lg',
    shape: 'circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Large (280px) circle - designed for hero sections or primary metrics.'
      }
    }
  }
}`,...(ge=(ue=b.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var he,fe,ve;y.parameters={...y.parameters,docs:{...(he=y.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    value: 40,
    size: 'sm',
    shape: 'half-circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Small half circle - compact design that takes less vertical space.'
      }
    }
  }
}`,...(ve=(fe=y.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var xe,be,ye;S.parameters={...S.parameters,docs:{...(xe=S.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    value: 40,
    size: 'md',
    shape: 'half-circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Medium half circle - space-efficient while maintaining good readability.'
      }
    }
  }
}`,...(ye=(be=S.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var Se,we,ze;w.parameters={...w.parameters,docs:{...(Se=w.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    value: 40,
    size: 'lg',
    shape: 'half-circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Large half circle - prominent display with efficient space usage.'
      }
    }
  }
}`,...(ze=(we=w.parameters)==null?void 0:we.docs)==null?void 0:ze.source}}};var Ce,Le,ke;z.parameters={...z.parameters,docs:{...(Ce=z.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    value: 40,
    size: 'md',
    shape: 'circle',
    showLabel: true,
    label: 'Active users'
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress circle with descriptive label - perfect for dashboard metrics.'
      }
    }
  }
}`,...(ke=(Le=z.parameters)==null?void 0:Le.docs)==null?void 0:ke.source}}};var Pe,Ee,Te;C.parameters={...C.parameters,docs:{...(Pe=C.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    value: 40,
    size: 'md',
    shape: 'circle',
    showLabel: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress circle without label - clean and minimal design focusing on the percentage.'
      }
    }
  }
}`,...(Te=(Ee=C.parameters)==null?void 0:Ee.docs)==null?void 0:Te.source}}};var Me,Ae,Fe;L.parameters={...L.parameters,docs:{...(Me=L.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    value: 85,
    size: 'md',
    shape: 'circle',
    showLabel: true,
    label: 'Storage used'
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress circle with custom label text for specific use cases.'
      }
    }
  }
}`,...(Fe=(Ae=L.parameters)==null?void 0:Ae.docs)==null?void 0:Fe.source}}};var _e,Be,$e;k.parameters={...k.parameters,docs:{...(_e=k.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    value: 40,
    size: 'xxs',
    shape: 'circle',
    showLabel: true,
    label: 'Users'
  },
  parameters: {
    docs: {
      description: {
        story: 'Extra small circle with external label positioned below the circle.'
      }
    }
  }
}`,...($e=(Be=k.parameters)==null?void 0:Be.docs)==null?void 0:$e.source}}};var qe,je,De;P.parameters={...P.parameters,docs:{...(qe=P.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    value: 0,
    size: 'md',
    shape: 'circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty progress circle showing 0% - initial or reset state.'
      }
    }
  }
}`,...(De=(je=P.parameters)==null?void 0:je.docs)==null?void 0:De.source}}};var He,Ne,We;E.parameters={...E.parameters,docs:{...(He=E.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    value: 25,
    size: 'md',
    shape: 'circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Quarter progress (25%) - early stage completion.'
      }
    }
  }
}`,...(We=(Ne=E.parameters)==null?void 0:Ne.docs)==null?void 0:We.source}}};var Ie,Ve,Ge;T.parameters={...T.parameters,docs:{...(Ie=T.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    value: 50,
    size: 'md',
    shape: 'circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Half progress (50%) - midpoint completion.'
      }
    }
  }
}`,...(Ge=(Ve=T.parameters)==null?void 0:Ve.docs)==null?void 0:Ge.source}}};var Qe,Ue,Re;M.parameters={...M.parameters,docs:{...(Qe=M.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    value: 75,
    size: 'md',
    shape: 'circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Three quarters progress (75%) - near completion.'
      }
    }
  }
}`,...(Re=(Ue=M.parameters)==null?void 0:Ue.docs)==null?void 0:Re.source}}};var Oe,Je,Ke;A.parameters={...A.parameters,docs:{...(Oe=A.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    value: 100,
    size: 'md',
    shape: 'circle'
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete progress (100%) - fully finished state.'
      }
    }
  }
}`,...(Ke=(Je=A.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Ye,Ze,Xe;F.parameters={...F.parameters,docs:{...(Ye=F.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    value: 65,
    size: 'md',
    shape: 'circle',
    progressColor: '#10B981',
    backgroundColor: '#F3F4F6',
    textColor: '#059669',
    labelColor: '#6B7280'
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress circle with custom green theme colors for success states.'
      }
    }
  }
}`,...(Xe=(Ze=F.parameters)==null?void 0:Ze.docs)==null?void 0:Xe.source}}};var er,rr,sr;_.parameters={..._.parameters,docs:{...(er=_.parameters)==null?void 0:er.docs,source:{originalSource:`{
  args: {
    value: 42,
    size: 'md',
    shape: 'circle',
    percentageText: '42 GB',
    label: 'Storage'
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress circle with custom text instead of percentage for data visualization.'
      }
    }
  }
}`,...(sr=(rr=_.parameters)==null?void 0:rr.docs)==null?void 0:sr.source}}};var ar,or,tr;B.parameters={...B.parameters,docs:{...(ar=B.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  args: {
    value: 80,
    size: 'md',
    shape: 'circle',
    animationDuration: 2500
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress circle with slow animation for dramatic reveal effects.'
      }
    }
  }
}`,...(tr=(or=B.parameters)==null?void 0:or.docs)==null?void 0:tr.source}}};var ir,nr,cr;$.parameters={...$.parameters,docs:{...(ir=$.parameters)==null?void 0:ir.docs,source:{originalSource:`{
  args: {
    value: 90,
    size: 'md',
    shape: 'circle',
    animationDuration: 500
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress circle with fast animation for quick updates.'
      }
    }
  }
}`,...(cr=(nr=$.parameters)==null?void 0:nr.docs)==null?void 0:cr.source}}};var lr,pr,dr;q.parameters={...q.parameters,docs:{...(lr=q.parameters)==null?void 0:lr.docs,source:{originalSource:`{
  args: {
    value: 60,
    size: 'md',
    shape: 'circle',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled progress circle with muted colors and reduced opacity.'
      }
    }
  }
}`,...(dr=(pr=q.parameters)==null?void 0:pr.docs)==null?void 0:dr.source}}};var mr,ur,gr;j.parameters={...j.parameters,docs:{...(mr=j.parameters)==null?void 0:mr.docs,source:{originalSource:`{
  args: {
    value: 78,
    size: 'sm',
    shape: 'circle',
    label: 'Profile completion',
    showLabel: true
  },
  parameters: {
    docs: {
      description: {
        story: 'User profile completion indicator for onboarding flows.'
      }
    }
  }
}`,...(gr=(ur=j.parameters)==null?void 0:ur.docs)==null?void 0:gr.source}}};var hr,fr,vr;D.parameters={...D.parameters,docs:{...(hr=D.parameters)==null?void 0:hr.docs,source:{originalSource:`{
  args: {
    value: 85,
    size: 'md',
    shape: 'half-circle',
    label: 'JavaScript',
    showLabel: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Skill level indicator using half circle for space efficiency.'
      }
    }
  }
}`,...(vr=(fr=D.parameters)==null?void 0:fr.docs)==null?void 0:vr.source}}};var xr,br,yr;H.parameters={...H.parameters,docs:{...(xr=H.parameters)==null?void 0:xr.docs,source:{originalSource:`{
  args: {
    value: 23,
    size: 'xs',
    shape: 'circle',
    label: 'Battery',
    progressColor: '#EF4444',
    showLabel: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Battery level indicator with red color for low battery warning.'
      }
    }
  }
}`,...(yr=(br=H.parameters)==null?void 0:br.docs)==null?void 0:yr.source}}};var Sr,wr,zr;N.parameters={...N.parameters,docs:{...(Sr=N.parameters)==null?void 0:Sr.docs,source:{originalSource:`{
  args: {
    value: 94,
    size: 'lg',
    shape: 'circle',
    label: 'Annual goal',
    progressColor: '#10B981',
    showLabel: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Goal achievement tracker with green color indicating near completion.'
      }
    }
  }
}`,...(zr=(wr=N.parameters)==null?void 0:wr.docs)==null?void 0:zr.source}}};var Cr,Lr,kr;W.parameters={...W.parameters,docs:{...(Cr=W.parameters)==null?void 0:Cr.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '24px',
    maxWidth: '800px'
  }}>
      <ProgressCircle value={85} size="sm" label="Active users" />
      <ProgressCircle value={92} size="sm" label="Conversion rate" progressColor="#10B981" />
      <ProgressCircle value={67} size="sm" label="Server load" progressColor="#F59E0B" />
      <ProgressCircle value={34} size="sm" label="Storage used" progressColor="#EF4444" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Dashboard metrics grid showing multiple progress circles with different colors and labels.'
      }
    }
  }
}`,...(kr=(Lr=W.parameters)==null?void 0:Lr.docs)==null?void 0:kr.source}}};const Zr=["ExtraExtraSmall","ExtraSmall","Small","Medium","Large","HalfCircleSmall","HalfCircleMedium","HalfCircleLarge","WithLabel","WithoutLabel","CustomLabel","ExtraSmallWithExternalLabel","Empty","Quarter","Half","ThreeQuarters","Complete","CustomColors","CustomText","SlowAnimation","FastAnimation","Disabled","ProfileCompletion","SkillLevel","BatteryLevel","GoalAchievement","DashboardMetrics"];export{H as BatteryLevel,A as Complete,F as CustomColors,L as CustomLabel,_ as CustomText,W as DashboardMetrics,q as Disabled,P as Empty,h as ExtraExtraSmall,f as ExtraSmall,k as ExtraSmallWithExternalLabel,$ as FastAnimation,N as GoalAchievement,T as Half,w as HalfCircleLarge,S as HalfCircleMedium,y as HalfCircleSmall,b as Large,x as Medium,j as ProfileCompletion,E as Quarter,D as SkillLevel,B as SlowAnimation,v as Small,M as ThreeQuarters,z as WithLabel,C as WithoutLabel,Zr as __namedExportsOrder,Yr as default};
