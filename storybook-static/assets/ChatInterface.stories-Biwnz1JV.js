import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as g}from"./index-DRjF_FHU.js";import{M as C}from"./Message-D15PMbIE.js";const ue=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{clipPath:"url(#clip0_send)",children:e.jsx("path",{d:"M18.3332 1.66663L9.1665 10.8333M18.3332 1.66663L12.4998 18.3333L9.1665 10.8333M18.3332 1.66663L1.6665 7.49996L9.1665 10.8333",stroke:"currentColor",strokeWidth:"1.67",strokeLinecap:"round",strokeLinejoin:"round"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_send",children:e.jsx("rect",{width:"20",height:"20",fill:"white"})})})]}),ge=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M15 5L5 15M5 5L15 15",stroke:"currentColor",strokeWidth:"1.66667",strokeLinecap:"round",strokeLinejoin:"round"})}),fe=({activeTab:s,participantCount:c,onTabChange:i})=>e.jsx("div",{className:"chat-tabs",children:e.jsxs("div",{className:"chat-tabs__container",children:[e.jsx("button",{className:`chat-tabs__tab ${s==="messages"?"chat-tabs__tab--active":""}`,onClick:()=>i("messages"),children:"Messages"}),e.jsxs("button",{className:`chat-tabs__tab ${s==="participants"?"chat-tabs__tab--active":""}`,onClick:()=>i("participants"),children:["Participants",c&&e.jsx("span",{className:"chat-tabs__badge",children:c})]})]})}),z=({placeholder:s,onSendMessage:c,disabled:i=!1})=>{const[p,l]=g.useState(""),h=n=>{n.preventDefault(),p.trim()&&!i&&(c(p.trim()),l(""))},m=n=>{n.key==="Enter"&&!n.shiftKey&&(n.preventDefault(),h(n))};return e.jsxs("form",{className:"message-input",onSubmit:h,children:[e.jsx("div",{className:"message-input__field",children:e.jsx("input",{type:"text",value:p,onChange:n=>l(n.target.value),onKeyPress:m,placeholder:s,disabled:i,className:"message-input__input"})}),e.jsx("button",{type:"submit",disabled:!p.trim()||i,className:"message-input__send","aria-label":"Send message",children:e.jsx(ue,{})})]})},W=({date:s})=>e.jsxs("div",{className:"date-divider",children:[e.jsx("div",{className:"date-divider__line"}),e.jsx("div",{className:"date-divider__text",children:s}),e.jsx("div",{className:"date-divider__line"})]}),B=({title:s="Group chat",messages:c=[],currentUser:i,participantCount:p,activeTab:l="messages",placeholder:h="Message",isLoading:m=!1,onSendMessage:n,onTabChange:w,onClose:b,className:u="",variant:y="inline",...f})=>{const x=g.useRef(null),j=g.useRef(null);g.useEffect(()=>{x.current&&x.current.scrollIntoView({behavior:"smooth"})},[c]);const T=a=>{n&&n(a)},le=a=>{w&&w(a)},he=["chat-interface",`chat-interface--${y}`,u].filter(Boolean).join(" "),O=c.reduce((a,t)=>{const d=new Date(t.timestamp).toDateString(),r=a[a.length-1];return r&&r.date===d?r.messages.push(t):a.push({date:d,messages:[t]}),a},[]),F=a=>{const t=new Date(a),d=new Date,r=new Date(d);return r.setDate(r.getDate()-1),t.toDateString()===d.toDateString()?"Today":t.toDateString()===r.toDateString()?"Yesterday":t.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})};return e.jsxs("div",{className:he,...f,children:[y==="panel"&&e.jsxs("div",{className:"chat-interface__panel",children:[e.jsxs("div",{className:"chat-interface__header",children:[e.jsxs("div",{className:"chat-interface__title-section",children:[e.jsx("h2",{className:"chat-interface__title",children:s}),b&&e.jsx("button",{className:"chat-interface__close",onClick:b,"aria-label":"Close chat",children:e.jsx(ge,{})})]}),e.jsx(fe,{activeTab:l,participantCount:p,onTabChange:le})]}),e.jsx("div",{className:"chat-interface__content",children:l==="messages"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"chat-interface__messages",ref:j,children:[O.map((a,t)=>e.jsxs("div",{className:"chat-interface__message-group",children:[t>0&&e.jsx(W,{date:F(a.date)}),a.messages.map((d,r)=>e.jsx(C,{...d},`${t}-${r}`))]},t)),m&&e.jsx(C,{content:"",type:"received",variant:"typing",sender:{name:"Someone",isOnline:!0},timestamp:""}),e.jsx("div",{ref:x})]}),e.jsx("div",{className:"chat-interface__footer",children:e.jsx(z,{placeholder:h,onSendMessage:T,disabled:m})})]}):e.jsx("div",{className:"chat-interface__participants",children:e.jsx("p",{children:"Participants view would go here"})})})]}),y==="inline"&&e.jsxs("div",{className:"chat-interface__inline",children:[e.jsxs("div",{className:"chat-interface__messages",ref:j,children:[O.map((a,t)=>e.jsxs("div",{className:"chat-interface__message-group",children:[t>0&&e.jsx(W,{date:F(a.date)}),a.messages.map((d,r)=>e.jsx(C,{...d},`${t}-${r}`))]},t)),m&&e.jsx(C,{content:"",type:"received",variant:"typing",sender:{name:"Someone",isOnline:!0},timestamp:""}),e.jsx("div",{ref:x})]}),e.jsx("div",{className:"chat-interface__footer",children:e.jsx(z,{placeholder:h,onSendMessage:T,disabled:m})})]})]})};B.__docgenInfo={description:"",methods:[],displayName:"ChatInterface",props:{title:{required:!1,tsType:{name:"string"},description:"Chat title",defaultValue:{value:"'Group chat'",computed:!1}},messages:{required:!1,tsType:{name:"Array",elements:[{name:"MessageProps"}],raw:"MessageProps[]"},description:"List of messages",defaultValue:{value:"[]",computed:!1}},currentUser:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  name: string;
  avatar?: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"avatar",value:{name:"string",required:!1}}]}},description:"Current user info for sent messages"},participantCount:{required:!1,tsType:{name:"number"},description:"Show participants count"},activeTab:{required:!1,tsType:{name:"union",raw:"'messages' | 'participants'",elements:[{name:"literal",value:"'messages'"},{name:"literal",value:"'participants'"}]},description:"Active tab",defaultValue:{value:"'messages'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text for message input",defaultValue:{value:"'Message'",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},onSendMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(message: string) => void",signature:{arguments:[{type:{name:"string"},name:"message"}],return:{name:"void"}}},description:"Event handlers"},onTabChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(tab: 'messages' | 'participants') => void",signature:{arguments:[{type:{name:"union",raw:"'messages' | 'participants'",elements:[{name:"literal",value:"'messages'"},{name:"literal",value:"'participants'"}]},name:"tab"}],return:{name:"void"}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'inline' | 'panel'",elements:[{name:"literal",value:"'inline'"},{name:"literal",value:"'panel'"}]},description:"Show as slide-out panel",defaultValue:{value:"'inline'",computed:!1}}}};const be={title:"Components/ChatInterface",component:B,parameters:{layout:"centered",docs:{description:{component:"A complete chat interface component with message history, tabs, and message composition. Supports both inline and panel variants."}}},tags:["autodocs"],argTypes:{title:{description:"Chat title displayed in header",control:"text"},variant:{description:"Display variant",control:"select",options:["inline","panel"]},activeTab:{description:"Currently active tab",control:"select",options:["messages","participants"]},participantCount:{description:"Number of participants",control:"number"},placeholder:{description:"Message input placeholder text",control:"text"},isLoading:{description:"Show typing indicator",control:"boolean"}}},v=[{content:"Thanks everyone! Almost there.",type:"received",sender:{name:"Orlando Diggs",avatar:"https://ui-avatars.com/api/?name=Orlando+Diggs&size=40&background=3b82f6&color=ffffff",isOnline:!0},timestamp:"Thursday 10:16am"},{content:"Hey team, I've finished with the requirements doc!",type:"received",sender:{name:"Lana Steiner",avatar:"https://ui-avatars.com/api/?name=Lana+Steiner&size=40&background=10b981&color=ffffff",isOnline:!0},timestamp:"Thursday 11:40am"},{content:"",type:"received",variant:"attachment",sender:{name:"Lana Steiner",avatar:"https://ui-avatars.com/api/?name=Lana+Steiner&size=40&background=10b981&color=ffffff",isOnline:!0},timestamp:"Thursday 11:40am",attachment:{name:"Tech requirements.pdf",size:"1.2 MB",type:"document"}},{content:"Awesome! Thanks.",type:"sent",sender:{name:"You"},timestamp:"Thursday 11:41am"},{content:"Good timing — was just looking at this.",type:"received",sender:{name:"Demi Wilkinson",avatar:"https://ui-avatars.com/api/?name=Demi+Wilkinson&size=40&background=f59e0b&color=ffffff",isOnline:!0},timestamp:"Thursday 11:44am"},{content:"Hey Olivia, can you please review the latest design when you can?",type:"received",sender:{name:"Phoenix Baker",avatar:"https://ui-avatars.com/api/?name=Phoenix+Baker&size=40&background=4f46e5&color=ffffff",isOnline:!0},timestamp:"Friday 2:20pm"},{content:"Sure thing, I'll have a look today.",type:"sent",sender:{name:"You"},timestamp:"Friday 2:20pm"}],ve=[{content:"Hey Olivia, can you please review the latest design when you can?",type:"received",sender:{name:"Phoenix Baker",avatar:"https://ui-avatars.com/api/?name=Phoenix+Baker&size=40&background=4f46e5&color=ffffff",isOnline:!0},timestamp:"Friday 2:20pm",showReactions:!0,reactions:[{emoji:"❤️",count:1,reacted:!1},{emoji:"👍",count:2,reacted:!0}]},{content:"",type:"received",variant:"attachment",sender:{name:"Phoenix Baker",avatar:"https://ui-avatars.com/api/?name=Phoenix+Baker&size=40&background=4f46e5&color=ffffff",isOnline:!0},timestamp:"Friday 2:20pm",attachment:{name:"Latest design screenshot.jpg",size:"1.2 MB",type:"image"},showReactions:!0,reactions:[{emoji:"❤️",count:1,reacted:!1},{emoji:"👍",count:2,reacted:!0}]},{content:"Sure thing, I'll have a look today.",type:"sent",sender:{name:"You"},timestamp:"Friday 2:20pm",showReactions:!0,reactions:[{emoji:"❤️",count:1,reacted:!1},{emoji:"👍",count:2,reacted:!0}]},{content:"",type:"sent",variant:"attachment",sender:{name:"You"},timestamp:"Friday 2:20pm",attachment:{name:"Tech design requirements.pdf",size:"200 KB",type:"document"},showReactions:!0,reactions:[{emoji:"❤️",count:1,reacted:!1},{emoji:"👍",count:2,reacted:!0}]}],o=s=>{const[c,i]=g.useState(s.messages||[]),[p,l]=g.useState(s.activeTab||"messages"),[h,m]=g.useState(!1),n=u=>{console.log("Sending message:",u);const y={content:u,type:"sent",sender:{name:"You"},timestamp:new Date().toLocaleString("en-US",{weekday:"short",hour:"numeric",minute:"2-digit",hour12:!0})};i(f=>[...f,y]),m(!0),setTimeout(()=>{m(!1);const f=["Thanks for the message!","Got it, will take a look.","Sounds good to me.","Perfect, thanks for sharing."],j={content:f[Math.floor(Math.random()*f.length)],type:"received",sender:{name:"Phoenix Baker",avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",isOnline:!0},timestamp:new Date().toLocaleString("en-US",{weekday:"short",hour:"numeric",minute:"2-digit",hour12:!0})};i(T=>[...T,j])},2e3)},w=u=>{l(u),console.log("Tab changed to:",u)},b=()=>{console.log("Chat closed")};return e.jsx(B,{...s,messages:c,activeTab:p,isLoading:h,onSendMessage:n,onTabChange:w,onClose:b})},S={render:o,args:{title:"Team Chat",messages:v,variant:"inline",activeTab:"messages",participantCount:4,placeholder:"Type a message..."},parameters:{docs:{description:{story:"Inline chat interface suitable for embedding in pages."}}}},_={render:o,args:{title:"Group chat",messages:v,variant:"panel",activeTab:"messages",participantCount:2,placeholder:"Message"},parameters:{docs:{description:{story:"Panel chat interface designed as a slide-out sidebar."}}}},k={render:o,args:{title:"Design Team",messages:ve,variant:"inline",activeTab:"messages",participantCount:3,placeholder:"Type a message..."},parameters:{docs:{description:{story:"Chat interface showing messages with emoji reactions."}}}},M={render:o,args:{title:"Project Discussion",messages:v,variant:"panel",activeTab:"participants",participantCount:5,placeholder:"Message"},parameters:{docs:{description:{story:"Chat interface with participants tab active."}}}},I={render:o,args:{title:"New Chat",messages:[],variant:"inline",activeTab:"messages",participantCount:2,placeholder:"Start the conversation..."},parameters:{docs:{description:{story:"Empty chat interface ready for the first message."}}}},N={render:o,args:{title:"Support Chat",messages:[{content:"Hello, I need help with my account.",type:"sent",sender:{name:"You"},timestamp:"2:15pm"}],variant:"inline",activeTab:"messages",isLoading:!0,placeholder:"Type a message..."},parameters:{docs:{description:{story:"Chat interface showing typing indicator while someone is responding."}}}},D={render:o,args:{title:"Team Standup",messages:[...v,{content:"How are we doing on the timeline?",type:"received",sender:{name:"Sarah Johnson",avatar:"https://ui-avatars.com/api/?name=Sarah+Johnson&size=40&background=ec4899&color=ffffff",isOnline:!0},timestamp:"Friday 3:15pm"},{content:"We're on track. Should have everything ready by Monday.",type:"sent",sender:{name:"You"},timestamp:"Friday 3:16pm"},{content:"Excellent! Let me know if you need any help.",type:"received",sender:{name:"Sarah Johnson",avatar:"https://ui-avatars.com/api/?name=Sarah+Johnson&size=40&background=ec4899&color=ffffff",isOnline:!0},timestamp:"Friday 3:17pm"},{content:"Will do, thanks!",type:"sent",sender:{name:"You"},timestamp:"Friday 3:17pm"}],variant:"inline",activeTab:"messages",participantCount:6,placeholder:"Type a message..."},parameters:{docs:{description:{story:"Chat interface with a longer conversation showing scrolling behavior."}}}},L={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"40px",padding:"20px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600"},children:"Inline Variant"}),e.jsx(o,{title:"Team Chat",messages:v.slice(0,4),variant:"inline",activeTab:"messages",participantCount:4,placeholder:"Type a message..."})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600"},children:"Panel Variant"}),e.jsx("div",{style:{transform:"scale(0.8)",transformOrigin:"top left"},children:e.jsx(o,{title:"Group chat",messages:v.slice(0,4),variant:"panel",activeTab:"messages",participantCount:2,placeholder:"Message"})})]})]}),parameters:{docs:{description:{story:"Side-by-side comparison of inline and panel chat variants."}}}},P={render:()=>{const s=[{content:"Welcome to our chat! 👋",type:"received",sender:{name:"Bot Assistant",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",isOnline:!0},timestamp:"Today 10:00am"},{content:"Here are some features you can try:",type:"received",sender:{name:"Bot Assistant",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",isOnline:!0},timestamp:"Today 10:00am"},{content:"",type:"received",variant:"attachment",sender:{name:"Bot Assistant",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",isOnline:!0},timestamp:"Today 10:01am",attachment:{name:"Feature_Guide.pdf",size:"500 KB",type:"document"},showReactions:!0,reactions:[{emoji:"📖",count:3,reacted:!0},{emoji:"👍",count:5,reacted:!1}]},{content:"Thanks! This looks comprehensive.",type:"sent",sender:{name:"You"},timestamp:"Today 10:02am",showReactions:!0,reactions:[{emoji:"❤️",count:1,reacted:!1}]}];return e.jsxs("div",{style:{maxWidth:"600px"},children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600"},children:"Feature Showcase"}),e.jsx(o,{title:"Feature Demo",messages:s,variant:"inline",activeTab:"messages",participantCount:2,placeholder:"Try sending a message..."})]})},parameters:{docs:{description:{story:"Comprehensive showcase of all chat features including attachments, reactions, and interactive messaging."}}}};var q,R,V;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: InteractiveChatInterface,
  args: {
    title: 'Team Chat',
    messages: sampleMessages,
    variant: 'inline',
    activeTab: 'messages',
    participantCount: 4,
    placeholder: 'Type a message...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Inline chat interface suitable for embedding in pages.'
      }
    }
  }
}`,...(V=(R=S.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var Y,A,E;_.parameters={..._.parameters,docs:{...(Y=_.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: InteractiveChatInterface,
  args: {
    title: 'Group chat',
    messages: sampleMessages,
    variant: 'panel',
    activeTab: 'messages',
    participantCount: 2,
    placeholder: 'Message'
  },
  parameters: {
    docs: {
      description: {
        story: 'Panel chat interface designed as a slide-out sidebar.'
      }
    }
  }
}`,...(E=(A=_.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var G,H,J;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: InteractiveChatInterface,
  args: {
    title: 'Design Team',
    messages: sampleMessagesWithReactions,
    variant: 'inline',
    activeTab: 'messages',
    participantCount: 3,
    placeholder: 'Type a message...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat interface showing messages with emoji reactions.'
      }
    }
  }
}`,...(J=(H=k.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var $,K,U;M.parameters={...M.parameters,docs:{...($=M.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: InteractiveChatInterface,
  args: {
    title: 'Project Discussion',
    messages: sampleMessages,
    variant: 'panel',
    activeTab: 'participants',
    participantCount: 5,
    placeholder: 'Message'
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat interface with participants tab active.'
      }
    }
  }
}`,...(U=(K=M.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Q,X,Z;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: InteractiveChatInterface,
  args: {
    title: 'New Chat',
    messages: [],
    variant: 'inline',
    activeTab: 'messages',
    participantCount: 2,
    placeholder: 'Start the conversation...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty chat interface ready for the first message.'
      }
    }
  }
}`,...(Z=(X=I.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,te;N.parameters={...N.parameters,docs:{...(ee=N.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: InteractiveChatInterface,
  args: {
    title: 'Support Chat',
    messages: [{
      content: 'Hello, I need help with my account.',
      type: 'sent',
      sender: {
        name: 'You'
      },
      timestamp: '2:15pm'
    }],
    variant: 'inline',
    activeTab: 'messages',
    isLoading: true,
    placeholder: 'Type a message...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat interface showing typing indicator while someone is responding.'
      }
    }
  }
}`,...(te=(ae=N.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,ne,re;D.parameters={...D.parameters,docs:{...(se=D.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: InteractiveChatInterface,
  args: {
    title: 'Team Standup',
    messages: [...sampleMessages, {
      content: 'How are we doing on the timeline?',
      type: 'received',
      sender: {
        name: 'Sarah Johnson',
        avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&size=40&background=ec4899&color=ffffff',
        isOnline: true
      },
      timestamp: 'Friday 3:15pm'
    }, {
      content: 'We\\'re on track. Should have everything ready by Monday.',
      type: 'sent',
      sender: {
        name: 'You'
      },
      timestamp: 'Friday 3:16pm'
    }, {
      content: 'Excellent! Let me know if you need any help.',
      type: 'received',
      sender: {
        name: 'Sarah Johnson',
        avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&size=40&background=ec4899&color=ffffff',
        isOnline: true
      },
      timestamp: 'Friday 3:17pm'
    }, {
      content: 'Will do, thanks!',
      type: 'sent',
      sender: {
        name: 'You'
      },
      timestamp: 'Friday 3:17pm'
    }],
    variant: 'inline',
    activeTab: 'messages',
    participantCount: 6,
    placeholder: 'Type a message...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat interface with a longer conversation showing scrolling behavior.'
      }
    }
  }
}`,...(re=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ie,oe,ce;L.parameters={...L.parameters,docs:{...(ie=L.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '40px',
      padding: '20px'
    }}>
        <div>
          <h3 style={{
          marginBottom: '16px',
          fontSize: '16px',
          fontWeight: '600'
        }}>Inline Variant</h3>
          <InteractiveChatInterface title="Team Chat" messages={sampleMessages.slice(0, 4)} variant="inline" activeTab="messages" participantCount={4} placeholder="Type a message..." />
        </div>
        
        <div>
          <h3 style={{
          marginBottom: '16px',
          fontSize: '16px',
          fontWeight: '600'
        }}>Panel Variant</h3>
          <div style={{
          transform: 'scale(0.8)',
          transformOrigin: 'top left'
        }}>
            <InteractiveChatInterface title="Group chat" messages={sampleMessages.slice(0, 4)} variant="panel" activeTab="messages" participantCount={2} placeholder="Message" />
          </div>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison of inline and panel chat variants.'
      }
    }
  }
}`,...(ce=(oe=L.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var me,de,pe;P.parameters={...P.parameters,docs:{...(me=P.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const showcaseMessages: MessageProps[] = [{
      content: 'Welcome to our chat! 👋',
      type: 'received',
      sender: {
        name: 'Bot Assistant',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
        isOnline: true
      },
      timestamp: 'Today 10:00am'
    }, {
      content: 'Here are some features you can try:',
      type: 'received',
      sender: {
        name: 'Bot Assistant',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
        isOnline: true
      },
      timestamp: 'Today 10:00am'
    }, {
      content: '',
      type: 'received',
      variant: 'attachment',
      sender: {
        name: 'Bot Assistant',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
        isOnline: true
      },
      timestamp: 'Today 10:01am',
      attachment: {
        name: 'Feature_Guide.pdf',
        size: '500 KB',
        type: 'document'
      },
      showReactions: true,
      reactions: [{
        emoji: '📖',
        count: 3,
        reacted: true
      }, {
        emoji: '👍',
        count: 5,
        reacted: false
      }]
    }, {
      content: 'Thanks! This looks comprehensive.',
      type: 'sent',
      sender: {
        name: 'You'
      },
      timestamp: 'Today 10:02am',
      showReactions: true,
      reactions: [{
        emoji: '❤️',
        count: 1,
        reacted: false
      }]
    }];
    return <div style={{
      maxWidth: '600px'
    }}>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '16px',
        fontWeight: '600'
      }}>Feature Showcase</h3>
        <InteractiveChatInterface title="Feature Demo" messages={showcaseMessages} variant="inline" activeTab="messages" participantCount={2} placeholder="Try sending a message..." />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all chat features including attachments, reactions, and interactive messaging.'
      }
    }
  }
}`,...(pe=(de=P.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};const je=["InlineChat","PanelChat","WithReactions","ParticipantsTab","EmptyChat","LoadingChat","LongConversation","VariantComparison","FeatureShowcase"];export{I as EmptyChat,P as FeatureShowcase,S as InlineChat,N as LoadingChat,D as LongConversation,_ as PanelChat,M as ParticipantsTab,L as VariantComparison,k as WithReactions,je as __namedExportsOrder,be as default};
