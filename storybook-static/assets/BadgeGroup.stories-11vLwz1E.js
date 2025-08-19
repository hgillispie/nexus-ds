import{j as e}from"./jsx-runtime-DiklIkkE.js";import{R as Le,r as je}from"./index-DRjF_FHU.js";import{B as Ce}from"./Badge-C-rVHjqD.js";const Fe=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"nexus-badge-group__message-icon",children:e.jsx("path",{d:"M3.33333 8.00001H12.6667M12.6667 8.00001L8 3.33334M12.6667 8.00001L8 12.6667",stroke:"currentColor",strokeWidth:"1.3333",strokeLinecap:"round",strokeLinejoin:"round"})}),a=Le.forwardRef(({message:s,badge:r,badgePosition:j="leading",size:P="md",showMessageIcon:z=!1,className:Pe,onClick:o,...Be},Se)=>{const We="nexus-badge-group",Me=`nexus-badge-group--${j}`,Ne=`nexus-badge-group--size-${P}`,ke=[We,Me,Ne,o?"nexus-badge-group--interactive":"",Pe].filter(Boolean).join(" "),Ge=P==="lg"?"md":"sm",Te=r.hasIcon?"trailing":"none",B=e.jsx(Ce,{size:Ge,color:r.color,icon:Te,onClick:o,children:r.children}),i=e.jsxs("div",{className:"nexus-badge-group__message",children:[e.jsx("span",{className:"nexus-badge-group__message-text",children:s}),z&&e.jsx(Fe,{})]}),Re=z?e.jsx("div",{className:"nexus-badge-group__content",children:i}):i;return e.jsx("div",{ref:Se,className:ke,onClick:o,role:o?"button":void 0,tabIndex:o?0:void 0,...Be,children:j==="leading"?e.jsxs(e.Fragment,{children:[B,z?Re:i]}):e.jsxs(e.Fragment,{children:[i,B]})})});a.displayName="BadgeGroup";a.__docgenInfo={description:"Badge Group component that combines a badge with message text",methods:[],displayName:"BadgeGroup",props:{message:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main message text to display"},badge:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  /**
   * Badge content
   */
  children: React.ReactNode;
  
  /**
   * Badge color theme
   */
  color?: BadgeProps['color'];
  
  /**
   * Whether the badge has an icon
   */
  hasIcon?: boolean;
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0},description:"Badge content"},{key:"color",value:{name:"BadgeProps['color']",raw:"BadgeProps['color']",required:!1},description:"Badge color theme"},{key:"hasIcon",value:{name:"boolean",required:!1},description:"Whether the badge has an icon"}]}},description:"Badge configuration"},badgePosition:{required:!1,tsType:{name:"union",raw:"'leading' | 'trailing'",elements:[{name:"literal",value:"'leading'"},{name:"literal",value:"'trailing'"}]},description:"Position of the badge relative to the message",defaultValue:{value:"'leading'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'md' | 'lg'",elements:[{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant affecting both badge and message",defaultValue:{value:"'md'",computed:!1}},showMessageIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show an arrow icon after the message (for leading badge groups)",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler for interactive badge groups"}}};const _e={title:"Design System/BadgeGroup",component:a,parameters:{layout:"centered",docs:{description:{component:"Badge Group component that combines a badge with message text. Supports leading and trailing badge positions with various configurations."}}},argTypes:{badgePosition:{control:{type:"select"},options:["leading","trailing"],description:"Position of badge relative to message"},size:{control:{type:"select"},options:["md","lg"],description:"Size variant affecting both badge and message"},showMessageIcon:{control:"boolean",description:"Whether to show arrow icon after message"},message:{control:"text",description:"Main message text"},"badge.children":{control:"text",description:"Badge content"},"badge.color":{control:{type:"select"},options:["primary","gray","error","warning","success"],description:"Badge color theme"},"badge.hasIcon":{control:"boolean",description:"Whether badge has trailing icon"}},tags:["autodocs"]},t={args:{message:"We've just released a new feature",badge:{children:"New feature",color:"primary",hasIcon:!1},badgePosition:"leading",size:"md",showMessageIcon:!1}},n={args:{message:"We've just released a new feature",badge:{children:"New feature",color:"gray",hasIcon:!1},badgePosition:"leading",size:"md",showMessageIcon:!1}},d={args:{message:"We've just released a new feature",badge:{children:"New feature",color:"primary",hasIcon:!1},badgePosition:"leading",size:"md",showMessageIcon:!0}},l={args:{message:"There was a problem with that action",badge:{children:"Error",color:"error",hasIcon:!1},badgePosition:"leading",size:"md",showMessageIcon:!0}},c={args:{message:"Just to let you know this might be a problem",badge:{children:"Warning",color:"warning",hasIcon:!1},badgePosition:"leading",size:"md",showMessageIcon:!0}},g={args:{message:"You've updated your profile and details",badge:{children:"Success",color:"success",hasIcon:!1},badgePosition:"leading",size:"md",showMessageIcon:!0}},m={args:{message:"We've just released a new feature",badge:{children:"New feature",color:"primary",hasIcon:!1},badgePosition:"trailing",size:"md",showMessageIcon:!1}},u={args:{message:"We've just released a new feature",badge:{children:"New feature",color:"primary",hasIcon:!0},badgePosition:"trailing",size:"md",showMessageIcon:!1}},p={args:{message:"There was a problem with that action",badge:{children:"Fix now",color:"error",hasIcon:!0},badgePosition:"trailing",size:"md",showMessageIcon:!1}},h={args:{message:"Just to let you know this might be a problem",badge:{children:"Warning",color:"warning",hasIcon:!0},badgePosition:"trailing",size:"md",showMessageIcon:!1}},f={args:{message:"You've updated your profile and details",badge:{children:"Success",color:"success",hasIcon:!0},badgePosition:"trailing",size:"md",showMessageIcon:!1}},b={args:{message:"We've just released a new feature",badge:{children:"New feature",color:"primary",hasIcon:!1},badgePosition:"leading",size:"md",showMessageIcon:!1}},x={args:{message:"We've just released a new feature",badge:{children:"New feature",color:"primary",hasIcon:!1},badgePosition:"leading",size:"lg",showMessageIcon:!1}},w={render:()=>{const[s,r]=je.useState(!1);return e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"800",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Interactive Leading Badge Group"}),e.jsx(a,{message:"Click this badge group to interact",badge:{children:"Interactive",color:"primary",hasIcon:!1},badgePosition:"leading",size:"md",showMessageIcon:!0,onClick:()=>r(!s)}),s&&e.jsx("p",{style:{marginTop:"16px",fontSize:"14px",color:"#64748B"},children:"Badge group was clicked!"})]})}},y={render:()=>{const[s,r]=je.useState(0);return e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"800",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Interactive Trailing Badge Group"}),e.jsx(a,{message:`Clicked ${s} times`,badge:{children:"Click me",color:"success",hasIcon:!0},badgePosition:"trailing",size:"md",onClick:()=>r(s+1)})]})}},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"600px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:"800",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Leading Badge Groups (Medium Size)"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{message:"We've just released a new feature",badge:{children:"New feature",color:"primary"},badgePosition:"leading",size:"md"}),e.jsx(a,{message:"We've just released a new feature",badge:{children:"New feature",color:"primary"},badgePosition:"leading",size:"md",showMessageIcon:!0}),e.jsx(a,{message:"There was a problem with that action",badge:{children:"Error",color:"error"},badgePosition:"leading",size:"md",showMessageIcon:!0}),e.jsx(a,{message:"Just to let you know this might be a problem",badge:{children:"Warning",color:"warning"},badgePosition:"leading",size:"md",showMessageIcon:!0}),e.jsx(a,{message:"You've updated your profile and details",badge:{children:"Success",color:"success"},badgePosition:"leading",size:"md",showMessageIcon:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:"800",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Trailing Badge Groups (Medium Size)"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{message:"We've just released a new feature",badge:{children:"New feature",color:"primary"},badgePosition:"trailing",size:"md"}),e.jsx(a,{message:"We've just released a new feature",badge:{children:"New feature",color:"primary",hasIcon:!0},badgePosition:"trailing",size:"md"}),e.jsx(a,{message:"There was a problem with that action",badge:{children:"Fix now",color:"error",hasIcon:!0},badgePosition:"trailing",size:"md"}),e.jsx(a,{message:"Just to let you know this might be a problem",badge:{children:"Warning",color:"warning",hasIcon:!0},badgePosition:"trailing",size:"md"}),e.jsx(a,{message:"You've updated your profile and details",badge:{children:"Success",color:"success",hasIcon:!0},badgePosition:"trailing",size:"md"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:"800",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Large Size Variants"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{message:"We've just released a new feature",badge:{children:"New feature",color:"primary"},badgePosition:"leading",size:"lg"}),e.jsx(a,{message:"We've just released a new feature",badge:{children:"New feature",color:"primary",hasIcon:!0},badgePosition:"trailing",size:"lg"})]})]})]})},I={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"600px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:"800",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Feature Announcements"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{message:"Check out our latest dashboard improvements",badge:{children:"New",color:"primary"},badgePosition:"leading",showMessageIcon:!0}),e.jsx(a,{message:"Beta features are now available for testing",badge:{children:"Beta",color:"warning"},badgePosition:"leading",showMessageIcon:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:"800",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Status Updates"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{message:"Your account has been successfully verified",badge:{children:"Verified",color:"success",hasIcon:!0},badgePosition:"trailing"}),e.jsx(a,{message:"Please review your profile information",badge:{children:"Action Required",color:"warning",hasIcon:!0},badgePosition:"trailing"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:"800",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Error Messages"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{message:"Connection failed, please try again",badge:{children:"Retry",color:"error",hasIcon:!0},badgePosition:"trailing"}),e.jsx(a,{message:"Some features may not work properly",badge:{children:"Warning",color:"warning"},badgePosition:"leading",showMessageIcon:!0})]})]})]})};var S,W,M;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    message: "We've just released a new feature",
    badge: {
      children: 'New feature',
      color: 'primary',
      hasIcon: false
    },
    badgePosition: 'leading',
    size: 'md',
    showMessageIcon: false
  }
}`,...(M=(W=t.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var N,k,G;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    message: "We've just released a new feature",
    badge: {
      children: 'New feature',
      color: 'gray',
      hasIcon: false
    },
    badgePosition: 'leading',
    size: 'md',
    showMessageIcon: false
  }
}`,...(G=(k=n.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};var T,R,L;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    message: "We've just released a new feature",
    badge: {
      children: 'New feature',
      color: 'primary',
      hasIcon: false
    },
    badgePosition: 'leading',
    size: 'md',
    showMessageIcon: true
  }
}`,...(L=(R=d.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var C,F,D;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    message: "There was a problem with that action",
    badge: {
      children: 'Error',
      color: 'error',
      hasIcon: false
    },
    badgePosition: 'leading',
    size: 'md',
    showMessageIcon: true
  }
}`,...(D=(F=l.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var E,H,q;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    message: "Just to let you know this might be a problem",
    badge: {
      children: 'Warning',
      color: 'warning',
      hasIcon: false
    },
    badgePosition: 'leading',
    size: 'md',
    showMessageIcon: true
  }
}`,...(q=(H=c.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var _,Y,V;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    message: "You've updated your profile and details",
    badge: {
      children: 'Success',
      color: 'success',
      hasIcon: false
    },
    badgePosition: 'leading',
    size: 'md',
    showMessageIcon: true
  }
}`,...(V=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:V.source}}};var A,J,U;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    message: "We've just released a new feature",
    badge: {
      children: 'New feature',
      color: 'primary',
      hasIcon: false
    },
    badgePosition: 'trailing',
    size: 'md',
    showMessageIcon: false
  }
}`,...(U=(J=m.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var $,O,K;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    message: "We've just released a new feature",
    badge: {
      children: 'New feature',
      color: 'primary',
      hasIcon: true
    },
    badgePosition: 'trailing',
    size: 'md',
    showMessageIcon: false
  }
}`,...(K=(O=u.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var Q,X,Z;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    message: "There was a problem with that action",
    badge: {
      children: 'Fix now',
      color: 'error',
      hasIcon: true
    },
    badgePosition: 'trailing',
    size: 'md',
    showMessageIcon: false
  }
}`,...(Z=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,se;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    message: "Just to let you know this might be a problem",
    badge: {
      children: 'Warning',
      color: 'warning',
      hasIcon: true
    },
    badgePosition: 'trailing',
    size: 'md',
    showMessageIcon: false
  }
}`,...(se=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var re,oe,ie;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    message: "You've updated your profile and details",
    badge: {
      children: 'Success',
      color: 'success',
      hasIcon: true
    },
    badgePosition: 'trailing',
    size: 'md',
    showMessageIcon: false
  }
}`,...(ie=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var te,ne,de;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    message: "We've just released a new feature",
    badge: {
      children: 'New feature',
      color: 'primary',
      hasIcon: false
    },
    badgePosition: 'leading',
    size: 'md',
    showMessageIcon: false
  }
}`,...(de=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:de.source}}};var le,ce,ge;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    message: "We've just released a new feature",
    badge: {
      children: 'New feature',
      color: 'primary',
      hasIcon: false
    },
    badgePosition: 'leading',
    size: 'lg',
    showMessageIcon: false
  }
}`,...(ge=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:ge.source}}};var me,ue,pe;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const [clicked, setClicked] = useState(false);
    return <div>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '16px',
        fontWeight: '800',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Interactive Leading Badge Group
        </h3>
        <BadgeGroup message="Click this badge group to interact" badge={{
        children: 'Interactive',
        color: 'primary',
        hasIcon: false
      }} badgePosition="leading" size="md" showMessageIcon={true} onClick={() => setClicked(!clicked)} />
        {clicked && <p style={{
        marginTop: '16px',
        fontSize: '14px',
        color: '#64748B'
      }}>
            Badge group was clicked!
          </p>}
      </div>;
  }
}`,...(pe=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var he,fe,be;y.parameters={...y.parameters,docs:{...(he=y.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const [count, setCount] = useState(0);
    return <div>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '16px',
        fontWeight: '800',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Interactive Trailing Badge Group
        </h3>
        <BadgeGroup message={\`Clicked \${count} times\`} badge={{
        children: 'Click me',
        color: 'success',
        hasIcon: true
      }} badgePosition="trailing" size="md" onClick={() => setCount(count + 1)} />
      </div>;
  }
}`,...(be=(fe=y.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var xe,we,ye;v.parameters={...v.parameters,docs:{...(xe=v.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: '600px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '16px',
        fontWeight: '800',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Leading Badge Groups (Medium Size)
        </h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <BadgeGroup message="We've just released a new feature" badge={{
          children: 'New feature',
          color: 'primary'
        }} badgePosition="leading" size="md" />
          <BadgeGroup message="We've just released a new feature" badge={{
          children: 'New feature',
          color: 'primary'
        }} badgePosition="leading" size="md" showMessageIcon />
          <BadgeGroup message="There was a problem with that action" badge={{
          children: 'Error',
          color: 'error'
        }} badgePosition="leading" size="md" showMessageIcon />
          <BadgeGroup message="Just to let you know this might be a problem" badge={{
          children: 'Warning',
          color: 'warning'
        }} badgePosition="leading" size="md" showMessageIcon />
          <BadgeGroup message="You've updated your profile and details" badge={{
          children: 'Success',
          color: 'success'
        }} badgePosition="leading" size="md" showMessageIcon />
        </div>
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '16px',
        fontWeight: '800',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Trailing Badge Groups (Medium Size)
        </h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <BadgeGroup message="We've just released a new feature" badge={{
          children: 'New feature',
          color: 'primary'
        }} badgePosition="trailing" size="md" />
          <BadgeGroup message="We've just released a new feature" badge={{
          children: 'New feature',
          color: 'primary',
          hasIcon: true
        }} badgePosition="trailing" size="md" />
          <BadgeGroup message="There was a problem with that action" badge={{
          children: 'Fix now',
          color: 'error',
          hasIcon: true
        }} badgePosition="trailing" size="md" />
          <BadgeGroup message="Just to let you know this might be a problem" badge={{
          children: 'Warning',
          color: 'warning',
          hasIcon: true
        }} badgePosition="trailing" size="md" />
          <BadgeGroup message="You've updated your profile and details" badge={{
          children: 'Success',
          color: 'success',
          hasIcon: true
        }} badgePosition="trailing" size="md" />
        </div>
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '16px',
        fontWeight: '800',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Large Size Variants
        </h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <BadgeGroup message="We've just released a new feature" badge={{
          children: 'New feature',
          color: 'primary'
        }} badgePosition="leading" size="lg" />
          <BadgeGroup message="We've just released a new feature" badge={{
          children: 'New feature',
          color: 'primary',
          hasIcon: true
        }} badgePosition="trailing" size="lg" />
        </div>
      </div>
    </div>
}`,...(ye=(we=v.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};var ve,Ie,ze;I.parameters={...I.parameters,docs:{...(ve=I.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: '600px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '16px',
        fontWeight: '800',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Feature Announcements
        </h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
          <BadgeGroup message="Check out our latest dashboard improvements" badge={{
          children: 'New',
          color: 'primary'
        }} badgePosition="leading" showMessageIcon />
          <BadgeGroup message="Beta features are now available for testing" badge={{
          children: 'Beta',
          color: 'warning'
        }} badgePosition="leading" showMessageIcon />
        </div>
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '16px',
        fontWeight: '800',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Status Updates
        </h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
          <BadgeGroup message="Your account has been successfully verified" badge={{
          children: 'Verified',
          color: 'success',
          hasIcon: true
        }} badgePosition="trailing" />
          <BadgeGroup message="Please review your profile information" badge={{
          children: 'Action Required',
          color: 'warning',
          hasIcon: true
        }} badgePosition="trailing" />
        </div>
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '16px',
        fontWeight: '800',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Error Messages
        </h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
          <BadgeGroup message="Connection failed, please try again" badge={{
          children: 'Retry',
          color: 'error',
          hasIcon: true
        }} badgePosition="trailing" />
          <BadgeGroup message="Some features may not work properly" badge={{
          children: 'Warning',
          color: 'warning'
        }} badgePosition="leading" showMessageIcon />
        </div>
      </div>
    </div>
}`,...(ze=(Ie=I.parameters)==null?void 0:Ie.docs)==null?void 0:ze.source}}};const Ye=["LeadingPrimary","LeadingGray","LeadingWithIcon","LeadingError","LeadingWarning","LeadingSuccess","TrailingPrimary","TrailingWithBadgeIcon","TrailingError","TrailingWarning","TrailingSuccess","MediumSize","LargeSize","InteractiveLeading","InteractiveTrailing","AllVariants","UsageExamples"];export{v as AllVariants,w as InteractiveLeading,y as InteractiveTrailing,x as LargeSize,l as LeadingError,n as LeadingGray,t as LeadingPrimary,g as LeadingSuccess,c as LeadingWarning,d as LeadingWithIcon,b as MediumSize,p as TrailingError,m as TrailingPrimary,f as TrailingSuccess,h as TrailingWarning,u as TrailingWithBadgeIcon,I as UsageExamples,Ye as __namedExportsOrder,_e as default};
