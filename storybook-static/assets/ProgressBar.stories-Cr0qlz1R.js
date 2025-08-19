import{j as e}from"./jsx-runtime-DiklIkkE.js";import{f as cr}from"./index-BxLnRenJ.js";import{R as gr}from"./index-DRjF_FHU.js";const W=({direction:a="down"})=>a==="down"?e.jsx("svg",{width:"16",height:"9",viewBox:"0 0 16 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M14.0711 0.485289C14.962 0.485289 15.4081 1.56243 14.7782 2.1924L8.70711 8.26347C8.31658 8.654 7.68342 8.654 7.29289 8.26347L1.22183 2.1924C0.591867 1.56243 1.03803 0.485289 1.92894 0.485289L14.0711 0.485289Z",fill:"white"})}):e.jsx("svg",{width:"16",height:"9",viewBox:"0 0 16 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1.92894 8.51471C1.03803 8.51471 0.591868 7.43757 1.22183 6.8076L7.29289 0.736529C7.68342 0.346004 8.31658 0.346005 8.70711 0.736529L14.7782 6.8076C15.4081 7.43757 14.962 8.51471 14.0711 8.51471L1.92894 8.51471Z",fill:"white"})}),z=({children:a,position:s="top",style:r})=>e.jsxs("div",{className:`progressbar-tooltip progressbar-tooltip--${s}`,style:r,children:[s==="top"&&e.jsx(W,{direction:"down"}),e.jsx("div",{className:"progressbar-tooltip__content",children:a}),s==="bottom"&&e.jsx(W,{direction:"up"})]}),i=({value:a,max:s=100,label:r="right",showPercentage:n=!0,labelText:Qe,width:o=320,height:q=8,backgroundColor:Xe,progressColor:Ye,disabled:er=!1,className:rr="","aria-label":sr,"aria-describedby":tr,animationDuration:ar=300,onProgressChange:l,...or})=>{const p=Math.max(0,Math.min(a,s)),D=Math.round(p/s*100),ir=`${D}%`,t=Qe||`${D}%`;gr.useEffect(()=>{l==null||l(p)},[p,l]);const N=()=>{const M=typeof o=="number"?o:320,A=t.length<=3?43:t.length<=4?50:56,dr=D/100*M;return{left:`${Math.max(-17,Math.min(dr-A/2,M-A))}px`}},nr=["progressbar",r&&`progressbar--label-${r.replace("-","_")}`,er&&"progressbar--disabled",rr].filter(Boolean).join(" "),lr={width:typeof o=="number"?`${o}px`:o,height:`${q}px`,backgroundColor:Xe,...or.style},pr={width:ir,height:`${q}px`,backgroundColor:Ye,transition:`width ${ar}ms ease-in-out`};return e.jsxs("div",{className:nr,children:[e.jsxs("div",{className:"progressbar__container",children:[e.jsxs("div",{className:"progressbar__track",style:lr,role:"progressbar","aria-valuenow":p,"aria-valuemin":0,"aria-valuemax":s,"aria-label":sr,"aria-describedby":tr,children:[e.jsx("div",{className:"progressbar__fill",style:pr}),r==="top-floating"&&e.jsx(z,{position:"top",style:N(),children:n&&t}),r==="bottom-floating"&&e.jsx(z,{position:"bottom",style:N(),children:n&&t})]}),r==="right"&&n&&e.jsx("div",{className:"progressbar__label progressbar__label--right",children:t})]}),r==="bottom"&&n&&e.jsx("div",{className:"progressbar__label progressbar__label--bottom",children:t})]})};i.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{value:{required:!0,tsType:{name:"number"},description:"Progress value between 0 and 100"},max:{required:!1,tsType:{name:"number"},description:"Maximum value (default: 100)",defaultValue:{value:"100",computed:!1}},label:{required:!1,tsType:{name:"union",raw:"'right' | 'bottom' | 'top-floating' | 'bottom-floating' | false",elements:[{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'top-floating'"},{name:"literal",value:"'bottom-floating'"},{name:"literal",value:"false"}]},description:"Label position",defaultValue:{value:"'right'",computed:!1}},showPercentage:{required:!1,tsType:{name:"boolean"},description:"Show percentage text",defaultValue:{value:"true",computed:!1}},labelText:{required:!1,tsType:{name:"string"},description:"Custom label text (overrides percentage)"},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Progress bar width",defaultValue:{value:"320",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Progress bar height",defaultValue:{value:"8",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color"},progressColor:{required:!1,tsType:{name:"string"},description:"Progress color"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom CSS class",defaultValue:{value:"''",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessibility label"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"Accessibility description"},animationDuration:{required:!1,tsType:{name:"number"},description:"Animation duration in milliseconds",defaultValue:{value:"300",computed:!1}},onProgressChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"Callback when progress changes"}}};const fr={title:"Components/ProgressBar",component:i,parameters:{layout:"padded",docs:{description:{component:`
The ProgressBar component provides a visual representation of task completion or loading progress. It supports multiple label positions, floating tooltips, and customizable styling.

## Features

- **Multiple label positions**: Right, bottom, top floating, bottom floating, or hidden
- **Floating tooltips**: Interactive tooltips that follow progress position
- **Responsive design**: Adapts to different screen sizes
- **Accessibility**: Full ARIA support and keyboard navigation
- **Customizable**: Colors, sizes, and animation timing
- **Animation**: Smooth progress transitions with configurable duration

## Usage

The ProgressBar is ideal for:
- File upload progress
- Task completion tracking
- Loading states
- Multi-step form progress
- Data processing status
- Installation or download progress

## Label Positions

### Static Labels
- **Right**: Label positioned to the right of the progress bar
- **Bottom**: Label positioned below the progress bar

### Floating Labels
- **Top Floating**: Tooltip above the progress bar that follows the current progress
- **Bottom Floating**: Tooltip below the progress bar that follows the current progress
        `}}},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Progress value between 0 and 100"},max:{control:{type:"number"},description:"Maximum value (default: 100)"},label:{control:{type:"radio"},options:["right","bottom","top-floating","bottom-floating",!1],description:"Label position or hide labels"},showPercentage:{control:{type:"boolean"},description:"Show percentage text"},labelText:{control:{type:"text"},description:"Custom label text (overrides percentage)"},width:{control:{type:"number"},description:"Progress bar width in pixels"},height:{control:{type:"range",min:4,max:20,step:2},description:"Progress bar height in pixels"},disabled:{control:{type:"boolean"},description:"Disabled state"},animationDuration:{control:{type:"range",min:0,max:2e3,step:100},description:"Animation duration in milliseconds"},onProgressChange:{action:"progress-changed",description:"Callback when progress changes"}},args:{onProgressChange:cr()}},d={args:{value:40,label:"right",width:320},parameters:{docs:{description:{story:"Default progress bar with right-positioned label showing 40% completion."}}}},c={args:{value:60,label:!1,width:320},parameters:{docs:{description:{story:"Progress bar without any label - clean and minimal design."}}}},g={args:{value:75,label:"bottom",width:320},parameters:{docs:{description:{story:"Progress bar with label positioned below the bar."}}}},m={args:{value:65,label:"top-floating",width:320},parameters:{docs:{description:{story:"Progress bar with floating tooltip above that follows the current progress position."}}}},u={args:{value:45,label:"bottom-floating",width:320},parameters:{docs:{description:{story:"Progress bar with floating tooltip below that follows the current progress position."}}}},h={args:{value:0,label:"right",width:320},parameters:{docs:{description:{story:"Progress bar showing 0% completion - initial state."}}}},b={args:{value:100,label:"right",width:320},parameters:{docs:{description:{story:"Progress bar showing 100% completion - finished state."}}}},f={args:{value:33,label:"top-floating",width:320},parameters:{docs:{description:{story:"Progress bar showing partial completion with floating tooltip."}}}},w={args:{value:50,label:"right",width:320,height:4},parameters:{docs:{description:{story:"Thin progress bar with 4px height - subtle and minimal."}}}},v={args:{value:70,label:"right",width:320,height:16},parameters:{docs:{description:{story:"Thick progress bar with 16px height - prominent and bold."}}}},y={args:{value:85,label:"right",width:500},parameters:{docs:{description:{story:"Wide progress bar for dashboard layouts or desktop applications."}}}},x={args:{value:25,label:"bottom",width:200},parameters:{docs:{description:{story:"Narrow progress bar suitable for compact interfaces or mobile layouts."}}}},T={args:{value:60,label:"right",width:320,progressColor:"#10B981",backgroundColor:"#F3F4F6"},parameters:{docs:{description:{story:"Progress bar with custom green progress color and light gray background."}}}},P={args:{value:7,max:10,label:"right",labelText:"7 of 10 files",width:320},parameters:{docs:{description:{story:"Progress bar with custom label text instead of percentage display."}}}},S={args:{value:80,label:"top-floating",width:320,animationDuration:1500},parameters:{docs:{description:{story:"Progress bar with slower animation for dramatic effect or loading states."}}}},k={args:{value:90,label:"bottom-floating",width:320,animationDuration:100},parameters:{docs:{description:{story:"Progress bar with fast animation for quick updates or real-time data."}}}},C={args:{value:55,label:"right",width:320,disabled:!0},parameters:{docs:{description:{story:"Disabled progress bar with reduced opacity and muted colors."}}}},j={args:{value:42,label:"top-floating",labelText:"Uploading...",width:400,height:8},parameters:{docs:{description:{story:'File upload progress indicator with custom "Uploading..." text and floating tooltip.'}}}},L={args:{value:6,max:8,label:"right",labelText:"6/8 tasks complete",width:350},parameters:{docs:{description:{story:"Task completion tracker showing progress through a series of steps."}}}},B={args:{value:23,label:"bottom",labelText:"Loading assets...",width:300,height:6},parameters:{docs:{description:{story:"Loading progress indicator with descriptive text for asset loading."}}}},F={args:{value:78,label:"bottom-floating",width:380,height:10},parameters:{docs:{description:{story:"Installation progress with floating percentage indicator."}}}},_={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",fontWeight:"600"},children:"Overall Progress"}),e.jsx(i,{value:85,label:"right",width:350})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",fontWeight:"600"},children:"Current Task"}),e.jsx(i,{value:45,label:"right",width:350,height:6})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",fontWeight:"600"},children:"Subtask"}),e.jsx(i,{value:90,label:"right",width:350,height:4})]})]}),parameters:{docs:{description:{story:"Multiple progress bars showing hierarchical progress - overall, current task, and subtask."}}}};var I,V,$;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    value: 40,
    label: 'right',
    width: 320
  },
  parameters: {
    docs: {
      description: {
        story: 'Default progress bar with right-positioned label showing 40% completion.'
      }
    }
  }
}`,...($=(V=d.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var R,U,E;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    value: 60,
    label: false,
    width: 320
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar without any label - clean and minimal design.'
      }
    }
  }
}`,...(E=(U=c.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var H,O,Z;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    value: 75,
    label: 'bottom',
    width: 320
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar with label positioned below the bar.'
      }
    }
  }
}`,...(Z=(O=g.parameters)==null?void 0:O.docs)==null?void 0:Z.source}}};var G,J,K;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    value: 65,
    label: 'top-floating',
    width: 320
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar with floating tooltip above that follows the current progress position.'
      }
    }
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    value: 45,
    label: 'bottom-floating',
    width: 320
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar with floating tooltip below that follows the current progress position.'
      }
    }
  }
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,re,se;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    value: 0,
    label: 'right',
    width: 320
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar showing 0% completion - initial state.'
      }
    }
  }
}`,...(se=(re=h.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,ae,oe;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    value: 100,
    label: 'right',
    width: 320
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar showing 100% completion - finished state.'
      }
    }
  }
}`,...(oe=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ie,ne,le;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    value: 33,
    label: 'top-floating',
    width: 320
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar showing partial completion with floating tooltip.'
      }
    }
  }
}`,...(le=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var pe,de,ce;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    value: 50,
    label: 'right',
    width: 320,
    height: 4
  },
  parameters: {
    docs: {
      description: {
        story: 'Thin progress bar with 4px height - subtle and minimal.'
      }
    }
  }
}`,...(ce=(de=w.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ge,me,ue;v.parameters={...v.parameters,docs:{...(ge=v.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    value: 70,
    label: 'right',
    width: 320,
    height: 16
  },
  parameters: {
    docs: {
      description: {
        story: 'Thick progress bar with 16px height - prominent and bold.'
      }
    }
  }
}`,...(ue=(me=v.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var he,be,fe;y.parameters={...y.parameters,docs:{...(he=y.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    value: 85,
    label: 'right',
    width: 500
  },
  parameters: {
    docs: {
      description: {
        story: 'Wide progress bar for dashboard layouts or desktop applications.'
      }
    }
  }
}`,...(fe=(be=y.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var we,ve,ye;x.parameters={...x.parameters,docs:{...(we=x.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    value: 25,
    label: 'bottom',
    width: 200
  },
  parameters: {
    docs: {
      description: {
        story: 'Narrow progress bar suitable for compact interfaces or mobile layouts.'
      }
    }
  }
}`,...(ye=(ve=x.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var xe,Te,Pe;T.parameters={...T.parameters,docs:{...(xe=T.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    value: 60,
    label: 'right',
    width: 320,
    progressColor: '#10B981',
    backgroundColor: '#F3F4F6'
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar with custom green progress color and light gray background.'
      }
    }
  }
}`,...(Pe=(Te=T.parameters)==null?void 0:Te.docs)==null?void 0:Pe.source}}};var Se,ke,Ce;P.parameters={...P.parameters,docs:{...(Se=P.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    value: 7,
    max: 10,
    label: 'right',
    labelText: '7 of 10 files',
    width: 320
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar with custom label text instead of percentage display.'
      }
    }
  }
}`,...(Ce=(ke=P.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var je,Le,Be;S.parameters={...S.parameters,docs:{...(je=S.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    value: 80,
    label: 'top-floating',
    width: 320,
    animationDuration: 1500
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar with slower animation for dramatic effect or loading states.'
      }
    }
  }
}`,...(Be=(Le=S.parameters)==null?void 0:Le.docs)==null?void 0:Be.source}}};var Fe,_e,De;k.parameters={...k.parameters,docs:{...(Fe=k.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    value: 90,
    label: 'bottom-floating',
    width: 320,
    animationDuration: 100
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar with fast animation for quick updates or real-time data.'
      }
    }
  }
}`,...(De=(_e=k.parameters)==null?void 0:_e.docs)==null?void 0:De.source}}};var qe,Ne,Me;C.parameters={...C.parameters,docs:{...(qe=C.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    value: 55,
    label: 'right',
    width: 320,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled progress bar with reduced opacity and muted colors.'
      }
    }
  }
}`,...(Me=(Ne=C.parameters)==null?void 0:Ne.docs)==null?void 0:Me.source}}};var Ae,We,ze;j.parameters={...j.parameters,docs:{...(Ae=j.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    value: 42,
    label: 'top-floating',
    labelText: 'Uploading...',
    width: 400,
    height: 8
  },
  parameters: {
    docs: {
      description: {
        story: 'File upload progress indicator with custom "Uploading..." text and floating tooltip.'
      }
    }
  }
}`,...(ze=(We=j.parameters)==null?void 0:We.docs)==null?void 0:ze.source}}};var Ie,Ve,$e;L.parameters={...L.parameters,docs:{...(Ie=L.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    value: 6,
    max: 8,
    label: 'right',
    labelText: '6/8 tasks complete',
    width: 350
  },
  parameters: {
    docs: {
      description: {
        story: 'Task completion tracker showing progress through a series of steps.'
      }
    }
  }
}`,...($e=(Ve=L.parameters)==null?void 0:Ve.docs)==null?void 0:$e.source}}};var Re,Ue,Ee;B.parameters={...B.parameters,docs:{...(Re=B.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    value: 23,
    label: 'bottom',
    labelText: 'Loading assets...',
    width: 300,
    height: 6
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading progress indicator with descriptive text for asset loading.'
      }
    }
  }
}`,...(Ee=(Ue=B.parameters)==null?void 0:Ue.docs)==null?void 0:Ee.source}}};var He,Oe,Ze;F.parameters={...F.parameters,docs:{...(He=F.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    value: 78,
    label: 'bottom-floating',
    width: 380,
    height: 10
  },
  parameters: {
    docs: {
      description: {
        story: 'Installation progress with floating percentage indicator.'
      }
    }
  }
}`,...(Ze=(Oe=F.parameters)==null?void 0:Oe.docs)==null?void 0:Ze.source}}};var Ge,Je,Ke;_.parameters={..._.parameters,docs:{...(Ge=_.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '400px'
  }}>
      <div>
        <h4 style={{
        margin: '0 0 8px 0',
        fontSize: '14px',
        fontWeight: '600'
      }}>Overall Progress</h4>
        <ProgressBar value={85} label="right" width={350} />
      </div>
      <div>
        <h4 style={{
        margin: '0 0 8px 0',
        fontSize: '14px',
        fontWeight: '600'
      }}>Current Task</h4>
        <ProgressBar value={45} label="right" width={350} height={6} />
      </div>
      <div>
        <h4 style={{
        margin: '0 0 8px 0',
        fontSize: '14px',
        fontWeight: '600'
      }}>Subtask</h4>
        <ProgressBar value={90} label="right" width={350} height={4} />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Multiple progress bars showing hierarchical progress - overall, current task, and subtask.'
      }
    }
  }
}`,...(Ke=(Je=_.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};const wr=["Default","NoLabel","BottomLabel","TopFloating","BottomFloating","Empty","Complete","PartialProgress","SmallHeight","LargeHeight","Wide","Narrow","CustomColors","CustomText","SlowAnimation","FastAnimation","Disabled","FileUpload","TaskCompletion","LoadingProgress","InstallationProgress","MultipleProgress"];export{u as BottomFloating,g as BottomLabel,b as Complete,T as CustomColors,P as CustomText,d as Default,C as Disabled,h as Empty,k as FastAnimation,j as FileUpload,F as InstallationProgress,v as LargeHeight,B as LoadingProgress,_ as MultipleProgress,x as Narrow,c as NoLabel,f as PartialProgress,S as SlowAnimation,w as SmallHeight,L as TaskCompletion,m as TopFloating,y as Wide,wr as __namedExportsOrder,fr as default};
