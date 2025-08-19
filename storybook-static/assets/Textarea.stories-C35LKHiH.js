import{j as e}from"./jsx-runtime-DiklIkkE.js";import{R as he}from"./index-DRjF_FHU.js";import{T as t}from"./Input-bXxFRFnQ.js";const ye={title:"Design System/Textarea",component:t,parameters:{layout:"centered",docs:{description:{component:"A multi-line textarea component for longer text input with error state support."}}},tags:["autodocs"],argTypes:{error:{control:"boolean",description:"Whether this is an error state"},label:{control:"text",description:"Label text for the textarea"},placeholder:{control:"text",description:"Placeholder text"},value:{control:"text",description:"Textarea value"},helpText:{control:"text",description:"Help/hint text below the textarea"},rows:{control:"number",description:"Number of visible rows",min:2,max:10},disabled:{control:"boolean",description:"Whether the textarea is disabled"}},args:{error:!1,label:"Description",placeholder:"Enter a description...",helpText:"This is a hint text to help user.",rows:4,disabled:!1}},i={},n={args:{error:!0,helpText:"This is an error message."}},l={args:{disabled:!0,value:"This textarea is disabled and cannot be edited.",helpText:"This textarea is disabled."}},d={args:{rows:2,label:"Short Description",placeholder:"Enter a brief description...",helpText:"Keep it short and sweet."}},c={args:{rows:8,label:"Detailed Description",placeholder:"Enter a detailed description...",helpText:"Provide as much detail as necessary."}},p={args:{value:"This is a sample description that demonstrates how the textarea looks with content. Users can edit this text and the textarea will automatically resize as needed.",helpText:"Edit the content above."}},m={render:()=>{const r={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"24px",padding:"20px",maxWidth:"1000px"};return e.jsxs("div",{style:r,children:[e.jsx(t,{label:"Default State",placeholder:"Enter a description...",helpText:"This is a hint text to help user."}),e.jsx(t,{label:"Error State",placeholder:"Enter a description...",error:!0,helpText:"This is an error message."}),e.jsx(t,{label:"Disabled State",placeholder:"Enter a description...",disabled:!0,value:"This content cannot be edited.",helpText:"This textarea is disabled."}),e.jsx(t,{label:"With Content",value:"This textarea has some pre-filled content that demonstrates how it looks with text.",helpText:"You can edit this content."})]})},parameters:{docs:{description:{story:"Comparison of all textarea states including default, error, disabled, and with content."}}}},h={render:()=>{const r={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"24px",padding:"20px",maxWidth:"1000px"};return e.jsxs("div",{style:r,children:[e.jsx(t,{label:"Small (2 rows)",placeholder:"Brief description...",rows:2,helpText:"For short content."}),e.jsx(t,{label:"Medium (4 rows)",placeholder:"Medium description...",rows:4,helpText:"Standard size for most content."}),e.jsx(t,{label:"Large (6 rows)",placeholder:"Detailed description...",rows:6,helpText:"For longer content."}),e.jsx(t,{label:"Extra Large (8 rows)",placeholder:"Very detailed description...",rows:8,helpText:"For extensive content."})]})},parameters:{docs:{description:{story:"Different textarea sizes to accommodate various content lengths."}}}},x={render:()=>{const[r,o]=he.useState(""),g=500,a=g-r.length,s={maxWidth:"400px",padding:"20px"},xe={textAlign:"right",fontSize:"12px",color:a<50?"#0EA5E9":"#717680",marginTop:"4px"};return e.jsxs("div",{style:s,children:[e.jsx(t,{label:"Product Description",placeholder:"Describe your product in detail...",value:r,onChange:o,rows:6,helpText:a<0?"Description is too long!":"Describe the key features and benefits.",error:a<0}),e.jsxs("div",{style:xe,children:[r.length," / ",g," characters"]})]})},parameters:{docs:{description:{story:"Interactive textarea with character counting and dynamic error states."}}}},u={render:()=>{const[r,o]=he.useState({summary:"",description:"",requirements:"",notes:""}),g={display:"grid",gridTemplateColumns:"1fr",gap:"20px",padding:"20px",maxWidth:"500px"};return e.jsxs("div",{style:g,children:[e.jsx(t,{label:"Project Summary",placeholder:"Brief overview of the project...",rows:2,value:r.summary,onChange:a=>o(s=>({...s,summary:a})),helpText:"Keep this concise - 1-2 sentences."}),e.jsx(t,{label:"Detailed Description",placeholder:"Provide a detailed description...",rows:4,value:r.description,onChange:a=>o(s=>({...s,description:a})),helpText:"Include all relevant details and context."}),e.jsx(t,{label:"Requirements",placeholder:"List your specific requirements...",rows:3,value:r.requirements,onChange:a=>o(s=>({...s,requirements:a})),helpText:"Be specific about what you need."}),e.jsx(t,{label:"Additional Notes",placeholder:"Any additional information...",rows:2,value:r.notes,onChange:a=>o(s=>({...s,notes:a})),helpText:"Optional: Add any other relevant information."})]})},parameters:{docs:{description:{story:"Form example showing multiple textareas working together with state management."}}}};var T,y,v,b,f;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source},description:{story:"The default textarea configuration.",...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.description}}};var w,S,D,E,j;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    error: true,
    helpText: 'This is an error message.'
  }
}`,...(D=(S=n.parameters)==null?void 0:S.docs)==null?void 0:D.source},description:{story:"Textarea in error state with error message.",...(j=(E=n.parameters)==null?void 0:E.docs)==null?void 0:j.description}}};var C,F,A,L,W;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'This textarea is disabled and cannot be edited.',
    helpText: 'This textarea is disabled.'
  }
}`,...(A=(F=l.parameters)==null?void 0:F.docs)==null?void 0:A.source},description:{story:"Disabled textarea state.",...(W=(L=l.parameters)==null?void 0:L.docs)==null?void 0:W.description}}};var z,q,P,k,I;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    rows: 2,
    label: 'Short Description',
    placeholder: 'Enter a brief description...',
    helpText: 'Keep it short and sweet.'
  }
}`,...(P=(q=d.parameters)==null?void 0:q.docs)==null?void 0:P.source},description:{story:"Small textarea with fewer rows.",...(I=(k=d.parameters)==null?void 0:k.docs)==null?void 0:I.description}}};var R,B,V,K,M;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    rows: 8,
    label: 'Detailed Description',
    placeholder: 'Enter a detailed description...',
    helpText: 'Provide as much detail as necessary.'
  }
}`,...(V=(B=c.parameters)==null?void 0:B.docs)==null?void 0:V.source},description:{story:"Large textarea with more rows.",...(M=(K=c.parameters)==null?void 0:K.docs)==null?void 0:M.description}}};var N,O,U,Y,_;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: 'This is a sample description that demonstrates how the textarea looks with content. Users can edit this text and the textarea will automatically resize as needed.',
    helpText: 'Edit the content above.'
  }
}`,...(U=(O=p.parameters)==null?void 0:O.docs)==null?void 0:U.source},description:{story:"Textarea with pre-filled content.",...(_=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:_.description}}};var H,G,J,Q,X;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const containerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
      padding: '20px',
      maxWidth: '1000px'
    };
    return <div style={containerStyle}>
        <Textarea label="Default State" placeholder="Enter a description..." helpText="This is a hint text to help user." />
        <Textarea label="Error State" placeholder="Enter a description..." error helpText="This is an error message." />
        <Textarea label="Disabled State" placeholder="Enter a description..." disabled value="This content cannot be edited." helpText="This textarea is disabled." />
        <Textarea label="With Content" value="This textarea has some pre-filled content that demonstrates how it looks with text." helpText="You can edit this content." />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all textarea states including default, error, disabled, and with content.'
      }
    }
  }
}`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source},description:{story:"All textarea states in comparison.",...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Z,$,ee,te,re;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const containerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
      padding: '20px',
      maxWidth: '1000px'
    };
    return <div style={containerStyle}>
        <Textarea label="Small (2 rows)" placeholder="Brief description..." rows={2} helpText="For short content." />
        <Textarea label="Medium (4 rows)" placeholder="Medium description..." rows={4} helpText="Standard size for most content." />
        <Textarea label="Large (6 rows)" placeholder="Detailed description..." rows={6} helpText="For longer content." />
        <Textarea label="Extra Large (8 rows)" placeholder="Very detailed description..." rows={8} helpText="For extensive content." />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Different textarea sizes to accommodate various content lengths.'
      }
    }
  }
}`,...(ee=($=h.parameters)==null?void 0:$.docs)==null?void 0:ee.source},description:{story:"Different sizes of textareas.",...(re=(te=h.parameters)==null?void 0:te.docs)==null?void 0:re.description}}};var ae,se,oe,ie,ne;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState('');
    const maxLength = 500;
    const remaining = maxLength - value.length;
    const containerStyle = {
      maxWidth: '400px',
      padding: '20px'
    };
    const counterStyle = {
      textAlign: 'right' as const,
      fontSize: '12px',
      color: remaining < 50 ? '#0EA5E9' : '#717680',
      marginTop: '4px'
    };
    return <div style={containerStyle}>
        <Textarea label="Product Description" placeholder="Describe your product in detail..." value={value} onChange={setValue} rows={6} helpText={remaining < 0 ? 'Description is too long!' : 'Describe the key features and benefits.'} error={remaining < 0} />
        <div style={counterStyle}>
          {value.length} / {maxLength} characters
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive textarea with character counting and dynamic error states.'
      }
    }
  }
}`,...(oe=(se=x.parameters)==null?void 0:se.docs)==null?void 0:oe.source},description:{story:"Interactive textarea with character counting.",...(ne=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:ne.description}}};var le,de,ce,pe,me;u.parameters={...u.parameters,docs:{...(le=u.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = React.useState({
      summary: '',
      description: '',
      requirements: '',
      notes: ''
    });
    const containerStyle = {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '20px',
      padding: '20px',
      maxWidth: '500px'
    };
    return <div style={containerStyle}>
        <Textarea label="Project Summary" placeholder="Brief overview of the project..." rows={2} value={formData.summary} onChange={value => setFormData(prev => ({
        ...prev,
        summary: value
      }))} helpText="Keep this concise - 1-2 sentences." />
        <Textarea label="Detailed Description" placeholder="Provide a detailed description..." rows={4} value={formData.description} onChange={value => setFormData(prev => ({
        ...prev,
        description: value
      }))} helpText="Include all relevant details and context." />
        <Textarea label="Requirements" placeholder="List your specific requirements..." rows={3} value={formData.requirements} onChange={value => setFormData(prev => ({
        ...prev,
        requirements: value
      }))} helpText="Be specific about what you need." />
        <Textarea label="Additional Notes" placeholder="Any additional information..." rows={2} value={formData.notes} onChange={value => setFormData(prev => ({
        ...prev,
        notes: value
      }))} helpText="Optional: Add any other relevant information." />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Form example showing multiple textareas working together with state management.'
      }
    }
  }
}`,...(ce=(de=u.parameters)==null?void 0:de.docs)==null?void 0:ce.source},description:{story:"Form example with multiple textareas.",...(me=(pe=u.parameters)==null?void 0:pe.docs)==null?void 0:me.description}}};const ve=["Default","Error","Disabled","Small","Large","WithContent","AllStates","Sizes","Interactive","FormExample"];export{m as AllStates,i as Default,l as Disabled,n as Error,u as FormExample,x as Interactive,c as Large,h as Sizes,d as Small,p as WithContent,ve as __namedExportsOrder,ye as default};
