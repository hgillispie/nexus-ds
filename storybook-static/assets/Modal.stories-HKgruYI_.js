import{j as e}from"./jsx-runtime-DiklIkkE.js";import{f as G}from"./index-BxLnRenJ.js";import{r as n}from"./index-DRjF_FHU.js";import{R as Ke}from"./index-DHHUZ-3A.js";import{B as a}from"./Button-BSJPiNnW.js";const Ye=()=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M6 6L18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),E=({isOpen:r,onClose:s,size:l="md",title:d,description:c,children:A,showCloseButton:D=!0,closeOnBackdropClick:W=!0,closeOnEscape:N=!0,footer:q,headerContent:P,disableAnimation:qe=!1,className:Pe="",style:_e,"aria-label":Le,"aria-labelledby":_,"aria-describedby":L,onOpen:m,onAnimationComplete:Ue,zIndex:Oe=1e3,portalTarget:U,preventBodyScroll:O=!0})=>{const p=n.useRef(null),V=n.useRef(null),z=n.useRef(null),I=n.useCallback(i=>{N&&i.key==="Escape"&&r&&s()},[N,r,s]),Ve=n.useCallback(i=>{W&&i.target===V.current&&s()},[W,s]);n.useEffect(()=>{r?(z.current=document.activeElement,setTimeout(()=>{p.current&&p.current.focus()},100),m==null||m()):z.current&&z.current.focus()},[r,m]),n.useEffect(()=>{if(r)return document.addEventListener("keydown",I),()=>{document.removeEventListener("keydown",I)}},[r,I]),n.useEffect(()=>{if(O&&r){const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=i}}},[O,r]);const He=n.useCallback(i=>{if(i.key!=="Tab"||!p.current)return;const R=p.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),u=R[0],h=R[R.length-1];i.shiftKey?document.activeElement===u&&(i.preventDefault(),h==null||h.focus()):document.activeElement===h&&(i.preventDefault(),u==null||u.focus())},[]);if(!r)return null;const Ge=["modal",`modal--${l}`,qe&&"modal--no-animation",Pe].filter(Boolean).join(" "),H=e.jsx("div",{className:"modal-backdrop",ref:V,onClick:Ve,style:{zIndex:Oe},children:e.jsxs("div",{className:Ge,ref:p,role:"dialog","aria-modal":"true","aria-label":Le,"aria-labelledby":_,"aria-describedby":L,tabIndex:-1,style:_e,onKeyDown:He,onAnimationEnd:Ue,children:[(d||c||P||D)&&e.jsxs("div",{className:"modal__header",children:[P||e.jsxs("div",{className:"modal__header-content",children:[d&&e.jsx("h2",{className:"modal__title",id:_||"modal-title",children:d}),c&&e.jsx("p",{className:"modal__description",id:L||"modal-description",children:c})]}),D&&e.jsx("button",{className:"modal__close-button",onClick:s,"aria-label":"Close modal",type:"button",children:e.jsx(Ye,{})})]}),A&&e.jsx("div",{className:"modal__content",children:A}),q&&e.jsx("div",{className:"modal__footer",children:q})]})});return U?Ke.createPortal(H,U):H},o=({children:r,className:s="",align:l="right"})=>e.jsx("div",{className:`modal__footer modal__footer--${l} ${s}`,children:r});E.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the modal is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback to close the modal"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl' | 'full'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'full'"}]},description:"Modal size variant",defaultValue:{value:"'md'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Modal title"},description:{required:!1,tsType:{name:"string"},description:"Modal description/subtitle"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Modal content"},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Show close button in header",defaultValue:{value:"true",computed:!1}},closeOnBackdropClick:{required:!1,tsType:{name:"boolean"},description:"Close modal when clicking backdrop",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"Close modal when pressing Escape key",defaultValue:{value:"true",computed:!1}},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Footer content (typically buttons)"},headerContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom header content (overrides title/description)"},disableAnimation:{required:!1,tsType:{name:"boolean"},description:"Disable modal animations",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom CSS class",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom styles"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for the modal"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelledby for the modal"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA describedby for the modal"},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when modal opens"},onAnimationComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback after modal animation completes"},zIndex:{required:!1,tsType:{name:"number"},description:"Z-index for the modal",defaultValue:{value:"1000",computed:!1}},portalTarget:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:"Portal target for modal rendering"},preventBodyScroll:{required:!1,tsType:{name:"boolean"},description:"Prevent body scroll when modal is open",defaultValue:{value:"true",computed:!1}}}};o.__docgenInfo={description:"",methods:[],displayName:"ModalFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right' | 'space-between'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"},{name:"literal",value:"'space-between'"}]},description:"",defaultValue:{value:"'right'",computed:!1}}}};const er={title:"Components/Modal",component:E,parameters:{layout:"centered",docs:{description:{component:`
The Modal component provides a flexible overlay interface for displaying content above the main application. It supports various sizes, responsive layouts, and accessibility features.

