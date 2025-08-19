import{j as e}from"./jsx-runtime-DiklIkkE.js";import{R as C,r as I}from"./index-DRjF_FHU.js";const de=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{clipPath:"url(#clip0_8678_3350)",children:e.jsx("path",{d:"M10.0001 18.3334C14.6025 18.3334 18.3334 14.6024 18.3334 10C18.3334 5.39765 14.6025 1.66669 10.0001 1.66669C5.39771 1.66669 1.66675 5.39765 1.66675 10C1.66675 14.6024 5.39771 18.3334 10.0001 18.3334Z",stroke:"#717680",strokeWidth:"1.67",strokeLinecap:"round",strokeLinejoin:"round"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_8678_3350",children:e.jsx("rect",{width:"20",height:"20",fill:"white"})})})]}),ue=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M15.8334 10H4.16675M4.16675 10L10.0001 15.8334M4.16675 10L10.0001 4.16669",stroke:"#717680",strokeWidth:"1.67",strokeLinecap:"round",strokeLinejoin:"round"})}),pe=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10.0001 4.16669V15.8334M4.16675 10H15.8334",stroke:"#717680",strokeWidth:"1.67",strokeLinecap:"round",strokeLinejoin:"round"})}),me=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M4.16675 10H15.8334M15.8334 10L10.0001 4.16669M15.8334 10L10.0001 15.8334",stroke:"#717680",strokeWidth:"1.67",strokeLinecap:"round",strokeLinejoin:"round"})}),o=C.forwardRef(({icon:t="false",items:n,className:r,...re},oe)=>{const se="nexus-button-group",ie=`nexus-button-group--icon-${t}`,ce=[se,ie,r].filter(Boolean).join(" "),v=[ue,pe,me];return e.jsx("div",{ref:oe,className:ce,role:"group",...re,children:n.map((s,y)=>{const ae=y===n.length-1,le=["nexus-button-group__item",s.current?"nexus-button-group__item--current":"",ae?"nexus-button-group__item--last":""].filter(Boolean).join(" ");return e.jsxs("button",{type:"button",className:le,onClick:s.onClick,children:[t==="leading"&&e.jsx(de,{}),t==="only"?C.createElement(v[y%v.length]):e.jsx("span",{className:"nexus-button-group__text",children:s.children})]},s.id||y)})})});o.displayName="ButtonGroup";o.__docgenInfo={description:"Button Group component for grouping related actions",methods:[],displayName:"ButtonGroup",props:{icon:{required:!1,tsType:{name:"union",raw:"'false' | 'leading' | 'only'",elements:[{name:"literal",value:"'false'"},{name:"literal",value:"'leading'"},{name:"literal",value:"'only'"}]},description:"Icon configuration for the button group",defaultValue:{value:"'false'",computed:!1}},items:{required:!0,tsType:{name:"Array",elements:[{name:"ButtonGroupItem"}],raw:"ButtonGroupItem[]"},description:"Array of button items to render"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"}}};const ge={title:"Design System/ButtonGroup",component:o,parameters:{layout:"centered",docs:{description:{component:"Button Group component for organizing related actions. Supports text-only, leading icon, and icon-only variants."}}},argTypes:{icon:{control:{type:"select"},options:["false","leading","only"],description:"Icon configuration for the button group"},items:{control:!1,description:"Array of button items to render"}},tags:["autodocs"]},f=[{children:"Text",id:"text1"},{children:"Text",id:"text2"},{children:"Text",id:"text3"}],te=[{children:"Text",id:"text1"},{children:"Text",id:"text2",current:!0},{children:"Text",id:"text3"}],ne=[{children:"Previous",id:"prev"},{children:"Add",id:"add"},{children:"Next",id:"next"}],i={args:{icon:"false",items:f}},c={args:{icon:"false",items:te}},a={args:{icon:"leading",items:f}},l={args:{icon:"leading",items:te}},d={args:{icon:"only",items:ne}},u={args:{icon:"only",items:[{children:"Previous",id:"prev"},{children:"Add",id:"add",current:!0},{children:"Next",id:"next"}]}},p={render:()=>{const[t,n]=I.useState(null),r=[{children:"Overview",id:"overview",current:t===0,onClick:()=>n(0)},{children:"Details",id:"details",current:t===1,onClick:()=>n(1)},{children:"Settings",id:"settings",current:t===2,onClick:()=>n(2)}];return e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"800",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Interactive Text-Only Button Group"}),e.jsx(o,{icon:"false",items:r}),t!==null&&e.jsxs("p",{style:{marginTop:"16px",fontSize:"14px",color:"#64748B",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:["Selected: ",r[t].children]})]})}},m={render:()=>{const[t,n]=I.useState(null),r=[{children:"Profile",id:"profile",current:t===0,onClick:()=>n(0)},{children:"Account",id:"account",current:t===1,onClick:()=>n(1)},{children:"Security",id:"security",current:t===2,onClick:()=>n(2)}];return e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"800",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Interactive Leading Icon Button Group"}),e.jsx(o,{icon:"leading",items:r}),t!==null&&e.jsxs("p",{style:{marginTop:"16px",fontSize:"14px",color:"#64748B",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:["Selected: ",r[t].children]})]})}},x={render:()=>{const[t,n]=I.useState(null),r=[{children:"Previous Page",id:"prev",current:t===0,onClick:()=>n(0)},{children:"Add Item",id:"add",current:t===1,onClick:()=>n(1)},{children:"Next Page",id:"next",current:t===2,onClick:()=>n(2)}];return e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"800",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Interactive Icon-Only Button Group"}),e.jsx(o,{icon:"only",items:r}),t!==null&&e.jsxs("p",{style:{marginTop:"16px",fontSize:"14px",color:"#64748B",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:["Selected: ",r[t].children]})]})}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"8px",fontSize:"16px",fontWeight:"800",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Text Only"}),e.jsx(o,{icon:"false",items:f})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"8px",fontSize:"16px",fontWeight:"800",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Leading Icon"}),e.jsx(o,{icon:"leading",items:f})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"8px",fontSize:"16px",fontWeight:"800",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Icon Only"}),e.jsx(o,{icon:"only",items:ne})]})]})},g={render:()=>{const t=[{children:"Dashboard",id:"dashboard"},{children:"Analytics",id:"analytics",current:!0},{children:"Reports",id:"reports"},{children:"Settings",id:"settings"}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("h3",{style:{marginBottom:"8px",fontSize:"16px",fontWeight:"800",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Navigation Tabs"}),e.jsx(o,{icon:"false",items:t})]})}};var S,j,B;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    icon: 'false',
    items: defaultItems
  }
}`,...(B=(j=i.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var b,k,w;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    icon: 'false',
    items: itemsWithCurrent
  }
}`,...(w=(k=c.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var T,R,W;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    icon: 'leading',
    items: defaultItems
  }
}`,...(W=(R=a.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var O,L,H;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    icon: 'leading',
    items: itemsWithCurrent
  }
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var z,G,F;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    icon: 'only',
    items: iconOnlyItems
  }
}`,...(F=(G=d.parameters)==null?void 0:G.docs)==null?void 0:F.source}}};var A,_,P;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    icon: 'only',
    items: [{
      children: 'Previous',
      id: 'prev'
    }, {
      children: 'Add',
      id: 'add',
      current: true
    }, {
      children: 'Next',
      id: 'next'
    }]
  }
}`,...(P=(_=u.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var N,D,M;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const items = [{
      children: 'Overview',
      id: 'overview',
      current: currentIndex === 0,
      onClick: () => setCurrentIndex(0)
    }, {
      children: 'Details',
      id: 'details',
      current: currentIndex === 1,
      onClick: () => setCurrentIndex(1)
    }, {
      children: 'Settings',
      id: 'settings',
      current: currentIndex === 2,
      onClick: () => setCurrentIndex(2)
    }];
    return <div>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '16px',
        fontWeight: '800',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Interactive Text-Only Button Group
        </h3>
        <ButtonGroup icon="false" items={items} />
        {currentIndex !== null && <p style={{
        marginTop: '16px',
        fontSize: '14px',
        color: '#64748B',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
            Selected: {items[currentIndex].children}
          </p>}
      </div>;
  }
}`,...(M=(D=p.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var E,V,q;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const items = [{
      children: 'Profile',
      id: 'profile',
      current: currentIndex === 0,
      onClick: () => setCurrentIndex(0)
    }, {
      children: 'Account',
      id: 'account',
      current: currentIndex === 1,
      onClick: () => setCurrentIndex(1)
    }, {
      children: 'Security',
      id: 'security',
      current: currentIndex === 2,
      onClick: () => setCurrentIndex(2)
    }];
    return <div>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '16px',
        fontWeight: '800',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Interactive Leading Icon Button Group
        </h3>
        <ButtonGroup icon="leading" items={items} />
        {currentIndex !== null && <p style={{
        marginTop: '16px',
        fontSize: '14px',
        color: '#64748B',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
            Selected: {items[currentIndex].children}
          </p>}
      </div>;
  }
}`,...(q=(V=m.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var Z,$,J;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const items = [{
      children: 'Previous Page',
      id: 'prev',
      current: currentIndex === 0,
      onClick: () => setCurrentIndex(0)
    }, {
      children: 'Add Item',
      id: 'add',
      current: currentIndex === 1,
      onClick: () => setCurrentIndex(1)
    }, {
      children: 'Next Page',
      id: 'next',
      current: currentIndex === 2,
      onClick: () => setCurrentIndex(2)
    }];
    return <div>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '16px',
        fontWeight: '800',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Interactive Icon-Only Button Group
        </h3>
        <ButtonGroup icon="only" items={items} />
        {currentIndex !== null && <p style={{
        marginTop: '16px',
        fontSize: '14px',
        color: '#64748B',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
            Selected: {items[currentIndex].children}
          </p>}
      </div>;
  }
}`,...(J=($=x.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var K,Q,U;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '8px',
        fontSize: '16px',
        fontWeight: '800',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Text Only
        </h3>
        <ButtonGroup icon="false" items={defaultItems} />
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '8px',
        fontSize: '16px',
        fontWeight: '800',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Leading Icon
        </h3>
        <ButtonGroup icon="leading" items={defaultItems} />
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '8px',
        fontSize: '16px',
        fontWeight: '800',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Icon Only
        </h3>
        <ButtonGroup icon="only" items={iconOnlyItems} />
      </div>
    </div>
}`,...(U=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,ee;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const customItems = [{
      children: 'Dashboard',
      id: 'dashboard'
    }, {
      children: 'Analytics',
      id: 'analytics',
      current: true
    }, {
      children: 'Reports',
      id: 'reports'
    }, {
      children: 'Settings',
      id: 'settings'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <h3 style={{
        marginBottom: '8px',
        fontSize: '16px',
        fontWeight: '800',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Navigation Tabs
        </h3>
        <ButtonGroup icon="false" items={customItems} />
      </div>;
  }
}`,...(ee=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};const fe=["TextOnly","TextOnlyWithCurrent","LeadingIcon","LeadingIconWithCurrent","IconOnly","IconOnlyWithCurrent","InteractiveTextOnly","InteractiveLeadingIcon","InteractiveIconOnly","AllVariants","CustomContent"];export{h as AllVariants,g as CustomContent,d as IconOnly,u as IconOnlyWithCurrent,x as InteractiveIconOnly,m as InteractiveLeadingIcon,p as InteractiveTextOnly,a as LeadingIcon,l as LeadingIconWithCurrent,i as TextOnly,c as TextOnlyWithCurrent,fe as __namedExportsOrder,ge as default};
