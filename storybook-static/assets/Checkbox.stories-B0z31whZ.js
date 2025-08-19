import{j as e}from"./jsx-runtime-DiklIkkE.js";import{R as x,r as D}from"./index-DRjF_FHU.js";const K=({size:o})=>o==="sm"?e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"nexus-checkbox__check-icon",children:e.jsx("path",{d:"M10 3L4.5 8.5L2 6",stroke:"currentColor",strokeWidth:"1.6666",strokeLinecap:"round",strokeLinejoin:"round"})}):e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"nexus-checkbox__check-icon",children:e.jsx("path",{d:"M11.6666 3.5L5.24992 9.91667L2.33325 7",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),$=({size:o})=>o==="sm"?e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"nexus-checkbox__minus-icon",children:e.jsx("path",{d:"M2.5 6H9.5",stroke:"currentColor",strokeWidth:"1.66666",strokeLinecap:"round",strokeLinejoin:"round"})}):e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"nexus-checkbox__minus-icon",children:e.jsx("path",{d:"M2.91675 7H11.0834",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),t=x.forwardRef(({type:o="checkbox",checked:T,defaultChecked:w=!1,indeterminate:s=!1,size:r="md",showText:p=!1,label:l="Remember me",showSupportingText:a=!1,supportingText:i="Save my login details for next time.",disabled:I=!1,name:z,value:W,onChange:F,onClick:R,onFocus:B,onBlur:H,className:Ue,id:Ge,"aria-label":Ke,"aria-describedby":N,required:L=!1,...M},j)=>{const[$e,Je]=D.useState(w),_=T!==void 0,c=_?T:$e,Qe=D.useId(),d=Ge||`checkbox-${Qe}`,Xe=`${d}-label`,A=`${d}-supporting-text`,q=n=>{const G=n.target.checked;_||Je(G),F==null||F(G,n)},V=n=>{R==null||R(n)},Ye=["nexus-checkbox-container",p||a?"nexus-checkbox-container--with-text":"",Ue].filter(Boolean).join(" "),P=["nexus-checkbox",`nexus-checkbox--${o}`,`nexus-checkbox--${r}`,c?"nexus-checkbox--checked":"",s&&o==="checkbox"?"nexus-checkbox--indeterminate":"",I?"nexus-checkbox--disabled":""].filter(Boolean).join(" "),S=[];a&&i&&S.push(A),N&&S.push(N);const O=S.length>0?S.join(" "):void 0,E=D.useRef(null);x.useEffect(()=>{E.current&&o==="checkbox"&&(E.current.indeterminate=s)},[s,o]);const U=n=>{E.current=n,typeof j=="function"?j(n):j&&(j.current=n)};return!p&&!a?e.jsxs("div",{className:"nexus-checkbox-wrapper",children:[e.jsx("input",{ref:U,type:o,id:d,name:z,value:W,checked:c,disabled:I,required:L,className:P,onChange:q,onClick:V,onFocus:B,onBlur:H,"aria-label":Ke||l,"aria-describedby":O,...M}),e.jsx("label",{htmlFor:d,className:"nexus-checkbox__visual",children:e.jsxs("span",{className:"nexus-checkbox__box",children:[c&&!s&&e.jsx(K,{size:r}),s&&o==="checkbox"&&e.jsx($,{size:r}),o==="radio"&&c&&e.jsx("span",{className:"nexus-checkbox__radio-dot"})]})})]}):e.jsxs("div",{className:Ye,children:[e.jsxs("div",{className:"nexus-checkbox-wrapper",children:[e.jsx("input",{ref:U,type:o,id:d,name:z,value:W,checked:c,disabled:I,required:L,className:P,onChange:q,onClick:V,onFocus:B,onBlur:H,"aria-describedby":O,...M}),e.jsx("label",{htmlFor:d,className:"nexus-checkbox__visual",children:e.jsxs("span",{className:"nexus-checkbox__box",children:[c&&!s&&e.jsx(K,{size:r}),s&&o==="checkbox"&&e.jsx($,{size:r}),o==="radio"&&c&&e.jsx("span",{className:"nexus-checkbox__radio-dot"})]})})]}),(p||a)&&e.jsxs("div",{className:"nexus-checkbox-text",children:[p&&l&&e.jsx("label",{htmlFor:d,id:Xe,className:"nexus-checkbox-text__label",children:l}),a&&i&&e.jsx("div",{id:A,className:"nexus-checkbox-text__supporting",children:i})]})]})});t.displayName="Checkbox";t.__docgenInfo={description:`Checkbox component for binary selection with support for radio button mode

Features:
- Two types: checkbox and radio
- Two sizes: sm (16px) and md (20px)
- Indeterminate state (checkbox only)
- Optional text label and supporting text
- Comprehensive accessibility support
- Keyboard navigation
- Focus management and visual states
- Disabled state support
- Controlled and uncontrolled modes`,methods:[],displayName:"Checkbox",props:{type:{required:!1,tsType:{name:"union",raw:"'checkbox' | 'radio'",elements:[{name:"literal",value:"'checkbox'"},{name:"literal",value:"'radio'"}]},description:"Type of input - checkbox or radio",defaultValue:{value:"'checkbox'",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"Whether the checkbox/radio is checked"},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"Default checked state for uncontrolled usage",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"Whether the checkbox is in indeterminate state (only for checkbox type)",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"Size variant of the checkbox/radio",defaultValue:{value:"'md'",computed:!1}},showText:{required:!1,tsType:{name:"boolean"},description:"Whether to show text label",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Text label for the checkbox/radio",defaultValue:{value:"'Remember me'",computed:!1}},showSupportingText:{required:!1,tsType:{name:"boolean"},description:"Whether to show supporting text",defaultValue:{value:"false",computed:!1}},supportingText:{required:!1,tsType:{name:"string"},description:"Supporting text description",defaultValue:{value:"'Save my login details for next time.'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the checkbox/radio is disabled",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"Name attribute for radio button groups"},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Value attribute for the input"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"},{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Callback when checkbox/radio state changes"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Callback when checkbox/radio is clicked"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Callback when checkbox/radio receives focus"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Callback when checkbox/radio loses focus"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},id:{required:!1,tsType:{name:"string"},description:"Unique identifier for the checkbox/radio"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA described by for accessibility"},required:{required:!1,tsType:{name:"boolean"},description:"Required field indicator",defaultValue:{value:"false",computed:!1}}}};const tt={title:"Design System/Checkbox",component:t,parameters:{layout:"centered",docs:{description:{component:"A checkbox and radio button component for binary and single selection with comprehensive accessibility support."}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["checkbox","radio"],description:"Type of input - checkbox or radio"},checked:{control:"boolean",description:"Whether the checkbox/radio is checked (controlled mode)"},defaultChecked:{control:"boolean",description:"Default checked state (uncontrolled mode)"},indeterminate:{control:"boolean",description:"Whether the checkbox is in indeterminate state (checkbox only)"},size:{control:"select",options:["sm","md"],description:"Size variant of the checkbox/radio"},showText:{control:"boolean",description:"Whether to show the text label"},label:{control:"text",description:"Text label for the checkbox/radio"},showSupportingText:{control:"boolean",description:"Whether to show supporting text"},supportingText:{control:"text",description:"Supporting text description"},disabled:{control:"boolean",description:"Whether the checkbox/radio is disabled"},name:{control:"text",description:"Name attribute for radio button groups"},onChange:{action:"changed",description:"Callback when checkbox/radio state changes"}},args:{type:"checkbox",size:"md",showText:!1,label:"Remember me",showSupportingText:!1,supportingText:"Save my login details for next time.",disabled:!1}},h={render:o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"},children:[e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{...o,type:"checkbox",defaultChecked:!1}),e.jsx(t,{...o,type:"checkbox",defaultChecked:!0}),e.jsx(t,{...o,type:"checkbox",defaultChecked:!0,indeterminate:!0})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{...o,type:"radio",name:"radio-demo",defaultChecked:!1}),e.jsx(t,{...o,type:"radio",name:"radio-demo",defaultChecked:!0})]})]})},u={args:{size:"sm"},render:o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"},children:[e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{...o,type:"checkbox",defaultChecked:!1}),e.jsx(t,{...o,type:"checkbox",defaultChecked:!0}),e.jsx(t,{...o,type:"checkbox",defaultChecked:!0,indeterminate:!0})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{...o,type:"radio",name:"radio-small-demo",defaultChecked:!1}),e.jsx(t,{...o,type:"radio",name:"radio-small-demo",defaultChecked:!0})]})]})},m={args:{showText:!0},render:o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"},children:[e.jsx(t,{...o,type:"checkbox",defaultChecked:!1}),e.jsx(t,{...o,type:"checkbox",defaultChecked:!0}),e.jsx(t,{...o,type:"checkbox",defaultChecked:!0,indeterminate:!0,label:"Select all items"}),e.jsx(t,{...o,type:"radio",name:"radio-text-demo",defaultChecked:!1,label:"Option A"}),e.jsx(t,{...o,type:"radio",name:"radio-text-demo",defaultChecked:!0,label:"Option B"})]})},f={args:{showText:!0,showSupportingText:!0},render:o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"flex-start"},children:[e.jsx(t,{...o,type:"checkbox",defaultChecked:!1}),e.jsx(t,{...o,type:"checkbox",defaultChecked:!0}),e.jsx(t,{...o,type:"checkbox",defaultChecked:!0,indeterminate:!0,label:"Select all notifications",supportingText:"This will enable all notification types for your account."}),e.jsx(t,{...o,type:"radio",name:"radio-supporting-demo",defaultChecked:!1,label:"Email notifications",supportingText:"Receive updates via email when important events occur."}),e.jsx(t,{...o,type:"radio",name:"radio-supporting-demo",defaultChecked:!0,label:"Push notifications",supportingText:"Get instant alerts on your mobile device."})]})},b={args:{size:"sm",showText:!0,showSupportingText:!0},render:o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",alignItems:"flex-start"},children:[e.jsx(t,{...o,type:"checkbox",defaultChecked:!1}),e.jsx(t,{...o,type:"checkbox",defaultChecked:!0}),e.jsx(t,{...o,type:"checkbox",defaultChecked:!0,indeterminate:!0,label:"Marketing preferences",supportingText:"Control how we communicate with you about our products."})]})},k={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Checkbox Only - Disabled"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{disabled:!0,type:"checkbox",defaultChecked:!1}),e.jsx(t,{disabled:!0,type:"checkbox",defaultChecked:!0}),e.jsx(t,{disabled:!0,type:"checkbox",defaultChecked:!0,indeterminate:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Radio Only - Disabled"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{disabled:!0,type:"radio",defaultChecked:!1}),e.jsx(t,{disabled:!0,type:"radio",defaultChecked:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"With Text - Disabled"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{disabled:!0,showText:!0,type:"checkbox",defaultChecked:!1}),e.jsx(t,{disabled:!0,showText:!0,type:"checkbox",defaultChecked:!0}),e.jsx(t,{disabled:!0,showText:!0,type:"radio",defaultChecked:!0,label:"Disabled option"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"With Supporting Text - Disabled"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(t,{disabled:!0,showText:!0,showSupportingText:!0,type:"checkbox",defaultChecked:!1}),e.jsx(t,{disabled:!0,showText:!0,showSupportingText:!0,type:"checkbox",defaultChecked:!0})]})]})]})},y={render:()=>{const[o,T]=x.useState(!1),[w,s]=x.useState(!0),[r,p]=x.useState(!1),[l,a]=x.useState("option2");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx(t,{type:"checkbox",checked:o,onChange:i=>T(i)}),e.jsxs("p",{style:{marginTop:"8px",fontSize:"14px",color:"#6B7280",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:["Checkbox is: ",e.jsx("strong",{children:o?"CHECKED":"UNCHECKED"})]})]}),e.jsxs("div",{children:[e.jsx(t,{type:"checkbox",checked:w,onChange:i=>s(i),showText:!0,label:"Enable notifications"}),e.jsxs("p",{style:{marginTop:"8px",fontSize:"14px",color:"#6B7280",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:["Notifications are: ",e.jsx("strong",{children:w?"ENABLED":"DISABLED"})]})]}),e.jsxs("div",{children:[e.jsx(t,{type:"checkbox",checked:r,indeterminate:!0,onChange:i=>p(i),showText:!0,showSupportingText:!0,label:"Select all items",supportingText:"Currently showing partial selection."}),e.jsxs("p",{style:{marginTop:"8px",fontSize:"14px",color:"#6B7280",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:["Selection state: ",e.jsx("strong",{children:"INDETERMINATE"})]})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{type:"radio",name:"interactive-radio",value:"option1",checked:l==="option1",onChange:()=>a("option1"),showText:!0,label:"Option 1"}),e.jsx(t,{type:"radio",name:"interactive-radio",value:"option2",checked:l==="option2",onChange:()=>a("option2"),showText:!0,label:"Option 2"}),e.jsx(t,{type:"radio",name:"interactive-radio",value:"option3",checked:l==="option3",onChange:()=>a("option3"),showText:!0,label:"Option 3"})]}),e.jsxs("p",{style:{marginTop:"8px",fontSize:"14px",color:"#6B7280",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:["Selected option: ",e.jsx("strong",{children:l})]})]})]})}},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Small Size (16px)"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{size:"sm",type:"checkbox",defaultChecked:!1}),e.jsx(t,{size:"sm",type:"checkbox",showText:!0,defaultChecked:!1}),e.jsx(t,{size:"sm",type:"checkbox",showText:!0,showSupportingText:!0,defaultChecked:!1}),e.jsx(t,{size:"sm",type:"radio",showText:!0,defaultChecked:!1,label:"Small radio option"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Medium Size (20px)"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{size:"md",type:"checkbox",defaultChecked:!1}),e.jsx(t,{size:"md",type:"checkbox",showText:!0,defaultChecked:!1}),e.jsx(t,{size:"md",type:"checkbox",showText:!0,showSupportingText:!0,defaultChecked:!1}),e.jsx(t,{size:"md",type:"radio",showText:!0,defaultChecked:!1,label:"Medium radio option"})]})]})]})},v={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"flex-start"},children:e.jsxs("div",{style:{padding:"16px",backgroundColor:"#F8F9FA",borderRadius:"8px",border:"1px solid #E9ECEF"},children:[e.jsx("p",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#6B7280",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Use Tab key to navigate between checkboxes. Press Space to toggle."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{type:"checkbox",defaultChecked:!1,"aria-label":"First checkbox"}),e.jsx(t,{type:"checkbox",showText:!0,label:"Second checkbox",defaultChecked:!0}),e.jsx(t,{type:"checkbox",showText:!0,showSupportingText:!0,label:"Third checkbox",supportingText:"This checkbox has supporting text.",defaultChecked:!1}),e.jsx(t,{type:"radio",name:"focus-radio",showText:!0,label:"Radio option A",defaultChecked:!1}),e.jsx(t,{type:"radio",name:"focus-radio",showText:!0,label:"Radio option B",defaultChecked:!0})]})]})})},C={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Settings Panel"}),e.jsx("div",{style:{padding:"24px",backgroundColor:"#FFFFFF",borderRadius:"12px",border:"1px solid #E9ECEF",minWidth:"320px"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(t,{type:"checkbox",showText:!0,showSupportingText:!0,label:"Email notifications",supportingText:"Receive notifications about important updates.",defaultChecked:!0}),e.jsx(t,{type:"checkbox",showText:!0,showSupportingText:!0,label:"Push notifications",supportingText:"Get instant alerts on your mobile device.",defaultChecked:!1}),e.jsx(t,{type:"checkbox",showText:!0,showSupportingText:!0,label:"Marketing emails",supportingText:"Receive newsletters and promotional content.",defaultChecked:!1})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Radio Button Group"}),e.jsx("div",{style:{padding:"24px",backgroundColor:"#FFFFFF",borderRadius:"12px",border:"1px solid #E9ECEF",minWidth:"320px"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(t,{type:"radio",name:"plan-selection",value:"basic",showText:!0,showSupportingText:!0,label:"Basic Plan",supportingText:"Perfect for individuals and small teams.",defaultChecked:!1}),e.jsx(t,{type:"radio",name:"plan-selection",value:"pro",showText:!0,showSupportingText:!0,label:"Pro Plan",supportingText:"Advanced features for growing businesses.",defaultChecked:!0}),e.jsx(t,{type:"radio",name:"plan-selection",value:"enterprise",showText:!0,showSupportingText:!0,label:"Enterprise Plan",supportingText:"Full-featured solution for large organizations.",defaultChecked:!1})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Compact Layout"}),e.jsx("div",{style:{padding:"16px",backgroundColor:"#FFFFFF",borderRadius:"8px",border:"1px solid #E9ECEF",minWidth:"280px"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{size:"sm",type:"checkbox",showText:!0,label:"Dark mode",defaultChecked:!1}),e.jsx(t,{size:"sm",type:"checkbox",showText:!0,label:"Auto-save",defaultChecked:!0}),e.jsx(t,{size:"sm",type:"checkbox",showText:!0,label:"Sync preferences",defaultChecked:!1})]})})]})]})};var J,Q,X,Y,Z;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'flex-start'
  }}>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <Checkbox {...args} type="checkbox" defaultChecked={false} />
        <Checkbox {...args} type="checkbox" defaultChecked={true} />
        <Checkbox {...args} type="checkbox" defaultChecked={true} indeterminate={true} />
      </div>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <Checkbox {...args} type="radio" name="radio-demo" defaultChecked={false} />
        <Checkbox {...args} type="radio" name="radio-demo" defaultChecked={true} />
      </div>
    </div>
}`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"Basic checkbox and radio controls without text labels",...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var ee,te,oe,se,ae;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'flex-start'
  }}>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <Checkbox {...args} type="checkbox" defaultChecked={false} />
        <Checkbox {...args} type="checkbox" defaultChecked={true} />
        <Checkbox {...args} type="checkbox" defaultChecked={true} indeterminate={true} />
      </div>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <Checkbox {...args} type="radio" name="radio-small-demo" defaultChecked={false} />
        <Checkbox {...args} type="radio" name="radio-small-demo" defaultChecked={true} />
      </div>
    </div>
}`,...(oe=(te=u.parameters)==null?void 0:te.docs)==null?void 0:oe.source},description:{story:"Small size checkboxes and radio buttons",...(ae=(se=u.parameters)==null?void 0:se.docs)==null?void 0:ae.description}}};var ie,le,ne,re,ce;m.parameters={...m.parameters,docs:{...(ie=m.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    showText: true
  },
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'flex-start'
  }}>
      <Checkbox {...args} type="checkbox" defaultChecked={false} />
      <Checkbox {...args} type="checkbox" defaultChecked={true} />
      <Checkbox {...args} type="checkbox" defaultChecked={true} indeterminate={true} label="Select all items" />
      <Checkbox {...args} type="radio" name="radio-text-demo" defaultChecked={false} label="Option A" />
      <Checkbox {...args} type="radio" name="radio-text-demo" defaultChecked={true} label="Option B" />
    </div>
}`,...(ne=(le=m.parameters)==null?void 0:le.docs)==null?void 0:ne.source},description:{story:"Checkboxes and radios with text labels",...(ce=(re=m.parameters)==null?void 0:re.docs)==null?void 0:ce.description}}};var de,pe,xe,he,ue;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
      <Checkbox {...args} type="checkbox" defaultChecked={false} />
      <Checkbox {...args} type="checkbox" defaultChecked={true} />
      <Checkbox {...args} type="checkbox" defaultChecked={true} indeterminate={true} label="Select all notifications" supportingText="This will enable all notification types for your account." />
      <Checkbox {...args} type="radio" name="radio-supporting-demo" defaultChecked={false} label="Email notifications" supportingText="Receive updates via email when important events occur." />
      <Checkbox {...args} type="radio" name="radio-supporting-demo" defaultChecked={true} label="Push notifications" supportingText="Get instant alerts on your mobile device." />
    </div>
}`,...(xe=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:xe.source},description:{story:"Checkboxes and radios with text and supporting text",...(ue=(he=f.parameters)==null?void 0:he.docs)==null?void 0:ue.description}}};var me,fe,be,ke,ye;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    showText: true,
    showSupportingText: true
  },
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'flex-start'
  }}>
      <Checkbox {...args} type="checkbox" defaultChecked={false} />
      <Checkbox {...args} type="checkbox" defaultChecked={true} />
      <Checkbox {...args} type="checkbox" defaultChecked={true} indeterminate={true} label="Marketing preferences" supportingText="Control how we communicate with you about our products." />
    </div>
}`,...(be=(fe=b.parameters)==null?void 0:fe.docs)==null?void 0:be.source},description:{story:"Small checkboxes and radios with text and supporting text",...(ye=(ke=b.parameters)==null?void 0:ke.docs)==null?void 0:ye.description}}};var ge,ve,Ce,Te,we;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
          Checkbox Only - Disabled
        </h3>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <Checkbox disabled type="checkbox" defaultChecked={false} />
          <Checkbox disabled type="checkbox" defaultChecked={true} />
          <Checkbox disabled type="checkbox" defaultChecked={true} indeterminate={true} />
        </div>
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '16px',
        fontWeight: '600',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Radio Only - Disabled
        </h3>
        <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
          <Checkbox disabled type="radio" defaultChecked={false} />
          <Checkbox disabled type="radio" defaultChecked={true} />
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
          <Checkbox disabled showText type="checkbox" defaultChecked={false} />
          <Checkbox disabled showText type="checkbox" defaultChecked={true} />
          <Checkbox disabled showText type="radio" defaultChecked={true} label="Disabled option" />
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
          <Checkbox disabled showText showSupportingText type="checkbox" defaultChecked={false} />
          <Checkbox disabled showText showSupportingText type="checkbox" defaultChecked={true} />
        </div>
      </div>
    </div>
}`,...(Ce=(ve=k.parameters)==null?void 0:ve.docs)==null?void 0:Ce.source},description:{story:"Disabled checkbox and radio states",...(we=(Te=k.parameters)==null?void 0:Te.docs)==null?void 0:we.description}}};var je,Se,Ie,Fe,Re;y.parameters={...y.parameters,docs:{...(je=y.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState(false);
    const [checkedWithText, setCheckedWithText] = React.useState(true);
    const [checkedIndeterminate, setCheckedIndeterminate] = React.useState(false);
    const [radioValue, setRadioValue] = React.useState('option2');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      alignItems: 'flex-start'
    }}>
        <div>
          <Checkbox type="checkbox" checked={checked} onChange={newChecked => setChecked(newChecked)} />
          <p style={{
          marginTop: '8px',
          fontSize: '14px',
          color: '#6B7280',
          fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
        }}>
            Checkbox is: <strong>{checked ? 'CHECKED' : 'UNCHECKED'}</strong>
          </p>
        </div>
        
        <div>
          <Checkbox type="checkbox" checked={checkedWithText} onChange={newChecked => setCheckedWithText(newChecked)} showText label="Enable notifications" />
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
          <Checkbox type="checkbox" checked={checkedIndeterminate} indeterminate={true} onChange={newChecked => setCheckedIndeterminate(newChecked)} showText showSupportingText label="Select all items" supportingText="Currently showing partial selection." />
          <p style={{
          marginTop: '8px',
          fontSize: '14px',
          color: '#6B7280',
          fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
        }}>
            Selection state: <strong>INDETERMINATE</strong>
          </p>
        </div>
        
        <div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
            <Checkbox type="radio" name="interactive-radio" value="option1" checked={radioValue === 'option1'} onChange={() => setRadioValue('option1')} showText label="Option 1" />
            <Checkbox type="radio" name="interactive-radio" value="option2" checked={radioValue === 'option2'} onChange={() => setRadioValue('option2')} showText label="Option 2" />
            <Checkbox type="radio" name="interactive-radio" value="option3" checked={radioValue === 'option3'} onChange={() => setRadioValue('option3')} showText label="Option 3" />
          </div>
          <p style={{
          marginTop: '8px',
          fontSize: '14px',
          color: '#6B7280',
          fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
        }}>
            Selected option: <strong>{radioValue}</strong>
          </p>
        </div>
      </div>;
  }
}`,...(Ie=(Se=y.parameters)==null?void 0:Se.docs)==null?void 0:Ie.source},description:{story:"Interactive checkbox demonstrating controlled state",...(Re=(Fe=y.parameters)==null?void 0:Fe.docs)==null?void 0:Re.description}}};var Ee,De,ze,We,Be;g.parameters={...g.parameters,docs:{...(Ee=g.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
          Small Size (16px)
        </h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <Checkbox size="sm" type="checkbox" defaultChecked={false} />
          <Checkbox size="sm" type="checkbox" showText defaultChecked={false} />
          <Checkbox size="sm" type="checkbox" showText showSupportingText defaultChecked={false} />
          <Checkbox size="sm" type="radio" showText defaultChecked={false} label="Small radio option" />
        </div>
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '16px',
        fontWeight: '600',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Medium Size (20px)
        </h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <Checkbox size="md" type="checkbox" defaultChecked={false} />
          <Checkbox size="md" type="checkbox" showText defaultChecked={false} />
          <Checkbox size="md" type="checkbox" showText showSupportingText defaultChecked={false} />
          <Checkbox size="md" type="radio" showText defaultChecked={false} label="Medium radio option" />
        </div>
      </div>
    </div>
}`,...(ze=(De=g.parameters)==null?void 0:De.docs)==null?void 0:ze.source},description:{story:"All size variants demonstration",...(Be=(We=g.parameters)==null?void 0:We.docs)==null?void 0:Be.description}}};var He,Ne,Le,Me,_e;v.parameters={...v.parameters,docs:{...(He=v.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
          Use Tab key to navigate between checkboxes. Press Space to toggle.
        </p>
        
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <Checkbox type="checkbox" defaultChecked={false} aria-label="First checkbox" />
          <Checkbox type="checkbox" showText label="Second checkbox" defaultChecked={true} />
          <Checkbox type="checkbox" showText showSupportingText label="Third checkbox" supportingText="This checkbox has supporting text." defaultChecked={false} />
          <Checkbox type="radio" name="focus-radio" showText label="Radio option A" defaultChecked={false} />
          <Checkbox type="radio" name="focus-radio" showText label="Radio option B" defaultChecked={true} />
        </div>
      </div>
    </div>
}`,...(Le=(Ne=v.parameters)==null?void 0:Ne.docs)==null?void 0:Le.source},description:{story:"Focus states demonstration (use Tab key to navigate)",...(_e=(Me=v.parameters)==null?void 0:Me.docs)==null?void 0:_e.description}}};var Ae,qe,Ve,Pe,Oe;C.parameters={...C.parameters,docs:{...(Ae=C.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
            <Checkbox type="checkbox" showText showSupportingText label="Email notifications" supportingText="Receive notifications about important updates." defaultChecked={true} />
            <Checkbox type="checkbox" showText showSupportingText label="Push notifications" supportingText="Get instant alerts on your mobile device." defaultChecked={false} />
            <Checkbox type="checkbox" showText showSupportingText label="Marketing emails" supportingText="Receive newsletters and promotional content." defaultChecked={false} />
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
          Radio Button Group
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
          gap: '20px'
        }}>
            <Checkbox type="radio" name="plan-selection" value="basic" showText showSupportingText label="Basic Plan" supportingText="Perfect for individuals and small teams." defaultChecked={false} />
            <Checkbox type="radio" name="plan-selection" value="pro" showText showSupportingText label="Pro Plan" supportingText="Advanced features for growing businesses." defaultChecked={true} />
            <Checkbox type="radio" name="plan-selection" value="enterprise" showText showSupportingText label="Enterprise Plan" supportingText="Full-featured solution for large organizations." defaultChecked={false} />
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
          gap: '12px'
        }}>
            <Checkbox size="sm" type="checkbox" showText label="Dark mode" defaultChecked={false} />
            <Checkbox size="sm" type="checkbox" showText label="Auto-save" defaultChecked={true} />
            <Checkbox size="sm" type="checkbox" showText label="Sync preferences" defaultChecked={false} />
          </div>
        </div>
      </div>
    </div>
}`,...(Ve=(qe=C.parameters)==null?void 0:qe.docs)==null?void 0:Ve.source},description:{story:"Usage examples in different contexts",...(Oe=(Pe=C.parameters)==null?void 0:Pe.docs)==null?void 0:Oe.description}}};const ot=["Default","SmallSize","WithText","WithSupportingText","SmallWithSupportingText","Disabled","Interactive","AllSizes","FocusStates","UsageExamples"];export{g as AllSizes,h as Default,k as Disabled,v as FocusStates,y as Interactive,u as SmallSize,b as SmallWithSupportingText,C as UsageExamples,f as WithSupportingText,m as WithText,ot as __namedExportsOrder,tt as default};
