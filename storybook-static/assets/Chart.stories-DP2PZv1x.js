import{j as e}from"./jsx-runtime-DiklIkkE.js";import{R as re,r as ae}from"./index-DRjF_FHU.js";const ks=["var(--chart-color-1, #1890ff)","var(--chart-color-2, #52c41a)","var(--chart-color-3, #faad14)","var(--chart-color-4, #f5222d)","var(--chart-color-5, #fa541c)","var(--chart-color-6, #722ed1)","var(--chart-color-7, #13c2c2)","var(--chart-color-8, #eb2f96)"],o=re.forwardRef(({series:r=[],type:n="line",variant:v="default",size:x="md",title:y,xAxisLabel:H,yAxisLabel:ee,showGrid:gs=!0,showLegend:fs=!0,showAxes:vs=!0,height:ws,width:Cs,loading:se=!1,error:Y,colors:C=ks,animationDuration:Js=300,animate:Ws=!0,responsive:bs=!0,className:As,onDataPointClick:w,onDataPointHover:h,...b},A)=>{const Ls=ae.useRef(null),[L,S]=re.useState(null),Ss="nexus-chart",_s=`nexus-chart--${n}`,js=`nexus-chart--${v}`,Ms=`nexus-chart--${x}`,_=[Ss,_s,js,Ms,se?"nexus-chart--loading":"",Y?"nexus-chart--error":"",bs?"nexus-chart--responsive":"",As].filter(Boolean).join(" "),d=ae.useMemo(()=>{if(!r.length)return null;const s=r.flatMap(t=>t.data),u=s.map(t=>t.y),c=s.map(t=>t.x),i=Math.min(...u),a=Math.max(...u),p=a-i;return{yMin:i-p*.1,yMax:a+p*.1,yRange:p*1.2,xValues:c,yValues:u,dataPointCount:Math.max(...r.map(t=>t.data.length))}},[r]),Ts=()=>{if(!d||!r.length)return null;const s=300,u=200;return r.map((c,i)=>{const a=c.color||C[i%C.length];return n==="bar"?Gs(c,i,a,s,u):n==="line"?Ns(c,i,a,s,u):n==="area"?Es(c,i,a,s,u):null})},Gs=(s,u,c,i,a)=>{const p=i/(d.dataPointCount*r.length+(r.length-1));return e.jsx("div",{className:"nexus-chart__series nexus-chart__series--bar",children:s.data.map((t,m)=>{const g=(t.y-d.yMin)/d.yRange*a,f=m*(i/d.dataPointCount)+u*p;return e.jsx("div",{className:"nexus-chart__bar",style:{left:`${f/i*100}%`,width:`${p/i*100}%`,height:`${g/a*100}%`,backgroundColor:c,bottom:0},onClick:()=>w==null?void 0:w(t,s.id),onMouseEnter:()=>{S({point:t,seriesId:s.id}),h==null||h(t,s.id)},onMouseLeave:()=>{S(null),h==null||h(null,null)}},`${s.id}-${m}`)})},s.id)},Ns=(s,u,c,i,a)=>{const p=s.data.map((t,m)=>{const g=m/(d.dataPointCount-1)*i,f=a-(t.y-d.yMin)/d.yRange*a;return`${g},${f}`}).join(" ");return e.jsx("div",{className:"nexus-chart__series nexus-chart__series--line",children:e.jsxs("svg",{className:"nexus-chart__line-svg",viewBox:`0 0 ${i} ${a}`,preserveAspectRatio:"none",children:[e.jsx("polyline",{points:p,fill:"none",stroke:c,strokeWidth:"2",className:"nexus-chart__line"}),s.data.map((t,m)=>{const g=m/(d.dataPointCount-1)*i,f=a-(t.y-d.yMin)/d.yRange*a;return e.jsx("circle",{cx:g,cy:f,r:"4",fill:c,className:"nexus-chart__point",onClick:()=>w==null?void 0:w(t,s.id),onMouseEnter:()=>{S({point:t,seriesId:s.id}),h==null||h(t,s.id)},onMouseLeave:()=>{S(null),h==null||h(null,null)}},`${s.id}-point-${m}`)})]})},s.id)},Es=(s,u,c,i,a)=>{const p=s.data.map((m,g)=>{const f=g/(d.dataPointCount-1)*i,zs=a-(m.y-d.yMin)/d.yRange*a;return`${f},${zs}`}).join(" "),t=`0,${a} ${p} ${i},${a}`;return e.jsx("div",{className:"nexus-chart__series nexus-chart__series--area",children:e.jsxs("svg",{className:"nexus-chart__area-svg",viewBox:`0 0 ${i} ${a}`,preserveAspectRatio:"none",children:[e.jsx("polygon",{points:t,fill:c,fillOpacity:"0.3",className:"nexus-chart__area"}),e.jsx("polyline",{points:p,fill:"none",stroke:c,strokeWidth:"2",className:"nexus-chart__area-line"})]})},s.id)},$s=()=>!fs||!r.length?null:e.jsx("div",{className:"nexus-chart__legend",children:r.map((s,u)=>e.jsxs("div",{className:"nexus-chart__legend-item",children:[e.jsx("div",{className:"nexus-chart__legend-indicator",style:{backgroundColor:s.color||C[u%C.length]}}),e.jsx("span",{className:"nexus-chart__legend-label",children:s.title})]},s.id))}),Rs=()=>!vs||!d?null:e.jsxs("div",{className:"nexus-chart__axes",children:[H&&e.jsx("div",{className:"nexus-chart__axis-label nexus-chart__axis-label--x",children:H}),ee&&e.jsx("div",{className:"nexus-chart__axis-label nexus-chart__axis-label--y",children:ee})]}),Fs=()=>L?e.jsx("div",{className:"nexus-chart__tooltip",children:e.jsxs("div",{className:"nexus-chart__tooltip-content",children:[e.jsx("div",{className:"nexus-chart__tooltip-label",children:L.point.label||L.point.x}),e.jsx("div",{className:"nexus-chart__tooltip-value",children:L.point.y})]})}):null;return se?e.jsx("div",{ref:A,className:_,...b,children:e.jsxs("div",{className:"nexus-chart__loading",children:[e.jsx("div",{className:"nexus-chart__loading-spinner"}),e.jsx("span",{className:"nexus-chart__loading-text",children:"Loading chart..."})]})}):Y?e.jsx("div",{ref:A,className:_,...b,children:e.jsx("div",{className:"nexus-chart__error",children:e.jsx("span",{className:"nexus-chart__error-text",children:Y})})}):r.length?e.jsxs("div",{ref:A,className:_,style:{height:ws,width:Cs},...b,children:[y&&e.jsx("div",{className:"nexus-chart__header",children:e.jsx("h3",{className:"nexus-chart__title",children:y})}),e.jsxs("div",{className:"nexus-chart__container",ref:Ls,children:[gs&&e.jsx("div",{className:"nexus-chart__grid"}),e.jsx("div",{className:"nexus-chart__content",children:Ts()}),Rs(),Fs()]}),$s()]}):e.jsx("div",{ref:A,className:_,...b,children:e.jsx("div",{className:"nexus-chart__empty",children:e.jsx("span",{className:"nexus-chart__empty-text",children:"No data available"})})})});o.displayName="Chart";o.__docgenInfo={description:"Chart component for displaying various types of data visualizations",methods:[],displayName:"Chart",props:{series:{required:!1,tsType:{name:"Array",elements:[{name:"ChartSeries"}],raw:"ChartSeries[]"},description:"Array of data series to display",defaultValue:{value:"[]",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'line' | 'bar' | 'area' | 'mixed'",elements:[{name:"literal",value:"'line'"},{name:"literal",value:"'bar'"},{name:"literal",value:"'area'"},{name:"literal",value:"'mixed'"}]},description:"Chart type - determines the visualization style",defaultValue:{value:"'line'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'minimal' | 'detailed'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'minimal'"},{name:"literal",value:"'detailed'"}]},description:"Chart variant - affects styling and layout",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Chart size",defaultValue:{value:"'md'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Chart title"},xAxisLabel:{required:!1,tsType:{name:"string"},description:"X-axis label"},yAxisLabel:{required:!1,tsType:{name:"string"},description:"Y-axis label"},showGrid:{required:!1,tsType:{name:"boolean"},description:"Whether to show grid lines",defaultValue:{value:"true",computed:!1}},showLegend:{required:!1,tsType:{name:"boolean"},description:"Whether to show legend",defaultValue:{value:"true",computed:!1}},showAxes:{required:!1,tsType:{name:"boolean"},description:"Whether to show axes labels",defaultValue:{value:"true",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Height of the chart container"},width:{required:!1,tsType:{name:"number"},description:"Width of the chart container"},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the chart is loading",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"Error state"},colors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Custom color palette",defaultValue:{value:`[
  'var(--chart-color-1, #1890ff)',
  'var(--chart-color-2, #52c41a)',
  'var(--chart-color-3, #faad14)',
  'var(--chart-color-4, #f5222d)',
  'var(--chart-color-5, #fa541c)',
  'var(--chart-color-6, #722ed1)',
  'var(--chart-color-7, #13c2c2)',
  'var(--chart-color-8, #eb2f96)',
]`,computed:!1}},animationDuration:{required:!1,tsType:{name:"number"},description:"Animation duration in milliseconds",defaultValue:{value:"300",computed:!1}},animate:{required:!1,tsType:{name:"boolean"},description:"Whether to enable animations",defaultValue:{value:"true",computed:!1}},responsive:{required:!1,tsType:{name:"boolean"},description:"Responsive behavior",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},onDataPointClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(point: DataPoint, seriesId: string) => void",signature:{arguments:[{type:{name:"DataPoint"},name:"point"},{type:{name:"string"},name:"seriesId"}],return:{name:"void"}}},description:"Callback for data point interactions"},onDataPointHover:{required:!1,tsType:{name:"signature",type:"function",raw:"(point: DataPoint | null, seriesId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"DataPoint | null",elements:[{name:"DataPoint"},{name:"null"}]},name:"point"},{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"seriesId"}],return:{name:"void"}}},description:"Callback for data point hover"}}};const K=(r=10,n=0,v=100)=>Array.from({length:r},(x,y)=>({x:y,y:Math.floor(Math.random()*(v-n)+n),label:`Point ${y+1}`})),te=(r,n=0,v=100)=>r.map(x=>({x,y:Math.floor(Math.random()*(v-n)+n),label:x})),qs=(r=30)=>{const n=new Date;return Array.from({length:r},(v,x)=>{const y=new Date(n.getTime()-(r-x-1)*24*60*60*1e3);return{x:y.toISOString().split("T")[0],y:Math.floor(Math.random()*100+50),label:y.toLocaleDateString()}})},l=[{id:"series-1",title:"Revenue",data:K(12,50,100),color:"#1890ff"},{id:"series-2",title:"Expenses",data:K(12,20,80),color:"#f5222d"},{id:"series-3",title:"Profit",data:K(12,10,60),color:"#52c41a"}],X=[{id:"q1-sales",title:"Q1 Sales",data:te(["Jan","Feb","Mar","Apr","May","Jun"],30,90),color:"#1890ff"},{id:"q2-sales",title:"Q2 Sales",data:te(["Jan","Feb","Mar","Apr","May","Jun"],20,85),color:"#52c41a"}],Z=[{id:"users",title:"Active Users",data:qs(20),color:"#722ed1"}],Ps={title:"Charts/Chart",component:o,parameters:{layout:"padded",docs:{description:{component:"A flexible chart component that supports line, bar, and area charts with comprehensive data visualization features."}}},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["line","bar","area","mixed"],description:"Chart visualization type"},variant:{control:{type:"select"},options:["default","minimal","detailed"],description:"Visual style variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Chart size preset"},showGrid:{control:"boolean",description:"Toggle grid lines visibility"},showLegend:{control:"boolean",description:"Toggle legend visibility"},showAxes:{control:"boolean",description:"Toggle axes labels visibility"},animate:{control:"boolean",description:"Enable chart animations"},responsive:{control:"boolean",description:"Enable responsive behavior"},loading:{control:"boolean",description:"Show loading state"},height:{control:{type:"number",min:200,max:800,step:50},description:"Chart height in pixels"},width:{control:{type:"number",min:300,max:1200,step:50},description:"Chart width in pixels"}}},j={args:{series:l.slice(0,1),type:"line",title:"Revenue Over Time",xAxisLabel:"Time Period",yAxisLabel:"Revenue ($)",showGrid:!0,showLegend:!0,showAxes:!0}},M={args:{series:l,type:"line",title:"Financial Performance",xAxisLabel:"Months",yAxisLabel:"Amount ($)",showGrid:!0,showLegend:!0,showAxes:!0,height:300}},T={args:{series:X,type:"bar",title:"Sales Comparison",xAxisLabel:"Months",yAxisLabel:"Sales Volume",showGrid:!0,showLegend:!0,showAxes:!0,height:300}},G={args:{series:Z,type:"area",title:"User Growth",xAxisLabel:"Date",yAxisLabel:"Active Users",showGrid:!0,showLegend:!0,showAxes:!0,height:300}},N={args:{series:l.slice(0,1),type:"line",size:"sm",title:"Small Chart",showGrid:!0,showLegend:!0}},E={args:{series:l.slice(0,2),type:"line",size:"md",title:"Medium Chart",showGrid:!0,showLegend:!0}},$={args:{series:l,type:"line",size:"lg",title:"Large Chart",showGrid:!0,showLegend:!0}},R={args:{series:l.slice(0,1),type:"line",variant:"minimal",showGrid:!1,showLegend:!1,showAxes:!1}},F={args:{series:l,type:"line",variant:"detailed",title:"Detailed Financial Analysis",xAxisLabel:"Time Period (Months)",yAxisLabel:"Amount (USD)",showGrid:!0,showLegend:!0,showAxes:!0,height:400}},z={args:{series:[],loading:!0,height:300}},k={args:{series:[],error:"Failed to load chart data",height:300}},q={args:{series:[],title:"No Data Available",height:300}},J={args:{series:l,type:"line",title:"Interactive Chart",showGrid:!0,showLegend:!0,onDataPointClick:(r,n)=>{alert(`Clicked: ${r.label||r.x} = ${r.y} (Series: ${n})`)},onDataPointHover:(r,n)=>{r&&console.log(`Hovered: ${r.label||r.x} = ${r.y} (Series: ${n})`)}}},W={render:()=>e.jsxs("div",{style:{display:"grid",gap:"24px",gridTemplateColumns:"repeat(auto-fit, minmax(400px, 1fr))"},children:[e.jsx(o,{series:[{id:"wavy-1",title:"Performance Metric",data:[{x:"Jan",y:45},{x:"Feb",y:52},{x:"Mar",y:48},{x:"Apr",y:61},{x:"May",y:55},{x:"Jun",y:67},{x:"Jul",y:59},{x:"Aug",y:72},{x:"Sep",y:65},{x:"Oct",y:78},{x:"Nov",y:71},{x:"Dec",y:84}],color:"#1890ff"}],type:"line",title:"Monthly Performance",showGrid:!0,showLegend:!1,height:200}),e.jsx(o,{series:[{id:"wavy-2",title:"User Engagement",data:[{x:"Week 1",y:32},{x:"Week 2",y:28},{x:"Week 3",y:35},{x:"Week 4",y:42},{x:"Week 5",y:38},{x:"Week 6",y:46},{x:"Week 7",y:41},{x:"Week 8",y:49}],color:"#52c41a"}],type:"line",title:"Weekly Engagement",showGrid:!0,showLegend:!1,height:200})]}),parameters:{docs:{description:{story:"Line charts matching the wavy patterns shown in the Figma design"}}}},B={render:()=>e.jsxs("div",{style:{display:"grid",gap:"24px",gridTemplateColumns:"repeat(auto-fit, minmax(400px, 1fr))"},children:[e.jsx(o,{series:[{id:"category-a",title:"Category A",data:[{x:"Q1",y:65},{x:"Q2",y:72},{x:"Q3",y:58},{x:"Q4",y:81}],color:"#1890ff"},{id:"category-b",title:"Category B",data:[{x:"Q1",y:45},{x:"Q2",y:52},{x:"Q3",y:48},{x:"Q4",y:67}],color:"#52c41a"}],type:"bar",title:"Quarterly Performance",showGrid:!0,showLegend:!0,height:250}),e.jsx(o,{series:[{id:"single-series",title:"Revenue",data:[{x:"Jan",y:42},{x:"Feb",y:38},{x:"Mar",y:45},{x:"Apr",y:51},{x:"May",y:47},{x:"Jun",y:58},{x:"Jul",y:54},{x:"Aug",y:62}],color:"#722ed1"}],type:"bar",title:"Monthly Revenue",showGrid:!0,showLegend:!1,height:250})]}),parameters:{docs:{description:{story:"Bar charts with single and multiple series as shown in the Figma design"}}}},Q={render:()=>e.jsxs("div",{style:{display:"grid",gap:"24px",gridTemplateColumns:"repeat(auto-fit, minmax(400px, 1fr))"},children:[e.jsx(o,{series:[{id:"smooth-area",title:"Growth Trend",data:[{x:"Jan",y:20},{x:"Feb",y:25},{x:"Mar",y:22},{x:"Apr",y:30},{x:"May",y:28},{x:"Jun",y:35},{x:"Jul",y:32},{x:"Aug",y:40},{x:"Sep",y:38},{x:"Oct",y:45}],color:"#13c2c2"}],type:"area",title:"Growth Analysis",showGrid:!0,showLegend:!1,height:200}),e.jsx(o,{series:[{id:"usage-area",title:"System Usage",data:[{x:"00:00",y:15},{x:"04:00",y:8},{x:"08:00",y:35},{x:"12:00",y:58},{x:"16:00",y:72},{x:"20:00",y:45},{x:"24:00",y:22}],color:"#fa541c"}],type:"area",title:"Daily Usage Pattern",showGrid:!0,showLegend:!1,height:200})]}),parameters:{docs:{description:{story:"Area charts with smooth curves as shown in the Figma design"}}}},U={render:()=>e.jsxs("div",{style:{display:"grid",gap:"16px",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",fontFamily:"Inter, -apple-system, Roboto, Helvetica, sans-serif"},children:[e.jsx(o,{series:l.slice(0,1),type:"line",size:"sm",title:"Revenue Trend",responsive:!0}),e.jsx(o,{series:X.slice(0,1),type:"bar",size:"sm",title:"Sales Data",responsive:!0}),e.jsx(o,{series:Z,type:"area",size:"sm",title:"User Growth",responsive:!0}),e.jsx(o,{series:l.slice(1,2),type:"line",size:"sm",title:"Expenses",responsive:!0})]}),parameters:{docs:{description:{story:"Responsive grid layout showcasing multiple charts that adapt to container size"}}}},I={render:()=>e.jsxs("div",{style:{display:"grid",gap:"24px",gridTemplateColumns:"2fr 1fr",gridTemplateRows:"auto auto",fontFamily:"Inter, -apple-system, Roboto, Helvetica, sans-serif"},children:[e.jsx("div",{style:{gridColumn:"1 / -1"},children:e.jsx(o,{series:l,type:"line",title:"Financial Overview Dashboard",xAxisLabel:"Time Period",yAxisLabel:"Amount (USD)",height:350,showGrid:!0,showLegend:!0,responsive:!0})}),e.jsx(o,{series:X.slice(0,1),type:"bar",title:"Monthly Sales",height:250,responsive:!0}),e.jsx(o,{series:Z,type:"area",title:"Active Users",height:250,responsive:!0})]}),parameters:{docs:{description:{story:"Dashboard-style layout with a main chart and supporting smaller charts"}}}},V={args:{series:[{...l[0],color:"#8E44AD"},{...l[1],color:"#E67E22"},{...l[2],color:"#2ECC71"}],type:"line",title:"Custom Color Palette",height:300,colors:["#8E44AD","#E67E22","#2ECC71","#E74C3C","#3498DB"]}},P={args:{series:l.slice(0,1),type:"line",title:"Clean Design (No Grid)",showGrid:!1,showLegend:!1,height:300}},D={args:{series:X.slice(0,1),type:"bar",title:"Animated Chart",animate:!0,animationDuration:1e3,height:300}},O={args:{series:l.slice(0,1),type:"line",title:"Static Chart (No Animation)",animate:!1,height:300}};var ie,ne,oe;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    series: sampleLineSeries.slice(0, 1),
    type: 'line',
    title: 'Revenue Over Time',
    xAxisLabel: 'Time Period',
    yAxisLabel: 'Revenue ($)',
    showGrid: true,
    showLegend: true,
    showAxes: true
  }
}`,...(oe=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var le,de,ce;M.parameters={...M.parameters,docs:{...(le=M.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    series: sampleLineSeries,
    type: 'line',
    title: 'Financial Performance',
    xAxisLabel: 'Months',
    yAxisLabel: 'Amount ($)',
    showGrid: true,
    showLegend: true,
    showAxes: true,
    height: 300
  }
}`,...(ce=(de=M.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,he,pe;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    series: sampleBarSeries,
    type: 'bar',
    title: 'Sales Comparison',
    xAxisLabel: 'Months',
    yAxisLabel: 'Sales Volume',
    showGrid: true,
    showLegend: true,
    showAxes: true,
    height: 300
  }
}`,...(pe=(he=T.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};var me,ye,xe;G.parameters={...G.parameters,docs:{...(me=G.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    series: sampleAreaSeries,
    type: 'area',
    title: 'User Growth',
    xAxisLabel: 'Date',
    yAxisLabel: 'Active Users',
    showGrid: true,
    showLegend: true,
    showAxes: true,
    height: 300
  }
}`,...(xe=(ye=G.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var ge,fe,ve;N.parameters={...N.parameters,docs:{...(ge=N.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    series: sampleLineSeries.slice(0, 1),
    type: 'line',
    size: 'sm',
    title: 'Small Chart',
    showGrid: true,
    showLegend: true
  }
}`,...(ve=(fe=N.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var we,Ce,be;E.parameters={...E.parameters,docs:{...(we=E.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    series: sampleLineSeries.slice(0, 2),
    type: 'line',
    size: 'md',
    title: 'Medium Chart',
    showGrid: true,
    showLegend: true
  }
}`,...(be=(Ce=E.parameters)==null?void 0:Ce.docs)==null?void 0:be.source}}};var Ae,Le,Se;$.parameters={...$.parameters,docs:{...(Ae=$.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    series: sampleLineSeries,
    type: 'line',
    size: 'lg',
    title: 'Large Chart',
    showGrid: true,
    showLegend: true
  }
}`,...(Se=(Le=$.parameters)==null?void 0:Le.docs)==null?void 0:Se.source}}};var _e,je,Me;R.parameters={...R.parameters,docs:{...(_e=R.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    series: sampleLineSeries.slice(0, 1),
    type: 'line',
    variant: 'minimal',
    showGrid: false,
    showLegend: false,
    showAxes: false
  }
}`,...(Me=(je=R.parameters)==null?void 0:je.docs)==null?void 0:Me.source}}};var Te,Ge,Ne;F.parameters={...F.parameters,docs:{...(Te=F.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    series: sampleLineSeries,
    type: 'line',
    variant: 'detailed',
    title: 'Detailed Financial Analysis',
    xAxisLabel: 'Time Period (Months)',
    yAxisLabel: 'Amount (USD)',
    showGrid: true,
    showLegend: true,
    showAxes: true,
    height: 400
  }
}`,...(Ne=(Ge=F.parameters)==null?void 0:Ge.docs)==null?void 0:Ne.source}}};var Ee,$e,Re;z.parameters={...z.parameters,docs:{...(Ee=z.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    series: [],
    loading: true,
    height: 300
  }
}`,...(Re=($e=z.parameters)==null?void 0:$e.docs)==null?void 0:Re.source}}};var Fe,ze,ke;k.parameters={...k.parameters,docs:{...(Fe=k.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    series: [],
    error: 'Failed to load chart data',
    height: 300
  }
}`,...(ke=(ze=k.parameters)==null?void 0:ze.docs)==null?void 0:ke.source}}};var qe,Je,We;q.parameters={...q.parameters,docs:{...(qe=q.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    series: [],
    title: 'No Data Available',
    height: 300
  }
}`,...(We=(Je=q.parameters)==null?void 0:Je.docs)==null?void 0:We.source}}};var Be,Qe,Ue;J.parameters={...J.parameters,docs:{...(Be=J.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    series: sampleLineSeries,
    type: 'line',
    title: 'Interactive Chart',
    showGrid: true,
    showLegend: true,
    onDataPointClick: (point, seriesId) => {
      alert(\`Clicked: \${point.label || point.x} = \${point.y} (Series: \${seriesId})\`);
    },
    onDataPointHover: (point, seriesId) => {
      if (point) {
        console.log(\`Hovered: \${point.label || point.x} = \${point.y} (Series: \${seriesId})\`);
      }
    }
  }
}`,...(Ue=(Qe=J.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.source}}};var Ie,Ve,Pe;W.parameters={...W.parameters,docs:{...(Ie=W.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '24px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))'
  }}>
      <Chart series={[{
      id: 'wavy-1',
      title: 'Performance Metric',
      data: [{
        x: 'Jan',
        y: 45
      }, {
        x: 'Feb',
        y: 52
      }, {
        x: 'Mar',
        y: 48
      }, {
        x: 'Apr',
        y: 61
      }, {
        x: 'May',
        y: 55
      }, {
        x: 'Jun',
        y: 67
      }, {
        x: 'Jul',
        y: 59
      }, {
        x: 'Aug',
        y: 72
      }, {
        x: 'Sep',
        y: 65
      }, {
        x: 'Oct',
        y: 78
      }, {
        x: 'Nov',
        y: 71
      }, {
        x: 'Dec',
        y: 84
      }],
      color: '#1890ff'
    }]} type="line" title="Monthly Performance" showGrid={true} showLegend={false} height={200} />
      
      <Chart series={[{
      id: 'wavy-2',
      title: 'User Engagement',
      data: [{
        x: 'Week 1',
        y: 32
      }, {
        x: 'Week 2',
        y: 28
      }, {
        x: 'Week 3',
        y: 35
      }, {
        x: 'Week 4',
        y: 42
      }, {
        x: 'Week 5',
        y: 38
      }, {
        x: 'Week 6',
        y: 46
      }, {
        x: 'Week 7',
        y: 41
      }, {
        x: 'Week 8',
        y: 49
      }],
      color: '#52c41a'
    }]} type="line" title="Weekly Engagement" showGrid={true} showLegend={false} height={200} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Line charts matching the wavy patterns shown in the Figma design'
      }
    }
  }
}`,...(Pe=(Ve=W.parameters)==null?void 0:Ve.docs)==null?void 0:Pe.source}}};var De,Oe,Xe;B.parameters={...B.parameters,docs:{...(De=B.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '24px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))'
  }}>
      <Chart series={[{
      id: 'category-a',
      title: 'Category A',
      data: [{
        x: 'Q1',
        y: 65
      }, {
        x: 'Q2',
        y: 72
      }, {
        x: 'Q3',
        y: 58
      }, {
        x: 'Q4',
        y: 81
      }],
      color: '#1890ff'
    }, {
      id: 'category-b',
      title: 'Category B',
      data: [{
        x: 'Q1',
        y: 45
      }, {
        x: 'Q2',
        y: 52
      }, {
        x: 'Q3',
        y: 48
      }, {
        x: 'Q4',
        y: 67
      }],
      color: '#52c41a'
    }]} type="bar" title="Quarterly Performance" showGrid={true} showLegend={true} height={250} />
      
      <Chart series={[{
      id: 'single-series',
      title: 'Revenue',
      data: [{
        x: 'Jan',
        y: 42
      }, {
        x: 'Feb',
        y: 38
      }, {
        x: 'Mar',
        y: 45
      }, {
        x: 'Apr',
        y: 51
      }, {
        x: 'May',
        y: 47
      }, {
        x: 'Jun',
        y: 58
      }, {
        x: 'Jul',
        y: 54
      }, {
        x: 'Aug',
        y: 62
      }],
      color: '#722ed1'
    }]} type="bar" title="Monthly Revenue" showGrid={true} showLegend={false} height={250} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Bar charts with single and multiple series as shown in the Figma design'
      }
    }
  }
}`,...(Xe=(Oe=B.parameters)==null?void 0:Oe.docs)==null?void 0:Xe.source}}};var Ye,Ke,Ze;Q.parameters={...Q.parameters,docs:{...(Ye=Q.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '24px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))'
  }}>
      <Chart series={[{
      id: 'smooth-area',
      title: 'Growth Trend',
      data: [{
        x: 'Jan',
        y: 20
      }, {
        x: 'Feb',
        y: 25
      }, {
        x: 'Mar',
        y: 22
      }, {
        x: 'Apr',
        y: 30
      }, {
        x: 'May',
        y: 28
      }, {
        x: 'Jun',
        y: 35
      }, {
        x: 'Jul',
        y: 32
      }, {
        x: 'Aug',
        y: 40
      }, {
        x: 'Sep',
        y: 38
      }, {
        x: 'Oct',
        y: 45
      }],
      color: '#13c2c2'
    }]} type="area" title="Growth Analysis" showGrid={true} showLegend={false} height={200} />
      
      <Chart series={[{
      id: 'usage-area',
      title: 'System Usage',
      data: [{
        x: '00:00',
        y: 15
      }, {
        x: '04:00',
        y: 8
      }, {
        x: '08:00',
        y: 35
      }, {
        x: '12:00',
        y: 58
      }, {
        x: '16:00',
        y: 72
      }, {
        x: '20:00',
        y: 45
      }, {
        x: '24:00',
        y: 22
      }],
      color: '#fa541c'
    }]} type="area" title="Daily Usage Pattern" showGrid={true} showLegend={false} height={200} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Area charts with smooth curves as shown in the Figma design'
      }
    }
  }
}`,...(Ze=(Ke=Q.parameters)==null?void 0:Ke.docs)==null?void 0:Ze.source}}};var He,es,ss;U.parameters={...U.parameters,docs:{...(He=U.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '16px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif'
  }}>
      <Chart series={sampleLineSeries.slice(0, 1)} type="line" size="sm" title="Revenue Trend" responsive={true} />
      <Chart series={sampleBarSeries.slice(0, 1)} type="bar" size="sm" title="Sales Data" responsive={true} />
      <Chart series={sampleAreaSeries} type="area" size="sm" title="User Growth" responsive={true} />
      <Chart series={sampleLineSeries.slice(1, 2)} type="line" size="sm" title="Expenses" responsive={true} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Responsive grid layout showcasing multiple charts that adapt to container size'
      }
    }
  }
}`,...(ss=(es=U.parameters)==null?void 0:es.docs)==null?void 0:ss.source}}};var rs,as,ts;I.parameters={...I.parameters,docs:{...(rs=I.parameters)==null?void 0:rs.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '24px',
    gridTemplateColumns: '2fr 1fr',
    gridTemplateRows: 'auto auto',
    fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif'
  }}>
      <div style={{
      gridColumn: '1 / -1'
    }}>
        <Chart series={sampleLineSeries} type="line" title="Financial Overview Dashboard" xAxisLabel="Time Period" yAxisLabel="Amount (USD)" height={350} showGrid={true} showLegend={true} responsive={true} />
      </div>
      <Chart series={sampleBarSeries.slice(0, 1)} type="bar" title="Monthly Sales" height={250} responsive={true} />
      <Chart series={sampleAreaSeries} type="area" title="Active Users" height={250} responsive={true} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Dashboard-style layout with a main chart and supporting smaller charts'
      }
    }
  }
}`,...(ts=(as=I.parameters)==null?void 0:as.docs)==null?void 0:ts.source}}};var is,ns,os;V.parameters={...V.parameters,docs:{...(is=V.parameters)==null?void 0:is.docs,source:{originalSource:`{
  args: {
    series: [{
      ...sampleLineSeries[0],
      color: '#8E44AD'
    }, {
      ...sampleLineSeries[1],
      color: '#E67E22'
    }, {
      ...sampleLineSeries[2],
      color: '#2ECC71'
    }],
    type: 'line',
    title: 'Custom Color Palette',
    height: 300,
    colors: ['#8E44AD', '#E67E22', '#2ECC71', '#E74C3C', '#3498DB']
  }
}`,...(os=(ns=V.parameters)==null?void 0:ns.docs)==null?void 0:os.source}}};var ls,ds,cs;P.parameters={...P.parameters,docs:{...(ls=P.parameters)==null?void 0:ls.docs,source:{originalSource:`{
  args: {
    series: sampleLineSeries.slice(0, 1),
    type: 'line',
    title: 'Clean Design (No Grid)',
    showGrid: false,
    showLegend: false,
    height: 300
  }
}`,...(cs=(ds=P.parameters)==null?void 0:ds.docs)==null?void 0:cs.source}}};var us,hs,ps;D.parameters={...D.parameters,docs:{...(us=D.parameters)==null?void 0:us.docs,source:{originalSource:`{
  args: {
    series: sampleBarSeries.slice(0, 1),
    type: 'bar',
    title: 'Animated Chart',
    animate: true,
    animationDuration: 1000,
    height: 300
  }
}`,...(ps=(hs=D.parameters)==null?void 0:hs.docs)==null?void 0:ps.source}}};var ms,ys,xs;O.parameters={...O.parameters,docs:{...(ms=O.parameters)==null?void 0:ms.docs,source:{originalSource:`{
  args: {
    series: sampleLineSeries.slice(0, 1),
    type: 'line',
    title: 'Static Chart (No Animation)',
    animate: false,
    height: 300
  }
}`,...(xs=(ys=O.parameters)==null?void 0:ys.docs)==null?void 0:xs.source}}};const Ds=["Default","LineChart","BarChart","AreaChart","SmallChart","MediumChart","LargeChart","MinimalChart","DetailedChart","LoadingChart","ErrorChart","EmptyChart","InteractiveChart","FigmaLineCharts","FigmaBarCharts","FigmaAreaCharts","ResponsiveGrid","DashboardLayout","CustomColors","NoGridChart","AnimatedChart","StaticChart"];export{D as AnimatedChart,G as AreaChart,T as BarChart,V as CustomColors,I as DashboardLayout,j as Default,F as DetailedChart,q as EmptyChart,k as ErrorChart,Q as FigmaAreaCharts,B as FigmaBarCharts,W as FigmaLineCharts,J as InteractiveChart,$ as LargeChart,M as LineChart,z as LoadingChart,E as MediumChart,R as MinimalChart,P as NoGridChart,U as ResponsiveGrid,N as SmallChart,O as StaticChart,Ds as __namedExportsOrder,Ps as default};