## Features

- **Multiple sizes**: Small to full-screen variants for different content types
- **Responsive design**: Adapts to mobile, tablet, and desktop screens
- **Accessibility**: Full ARIA support, focus management, and keyboard navigation
- **Flexible content**: Header, content, and footer sections with customizable layouts
- **Animation support**: Smooth enter/exit animations with optional disable
- **Portal rendering**: Optional portal target for advanced use cases
- **Focus management**: Automatic focus trapping and restoration
- **Backdrop control**: Configurable backdrop click and escape key handling

## Usage

The Modal is ideal for:
- Confirmation dialogs and alerts
- Forms and data entry workflows
- Image galleries and media viewers
- Settings and configuration panels
- User profile and account management
- Multi-step wizards and onboarding

## Accessibility

- Automatic focus management with focus trapping
- Escape key support for closing
- ARIA attributes for screen readers
- Keyboard navigation support
- Focus restoration when closed

## Mobile Responsive

The Modal automatically adapts to smaller screens with:
- Full-width layout on mobile devices
- Adjusted padding and spacing
- Stacked button layouts in footer
- Optimized touch targets for mobile interaction
        `}}},tags:["autodocs"],argTypes:{isOpen:{control:{type:"boolean"},description:"Whether the modal is open"},size:{control:{type:"radio"},options:["sm","md","lg","xl","full"],description:"Modal size variant"},title:{control:{type:"text"},description:"Modal title"},description:{control:{type:"text"},description:"Modal description/subtitle"},showCloseButton:{control:{type:"boolean"},description:"Show close button in header"},closeOnBackdropClick:{control:{type:"boolean"},description:"Close modal when clicking backdrop"},closeOnEscape:{control:{type:"boolean"},description:"Close modal when pressing Escape key"},disableAnimation:{control:{type:"boolean"},description:"Disable modal animations"},preventBodyScroll:{control:{type:"boolean"},description:"Prevent body scroll when modal is open"},onClose:{action:"modal-closed",description:"Callback to close the modal"},onOpen:{action:"modal-opened",description:"Callback when modal opens"}},args:{onClose:G(),onOpen:G()}},t=({children:r,buttonText:s="Open Modal",...l})=>{const[d,c]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>c(!0),children:s}),e.jsx(E,{isOpen:d,onClose:()=>c(!1),...l,children:r})]})},y={render:r=>e.jsx(t,{...r,children:e.jsx("p",{children:"This is a default modal with basic content. It demonstrates the standard modal layout with a title, content area, and action buttons."})}),args:{title:"Modal Title",description:"This is a modal description that provides additional context.",footer:e.jsxs(o,{children:[e.jsx(a,{hierarchy:"secondary-gray",children:"Cancel"}),e.jsx(a,{hierarchy:"primary",children:"Save Changes"})]})}},f={render:r=>e.jsx(t,{...r,children:e.jsx("p",{children:"This is a small modal perfect for simple confirmations or alerts. It takes up minimal screen space while still being easily readable."})}),args:{size:"sm",title:"Delete Item",description:"Are you sure you want to delete this item?",footer:e.jsxs(o,{children:[e.jsx(a,{hierarchy:"secondary-gray",children:"Cancel"}),e.jsx(a,{hierarchy:"primary",destructive:!0,children:"Delete"})]})},parameters:{docs:{description:{story:"Small modal (384px max-width) ideal for confirmations and simple dialogs."}}}},x={render:r=>e.jsx(t,{...r,children:e.jsxs("div",{children:[e.jsx("p",{children:"This is a medium-sized modal that provides a good balance between content space and screen real estate. Perfect for forms and detailed content."}),e.jsxs("div",{style:{marginTop:"16px"},children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontFamily:"Inter, sans-serif"},children:"Additional Information"}),e.jsx("p",{style:{margin:0,color:"#6B7280"},children:"Medium modals work well for most use cases and provide enough space for detailed content without overwhelming the interface."})]})]})}),args:{size:"md",title:"Edit Profile",description:"Update your profile information below.",footer:e.jsxs(o,{children:[e.jsx(a,{hierarchy:"secondary-gray",children:"Cancel"}),e.jsx(a,{hierarchy:"primary",children:"Save Changes"})]})},parameters:{docs:{description:{story:"Medium modal (512px max-width) suitable for forms and moderate content."}}}},g={render:r=>e.jsx(t,{...r,children:e.jsxs("div",{children:[e.jsx("p",{children:"This is a large modal that provides substantial space for complex content, detailed forms, or rich media. It's ideal when you need to display more information without losing readability."}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginTop:"24px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontFamily:"Inter, sans-serif"},children:"Left Column"}),e.jsx("p",{style:{margin:0,color:"#6B7280",fontSize:"14px"},children:"Large modals can accommodate multi-column layouts and complex content structures."})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontFamily:"Inter, sans-serif"},children:"Right Column"}),e.jsx("p",{style:{margin:0,color:"#6B7280",fontSize:"14px"},children:"This extra space is perfect for detailed forms, data tables, or rich content."})]})]})]})}),args:{size:"lg",title:"Advanced Settings",description:"Configure advanced options and preferences.",footer:e.jsxs(o,{children:[e.jsx(a,{hierarchy:"secondary-gray",children:"Reset to Defaults"}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(a,{hierarchy:"secondary-gray",children:"Cancel"}),e.jsx(a,{hierarchy:"primary",children:"Apply Settings"})]})]})},parameters:{docs:{description:{story:"Large modal (768px max-width) for complex content and multi-column layouts."}}}},b={render:r=>e.jsx(t,{...r,children:e.jsxs("div",{children:[e.jsx("p",{children:"This is an extra large modal that maximizes available space for the most complex interfaces. Perfect for dashboards, data visualization, or comprehensive forms."}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"24px",marginTop:"24px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 12px 0",fontFamily:"Inter, sans-serif"},children:"Analytics"}),e.jsx("div",{style:{padding:"16px",backgroundColor:"#F9FAFB",borderRadius:"8px"},children:e.jsx("p",{style:{margin:0,fontSize:"14px",color:"#6B7280"},children:"View detailed analytics and metrics for your data."})})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 12px 0",fontFamily:"Inter, sans-serif"},children:"Reports"}),e.jsx("div",{style:{padding:"16px",backgroundColor:"#F9FAFB",borderRadius:"8px"},children:e.jsx("p",{style:{margin:0,fontSize:"14px",color:"#6B7280"},children:"Generate and customize detailed reports."})})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 12px 0",fontFamily:"Inter, sans-serif"},children:"Export"}),e.jsx("div",{style:{padding:"16px",backgroundColor:"#F9FAFB",borderRadius:"8px"},children:e.jsx("p",{style:{margin:0,fontSize:"14px",color:"#6B7280"},children:"Export data in various formats."})})]})]})]})}),args:{size:"xl",title:"Data Dashboard",description:"Comprehensive view of your data and analytics.",footer:e.jsxs(o,{align:"space-between",children:[e.jsx(a,{hierarchy:"secondary-gray",children:"Help"}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(a,{hierarchy:"secondary-gray",children:"Export All"}),e.jsx(a,{hierarchy:"primary",children:"Save Dashboard"})]})]})},parameters:{docs:{description:{story:"Extra large modal (1024px max-width) for complex dashboards and comprehensive interfaces."}}}},v={render:r=>e.jsx(t,{...r,buttonText:"Open Full Screen",children:e.jsxs("div",{children:[e.jsx("p",{children:"This is a full-screen modal that takes up almost the entire viewport. Ideal for immersive experiences, image galleries, or complex applications that need maximum screen real estate."}),e.jsxs("div",{style:{marginTop:"32px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontFamily:"Inter, sans-serif"},children:"Full Screen Experience"}),e.jsx("p",{style:{marginBottom:"24px",color:"#6B7280"},children:"Full-screen modals provide an immersive experience while still maintaining the modal context. They're perfect for media viewers, complex forms, or mini-applications within your main application."}),e.jsx("div",{style:{height:"200px",backgroundColor:"#F3F4F6",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"#6B7280",fontSize:"14px"},children:"Placeholder for rich content or media"})]})]})}),args:{size:"full",title:"Image Gallery",description:"Browse and manage your image collection.",footer:e.jsxs(o,{children:[e.jsx(a,{hierarchy:"secondary-gray",children:"Previous"}),e.jsx(a,{hierarchy:"secondary-gray",children:"Next"}),e.jsx(a,{hierarchy:"primary",children:"Select Image"})]})},parameters:{docs:{description:{story:"Full-screen modal that maximizes viewport usage for immersive experiences."}}}},j={render:r=>e.jsx(t,{...r}),args:{title:"Quick Message",description:"This modal only has a header section with title and description."},parameters:{docs:{description:{story:"Modal with only header content - useful for simple messages or notifications."}}}},w={render:r=>e.jsx(t,{...r,children:e.jsxs("div",{style:{textAlign:"center",padding:"20px 0"},children:[e.jsx("h2",{style:{margin:"0 0 16px 0",fontFamily:"Inter, sans-serif"},children:"Custom Content"}),e.jsx("p",{style:{margin:"0 0 24px 0",color:"#6B7280"},children:"This modal contains only content without a standard header or footer. Perfect for custom layouts and creative designs."}),e.jsx(a,{hierarchy:"primary",children:"Got it"})]})}),args:{showCloseButton:!1},parameters:{docs:{description:{story:"Modal with only content section - useful for custom layouts and designs."}}}},M={render:r=>e.jsx(t,{...r,children:e.jsx("p",{children:"This modal doesn't have a close button in the header. Users must use the action buttons or press Escape to close it."})}),args:{title:"Important Notice",description:"Please read this information carefully.",showCloseButton:!1,footer:e.jsx(o,{children:e.jsx(a,{hierarchy:"primary",children:"I Understand"})})},parameters:{docs:{description:{story:"Modal without close button - forces users to interact with action buttons."}}}},F={render:r=>e.jsx(t,{...r,children:e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"14px",fontWeight:"500",fontFamily:"Inter, sans-serif"},children:"Name"}),e.jsx("input",{type:"text",style:{width:"100%",padding:"8px 12px",border:"1px solid #D1D5DB",borderRadius:"6px",fontSize:"14px",fontFamily:"Inter, sans-serif"},placeholder:"Enter your name"})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"14px",fontWeight:"500",fontFamily:"Inter, sans-serif"},children:"Email"}),e.jsx("input",{type:"email",style:{width:"100%",padding:"8px 12px",border:"1px solid #D1D5DB",borderRadius:"6px",fontSize:"14px",fontFamily:"Inter, sans-serif"},placeholder:"Enter your email"})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"14px",fontWeight:"500",fontFamily:"Inter, sans-serif"},children:"Message"}),e.jsx("textarea",{rows:4,style:{width:"100%",padding:"8px 12px",border:"1px solid #D1D5DB",borderRadius:"6px",fontSize:"14px",fontFamily:"Inter, sans-serif",resize:"vertical"},placeholder:"Enter your message"})]})]})}),args:{title:"Contact Form",description:"Send us a message and we'll get back to you.",footer:e.jsxs(o,{children:[e.jsx(a,{hierarchy:"secondary-gray",children:"Cancel"}),e.jsx(a,{hierarchy:"primary",children:"Send Message"})]})},parameters:{docs:{description:{story:"Modal containing a form - demonstrates practical usage for data collection."}}}},B={render:r=>e.jsx(t,{...r,children:e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"16px"},children:e.jsx("input",{type:"text",placeholder:"Search users...",style:{width:"100%",padding:"8px 12px",border:"1px solid #D1D5DB",borderRadius:"6px",fontSize:"14px",fontFamily:"Inter, sans-serif"}})}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:["Alice Johnson","Bob Smith","Carol Davis","David Wilson","Emma Brown"].map((s,l)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"12px",borderRadius:"6px",backgroundColor:"#F9FAFB",cursor:"pointer"},children:[e.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",backgroundColor:"#E5E7EB",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"500",fontFamily:"Inter, sans-serif"},children:s.split(" ").map(d=>d[0]).join("")}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontSize:"14px",fontWeight:"500",fontFamily:"Inter, sans-serif"},children:s}),e.jsx("div",{style:{fontSize:"12px",color:"#6B7280",fontFamily:"Inter, sans-serif"},children:"user@example.com"})]})]},l))})]})}),args:{size:"md",title:"Select User",description:"Choose a user from the list below.",footer:e.jsxs(o,{children:[e.jsx(a,{hierarchy:"secondary-gray",children:"Cancel"}),e.jsx(a,{hierarchy:"primary",children:"Select User"})]})},parameters:{docs:{description:{story:"Modal with a searchable user list - demonstrates practical list selection interface."}}}},C={render:r=>e.jsx(t,{...r,children:e.jsx("p",{children:"This modal cannot be closed by clicking the backdrop. You must use the close button or action buttons."})}),args:{title:"Persistent Modal",description:"This modal requires explicit action to close.",closeOnBackdropClick:!1,footer:e.jsx(o,{children:e.jsx(a,{hierarchy:"primary",children:"Close Modal"})})},parameters:{docs:{description:{story:"Modal that cannot be closed by clicking the backdrop - useful for critical actions."}}}},S={render:r=>e.jsx(t,{...r,children:e.jsx("p",{children:"This modal cannot be closed using the Escape key. You must use the close button or action buttons."})}),args:{title:"Escape Disabled",description:"The Escape key is disabled for this modal.",closeOnEscape:!1,footer:e.jsx(o,{children:e.jsx(a,{hierarchy:"primary",children:"Close Modal"})})},parameters:{docs:{description:{story:"Modal that cannot be closed with Escape key - prevents accidental dismissal."}}}},k={render:r=>e.jsx(t,{...r,children:e.jsx("p",{children:"This modal appears instantly without any entrance animations. Useful for accessibility or performance considerations."})}),args:{title:"No Animation",description:"This modal has animations disabled.",disableAnimation:!0,footer:e.jsx(o,{children:e.jsx(a,{hierarchy:"primary",children:"Close"})})},parameters:{docs:{description:{story:"Modal without entrance animations - respects reduced motion preferences."}}}},T={render:r=>e.jsx(t,{...r,children:e.jsxs("div",{children:[e.jsx("p",{children:"This modal demonstrates responsive behavior across different screen sizes. Resize your browser window to see how it adapts."}),e.jsxs("div",{style:{marginTop:"16px",padding:"16px",backgroundColor:"#F3F4F6",borderRadius:"8px"},children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontFamily:"Inter, sans-serif"},children:"Responsive Features"}),e.jsxs("ul",{style:{margin:0,paddingLeft:"16px",fontSize:"14px",color:"#6B7280"},children:[e.jsx("li",{children:"Full width on mobile devices"}),e.jsx("li",{children:"Adjusted padding and spacing"}),e.jsx("li",{children:"Stacked button layouts on small screens"}),e.jsx("li",{children:"Optimized touch targets"})]})]})]})}),args:{size:"lg",title:"Responsive Modal",description:"This modal adapts to different screen sizes automatically.",footer:e.jsxs(o,{children:[e.jsx(a,{hierarchy:"secondary-gray",children:"Secondary Action"}),e.jsx(a,{hierarchy:"primary",children:"Primary Action"})]})},parameters:{docs:{description:{story:"Modal demonstrating responsive behavior across mobile, tablet, and desktop."}}}};var K,Y,$;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args}>
      <p>This is a default modal with basic content. It demonstrates the standard modal layout with a title, content area, and action buttons.</p>
    </ModalWrapper>,
  args: {
    title: 'Modal Title',
    description: 'This is a modal description that provides additional context.',
    footer: <ModalFooter>
        <Button hierarchy="secondary-gray">Cancel</Button>
        <Button hierarchy="primary">Save Changes</Button>
      </ModalFooter>
  }
}`,...($=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var J,Q,Z;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args}>
      <p>This is a small modal perfect for simple confirmations or alerts. It takes up minimal screen space while still being easily readable.</p>
    </ModalWrapper>,
  args: {
    size: 'sm',
    title: 'Delete Item',
    description: 'Are you sure you want to delete this item?',
    footer: <ModalFooter>
        <Button hierarchy="secondary-gray">Cancel</Button>
        <Button hierarchy="primary" destructive>Delete</Button>
      </ModalFooter>
  },
  parameters: {
    docs: {
      description: {
        story: 'Small modal (384px max-width) ideal for confirmations and simple dialogs.'
      }
    }
  }
}`,...(Z=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var X,ee,re;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args}>
      <div>
        <p>This is a medium-sized modal that provides a good balance between content space and screen real estate. Perfect for forms and detailed content.</p>
        <div style={{
        marginTop: '16px'
      }}>
          <h4 style={{
          margin: '0 0 8px 0',
          fontFamily: 'Inter, sans-serif'
        }}>Additional Information</h4>
          <p style={{
          margin: 0,
          color: '#6B7280'
        }}>Medium modals work well for most use cases and provide enough space for detailed content without overwhelming the interface.</p>
        </div>
      </div>
    </ModalWrapper>,
  args: {
    size: 'md',
    title: 'Edit Profile',
    description: 'Update your profile information below.',
    footer: <ModalFooter>
        <Button hierarchy="secondary-gray">Cancel</Button>
        <Button hierarchy="primary">Save Changes</Button>
      </ModalFooter>
  },
  parameters: {
    docs: {
      description: {
        story: 'Medium modal (512px max-width) suitable for forms and moderate content.'
      }
    }
  }
}`,...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,oe;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args}>
      <div>
        <p>This is a large modal that provides substantial space for complex content, detailed forms, or rich media. It's ideal when you need to display more information without losing readability.</p>
        <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
        marginTop: '24px'
      }}>
          <div>
            <h4 style={{
            margin: '0 0 8px 0',
            fontFamily: 'Inter, sans-serif'
          }}>Left Column</h4>
            <p style={{
            margin: 0,
            color: '#6B7280',
            fontSize: '14px'
          }}>Large modals can accommodate multi-column layouts and complex content structures.</p>
          </div>
          <div>
            <h4 style={{
            margin: '0 0 8px 0',
            fontFamily: 'Inter, sans-serif'
          }}>Right Column</h4>
            <p style={{
            margin: 0,
            color: '#6B7280',
            fontSize: '14px'
          }}>This extra space is perfect for detailed forms, data tables, or rich content.</p>
          </div>
        </div>
      </div>
    </ModalWrapper>,
  args: {
    size: 'lg',
    title: 'Advanced Settings',
    description: 'Configure advanced options and preferences.',
    footer: <ModalFooter>
        <Button hierarchy="secondary-gray">Reset to Defaults</Button>
        <div style={{
        display: 'flex',
        gap: '12px'
      }}>
          <Button hierarchy="secondary-gray">Cancel</Button>
          <Button hierarchy="primary">Apply Settings</Button>
        </div>
      </ModalFooter>
  },
  parameters: {
    docs: {
      description: {
        story: 'Large modal (768px max-width) for complex content and multi-column layouts.'
      }
    }
  }
}`,...(oe=(te=g.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var se,ie,ne;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args}>
      <div>
        <p>This is an extra large modal that maximizes available space for the most complex interfaces. Perfect for dashboards, data visualization, or comprehensive forms.</p>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        marginTop: '24px'
      }}>
          <div>
            <h4 style={{
            margin: '0 0 12px 0',
            fontFamily: 'Inter, sans-serif'
          }}>Analytics</h4>
            <div style={{
            padding: '16px',
            backgroundColor: '#F9FAFB',
            borderRadius: '8px'
          }}>
              <p style={{
              margin: 0,
              fontSize: '14px',
              color: '#6B7280'
            }}>View detailed analytics and metrics for your data.</p>
            </div>
          </div>
          <div>
            <h4 style={{
            margin: '0 0 12px 0',
            fontFamily: 'Inter, sans-serif'
          }}>Reports</h4>
            <div style={{
            padding: '16px',
            backgroundColor: '#F9FAFB',
            borderRadius: '8px'
          }}>
              <p style={{
              margin: 0,
              fontSize: '14px',
              color: '#6B7280'
            }}>Generate and customize detailed reports.</p>
            </div>
          </div>
          <div>
            <h4 style={{
            margin: '0 0 12px 0',
            fontFamily: 'Inter, sans-serif'
          }}>Export</h4>
            <div style={{
            padding: '16px',
            backgroundColor: '#F9FAFB',
            borderRadius: '8px'
          }}>
              <p style={{
              margin: 0,
              fontSize: '14px',
              color: '#6B7280'
            }}>Export data in various formats.</p>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>,
  args: {
    size: 'xl',
    title: 'Data Dashboard',
    description: 'Comprehensive view of your data and analytics.',
    footer: <ModalFooter align="space-between">
        <Button hierarchy="secondary-gray">Help</Button>
        <div style={{
        display: 'flex',
        gap: '12px'
      }}>
          <Button hierarchy="secondary-gray">Export All</Button>
          <Button hierarchy="primary">Save Dashboard</Button>
        </div>
      </ModalFooter>
  },
  parameters: {
    docs: {
      description: {
        story: 'Extra large modal (1024px max-width) for complex dashboards and comprehensive interfaces.'
      }
    }
  }
}`,...(ne=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var le,de,ce;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} buttonText="Open Full Screen">
      <div>
        <p>This is a full-screen modal that takes up almost the entire viewport. Ideal for immersive experiences, image galleries, or complex applications that need maximum screen real estate.</p>
        <div style={{
        marginTop: '32px'
      }}>
          <h3 style={{
          margin: '0 0 16px 0',
          fontFamily: 'Inter, sans-serif'
        }}>Full Screen Experience</h3>
          <p style={{
          marginBottom: '24px',
          color: '#6B7280'
        }}>
            Full-screen modals provide an immersive experience while still maintaining the modal context. 
            They're perfect for media viewers, complex forms, or mini-applications within your main application.
          </p>
          <div style={{
          height: '200px',
          backgroundColor: '#F3F4F6',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#6B7280',
          fontSize: '14px'
        }}>
            Placeholder for rich content or media
          </div>
        </div>
      </div>
    </ModalWrapper>,
  args: {
    size: 'full',
    title: 'Image Gallery',
    description: 'Browse and manage your image collection.',
    footer: <ModalFooter>
        <Button hierarchy="secondary-gray">Previous</Button>
        <Button hierarchy="secondary-gray">Next</Button>
        <Button hierarchy="primary">Select Image</Button>
      </ModalFooter>
  },
  parameters: {
    docs: {
      description: {
        story: 'Full-screen modal that maximizes viewport usage for immersive experiences.'
      }
    }
  }
}`,...(ce=(de=v.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,me,ue;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args}>
    </ModalWrapper>,
  args: {
    title: 'Quick Message',
    description: 'This modal only has a header section with title and description.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with only header content - useful for simple messages or notifications.'
      }
    }
  }
}`,...(ue=(me=j.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var he,ye,fe;w.parameters={...w.parameters,docs:{...(he=w.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args}>
      <div style={{
      textAlign: 'center',
      padding: '20px 0'
    }}>
        <h2 style={{
        margin: '0 0 16px 0',
        fontFamily: 'Inter, sans-serif'
      }}>Custom Content</h2>
        <p style={{
        margin: '0 0 24px 0',
        color: '#6B7280'
      }}>
          This modal contains only content without a standard header or footer. 
          Perfect for custom layouts and creative designs.
        </p>
        <Button hierarchy="primary">Got it</Button>
      </div>
    </ModalWrapper>,
  args: {
    showCloseButton: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with only content section - useful for custom layouts and designs.'
      }
    }
  }
}`,...(fe=(ye=w.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var xe,ge,be;M.parameters={...M.parameters,docs:{...(xe=M.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args}>
      <p>This modal doesn't have a close button in the header. Users must use the action buttons or press Escape to close it.</p>
    </ModalWrapper>,
  args: {
    title: 'Important Notice',
    description: 'Please read this information carefully.',
    showCloseButton: false,
    footer: <ModalFooter>
        <Button hierarchy="primary">I Understand</Button>
      </ModalFooter>
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal without close button - forces users to interact with action buttons.'
      }
    }
  }
}`,...(be=(ge=M.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var ve,je,we;F.parameters={...F.parameters,docs:{...(ve=F.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args}>
      <form style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <div>
          <label style={{
          display: 'block',
          marginBottom: '4px',
          fontSize: '14px',
          fontWeight: '500',
          fontFamily: 'Inter, sans-serif'
        }}>
            Name
          </label>
          <input type="text" style={{
          width: '100%',
          padding: '8px 12px',
          border: '1px solid #D1D5DB',
          borderRadius: '6px',
          fontSize: '14px',
          fontFamily: 'Inter, sans-serif'
        }} placeholder="Enter your name" />
        </div>
        <div>
          <label style={{
          display: 'block',
          marginBottom: '4px',
          fontSize: '14px',
          fontWeight: '500',
          fontFamily: 'Inter, sans-serif'
        }}>
            Email
          </label>
          <input type="email" style={{
          width: '100%',
          padding: '8px 12px',
          border: '1px solid #D1D5DB',
          borderRadius: '6px',
          fontSize: '14px',
          fontFamily: 'Inter, sans-serif'
        }} placeholder="Enter your email" />
        </div>
        <div>
          <label style={{
          display: 'block',
          marginBottom: '4px',
          fontSize: '14px',
          fontWeight: '500',
          fontFamily: 'Inter, sans-serif'
        }}>
            Message
          </label>
          <textarea rows={4} style={{
          width: '100%',
          padding: '8px 12px',
          border: '1px solid #D1D5DB',
          borderRadius: '6px',
          fontSize: '14px',
          fontFamily: 'Inter, sans-serif',
          resize: 'vertical'
        }} placeholder="Enter your message" />
        </div>
      </form>
    </ModalWrapper>,
  args: {
    title: 'Contact Form',
    description: 'Send us a message and we\\'ll get back to you.',
    footer: <ModalFooter>
        <Button hierarchy="secondary-gray">Cancel</Button>
        <Button hierarchy="primary">Send Message</Button>
      </ModalFooter>
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal containing a form - demonstrates practical usage for data collection.'
      }
    }
  }
}`,...(we=(je=F.parameters)==null?void 0:je.docs)==null?void 0:we.source}}};var Me,Fe,Be;B.parameters={...B.parameters,docs:{...(Me=B.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args}>
      <div>
        <div style={{
        marginBottom: '16px'
      }}>
          <input type="text" placeholder="Search users..." style={{
          width: '100%',
          padding: '8px 12px',
          border: '1px solid #D1D5DB',
          borderRadius: '6px',
          fontSize: '14px',
          fontFamily: 'Inter, sans-serif'
        }} />
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
          {['Alice Johnson', 'Bob Smith', 'Carol Davis', 'David Wilson', 'Emma Brown'].map((name, index) => <div key={index} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '12px',
          borderRadius: '6px',
          backgroundColor: '#F9FAFB',
          cursor: 'pointer'
        }}>
              <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: '#E5E7EB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: '500',
            fontFamily: 'Inter, sans-serif'
          }}>
                {name.split(' ').map(n => n[0]).join('')}
              </div>
              <div style={{
            flex: 1
          }}>
                <div style={{
              fontSize: '14px',
              fontWeight: '500',
              fontFamily: 'Inter, sans-serif'
            }}>{name}</div>
                <div style={{
              fontSize: '12px',
              color: '#6B7280',
              fontFamily: 'Inter, sans-serif'
            }}>user@example.com</div>
              </div>
            </div>)}
        </div>
      </div>
    </ModalWrapper>,
  args: {
    size: 'md',
    title: 'Select User',
    description: 'Choose a user from the list below.',
    footer: <ModalFooter>
        <Button hierarchy="secondary-gray">Cancel</Button>
        <Button hierarchy="primary">Select User</Button>
      </ModalFooter>
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with a searchable user list - demonstrates practical list selection interface.'
      }
    }
  }
}`,...(Be=(Fe=B.parameters)==null?void 0:Fe.docs)==null?void 0:Be.source}}};var Ce,Se,ke;C.parameters={...C.parameters,docs:{...(Ce=C.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args}>
      <p>This modal cannot be closed by clicking the backdrop. You must use the close button or action buttons.</p>
    </ModalWrapper>,
  args: {
    title: 'Persistent Modal',
    description: 'This modal requires explicit action to close.',
    closeOnBackdropClick: false,
    footer: <ModalFooter>
        <Button hierarchy="primary">Close Modal</Button>
      </ModalFooter>
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal that cannot be closed by clicking the backdrop - useful for critical actions.'
      }
    }
  }
}`,...(ke=(Se=C.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};var Te,ze,Ie;S.parameters={...S.parameters,docs:{...(Te=S.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args}>
      <p>This modal cannot be closed using the Escape key. You must use the close button or action buttons.</p>
    </ModalWrapper>,
  args: {
    title: 'Escape Disabled',
    description: 'The Escape key is disabled for this modal.',
    closeOnEscape: false,
    footer: <ModalFooter>
        <Button hierarchy="primary">Close Modal</Button>
      </ModalFooter>
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal that cannot be closed with Escape key - prevents accidental dismissal.'
      }
    }
  }
}`,...(Ie=(ze=S.parameters)==null?void 0:ze.docs)==null?void 0:Ie.source}}};var Re,Ee,Ae;k.parameters={...k.parameters,docs:{...(Re=k.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args}>
      <p>This modal appears instantly without any entrance animations. Useful for accessibility or performance considerations.</p>
    </ModalWrapper>,
  args: {
    title: 'No Animation',
    description: 'This modal has animations disabled.',
    disableAnimation: true,
    footer: <ModalFooter>
        <Button hierarchy="primary">Close</Button>
      </ModalFooter>
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal without entrance animations - respects reduced motion preferences.'
      }
    }
  }
}`,...(Ae=(Ee=k.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};var De,We,Ne;T.parameters={...T.parameters,docs:{...(De=T.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args}>
      <div>
        <p>This modal demonstrates responsive behavior across different screen sizes. Resize your browser window to see how it adapts.</p>
        <div style={{
        marginTop: '16px',
        padding: '16px',
        backgroundColor: '#F3F4F6',
        borderRadius: '8px'
      }}>
          <h4 style={{
          margin: '0 0 8px 0',
          fontFamily: 'Inter, sans-serif'
        }}>Responsive Features</h4>
          <ul style={{
          margin: 0,
          paddingLeft: '16px',
          fontSize: '14px',
          color: '#6B7280'
        }}>
            <li>Full width on mobile devices</li>
            <li>Adjusted padding and spacing</li>
            <li>Stacked button layouts on small screens</li>
            <li>Optimized touch targets</li>
          </ul>
        </div>
      </div>
    </ModalWrapper>,
  args: {
    size: 'lg',
    title: 'Responsive Modal',
    description: 'This modal adapts to different screen sizes automatically.',
    footer: <ModalFooter>
        <Button hierarchy="secondary-gray">Secondary Action</Button>
        <Button hierarchy="primary">Primary Action</Button>
      </ModalFooter>
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal demonstrating responsive behavior across mobile, tablet, and desktop.'
      }
    }
  }
}`,...(Ne=(We=T.parameters)==null?void 0:We.docs)==null?void 0:Ne.source}}};const rr=["Default","SmallModal","MediumModal","LargeModal","ExtraLargeModal","FullScreenModal","HeaderOnly","ContentOnly","WithoutCloseButton","FormModal","UserListModal","NoBackdropClose","NoEscapeClose","NoAnimation","MobileResponsive"];export{w as ContentOnly,y as Default,b as ExtraLargeModal,F as FormModal,v as FullScreenModal,j as HeaderOnly,g as LargeModal,x as MediumModal,T as MobileResponsive,k as NoAnimation,C as NoBackdropClose,S as NoEscapeClose,f as SmallModal,B as UserListModal,M as WithoutCloseButton,rr as __namedExportsOrder,er as default};
