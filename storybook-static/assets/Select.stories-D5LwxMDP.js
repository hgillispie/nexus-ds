import{j as e}from"./jsx-runtime-DiklIkkE.js";import{R as P,r as h}from"./index-DRjF_FHU.js";const A=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6904 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66668C5.78262 12.5 4.93478 12.8512 4.30965 13.4763C3.68453 14.1014 3.33334 14.9493 3.33334 15.8333V17.5M13.3333 5.83333C13.3333 7.67428 11.841 9.16667 10 9.16667C8.15906 9.16667 6.66668 7.67428 6.66668 5.83333C6.66668 3.99238 8.15906 2.5 10 2.5C11.841 2.5 13.3333 3.99238 13.3333 5.83333Z",stroke:"currentColor",strokeWidth:"1.66667",strokeLinecap:"round",strokeLinejoin:"round"})}),lt=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z",stroke:"currentColor",strokeWidth:"1.66667",strokeLinecap:"round",strokeLinejoin:"round"})}),ot=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5 7.5L10 12.5L15 7.5",stroke:"currentColor",strokeWidth:"1.66667",strokeLinecap:"round",strokeLinejoin:"round"})}),nt=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M15 12.5L10 7.5L5 12.5",stroke:"currentColor",strokeWidth:"1.66667",strokeLinecap:"round",strokeLinejoin:"round"})}),it=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M16.6667 5L7.50001 14.1667L3.33334 10",stroke:"currentColor",strokeWidth:"1.66667",strokeLinecap:"round",strokeLinejoin:"round"})}),E=P.forwardRef(({label:s,supportingText:l,icon:n,disabled:c=!1,isSelected:o=!1,onClick:t,showCheck:i=!0,...g},b)=>{const m=["nexus-select-option",o?"nexus-select-option--selected":"",c?"nexus-select-option--disabled":""].filter(Boolean).join(" ");return e.jsxs("button",{ref:b,type:"button",className:m,onClick:t,disabled:c,...g,children:[e.jsxs("div",{className:"nexus-select-option__content",children:[n&&e.jsx("span",{className:"nexus-select-option__icon",children:n}),e.jsxs("div",{className:"nexus-select-option__text",children:[e.jsx("span",{className:"nexus-select-option__label",children:s}),l&&e.jsx("span",{className:"nexus-select-option__supporting-text",children:l})]})]}),i&&o&&e.jsx("span",{className:"nexus-select-option__check",children:e.jsx(it,{})})]})});E.displayName="SelectOption";const H=P.forwardRef(({options:s,selectedValue:l,onSelect:n,isOpen:c,showIcons:o=!1,...t},i)=>{const v=["nexus-select-dropdown",c?"nexus-select-dropdown--open":""].filter(Boolean).join(" ");return e.jsx("div",{ref:i,className:v,...t,children:s.map((x,y)=>e.jsx(E,{...x,isSelected:x.value===l,onClick:()=>n(x.value),showCheck:!o},`${x.value}-${y}`))})});H.displayName="SelectDropdown";const r=P.forwardRef(({options:s,value:l,placeholder:n="Select an option",label:c,showLabel:o=!0,type:t="default",disabled:i=!1,error:g=!1,helpText:b,onChange:v,onSearch:x,isOpen:y,onToggle:m,className:ct,id:z,...pt},yt)=>{const[dt,R]=h.useState(!1),[S,U]=h.useState(""),q=h.useRef(null),F=h.useRef(null),p=y!==void 0?y:dt,f=s.find(a=>a.value===l),mt=t==="search"&&S?s.filter(a=>a.label.toLowerCase().includes(S.toLowerCase())||a.supportingText&&a.supportingText.toLowerCase().includes(S.toLowerCase())):s,B=()=>{const a=!p;m?m(a):R(a)},ut=a=>{v&&v(a),m?m(!1):R(!1),t==="search"&&U("")},ht=a=>{const w=a.target.value;U(w),x&&x(w)};h.useEffect(()=>{const a=w=>{q.current&&!q.current.contains(w.target)&&F.current&&!F.current.contains(w.target)&&(m?m(!1):R(!1))};if(p)return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[p,m]);const xt=a=>{if(!i)switch(a.key){case"Enter":case" ":p||(a.preventDefault(),B());break;case"Escape":p&&(a.preventDefault(),m?m(!1):R(!1));break;case"ArrowDown":p||(a.preventDefault(),B());break}},gt=["nexus-select-container",g?"nexus-select-container--error":"",i?"nexus-select-container--disabled":"",ct].filter(Boolean).join(" "),ft=["nexus-select-input",`nexus-select-input--${t}`,p?"nexus-select-input--open":"",g?"nexus-select-input--error":"",i?"nexus-select-input--disabled":""].filter(Boolean).join(" "),$=()=>t==="search"?e.jsx(lt,{}):t==="icon-leading"?e.jsx(A,{}):null,bt=()=>t==="search"&&p?S:f?f.label:n,G=()=>t==="search"&&p?"":f&&f.supportingText?f.supportingText:"";return e.jsxs("div",{className:gt,...pt,children:[o&&c&&e.jsx("label",{htmlFor:z,className:"nexus-select-label",children:c}),e.jsxs("div",{className:"nexus-select-wrapper",ref:q,children:[e.jsxs("div",{className:ft,onClick:i?void 0:B,onKeyDown:xt,tabIndex:i?-1:0,role:"combobox","aria-expanded":p,"aria-haspopup":"listbox","aria-disabled":i,id:z,children:[e.jsxs("div",{className:"nexus-select-input__content",children:[$()&&e.jsx("span",{className:"nexus-select-input__icon",children:$()}),t==="search"&&p?e.jsx("input",{type:"text",className:"nexus-select-input__search",value:S,onChange:ht,placeholder:n,autoFocus:!0}):e.jsxs("div",{className:"nexus-select-input__text",children:[e.jsx("span",{className:`nexus-select-input__value ${f?"":"nexus-select-input__placeholder"}`,children:bt()}),G()&&e.jsx("span",{className:"nexus-select-input__supporting-text",children:G()})]})]}),e.jsx("span",{className:"nexus-select-input__chevron",children:p?e.jsx(nt,{}):e.jsx(ot,{})})]}),e.jsx(H,{ref:F,options:mt,selectedValue:l,onSelect:ut,isOpen:p,showIcons:t==="icon-leading"})]}),b&&e.jsx("p",{className:`nexus-select-help-text ${g?"nexus-select-help-text--error":""}`,children:b})]})});r.displayName="Select";E.__docgenInfo={description:"Select option component for dropdown items",methods:[],displayName:"SelectOption",props:{value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"The value of the option"},label:{required:!0,tsType:{name:"string"},description:"The display label for the option"},supportingText:{required:!1,tsType:{name:"string"},description:"Optional supporting text"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon to display"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether this option is disabled",defaultValue:{value:"false",computed:!1}},isSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showCheck:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};H.__docgenInfo={description:"Select dropdown component",methods:[],displayName:"SelectDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOptionProps"}],raw:"SelectOptionProps[]"},description:""},selectedValue:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},showIcons:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};r.__docgenInfo={description:"Main Select component",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOptionProps"}],raw:"SelectOptionProps[]"},description:"Array of options to display"},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Currently selected value"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text when no option is selected",defaultValue:{value:"'Select an option'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label text for the select"},showLabel:{required:!1,tsType:{name:"boolean"},description:"Whether to show a label",defaultValue:{value:"true",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'default' | 'icon-leading' | 'search'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'icon-leading'"},{name:"literal",value:"'search'"}]},description:"Type of select input",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the select is disabled",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Whether the select has an error state",defaultValue:{value:"false",computed:!1}},helpText:{required:!1,tsType:{name:"string"},description:"Help text below the select"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:"Function called when selection changes"},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(searchText: string) => void",signature:{arguments:[{type:{name:"string"},name:"searchText"}],return:{name:"void"}}},description:"Function called when search text changes (for search type)"},isOpen:{required:!1,tsType:{name:"boolean"},description:"Whether the dropdown is open (controlled)"},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Function called when dropdown should open/close"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},id:{required:!1,tsType:{name:"string"},description:"ID for the select input"}}};A.__docgenInfo={description:"User icon component",methods:[],displayName:"UserIcon"};lt.__docgenInfo={description:"Search icon component",methods:[],displayName:"SearchIcon"};ot.__docgenInfo={description:"Chevron down icon component",methods:[],displayName:"ChevronDownIcon"};nt.__docgenInfo={description:"Chevron up icon component",methods:[],displayName:"ChevronUpIcon"};it.__docgenInfo={description:"Check icon component for selected items",methods:[],displayName:"CheckIcon"};const Lt={title:"Design System/Select",component:r,parameters:{layout:"centered",docs:{description:{component:"A versatile select component with comprehensive variant support for all selection needs."}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["default","icon-leading","search"],description:"Type of select input"},showLabel:{control:"boolean",description:"Whether to show the label"},disabled:{control:"boolean",description:"Whether the select is disabled"},error:{control:"boolean",description:"Whether the select has an error state"},placeholder:{control:"text",description:"Placeholder text when no option is selected"},label:{control:"text",description:"Label text for the select"},helpText:{control:"text",description:"Help text below the select"}},args:{type:"default",showLabel:!0,disabled:!1,error:!1,placeholder:"Select an option",label:"Team member",helpText:"Choose a team member from the list."}},d=[{value:"olivia",label:"Olivia Rhye",supportingText:"@olivia"},{value:"phoenix",label:"Phoenix Baker",supportingText:"@phoenix"},{value:"lana",label:"Lana Steiner",supportingText:"@lana"},{value:"demi",label:"Demi Wilkinson",supportingText:"@demi"},{value:"candice",label:"Candice Wu",supportingText:"@candice"},{value:"natali",label:"Natali Craig",supportingText:"@natali"},{value:"drew",label:"Drew Cano",supportingText:"@drew"}],u=d.map(s=>({...s,icon:e.jsx(A,{})})),vt=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"}],T={args:{options:vt}},C={args:{type:"icon-leading",options:u,placeholder:"Select team member"}},j={args:{type:"search",options:d,label:"Search",placeholder:"Search team members",helpText:"Type to filter team members."}},L={args:{options:d,showLabel:!1,placeholder:"Select team member"}},I={args:{options:d,error:!0,helpText:"Please select a team member.",value:""}},D={args:{options:d,disabled:!0,value:"olivia",helpText:"This selection is currently disabled."}},k={args:{type:"icon-leading",options:u,value:"olivia"}},W={render:()=>{var n;const[s,l]=h.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",minWidth:"300px"},children:[e.jsx(r,{options:u,value:s,onChange:l,type:"icon-leading",label:"Team member",placeholder:"Select team member",helpText:"Choose a team member to assign this task."}),s&&e.jsxs("p",{style:{marginTop:"16px",fontSize:"14px",color:"#64748B",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:["Selected: ",(n=d.find(c=>c.value===s))==null?void 0:n.label]})]})}},_={render:()=>{var t;const[s,l]=h.useState(""),[n,c]=h.useState(""),o=d.filter(i=>i.label.toLowerCase().includes(n.toLowerCase())||i.supportingText.toLowerCase().includes(n.toLowerCase()));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",minWidth:"300px"},children:[e.jsx(r,{options:o,value:s,onChange:l,onSearch:c,type:"search",label:"Search team members",placeholder:"Type to search...",helpText:"Search by name or username."}),s&&e.jsxs("p",{style:{marginTop:"16px",fontSize:"14px",color:"#64748B",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:["Selected: ",(t=d.find(i=>i.value===s))==null?void 0:t.label]})]})}},M={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"24px",padding:"20px",maxWidth:"1200px"},children:[e.jsx(r,{options:u,type:"icon-leading",label:"Default State",placeholder:"Select team member",helpText:"This is the default state."}),e.jsx(r,{options:u,type:"icon-leading",label:"With Value",value:"olivia",helpText:"This select has a pre-selected value."}),e.jsx(r,{options:u,type:"icon-leading",label:"Error State",error:!0,helpText:"This is an error message."}),e.jsx(r,{options:u,type:"icon-leading",label:"Disabled State",disabled:!0,value:"olivia",helpText:"This select is disabled."})]})},N={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"24px",padding:"20px",maxWidth:"1200px"},children:[e.jsx(r,{options:d,type:"default",label:"Default Type",placeholder:"Select team member",helpText:"Basic select without icons."}),e.jsx(r,{options:u,type:"icon-leading",label:"Icon Leading Type",placeholder:"Select team member",helpText:"Select with leading icons."}),e.jsx(r,{options:d,type:"search",label:"Search Type",placeholder:"Search team members",helpText:"Searchable select with filtering."})]})},O={render:()=>{const[s,l]=h.useState({assignee:"",priority:"",status:"",reviewer:""}),n=[{value:"low",label:"Low Priority"},{value:"medium",label:"Medium Priority"},{value:"high",label:"High Priority"},{value:"urgent",label:"Urgent"}],c=[{value:"todo",label:"To Do"},{value:"in-progress",label:"In Progress"},{value:"review",label:"In Review"},{value:"done",label:"Done"}];return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"20px",maxWidth:"400px",padding:"20px"},children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:"800",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Task Assignment Form"}),e.jsx(r,{options:u,value:s.assignee,onChange:o=>l(t=>({...t,assignee:o})),type:"icon-leading",label:"Assignee",placeholder:"Select assignee",helpText:"Choose who will work on this task."}),e.jsx(r,{options:n,value:s.priority,onChange:o=>l(t=>({...t,priority:o})),label:"Priority",placeholder:"Select priority",helpText:"Set the task priority level."}),e.jsx(r,{options:c,value:s.status,onChange:o=>l(t=>({...t,status:o})),label:"Status",placeholder:"Select status",helpText:"Current status of the task."}),e.jsx(r,{options:d,value:s.reviewer,onChange:o=>l(t=>({...t,reviewer:o})),type:"search",label:"Reviewer",placeholder:"Search for reviewer",helpText:"Optional: assign a reviewer."})]})}},V={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",maxWidth:"800px",padding:"20px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:"800",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Team Management"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"16px"},children:[e.jsx(r,{options:u,type:"icon-leading",label:"Project Lead",placeholder:"Select project lead",helpText:"Choose the project lead.",showLabel:!0}),e.jsx(r,{options:d,type:"search",label:"Team Members",placeholder:"Search team members",helpText:"Add team members to project.",showLabel:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:"800",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Settings Configuration"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"16px"},children:[e.jsx(r,{options:[{value:"light",label:"Light Theme"},{value:"dark",label:"Dark Theme"},{value:"auto",label:"Auto (System)"}],label:"Theme",placeholder:"Select theme",value:"light",showLabel:!0}),e.jsx(r,{options:[{value:"en",label:"English"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"de",label:"German"}],label:"Language",placeholder:"Select language",value:"en",showLabel:!0})]})]})]})};var K,Z,J,Q,X;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    options: simpleOptions
  }
}`,...(J=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:J.source},description:{story:"Basic select with simple options",...(X=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Y,ee,te,se,ae;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    type: 'icon-leading',
    options: teamMembersWithIcons,
    placeholder: 'Select team member'
  }
}`,...(te=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:"Select with icons and supporting text",...(ae=(se=C.parameters)==null?void 0:se.docs)==null?void 0:ae.description}}};var re,le,oe,ne,ie;j.parameters={...j.parameters,docs:{...(re=j.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    type: 'search',
    options: teamMembers,
    label: 'Search',
    placeholder: 'Search team members',
    helpText: 'Type to filter team members.'
  }
}`,...(oe=(le=j.parameters)==null?void 0:le.docs)==null?void 0:oe.source},description:{story:"Search-enabled select for filtering options",...(ie=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:ie.description}}};var ce,pe,de,me,ue;L.parameters={...L.parameters,docs:{...(ce=L.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    options: teamMembers,
    showLabel: false,
    placeholder: 'Select team member'
  }
}`,...(de=(pe=L.parameters)==null?void 0:pe.docs)==null?void 0:de.source},description:{story:"Select without label",...(ue=(me=L.parameters)==null?void 0:me.docs)==null?void 0:ue.description}}};var he,xe,ge,fe,be;I.parameters={...I.parameters,docs:{...(he=I.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    options: teamMembers,
    error: true,
    helpText: 'Please select a team member.',
    value: ''
  }
}`,...(ge=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:ge.source},description:{story:"Select in error state",...(be=(fe=I.parameters)==null?void 0:fe.docs)==null?void 0:be.description}}};var ve,ye,Se,we,Te;D.parameters={...D.parameters,docs:{...(ve=D.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    options: teamMembers,
    disabled: true,
    value: 'olivia',
    helpText: 'This selection is currently disabled.'
  }
}`,...(Se=(ye=D.parameters)==null?void 0:ye.docs)==null?void 0:Se.source},description:{story:"Disabled select",...(Te=(we=D.parameters)==null?void 0:we.docs)==null?void 0:Te.description}}};var Ce,je,Le,Ie,De;k.parameters={...k.parameters,docs:{...(Ce=k.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    type: 'icon-leading',
    options: teamMembersWithIcons,
    value: 'olivia'
  }
}`,...(Le=(je=k.parameters)==null?void 0:je.docs)==null?void 0:Le.source},description:{story:"Select with pre-selected value",...(De=(Ie=k.parameters)==null?void 0:Ie.docs)==null?void 0:De.description}}};var ke,We,_e,Me,Ne;W.parameters={...W.parameters,docs:{...(ke=W.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string | number>('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      minWidth: '300px'
    }}>
        <Select options={teamMembersWithIcons} value={selectedValue} onChange={setSelectedValue} type="icon-leading" label="Team member" placeholder="Select team member" helpText="Choose a team member to assign this task." />
        
        {selectedValue && <p style={{
        marginTop: '16px',
        fontSize: '14px',
        color: '#64748B',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
            Selected: {teamMembers.find(m => m.value === selectedValue)?.label}
          </p>}
      </div>;
  }
}`,...(_e=(We=W.parameters)==null?void 0:We.docs)==null?void 0:_e.source},description:{story:"Interactive select demonstrating real functionality",...(Ne=(Me=W.parameters)==null?void 0:Me.docs)==null?void 0:Ne.description}}};var Oe,Ve,Re,qe,Fe;_.parameters={..._.parameters,docs:{...(Oe=_.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string | number>('');
    const [searchText, setSearchText] = useState('');
    const filteredOptions = teamMembers.filter(member => member.label.toLowerCase().includes(searchText.toLowerCase()) || member.supportingText.toLowerCase().includes(searchText.toLowerCase()));
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      minWidth: '300px'
    }}>
        <Select options={filteredOptions} value={selectedValue} onChange={setSelectedValue} onSearch={setSearchText} type="search" label="Search team members" placeholder="Type to search..." helpText="Search by name or username." />
        
        {selectedValue && <p style={{
        marginTop: '16px',
        fontSize: '14px',
        color: '#64748B',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
            Selected: {teamMembers.find(m => m.value === selectedValue)?.label}
          </p>}
      </div>;
  }
}`,...(Re=(Ve=_.parameters)==null?void 0:Ve.docs)==null?void 0:Re.source},description:{story:"Search select with filtering functionality",...(Fe=(qe=_.parameters)==null?void 0:qe.docs)==null?void 0:Fe.description}}};var Be,Pe,Ae,Ee,He;M.parameters={...M.parameters,docs:{...(Be=M.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    padding: '20px',
    maxWidth: '1200px'
  }}>
      <Select options={teamMembersWithIcons} type="icon-leading" label="Default State" placeholder="Select team member" helpText="This is the default state." />
      
      <Select options={teamMembersWithIcons} type="icon-leading" label="With Value" value="olivia" helpText="This select has a pre-selected value." />
      
      <Select options={teamMembersWithIcons} type="icon-leading" label="Error State" error={true} helpText="This is an error message." />
      
      <Select options={teamMembersWithIcons} type="icon-leading" label="Disabled State" disabled={true} value="olivia" helpText="This select is disabled." />
    </div>
}`,...(Ae=(Pe=M.parameters)==null?void 0:Pe.docs)==null?void 0:Ae.source},description:{story:"All select states in comparison",...(He=(Ee=M.parameters)==null?void 0:Ee.docs)==null?void 0:He.description}}};var ze,Ue,$e,Ge,Ke;N.parameters={...N.parameters,docs:{...(ze=N.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    padding: '20px',
    maxWidth: '1200px'
  }}>
      <Select options={teamMembers} type="default" label="Default Type" placeholder="Select team member" helpText="Basic select without icons." />
      
      <Select options={teamMembersWithIcons} type="icon-leading" label="Icon Leading Type" placeholder="Select team member" helpText="Select with leading icons." />
      
      <Select options={teamMembers} type="search" label="Search Type" placeholder="Search team members" helpText="Searchable select with filtering." />
    </div>
}`,...($e=(Ue=N.parameters)==null?void 0:Ue.docs)==null?void 0:$e.source},description:{story:"All select types in comparison",...(Ke=(Ge=N.parameters)==null?void 0:Ge.docs)==null?void 0:Ke.description}}};var Ze,Je,Qe,Xe,Ye;O.parameters={...O.parameters,docs:{...(Ze=O.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = useState({
      assignee: '',
      priority: '',
      status: '',
      reviewer: ''
    });
    const priorities = [{
      value: 'low',
      label: 'Low Priority'
    }, {
      value: 'medium',
      label: 'Medium Priority'
    }, {
      value: 'high',
      label: 'High Priority'
    }, {
      value: 'urgent',
      label: 'Urgent'
    }];
    const statuses = [{
      value: 'todo',
      label: 'To Do'
    }, {
      value: 'in-progress',
      label: 'In Progress'
    }, {
      value: 'review',
      label: 'In Review'
    }, {
      value: 'done',
      label: 'Done'
    }];
    return <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '20px',
      maxWidth: '400px',
      padding: '20px'
    }}>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '16px',
        fontWeight: '800',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Task Assignment Form
        </h3>
        
        <Select options={teamMembersWithIcons} value={formData.assignee} onChange={value => setFormData(prev => ({
        ...prev,
        assignee: value as string
      }))} type="icon-leading" label="Assignee" placeholder="Select assignee" helpText="Choose who will work on this task." />
        
        <Select options={priorities} value={formData.priority} onChange={value => setFormData(prev => ({
        ...prev,
        priority: value as string
      }))} label="Priority" placeholder="Select priority" helpText="Set the task priority level." />
        
        <Select options={statuses} value={formData.status} onChange={value => setFormData(prev => ({
        ...prev,
        status: value as string
      }))} label="Status" placeholder="Select status" helpText="Current status of the task." />
        
        <Select options={teamMembers} value={formData.reviewer} onChange={value => setFormData(prev => ({
        ...prev,
        reviewer: value as string
      }))} type="search" label="Reviewer" placeholder="Search for reviewer" helpText="Optional: assign a reviewer." />
      </div>;
  }
}`,...(Qe=(Je=O.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source},description:{story:"Form examples showing selects in context",...(Ye=(Xe=O.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.description}}};var et,tt,st,at,rt;V.parameters={...V.parameters,docs:{...(et=V.parameters)==null?void 0:et.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    maxWidth: '800px',
    padding: '20px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '16px',
        fontWeight: '800',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Team Management
        </h3>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '16px'
      }}>
          <Select options={teamMembersWithIcons} type="icon-leading" label="Project Lead" placeholder="Select project lead" helpText="Choose the project lead." showLabel={true} />
          <Select options={teamMembers} type="search" label="Team Members" placeholder="Search team members" helpText="Add team members to project." showLabel={true} />
        </div>
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '16px',
        fontWeight: '800',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Settings Configuration
        </h3>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '16px'
      }}>
          <Select options={[{
          value: 'light',
          label: 'Light Theme'
        }, {
          value: 'dark',
          label: 'Dark Theme'
        }, {
          value: 'auto',
          label: 'Auto (System)'
        }]} label="Theme" placeholder="Select theme" value="light" showLabel={true} />
          <Select options={[{
          value: 'en',
          label: 'English'
        }, {
          value: 'es',
          label: 'Spanish'
        }, {
          value: 'fr',
          label: 'French'
        }, {
          value: 'de',
          label: 'German'
        }]} label="Language" placeholder="Select language" value="en" showLabel={true} />
        </div>
      </div>
    </div>
}`,...(st=(tt=V.parameters)==null?void 0:tt.docs)==null?void 0:st.source},description:{story:"Usage examples showing different contexts",...(rt=(at=V.parameters)==null?void 0:at.docs)==null?void 0:rt.description}}};const It=["Default","IconLeading","Search","WithoutLabel","ErrorState","Disabled","WithValue","Interactive","InteractiveSearch","AllStates","AllTypes","FormExamples","UsageExamples"];export{M as AllStates,N as AllTypes,T as Default,D as Disabled,I as ErrorState,O as FormExamples,C as IconLeading,W as Interactive,_ as InteractiveSearch,j as Search,V as UsageExamples,k as WithValue,L as WithoutLabel,It as __namedExportsOrder,Lt as default};
