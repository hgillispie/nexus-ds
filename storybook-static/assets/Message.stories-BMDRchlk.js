import{j as e}from"./jsx-runtime-DiklIkkE.js";import{M as t}from"./Message-D15PMbIE.js";import{r as se}from"./index-DRjF_FHU.js";const ce={title:"Components/Message",component:t,parameters:{layout:"centered",docs:{description:{component:"A comprehensive message component for chat interfaces supporting text messages, attachments, reactions, and typing indicators."}}},tags:["autodocs"],argTypes:{content:{description:"Message content text",control:"text"},type:{description:"Message type (sent by user or received)",control:"select",options:["sent","received"]},variant:{description:"Message variant",control:"select",options:["text","attachment","typing"]},sender:{description:"Sender information",control:"object"},timestamp:{description:"Message timestamp",control:"text"},showReactions:{description:"Show message reactions",control:"boolean"}}},n={name:"Phoenix Baker",avatar:"https://ui-avatars.com/api/?name=Phoenix+Baker&size=40&background=4f46e5&color=ffffff",isOnline:!0},i=[{emoji:"❤️",count:2,reacted:!0},{emoji:"👍",count:1,reacted:!1}],a=s=>{const[r,o]=se.useState(s.reactions||[]),ne=ae=>{console.log("Reaction clicked:",ae)};return e.jsx("div",{style:{width:"400px",padding:"20px"},children:e.jsx(t,{...s,reactions:r,onReactionClick:ne,onAttachmentClick:()=>console.log("Attachment clicked")})})},c={render:a,args:{content:"Hey Olivia, can you please review the latest design when you can?",type:"received",variant:"text",sender:n,timestamp:"Friday 2:20pm",showReactions:!1}},m={render:a,args:{content:"Sure thing, I'll have a look today.",type:"sent",variant:"text",sender:{name:"You"},timestamp:"Friday 2:20pm",showReactions:!1}},d={render:a,args:{content:"Hey Olivia, can you please review the latest design when you can?",type:"received",variant:"text",sender:n,timestamp:"Friday 2:20pm",showReactions:!0,reactions:i},parameters:{docs:{description:{story:"Message with emoji reactions and counts."}}}},p={render:a,args:{content:"Sure thing, I'll have a look today.",type:"sent",variant:"text",sender:{name:"You"},timestamp:"Friday 2:20pm",showReactions:!0,reactions:i}},l={render:a,args:{content:"",type:"received",variant:"attachment",sender:n,timestamp:"Friday 2:20pm",attachment:{name:"Latest design screenshot.jpg",size:"1.2 MB",type:"image",url:"#"},showReactions:!1},parameters:{docs:{description:{story:"Message with an image attachment."}}}},h={render:a,args:{content:"",type:"sent",variant:"attachment",sender:{name:"You"},timestamp:"Friday 2:20pm",attachment:{name:"Tech design requirements.pdf",size:"200 KB",type:"document",url:"#"},showReactions:!1},parameters:{docs:{description:{story:"Message with a document attachment."}}}},g={render:a,args:{content:"",type:"received",variant:"attachment",sender:n,timestamp:"Friday 2:20pm",attachment:{name:"Latest design screenshot.jpg",size:"1.2 MB",type:"image",url:"#"},showReactions:!0,reactions:i},parameters:{docs:{description:{story:"Attachment message with reactions."}}}},y={render:a,args:{content:"",type:"received",variant:"typing",sender:n,timestamp:""},parameters:{docs:{description:{story:"Typing indicator shown when someone is writing a message."}}}},u={render:a,args:{content:"This is a much longer message that demonstrates how the message component handles text wrapping and maintains readability across different lengths. It should wrap nicely within the bubble and maintain proper spacing.",type:"received",variant:"text",sender:n,timestamp:"Friday 2:20pm",showReactions:!1},parameters:{docs:{description:{story:"Example of how long messages are handled with text wrapping."}}}},v={render:a,args:{content:"Message from user without avatar image",type:"received",variant:"text",sender:{name:"John Doe",isOnline:!0},timestamp:"Friday 2:20pm",showReactions:!1},parameters:{docs:{description:{story:"Message from a user without an avatar image, showing placeholder initial."}}}},x={render:()=>{const s=o=>{console.log("Reaction clicked:",o)},r=()=>{console.log("Attachment clicked")};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"20px",maxWidth:"600px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600"},children:"Text Messages"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{content:"Hey Olivia, can you please review the latest design when you can?",type:"received",variant:"text",sender:n,timestamp:"Friday 2:20pm",showReactions:!1}),e.jsx(t,{content:"Sure thing, I'll have a look today.",type:"sent",variant:"text",sender:{name:"You"},timestamp:"Friday 2:20pm",showReactions:!1})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600"},children:"Messages with Reactions"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{content:"Hey Olivia, can you please review the latest design when you can?",type:"received",variant:"text",sender:n,timestamp:"Friday 2:20pm",showReactions:!0,reactions:i,onReactionClick:s}),e.jsx(t,{content:"Sure thing, I'll have a look today.",type:"sent",variant:"text",sender:{name:"You"},timestamp:"Friday 2:20pm",showReactions:!0,reactions:i,onReactionClick:s})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600"},children:"Attachments"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{content:"",type:"received",variant:"attachment",sender:n,timestamp:"Friday 2:20pm",attachment:{name:"Latest design screenshot.jpg",size:"1.2 MB",type:"image",url:"#"},showReactions:!0,reactions:i,onAttachmentClick:r,onReactionClick:s}),e.jsx(t,{content:"",type:"sent",variant:"attachment",sender:{name:"You"},timestamp:"Friday 2:20pm",attachment:{name:"Tech design requirements.pdf",size:"200 KB",type:"document",url:"#"},showReactions:!0,reactions:i,onAttachmentClick:r,onReactionClick:s})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600"},children:"Typing Indicator"}),e.jsx(t,{content:"",type:"received",variant:"typing",sender:n,timestamp:""})]})]})},parameters:{docs:{description:{story:"Comprehensive showcase of all message variants and states."}}}},f={render:()=>{const s=[{content:"Hey team, I've finished with the requirements doc!",type:"received",sender:{name:"Lana Steiner",avatar:"https://ui-avatars.com/api/?name=Lana+Steiner&size=40&background=10b981&color=ffffff",isOnline:!0},timestamp:"Thursday 11:40am"},{content:"",type:"received",variant:"attachment",sender:{name:"Lana Steiner",avatar:"https://ui-avatars.com/api/?name=Lana+Steiner&size=40&background=10b981&color=ffffff",isOnline:!0},timestamp:"Thursday 11:40am",attachment:{name:"Tech requirements.pdf",size:"1.2 MB",type:"document"}},{content:"Awesome! Thanks.",type:"sent",sender:{name:"You"},timestamp:"Thursday 11:41am"},{content:"Good timing — was just looking at this.",type:"received",sender:{name:"Demi Wilkinson",avatar:"https://ui-avatars.com/api/?name=Demi+Wilkinson&size=40&background=f59e0b&color=ffffff",isOnline:!0},timestamp:"Thursday 11:44am"}];return e.jsxs("div",{style:{maxWidth:"500px",padding:"20px"},children:[e.jsx("h3",{style:{marginBottom:"24px",fontSize:"16px",fontWeight:"600"},children:"Conversation Example"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:s.map((r,o)=>e.jsx(t,{...r},o))})]})},parameters:{docs:{description:{story:"Example of how messages work together in a conversation flow."}}}};var w,R,k;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: InteractiveMessage,
  args: {
    content: 'Hey Olivia, can you please review the latest design when you can?',
    type: 'received',
    variant: 'text',
    sender: sampleSender,
    timestamp: 'Friday 2:20pm',
    showReactions: false
  }
}`,...(k=(R=c.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var S,M,j;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: InteractiveMessage,
  args: {
    content: 'Sure thing, I\\'ll have a look today.',
    type: 'sent',
    variant: 'text',
    sender: {
      name: 'You'
    },
    timestamp: 'Friday 2:20pm',
    showReactions: false
  }
}`,...(j=(M=m.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var C,F,z;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: InteractiveMessage,
  args: {
    content: 'Hey Olivia, can you please review the latest design when you can?',
    type: 'received',
    variant: 'text',
    sender: sampleSender,
    timestamp: 'Friday 2:20pm',
    showReactions: true,
    reactions: sampleReactions
  },
  parameters: {
    docs: {
      description: {
        story: 'Message with emoji reactions and counts.'
      }
    }
  }
}`,...(z=(F=d.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var A,I,T;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: InteractiveMessage,
  args: {
    content: 'Sure thing, I\\'ll have a look today.',
    type: 'sent',
    variant: 'text',
    sender: {
      name: 'You'
    },
    timestamp: 'Friday 2:20pm',
    showReactions: true,
    reactions: sampleReactions
  }
}`,...(T=(I=p.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var W,b,B;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: InteractiveMessage,
  args: {
    content: '',
    type: 'received',
    variant: 'attachment',
    sender: sampleSender,
    timestamp: 'Friday 2:20pm',
    attachment: {
      name: 'Latest design screenshot.jpg',
      size: '1.2 MB',
      type: 'image',
      url: '#'
    },
    showReactions: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Message with an image attachment.'
      }
    }
  }
}`,...(B=(b=l.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var D,O,L;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: InteractiveMessage,
  args: {
    content: '',
    type: 'sent',
    variant: 'attachment',
    sender: {
      name: 'You'
    },
    timestamp: 'Friday 2:20pm',
    attachment: {
      name: 'Tech design requirements.pdf',
      size: '200 KB',
      type: 'document',
      url: '#'
    },
    showReactions: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Message with a document attachment.'
      }
    }
  }
}`,...(L=(O=h.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var Y,E,H;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: InteractiveMessage,
  args: {
    content: '',
    type: 'received',
    variant: 'attachment',
    sender: sampleSender,
    timestamp: 'Friday 2:20pm',
    attachment: {
      name: 'Latest design screenshot.jpg',
      size: '1.2 MB',
      type: 'image',
      url: '#'
    },
    showReactions: true,
    reactions: sampleReactions
  },
  parameters: {
    docs: {
      description: {
        story: 'Attachment message with reactions.'
      }
    }
  }
}`,...(H=(E=g.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var q,K,G;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: InteractiveMessage,
  args: {
    content: '',
    type: 'received',
    variant: 'typing',
    sender: sampleSender,
    timestamp: ''
  },
  parameters: {
    docs: {
      description: {
        story: 'Typing indicator shown when someone is writing a message.'
      }
    }
  }
}`,...(G=(K=y.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var J,P,V;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: InteractiveMessage,
  args: {
    content: 'This is a much longer message that demonstrates how the message component handles text wrapping and maintains readability across different lengths. It should wrap nicely within the bubble and maintain proper spacing.',
    type: 'received',
    variant: 'text',
    sender: sampleSender,
    timestamp: 'Friday 2:20pm',
    showReactions: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of how long messages are handled with text wrapping.'
      }
    }
  }
}`,...(V=(P=u.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var _,N,Q;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: InteractiveMessage,
  args: {
    content: 'Message from user without avatar image',
    type: 'received',
    variant: 'text',
    sender: {
      name: 'John Doe',
      isOnline: true
    },
    timestamp: 'Friday 2:20pm',
    showReactions: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Message from a user without an avatar image, showing placeholder initial.'
      }
    }
  }
}`,...(Q=(N=v.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,X,Z;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const handleReactionClick = (emoji: string) => {
      console.log('Reaction clicked:', emoji);
    };
    const handleAttachmentClick = () => {
      console.log('Attachment clicked');
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      padding: '20px',
      maxWidth: '600px'
    }}>
        <div>
          <h3 style={{
          marginBottom: '16px',
          fontSize: '16px',
          fontWeight: '600'
        }}>Text Messages</h3>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
            <Message content="Hey Olivia, can you please review the latest design when you can?" type="received" variant="text" sender={sampleSender} timestamp="Friday 2:20pm" showReactions={false} />
            <Message content="Sure thing, I'll have a look today." type="sent" variant="text" sender={{
            name: 'You'
          }} timestamp="Friday 2:20pm" showReactions={false} />
          </div>
        </div>

        <div>
          <h3 style={{
          marginBottom: '16px',
          fontSize: '16px',
          fontWeight: '600'
        }}>Messages with Reactions</h3>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
            <Message content="Hey Olivia, can you please review the latest design when you can?" type="received" variant="text" sender={sampleSender} timestamp="Friday 2:20pm" showReactions={true} reactions={sampleReactions} onReactionClick={handleReactionClick} />
            <Message content="Sure thing, I'll have a look today." type="sent" variant="text" sender={{
            name: 'You'
          }} timestamp="Friday 2:20pm" showReactions={true} reactions={sampleReactions} onReactionClick={handleReactionClick} />
          </div>
        </div>

        <div>
          <h3 style={{
          marginBottom: '16px',
          fontSize: '16px',
          fontWeight: '600'
        }}>Attachments</h3>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
            <Message content="" type="received" variant="attachment" sender={sampleSender} timestamp="Friday 2:20pm" attachment={{
            name: 'Latest design screenshot.jpg',
            size: '1.2 MB',
            type: 'image',
            url: '#'
          }} showReactions={true} reactions={sampleReactions} onAttachmentClick={handleAttachmentClick} onReactionClick={handleReactionClick} />
            <Message content="" type="sent" variant="attachment" sender={{
            name: 'You'
          }} timestamp="Friday 2:20pm" attachment={{
            name: 'Tech design requirements.pdf',
            size: '200 KB',
            type: 'document',
            url: '#'
          }} showReactions={true} reactions={sampleReactions} onAttachmentClick={handleAttachmentClick} onReactionClick={handleReactionClick} />
          </div>
        </div>

        <div>
          <h3 style={{
          marginBottom: '16px',
          fontSize: '16px',
          fontWeight: '600'
        }}>Typing Indicator</h3>
          <Message content="" type="received" variant="typing" sender={sampleSender} timestamp="" />
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all message variants and states.'
      }
    }
  }
}`,...(Z=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,te;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const conversation = [{
      content: 'Hey team, I\\'ve finished with the requirements doc!',
      type: 'received' as const,
      sender: {
        name: 'Lana Steiner',
        avatar: 'https://ui-avatars.com/api/?name=Lana+Steiner&size=40&background=10b981&color=ffffff',
        isOnline: true
      },
      timestamp: 'Thursday 11:40am'
    }, {
      content: '',
      type: 'received' as const,
      variant: 'attachment' as const,
      sender: {
        name: 'Lana Steiner',
        avatar: 'https://ui-avatars.com/api/?name=Lana+Steiner&size=40&background=10b981&color=ffffff',
        isOnline: true
      },
      timestamp: 'Thursday 11:40am',
      attachment: {
        name: 'Tech requirements.pdf',
        size: '1.2 MB',
        type: 'document' as const
      }
    }, {
      content: 'Awesome! Thanks.',
      type: 'sent' as const,
      sender: {
        name: 'You'
      },
      timestamp: 'Thursday 11:41am'
    }, {
      content: 'Good timing — was just looking at this.',
      type: 'received' as const,
      sender: {
        name: 'Demi Wilkinson',
        avatar: 'https://ui-avatars.com/api/?name=Demi+Wilkinson&size=40&background=f59e0b&color=ffffff',
        isOnline: true
      },
      timestamp: 'Thursday 11:44am'
    }];
    return <div style={{
      maxWidth: '500px',
      padding: '20px'
    }}>
        <h3 style={{
        marginBottom: '24px',
        fontSize: '16px',
        fontWeight: '600'
      }}>Conversation Example</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          {conversation.map((message, index) => <Message key={index} {...message} />)}
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of how messages work together in a conversation flow.'
      }
    }
  }
}`,...(te=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const me=["ReceivedMessage","SentMessage","ReceivedWithReactions","SentWithReactions","ReceivedImageAttachment","SentDocumentAttachment","AttachmentWithReactions","TypingIndicator","LongMessage","WithoutAvatar","AllVariants","ConversationExample"];export{x as AllVariants,g as AttachmentWithReactions,f as ConversationExample,u as LongMessage,l as ReceivedImageAttachment,c as ReceivedMessage,d as ReceivedWithReactions,h as SentDocumentAttachment,m as SentMessage,p as SentWithReactions,y as TypingIndicator,v as WithoutAvatar,me as __namedExportsOrder,ce as default};
