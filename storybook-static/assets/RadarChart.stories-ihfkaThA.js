import{j as e}from"./jsx-runtime-DiklIkkE.js";import{R as he,r as sa}from"./index-DRjF_FHU.js";const aa=["var(--radar-color-1, #0F172A)","var(--radar-color-2, #EE46BC)","var(--radar-color-3, #0BA5EC)","var(--radar-color-4, #52c41a)","var(--radar-color-5, #faad14)","var(--radar-color-6, #f5222d)"],n=he.forwardRef(({series:t=[],size:p="md",title:x,showLegend:L=!1,legendPosition:ne="right",maxValue:oe,levels:f=5,showScaleLabels:ks=!0,showAxisLabels:$s=!0,height:S,width:C,colors:y=aa,animate:Is=!0,animationDuration:qs=300,loading:le=!1,error:Z,className:Fs,onDataPointClick:ta,onDataPointHover:w,...v},A)=>{const[de,ce]=he.useState(null),Bs="nexus-radar-chart",Ws=`nexus-radar-chart--${p}`,Os=L?`nexus-radar-chart--legend-${ne}`:"",D=[Bs,Ws,Os,le?"nexus-radar-chart--loading":"",Z?"nexus-radar-chart--error":"",Fs].filter(Boolean).join(" "),c=sa.useMemo(()=>{if(!t.length)return null;const s=Array.from(new Set(t.flatMap(o=>o.data.map(i=>i.axis)))),l=t.flatMap(o=>o.data.map(i=>i.value)),m=oe||Math.max(...l,1e3),u=t.map(o=>({...o,data:s.map(i=>o.data.find(g=>g.axis===i)||{axis:i,value:0})}));return{axes:s,maxValue:m,series:u,angleStep:2*Math.PI/s.length}},[t,oe]),Ys=()=>{if(!c)return[];const s=156,l=156,m=140;return Array.from({length:f},(u,o)=>{const i=o+1,h=m*i/f,g=c.maxValue*i/f,ee=c.axes.map((se,ae)=>{const b=ae*c.angleStep-Math.PI/2,re=s+h*Math.cos(b),te=l+h*Math.sin(b);return`${re},${te}`}).join(" ");return{level:i,radius:h,value:g,points:ee}})},Xs=()=>{if(!c)return[];const s=156,l=156,m=140;return c.axes.map((u,o)=>{const i=o*c.angleStep-Math.PI/2,h=s+m*Math.cos(i),g=l+m*Math.sin(i);return{axis:u,x1:s,y1:l,x2:h,y2:g,labelX:s+(m+20)*Math.cos(i),labelY:l+(m+20)*Math.sin(i)}})},Hs=()=>{if(!c)return[];const s=156,l=156,m=140;return c.series.map((u,o)=>{const i=u.data.map((g,ee)=>{const se=ee*c.angleStep-Math.PI/2,ae=g.value/c.maxValue,b=m*ae,re=s+b*Math.cos(se),te=l+b*Math.sin(se);return`${re},${te}`}).join(" "),h=u.color||y[o%y.length];return{...u,points:i,color:h,fillOpacity:de&&de!==u.id?.3:.2}})},me=Ys(),ue=Xs(),Gs=Hs(),Js=()=>me.map(s=>e.jsx("polygon",{points:s.points,className:"nexus-radar-chart__scale-level",fill:"none",stroke:"var(--radar-grid-color)",strokeWidth:"1"},s.level)),Qs=()=>ue.map((s,l)=>e.jsx("line",{x1:s.x1,y1:s.y1,x2:s.x2,y2:s.y2,className:"nexus-radar-chart__axis-ray",stroke:"var(--radar-grid-color)",strokeWidth:"1"},s.axis)),Us=()=>{if(!ks||!c)return null;const s=156,l=156,m=140,u=-Math.PI/2;return me.map(o=>{const i=m*o.level/f,h=s+i*Math.cos(u),g=l+i*Math.sin(u);return e.jsxs("g",{className:"nexus-radar-chart__scale-label-group",children:[e.jsx("rect",{x:h-24,y:g-11,width:48,height:22,rx:11,className:"nexus-radar-chart__scale-label-bg"}),e.jsx("text",{x:h,y:g+4,className:"nexus-radar-chart__scale-label",textAnchor:"middle",children:o.value.toLocaleString()})]},`scale-${o.level}`)})},Ks=()=>$s?ue.map(s=>e.jsx("text",{x:s.labelX,y:s.labelY+4,className:"nexus-radar-chart__axis-label",textAnchor:"middle",children:s.axis},`axis-${s.axis}`)):null,Zs=()=>Gs.map((s,l)=>e.jsx("g",{className:"nexus-radar-chart__series",onMouseEnter:()=>{ce(s.id),w==null||w(null,s.id)},onMouseLeave:()=>{ce(null),w==null||w(null,null)},children:e.jsx("polygon",{points:s.points,fill:s.color,fillOpacity:s.fillOpacity,stroke:s.color,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"nexus-radar-chart__series-path",style:{transition:Is?`all ${qs}ms ease-in-out`:"none"}})},s.id)),ea=()=>!L||!t.length?null:e.jsx("div",{className:`nexus-radar-chart__legend nexus-radar-chart__legend--${ne}`,children:t.map((s,l)=>e.jsxs("div",{className:"nexus-radar-chart__legend-item",children:[e.jsx("div",{className:"nexus-radar-chart__legend-indicator",style:{backgroundColor:s.color||y[l%y.length]}}),e.jsx("span",{className:"nexus-radar-chart__legend-label",children:s.title})]},s.id))});return le?e.jsx("div",{ref:A,className:D,style:{height:S,width:C},...v,children:e.jsxs("div",{className:"nexus-radar-chart__loading",children:[e.jsx("div",{className:"nexus-radar-chart__loading-spinner"}),e.jsx("span",{className:"nexus-radar-chart__loading-text",children:"Loading chart..."})]})}):Z?e.jsx("div",{ref:A,className:D,style:{height:S,width:C},...v,children:e.jsx("div",{className:"nexus-radar-chart__error",children:e.jsx("span",{className:"nexus-radar-chart__error-text",children:Z})})}):t.length?e.jsxs("div",{ref:A,className:D,style:{height:S,width:C},...v,children:[x&&e.jsx("div",{className:"nexus-radar-chart__header",children:e.jsx("h3",{className:"nexus-radar-chart__title",children:x})}),e.jsxs("div",{className:"nexus-radar-chart__container",children:[e.jsx("div",{className:"nexus-radar-chart__chart",children:e.jsxs("svg",{className:"nexus-radar-chart__svg",viewBox:"0 0 312 312",preserveAspectRatio:"xMidYMid meet",children:[Js(),Qs(),Us(),Ks(),Zs()]})}),ea()]})]}):e.jsx("div",{ref:A,className:D,style:{height:S,width:C},...v,children:e.jsx("div",{className:"nexus-radar-chart__empty",children:e.jsx("span",{className:"nexus-radar-chart__empty-text",children:"No data available"})})})});n.displayName="RadarChart";n.__docgenInfo={description:"RadarChart component for displaying multi-dimensional data in a circular layout",methods:[],displayName:"RadarChart",props:{series:{required:!1,tsType:{name:"Array",elements:[{name:"RadarSeries"}],raw:"RadarSeries[]"},description:"Array of data series to display",defaultValue:{value:"[]",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Chart size variant",defaultValue:{value:"'md'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Chart title"},showLegend:{required:!1,tsType:{name:"boolean"},description:"Whether to show legend",defaultValue:{value:"false",computed:!1}},legendPosition:{required:!1,tsType:{name:"union",raw:"'right' | 'bottom'",elements:[{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"}]},description:"Legend position",defaultValue:{value:"'right'",computed:!1}},maxValue:{required:!1,tsType:{name:"number"},description:"Maximum value for the radar chart scale"},levels:{required:!1,tsType:{name:"number"},description:"Number of scale levels (concentric polygons)",defaultValue:{value:"5",computed:!1}},showScaleLabels:{required:!1,tsType:{name:"boolean"},description:"Whether to show scale labels",defaultValue:{value:"true",computed:!1}},showAxisLabels:{required:!1,tsType:{name:"boolean"},description:"Whether to show axis labels",defaultValue:{value:"true",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Height of the chart container"},width:{required:!1,tsType:{name:"number"},description:"Width of the chart container"},colors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Custom color palette",defaultValue:{value:`[
  'var(--radar-color-1, #0F172A)',
  'var(--radar-color-2, #EE46BC)', 
  'var(--radar-color-3, #0BA5EC)',
  'var(--radar-color-4, #52c41a)',
  'var(--radar-color-5, #faad14)',
  'var(--radar-color-6, #f5222d)',
]`,computed:!1}},animate:{required:!1,tsType:{name:"boolean"},description:"Whether to enable animations",defaultValue:{value:"true",computed:!1}},animationDuration:{required:!1,tsType:{name:"number"},description:"Animation duration in milliseconds",defaultValue:{value:"300",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the chart is loading",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"Error state"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},onDataPointClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(point: RadarDataPoint, seriesId: string) => void",signature:{arguments:[{type:{name:"RadarDataPoint"},name:"point"},{type:{name:"string"},name:"seriesId"}],return:{name:"void"}}},description:"Callback for data point interactions"},onDataPointHover:{required:!1,tsType:{name:"signature",type:"function",raw:"(point: RadarDataPoint | null, seriesId: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"RadarDataPoint | null",elements:[{name:"RadarDataPoint"},{name:"null"}]},name:"point"},{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"seriesId"}],return:{name:"void"}}},description:"Callback for data point hover"}}};const K=t=>["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((x,L)=>({axis:x,value:t[L]||0,label:`${x}: ${t[L]||0}`})),Ms=(t,p)=>t.map((x,L)=>({axis:x,value:p[L]||0,label:`${x}: ${p[L]||0}`})),a={id:"series-1",title:"Series 1",data:K([850,200,400,920,650,200,300]),color:"#0F172A"},r={id:"series-2",title:"Series 2",data:K([950,800,1e3,400,700,1e3,850]),color:"#EE46BC"},d={id:"series-3",title:"Series 3",data:K([750,400,200,600,850,200,950]),color:"#0BA5EC"},Ts={id:"frontend-skills",title:"Frontend Skills",data:Ms(["JavaScript","React","CSS","TypeScript","Testing"],[85,90,75,80,70]),color:"#0F172A"},ra={id:"backend-skills",title:"Backend Skills",data:Ms(["JavaScript","React","CSS","TypeScript","Testing"],[70,60,85,90,80]),color:"#EE46BC"},ie={id:"performance",title:"Performance Metrics",data:K([780,650,850,720,900,600,750]),color:"#52c41a"},da={title:"Charts/RadarChart",component:n,parameters:{layout:"padded",docs:{description:{component:"A radar chart component for displaying multi-dimensional data in a circular layout, perfect for comparing multiple metrics or performance indicators."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg"],description:"Chart size preset"},showLegend:{control:"boolean",description:"Toggle legend visibility"},legendPosition:{control:{type:"select"},options:["right","bottom"],description:"Legend position"},maxValue:{control:{type:"number",min:100,max:2e3,step:100},description:"Maximum value for the radar scale"},levels:{control:{type:"number",min:3,max:10,step:1},description:"Number of concentric scale levels"},showScaleLabels:{control:"boolean",description:"Show scale value labels"},showAxisLabels:{control:"boolean",description:"Show axis labels"},animate:{control:"boolean",description:"Enable animations"},loading:{control:"boolean",description:"Show loading state"},height:{control:{type:"number",min:200,max:800,step:50},description:"Chart height in pixels"},width:{control:{type:"number",min:300,max:1200,step:50},description:"Chart width in pixels"}}},R={args:{series:[a],showLegend:!1,showScaleLabels:!0,showAxisLabels:!0,maxValue:1e3}},V={args:{series:[a],title:"Weekly Performance",showLegend:!1,showScaleLabels:!0,showAxisLabels:!0,maxValue:1e3,size:"md"}},z={args:{series:[a,r],title:"Performance Comparison",showLegend:!1,showScaleLabels:!0,showAxisLabels:!0,maxValue:1e3,size:"md"}},P={args:{series:[a,r,d],title:"Multi-Series Analysis",showLegend:!1,showScaleLabels:!0,showAxisLabels:!0,maxValue:1e3,size:"md"}},_={render:()=>e.jsxs("div",{style:{display:"grid",gap:"32px",gridTemplateColumns:"repeat(auto-fit, minmax(400px, 1fr))",fontFamily:"Inter, -apple-system, Roboto, Helvetica, sans-serif"},children:[e.jsx(n,{series:[a,r,d],showLegend:!1,showScaleLabels:!0,showAxisLabels:!0,maxValue:1e3,size:"md"}),e.jsx(n,{series:[a,r],showLegend:!1,showScaleLabels:!0,showAxisLabels:!0,maxValue:1e3,size:"md"}),e.jsx(n,{series:[a],showLegend:!1,showScaleLabels:!0,showAxisLabels:!0,maxValue:1e3,size:"md"}),e.jsx(n,{series:[a,r,d],showLegend:!0,legendPosition:"right",showScaleLabels:!0,showAxisLabels:!0,maxValue:1e3,size:"md"}),e.jsx(n,{series:[a,r],showLegend:!0,legendPosition:"right",showScaleLabels:!0,showAxisLabels:!0,maxValue:1e3,size:"md"}),e.jsx(n,{series:[a],showLegend:!0,legendPosition:"right",showScaleLabels:!0,showAxisLabels:!0,maxValue:1e3,size:"md"}),e.jsx(n,{series:[a,r,d],showLegend:!0,legendPosition:"bottom",showScaleLabels:!0,showAxisLabels:!0,maxValue:1e3,size:"md"}),e.jsx(n,{series:[a,r],showLegend:!0,legendPosition:"bottom",showScaleLabels:!0,showAxisLabels:!0,maxValue:1e3,size:"md"}),e.jsx(n,{series:[a],showLegend:!0,legendPosition:"bottom",showScaleLabels:!0,showAxisLabels:!0,maxValue:1e3,size:"md"})]}),parameters:{docs:{description:{story:"Complete grid layout matching the Figma design with all combinations of series counts and legend positions"}}}},j={args:{series:[a,r,d],title:"Radar Chart with Right Legend",showLegend:!0,legendPosition:"right",showScaleLabels:!0,showAxisLabels:!0,maxValue:1e3,size:"md"}},N={args:{series:[a,r,d],title:"Radar Chart with Bottom Legend",showLegend:!0,legendPosition:"bottom",showScaleLabels:!0,showAxisLabels:!0,maxValue:1e3,size:"md"}},E={args:{series:[a,r,d],title:"Radar Chart without Legend",showLegend:!1,showScaleLabels:!0,showAxisLabels:!0,maxValue:1e3,size:"md"}},M={args:{series:[a,r],title:"Small Radar Chart",size:"sm",showLegend:!0,legendPosition:"bottom",maxValue:1e3}},T={args:{series:[a,r,d],title:"Medium Radar Chart",size:"md",showLegend:!0,legendPosition:"right",maxValue:1e3}},k={args:{series:[a,r,d],title:"Large Radar Chart",size:"lg",showLegend:!0,legendPosition:"bottom",maxValue:1e3}},$={args:{series:[Ts,ra],title:"Skills Assessment",showLegend:!0,legendPosition:"bottom",showScaleLabels:!0,showAxisLabels:!0,maxValue:100,size:"md"}},I={args:{series:[ie],title:"Weekly Performance Metrics",showLegend:!1,showScaleLabels:!0,showAxisLabels:!0,maxValue:1e3,size:"md"}},q={args:{series:[a,r],title:"Custom Scale Configuration",showLegend:!0,legendPosition:"right",showScaleLabels:!0,showAxisLabels:!0,maxValue:1200,levels:6,size:"md"}},F={args:{series:[a],showLegend:!1,showScaleLabels:!1,showAxisLabels:!0,maxValue:1e3,levels:3,size:"md"}},B={args:{series:[a,r],title:"Clean Design (No Labels)",showLegend:!1,showScaleLabels:!1,showAxisLabels:!1,maxValue:1e3,size:"md"}},W={args:{series:[],loading:!0,height:400,size:"md"}},O={args:{series:[],error:"Failed to load radar chart data",height:400,size:"md"}},Y={args:{series:[],title:"No Data Available",height:400,size:"md"}},X={args:{series:[a,r,d],title:"Interactive Radar Chart",showLegend:!0,legendPosition:"bottom",showScaleLabels:!0,showAxisLabels:!0,maxValue:1e3,onDataPointClick:(t,p)=>{alert(`Clicked: ${t.axis} = ${t.value} (Series: ${p})`)},onDataPointHover:(t,p)=>{t&&console.log(`Hovered: ${t.axis} = ${t.value} (Series: ${p})`)}}},H={render:()=>e.jsxs("div",{style:{display:"grid",gap:"16px",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",fontFamily:"Inter, -apple-system, Roboto, Helvetica, sans-serif"},children:[e.jsx(n,{series:[a],title:"Performance",size:"sm",showLegend:!1}),e.jsx(n,{series:[r],title:"Efficiency",size:"sm",showLegend:!1}),e.jsx(n,{series:[d],title:"Quality",size:"sm",showLegend:!1}),e.jsx(n,{series:[ie],title:"Metrics",size:"sm",showLegend:!1})]}),parameters:{docs:{description:{story:"Responsive grid layout with multiple small radar charts"}}}},G={render:()=>e.jsxs("div",{style:{display:"grid",gap:"24px",gridTemplateColumns:"2fr 1fr",gridTemplateRows:"auto auto",fontFamily:"Inter, -apple-system, Roboto, Helvetica, sans-serif"},children:[e.jsx("div",{style:{gridColumn:"1 / -1"},children:e.jsx(n,{series:[a,r,d],title:"Comprehensive Performance Dashboard",showLegend:!0,legendPosition:"bottom",showScaleLabels:!0,showAxisLabels:!0,maxValue:1e3,size:"lg"})}),e.jsx(n,{series:[Ts],title:"Skills Overview",showLegend:!1,maxValue:100,size:"md"}),e.jsx(n,{series:[ie],title:"Weekly Trends",showLegend:!1,maxValue:1e3,size:"md"})]}),parameters:{docs:{description:{story:"Dashboard-style layout with a main radar chart and supporting smaller charts"}}}},J={args:{series:[a,r],title:"Animated Radar Chart",showLegend:!0,legendPosition:"bottom",animate:!0,animationDuration:1e3,maxValue:1e3,size:"md"}},Q={args:{series:[a,r],title:"Static Radar Chart (No Animation)",showLegend:!0,legendPosition:"bottom",animate:!1,maxValue:1e3,size:"md"}},U={args:{series:[{...a,color:"#8E44AD"},{...r,color:"#E67E22"},{...d,color:"#2ECC71"}],title:"Custom Color Palette",showLegend:!0,legendPosition:"bottom",maxValue:1e3,colors:["#8E44AD","#E67E22","#2ECC71","#E74C3C","#3498DB"],size:"md"}};var ge,pe,xe;R.parameters={...R.parameters,docs:{...(ge=R.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    series: [series1Data],
    showLegend: false,
    showScaleLabels: true,
    showAxisLabels: true,
    maxValue: 1000
  }
}`,...(xe=(pe=R.parameters)==null?void 0:pe.docs)==null?void 0:xe.source}}};var Le,we,be;V.parameters={...V.parameters,docs:{...(Le=V.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    series: [series1Data],
    title: 'Weekly Performance',
    showLegend: false,
    showScaleLabels: true,
    showAxisLabels: true,
    maxValue: 1000,
    size: 'md'
  }
}`,...(be=(we=V.parameters)==null?void 0:we.docs)==null?void 0:be.source}}};var fe,Se,Ce;z.parameters={...z.parameters,docs:{...(fe=z.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    series: [series1Data, series2Data],
    title: 'Performance Comparison',
    showLegend: false,
    showScaleLabels: true,
    showAxisLabels: true,
    maxValue: 1000,
    size: 'md'
  }
}`,...(Ce=(Se=z.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};var ye,ve,Ae;P.parameters={...P.parameters,docs:{...(ye=P.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    series: [series1Data, series2Data, series3Data],
    title: 'Multi-Series Analysis',
    showLegend: false,
    showScaleLabels: true,
    showAxisLabels: true,
    maxValue: 1000,
    size: 'md'
  }
}`,...(Ae=(ve=P.parameters)==null?void 0:ve.docs)==null?void 0:Ae.source}}};var De,Re,Ve;_.parameters={..._.parameters,docs:{...(De=_.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '32px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif'
  }}>
      {/* Row 1: 3 series, 2 series, 1 series - No Legend */}
      <RadarChart series={[series1Data, series2Data, series3Data]} showLegend={false} showScaleLabels={true} showAxisLabels={true} maxValue={1000} size="md" />
      
      <RadarChart series={[series1Data, series2Data]} showLegend={false} showScaleLabels={true} showAxisLabels={true} maxValue={1000} size="md" />
      
      <RadarChart series={[series1Data]} showLegend={false} showScaleLabels={true} showAxisLabels={true} maxValue={1000} size="md" />
      
      {/* Row 2: 3 series, 2 series, 1 series - Right Legend */}
      <RadarChart series={[series1Data, series2Data, series3Data]} showLegend={true} legendPosition="right" showScaleLabels={true} showAxisLabels={true} maxValue={1000} size="md" />
      
      <RadarChart series={[series1Data, series2Data]} showLegend={true} legendPosition="right" showScaleLabels={true} showAxisLabels={true} maxValue={1000} size="md" />
      
      <RadarChart series={[series1Data]} showLegend={true} legendPosition="right" showScaleLabels={true} showAxisLabels={true} maxValue={1000} size="md" />
      
      {/* Row 3: 3 series, 2 series, 1 series - Bottom Legend */}
      <RadarChart series={[series1Data, series2Data, series3Data]} showLegend={true} legendPosition="bottom" showScaleLabels={true} showAxisLabels={true} maxValue={1000} size="md" />
      
      <RadarChart series={[series1Data, series2Data]} showLegend={true} legendPosition="bottom" showScaleLabels={true} showAxisLabels={true} maxValue={1000} size="md" />
      
      <RadarChart series={[series1Data]} showLegend={true} legendPosition="bottom" showScaleLabels={true} showAxisLabels={true} maxValue={1000} size="md" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Complete grid layout matching the Figma design with all combinations of series counts and legend positions'
      }
    }
  }
}`,...(Ve=(Re=_.parameters)==null?void 0:Re.docs)==null?void 0:Ve.source}}};var ze,Pe,_e;j.parameters={...j.parameters,docs:{...(ze=j.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    series: [series1Data, series2Data, series3Data],
    title: 'Radar Chart with Right Legend',
    showLegend: true,
    legendPosition: 'right',
    showScaleLabels: true,
    showAxisLabels: true,
    maxValue: 1000,
    size: 'md'
  }
}`,...(_e=(Pe=j.parameters)==null?void 0:Pe.docs)==null?void 0:_e.source}}};var je,Ne,Ee;N.parameters={...N.parameters,docs:{...(je=N.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    series: [series1Data, series2Data, series3Data],
    title: 'Radar Chart with Bottom Legend',
    showLegend: true,
    legendPosition: 'bottom',
    showScaleLabels: true,
    showAxisLabels: true,
    maxValue: 1000,
    size: 'md'
  }
}`,...(Ee=(Ne=N.parameters)==null?void 0:Ne.docs)==null?void 0:Ee.source}}};var Me,Te,ke;E.parameters={...E.parameters,docs:{...(Me=E.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    series: [series1Data, series2Data, series3Data],
    title: 'Radar Chart without Legend',
    showLegend: false,
    showScaleLabels: true,
    showAxisLabels: true,
    maxValue: 1000,
    size: 'md'
  }
}`,...(ke=(Te=E.parameters)==null?void 0:Te.docs)==null?void 0:ke.source}}};var $e,Ie,qe;M.parameters={...M.parameters,docs:{...($e=M.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    series: [series1Data, series2Data],
    title: 'Small Radar Chart',
    size: 'sm',
    showLegend: true,
    legendPosition: 'bottom',
    maxValue: 1000
  }
}`,...(qe=(Ie=M.parameters)==null?void 0:Ie.docs)==null?void 0:qe.source}}};var Fe,Be,We;T.parameters={...T.parameters,docs:{...(Fe=T.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    series: [series1Data, series2Data, series3Data],
    title: 'Medium Radar Chart',
    size: 'md',
    showLegend: true,
    legendPosition: 'right',
    maxValue: 1000
  }
}`,...(We=(Be=T.parameters)==null?void 0:Be.docs)==null?void 0:We.source}}};var Oe,Ye,Xe;k.parameters={...k.parameters,docs:{...(Oe=k.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    series: [series1Data, series2Data, series3Data],
    title: 'Large Radar Chart',
    size: 'lg',
    showLegend: true,
    legendPosition: 'bottom',
    maxValue: 1000
  }
}`,...(Xe=(Ye=k.parameters)==null?void 0:Ye.docs)==null?void 0:Xe.source}}};var He,Ge,Je;$.parameters={...$.parameters,docs:{...(He=$.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    series: [skillsSeries1, skillsSeries2],
    title: 'Skills Assessment',
    showLegend: true,
    legendPosition: 'bottom',
    showScaleLabels: true,
    showAxisLabels: true,
    maxValue: 100,
    size: 'md'
  }
}`,...(Je=(Ge=$.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};var Qe,Ue,Ke;I.parameters={...I.parameters,docs:{...(Qe=I.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    series: [performanceSeries],
    title: 'Weekly Performance Metrics',
    showLegend: false,
    showScaleLabels: true,
    showAxisLabels: true,
    maxValue: 1000,
    size: 'md'
  }
}`,...(Ke=(Ue=I.parameters)==null?void 0:Ue.docs)==null?void 0:Ke.source}}};var Ze,es,ss;q.parameters={...q.parameters,docs:{...(Ze=q.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  args: {
    series: [series1Data, series2Data],
    title: 'Custom Scale Configuration',
    showLegend: true,
    legendPosition: 'right',
    showScaleLabels: true,
    showAxisLabels: true,
    maxValue: 1200,
    levels: 6,
    size: 'md'
  }
}`,...(ss=(es=q.parameters)==null?void 0:es.docs)==null?void 0:ss.source}}};var as,rs,ts;F.parameters={...F.parameters,docs:{...(as=F.parameters)==null?void 0:as.docs,source:{originalSource:`{
  args: {
    series: [series1Data],
    showLegend: false,
    showScaleLabels: false,
    showAxisLabels: true,
    maxValue: 1000,
    levels: 3,
    size: 'md'
  }
}`,...(ts=(rs=F.parameters)==null?void 0:rs.docs)==null?void 0:ts.source}}};var is,ns,os;B.parameters={...B.parameters,docs:{...(is=B.parameters)==null?void 0:is.docs,source:{originalSource:`{
  args: {
    series: [series1Data, series2Data],
    title: 'Clean Design (No Labels)',
    showLegend: false,
    showScaleLabels: false,
    showAxisLabels: false,
    maxValue: 1000,
    size: 'md'
  }
}`,...(os=(ns=B.parameters)==null?void 0:ns.docs)==null?void 0:os.source}}};var ls,ds,cs;W.parameters={...W.parameters,docs:{...(ls=W.parameters)==null?void 0:ls.docs,source:{originalSource:`{
  args: {
    series: [],
    loading: true,
    height: 400,
    size: 'md'
  }
}`,...(cs=(ds=W.parameters)==null?void 0:ds.docs)==null?void 0:cs.source}}};var ms,us,hs;O.parameters={...O.parameters,docs:{...(ms=O.parameters)==null?void 0:ms.docs,source:{originalSource:`{
  args: {
    series: [],
    error: 'Failed to load radar chart data',
    height: 400,
    size: 'md'
  }
}`,...(hs=(us=O.parameters)==null?void 0:us.docs)==null?void 0:hs.source}}};var gs,ps,xs;Y.parameters={...Y.parameters,docs:{...(gs=Y.parameters)==null?void 0:gs.docs,source:{originalSource:`{
  args: {
    series: [],
    title: 'No Data Available',
    height: 400,
    size: 'md'
  }
}`,...(xs=(ps=Y.parameters)==null?void 0:ps.docs)==null?void 0:xs.source}}};var Ls,ws,bs;X.parameters={...X.parameters,docs:{...(Ls=X.parameters)==null?void 0:Ls.docs,source:{originalSource:`{
  args: {
    series: [series1Data, series2Data, series3Data],
    title: 'Interactive Radar Chart',
    showLegend: true,
    legendPosition: 'bottom',
    showScaleLabels: true,
    showAxisLabels: true,
    maxValue: 1000,
    onDataPointClick: (point, seriesId) => {
      alert(\`Clicked: \${point.axis} = \${point.value} (Series: \${seriesId})\`);
    },
    onDataPointHover: (point, seriesId) => {
      if (point) {
        console.log(\`Hovered: \${point.axis} = \${point.value} (Series: \${seriesId})\`);
      }
    }
  }
}`,...(bs=(ws=X.parameters)==null?void 0:ws.docs)==null?void 0:bs.source}}};var fs,Ss,Cs;H.parameters={...H.parameters,docs:{...(fs=H.parameters)==null?void 0:fs.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '16px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif'
  }}>
      <RadarChart series={[series1Data]} title="Performance" size="sm" showLegend={false} />
      <RadarChart series={[series2Data]} title="Efficiency" size="sm" showLegend={false} />
      <RadarChart series={[series3Data]} title="Quality" size="sm" showLegend={false} />
      <RadarChart series={[performanceSeries]} title="Metrics" size="sm" showLegend={false} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Responsive grid layout with multiple small radar charts'
      }
    }
  }
}`,...(Cs=(Ss=H.parameters)==null?void 0:Ss.docs)==null?void 0:Cs.source}}};var ys,vs,As;G.parameters={...G.parameters,docs:{...(ys=G.parameters)==null?void 0:ys.docs,source:{originalSource:`{
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
        <RadarChart series={[series1Data, series2Data, series3Data]} title="Comprehensive Performance Dashboard" showLegend={true} legendPosition="bottom" showScaleLabels={true} showAxisLabels={true} maxValue={1000} size="lg" />
      </div>
      <RadarChart series={[skillsSeries1]} title="Skills Overview" showLegend={false} maxValue={100} size="md" />
      <RadarChart series={[performanceSeries]} title="Weekly Trends" showLegend={false} maxValue={1000} size="md" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Dashboard-style layout with a main radar chart and supporting smaller charts'
      }
    }
  }
}`,...(As=(vs=G.parameters)==null?void 0:vs.docs)==null?void 0:As.source}}};var Ds,Rs,Vs;J.parameters={...J.parameters,docs:{...(Ds=J.parameters)==null?void 0:Ds.docs,source:{originalSource:`{
  args: {
    series: [series1Data, series2Data],
    title: 'Animated Radar Chart',
    showLegend: true,
    legendPosition: 'bottom',
    animate: true,
    animationDuration: 1000,
    maxValue: 1000,
    size: 'md'
  }
}`,...(Vs=(Rs=J.parameters)==null?void 0:Rs.docs)==null?void 0:Vs.source}}};var zs,Ps,_s;Q.parameters={...Q.parameters,docs:{...(zs=Q.parameters)==null?void 0:zs.docs,source:{originalSource:`{
  args: {
    series: [series1Data, series2Data],
    title: 'Static Radar Chart (No Animation)',
    showLegend: true,
    legendPosition: 'bottom',
    animate: false,
    maxValue: 1000,
    size: 'md'
  }
}`,...(_s=(Ps=Q.parameters)==null?void 0:Ps.docs)==null?void 0:_s.source}}};var js,Ns,Es;U.parameters={...U.parameters,docs:{...(js=U.parameters)==null?void 0:js.docs,source:{originalSource:`{
  args: {
    series: [{
      ...series1Data,
      color: '#8E44AD'
    }, {
      ...series2Data,
      color: '#E67E22'
    }, {
      ...series3Data,
      color: '#2ECC71'
    }],
    title: 'Custom Color Palette',
    showLegend: true,
    legendPosition: 'bottom',
    maxValue: 1000,
    colors: ['#8E44AD', '#E67E22', '#2ECC71', '#E74C3C', '#3498DB'],
    size: 'md'
  }
}`,...(Es=(Ns=U.parameters)==null?void 0:Ns.docs)==null?void 0:Es.source}}};const ca=["Default","SingleSeries","TwoSeries","ThreeSeries","FigmaVariants","LegendRight","LegendBottom","NoLegend","SmallChart","MediumChart","LargeChart","SkillsAssessment","PerformanceMetrics","CustomScales","MinimalDesign","NoLabels","LoadingChart","ErrorChart","EmptyChart","InteractiveChart","ResponsiveGrid","DashboardLayout","AnimatedChart","StaticChart","CustomColors"];export{J as AnimatedChart,U as CustomColors,q as CustomScales,G as DashboardLayout,R as Default,Y as EmptyChart,O as ErrorChart,_ as FigmaVariants,X as InteractiveChart,k as LargeChart,N as LegendBottom,j as LegendRight,W as LoadingChart,T as MediumChart,F as MinimalDesign,B as NoLabels,E as NoLegend,I as PerformanceMetrics,H as ResponsiveGrid,V as SingleSeries,$ as SkillsAssessment,M as SmallChart,Q as StaticChart,P as ThreeSeries,z as TwoSeries,ca as __namedExportsOrder,da as default};
