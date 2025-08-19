import{j as e}from"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";const h=["#0F172A","#64748B","#09101F"],Xe={xs:{container:160,outerRing:{radius:76,strokeWidth:8},middleRing:{radius:68,strokeWidth:8},innerRing:{radius:56,strokeWidth:8},numberSize:20,labelSize:12},sm:{container:200,outerRing:{radius:94,strokeWidth:12},middleRing:{radius:83,strokeWidth:12},innerRing:{radius:67,strokeWidth:12},numberSize:24,labelSize:12},md:{container:240,outerRing:{radius:112,strokeWidth:16},middleRing:{radius:100,strokeWidth:16},innerRing:{radius:80,strokeWidth:16},numberSize:30,labelSize:14},lg:{container:280,outerRing:{radius:131,strokeWidth:18},middleRing:{radius:116,strokeWidth:18},innerRing:{radius:92,strokeWidth:18},numberSize:36,labelSize:14}},M=({radius:r,strokeWidth:o,progress:i,color:m,backgroundColor:d="#F5F5F5"})=>{const c=2*Math.PI*r,R=c,N=c*(1-i);return e.jsxs("g",{children:[e.jsx("circle",{cx:140,cy:140,r,fill:"none",stroke:d,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("circle",{cx:140,cy:140,r,fill:"none",stroke:m,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:R,strokeDashoffset:N,transform:"rotate(-90 140 140)",className:"activity-ring-progress"})]})},$e=({color:r,label:o,isVertical:i=!1})=>e.jsxs("div",{className:`activity-legend-item ${i?"activity-legend-item--vertical":""}`,children:[e.jsx("div",{className:"activity-legend-dot",style:{backgroundColor:r}}),e.jsx("span",{className:"activity-legend-label",children:o})]}),t=({data:r=[],size:o="md",showLabel:i=!0,showLegend:m=!1,legendPosition:d="bottom",label:T="Active users",value:c="1,000",className:R="",...N})=>{var k,W,G,V,X,$;const l=Xe[o],g=[...r];for(;g.length<3;)g.push({label:`Series ${g.length+1}`,value:.75});g.splice(3);const n=g.map((u,B)=>({...u,color:u.color||h[B%h.length]})),Ve=["activity-chart",`activity-chart--${o}`,m&&`activity-chart--legend-${d}`,R].filter(Boolean).join(" ");return e.jsx("div",{className:Ve,...N,children:e.jsxs("div",{className:"activity-chart-container",children:[e.jsxs("div",{className:"activity-chart-gauge",children:[e.jsxs("svg",{width:l.container,height:l.container,viewBox:"0 0 280 280",className:"activity-chart-svg",children:[e.jsx(M,{radius:l.outerRing.radius,strokeWidth:l.outerRing.strokeWidth,progress:Math.min(Math.max(((k=n[0])==null?void 0:k.value)||0,0),1),color:((W=n[0])==null?void 0:W.color)||h[0]}),e.jsx(M,{radius:l.middleRing.radius,strokeWidth:l.middleRing.strokeWidth,progress:Math.min(Math.max(((G=n[1])==null?void 0:G.value)||0,0),1),color:((V=n[1])==null?void 0:V.color)||h[1]}),e.jsx(M,{radius:l.innerRing.radius,strokeWidth:l.innerRing.strokeWidth,progress:Math.min(Math.max(((X=n[2])==null?void 0:X.value)||0,0),1),color:(($=n[2])==null?void 0:$.color)||h[2]})]}),e.jsxs("div",{className:"activity-chart-center",children:[i&&e.jsxs("div",{className:"activity-chart-center-content",children:[e.jsx("div",{className:"activity-chart-label",style:{fontSize:`${l.labelSize}px`},children:T}),e.jsx("div",{className:"activity-chart-value",style:{fontSize:`${l.numberSize}px`},children:c})]}),!i&&e.jsx("div",{className:"activity-chart-value activity-chart-value--no-label",style:{fontSize:`${l.numberSize}px`},children:c})]})]}),m&&e.jsx("div",{className:`activity-chart-legend activity-chart-legend--${d}`,children:n.map((u,B)=>e.jsx($e,{color:u.color,label:u.label,isVertical:d==="right"},B))})]})})};t.__docgenInfo={description:"",methods:[],displayName:"ActivityChart",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"ActivityDataPoint"}],raw:"ActivityDataPoint[]"},description:"Data for the three activity rings",defaultValue:{value:"[]",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"Show center label",defaultValue:{value:"true",computed:!1}},showLegend:{required:!1,tsType:{name:"boolean"},description:"Show legend",defaultValue:{value:"false",computed:!1}},legendPosition:{required:!1,tsType:{name:"union",raw:"'bottom' | 'right'",elements:[{name:"literal",value:"'bottom'"},{name:"literal",value:"'right'"}]},description:"Legend position",defaultValue:{value:"'bottom'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Center text label",defaultValue:{value:"'Active users'",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Center value to display",defaultValue:{value:"'1,000'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className",defaultValue:{value:"''",computed:!1}}}};const Ie={title:"Charts/ActivityChart",component:t,parameters:{layout:"centered",docs:{description:{component:"A multi-ring activity chart that displays progress data across three concentric circles with optional labels and legends."}}},tags:["autodocs"],argTypes:{data:{description:"Array of data points for the three activity rings",control:"object"},size:{description:"Size variant of the activity chart",control:"select",options:["xs","sm","md","lg"]},showLabel:{description:"Whether to show the center label text",control:"boolean"},showLegend:{description:"Whether to show the legend",control:"boolean"},legendPosition:{description:"Position of the legend",control:"select",options:["bottom","right"]},label:{description:"Center label text",control:"text"},value:{description:"Center value to display",control:"text"},className:{description:"Additional CSS class name",control:"text"}}},a=[{label:"Series 1",value:.75,color:"#0F172A"},{label:"Series 2",value:.6,color:"#64748B"},{label:"Series 3",value:.45,color:"#09101F"}],s={args:{data:a,size:"md",showLabel:!0,showLegend:!1,label:"Active users",value:"1,000"}},v={args:{...s.args,showLegend:!0,legendPosition:"bottom"}},x={args:{...s.args,showLegend:!0,legendPosition:"right"}},p={args:{...s.args,showLabel:!1}},b={args:{...s.args,size:"xs"}},L={args:{...s.args,size:"sm"}},f={args:{...s.args,size:"md"}},y={args:{...s.args,size:"lg"}},w={args:{...s.args,data:[{label:"Desktop",value:.85,color:"#0F172A"},{label:"Mobile",value:.92,color:"#64748B"},{label:"Tablet",value:.78,color:"#09101F"}],label:"Total Users",value:"5,429",showLegend:!0}},S={args:{...s.args,data:[{label:"New Users",value:.25,color:"#0F172A"},{label:"Returning",value:.15,color:"#64748B"},{label:"Premium",value:.1,color:"#09101F"}],label:"Engagement",value:"234",showLegend:!0,legendPosition:"right"}},z={args:{...s.args,data:[{label:"Completed",value:.9,color:"#0F172A"},{label:"In Progress",value:.4,color:"#64748B"},{label:"Pending",value:.65,color:"#09101F"}],label:"Tasks",value:"127",showLegend:!0}},A={args:{...s.args,data:[{label:"Primary",value:.7,color:"#3B82F6"},{label:"Secondary",value:.55,color:"#10B981"},{label:"Tertiary",value:.8,color:"#F59E0B"}],label:"Revenue",value:"$12.5K",showLegend:!0,legendPosition:"right"}},j={args:{...s.args,data:[{label:"Series 1",value:0,color:"#0F172A"},{label:"Series 2",value:0,color:"#64748B"},{label:"Series 3",value:0,color:"#09101F"}],label:"No Activity",value:"0"}},D={args:{...s.args,data:[{label:"Complete",value:1,color:"#0F172A"},{label:"Done",value:1,color:"#64748B"},{label:"Finished",value:1,color:"#09101F"}],label:"Completed",value:"100%",showLegend:!0}},P={args:{...s.args,data:[{label:"Very Long Series Name 1",value:.65,color:"#0F172A"},{label:"Another Long Series Name",value:.45,color:"#64748B"},{label:"Third Long Series Name",value:.85,color:"#09101F"}],label:"Very Long Label Text",value:"999,999",showLegend:!0,legendPosition:"right"}},F={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"32px",padding:"32px",maxWidth:"1400px"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"MD, Label=True"}),e.jsx(t,{data:a,size:"md",showLabel:!0,showLegend:!1,label:"Active users",value:"1,000"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"LG, Label=True"}),e.jsx(t,{data:a,size:"lg",showLabel:!0,showLegend:!1,label:"Active users",value:"1,000"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"SM, Label=True"}),e.jsx(t,{data:a,size:"sm",showLabel:!0,showLegend:!1,label:"Active users",value:"1,000"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"XS, Label=True"}),e.jsx(t,{data:a,size:"xs",showLabel:!0,showLegend:!1,label:"Active users",value:"1,000"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"MD, Label=False"}),e.jsx(t,{data:a,size:"md",showLabel:!1,showLegend:!1,value:"1,000"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"LG, Label=False"}),e.jsx(t,{data:a,size:"lg",showLabel:!1,showLegend:!1,value:"1,000"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"SM, Label=False"}),e.jsx(t,{data:a,size:"sm",showLabel:!1,showLegend:!1,value:"1,000"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"XS, Label=False"}),e.jsx(t,{data:a,size:"xs",showLabel:!1,showLegend:!1,value:"1,000"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"MD, Legend=Bottom"}),e.jsx(t,{data:a,size:"md",showLabel:!0,showLegend:!0,legendPosition:"bottom",label:"Active users",value:"1,000"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"LG, Legend=Bottom"}),e.jsx(t,{data:a,size:"lg",showLabel:!0,showLegend:!0,legendPosition:"bottom",label:"Active users",value:"1,000"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"SM, Legend=Bottom"}),e.jsx(t,{data:a,size:"sm",showLabel:!0,showLegend:!0,legendPosition:"bottom",label:"Active users",value:"1,000"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"XS, Legend=Bottom"}),e.jsx(t,{data:a,size:"xs",showLabel:!0,showLegend:!0,legendPosition:"bottom",label:"Active users",value:"1,000"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"MD, Legend=Bottom, No Label"}),e.jsx(t,{data:a,size:"md",showLabel:!1,showLegend:!0,legendPosition:"bottom",value:"1,000"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"LG, Legend=Bottom, No Label"}),e.jsx(t,{data:a,size:"lg",showLabel:!1,showLegend:!0,legendPosition:"bottom",value:"1,000"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"SM, Legend=Bottom, No Label"}),e.jsx(t,{data:a,size:"sm",showLabel:!1,showLegend:!0,legendPosition:"bottom",value:"1,000"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"XS, Legend=Bottom, No Label"}),e.jsx(t,{data:a,size:"xs",showLabel:!1,showLegend:!0,legendPosition:"bottom",value:"1,000"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"MD, Legend=Right"}),e.jsx(t,{data:a,size:"md",showLabel:!0,showLegend:!0,legendPosition:"right",label:"Active users",value:"1,000"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"LG, Legend=Right"}),e.jsx(t,{data:a,size:"lg",showLabel:!0,showLegend:!0,legendPosition:"right",label:"Active users",value:"1,000"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"SM, Legend=Right"}),e.jsx(t,{data:a,size:"sm",showLabel:!0,showLegend:!0,legendPosition:"right",label:"Active users",value:"1,000"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"XS, Legend=Right"}),e.jsx(t,{data:a,size:"xs",showLabel:!0,showLegend:!0,legendPosition:"right",label:"Active users",value:"1,000"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"MD, Legend=Right, No Label"}),e.jsx(t,{data:a,size:"md",showLabel:!1,showLegend:!0,legendPosition:"right",value:"1,000"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"LG, Legend=Right, No Label"}),e.jsx(t,{data:a,size:"lg",showLabel:!1,showLegend:!0,legendPosition:"right",value:"1,000"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"SM, Legend=Right, No Label"}),e.jsx(t,{data:a,size:"sm",showLabel:!1,showLegend:!0,legendPosition:"right",value:"1,000"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h4",{style:{margin:"0 0 16px 0",fontSize:"14px",color:"#666"},children:"XS, Legend=Right, No Label"}),e.jsx(t,{data:a,size:"xs",showLabel:!1,showLegend:!0,legendPosition:"right",value:"1,000"})]})]}),parameters:{docs:{description:{story:"All variants from the Figma design showing different combinations of size, label, and legend configurations."}}}},C={args:{data:a,size:"md",showLabel:!0,showLegend:!0,legendPosition:"bottom",label:"Active users",value:"1,000"}};var q,E,I;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    size: 'md',
    showLabel: true,
    showLegend: false,
    label: 'Active users',
    value: '1,000'
  }
}`,...(I=(E=s.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var _,U,O;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    legendPosition: 'bottom'
  }
}`,...(O=(U=v.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var Z,H,K;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLegend: true,
    legendPosition: 'right'
  }
}`,...(K=(H=x.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var J,Q,Y;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLabel: false
  }
}`,...(Y=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var ee,te,ae;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'xs'
  }
}`,...(ae=(te=b.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,le,re;L.parameters={...L.parameters,docs:{...(se=L.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'sm'
  }
}`,...(re=(le=L.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var oe,ne,ie;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'md'
  }
}`,...(ie=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var de,ce,ge;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'lg'
  }
}`,...(ge=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:ge.source}}};var ue,he,me;w.parameters={...w.parameters,docs:{...(ue=w.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [{
      label: 'Desktop',
      value: 0.85,
      color: '#0F172A'
    }, {
      label: 'Mobile',
      value: 0.92,
      color: '#64748B'
    }, {
      label: 'Tablet',
      value: 0.78,
      color: '#09101F'
    }],
    label: 'Total Users',
    value: '5,429',
    showLegend: true
  }
}`,...(me=(he=w.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var ve,xe,pe;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [{
      label: 'New Users',
      value: 0.25,
      color: '#0F172A'
    }, {
      label: 'Returning',
      value: 0.15,
      color: '#64748B'
    }, {
      label: 'Premium',
      value: 0.10,
      color: '#09101F'
    }],
    label: 'Engagement',
    value: '234',
    showLegend: true,
    legendPosition: 'right'
  }
}`,...(pe=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:pe.source}}};var be,Le,fe;z.parameters={...z.parameters,docs:{...(be=z.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [{
      label: 'Completed',
      value: 0.90,
      color: '#0F172A'
    }, {
      label: 'In Progress',
      value: 0.40,
      color: '#64748B'
    }, {
      label: 'Pending',
      value: 0.65,
      color: '#09101F'
    }],
    label: 'Tasks',
    value: '127',
    showLegend: true
  }
}`,...(fe=(Le=z.parameters)==null?void 0:Le.docs)==null?void 0:fe.source}}};var ye,we,Se;A.parameters={...A.parameters,docs:{...(ye=A.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [{
      label: 'Primary',
      value: 0.70,
      color: '#3B82F6'
    }, {
      label: 'Secondary',
      value: 0.55,
      color: '#10B981'
    }, {
      label: 'Tertiary',
      value: 0.80,
      color: '#F59E0B'
    }],
    label: 'Revenue',
    value: '$12.5K',
    showLegend: true,
    legendPosition: 'right'
  }
}`,...(Se=(we=A.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var ze,Ae,je;j.parameters={...j.parameters,docs:{...(ze=j.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [{
      label: 'Series 1',
      value: 0,
      color: '#0F172A'
    }, {
      label: 'Series 2',
      value: 0,
      color: '#64748B'
    }, {
      label: 'Series 3',
      value: 0,
      color: '#09101F'
    }],
    label: 'No Activity',
    value: '0'
  }
}`,...(je=(Ae=j.parameters)==null?void 0:Ae.docs)==null?void 0:je.source}}};var De,Pe,Fe;D.parameters={...D.parameters,docs:{...(De=D.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [{
      label: 'Complete',
      value: 1.0,
      color: '#0F172A'
    }, {
      label: 'Done',
      value: 1.0,
      color: '#64748B'
    }, {
      label: 'Finished',
      value: 1.0,
      color: '#09101F'
    }],
    label: 'Completed',
    value: '100%',
    showLegend: true
  }
}`,...(Fe=(Pe=D.parameters)==null?void 0:Pe.docs)==null?void 0:Fe.source}}};var Ce,Re,Ne;P.parameters={...P.parameters,docs:{...(Ce=P.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    data: [{
      label: 'Very Long Series Name 1',
      value: 0.65,
      color: '#0F172A'
    }, {
      label: 'Another Long Series Name',
      value: 0.45,
      color: '#64748B'
    }, {
      label: 'Third Long Series Name',
      value: 0.85,
      color: '#09101F'
    }],
    label: 'Very Long Label Text',
    value: '999,999',
    showLegend: true,
    legendPosition: 'right'
  }
}`,...(Ne=(Re=P.parameters)==null?void 0:Re.docs)==null?void 0:Ne.source}}};var Be,Me,Te;F.parameters={...F.parameters,docs:{...(Be=F.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '32px',
    padding: '32px',
    maxWidth: '1400px'
  }}>
      {/* Row 1: md size with label=true, legend=false */}
      <div style={{
      textAlign: 'center'
    }}>
        <h4 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>MD, Label=True</h4>
        <ActivityChart data={defaultData} size="md" showLabel={true} showLegend={false} label="Active users" value="1,000" />
      </div>
      
      <div style={{
      textAlign: 'center'
    }}>
        <h4 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>LG, Label=True</h4>
        <ActivityChart data={defaultData} size="lg" showLabel={true} showLegend={false} label="Active users" value="1,000" />
      </div>
      
      <div style={{
      textAlign: 'center'
    }}>
        <h4 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>SM, Label=True</h4>
        <ActivityChart data={defaultData} size="sm" showLabel={true} showLegend={false} label="Active users" value="1,000" />
      </div>
      
      <div style={{
      textAlign: 'center'
    }}>
        <h4 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>XS, Label=True</h4>
        <ActivityChart data={defaultData} size="xs" showLabel={true} showLegend={false} label="Active users" value="1,000" />
      </div>

      {/* Row 2: sizes with label=false, legend=false */}
      <div style={{
      textAlign: 'center'
    }}>
        <h4 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>MD, Label=False</h4>
        <ActivityChart data={defaultData} size="md" showLabel={false} showLegend={false} value="1,000" />
      </div>
      
      <div style={{
      textAlign: 'center'
    }}>
        <h4 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>LG, Label=False</h4>
        <ActivityChart data={defaultData} size="lg" showLabel={false} showLegend={false} value="1,000" />
      </div>
      
      <div style={{
      textAlign: 'center'
    }}>
        <h4 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>SM, Label=False</h4>
        <ActivityChart data={defaultData} size="sm" showLabel={false} showLegend={false} value="1,000" />
      </div>
      
      <div style={{
      textAlign: 'center'
    }}>
        <h4 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>XS, Label=False</h4>
        <ActivityChart data={defaultData} size="xs" showLabel={false} showLegend={false} value="1,000" />
      </div>

      {/* Row 3: Bottom legend */}
      <div style={{
      textAlign: 'center'
    }}>
        <h4 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>MD, Legend=Bottom</h4>
        <ActivityChart data={defaultData} size="md" showLabel={true} showLegend={true} legendPosition="bottom" label="Active users" value="1,000" />
      </div>
      
      <div style={{
      textAlign: 'center'
    }}>
        <h4 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>LG, Legend=Bottom</h4>
        <ActivityChart data={defaultData} size="lg" showLabel={true} showLegend={true} legendPosition="bottom" label="Active users" value="1,000" />
      </div>
      
      <div style={{
      textAlign: 'center'
    }}>
        <h4 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>SM, Legend=Bottom</h4>
        <ActivityChart data={defaultData} size="sm" showLabel={true} showLegend={true} legendPosition="bottom" label="Active users" value="1,000" />
      </div>
      
      <div style={{
      textAlign: 'center'
    }}>
        <h4 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>XS, Legend=Bottom</h4>
        <ActivityChart data={defaultData} size="xs" showLabel={true} showLegend={true} legendPosition="bottom" label="Active users" value="1,000" />
      </div>

      {/* Row 4: Bottom legend, no label */}
      <div style={{
      textAlign: 'center'
    }}>
        <h4 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>MD, Legend=Bottom, No Label</h4>
        <ActivityChart data={defaultData} size="md" showLabel={false} showLegend={true} legendPosition="bottom" value="1,000" />
      </div>
      
      <div style={{
      textAlign: 'center'
    }}>
        <h4 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>LG, Legend=Bottom, No Label</h4>
        <ActivityChart data={defaultData} size="lg" showLabel={false} showLegend={true} legendPosition="bottom" value="1,000" />
      </div>
      
      <div style={{
      textAlign: 'center'
    }}>
        <h4 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>SM, Legend=Bottom, No Label</h4>
        <ActivityChart data={defaultData} size="sm" showLabel={false} showLegend={true} legendPosition="bottom" value="1,000" />
      </div>
      
      <div style={{
      textAlign: 'center'
    }}>
        <h4 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>XS, Legend=Bottom, No Label</h4>
        <ActivityChart data={defaultData} size="xs" showLabel={false} showLegend={true} legendPosition="bottom" value="1,000" />
      </div>

      {/* Row 5: Right legend */}
      <div style={{
      textAlign: 'center'
    }}>
        <h4 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>MD, Legend=Right</h4>
        <ActivityChart data={defaultData} size="md" showLabel={true} showLegend={true} legendPosition="right" label="Active users" value="1,000" />
      </div>
      
      <div style={{
      textAlign: 'center'
    }}>
        <h4 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>LG, Legend=Right</h4>
        <ActivityChart data={defaultData} size="lg" showLabel={true} showLegend={true} legendPosition="right" label="Active users" value="1,000" />
      </div>
      
      <div style={{
      textAlign: 'center'
    }}>
        <h4 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>SM, Legend=Right</h4>
        <ActivityChart data={defaultData} size="sm" showLabel={true} showLegend={true} legendPosition="right" label="Active users" value="1,000" />
      </div>
      
      <div style={{
      textAlign: 'center'
    }}>
        <h4 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>XS, Legend=Right</h4>
        <ActivityChart data={defaultData} size="xs" showLabel={true} showLegend={true} legendPosition="right" label="Active users" value="1,000" />
      </div>

      {/* Row 6: Right legend, no label */}
      <div style={{
      textAlign: 'center'
    }}>
        <h4 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>MD, Legend=Right, No Label</h4>
        <ActivityChart data={defaultData} size="md" showLabel={false} showLegend={true} legendPosition="right" value="1,000" />
      </div>
      
      <div style={{
      textAlign: 'center'
    }}>
        <h4 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>LG, Legend=Right, No Label</h4>
        <ActivityChart data={defaultData} size="lg" showLabel={false} showLegend={true} legendPosition="right" value="1,000" />
      </div>
      
      <div style={{
      textAlign: 'center'
    }}>
        <h4 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>SM, Legend=Right, No Label</h4>
        <ActivityChart data={defaultData} size="sm" showLabel={false} showLegend={true} legendPosition="right" value="1,000" />
      </div>
      
      <div style={{
      textAlign: 'center'
    }}>
        <h4 style={{
        margin: '0 0 16px 0',
        fontSize: '14px',
        color: '#666'
      }}>XS, Legend=Right, No Label</h4>
        <ActivityChart data={defaultData} size="xs" showLabel={false} showLegend={true} legendPosition="right" value="1,000" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All variants from the Figma design showing different combinations of size, label, and legend configurations.'
      }
    }
  }
}`,...(Te=(Me=F.parameters)==null?void 0:Me.docs)==null?void 0:Te.source}}};var ke,We,Ge;C.parameters={...C.parameters,docs:{...(ke=C.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    size: 'md',
    showLabel: true,
    showLegend: true,
    legendPosition: 'bottom',
    label: 'Active users',
    value: '1,000'
  }
}`,...(Ge=(We=C.parameters)==null?void 0:We.docs)==null?void 0:Ge.source}}};const _e=["Default","WithLegendBottom","WithLegendRight","WithoutLabel","SizeXS","SizeSM","SizeMD","SizeLG","HighActivity","LowActivity","MixedProgress","CustomColors","ZeroProgress","FullProgress","LongText","FigmaVariants","Playground"];export{A as CustomColors,s as Default,F as FigmaVariants,D as FullProgress,w as HighActivity,P as LongText,S as LowActivity,z as MixedProgress,C as Playground,y as SizeLG,f as SizeMD,L as SizeSM,b as SizeXS,v as WithLegendBottom,x as WithLegendRight,p as WithoutLabel,j as ZeroProgress,_e as __namedExportsOrder,Ie as default};
