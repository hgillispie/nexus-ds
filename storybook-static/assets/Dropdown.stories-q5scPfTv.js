import{j as o}from"./jsx-runtime-DiklIkkE.js";import{R as H}from"./index-DRjF_FHU.js";const T=H.forwardRef(({type:t,title:p,subtitle:s,avatarSrc:l,avatarAlt:h,className:w,...u},x)=>{const k="nexus-dropdown-header",V=`nexus-dropdown-header--${t}`,D=[k,V,w].filter(Boolean).join(" ");return t==="avatar"?o.jsx("div",{ref:x,className:D,...u,children:o.jsxs("div",{className:"nexus-dropdown-header__avatar-group",children:[o.jsx("div",{className:"nexus-dropdown-header__avatar",children:o.jsx("img",{src:l||"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facepad&facepad=2&w=256&h=256&q=80",alt:h||"User avatar",className:"nexus-dropdown-header__avatar-image"})}),o.jsxs("div",{className:"nexus-dropdown-header__text-group",children:[o.jsx("div",{className:"nexus-dropdown-header__title",children:p}),s&&o.jsx("div",{className:"nexus-dropdown-header__subtitle",children:s})]})]})}):o.jsx("div",{ref:x,className:D,...u,children:o.jsx("div",{className:"nexus-dropdown-header__title",children:p})})});T.displayName="DropdownHeader";const e=H.forwardRef(({children:t,icon:p,shortcut:s,disabled:l=!1,onClick:h,active:w=!1,className:u,...x},k)=>{const Mo=["nexus-dropdown-item",w?"nexus-dropdown-item--active":"",l?"nexus-dropdown-item--disabled":"",u].filter(Boolean).join(" ");return o.jsxs("button",{ref:k,type:"button",className:Mo,onClick:h,disabled:l,...x,children:[o.jsxs("div",{className:"nexus-dropdown-item__content",children:[p&&o.jsx("span",{className:"nexus-dropdown-item__icon",children:p}),o.jsx("span",{className:"nexus-dropdown-item__text",children:t})]}),s&&o.jsx("span",{className:"nexus-dropdown-item__shortcut",children:s})]})});e.displayName="DropdownItem";const r=()=>o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M13.3334 14V12.6667C13.3334 11.9594 13.0524 11.2811 12.5523 10.781C12.0522 10.281 11.3739 10 10.6667 10H5.33335C4.62611 10 3.94783 10.281 3.44774 10.781C2.94764 11.2811 2.66669 11.9594 2.66669 12.6667V14M10.6667 4.66667C10.6667 6.13943 9.47278 7.33333 8.00002 7.33333C6.52726 7.33333 5.33335 6.13943 5.33335 4.66667C5.33335 3.19391 6.52726 2 8.00002 2C9.47278 2 10.6667 3.19391 10.6667 4.66667Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),d=()=>o.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsxs("g",{clipPath:"url(#clip0_settings)",children:[o.jsx("path",{d:"M8.00002 10C9.10459 10 10 9.10459 10 8.00002C10 6.89545 9.10459 6.00002 8.00002 6.00002C6.89545 6.00002 6.00002 6.89545 6.00002 8.00002C6.00002 9.10459 6.89545 10 8.00002 10Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M12.9334 10C12.8446 10.2011 12.8181 10.4241 12.8573 10.6404C12.8966 10.8567 12.9997 11.0562 13.1534 11.2134L13.1934 11.2534C13.3173 11.3772 13.4157 11.5242 13.4828 11.6861C13.5499 11.848 13.5844 12.0215 13.5844 12.1967C13.5844 12.3719 13.5499 12.5454 13.4828 12.7073C13.4157 12.8691 13.3173 13.0162 13.1934 13.14C13.0695 13.264 12.9225 13.3623 12.7606 13.4294C12.5987 13.4965 12.4252 13.5311 12.25 13.5311C12.0748 13.5311 11.9013 13.4965 11.7394 13.4294C11.5776 13.3623 11.4305 13.264 11.3067 13.14L11.2667 13.1C11.1096 12.9463 10.91 12.8432 10.6937 12.804C10.4775 12.7648 10.2544 12.7913 10.0534 12.88C9.85617 12.9645 9.68801 13.1048 9.56956 13.2837C9.45111 13.4626 9.38754 13.6722 9.38669 13.8867V14C9.38669 14.3536 9.24621 14.6928 8.99616 14.9428C8.74611 15.1929 8.40698 15.3334 8.05335 15.3334C7.69973 15.3334 7.36059 15.1929 7.11054 14.9428C6.8605 14.6928 6.72002 14.3536 6.72002 14V13.94C6.71486 13.7194 6.64343 13.5053 6.51503 13.3258C6.38662 13.1463 6.20718 13.0095 6.00002 12.9334C5.79894 12.8446 5.57589 12.8181 5.35963 12.8573C5.14336 12.8966 4.94381 12.9997 4.78669 13.1534L4.74669 13.1934C4.62286 13.3173 4.4758 13.4157 4.31394 13.4828C4.15208 13.5499 3.97857 13.5844 3.80335 13.5844C3.62813 13.5844 3.45463 13.5499 3.29277 13.4828C3.1309 13.4157 2.98385 13.3173 2.86002 13.1934C2.73605 13.0695 2.63771 12.9225 2.57061 12.7606C2.50351 12.5987 2.46897 12.4252 2.46897 12.25C2.46897 12.0748 2.50351 11.9013 2.57061 11.7394C2.63771 11.5776 2.73605 11.4305 2.86002 11.3067L2.90002 11.2667C3.05371 11.1096 3.15681 10.91 3.19602 10.6937C3.23524 10.4775 3.20876 10.2544 3.12002 10.0534C3.03551 9.85617 2.89519 9.68801 2.71633 9.56956C2.53747 9.45111 2.32788 9.38754 2.11335 9.38669H2.00002C1.6464 9.38669 1.30726 9.24621 1.05721 8.99616C0.807163 8.74611 0.666687 8.40698 0.666687 8.05335C0.666687 7.69973 0.807163 7.36059 1.05721 7.11054C1.30726 6.8605 1.6464 6.72002 2.00002 6.72002H2.06002C2.28068 6.71486 2.49469 6.64343 2.67422 6.51503C2.85375 6.38662 2.9905 6.20718 3.06669 6.00002C3.15543 5.79894 3.1819 5.57589 3.14269 5.35963C3.10348 5.14336 3.00038 4.94381 2.84669 4.78669L2.80669 4.74669C2.68272 4.62286 2.58437 4.4758 2.51727 4.31394C2.45017 4.15208 2.41564 3.97857 2.41564 3.80335C2.41564 3.62813 2.45017 3.45463 2.51727 3.29277C2.58437 3.1309 2.68272 2.98385 2.80669 2.86002C2.93052 2.73605 3.07757 2.63771 3.23943 2.57061C3.4013 2.50351 3.5748 2.46897 3.75002 2.46897C3.92524 2.46897 4.09874 2.50351 4.26061 2.57061C4.42247 2.63771 4.56952 2.73605 4.69335 2.86002L4.73335 2.90002C4.89047 3.05371 5.09003 3.15681 5.30629 3.19602C5.52256 3.23524 5.74561 3.20876 5.94669 3.12002H6.00002C6.1972 3.03551 6.36536 2.89519 6.48382 2.71633C6.60227 2.53747 6.66583 2.32788 6.66669 2.11335V2.00002C6.66669 1.6464 6.80716 1.30726 7.05721 1.05721C7.30726 0.807163 7.6464 0.666687 8.00002 0.666687C8.35364 0.666687 8.69278 0.807163 8.94283 1.05721C9.19288 1.30726 9.33335 1.6464 9.33335 2.00002V2.06002C9.33421 2.27454 9.39777 2.48414 9.51622 2.663C9.63468 2.84186 9.80284 2.98218 10 3.06669C10.2011 3.15543 10.4241 3.1819 10.6404 3.14269C10.8567 3.10348 11.0562 3.00038 11.2134 2.84669L11.2534 2.80669C11.3772 2.68272 11.5242 2.58437 11.6861 2.51727C11.848 2.45017 12.0215 2.41564 12.1967 2.41564C12.3719 2.41564 12.5454 2.45017 12.7073 2.51727C12.8691 2.58437 13.0162 2.68272 13.14 2.80669C13.264 2.93052 13.3623 3.07757 13.4294 3.23943C13.4965 3.4013 13.5311 3.5748 13.5311 3.75002C13.5311 3.92524 13.4965 4.09874 13.4294 4.26061C13.3623 4.42247 13.264 4.56952 13.14 4.69335L13.1 4.73335C12.9463 4.89047 12.8432 5.09003 12.804 5.30629C12.7648 5.52256 12.7913 5.74561 12.88 5.94669V6.00002C12.9645 6.1972 13.1048 6.36536 13.2837 6.48382C13.4626 6.60227 13.6722 6.66583 13.8867 6.66669H14C14.3536 6.66669 14.6928 6.80716 14.9428 7.05721C15.1929 7.30726 15.3334 7.6464 15.3334 8.00002C15.3334 8.35364 15.1929 8.69278 14.9428 8.94283C14.6928 9.19288 14.3536 9.33335 14 9.33335H13.94C13.7255 9.33421 13.5159 9.39777 13.337 9.51622C13.1582 9.63468 13.0179 9.80284 12.9334 10Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),o.jsx("defs",{children:o.jsx("clipPath",{id:"clip0_settings",children:o.jsx("rect",{width:"16",height:"16",fill:"white"})})})]}),c=()=>o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M8.66667 1.33331L2 9.33331H8L7.33333 14.6666L14 6.66665H8L8.66667 1.33331Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),m=()=>o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M6 14.6666V7.99998H10V14.6666M2 5.99998L8 1.33331L14 5.99998V13.3333C14 13.6869 13.8595 14.0261 13.6095 14.2761C13.3594 14.5262 13.0203 14.6666 12.6667 14.6666H3.33333C2.97971 14.6666 2.64057 14.5262 2.39052 14.2761C2.14048 14.0261 2 13.6869 2 13.3333V5.99998Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),a=()=>o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6M10.6667 11.3333L14 8M14 8L10.6667 4.66667M14 8H6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),n=()=>o.jsx("div",{className:"nexus-dropdown-divider"}),i=H.forwardRef(({children:t,isOpen:p=!0,onClose:s,className:l,width:h=240,...w},u)=>{const V=["nexus-dropdown",p?"nexus-dropdown--open":"",l].filter(Boolean).join(" "),D={width:typeof h=="number"?`${h}px`:h};return o.jsx("div",{ref:u,className:V,style:D,...w,children:t})});i.displayName="Dropdown";T.__docgenInfo={description:"Dropdown header component",methods:[],displayName:"DropdownHeader",props:{type:{required:!0,tsType:{name:"union",raw:"'avatar' | 'text'",elements:[{name:"literal",value:"'avatar'"},{name:"literal",value:"'text'"}]},description:"Type of header - either 'avatar' for user profile or 'text' for simple header"},title:{required:!0,tsType:{name:"string"},description:"Header text content"},subtitle:{required:!1,tsType:{name:"string"},description:"Subtitle text (only used with avatar type)"},avatarSrc:{required:!1,tsType:{name:"string"},description:"Avatar image URL (only used with avatar type)"},avatarAlt:{required:!1,tsType:{name:"string"},description:"Avatar alt text (only used with avatar type)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"}}};e.__docgenInfo={description:"Individual dropdown item component",methods:[],displayName:"DropdownItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to display in the dropdown item"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon to display before the text"},shortcut:{required:!1,tsType:{name:"string"},description:"Optional keyboard shortcut text"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether this item is disabled",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler for the dropdown item"},active:{required:!1,tsType:{name:"boolean"},description:"Whether this item is currently selected/active",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"}}};n.__docgenInfo={description:"Dropdown divider component",methods:[],displayName:"DropdownDivider"};i.__docgenInfo={description:"Dropdown menu component",methods:[],displayName:"Dropdown",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Array of dropdown items or custom content"},isOpen:{required:!1,tsType:{name:"boolean"},description:"Whether the dropdown is open/visible",defaultValue:{value:"true",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Function called when dropdown should close"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Custom width for the dropdown",defaultValue:{value:"240",computed:!1}}}};r.__docgenInfo={description:"User icon component used in dropdown examples",methods:[],displayName:"UserIcon"};d.__docgenInfo={description:"Settings icon component",methods:[],displayName:"SettingsIcon"};c.__docgenInfo={description:"Zap/Lightning icon component",methods:[],displayName:"ZapIcon"};m.__docgenInfo={description:"Home icon component",methods:[],displayName:"HomeIcon"};a.__docgenInfo={description:"Log out icon component",methods:[],displayName:"LogOutIcon"};const Qo={title:"Design System/Dropdown",component:i,parameters:{layout:"centered",docs:{description:{component:"A versatile dropdown menu component for displaying lists of actions and navigation items."}}},tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"Whether the dropdown is visible"},width:{control:"number",description:"Custom width for the dropdown"},onClose:{action:"onClose",description:"Function called when dropdown should close"}},args:{isOpen:!0,width:240}},I={render:t=>o.jsxs(i,{...t,children:[o.jsx(e,{children:"View profile"}),o.jsx(e,{children:"Settings"}),o.jsx(e,{children:"Keyboard shortcuts"}),o.jsx(n,{}),o.jsx(e,{children:"Company profile"}),o.jsx(e,{children:"Team"}),o.jsx(n,{}),o.jsx(e,{children:"Log out"})]})},g={render:t=>o.jsxs(i,{...t,children:[o.jsx(e,{icon:o.jsx(r,{}),children:"View profile"}),o.jsx(e,{icon:o.jsx(d,{}),children:"Settings"}),o.jsx(e,{icon:o.jsx(c,{}),children:"Keyboard shortcuts"}),o.jsx(n,{}),o.jsx(e,{icon:o.jsx(m,{}),children:"Company profile"}),o.jsx(e,{icon:o.jsx(r,{}),children:"Team"}),o.jsx(n,{}),o.jsx(e,{icon:o.jsx(a,{}),children:"Log out"})]})},j={render:t=>o.jsxs(i,{...t,children:[o.jsx(e,{icon:o.jsx(r,{}),shortcut:"⌘K→P",children:"View profile"}),o.jsx(e,{icon:o.jsx(d,{}),shortcut:"⌘S",children:"Settings"}),o.jsx(e,{icon:o.jsx(c,{}),shortcut:"?",children:"Keyboard shortcuts"}),o.jsx(n,{}),o.jsx(e,{icon:o.jsx(m,{}),shortcut:"⌘K→C",children:"Company profile"}),o.jsx(e,{icon:o.jsx(r,{}),shortcut:"⌘K→T",children:"Team"}),o.jsx(n,{}),o.jsx(e,{icon:o.jsx(a,{}),shortcut:"⌥⇧Q",children:"Log out"})]})},f={render:t=>o.jsxs(i,{...t,children:[o.jsx(e,{icon:o.jsx(r,{}),shortcut:"⌘K→P",children:"View profile"}),o.jsx(e,{icon:o.jsx(d,{}),shortcut:"⌘S",children:"Settings"}),o.jsx(e,{icon:o.jsx(c,{}),shortcut:"?",disabled:!0,children:"Keyboard shortcuts"}),o.jsx(n,{}),o.jsx(e,{icon:o.jsx(m,{}),shortcut:"⌘K→C",disabled:!0,children:"Company profile"}),o.jsx(e,{icon:o.jsx(r,{}),shortcut:"⌘K→T",children:"Team"}),o.jsx(n,{}),o.jsx(e,{icon:o.jsx(a,{}),shortcut:"⌥⇧Q",children:"Log out"})]})},C={render:()=>{const[t,p]=H.useState(""),s=l=>{p(l)};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"center"},children:[o.jsxs(i,{isOpen:!0,children:[o.jsx(e,{icon:o.jsx(r,{}),shortcut:"⌘K→P",onClick:()=>s("View profile"),children:"View profile"}),o.jsx(e,{icon:o.jsx(d,{}),shortcut:"⌘S",onClick:()=>s("Settings"),children:"Settings"}),o.jsx(e,{icon:o.jsx(c,{}),shortcut:"?",onClick:()=>s("Keyboard shortcuts"),children:"Keyboard shortcuts"}),o.jsx(n,{}),o.jsx(e,{icon:o.jsx(m,{}),shortcut:"⌘K→C",onClick:()=>s("Company profile"),children:"Company profile"}),o.jsx(e,{icon:o.jsx(r,{}),shortcut:"⌘K→T",onClick:()=>s("Team"),children:"Team"}),o.jsx(n,{}),o.jsx(e,{icon:o.jsx(a,{}),shortcut:"⌥⇧Q",onClick:()=>s("Log out"),children:"Log out"})]}),t&&o.jsxs("p",{style:{marginTop:"16px",fontSize:"14px",color:"#64748B",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:["Selected: ",t]})]})}},y={render:t=>o.jsxs(i,{...t,width:280,children:[o.jsx(e,{icon:o.jsx(r,{}),shortcut:"⌘K→P",children:"View profile"}),o.jsx(e,{icon:o.jsx(d,{}),shortcut:"⌘S",children:"Settings"}),o.jsx(e,{icon:o.jsx(c,{}),shortcut:"?",children:"Keyboard shortcuts"}),o.jsx(n,{}),o.jsx(e,{icon:o.jsx(m,{}),shortcut:"⌘K→C",children:"Company profile"}),o.jsx(e,{icon:o.jsx(r,{}),shortcut:"⌘K→T",children:"Team"}),o.jsx(e,{icon:o.jsx(r,{}),shortcut:"⌘I",children:"Invite colleagues"}),o.jsx(n,{}),o.jsx(e,{icon:o.jsx(c,{}),shortcut:"⌘K→C",children:"Changelog"}),o.jsx(e,{icon:o.jsx(d,{}),shortcut:"⌘K→S",children:"Slack Community"}),o.jsx(e,{icon:o.jsx(r,{}),shortcut:"⌘/",children:"Support"}),o.jsx(e,{icon:o.jsx(d,{}),shortcut:"⌘A",children:"API"}),o.jsx(n,{}),o.jsx(e,{icon:o.jsx(a,{}),shortcut:"⌥⇧Q",children:"Log out"})]})},v={render:t=>o.jsxs(i,{...t,width:180,children:[o.jsx(e,{children:"Profile"}),o.jsx(e,{children:"Settings"}),o.jsx(n,{}),o.jsx(e,{children:"Help"}),o.jsx(e,{children:"Log out"})]})},S={render:()=>o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"24px",padding:"20px",maxWidth:"1200px"},children:[o.jsxs("div",{children:[o.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:"800",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Basic Dropdown"}),o.jsxs(i,{isOpen:!0,children:[o.jsx(e,{children:"View profile"}),o.jsx(e,{children:"Settings"}),o.jsx(n,{}),o.jsx(e,{children:"Log out"})]})]}),o.jsxs("div",{children:[o.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:"800",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"With Icons"}),o.jsxs(i,{isOpen:!0,children:[o.jsx(e,{icon:o.jsx(r,{}),children:"View profile"}),o.jsx(e,{icon:o.jsx(d,{}),children:"Settings"}),o.jsx(n,{}),o.jsx(e,{icon:o.jsx(a,{}),children:"Log out"})]})]}),o.jsxs("div",{children:[o.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:"800",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"With Shortcuts"}),o.jsxs(i,{isOpen:!0,children:[o.jsx(e,{icon:o.jsx(r,{}),shortcut:"⌘K→P",children:"View profile"}),o.jsx(e,{icon:o.jsx(d,{}),shortcut:"⌘S",children:"Settings"}),o.jsx(n,{}),o.jsx(e,{icon:o.jsx(a,{}),shortcut:"⌥⇧Q",children:"Log out"})]})]})]})},b={render:()=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",maxWidth:"800px",padding:"20px"},children:[o.jsxs("div",{children:[o.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:"800",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"User Account Menu"}),o.jsxs(i,{isOpen:!0,width:220,children:[o.jsx(e,{icon:o.jsx(r,{}),shortcut:"⌘K→P",children:"View profile"}),o.jsx(e,{icon:o.jsx(d,{}),shortcut:"⌘S",children:"Account settings"}),o.jsx(e,{icon:o.jsx(c,{}),shortcut:"?",children:"Keyboard shortcuts"}),o.jsx(n,{}),o.jsx(e,{icon:o.jsx(a,{}),shortcut:"⌥⇧Q",children:"Sign out"})]})]}),o.jsxs("div",{children:[o.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:"800",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Navigation Menu"}),o.jsxs(i,{isOpen:!0,width:200,children:[o.jsx(e,{icon:o.jsx(m,{}),children:"Dashboard"}),o.jsx(e,{icon:o.jsx(r,{}),children:"Projects"}),o.jsx(e,{icon:o.jsx(d,{}),children:"Analytics"}),o.jsx(n,{}),o.jsx(e,{icon:o.jsx(c,{}),children:"Settings"})]})]}),o.jsxs("div",{children:[o.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:"800",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:"Context Menu"}),o.jsxs(i,{isOpen:!0,width:160,children:[o.jsx(e,{shortcut:"⌘C",children:"Copy"}),o.jsx(e,{shortcut:"⌘X",children:"Cut"}),o.jsx(e,{shortcut:"⌘V",children:"Paste"}),o.jsx(n,{}),o.jsx(e,{shortcut:"⌘Z",children:"Undo"}),o.jsx(e,{shortcut:"⌘⇧Z",children:"Redo"})]})]})]})},L={render:t=>o.jsxs(i,{...t,children:[o.jsx(T,{type:"avatar",title:"Olivia Rhye",subtitle:"olivia@untitledui.com",avatarSrc:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facepad&facepad=2&w=256&h=256&q=80",avatarAlt:"Olivia Rhye profile picture"}),o.jsx(e,{icon:o.jsx(r,{}),children:"View profile"}),o.jsx(e,{icon:o.jsx(d,{}),children:"Settings"}),o.jsx(e,{icon:o.jsx(c,{}),children:"Keyboard shortcuts"}),o.jsx(n,{}),o.jsx(e,{icon:o.jsx(m,{}),children:"Company profile"}),o.jsx(e,{icon:o.jsx(r,{}),children:"Team"}),o.jsx(n,{}),o.jsx(e,{icon:o.jsx(a,{}),children:"Log out"})]})},K={render:t=>o.jsxs(i,{...t,children:[o.jsx(T,{type:"text",title:"Account menu"}),o.jsx(e,{icon:o.jsx(r,{}),children:"View profile"}),o.jsx(e,{icon:o.jsx(d,{}),children:"Settings"}),o.jsx(e,{icon:o.jsx(c,{}),children:"Keyboard shortcuts"}),o.jsx(n,{}),o.jsx(e,{icon:o.jsx(m,{}),children:"Company profile"}),o.jsx(e,{icon:o.jsx(r,{}),children:"Team"}),o.jsx(n,{}),o.jsx(e,{icon:o.jsx(a,{}),children:"Log out"})]})},A={render:()=>{const[t,p]=H.useState(""),s=l=>{p(l)};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"center"},children:[o.jsxs(i,{isOpen:!0,width:280,children:[o.jsx(T,{type:"avatar",title:"Olivia Rhye",subtitle:"olivia@untitledui.com",avatarSrc:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facepad&facepad=2&w=256&h=256&q=80",avatarAlt:"Olivia Rhye profile picture"}),o.jsx(e,{icon:o.jsx(r,{}),shortcut:"⌘K→P",onClick:()=>s("View profile"),children:"View profile"}),o.jsx(e,{icon:o.jsx(d,{}),shortcut:"⌘S",onClick:()=>s("Settings"),children:"Settings"}),o.jsx(e,{icon:o.jsx(c,{}),shortcut:"?",onClick:()=>s("Keyboard shortcuts"),children:"Keyboard shortcuts"}),o.jsx(n,{}),o.jsx(e,{icon:o.jsx(m,{}),shortcut:"⌘K→C",onClick:()=>s("Company profile"),children:"Company profile"}),o.jsx(e,{icon:o.jsx(r,{}),shortcut:"⌘K→T",onClick:()=>s("Team"),children:"Team"}),o.jsx(n,{}),o.jsx(e,{icon:o.jsx(a,{}),shortcut:"⌥⇧Q",onClick:()=>s("Log out"),children:"Log out"})]}),t&&o.jsxs("div",{style:{padding:"12px 16px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef",color:"#495057",fontSize:"14px",fontFamily:"'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"},children:["Selected action: ",o.jsx("strong",{children:t})]})]})}};var R,O,W,_,N;I.parameters={...I.parameters,docs:{...(R=I.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <Dropdown {...args}>
      <DropdownItem>View profile</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Keyboard shortcuts</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Company profile</DropdownItem>
      <DropdownItem>Team</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Log out</DropdownItem>
    </Dropdown>
}`,...(W=(O=I.parameters)==null?void 0:O.docs)==null?void 0:W.source},description:{story:"Basic dropdown with simple text items",...(N=(_=I.parameters)==null?void 0:_.docs)==null?void 0:N.description}}};var U,B,M,P,q;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <Dropdown {...args}>
      <DropdownItem icon={<UserIcon />}>View profile</DropdownItem>
      <DropdownItem icon={<SettingsIcon />}>Settings</DropdownItem>
      <DropdownItem icon={<ZapIcon />}>Keyboard shortcuts</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<HomeIcon />}>Company profile</DropdownItem>
      <DropdownItem icon={<UserIcon />}>Team</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<LogOutIcon />}>Log out</DropdownItem>
    </Dropdown>
}`,...(M=(B=g.parameters)==null?void 0:B.docs)==null?void 0:M.source},description:{story:"Dropdown with icons for better visual context",...(q=(P=g.parameters)==null?void 0:P.docs)==null?void 0:q.description}}};var Z,Q,F,z,E;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => <Dropdown {...args}>
      <DropdownItem icon={<UserIcon />} shortcut="⌘K→P">View profile</DropdownItem>
      <DropdownItem icon={<SettingsIcon />} shortcut="⌘S">Settings</DropdownItem>
      <DropdownItem icon={<ZapIcon />} shortcut="?">Keyboard shortcuts</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<HomeIcon />} shortcut="⌘K→C">Company profile</DropdownItem>
      <DropdownItem icon={<UserIcon />} shortcut="⌘K→T">Team</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<LogOutIcon />} shortcut="⌥⇧Q">Log out</DropdownItem>
    </Dropdown>
}`,...(F=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:F.source},description:{story:"Dropdown with keyboard shortcuts for power users",...(E=(z=j.parameters)==null?void 0:z.docs)==null?void 0:E.description}}};var J,X,$,G,Y;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <Dropdown {...args}>
      <DropdownItem icon={<UserIcon />} shortcut="⌘K→P">View profile</DropdownItem>
      <DropdownItem icon={<SettingsIcon />} shortcut="⌘S">Settings</DropdownItem>
      <DropdownItem icon={<ZapIcon />} shortcut="?" disabled>Keyboard shortcuts</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<HomeIcon />} shortcut="⌘K→C" disabled>Company profile</DropdownItem>
      <DropdownItem icon={<UserIcon />} shortcut="⌘K→T">Team</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<LogOutIcon />} shortcut="⌥⇧Q">Log out</DropdownItem>
    </Dropdown>
}`,...($=(X=f.parameters)==null?void 0:X.docs)==null?void 0:$.source},description:{story:"Dropdown with disabled items",...(Y=(G=f.parameters)==null?void 0:G.docs)==null?void 0:Y.description}}};var oo,eo,to,no,ro;C.parameters={...C.parameters,docs:{...(oo=C.parameters)==null?void 0:oo.docs,source:{originalSource:`{
  render: () => {
    const [selectedAction, setSelectedAction] = React.useState<string>('');
    const handleAction = (action: string) => {
      setSelectedAction(action);
      // In a real app, you would perform the actual action here
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      alignItems: 'center'
    }}>
        <Dropdown isOpen={true}>
          <DropdownItem icon={<UserIcon />} shortcut="⌘K→P" onClick={() => handleAction('View profile')}>
            View profile
          </DropdownItem>
          <DropdownItem icon={<SettingsIcon />} shortcut="⌘S" onClick={() => handleAction('Settings')}>
            Settings
          </DropdownItem>
          <DropdownItem icon={<ZapIcon />} shortcut="?" onClick={() => handleAction('Keyboard shortcuts')}>
            Keyboard shortcuts
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem icon={<HomeIcon />} shortcut="⌘K→C" onClick={() => handleAction('Company profile')}>
            Company profile
          </DropdownItem>
          <DropdownItem icon={<UserIcon />} shortcut="⌘K→T" onClick={() => handleAction('Team')}>
            Team
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem icon={<LogOutIcon />} shortcut="⌥⇧Q" onClick={() => handleAction('Log out')}>
            Log out
          </DropdownItem>
        </Dropdown>
        
        {selectedAction && <p style={{
        marginTop: '16px',
        fontSize: '14px',
        color: '#64748B',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
            Selected: {selectedAction}
          </p>}
      </div>;
  }
}`,...(to=(eo=C.parameters)==null?void 0:eo.docs)==null?void 0:to.source},description:{story:"Interactive dropdown demonstrating real functionality",...(ro=(no=C.parameters)==null?void 0:no.docs)==null?void 0:ro.description}}};var so,io,co,ao,po;y.parameters={...y.parameters,docs:{...(so=y.parameters)==null?void 0:so.docs,source:{originalSource:`{
  render: args => <Dropdown {...args} width={280}>
      <DropdownItem icon={<UserIcon />} shortcut="⌘K→P">View profile</DropdownItem>
      <DropdownItem icon={<SettingsIcon />} shortcut="⌘S">Settings</DropdownItem>
      <DropdownItem icon={<ZapIcon />} shortcut="?">Keyboard shortcuts</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<HomeIcon />} shortcut="⌘K→C">Company profile</DropdownItem>
      <DropdownItem icon={<UserIcon />} shortcut="⌘K→T">Team</DropdownItem>
      <DropdownItem icon={<UserIcon />} shortcut="⌘I">Invite colleagues</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<ZapIcon />} shortcut="⌘K→C">Changelog</DropdownItem>
      <DropdownItem icon={<SettingsIcon />} shortcut="⌘K→S">Slack Community</DropdownItem>
      <DropdownItem icon={<UserIcon />} shortcut="⌘/">Support</DropdownItem>
      <DropdownItem icon={<SettingsIcon />} shortcut="⌘A">API</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<LogOutIcon />} shortcut="⌥⇧Q">Log out</DropdownItem>
    </Dropdown>
}`,...(co=(io=y.parameters)==null?void 0:io.docs)==null?void 0:co.source},description:{story:"Dropdown with mixed content and complex organization",...(po=(ao=y.parameters)==null?void 0:ao.docs)==null?void 0:po.description}}};var lo,mo,ho,uo,wo;v.parameters={...v.parameters,docs:{...(lo=v.parameters)==null?void 0:lo.docs,source:{originalSource:`{
  render: args => <Dropdown {...args} width={180}>
      <DropdownItem>Profile</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Help</DropdownItem>
      <DropdownItem>Log out</DropdownItem>
    </Dropdown>
}`,...(ho=(mo=v.parameters)==null?void 0:mo.docs)==null?void 0:ho.source},description:{story:"Compact dropdown with smaller width",...(wo=(uo=v.parameters)==null?void 0:uo.docs)==null?void 0:wo.description}}};var xo,Do,Io,go,jo;S.parameters={...S.parameters,docs:{...(xo=S.parameters)==null?void 0:xo.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
    padding: '20px',
    maxWidth: '1200px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '16px',
        fontWeight: '800',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Basic Dropdown
        </h3>
        <Dropdown isOpen={true}>
          <DropdownItem>View profile</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Log out</DropdownItem>
        </Dropdown>
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '16px',
        fontWeight: '800',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          With Icons
        </h3>
        <Dropdown isOpen={true}>
          <DropdownItem icon={<UserIcon />}>View profile</DropdownItem>
          <DropdownItem icon={<SettingsIcon />}>Settings</DropdownItem>
          <DropdownDivider />
          <DropdownItem icon={<LogOutIcon />}>Log out</DropdownItem>
        </Dropdown>
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '16px',
        fontWeight: '800',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          With Shortcuts
        </h3>
        <Dropdown isOpen={true}>
          <DropdownItem icon={<UserIcon />} shortcut="⌘K→P">View profile</DropdownItem>
          <DropdownItem icon={<SettingsIcon />} shortcut="⌘S">Settings</DropdownItem>
          <DropdownDivider />
          <DropdownItem icon={<LogOutIcon />} shortcut="⌥⇧Q">Log out</DropdownItem>
        </Dropdown>
      </div>
    </div>
}`,...(Io=(Do=S.parameters)==null?void 0:Do.docs)==null?void 0:Io.source},description:{story:"All dropdown variations in comparison",...(jo=(go=S.parameters)==null?void 0:go.docs)==null?void 0:jo.description}}};var fo,Co,yo,vo,So;b.parameters={...b.parameters,docs:{...(fo=b.parameters)==null?void 0:fo.docs,source:{originalSource:`{
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
          User Account Menu
        </h3>
        <Dropdown isOpen={true} width={220}>
          <DropdownItem icon={<UserIcon />} shortcut="⌘K→P">View profile</DropdownItem>
          <DropdownItem icon={<SettingsIcon />} shortcut="⌘S">Account settings</DropdownItem>
          <DropdownItem icon={<ZapIcon />} shortcut="?">Keyboard shortcuts</DropdownItem>
          <DropdownDivider />
          <DropdownItem icon={<LogOutIcon />} shortcut="⌥⇧Q">Sign out</DropdownItem>
        </Dropdown>
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '16px',
        fontWeight: '800',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Navigation Menu
        </h3>
        <Dropdown isOpen={true} width={200}>
          <DropdownItem icon={<HomeIcon />}>Dashboard</DropdownItem>
          <DropdownItem icon={<UserIcon />}>Projects</DropdownItem>
          <DropdownItem icon={<SettingsIcon />}>Analytics</DropdownItem>
          <DropdownDivider />
          <DropdownItem icon={<ZapIcon />}>Settings</DropdownItem>
        </Dropdown>
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '16px',
        fontWeight: '800',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
          Context Menu
        </h3>
        <Dropdown isOpen={true} width={160}>
          <DropdownItem shortcut="⌘C">Copy</DropdownItem>
          <DropdownItem shortcut="⌘X">Cut</DropdownItem>
          <DropdownItem shortcut="⌘V">Paste</DropdownItem>
          <DropdownDivider />
          <DropdownItem shortcut="⌘Z">Undo</DropdownItem>
          <DropdownItem shortcut="⌘⇧Z">Redo</DropdownItem>
        </Dropdown>
      </div>
    </div>
}`,...(yo=(Co=b.parameters)==null?void 0:Co.docs)==null?void 0:yo.source},description:{story:"Usage examples showing different contexts",...(So=(vo=b.parameters)==null?void 0:vo.docs)==null?void 0:So.description}}};var bo,Lo,Ko,Ao,Ho;L.parameters={...L.parameters,docs:{...(bo=L.parameters)==null?void 0:bo.docs,source:{originalSource:`{
  render: args => <Dropdown {...args}>
      <DropdownHeader type="avatar" title="Olivia Rhye" subtitle="olivia@untitledui.com" avatarSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facepad&facepad=2&w=256&h=256&q=80" avatarAlt="Olivia Rhye profile picture" />
      <DropdownItem icon={<UserIcon />}>View profile</DropdownItem>
      <DropdownItem icon={<SettingsIcon />}>Settings</DropdownItem>
      <DropdownItem icon={<ZapIcon />}>Keyboard shortcuts</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<HomeIcon />}>Company profile</DropdownItem>
      <DropdownItem icon={<UserIcon />}>Team</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<LogOutIcon />}>Log out</DropdownItem>
    </Dropdown>
}`,...(Ko=(Lo=L.parameters)==null?void 0:Lo.docs)==null?void 0:Ko.source},description:{story:"Dropdown with avatar header showing user profile",...(Ho=(Ao=L.parameters)==null?void 0:Ao.docs)==null?void 0:Ho.description}}};var To,ko,Vo,Ro,Oo;K.parameters={...K.parameters,docs:{...(To=K.parameters)==null?void 0:To.docs,source:{originalSource:`{
  render: args => <Dropdown {...args}>
      <DropdownHeader type="text" title="Account menu" />
      <DropdownItem icon={<UserIcon />}>View profile</DropdownItem>
      <DropdownItem icon={<SettingsIcon />}>Settings</DropdownItem>
      <DropdownItem icon={<ZapIcon />}>Keyboard shortcuts</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<HomeIcon />}>Company profile</DropdownItem>
      <DropdownItem icon={<UserIcon />}>Team</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={<LogOutIcon />}>Log out</DropdownItem>
    </Dropdown>
}`,...(Vo=(ko=K.parameters)==null?void 0:ko.docs)==null?void 0:Vo.source},description:{story:"Dropdown with text header for menu categories",...(Oo=(Ro=K.parameters)==null?void 0:Ro.docs)==null?void 0:Oo.description}}};var Wo,_o,No,Uo,Bo;A.parameters={...A.parameters,docs:{...(Wo=A.parameters)==null?void 0:Wo.docs,source:{originalSource:`{
  render: () => {
    const [selectedAction, setSelectedAction] = React.useState<string>('');
    const handleAction = (action: string) => {
      setSelectedAction(action);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      alignItems: 'center'
    }}>
        <Dropdown isOpen={true} width={280}>
          <DropdownHeader type="avatar" title="Olivia Rhye" subtitle="olivia@untitledui.com" avatarSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facepad&facepad=2&w=256&h=256&q=80" avatarAlt="Olivia Rhye profile picture" />
          <DropdownItem icon={<UserIcon />} shortcut="⌘K→P" onClick={() => handleAction('View profile')}>
            View profile
          </DropdownItem>
          <DropdownItem icon={<SettingsIcon />} shortcut="⌘S" onClick={() => handleAction('Settings')}>
            Settings
          </DropdownItem>
          <DropdownItem icon={<ZapIcon />} shortcut="?" onClick={() => handleAction('Keyboard shortcuts')}>
            Keyboard shortcuts
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem icon={<HomeIcon />} shortcut="⌘K→C" onClick={() => handleAction('Company profile')}>
            Company profile
          </DropdownItem>
          <DropdownItem icon={<UserIcon />} shortcut="⌘K→T" onClick={() => handleAction('Team')}>
            Team
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem icon={<LogOutIcon />} shortcut="⌥⇧Q" onClick={() => handleAction('Log out')}>
            Log out
          </DropdownItem>
        </Dropdown>

        {selectedAction && <div style={{
        padding: '12px 16px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e9ecef',
        color: '#495057',
        fontSize: '14px',
        fontFamily: "'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif"
      }}>
            Selected action: <strong>{selectedAction}</strong>
          </div>}
      </div>;
  }
}`,...(No=(_o=A.parameters)==null?void 0:_o.docs)==null?void 0:No.source},description:{story:"Complete user menu with avatar header and all features",...(Bo=(Uo=A.parameters)==null?void 0:Uo.docs)==null?void 0:Bo.description}}};const Fo=["Default","WithIcons","WithShortcuts","WithDisabledItems","Interactive","ComplexMenu","Compact","AllVariations","UsageExamples","WithAvatarHeader","WithTextHeader","CompleteUserMenu"];export{S as AllVariations,v as Compact,A as CompleteUserMenu,y as ComplexMenu,I as Default,C as Interactive,b as UsageExamples,L as WithAvatarHeader,f as WithDisabledItems,g as WithIcons,j as WithShortcuts,K as WithTextHeader,Fo as __namedExportsOrder,Qo as default};
