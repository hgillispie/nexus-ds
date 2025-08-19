import{j as e}from"./jsx-runtime-DiklIkkE.js";import{R as w,r as $e}from"./index-DRjF_FHU.js";const t=w.forwardRef(({checked:s,defaultChecked:C=!1,size:k="md",showText:o=!1,label:a="Remember me",showSupportingText:i=!1,supportingText:j="Save my login details for next time.",disabled:n=!1,onChange:l,onClick:F,onFocus:D,onBlur:I,className:qe,id:Me,"aria-label":E,"aria-describedby":R,...W},B)=>{const[_e,H]=$e.useState(C),z=s!==void 0,r=z?s:_e,S=Me||`toggle-${Math.random().toString(36).substr(2,9)}`,A=`${S}-label`,N=`${S}-supporting-text`,q=c=>{if(n)return;const p=!r;z||H(p),l==null||l(p),F==null||F(c)},M=c=>{if(!n&&(c.key===" "||c.key==="Enter")){c.preventDefault();const p=!r;z||H(p),l==null||l(p)}},Le="nexus-toggle",Oe=`nexus-toggle--${k}`,Ve=r?"nexus-toggle--checked":"",Pe=n?"nexus-toggle--disabled":"",Ue=o?"nexus-toggle--with-text":"",_=[Le,Oe,Ve,Pe,qe].filter(Boolean).join(" "),Ke=["nexus-toggle-container",Ue].filter(Boolean).join(" "),d=[];o&&a&&d.push(A),i&&j&&d.push(N),R&&d.push(R);const L=d.length>0?d.join(" "):void 0;return!o&&!i?e.jsx("button",{ref:B,type:"button",role:"switch",id:S,className:_,"aria-checked":r,"aria-label":E||a,"aria-describedby":L,disabled:n,onClick:q,onKeyDown:M,onFocus:D,onBlur:I,...W,children:e.jsx("span",{className:"nexus-toggle__track",children:e.jsx("span",{className:"nexus-toggle__thumb"})})}):e.jsxs("div",{className:Ke,children:[e.jsx("button",{ref:B,type:"button",role:"switch",id:S,className:_,"aria-checked":r,"aria-label":E,"aria-describedby":L,disabled:n,onClick:q,onKeyDown:M,onFocus:D,onBlur:I,...W,children:e.jsx("span",{className:"nexus-toggle__track",children:e.jsx("span",{className:"nexus-toggle__thumb"})})}),(o||i)&&e.jsxs("div",{className:"nexus-toggle-text",children:[o&&a&&e.jsx("div",{id:A,className:"nexus-toggle-text__label",children:a}),i&&j&&e.jsx("div",{id:N,className:"nexus-toggle-text__supporting",children:j})]})]})});t.displayName="Toggle";t.__docgenInfo={description:`Toggle component for binary on/off states

Features:
- Two sizes: sm (36x20px) and md (44x24px)
- Optional text label and supporting text
- Comprehensive accessibility support
- Keyboard navigation (Space/Enter to toggle)
- Focus management and visual states
- Disabled state support
- Controlled and uncontrolled modes`,methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:"Whether the toggle is checked/pressed"},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"Default checked state for uncontrolled usage",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"Size variant of the toggle",defaultValue:{value:"'md'",computed:!1}},showText:{required:!1,tsType:{name:"boolean"},description:"Whether to show text label",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Text label for the toggle",defaultValue:{value:"'Remember me'",computed:!1}},showSupportingText:{required:!1,tsType:{name:"boolean"},description:"Whether to show supporting text",defaultValue:{value:"false",computed:!1}},supportingText:{required:!1,tsType:{name:"string"},description:"Supporting text description",defaultValue:{value:"'Save my login details for next time.'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the toggle is disabled",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Callback when toggle state changes"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"Callback when toggle is clicked"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"Callback when toggle receives focus"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"Callback when toggle loses focus"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},id:{required:!1,tsType:{name:"string"},description:"Unique identifier for the toggle"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA described by for accessibility"}}};const Qe={title:"Design System/Toggle",component:t,parameters:{layout:"centered",docs:{description:{component:"A toggle switch component for binary on/off states with comprehensive accessibility support."}}},tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"Whether the toggle is checked (controlled mode)"},defaultChecked:{control:"boolean",description:"Default checked state (uncontrolled mode)"},size:{control:"select",options:["sm","md"],description:"Size variant of the toggle"},showText:{control:"boolean",description:"Whether to show the text label"},label:{control:"text",description:"Text label for the toggle"},showSupportingText:{control:"boolean",description:"Whether to show supporting text"},supportingText:{control:"text",description:"Supporting text description"},disabled:{control:"boolean",description:"Whether the toggle is disabled"},onChange:{action:"changed",description:"Callback when toggle state changes"}},args:{size:"md",showText:!1,label:"Remember me",showSupportingText:!1,supportingText:"Save my login details for next time.",disabled:!1}},u={render:s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"},children:[e.jsx(t,{...s,defaultChecked:!1}),e.jsx(t,{...s,defaultChecked:!0})]})},x={args:{size:"sm"},render:s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"},children:[e.jsx(t,{...s,defaultChecked:!1}),e.jsx(t,{...s,defaultChecked:!0})]})},g={args:{showText:!0},render:s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"},children:[e.jsx(t,{...s,defaultChecked:!1}),e.jsx(t,{...s,defaultChecked:!0})]})},f={args:{showText:!0,showSupportingText:!0},render:s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"flex-start"},children:[e.jsx(t,{...s,defaultChecked:!1}),e.jsx(t,{...s,defaultChecked:!0})]})},m={args:{size:"sm",showText:!0,showSupportingText:!0},render:s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"flex-start"},children:[e.jsx(t,{...s,defaultChecked:!1}),e.jsx(t,{...s,defaultChecked:!0})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Switch Only - Disabled"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{disabled:!0,defaultChecked:!1}),e.jsx(t,{disabled:!0,defaultChecked:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"With Text - Disabled"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{disabled:!0,showText:!0,defaultChecked:!1}),e.jsx(t,{disabled:!0,showText:!0,defaultChecked:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"With Supporting Text - Disabled"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(t,{disabled:!0,showText:!0,showSupportingText:!0,defaultChecked:!1}),e.jsx(t,{disabled:!0,showText:!0,showSupportingText:!0,defaultChecked:!0})]})]})]})},y={render:()=>{const[s,C]=w.useState(!1),[k,o]=w.useState(!0),[a,i]=w.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx(t,{checked:s,onChange:C}),e.jsxs("p",{style:{marginTop:"8px",fontSize:"14px",color:"#6B7280",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:["Switch is: ",e.jsx("strong",{children:s?"ON":"OFF"})]})]}),e.jsxs("div",{children:[e.jsx(t,{checked:k,onChange:o,showText:!0,label:"Enable notifications"}),e.jsxs("p",{style:{marginTop:"8px",fontSize:"14px",color:"#6B7280",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:["Notifications are: ",e.jsx("strong",{children:k?"ENABLED":"DISABLED"})]})]}),e.jsxs("div",{children:[e.jsx(t,{checked:a,onChange:i,showText:!0,showSupportingText:!0,label:"Auto-save documents",supportingText:"Automatically save your work every 30 seconds."}),e.jsxs("p",{style:{marginTop:"8px",fontSize:"14px",color:"#6B7280",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:["Auto-save is: ",e.jsx("strong",{children:a?"ON":"OFF"})]})]})]})}},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Medium Size (44x24px)"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{size:"md",defaultChecked:!1}),e.jsx(t,{size:"md",showText:!0,defaultChecked:!1}),e.jsx(t,{size:"md",showText:!0,showSupportingText:!0,defaultChecked:!1})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Small Size (36x20px)"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{size:"sm",defaultChecked:!1}),e.jsx(t,{size:"sm",showText:!0,defaultChecked:!1}),e.jsx(t,{size:"sm",showText:!0,showSupportingText:!0,defaultChecked:!1})]})]})]})},T={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"flex-start"},children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#F8F9FA",borderRadius:"8px",border:"1px solid #E9ECEF"},children:[e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#6B7280",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Use Tab key to navigate between toggles. Press Space or Enter to toggle."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{defaultChecked:!1,"aria-label":"First toggle"}),e.jsx(t,{showText:!0,label:"Second toggle",defaultChecked:!0}),e.jsx(t,{showText:!0,showSupportingText:!0,label:"Third toggle",supportingText:"This toggle has supporting text.",defaultChecked:!1}),e.jsx(t,{size:"sm",showText:!0,label:"Small toggle",defaultChecked:!0})]})]})})},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Settings Panel"}),e.jsx("div",{style:{padding:"24px",backgroundColor:"#FFFFFF",borderRadius:"12px",border:"1px solid #E9ECEF",minWidth:"320px"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(t,{showText:!0,showSupportingText:!0,label:"Email notifications",supportingText:"Receive notifications about important updates.",defaultChecked:!0}),e.jsx(t,{showText:!0,showSupportingText:!0,label:"Push notifications",supportingText:"Get instant alerts on your mobile device.",defaultChecked:!1}),e.jsx(t,{showText:!0,showSupportingText:!0,label:"Marketing emails",supportingText:"Receive newsletters and promotional content.",defaultChecked:!1})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Compact Layout"}),e.jsx("div",{style:{padding:"16px",backgroundColor:"#FFFFFF",borderRadius:"8px",border:"1px solid #E9ECEF",minWidth:"280px"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{size:"sm",showText:!0,label:"Dark mode",defaultChecked:!1}),e.jsx(t,{size:"sm",showText:!0,label:"Sound effects",defaultChecked:!0}),e.jsx(t,{size:"sm",showText:!0,label:"Auto-play videos",defaultChecked:!1})]})})]})]})};var O,V,P,U,K;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'flex-start'
  }}>
      <Toggle {...args} defaultChecked={false} />
      <Toggle {...args} defaultChecked={true} />
    </div>
}`,...(P=(V=u.parameters)==null?void 0:V.docs)==null?void 0:P.source},description:{story:"Basic toggle switches without text labels",...(K=(U=u.parameters)==null?void 0:U.docs)==null?void 0:K.description}}};var $,G,J,Q,X;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'flex-start'
  }}>
      <Toggle {...args} defaultChecked={false} />
      <Toggle {...args} defaultChecked={true} />
    </div>
}`,...(J=(G=x.parameters)==null?void 0:G.docs)==null?void 0:J.source},description:{story:"Small size toggle switches",...(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Y,Z,ee,te,se;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    showText: true
  },
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'flex-start'
  }}>
      <Toggle {...args} defaultChecked={false} />
      <Toggle {...args} defaultChecked={true} />
    </div>
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Toggles with text labels",...(se=(te=g.parameters)==null?void 0:te.docs)==null?void 0:se.description}}};var oe,ae,ie,le,ne;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    showText: true,
    showSupportingText: true
  },
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'flex-start'
  }}>
      <Toggle {...args} defaultChecked={false} />
      <Toggle {...args} defaultChecked={true} />
    </div>
}`,...(ie=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:ie.source},description:{story:"Toggles with text and supporting text",...(ne=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ne.description}}};var re,de,ce,pe,ue;m.parameters={...m.parameters,docs:{...(re=m.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    showText: true,
    showSupportingText: true
  },
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'flex-start'
  }}>
      <Toggle {...args} defaultChecked={false} />
      <Toggle {...args} defaultChecked={true} />
    </div>
}`,...(ce=(de=m.parameters)==null?void 0:de.docs)==null?void 0:ce.source},description:{story:"Small toggles with text and supporting text",...(ue=(pe=m.parameters)==null?void 0:pe.docs)==null?void 0:ue.description}}};var xe,ge,fe,me,he;h.parameters={...h.parameters,docs:{...(xe=h.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'flex-start'
  }}>
      <div>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '16px',
        fontWeight: '600',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Switch Only - Disabled
        </h3>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <Toggle disabled defaultChecked={false} />
          <Toggle disabled defaultChecked={true} />
        </div>
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '16px',
        fontWeight: '600',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          With Text - Disabled
        </h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <Toggle disabled showText defaultChecked={false} />
          <Toggle disabled showText defaultChecked={true} />
        </div>
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '16px',
        fontWeight: '600',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          With Supporting Text - Disabled
        </h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
          <Toggle disabled showText showSupportingText defaultChecked={false} />
          <Toggle disabled showText showSupportingText defaultChecked={true} />
        </div>
      </div>
    </div>
}`,...(fe=(ge=h.parameters)==null?void 0:ge.docs)==null?void 0:fe.source},description:{story:"Disabled toggle states",...(he=(me=h.parameters)==null?void 0:me.docs)==null?void 0:he.description}}};var ye,ve,Te,be,ke;y.parameters={...y.parameters,docs:{...(ye=y.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState(false);
    const [checkedWithText, setCheckedWithText] = React.useState(true);
    const [checkedWithSupporting, setCheckedWithSupporting] = React.useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      alignItems: 'flex-start'
    }}>
        <div>
          <Toggle checked={checked} onChange={setChecked} />
          <p style={{
          marginTop: '8px',
          fontSize: '14px',
          color: '#6B7280',
          fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
        }}>
            Switch is: <strong>{checked ? 'ON' : 'OFF'}</strong>
          </p>
        </div>
        
        <div>
          <Toggle checked={checkedWithText} onChange={setCheckedWithText} showText label="Enable notifications" />
          <p style={{
          marginTop: '8px',
          fontSize: '14px',
          color: '#6B7280',
          fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
        }}>
            Notifications are: <strong>{checkedWithText ? 'ENABLED' : 'DISABLED'}</strong>
          </p>
        </div>
        
        <div>
          <Toggle checked={checkedWithSupporting} onChange={setCheckedWithSupporting} showText showSupportingText label="Auto-save documents" supportingText="Automatically save your work every 30 seconds." />
          <p style={{
          marginTop: '8px',
          fontSize: '14px',
          color: '#6B7280',
          fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
        }}>
            Auto-save is: <strong>{checkedWithSupporting ? 'ON' : 'OFF'}</strong>
          </p>
        </div>
      </div>;
  }
}`,...(Te=(ve=y.parameters)==null?void 0:ve.docs)==null?void 0:Te.source},description:{story:"Interactive toggle demonstrating controlled state",...(ke=(be=y.parameters)==null?void 0:be.docs)==null?void 0:ke.description}}};var Se,we,Ce,je,Fe;v.parameters={...v.parameters,docs:{...(Se=v.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    alignItems: 'flex-start'
  }}>
      <div>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '16px',
        fontWeight: '600',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Medium Size (44x24px)
        </h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <Toggle size="md" defaultChecked={false} />
          <Toggle size="md" showText defaultChecked={false} />
          <Toggle size="md" showText showSupportingText defaultChecked={false} />
        </div>
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '16px',
        fontWeight: '600',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Small Size (36x20px)
        </h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <Toggle size="sm" defaultChecked={false} />
          <Toggle size="sm" showText defaultChecked={false} />
          <Toggle size="sm" showText showSupportingText defaultChecked={false} />
        </div>
      </div>
    </div>
}`,...(Ce=(we=v.parameters)==null?void 0:we.docs)==null?void 0:Ce.source},description:{story:"All size variants demonstration",...(Fe=(je=v.parameters)==null?void 0:je.docs)==null?void 0:Fe.description}}};var ze,De,Ie,Ee,Re;T.parameters={...T.parameters,docs:{...(ze=T.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'flex-start'
  }}>
      <div style={{
      padding: '16px',
      backgroundColor: '#F8F9FA',
      borderRadius: '8px',
      border: '1px solid #E9ECEF'
    }}>
        <p style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#6B7280',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Use Tab key to navigate between toggles. Press Space or Enter to toggle.
        </p>
        
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <Toggle defaultChecked={false} aria-label="First toggle" />
          <Toggle showText label="Second toggle" defaultChecked={true} />
          <Toggle showText showSupportingText label="Third toggle" supportingText="This toggle has supporting text." defaultChecked={false} />
          <Toggle size="sm" showText label="Small toggle" defaultChecked={true} />
        </div>
      </div>
    </div>
}`,...(Ie=(De=T.parameters)==null?void 0:De.docs)==null?void 0:Ie.source},description:{story:"Focus states demonstration (use Tab key to navigate)",...(Re=(Ee=T.parameters)==null?void 0:Ee.docs)==null?void 0:Re.description}}};var We,Be,He,Ae,Ne;b.parameters={...b.parameters,docs:{...(We=b.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    alignItems: 'flex-start'
  }}>
      <div>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '16px',
        fontWeight: '600',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Settings Panel
        </h3>
        <div style={{
        padding: '24px',
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        border: '1px solid #E9ECEF',
        minWidth: '320px'
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
            <Toggle showText showSupportingText label="Email notifications" supportingText="Receive notifications about important updates." defaultChecked={true} />
            <Toggle showText showSupportingText label="Push notifications" supportingText="Get instant alerts on your mobile device." defaultChecked={false} />
            <Toggle showText showSupportingText label="Marketing emails" supportingText="Receive newsletters and promotional content." defaultChecked={false} />
          </div>
        </div>
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '16px',
        fontWeight: '600',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Compact Layout
        </h3>
        <div style={{
        padding: '16px',
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        border: '1px solid #E9ECEF',
        minWidth: '280px'
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
            <Toggle size="sm" showText label="Dark mode" defaultChecked={false} />
            <Toggle size="sm" showText label="Sound effects" defaultChecked={true} />
            <Toggle size="sm" showText label="Auto-play videos" defaultChecked={false} />
          </div>
        </div>
      </div>
    </div>
}`,...(He=(Be=b.parameters)==null?void 0:Be.docs)==null?void 0:He.source},description:{story:"Usage examples in different contexts",...(Ne=(Ae=b.parameters)==null?void 0:Ae.docs)==null?void 0:Ne.description}}};const Xe=["Default","SmallSize","WithText","WithSupportingText","SmallWithSupportingText","Disabled","Interactive","AllSizes","FocusStates","UsageExamples"];export{v as AllSizes,u as Default,h as Disabled,T as FocusStates,y as Interactive,x as SmallSize,m as SmallWithSupportingText,b as UsageExamples,f as WithSupportingText,g as WithText,Xe as __namedExportsOrder,Qe as default};
