import{j as r}from"./jsx-runtime-DiklIkkE.js";import{B as e}from"./Button-BSJPiNnW.js";import"./index-DRjF_FHU.js";const oe={title:"Design System/Button",component:e,parameters:{layout:"centered",docs:{description:{component:"A versatile button component with comprehensive variant support for all design system needs."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["md","lg"],description:"Size of the button"},hierarchy:{control:"select",options:["primary","secondary-color","secondary-gray"],description:"Visual hierarchy and styling approach"},icon:{control:"select",options:["none","trailing","only"],description:"Icon configuration for the button"},destructive:{control:"boolean",description:"Whether this represents a destructive action"},state:{control:"select",options:["default","hover","focused","disabled"],description:"Visual state of the button (for demonstration)"},disabled:{control:"boolean",description:"Whether the button is disabled"},children:{control:"text",description:"Button text content"}},args:{size:"md",hierarchy:"primary",icon:"none",destructive:!1,state:"default",disabled:!1,children:"Button CTA"}},s={},o={args:{hierarchy:"primary"}},y={args:{hierarchy:"primary",size:"lg"}},m={args:{hierarchy:"primary",icon:"trailing"}},u={args:{hierarchy:"primary",icon:"only"}},t={args:{hierarchy:"secondary-color"}},h={args:{hierarchy:"secondary-color",size:"lg"}},g={args:{hierarchy:"secondary-color",icon:"trailing"}},S={args:{hierarchy:"secondary-color",icon:"only"}},n={args:{hierarchy:"secondary-gray"}},v={args:{hierarchy:"secondary-gray",size:"lg"}},f={args:{hierarchy:"secondary-gray",icon:"trailing"}},b={args:{hierarchy:"secondary-gray",icon:"only"}},c={args:{hierarchy:"primary",destructive:!0,children:"Delete"}},x={args:{hierarchy:"secondary-color",destructive:!0,children:"Delete"}},D={args:{hierarchy:"secondary-gray",destructive:!0,children:"Delete"}},i={render:()=>{const a={display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"16px",alignItems:"center",padding:"20px"};return r.jsxs("div",{style:a,children:[r.jsx(e,{state:"default",children:"Default"}),r.jsx(e,{state:"hover",children:"Hover"}),r.jsx(e,{state:"focused",children:"Focused"}),r.jsx(e,{disabled:!0,children:"Disabled"})]})},parameters:{docs:{description:{story:"Shows all interactive states of the button component."}}}},d={render:()=>{const a={display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px",alignItems:"center",padding:"20px"};return r.jsxs("div",{style:a,children:[r.jsx(e,{hierarchy:"primary",disabled:!0,children:"Primary Disabled"}),r.jsx(e,{hierarchy:"secondary-color",disabled:!0,children:"Secondary Disabled"}),r.jsx(e,{hierarchy:"secondary-gray",disabled:!0,children:"Gray Disabled"})]})}},l={render:()=>{const a={display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"16px",alignItems:"center",padding:"20px"};return r.jsxs("div",{style:a,children:[r.jsx(e,{size:"md",children:"Medium"}),r.jsx(e,{size:"lg",children:"Large"})]})}},p={render:()=>{const a={display:"grid",gridTemplateColumns:"repeat(6, 1fr)",gap:"12px",padding:"20px",maxWidth:"1200px"},Ur=["primary","secondary-color","secondary-gray"],Xr=["none","trailing","only"],Yr=[!1,!0],B=[];let Zr=0;return Ur.forEach($r=>{Yr.forEach(re=>{Xr.forEach(C=>{B.push(r.jsx(e,{hierarchy:$r,icon:C,destructive:re,size:"md",children:C==="only"?void 0:"Button"},Zr++))})})}),r.jsx("div",{style:a,children:B})},parameters:{docs:{description:{story:"Comprehensive display of all major button variants in the design system."}}}};var z,I,j,G,P;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:"{}",...(j=(I=s.parameters)==null?void 0:I.docs)==null?void 0:j.source},description:{story:"The default button configuration with primary styling.",...(P=(G=s.parameters)==null?void 0:G.docs)==null?void 0:P.description}}};var T,W,E,L,w;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    hierarchy: 'primary'
  }
}`,...(E=(W=o.parameters)==null?void 0:W.docs)==null?void 0:E.source},description:{story:"Primary buttons for main actions with different sizes and configurations.",...(w=(L=o.parameters)==null?void 0:L.docs)==null?void 0:w.description}}};var O,k,A;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    hierarchy: 'primary',
    size: 'lg'
  }
}`,...(A=(k=y.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var V,F,H;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    hierarchy: 'primary',
    icon: 'trailing'
  }
}`,...(H=(F=m.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var M,_,R;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    hierarchy: 'primary',
    icon: 'only'
  }
}`,...(R=(_=u.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var q,J,K,N,Q;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    hierarchy: 'secondary-color'
  }
}`,...(K=(J=t.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"Secondary color buttons for secondary actions with brand emphasis.",...(Q=(N=t.parameters)==null?void 0:N.docs)==null?void 0:Q.description}}};var U,X,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    hierarchy: 'secondary-color',
    size: 'lg'
  }
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,rr;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    hierarchy: 'secondary-color',
    icon: 'trailing'
  }
}`,...(rr=($=g.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};var er,ar,sr;S.parameters={...S.parameters,docs:{...(er=S.parameters)==null?void 0:er.docs,source:{originalSource:`{
  args: {
    hierarchy: 'secondary-color',
    icon: 'only'
  }
}`,...(sr=(ar=S.parameters)==null?void 0:ar.docs)==null?void 0:sr.source}}};var or,tr,nr,cr,ir;n.parameters={...n.parameters,docs:{...(or=n.parameters)==null?void 0:or.docs,source:{originalSource:`{
  args: {
    hierarchy: 'secondary-gray'
  }
}`,...(nr=(tr=n.parameters)==null?void 0:tr.docs)==null?void 0:nr.source},description:{story:"Secondary gray buttons for neutral secondary actions.",...(ir=(cr=n.parameters)==null?void 0:cr.docs)==null?void 0:ir.description}}};var dr,lr,pr;v.parameters={...v.parameters,docs:{...(dr=v.parameters)==null?void 0:dr.docs,source:{originalSource:`{
  args: {
    hierarchy: 'secondary-gray',
    size: 'lg'
  }
}`,...(pr=(lr=v.parameters)==null?void 0:lr.docs)==null?void 0:pr.source}}};var yr,mr,ur;f.parameters={...f.parameters,docs:{...(yr=f.parameters)==null?void 0:yr.docs,source:{originalSource:`{
  args: {
    hierarchy: 'secondary-gray',
    icon: 'trailing'
  }
}`,...(ur=(mr=f.parameters)==null?void 0:mr.docs)==null?void 0:ur.source}}};var hr,gr,Sr;b.parameters={...b.parameters,docs:{...(hr=b.parameters)==null?void 0:hr.docs,source:{originalSource:`{
  args: {
    hierarchy: 'secondary-gray',
    icon: 'only'
  }
}`,...(Sr=(gr=b.parameters)==null?void 0:gr.docs)==null?void 0:Sr.source}}};var vr,fr,br,xr,Dr;c.parameters={...c.parameters,docs:{...(vr=c.parameters)==null?void 0:vr.docs,source:{originalSource:`{
  args: {
    hierarchy: 'primary',
    destructive: true,
    children: 'Delete'
  }
}`,...(br=(fr=c.parameters)==null?void 0:fr.docs)==null?void 0:br.source},description:{story:"Destructive button variants for dangerous actions like delete.",...(Dr=(xr=c.parameters)==null?void 0:xr.docs)==null?void 0:Dr.description}}};var Br,Cr,zr;x.parameters={...x.parameters,docs:{...(Br=x.parameters)==null?void 0:Br.docs,source:{originalSource:`{
  args: {
    hierarchy: 'secondary-color',
    destructive: true,
    children: 'Delete'
  }
}`,...(zr=(Cr=x.parameters)==null?void 0:Cr.docs)==null?void 0:zr.source}}};var Ir,jr,Gr;D.parameters={...D.parameters,docs:{...(Ir=D.parameters)==null?void 0:Ir.docs,source:{originalSource:`{
  args: {
    hierarchy: 'secondary-gray',
    destructive: true,
    children: 'Delete'
  }
}`,...(Gr=(jr=D.parameters)==null?void 0:jr.docs)==null?void 0:Gr.source}}};var Pr,Tr,Wr,Er,Lr;i.parameters={...i.parameters,docs:{...(Pr=i.parameters)==null?void 0:Pr.docs,source:{originalSource:`{
  render: () => {
    const containerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '16px',
      alignItems: 'center',
      padding: '20px'
    };
    return <div style={containerStyle}>
        <Button state="default">Default</Button>
        <Button state="hover">Hover</Button>
        <Button state="focused">Focused</Button>
        <Button disabled>Disabled</Button>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows all interactive states of the button component.'
      }
    }
  }
}`,...(Wr=(Tr=i.parameters)==null?void 0:Tr.docs)==null?void 0:Wr.source},description:{story:"Interactive state demonstrations.",...(Lr=(Er=i.parameters)==null?void 0:Er.docs)==null?void 0:Lr.description}}};var wr,Or,kr,Ar,Vr;d.parameters={...d.parameters,docs:{...(wr=d.parameters)==null?void 0:wr.docs,source:{originalSource:`{
  render: () => {
    const containerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '16px',
      alignItems: 'center',
      padding: '20px'
    };
    return <div style={containerStyle}>
        <Button hierarchy="primary" disabled>Primary Disabled</Button>
        <Button hierarchy="secondary-color" disabled>Secondary Disabled</Button>
        <Button hierarchy="secondary-gray" disabled>Gray Disabled</Button>
      </div>;
  }
}`,...(kr=(Or=d.parameters)==null?void 0:Or.docs)==null?void 0:kr.source},description:{story:"Disabled state examples across all hierarchies.",...(Vr=(Ar=d.parameters)==null?void 0:Ar.docs)==null?void 0:Vr.description}}};var Fr,Hr,Mr,_r,Rr;l.parameters={...l.parameters,docs:{...(Fr=l.parameters)==null?void 0:Fr.docs,source:{originalSource:`{
  render: () => {
    const containerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '16px',
      alignItems: 'center',
      padding: '20px'
    };
    return <div style={containerStyle}>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>;
  }
}`,...(Mr=(Hr=l.parameters)==null?void 0:Hr.docs)==null?void 0:Mr.source},description:{story:"Size comparison across all hierarchies.",...(Rr=(_r=l.parameters)==null?void 0:_r.docs)==null?void 0:Rr.description}}};var qr,Jr,Kr,Nr,Qr;p.parameters={...p.parameters,docs:{...(qr=p.parameters)==null?void 0:qr.docs,source:{originalSource:`{
  render: () => {
    const containerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: '12px',
      padding: '20px',
      maxWidth: '1200px'
    };
    const sizes = ['md', 'lg'] as const;
    const hierarchies = ['primary', 'secondary-color', 'secondary-gray'] as const;
    const icons = ['none', 'trailing', 'only'] as const;
    const destructiveStates = [false, true] as const;
    const buttons = [];
    let key = 0;

    // Generate representative samples to avoid overwhelming display
    hierarchies.forEach(hierarchy => {
      destructiveStates.forEach(destructive => {
        icons.forEach(icon => {
          buttons.push(<Button key={key++} hierarchy={hierarchy} icon={icon} destructive={destructive} size="md">
              {icon === 'only' ? undefined : 'Button'}
            </Button>);
        });
      });
    });
    return <div style={containerStyle}>{buttons}</div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive display of all major button variants in the design system.'
      }
    }
  }
}`,...(Kr=(Jr=p.parameters)==null?void 0:Jr.docs)==null?void 0:Kr.source},description:{story:"All button variants in a comprehensive grid layout.",...(Qr=(Nr=p.parameters)==null?void 0:Nr.docs)==null?void 0:Qr.description}}};const te=["Default","Primary","PrimaryLarge","PrimaryWithIcon","PrimaryIconOnly","SecondaryColor","SecondaryColorLarge","SecondaryColorWithIcon","SecondaryColorIconOnly","SecondaryGray","SecondaryGrayLarge","SecondaryGrayWithIcon","SecondaryGrayIconOnly","DestructivePrimary","DestructiveSecondaryColor","DestructiveSecondaryGray","States","DisabledStates","SizeComparison","AllVariants"];export{p as AllVariants,s as Default,c as DestructivePrimary,x as DestructiveSecondaryColor,D as DestructiveSecondaryGray,d as DisabledStates,o as Primary,u as PrimaryIconOnly,y as PrimaryLarge,m as PrimaryWithIcon,t as SecondaryColor,S as SecondaryColorIconOnly,h as SecondaryColorLarge,g as SecondaryColorWithIcon,n as SecondaryGray,b as SecondaryGrayIconOnly,v as SecondaryGrayLarge,f as SecondaryGrayWithIcon,l as SizeComparison,i as States,te as __namedExportsOrder,oe as default};
