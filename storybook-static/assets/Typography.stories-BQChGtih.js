import{j as e}from"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";const t=({variant:i="text-md",weight:l="regular",color:s="default",children:c,as:v="p",className:U="",align:X="left",...Y})=>{const G=v,J=["nexus-typography",`nexus-typography--${i}`,`nexus-typography--${l}`,`nexus-typography--${s}`,`nexus-typography--${X}`,U].filter(Boolean).join(" ");return e.jsx(G,{className:J,...Y,children:c})},r=({level:i=1,weight:l="semibold",...s})=>{const c={1:"display-2xl",2:"display-xl",3:"display-lg",4:"display-md",5:"display-sm",6:"display-xs"},v={1:"h1",2:"h2",3:"h3",4:"h4",5:"h5",6:"h6"};return e.jsx(t,{variant:c[i],weight:l,as:v[i],...s})},a=({size:i="md",weight:l="regular",...s})=>e.jsx(t,{variant:`text-${i}`,weight:l,...s}),u=({weight:i="regular",color:l="muted",...s})=>e.jsx(t,{variant:"text-xs",weight:i,color:l,as:"span",...s});t.__docgenInfo={description:"Typography component for consistent text styling across the design system",methods:[],displayName:"Typography",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'display-2xl'
| 'display-xl' 
| 'display-lg'
| 'display-md'
| 'display-sm'
| 'display-xs'
| 'text-xl'
| 'text-lg'
| 'text-md'
| 'text-sm'
| 'text-xs'`,elements:[{name:"literal",value:"'display-2xl'"},{name:"literal",value:"'display-xl'"},{name:"literal",value:"'display-lg'"},{name:"literal",value:"'display-md'"},{name:"literal",value:"'display-sm'"},{name:"literal",value:"'display-xs'"},{name:"literal",value:"'text-xl'"},{name:"literal",value:"'text-lg'"},{name:"literal",value:"'text-md'"},{name:"literal",value:"'text-sm'"},{name:"literal",value:"'text-xs'"}]},description:"Typography variant",defaultValue:{value:"'text-md'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'regular' | 'medium' | 'semibold' | 'bold'",elements:[{name:"literal",value:"'regular'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:"Font weight",defaultValue:{value:"'regular'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'secondary' | 'muted'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'muted'"}]},description:"Text color",defaultValue:{value:"'default'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Text content"},as:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'p'"},{name:"literal",value:"'span'"},{name:"literal",value:"'div'"}]},description:"HTML element to render",defaultValue:{value:"'p'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"Text alignment",defaultValue:{value:"'left'",computed:!1}}}};r.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{level:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"",defaultValue:{value:"1",computed:!1}},weight:{defaultValue:{value:"'semibold'",computed:!1},required:!1}}};a.__docgenInfo={description:"",methods:[],displayName:"Text",props:{size:{required:!1,tsType:{name:"union",raw:"'xl' | 'lg' | 'md' | 'sm' | 'xs'",elements:[{name:"literal",value:"'xl'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'md'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'xs'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},weight:{defaultValue:{value:"'regular'",computed:!1},required:!1}}};u.__docgenInfo={description:"",methods:[],displayName:"Caption",props:{weight:{defaultValue:{value:"'regular'",computed:!1},required:!1},color:{defaultValue:{value:"'muted'",computed:!1},required:!1}}};const Z={title:"Design System/Typography",component:t,parameters:{layout:"padded",docs:{description:{component:"Typography component providing consistent text styling across the design system using the Inter font family."}}},argTypes:{variant:{control:"select",options:["display-2xl","display-xl","display-lg","display-md","display-sm","display-xs","text-xl","text-lg","text-md","text-sm","text-xs"],description:"Typography variant/size"},weight:{control:"select",options:["regular","medium","semibold","bold"],description:"Font weight"},color:{control:"select",options:["default","secondary","muted"],description:"Text color"},align:{control:"select",options:["left","center","right"],description:"Text alignment"},as:{control:"select",options:["h1","h2","h3","h4","h5","h6","p","span","div"],description:"HTML element to render"},children:{control:"text",description:"Text content"}},tags:["autodocs"]},o={args:{children:"The quick brown fox jumps over the lazy dog",variant:"text-md",weight:"regular",color:"default"}},d={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:e.jsxs("div",{children:[e.jsx(t,{variant:"text-sm",weight:"semibold",color:"secondary",style:{marginBottom:"16px"},children:"DISPLAY SCALE"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"text-xs",color:"muted",style:{marginBottom:"8px"},children:"Display 2xl · 72px / 90px · -2% letter spacing"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"display-2xl",weight:"regular",children:"Display 2xl"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Regular"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"display-2xl",weight:"medium",children:"Display 2xl"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Medium"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"display-2xl",weight:"semibold",children:"Display 2xl"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Semibold"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"display-2xl",weight:"bold",children:"Display 2xl"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Bold"})]})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-xs",color:"muted",style:{marginBottom:"8px"},children:"Display xl · 60px / 72px · -2% letter spacing"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"display-xl",weight:"regular",children:"Display xl"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Regular"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"display-xl",weight:"medium",children:"Display xl"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Medium"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"display-xl",weight:"semibold",children:"Display xl"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Semibold"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"display-xl",weight:"bold",children:"Display xl"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Bold"})]})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-xs",color:"muted",style:{marginBottom:"8px"},children:"Display lg · 48px / 60px · -2% letter spacing"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"display-lg",weight:"regular",children:"Display lg"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Regular"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"display-lg",weight:"medium",children:"Display lg"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Medium"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"display-lg",weight:"semibold",children:"Display lg"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Semibold"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"display-lg",weight:"bold",children:"Display lg"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Bold"})]})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-xs",color:"muted",style:{marginBottom:"8px"},children:"Display md · 36px / 44px · -2% letter spacing"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"display-md",weight:"regular",children:"Display md"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Regular"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"display-md",weight:"medium",children:"Display md"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Medium"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"display-md",weight:"semibold",children:"Display md"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Semibold"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"display-md",weight:"bold",children:"Display md"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Bold"})]})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-xs",color:"muted",style:{marginBottom:"8px"},children:"Display sm · 30px / 38px"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"display-sm",weight:"regular",children:"Display sm"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Regular"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"display-sm",weight:"medium",children:"Display sm"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Medium"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"display-sm",weight:"semibold",children:"Display sm"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Semibold"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"display-sm",weight:"bold",children:"Display sm"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Bold"})]})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-xs",color:"muted",style:{marginBottom:"8px"},children:"Display xs · 24px / 32px"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"display-xs",weight:"regular",children:"Display xs"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Regular"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"display-xs",weight:"medium",children:"Display xs"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Medium"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"display-xs",weight:"semibold",children:"Display xs"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Semibold"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"display-xs",weight:"bold",children:"Display xs"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Bold"})]})]})]})]})]})}),parameters:{docs:{description:{story:"Complete display typography scale showing all sizes from 2xl to xs with different font weights."}}}},p={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:e.jsxs("div",{children:[e.jsx(t,{variant:"text-sm",weight:"semibold",color:"secondary",style:{marginBottom:"16px"},children:"TEXT SCALE"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"text-xs",color:"muted",style:{marginBottom:"8px"},children:"Text xl · 20px / 30px"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"text-xl",weight:"regular",children:"Text xl"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Regular"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-xl",weight:"medium",children:"Text xl"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Medium"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-xl",weight:"semibold",children:"Text xl"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Semibold"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-xl",weight:"bold",children:"Text xl"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Bold"})]})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-xs",color:"muted",style:{marginBottom:"8px"},children:"Text lg · 18px / 28px"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"text-lg",weight:"regular",children:"Text lg"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Regular"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-lg",weight:"medium",children:"Text lg"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Medium"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-lg",weight:"semibold",children:"Text lg"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Semibold"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-lg",weight:"bold",children:"Text lg"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Bold"})]})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-xs",color:"muted",style:{marginBottom:"8px"},children:"Text md · 16px / 24px (Base font size)"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"text-md",weight:"regular",children:"Text md"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Regular"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-md",weight:"medium",children:"Text md"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Medium"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-md",weight:"semibold",children:"Text md"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Semibold"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-md",weight:"bold",children:"Text md"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Bold"})]})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-xs",color:"muted",style:{marginBottom:"8px"},children:"Text sm · 14px / 20px"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"text-sm",weight:"regular",children:"Text sm"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Regular"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-sm",weight:"medium",children:"Text sm"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Medium"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-sm",weight:"semibold",children:"Text sm"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Semibold"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-sm",weight:"bold",children:"Text sm"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Bold"})]})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-xs",color:"muted",style:{marginBottom:"8px"},children:"Text xs · 12px / 18px"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"text-xs",weight:"regular",children:"Text xs"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Regular"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-xs",weight:"medium",children:"Text xs"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Medium"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-xs",weight:"semibold",children:"Text xs"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Semibold"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-xs",weight:"bold",children:"Text xs"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"Bold"})]})]})]})]})]})}),parameters:{docs:{description:{story:"Complete text typography scale showing all sizes from xl to xs with different font weights."}}}},n={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:e.jsxs("div",{children:[e.jsx(t,{variant:"display-lg",weight:"regular",style:{marginBottom:"16px"},children:"Inter"}),e.jsx(t,{variant:"display-2xl",weight:"regular",style:{marginBottom:"32px",fontSize:"112px",lineHeight:"normal"},children:"Ag"}),e.jsxs(t,{variant:"display-lg",weight:"regular",style:{marginBottom:"32px"},children:["ABCDEFGHIJKLMNOPQRSTUVWXYZ",e.jsx("br",{}),"abcdefghijklmnopqrstuvwxyz",e.jsx("br",{}),"0123456789 !@#$%^&*()"]})]})}),parameters:{docs:{description:{story:"Typography specimen showing the Inter font family with alphabet, numbers, and special characters."}}}},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(t,{variant:"text-lg",weight:"semibold",style:{marginBottom:"16px"},children:"Typography Colors"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"text-lg",color:"default",children:"Default text color - Primary content and headings"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"#181D27"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-lg",color:"secondary",children:"Secondary text color - Supporting content and descriptions"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"#535862"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-lg",color:"muted",children:"Muted text color - Captions, labels, and meta information"}),e.jsx(t,{variant:"text-sm",color:"muted",children:"#9CA3AF"})]})]})]}),parameters:{docs:{description:{story:"Typography color variants for different content hierarchy and semantic meaning."}}}},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(t,{variant:"text-lg",weight:"semibold",style:{marginBottom:"16px"},children:"Text Alignment"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",border:"1px solid #E5E7EB",padding:"24px",borderRadius:"8px"},children:[e.jsx(t,{variant:"text-md",align:"left",children:"Left-aligned text (default) - Most common for body text and reading content"}),e.jsx(t,{variant:"text-md",align:"center",children:"Center-aligned text - Used for headings, hero content, and emphasis"}),e.jsx(t,{variant:"text-md",align:"right",children:"Right-aligned text - Used for numerical data, timestamps, and special layouts"})]})]}),parameters:{docs:{description:{story:"Typography alignment options for different layout requirements."}}}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"text-lg",weight:"semibold",style:{marginBottom:"16px"},children:"Heading Helper Component"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{level:1,children:"Heading 1 - Main page title"}),e.jsx(r,{level:2,children:"Heading 2 - Section title"}),e.jsx(r,{level:3,children:"Heading 3 - Subsection title"}),e.jsx(r,{level:4,children:"Heading 4 - Content group title"}),e.jsx(r,{level:5,children:"Heading 5 - Sub-content title"}),e.jsx(r,{level:6,children:"Heading 6 - Minor title"})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-lg",weight:"semibold",style:{marginBottom:"16px"},children:"Text Helper Component"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{size:"xl",children:"Extra large text for emphasis and standout content"}),e.jsx(a,{size:"lg",children:"Large text for important information and introductions"}),e.jsx(a,{size:"md",children:"Medium text for body content and primary information"}),e.jsx(a,{size:"sm",children:"Small text for secondary information and descriptions"}),e.jsx(a,{size:"xs",children:"Extra small text for captions and fine print"})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-lg",weight:"semibold",style:{marginBottom:"16px"},children:"Caption Helper Component"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(t,{variant:"text-md",children:"Main content with associated caption"}),e.jsx(u,{children:"This is a caption providing additional context"})]})]})]}),parameters:{docs:{description:{story:"Helper components (Heading, Text, Caption) providing semantic shortcuts for common typography patterns."}}}},g={render:()=>e.jsxs("div",{style:{maxWidth:"720px",padding:"40px",border:"1px solid #E5E7EB",borderRadius:"12px",backgroundColor:"#FAFAFA"},children:[e.jsx(r,{level:1,style:{marginBottom:"20px"},children:"The Outermost House by Henry Beston"}),e.jsx(a,{size:"xl",color:"secondary",style:{marginBottom:"24px"},children:"In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear."}),e.jsx(a,{size:"lg",style:{marginBottom:"24px"},children:"They are not brethren; they are not underlings; they are other nations, caught with ourselves in the net of life and time, fellow prisoners of the splendor and travail of the earth."}),e.jsx(a,{size:"md",style:{marginBottom:"16px"},children:"For the animal shall not be measured by man. In a world older and more complete than ours, they move finished and complete, gifted with the extensions of the senses we have lost or never attained."}),e.jsx(u,{children:'Excerpt from "The Outermost House" by Henry Beston, 1928'})]}),parameters:{docs:{description:{story:"Real-world example showing typography hierarchy in action with proper spacing and content flow."}}}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"display-md",weight:"semibold",style:{marginBottom:"24px"},children:"Typography Scale Overview"}),e.jsx(t,{variant:"text-lg",color:"secondary",style:{marginBottom:"32px"},children:"Complete typography system based on the Inter font family with carefully calculated sizes, line heights, and letter spacing optimized for both display and text usage."})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"48px"},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"text-sm",weight:"semibold",color:"secondary",style:{marginBottom:"16px",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Display Variants"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{variant:"display-2xl",weight:"semibold",children:"Display 2xl"}),e.jsx(t,{variant:"display-xl",weight:"semibold",children:"Display xl"}),e.jsx(t,{variant:"display-lg",weight:"semibold",children:"Display lg"}),e.jsx(t,{variant:"display-md",weight:"semibold",children:"Display md"}),e.jsx(t,{variant:"display-sm",weight:"semibold",children:"Display sm"}),e.jsx(t,{variant:"display-xs",weight:"semibold",children:"Display xs"})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-sm",weight:"semibold",color:"secondary",style:{marginBottom:"16px",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Text Variants"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{variant:"text-xl",weight:"medium",children:"Text xl"}),e.jsx(t,{variant:"text-lg",weight:"medium",children:"Text lg"}),e.jsx(t,{variant:"text-md",weight:"medium",children:"Text md (Base)"}),e.jsx(t,{variant:"text-sm",weight:"medium",children:"Text sm"}),e.jsx(t,{variant:"text-xs",weight:"medium",children:"Text xs"})]})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"text-sm",weight:"semibold",color:"secondary",style:{marginBottom:"16px",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Font Weights"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"24px"},children:[e.jsx(t,{variant:"text-lg",weight:"regular",children:"Regular (400)"}),e.jsx(t,{variant:"text-lg",weight:"medium",children:"Medium (500)"}),e.jsx(t,{variant:"text-lg",weight:"semibold",children:"Semibold (600)"}),e.jsx(t,{variant:"text-lg",weight:"bold",children:"Bold (700)"})]})]})]}),parameters:{docs:{description:{story:"Complete overview of the typography system showing all variants, sizes, and weights."}}}};var T,f,j;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'text-md',
    weight: 'regular',
    color: 'default'
  }
}`,...(j=(f=o.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var w,b,D;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <Typography variant="text-sm" weight="semibold" color="secondary" style={{
        marginBottom: '16px'
      }}>
          DISPLAY SCALE
        </Typography>
        
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <div>
            <Typography variant="text-xs" color="muted" style={{
            marginBottom: '8px'
          }}>
              Display 2xl · 72px / 90px · -2% letter spacing
            </Typography>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }}>
              <div>
                <Typography variant="display-2xl" weight="regular">Display 2xl</Typography>
                <Typography variant="text-sm" color="muted">Regular</Typography>
              </div>
              <div>
                <Typography variant="display-2xl" weight="medium">Display 2xl</Typography>
                <Typography variant="text-sm" color="muted">Medium</Typography>
              </div>
              <div>
                <Typography variant="display-2xl" weight="semibold">Display 2xl</Typography>
                <Typography variant="text-sm" color="muted">Semibold</Typography>
              </div>
              <div>
                <Typography variant="display-2xl" weight="bold">Display 2xl</Typography>
                <Typography variant="text-sm" color="muted">Bold</Typography>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="text-xs" color="muted" style={{
            marginBottom: '8px'
          }}>
              Display xl · 60px / 72px · -2% letter spacing
            </Typography>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }}>
              <div>
                <Typography variant="display-xl" weight="regular">Display xl</Typography>
                <Typography variant="text-sm" color="muted">Regular</Typography>
              </div>
              <div>
                <Typography variant="display-xl" weight="medium">Display xl</Typography>
                <Typography variant="text-sm" color="muted">Medium</Typography>
              </div>
              <div>
                <Typography variant="display-xl" weight="semibold">Display xl</Typography>
                <Typography variant="text-sm" color="muted">Semibold</Typography>
              </div>
              <div>
                <Typography variant="display-xl" weight="bold">Display xl</Typography>
                <Typography variant="text-sm" color="muted">Bold</Typography>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="text-xs" color="muted" style={{
            marginBottom: '8px'
          }}>
              Display lg · 48px / 60px · -2% letter spacing
            </Typography>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }}>
              <div>
                <Typography variant="display-lg" weight="regular">Display lg</Typography>
                <Typography variant="text-sm" color="muted">Regular</Typography>
              </div>
              <div>
                <Typography variant="display-lg" weight="medium">Display lg</Typography>
                <Typography variant="text-sm" color="muted">Medium</Typography>
              </div>
              <div>
                <Typography variant="display-lg" weight="semibold">Display lg</Typography>
                <Typography variant="text-sm" color="muted">Semibold</Typography>
              </div>
              <div>
                <Typography variant="display-lg" weight="bold">Display lg</Typography>
                <Typography variant="text-sm" color="muted">Bold</Typography>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="text-xs" color="muted" style={{
            marginBottom: '8px'
          }}>
              Display md · 36px / 44px · -2% letter spacing
            </Typography>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }}>
              <div>
                <Typography variant="display-md" weight="regular">Display md</Typography>
                <Typography variant="text-sm" color="muted">Regular</Typography>
              </div>
              <div>
                <Typography variant="display-md" weight="medium">Display md</Typography>
                <Typography variant="text-sm" color="muted">Medium</Typography>
              </div>
              <div>
                <Typography variant="display-md" weight="semibold">Display md</Typography>
                <Typography variant="text-sm" color="muted">Semibold</Typography>
              </div>
              <div>
                <Typography variant="display-md" weight="bold">Display md</Typography>
                <Typography variant="text-sm" color="muted">Bold</Typography>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="text-xs" color="muted" style={{
            marginBottom: '8px'
          }}>
              Display sm · 30px / 38px
            </Typography>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }}>
              <div>
                <Typography variant="display-sm" weight="regular">Display sm</Typography>
                <Typography variant="text-sm" color="muted">Regular</Typography>
              </div>
              <div>
                <Typography variant="display-sm" weight="medium">Display sm</Typography>
                <Typography variant="text-sm" color="muted">Medium</Typography>
              </div>
              <div>
                <Typography variant="display-sm" weight="semibold">Display sm</Typography>
                <Typography variant="text-sm" color="muted">Semibold</Typography>
              </div>
              <div>
                <Typography variant="display-sm" weight="bold">Display sm</Typography>
                <Typography variant="text-sm" color="muted">Bold</Typography>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="text-xs" color="muted" style={{
            marginBottom: '8px'
          }}>
              Display xs · 24px / 32px
            </Typography>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }}>
              <div>
                <Typography variant="display-xs" weight="regular">Display xs</Typography>
                <Typography variant="text-sm" color="muted">Regular</Typography>
              </div>
              <div>
                <Typography variant="display-xs" weight="medium">Display xs</Typography>
                <Typography variant="text-sm" color="muted">Medium</Typography>
              </div>
              <div>
                <Typography variant="display-xs" weight="semibold">Display xs</Typography>
                <Typography variant="text-sm" color="muted">Semibold</Typography>
              </div>
              <div>
                <Typography variant="display-xs" weight="bold">Display xs</Typography>
                <Typography variant="text-sm" color="muted">Bold</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Complete display typography scale showing all sizes from 2xl to xs with different font weights.'
      }
    }
  }
}`,...(D=(b=d.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var B,C,S;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <Typography variant="text-sm" weight="semibold" color="secondary" style={{
        marginBottom: '16px'
      }}>
          TEXT SCALE
        </Typography>
        
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <div>
            <Typography variant="text-xs" color="muted" style={{
            marginBottom: '8px'
          }}>
              Text xl · 20px / 30px
            </Typography>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }}>
              <div>
                <Typography variant="text-xl" weight="regular">Text xl</Typography>
                <Typography variant="text-sm" color="muted">Regular</Typography>
              </div>
              <div>
                <Typography variant="text-xl" weight="medium">Text xl</Typography>
                <Typography variant="text-sm" color="muted">Medium</Typography>
              </div>
              <div>
                <Typography variant="text-xl" weight="semibold">Text xl</Typography>
                <Typography variant="text-sm" color="muted">Semibold</Typography>
              </div>
              <div>
                <Typography variant="text-xl" weight="bold">Text xl</Typography>
                <Typography variant="text-sm" color="muted">Bold</Typography>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="text-xs" color="muted" style={{
            marginBottom: '8px'
          }}>
              Text lg · 18px / 28px
            </Typography>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }}>
              <div>
                <Typography variant="text-lg" weight="regular">Text lg</Typography>
                <Typography variant="text-sm" color="muted">Regular</Typography>
              </div>
              <div>
                <Typography variant="text-lg" weight="medium">Text lg</Typography>
                <Typography variant="text-sm" color="muted">Medium</Typography>
              </div>
              <div>
                <Typography variant="text-lg" weight="semibold">Text lg</Typography>
                <Typography variant="text-sm" color="muted">Semibold</Typography>
              </div>
              <div>
                <Typography variant="text-lg" weight="bold">Text lg</Typography>
                <Typography variant="text-sm" color="muted">Bold</Typography>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="text-xs" color="muted" style={{
            marginBottom: '8px'
          }}>
              Text md · 16px / 24px (Base font size)
            </Typography>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }}>
              <div>
                <Typography variant="text-md" weight="regular">Text md</Typography>
                <Typography variant="text-sm" color="muted">Regular</Typography>
              </div>
              <div>
                <Typography variant="text-md" weight="medium">Text md</Typography>
                <Typography variant="text-sm" color="muted">Medium</Typography>
              </div>
              <div>
                <Typography variant="text-md" weight="semibold">Text md</Typography>
                <Typography variant="text-sm" color="muted">Semibold</Typography>
              </div>
              <div>
                <Typography variant="text-md" weight="bold">Text md</Typography>
                <Typography variant="text-sm" color="muted">Bold</Typography>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="text-xs" color="muted" style={{
            marginBottom: '8px'
          }}>
              Text sm · 14px / 20px
            </Typography>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }}>
              <div>
                <Typography variant="text-sm" weight="regular">Text sm</Typography>
                <Typography variant="text-sm" color="muted">Regular</Typography>
              </div>
              <div>
                <Typography variant="text-sm" weight="medium">Text sm</Typography>
                <Typography variant="text-sm" color="muted">Medium</Typography>
              </div>
              <div>
                <Typography variant="text-sm" weight="semibold">Text sm</Typography>
                <Typography variant="text-sm" color="muted">Semibold</Typography>
              </div>
              <div>
                <Typography variant="text-sm" weight="bold">Text sm</Typography>
                <Typography variant="text-sm" color="muted">Bold</Typography>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="text-xs" color="muted" style={{
            marginBottom: '8px'
          }}>
              Text xs · 12px / 18px
            </Typography>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }}>
              <div>
                <Typography variant="text-xs" weight="regular">Text xs</Typography>
                <Typography variant="text-sm" color="muted">Regular</Typography>
              </div>
              <div>
                <Typography variant="text-xs" weight="medium">Text xs</Typography>
                <Typography variant="text-sm" color="muted">Medium</Typography>
              </div>
              <div>
                <Typography variant="text-xs" weight="semibold">Text xs</Typography>
                <Typography variant="text-sm" color="muted">Semibold</Typography>
              </div>
              <div>
                <Typography variant="text-xs" weight="bold">Text xs</Typography>
                <Typography variant="text-sm" color="muted">Bold</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Complete text typography scale showing all sizes from xl to xs with different font weights.'
      }
    }
  }
}`,...(S=(C=p.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var H,M,R;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <Typography variant="display-lg" weight="regular" style={{
        marginBottom: '16px'
      }}>
          Inter
        </Typography>
        <Typography variant="display-2xl" weight="regular" style={{
        marginBottom: '32px',
        fontSize: '112px',
        lineHeight: 'normal'
      }}>
          Ag
        </Typography>
        <Typography variant="display-lg" weight="regular" style={{
        marginBottom: '32px'
      }}>
          ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
          abcdefghijklmnopqrstuvwxyz<br />
          0123456789 !@#$%^&*()
        </Typography>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Typography specimen showing the Inter font family with alphabet, numbers, and special characters.'
      }
    }
  }
}`,...(R=(M=n.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var z,E,A;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <Typography variant="text-lg" weight="semibold" style={{
      marginBottom: '16px'
    }}>
        Typography Colors
      </Typography>
      
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <div>
          <Typography variant="text-lg" color="default">
            Default text color - Primary content and headings
          </Typography>
          <Typography variant="text-sm" color="muted">#181D27</Typography>
        </div>
        
        <div>
          <Typography variant="text-lg" color="secondary">
            Secondary text color - Supporting content and descriptions
          </Typography>
          <Typography variant="text-sm" color="muted">#535862</Typography>
        </div>
        
        <div>
          <Typography variant="text-lg" color="muted">
            Muted text color - Captions, labels, and meta information
          </Typography>
          <Typography variant="text-sm" color="muted">#9CA3AF</Typography>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Typography color variants for different content hierarchy and semantic meaning.'
      }
    }
  }
}`,...(A=(E=y.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var V,q,I;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <Typography variant="text-lg" weight="semibold" style={{
      marginBottom: '16px'
    }}>
        Text Alignment
      </Typography>
      
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      border: '1px solid #E5E7EB',
      padding: '24px',
      borderRadius: '8px'
    }}>
        <Typography variant="text-md" align="left">
          Left-aligned text (default) - Most common for body text and reading content
        </Typography>
        
        <Typography variant="text-md" align="center">
          Center-aligned text - Used for headings, hero content, and emphasis
        </Typography>
        
        <Typography variant="text-md" align="right">
          Right-aligned text - Used for numerical data, timestamps, and special layouts
        </Typography>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Typography alignment options for different layout requirements.'
      }
    }
  }
}`,...(I=(q=x.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var F,L,N;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <Typography variant="text-lg" weight="semibold" style={{
        marginBottom: '16px'
      }}>
          Heading Helper Component
        </Typography>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <Heading level={1}>Heading 1 - Main page title</Heading>
          <Heading level={2}>Heading 2 - Section title</Heading>
          <Heading level={3}>Heading 3 - Subsection title</Heading>
          <Heading level={4}>Heading 4 - Content group title</Heading>
          <Heading level={5}>Heading 5 - Sub-content title</Heading>
          <Heading level={6}>Heading 6 - Minor title</Heading>
        </div>
      </div>

      <div>
        <Typography variant="text-lg" weight="semibold" style={{
        marginBottom: '16px'
      }}>
          Text Helper Component
        </Typography>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <Text size="xl">Extra large text for emphasis and standout content</Text>
          <Text size="lg">Large text for important information and introductions</Text>
          <Text size="md">Medium text for body content and primary information</Text>
          <Text size="sm">Small text for secondary information and descriptions</Text>
          <Text size="xs">Extra small text for captions and fine print</Text>
        </div>
      </div>

      <div>
        <Typography variant="text-lg" weight="semibold" style={{
        marginBottom: '16px'
      }}>
          Caption Helper Component
        </Typography>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
          <Typography variant="text-md">Main content with associated caption</Typography>
          <Caption>This is a caption providing additional context</Caption>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Helper components (Heading, Text, Caption) providing semantic shortcuts for common typography patterns.'
      }
    }
  }
}`,...(N=(L=m.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var _,O,W;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '720px',
    padding: '40px',
    border: '1px solid #E5E7EB',
    borderRadius: '12px',
    backgroundColor: '#FAFAFA'
  }}>
      <Heading level={1} style={{
      marginBottom: '20px'
    }}>
        The Outermost House by Henry Beston
      </Heading>
      
      <Text size="xl" color="secondary" style={{
      marginBottom: '24px'
    }}>
        In a world older and more complete than ours they move finished and complete, 
        gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.
      </Text>
      
      <Text size="lg" style={{
      marginBottom: '24px'
    }}>
        They are not brethren; they are not underlings; they are other nations, caught with ourselves 
        in the net of life and time, fellow prisoners of the splendor and travail of the earth.
      </Text>
      
      <Text size="md" style={{
      marginBottom: '16px'
    }}>
        For the animal shall not be measured by man. In a world older and more complete than ours, 
        they move finished and complete, gifted with the extensions of the senses we have lost or never attained.
      </Text>
      
      <Caption>
        Excerpt from "The Outermost House" by Henry Beston, 1928
      </Caption>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Real-world example showing typography hierarchy in action with proper spacing and content flow.'
      }
    }
  }
}`,...(W=(O=g.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var $,k,P;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '48px'
  }}>
      <div>
        <Typography variant="display-md" weight="semibold" style={{
        marginBottom: '24px'
      }}>
          Typography Scale Overview
        </Typography>
        <Typography variant="text-lg" color="secondary" style={{
        marginBottom: '32px'
      }}>
          Complete typography system based on the Inter font family with carefully calculated sizes, 
          line heights, and letter spacing optimized for both display and text usage.
        </Typography>
      </div>

      <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '48px'
    }}>
        <div>
          <Typography variant="text-sm" weight="semibold" color="secondary" style={{
          marginBottom: '16px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
            Display Variants
          </Typography>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
            <Typography variant="display-2xl" weight="semibold">Display 2xl</Typography>
            <Typography variant="display-xl" weight="semibold">Display xl</Typography>
            <Typography variant="display-lg" weight="semibold">Display lg</Typography>
            <Typography variant="display-md" weight="semibold">Display md</Typography>
            <Typography variant="display-sm" weight="semibold">Display sm</Typography>
            <Typography variant="display-xs" weight="semibold">Display xs</Typography>
          </div>
        </div>

        <div>
          <Typography variant="text-sm" weight="semibold" color="secondary" style={{
          marginBottom: '16px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
            Text Variants
          </Typography>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
            <Typography variant="text-xl" weight="medium">Text xl</Typography>
            <Typography variant="text-lg" weight="medium">Text lg</Typography>
            <Typography variant="text-md" weight="medium">Text md (Base)</Typography>
            <Typography variant="text-sm" weight="medium">Text sm</Typography>
            <Typography variant="text-xs" weight="medium">Text xs</Typography>
          </div>
        </div>
      </div>

      <div>
        <Typography variant="text-sm" weight="semibold" color="secondary" style={{
        marginBottom: '16px',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
          Font Weights
        </Typography>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px'
      }}>
          <Typography variant="text-lg" weight="regular">Regular (400)</Typography>
          <Typography variant="text-lg" weight="medium">Medium (500)</Typography>
          <Typography variant="text-lg" weight="semibold">Semibold (600)</Typography>
          <Typography variant="text-lg" weight="bold">Bold (700)</Typography>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Complete overview of the typography system showing all variants, sizes, and weights.'
      }
    }
  }
}`,...(P=(k=h.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};const ee=["Default","DisplayScale","TextScale","FontSpecimen","Colors","TextAlignment","HelperComponents","RealWorldExample","AllVariants"];export{h as AllVariants,y as Colors,o as Default,d as DisplayScale,n as FontSpecimen,m as HelperComponents,g as RealWorldExample,x as TextAlignment,p as TextScale,ee as __namedExportsOrder,Z as default};
