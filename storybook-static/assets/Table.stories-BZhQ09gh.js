import{j as e}from"./jsx-runtime-DiklIkkE.js";import{R as Z}from"./index-DRjF_FHU.js";const q=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("path",{d:"M12.1464 1.85355C12.3417 1.65829 12.6583 1.65829 12.8536 1.85355L14.1464 3.14645C14.3417 3.34171 14.3417 3.65829 14.1464 3.85355L5.35355 12.6464C5.25979 12.7402 5.13261 12.7918 5 12.7918H2.75C2.33579 12.7918 2 12.456 2 12.0418V9.79179C2 9.65918 2.05164 9.532 2.14541 9.43823L10.9383 0.645348C11.1335 0.450086 11.45 0.450086 11.6453 0.645348L12.1464 1.85355Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M10.5 3L13 5.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),$=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("path",{d:"M6.5 1.75H9.5C9.77614 1.75 10 1.97386 10 2.25V3H6V2.25C6 1.97386 6.22386 1.75 6.5 1.75Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M3.75 3.75H12.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M4.75 3.75V12.25C4.75 12.6642 5.08579 13 5.5 13H10.5C10.9142 13 11.25 12.6642 11.25 12.25V3.75",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M7 6.5V9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M9 6.5V9.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),$e=({direction:a})=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",className:`table-sort-icon ${a?`table-sort-icon--${a}`:""}`,children:[e.jsx("path",{d:"M8 3.5L5.5 6.5H10.5L8 3.5Z",fill:a==="asc"?"currentColor":"#9CA3AF"}),e.jsx("path",{d:"M8 12.5L10.5 9.5H5.5L8 12.5Z",fill:a==="desc"?"currentColor":"#9CA3AF"})]}),p=({data:a,columns:t,actions:d=[],variant:L="default",size:W="md",hoverable:V=!0,selectable:b=!1,selectedRows:u=[],onSelectionChange:f,rowKey:U="id",loading:F=!1,emptyMessage:Be="No data available",caption:H,stickyHeader:Re=!1,sortConfig:m,onSort:E,className:Fe="",...He})=>{const I=["nexus-table",`nexus-table--${L}`,`nexus-table--${W}`,V&&"nexus-table--hoverable",b&&"nexus-table--selectable",Re&&"nexus-table--sticky-header",F&&"nexus-table--loading",Fe].filter(Boolean).join(" "),Ee=s=>{if(!E)return;const r=((m==null?void 0:m.key)===s?m.direction:void 0)==="asc"?"desc":"asc";E(s,r)},Pe=()=>{if(!f)return;const s=a.map(r=>r[U]),c=s.length>0&&s.every(r=>u.includes(r));f(c?[]:s)},Oe=s=>{if(!f)return;const c=u.includes(s);f(c?u.filter(r=>r!==s):[...u,s])},Ze=(s,c,r)=>{const h=c[s.key];return s.render?s.render(h,c,r):h},P=a.length>0&&a.every(s=>u.includes(s[U])),Qe=u.length>0&&!P;return F?e.jsx("div",{className:I,children:e.jsxs("div",{className:"nexus-table__loading",children:[e.jsx("div",{className:"nexus-table__spinner"}),e.jsx("span",{children:"Loading..."})]})}):a.length===0?e.jsx("div",{className:I,children:e.jsx("div",{className:"nexus-table__empty",children:e.jsx("span",{children:Be})})}):e.jsx("div",{className:I,...He,children:e.jsxs("table",{className:"nexus-table__table",children:[H&&e.jsx("caption",{className:"nexus-table__caption",children:H}),e.jsx("thead",{className:"nexus-table__header",children:e.jsxs("tr",{className:"nexus-table__header-row",children:[b&&e.jsx("th",{className:"nexus-table__header-cell nexus-table__header-cell--checkbox",children:e.jsx("input",{type:"checkbox",className:"nexus-table__checkbox",checked:P,ref:s=>{s&&(s.indeterminate=Qe)},onChange:Pe,"aria-label":"Select all rows"})}),t.map(s=>e.jsx("th",{className:`nexus-table__header-cell nexus-table__header-cell--${s.align||"left"} ${s.sortable?"nexus-table__header-cell--sortable":""}`,style:{width:s.width},onClick:s.sortable?()=>Ee(s.key):void 0,children:e.jsxs("div",{className:"nexus-table__header-content",children:[e.jsx("span",{children:s.header}),s.sortable&&e.jsx($e,{direction:(m==null?void 0:m.key)===s.key?m.direction:void 0})]})},s.key)),d.length>0&&e.jsx("th",{className:"nexus-table__header-cell nexus-table__header-cell--actions",children:"Actions"})]})}),e.jsx("tbody",{className:"nexus-table__body",children:a.map((s,c)=>{const r=s[U],h=u.includes(r);return e.jsxs("tr",{className:`nexus-table__row ${h?"nexus-table__row--selected":""}`,children:[b&&e.jsx("td",{className:"nexus-table__cell nexus-table__cell--checkbox",children:e.jsx("input",{type:"checkbox",className:"nexus-table__checkbox",checked:h,onChange:()=>Oe(r),"aria-label":`Select row ${c+1}`})}),t.map(o=>e.jsx("td",{className:`nexus-table__cell nexus-table__cell--${o.align||"left"}`,children:Ze(o,s,c)},o.key)),d.length>0&&e.jsx("td",{className:"nexus-table__cell nexus-table__cell--actions",children:e.jsx("div",{className:"nexus-table__actions",children:d.map(o=>{var O;const Ke=((O=o.disabled)==null?void 0:O.call(o,s))||!1;return e.jsx("button",{className:`nexus-table__action ${o.destructive?"nexus-table__action--destructive":""}`,onClick:()=>o.onClick(s,c),disabled:Ke,"aria-label":o.label,title:o.label,children:o.icon},o.key)})})})]},r)})})]})})};p.__docgenInfo={description:"Table component for displaying tabular data with sorting, selection, and actions",methods:[],displayName:"Table",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:"Table data"},columns:{required:!0,tsType:{name:"Array",elements:[{name:"TableColumn"}],raw:"TableColumn[]"},description:"Column configuration"},actions:{required:!1,tsType:{name:"Array",elements:[{name:"TableAction"}],raw:"TableAction[]"},description:"Available actions for each row",defaultValue:{value:"[]",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'minimal'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'minimal'"}]},description:"Table variant",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Table size",defaultValue:{value:"'md'",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"Whether to show hover states",defaultValue:{value:"true",computed:!1}},selectable:{required:!1,tsType:{name:"boolean"},description:"Whether rows are selectable",defaultValue:{value:"false",computed:!1}},selectedRows:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Selected row keys",defaultValue:{value:"[]",computed:!1}},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedKeys: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedKeys"}],return:{name:"void"}}},description:"Selection change handler"},rowKey:{required:!1,tsType:{name:"string"},description:"Row key field (defaults to 'id')",defaultValue:{value:"'id'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Empty state message",defaultValue:{value:"'No data available'",computed:!1}},caption:{required:!1,tsType:{name:"string"},description:"Caption for table"},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"Sticky header",defaultValue:{value:"false",computed:!1}},sortConfig:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  key: string;
  direction: 'asc' | 'desc';
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"direction",value:{name:"union",raw:"'asc' | 'desc'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"}],required:!0}}]}},description:"Sort configuration"},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: 'asc' | 'desc') => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:"'asc' | 'desc'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"}]},name:"direction"}],return:{name:"void"}}},description:"Sort change handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}}}};q.__docgenInfo={description:"",methods:[],displayName:"EditIcon"};$.__docgenInfo={description:"",methods:[],displayName:"DeleteIcon"};$e.__docgenInfo={description:"",methods:[],displayName:"SortIcon",props:{direction:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"}]},description:""}}};const ta={title:"Components/Table",component:p,parameters:{layout:"padded",docs:{description:{component:"A flexible table component for displaying tabular data with sorting, selection, and action capabilities."}}},argTypes:{variant:{control:"select",options:["default","minimal"],description:"Visual style variant of the table"},size:{control:"select",options:["sm","md","lg"],description:"Size of the table cells and spacing"},hoverable:{control:"boolean",description:"Whether rows should have hover effects"},selectable:{control:"boolean",description:"Whether rows can be selected with checkboxes"},loading:{control:"boolean",description:"Shows loading state with spinner"},stickyHeader:{control:"boolean",description:"Makes the header sticky when scrolling"},data:{control:"object",description:"Array of data objects to display"},columns:{control:"object",description:"Column configuration array"},actions:{control:"object",description:"Available actions for each row"}},tags:["autodocs"]},i=[{id:"1",name:"Olivia Rhye",email:"@olivia",avatar:"https://ui-avatars.com/api/?name=Olivia+Rhye&size=40&background=8b5cf6&color=ffffff",access:"Product Designer",lastActive:"1 hour ago",status:"online"},{id:"2",name:"Phoenix Baker",email:"@phoenix",avatar:"https://ui-avatars.com/api/?name=Phoenix+Baker&size=40&background=4f46e5&color=ffffff",access:"Product Manager",lastActive:"2 hours ago",status:"away"},{id:"3",name:"Lana Steiner",email:"@lana",avatar:"https://ui-avatars.com/api/?name=Lana+Steiner&size=40&background=10b981&color=ffffff",access:"Frontend Developer",lastActive:"5 minutes ago",status:"online"},{id:"4",name:"Demi Wilkinson",email:"@demi",avatar:"https://ui-avatars.com/api/?name=Demi+Wilkinson&size=40&background=f59e0b&color=ffffff",access:"Frontend Developer",lastActive:"1 day ago",status:"busy"},{id:"5",name:"Candice Wu",email:"@candice",avatar:"https://ui-avatars.com/api/?name=Candice+Wu&size=40&background=ef4444&color=ffffff",access:"Backend Developer",lastActive:"3 hours ago",status:"online"},{id:"6",name:"Natali Craig",email:"@natali",avatar:"https://ui-avatars.com/api/?name=Natali+Craig&size=40&background=06b6d4&color=ffffff",access:"Product Designer",lastActive:"30 minutes ago",status:"away"},{id:"7",name:"Drew Cano",email:"@drew",avatar:"https://ui-avatars.com/api/?name=Drew+Cano&size=40&background=8b5cf6&color=ffffff",access:"UX Researcher",lastActive:"2 days ago",status:"offline"},{id:"8",name:"Orlando Diggs",email:"@orlando",avatar:"https://ui-avatars.com/api/?name=Orlando+Diggs&size=40&background=3b82f6&color=ffffff",access:"Backend Developer",lastActive:"45 minutes ago",status:"online"},{id:"9",name:"Andi Lane",email:"@andi",avatar:"https://ui-avatars.com/api/?name=Andi+Lane&size=40&background=ec4899&color=ffffff",access:"Frontend Developer",lastActive:"1 hour ago",status:"busy"},{id:"10",name:"Kate Morrison",email:"@kate",avatar:"https://ui-avatars.com/api/?name=Kate+Morrison&size=40&background=14b8a6&color=ffffff",access:"Product Manager",lastActive:"15 minutes ago",status:"online"}],B=[{id:"1",company:"Catalog",license:"Enterprise plan",logo:"https://ui-avatars.com/api/?name=Catalog&size=40&background=6366f1&color=ffffff&bold=true",users:["https://ui-avatars.com/api/?name=User+1&size=32&background=8b5cf6&color=ffffff","https://ui-avatars.com/api/?name=User+2&size=32&background=4f46e5&color=ffffff","https://ui-avatars.com/api/?name=User+3&size=32&background=10b981&color=ffffff"],usage:95,status:"active"},{id:"2",company:"Circooles",license:"Starter plan",logo:"https://ui-avatars.com/api/?name=Circooles&size=40&background=f59e0b&color=ffffff&bold=true",users:["https://ui-avatars.com/api/?name=User+4&size=32&background=ef4444&color=ffffff","https://ui-avatars.com/api/?name=User+5&size=32&background=06b6d4&color=ffffff"],usage:34,status:"trial"},{id:"3",company:"Command+R",license:"Enterprise plan",logo:"https://ui-avatars.com/api/?name=Command+R&size=40&background=10b981&color=ffffff&bold=true",users:["https://ui-avatars.com/api/?name=User+6&size=32&background=8b5cf6&color=ffffff","https://ui-avatars.com/api/?name=User+7&size=32&background=3b82f6&color=ffffff","https://ui-avatars.com/api/?name=User+8&size=32&background=ec4899&color=ffffff","https://ui-avatars.com/api/?name=User+9&size=32&background=14b8a6&color=ffffff"],usage:78,status:"active"},{id:"4",company:"Hourglass",license:"Professional plan",logo:"https://ui-avatars.com/api/?name=Hourglass&size=40&background=ef4444&color=ffffff&bold=true",users:["https://ui-avatars.com/api/?name=User+10&size=32&background=f59e0b&color=ffffff"],usage:12,status:"inactive"},{id:"5",company:"Layers",license:"Enterprise plan",logo:"https://ui-avatars.com/api/?name=Layers&size=40&background=06b6d4&color=ffffff&bold=true",users:["https://ui-avatars.com/api/?name=User+11&size=32&background=8b5cf6&color=ffffff","https://ui-avatars.com/api/?name=User+12&size=32&background=4f46e5&color=ffffff"],usage:89,status:"active"},{id:"6",company:"Quotient",license:"Starter plan",logo:"https://ui-avatars.com/api/?name=Quotient&size=40&background=8b5cf6&color=ffffff&bold=true",users:["https://ui-avatars.com/api/?name=User+13&size=32&background=10b981&color=ffffff","https://ui-avatars.com/api/?name=User+14&size=32&background=ef4444&color=ffffff","https://ui-avatars.com/api/?name=User+15&size=32&background=06b6d4&color=ffffff"],usage:67,status:"trial"}],Xe=(a,t)=>e.jsxs("div",{className:"nexus-table__user",children:[e.jsx("img",{src:t.avatar,alt:t.name,className:"nexus-table__avatar"}),e.jsxs("div",{className:"nexus-table__user-info",children:[e.jsx("div",{className:"nexus-table__user-name",children:t.name}),e.jsx("div",{className:"nexus-table__user-email",children:t.email})]})]}),Ge=a=>e.jsxs("div",{className:`nexus-table__status nexus-table__status--${a}`,children:[e.jsx("div",{className:"nexus-table__status-dot"}),a.charAt(0).toUpperCase()+a.slice(1)]}),Je=(a,t)=>e.jsxs("div",{className:"nexus-table__company",children:[e.jsx("img",{src:t.logo,alt:t.company,className:"nexus-table__company-logo"}),e.jsxs("div",{className:"nexus-table__company-info",children:[e.jsx("div",{className:"nexus-table__company-name",children:t.company}),e.jsx("div",{className:"nexus-table__company-license",children:t.license})]})]}),Ye=a=>e.jsxs("div",{className:"nexus-table__avatar-group",children:[a.slice(0,4).map((t,d)=>e.jsx("img",{src:t,alt:`User ${d+1}`,className:"nexus-table__avatar"},d)),a.length>4&&e.jsxs("div",{className:"nexus-table__avatar",style:{backgroundColor:"#f3f4f6",color:"#6b7280",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",fontWeight:"500"},children:["+",a.length-4]})]}),ea=a=>e.jsxs("div",{className:"nexus-table__progress",children:[e.jsx("div",{className:"nexus-table__progress-bar",children:e.jsx("div",{className:"nexus-table__progress-fill",style:{width:`${a}%`}})}),e.jsxs("div",{className:"nexus-table__progress-text",children:[a,"%"]})]}),n=[{key:"name",header:"Name",sortable:!0,render:Xe},{key:"access",header:"Access",sortable:!0},{key:"lastActive",header:"Last active",sortable:!0},{key:"status",header:"Status",render:a=>Ge(a)}],g=[{key:"company",header:"Company",sortable:!0,render:Je},{key:"license",header:"License use",sortable:!0},{key:"users",header:"Users",render:a=>Ye(a)},{key:"usage",header:"Usage",render:ea}],l=[{key:"edit",label:"Edit user",icon:e.jsx(q,{}),onClick:a=>alert(`Edit ${a.name}`)},{key:"delete",label:"Delete user",icon:e.jsx($,{}),onClick:a=>alert(`Delete ${a.name}`),destructive:!0}],R=[{key:"edit",label:"Edit company",icon:e.jsx(q,{}),onClick:a=>alert(`Edit ${a.company}`)},{key:"delete",label:"Delete company",icon:e.jsx($,{}),onClick:a=>alert(`Delete ${a.company}`),destructive:!0}],v={args:{data:i.slice(0,5),columns:n,actions:l,variant:"default",size:"md",hoverable:!0,selectable:!1}},y={args:{data:i,columns:n,actions:l,variant:"default",size:"md",hoverable:!0,selectable:!0,caption:"Team members"},parameters:{docs:{description:{story:"A complete team members table with avatars, status indicators, and row actions."}}}},x={args:{data:B,columns:g,actions:R,variant:"default",size:"md",hoverable:!0,selectable:!1,caption:"Customers"},parameters:{docs:{description:{story:"A customers table showing company information, user avatars, and usage metrics."}}}},k={args:{data:i.slice(0,6),columns:n,actions:l,selectable:!0,selectedRows:["1","3"]},parameters:{docs:{description:{story:"Table with row selection enabled and some rows pre-selected."}}}},_={args:{data:i.slice(0,6),columns:n,actions:l,sortConfig:{key:"name",direction:"asc"}},parameters:{docs:{description:{story:"Table with sorting functionality enabled and active sort indicator."}}}},C={args:{data:i.slice(0,5),columns:n,actions:l,size:"sm",variant:"default"},parameters:{docs:{description:{story:"Compact table with smaller padding and spacing."}}}},j={args:{data:i.slice(0,5),columns:n,actions:l,size:"lg",variant:"default"},parameters:{docs:{description:{story:"Large table with increased padding and spacing for better readability."}}}},w={args:{data:i.slice(0,5),columns:n,actions:l,variant:"minimal",size:"md"},parameters:{docs:{description:{story:"Minimal table variant with reduced visual elements and borders."}}}},S={args:{data:i,columns:n,actions:l,stickyHeader:!0,caption:"Scrollable table with sticky header"},parameters:{docs:{description:{story:"Table with a sticky header that remains visible when scrolling through large datasets."}}}},z={args:{data:[],columns:n,actions:l,loading:!0},parameters:{docs:{description:{story:"Table in loading state with spinner and overlay."}}}},A={args:{data:[],columns:n,actions:l,emptyMessage:"No team members found"},parameters:{docs:{description:{story:"Table empty state with custom message."}}}},T={args:{data:i.slice(0,5),columns:n,actions:[],variant:"default",size:"md"},parameters:{docs:{description:{story:"Table without action buttons for read-only data display."}}}},N={args:{data:B.slice(0,4),columns:[...g.slice(0,2),{...g[2],align:"center"},{...g[3],align:"right"}],actions:R},parameters:{docs:{description:{story:"Table with custom column alignments: left, center, and right."}}}},D={render:a=>{const[t,d]=Z.useState([]),[L,W]=Z.useState();return e.jsx(p,{...a,data:i,columns:n,actions:l,selectable:!0,selectedRows:t,onSelectionChange:d,sortConfig:L,onSort:(V,b)=>W({key:V,direction:b})})},parameters:{docs:{description:{story:"Fully interactive table with selection and sorting state management."}}}},M={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"Inter",fontSize:"18px",fontWeight:"600"},children:"Team Members Table"}),e.jsx(p,{data:i.slice(0,6),columns:n,actions:l,selectable:!0,hoverable:!0,caption:"Team members overview"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"Inter",fontSize:"18px",fontWeight:"600"},children:"Customers Table"}),e.jsx(p,{data:B,columns:g,actions:R,hoverable:!0,caption:"Customer accounts and usage"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"Inter",fontSize:"18px",fontWeight:"600"},children:"Minimal Variant"}),e.jsx(p,{data:i.slice(0,4),columns:n,variant:"minimal",hoverable:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"Inter",fontSize:"18px",fontWeight:"600"},children:"Small Size"}),e.jsx(p,{data:i.slice(0,4),columns:n,actions:l,size:"sm"})]})]}),parameters:{docs:{description:{story:"Comprehensive showcase of all table variants and configurations."}}}};var Q,K,X;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    data: teamMembersData.slice(0, 5),
    columns: teamColumns,
    actions: teamActions,
    variant: 'default',
    size: 'md',
    hoverable: true,
    selectable: false
  }
}`,...(X=(K=v.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var G,J,Y;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    data: teamMembersData,
    columns: teamColumns,
    actions: teamActions,
    variant: 'default',
    size: 'md',
    hoverable: true,
    selectable: true,
    caption: 'Team members'
  },
  parameters: {
    docs: {
      description: {
        story: 'A complete team members table with avatars, status indicators, and row actions.'
      }
    }
  }
}`,...(Y=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var ee,ae,se;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    data: customersData,
    columns: customerColumns,
    actions: customerActions,
    variant: 'default',
    size: 'md',
    hoverable: true,
    selectable: false,
    caption: 'Customers'
  },
  parameters: {
    docs: {
      description: {
        story: 'A customers table showing company information, user avatars, and usage metrics.'
      }
    }
  }
}`,...(se=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var te,ne,re;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    data: teamMembersData.slice(0, 6),
    columns: teamColumns,
    actions: teamActions,
    selectable: true,
    selectedRows: ['1', '3']
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with row selection enabled and some rows pre-selected.'
      }
    }
  }
}`,...(re=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,ie,le;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    data: teamMembersData.slice(0, 6),
    columns: teamColumns,
    actions: teamActions,
    sortConfig: {
      key: 'name',
      direction: 'asc'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with sorting functionality enabled and active sort indicator.'
      }
    }
  }
}`,...(le=(ie=_.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,de,me;C.parameters={...C.parameters,docs:{...(ce=C.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    data: teamMembersData.slice(0, 5),
    columns: teamColumns,
    actions: teamActions,
    size: 'sm',
    variant: 'default'
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact table with smaller padding and spacing.'
      }
    }
  }
}`,...(me=(de=C.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,pe,fe;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    data: teamMembersData.slice(0, 5),
    columns: teamColumns,
    actions: teamActions,
    size: 'lg',
    variant: 'default'
  },
  parameters: {
    docs: {
      description: {
        story: 'Large table with increased padding and spacing for better readability.'
      }
    }
  }
}`,...(fe=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var be,he,ge;w.parameters={...w.parameters,docs:{...(be=w.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    data: teamMembersData.slice(0, 5),
    columns: teamColumns,
    actions: teamActions,
    variant: 'minimal',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal table variant with reduced visual elements and borders.'
      }
    }
  }
}`,...(ge=(he=w.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var ve,ye,xe;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    data: teamMembersData,
    columns: teamColumns,
    actions: teamActions,
    stickyHeader: true,
    caption: 'Scrollable table with sticky header'
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with a sticky header that remains visible when scrolling through large datasets.'
      }
    }
  }
}`,...(xe=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var ke,_e,Ce;z.parameters={...z.parameters,docs:{...(ke=z.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: teamColumns,
    actions: teamActions,
    loading: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Table in loading state with spinner and overlay.'
      }
    }
  }
}`,...(Ce=(_e=z.parameters)==null?void 0:_e.docs)==null?void 0:Ce.source}}};var je,we,Se;A.parameters={...A.parameters,docs:{...(je=A.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: teamColumns,
    actions: teamActions,
    emptyMessage: 'No team members found'
  },
  parameters: {
    docs: {
      description: {
        story: 'Table empty state with custom message.'
      }
    }
  }
}`,...(Se=(we=A.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var ze,Ae,Te;T.parameters={...T.parameters,docs:{...(ze=T.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    data: teamMembersData.slice(0, 5),
    columns: teamColumns,
    actions: [],
    variant: 'default',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Table without action buttons for read-only data display.'
      }
    }
  }
}`,...(Te=(Ae=T.parameters)==null?void 0:Ae.docs)==null?void 0:Te.source}}};var Ne,De,Me;N.parameters={...N.parameters,docs:{...(Ne=N.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    data: customersData.slice(0, 4),
    columns: [...customerColumns.slice(0, 2), {
      ...customerColumns[2],
      align: 'center'
    }, {
      ...customerColumns[3],
      align: 'right'
    }],
    actions: customerActions
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with custom column alignments: left, center, and right.'
      }
    }
  }
}`,...(Me=(De=N.parameters)==null?void 0:De.docs)==null?void 0:Me.source}}};var Le,We,Ve;D.parameters={...D.parameters,docs:{...(Le=D.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: args => {
    const [selectedRows, setSelectedRows] = React.useState<string[]>([]);
    const [sortConfig, setSortConfig] = React.useState<{
      key: string;
      direction: 'asc' | 'desc';
    } | undefined>();
    return <Table {...args} data={teamMembersData} columns={teamColumns} actions={teamActions} selectable={true} selectedRows={selectedRows} onSelectionChange={setSelectedRows} sortConfig={sortConfig} onSort={(key, direction) => setSortConfig({
      key,
      direction
    })} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Fully interactive table with selection and sorting state management.'
      }
    }
  }
}`,...(Ve=(We=D.parameters)==null?void 0:We.docs)==null?void 0:Ve.source}}};var Ue,Ie,qe;M.parameters={...M.parameters,docs:{...(Ue=M.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '16px',
        fontFamily: 'Inter',
        fontSize: '18px',
        fontWeight: '600'
      }}>Team Members Table</h3>
        <Table data={teamMembersData.slice(0, 6)} columns={teamColumns} actions={teamActions} selectable={true} hoverable={true} caption="Team members overview" />
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '16px',
        fontFamily: 'Inter',
        fontSize: '18px',
        fontWeight: '600'
      }}>Customers Table</h3>
        <Table data={customersData} columns={customerColumns} actions={customerActions} hoverable={true} caption="Customer accounts and usage" />
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '16px',
        fontFamily: 'Inter',
        fontSize: '18px',
        fontWeight: '600'
      }}>Minimal Variant</h3>
        <Table data={teamMembersData.slice(0, 4)} columns={teamColumns} variant="minimal" hoverable={true} />
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '16px',
        fontFamily: 'Inter',
        fontSize: '18px',
        fontWeight: '600'
      }}>Small Size</h3>
        <Table data={teamMembersData.slice(0, 4)} columns={teamColumns} actions={teamActions} size="sm" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all table variants and configurations.'
      }
    }
  }
}`,...(qe=(Ie=M.parameters)==null?void 0:Ie.docs)==null?void 0:qe.source}}};const na=["Default","TeamMembers","Customers","WithSelection","WithSorting","SmallSize","LargeSize","MinimalVariant","StickyHeader","Loading","Empty","NoActions","CustomAlignment","Interactive","AllVariants"];export{M as AllVariants,N as CustomAlignment,x as Customers,v as Default,A as Empty,D as Interactive,j as LargeSize,z as Loading,w as MinimalVariant,T as NoActions,C as SmallSize,S as StickyHeader,y as TeamMembers,k as WithSelection,_ as WithSorting,na as __namedExportsOrder,ta as default};
