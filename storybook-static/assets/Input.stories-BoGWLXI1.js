import{j as e}from"./jsx-runtime-DiklIkkE.js";import{R as We}from"./index-DRjF_FHU.js";import{I as r}from"./Input-bXxFRFnQ.js";const Fe={title:"Design System/Input",component:r,parameters:{layout:"centered",docs:{description:{component:"A versatile input component with comprehensive variant support for all form needs."}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["default","payment","leading-dropdown","trailing-dropdown","leading-text"],description:"Type of input field"},error:{control:"boolean",description:"Whether this is an error state"},label:{control:"text",description:"Label text for the input"},placeholder:{control:"text",description:"Placeholder text"},value:{control:"text",description:"Input value"},helpText:{control:"text",description:"Help/hint text below the input"},showHelpIcon:{control:"boolean",description:"Whether to show the help icon"},leadingText:{control:"text",description:"Leading text for leading-text type"},dropdownValue:{control:"text",description:"Dropdown value for dropdown types"},disabled:{control:"boolean",description:"Whether the input is disabled"}},args:{type:"default",error:!1,label:"Email",placeholder:"olivia@nexusui.com",helpText:"This is a hint text to help user.",showHelpIcon:!0,disabled:!1}},s={},l={args:{error:!0,helpText:"This is an error message."}},i={args:{type:"payment",label:"Card number",placeholder:"Card number",helpText:"This is a hint text to help user."}},p={args:{type:"payment",label:"Card number",placeholder:"Card number",error:!0,helpText:"This is an error message."}},d={args:{type:"leading-dropdown",label:"Phone number",placeholder:"+1 (555) 000-0000",dropdownValue:"US",helpText:"This is a hint text to help user."}},u={args:{type:"leading-dropdown",label:"Phone number",placeholder:"+1 (555) 000-0000",dropdownValue:"US",error:!0,helpText:"This is an error message."}},c={args:{type:"trailing-dropdown",label:"Sale amount",placeholder:"1,000.00",dropdownValue:"USD",helpText:"This is a hint text to help user."}},h={args:{type:"trailing-dropdown",label:"Sale amount",placeholder:"1,000.00",dropdownValue:"USD",error:!0,helpText:"This is an error message."}},m={args:{type:"leading-text",label:"Website",placeholder:"Nexus Design",leadingText:"http://",helpText:"This is a hint text to help user."}},x={args:{type:"leading-text",label:"Website",placeholder:"Nexus Design",leadingText:"http://",error:!0,helpText:"This is an error message."}},g={render:()=>{const t={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"20px",padding:"20px",maxWidth:"1200px"};return e.jsxs("div",{style:t,children:[e.jsx(r,{label:"Email (Disabled)",placeholder:"olivia@nexusui.com",disabled:!0,helpText:"This input is disabled"}),e.jsx(r,{type:"payment",label:"Card number (Disabled)",placeholder:"Card number",disabled:!0,helpText:"This input is disabled"}),e.jsx(r,{type:"leading-dropdown",label:"Phone number (Disabled)",placeholder:"+1 (555) 000-0000",dropdownValue:"US",disabled:!0,helpText:"This input is disabled"})]})},parameters:{docs:{description:{story:"Shows disabled states across different input types."}}}},b={render:()=>{const t={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"24px",padding:"20px",maxWidth:"1400px"};return e.jsxs("div",{style:t,children:[e.jsx(r,{label:"Email",placeholder:"olivia@nexusui.com",helpText:"This is a hint text to help user."}),e.jsx(r,{label:"Email (Error)",placeholder:"olivia@nexusui.com",error:!0,helpText:"This is an error message."}),e.jsx(r,{type:"payment",label:"Card number",placeholder:"Card number",helpText:"This is a hint text to help user."}),e.jsx(r,{type:"payment",label:"Card number (Error)",placeholder:"Card number",error:!0,helpText:"This is an error message."}),e.jsx(r,{type:"leading-dropdown",label:"Phone number",placeholder:"+1 (555) 000-0000",dropdownValue:"US",helpText:"This is a hint text to help user."}),e.jsx(r,{type:"leading-dropdown",label:"Phone number (Error)",placeholder:"+1 (555) 000-0000",dropdownValue:"US",error:!0,helpText:"This is an error message."}),e.jsx(r,{type:"trailing-dropdown",label:"Sale amount",placeholder:"1,000.00",dropdownValue:"USD",helpText:"This is a hint text to help user."}),e.jsx(r,{type:"trailing-dropdown",label:"Sale amount (Error)",placeholder:"1,000.00",dropdownValue:"USD",error:!0,helpText:"This is an error message."}),e.jsx(r,{type:"leading-text",label:"Website",placeholder:"Nexus Design",leadingText:"http://",helpText:"This is a hint text to help user."}),e.jsx(r,{type:"leading-text",label:"Website (Error)",placeholder:"Nexus Design",leadingText:"http://",error:!0,helpText:"This is an error message."})]})},parameters:{docs:{description:{story:"Comprehensive display of all input variants including normal and error states."}}}},y={render:()=>{const[t,n]=We.useState({email:"",phone:"",website:"",amount:"",card:""}),Ue={display:"grid",gridTemplateColumns:"1fr",gap:"20px",padding:"20px",maxWidth:"400px"};return e.jsxs("div",{style:Ue,children:[e.jsx(r,{label:"Email Address",placeholder:"Enter your email",value:t.email,onChange:a=>n(o=>({...o,email:a})),helpText:"We'll never share your email with anyone else."}),e.jsx(r,{type:"leading-dropdown",label:"Phone Number",placeholder:"+1 (555) 000-0000",dropdownValue:"US",value:t.phone,onChange:a=>n(o=>({...o,phone:a})),helpText:"Include your country code."}),e.jsx(r,{type:"leading-text",label:"Website",placeholder:"yoursite.com",leadingText:"https://",value:t.website,onChange:a=>n(o=>({...o,website:a})),helpText:"Your personal or business website."}),e.jsx(r,{type:"trailing-dropdown",label:"Budget",placeholder:"5,000.00",dropdownValue:"USD",value:t.amount,onChange:a=>n(o=>({...o,amount:a})),helpText:"Your monthly budget for this project."}),e.jsx(r,{type:"payment",label:"Credit Card",placeholder:"1234 5678 9012 3456",value:t.card,onChange:a=>n(o=>({...o,card:a})),helpText:"Your card information is secure."})]})},parameters:{docs:{description:{story:"Interactive form showing all input types working together with real state management."}}}};var T,w,v,f,S;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(v=(w=s.parameters)==null?void 0:w.docs)==null?void 0:v.source},description:{story:"The default input configuration with email styling.",...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.description}}};var D,C,I,E,j;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    error: true,
    helpText: 'This is an error message.'
  }
}`,...(I=(C=l.parameters)==null?void 0:C.docs)==null?void 0:I.source},description:{story:"Default input in error state.",...(j=(E=l.parameters)==null?void 0:E.docs)==null?void 0:j.description}}};var V,U,W,P,L;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    type: 'payment',
    label: 'Card number',
    placeholder: 'Card number',
    helpText: 'This is a hint text to help user.'
  }
}`,...(W=(U=i.parameters)==null?void 0:U.docs)==null?void 0:W.source},description:{story:"Payment input with card icon for credit card information.",...(L=(P=i.parameters)==null?void 0:P.docs)==null?void 0:L.description}}};var N,F,A,Y,R;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    type: 'payment',
    label: 'Card number',
    placeholder: 'Card number',
    error: true,
    helpText: 'This is an error message.'
  }
}`,...(A=(F=p.parameters)==null?void 0:F.docs)==null?void 0:A.source},description:{story:"Payment input in error state.",...(R=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:R.description}}};var H,k,B,_,O;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    type: 'leading-dropdown',
    label: 'Phone number',
    placeholder: '+1 (555) 000-0000',
    dropdownValue: 'US',
    helpText: 'This is a hint text to help user.'
  }
}`,...(B=(k=d.parameters)==null?void 0:k.docs)==null?void 0:B.source},description:{story:"Input with leading dropdown for country codes or categories.",...(O=(_=d.parameters)==null?void 0:_.docs)==null?void 0:O.description}}};var q,z,G,J,K;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    type: 'leading-dropdown',
    label: 'Phone number',
    placeholder: '+1 (555) 000-0000',
    dropdownValue: 'US',
    error: true,
    helpText: 'This is an error message.'
  }
}`,...(G=(z=u.parameters)==null?void 0:z.docs)==null?void 0:G.source},description:{story:"Leading dropdown input in error state.",...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var M,Q,X,Z,$;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    type: 'trailing-dropdown',
    label: 'Sale amount',
    placeholder: '1,000.00',
    dropdownValue: 'USD',
    helpText: 'This is a hint text to help user.'
  }
}`,...(X=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"Input with trailing dropdown for currency or units.",...($=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};var ee,re,te,ae,oe;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    type: 'trailing-dropdown',
    label: 'Sale amount',
    placeholder: '1,000.00',
    dropdownValue: 'USD',
    error: true,
    helpText: 'This is an error message.'
  }
}`,...(te=(re=h.parameters)==null?void 0:re.docs)==null?void 0:te.source},description:{story:"Trailing dropdown input in error state.",...(oe=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:oe.description}}};var ne,se,le,ie,pe;m.parameters={...m.parameters,docs:{...(ne=m.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    type: 'leading-text',
    label: 'Website',
    placeholder: 'Nexus Design',
    leadingText: 'http://',
    helpText: 'This is a hint text to help user.'
  }
}`,...(le=(se=m.parameters)==null?void 0:se.docs)==null?void 0:le.source},description:{story:"Input with leading text for URLs and prefixed inputs.",...(pe=(ie=m.parameters)==null?void 0:ie.docs)==null?void 0:pe.description}}};var de,ue,ce,he,me;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    type: 'leading-text',
    label: 'Website',
    placeholder: 'Nexus Design',
    leadingText: 'http://',
    error: true,
    helpText: 'This is an error message.'
  }
}`,...(ce=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:ce.source},description:{story:"Leading text input in error state.",...(me=(he=x.parameters)==null?void 0:he.docs)==null?void 0:me.description}}};var xe,ge,be,ye,Te;g.parameters={...g.parameters,docs:{...(xe=g.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => {
    const containerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      padding: '20px',
      maxWidth: '1200px'
    };
    return <div style={containerStyle}>
        <Input label="Email (Disabled)" placeholder="olivia@nexusui.com" disabled helpText="This input is disabled" />
        <Input type="payment" label="Card number (Disabled)" placeholder="Card number" disabled helpText="This input is disabled" />
        <Input type="leading-dropdown" label="Phone number (Disabled)" placeholder="+1 (555) 000-0000" dropdownValue="US" disabled helpText="This input is disabled" />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows disabled states across different input types.'
      }
    }
  }
}`,...(be=(ge=g.parameters)==null?void 0:ge.docs)==null?void 0:be.source},description:{story:"Disabled input states across different types.",...(Te=(ye=g.parameters)==null?void 0:ye.docs)==null?void 0:Te.description}}};var we,ve,fe,Se,De;b.parameters={...b.parameters,docs:{...(we=b.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => {
    const containerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
      padding: '20px',
      maxWidth: '1400px'
    };
    return <div style={containerStyle}>
        <Input label="Email" placeholder="olivia@nexusui.com" helpText="This is a hint text to help user." />
        <Input label="Email (Error)" placeholder="olivia@nexusui.com" error helpText="This is an error message." />
        <Input type="payment" label="Card number" placeholder="Card number" helpText="This is a hint text to help user." />
        <Input type="payment" label="Card number (Error)" placeholder="Card number" error helpText="This is an error message." />
        <Input type="leading-dropdown" label="Phone number" placeholder="+1 (555) 000-0000" dropdownValue="US" helpText="This is a hint text to help user." />
        <Input type="leading-dropdown" label="Phone number (Error)" placeholder="+1 (555) 000-0000" dropdownValue="US" error helpText="This is an error message." />
        <Input type="trailing-dropdown" label="Sale amount" placeholder="1,000.00" dropdownValue="USD" helpText="This is a hint text to help user." />
        <Input type="trailing-dropdown" label="Sale amount (Error)" placeholder="1,000.00" dropdownValue="USD" error helpText="This is an error message." />
        <Input type="leading-text" label="Website" placeholder="Nexus Design" leadingText="http://" helpText="This is a hint text to help user." />
        <Input type="leading-text" label="Website (Error)" placeholder="Nexus Design" leadingText="http://" error helpText="This is an error message." />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive display of all input variants including normal and error states.'
      }
    }
  }
}`,...(fe=(ve=b.parameters)==null?void 0:ve.docs)==null?void 0:fe.source},description:{story:"All input variants in a comprehensive grid layout.",...(De=(Se=b.parameters)==null?void 0:Se.docs)==null?void 0:De.description}}};var Ce,Ie,Ee,je,Ve;y.parameters={...y.parameters,docs:{...(Ce=y.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = React.useState({
      email: '',
      phone: '',
      website: '',
      amount: '',
      card: ''
    });
    const containerStyle = {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '20px',
      padding: '20px',
      maxWidth: '400px'
    };
    return <div style={containerStyle}>
        <Input label="Email Address" placeholder="Enter your email" value={formData.email} onChange={value => setFormData(prev => ({
        ...prev,
        email: value
      }))} helpText="We'll never share your email with anyone else." />
        <Input type="leading-dropdown" label="Phone Number" placeholder="+1 (555) 000-0000" dropdownValue="US" value={formData.phone} onChange={value => setFormData(prev => ({
        ...prev,
        phone: value
      }))} helpText="Include your country code." />
        <Input type="leading-text" label="Website" placeholder="yoursite.com" leadingText="https://" value={formData.website} onChange={value => setFormData(prev => ({
        ...prev,
        website: value
      }))} helpText="Your personal or business website." />
        <Input type="trailing-dropdown" label="Budget" placeholder="5,000.00" dropdownValue="USD" value={formData.amount} onChange={value => setFormData(prev => ({
        ...prev,
        amount: value
      }))} helpText="Your monthly budget for this project." />
        <Input type="payment" label="Credit Card" placeholder="1234 5678 9012 3456" value={formData.card} onChange={value => setFormData(prev => ({
        ...prev,
        card: value
      }))} helpText="Your card information is secure." />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive form showing all input types working together with real state management.'
      }
    }
  }
}`,...(Ee=(Ie=y.parameters)==null?void 0:Ie.docs)==null?void 0:Ee.source},description:{story:"Interactive example showing form behavior.",...(Ve=(je=y.parameters)==null?void 0:je.docs)==null?void 0:Ve.description}}};const Ae=["Default","DefaultError","Payment","PaymentError","LeadingDropdown","LeadingDropdownError","TrailingDropdown","TrailingDropdownError","LeadingText","LeadingTextError","DisabledStates","AllVariants","InteractiveForm"];export{b as AllVariants,s as Default,l as DefaultError,g as DisabledStates,y as InteractiveForm,d as LeadingDropdown,u as LeadingDropdownError,m as LeadingText,x as LeadingTextError,i as Payment,p as PaymentError,c as TrailingDropdown,h as TrailingDropdownError,Ae as __namedExportsOrder,Fe as default};
