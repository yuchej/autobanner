const NS = "autobanner";
const ROLE = "role";
const CATALOG = [
  ["Website","jumbotron-desktop","Jumbotron (Desktop)",2600,180,[24,24,130,130],["1col-t-side-center","1col-t-side-center-logo","2col-tc-side","2col-tc-side-logo"]],
  ["Website","jumbotron-mobile","Jumbotron (Mobile)",680,180,[25,30,50,50],["1col-hc","1col-hsc","1col-hs","1col-lhc"]],
  ["Website","sg-carousel","SG Homepage Carousel | Listing Side Tile | Article Side Tile | SG Weekend Tile | CN Tile",720,240,[25,25,85,85],["2col-hc","1col-hsc","1col-hs","1col-lhc","1col-hc","2col-tc"]],
  ["Website","sg-topic","SG Homepage Topic Highlight",1200,800,[100,100,150,150],["1col-hs","1col-hsc","1col-lhs","1col-lhsc"]],
  ["App","in-app-banner","In App Banner",1000,265,[25,30,50,50],["1col-lh","1col-h","1col-hs","1col-hc","1col-hsc","2col-tc","2col-ltl","2col-ltc"]],
  ["App","in-app-message","In App Message",600,900,[60,60,40,40],["1col-hs","1col-lhs","1col-hsc","1col-lhsc"]],
  ["Traffic Driver","leaderboard","Leaderboard",1456,180,[25,25,25,25],["headline-only","headline-subhead","headline-cta","headline-subhead-cta","logo-headline","logo-headline-subhead","logo-headline-cta","logo-headline-subhead-cta"]],
  ["Traffic Driver","mobile-leaderboard","Mobile Leaderboard",640,100,[16,16,20,20],["logo-only","headline-only","logo-headline","headline-cta","logo-cta"]],
  ["Traffic Driver","imu","IMU",600,500,[40,40,40,40],["logo-headline-subhead-cta","logo-headline-cta","logo-cta","logo-only","headline-subhead-cta","headline-cta","cta-only","headline-subhead","headline-only"]],
  ["Social Media","fb-cover","FB Cover",851,315,[38,75,105.5,105.5],["1col-hs"]],
  ["Social Media","fb-cover-brand-logo","FB Cover with Brand Logo",851,315,[38,75,105.5,105.5],["1col-logo-hs"]],
  ["Social Media","youtube-cover","YouTube Cover",2560,1440,[560,560,560,560],["1col-hs"]],
  ["Social Media","youtube-cover-2-col","YouTube Cover with Brand Logo",2560,1440,[560,560,560,560],["2col-hs-logo"]],
  ["Social Media","x-header","X Header",1500,500,[40,40,500,40],["1col-hs"]],
  ["Social Media","x-header-2-col","X Header with Brand Logo",1500,500,[40,40,500,40],["2col-hs-logo"]],
  ["Social Media","ig-post","IG Post",1080,1350,[60,175,60,60],["1col-hs"]],
  ["Social Media","ig-post-brand-logo","IG Post with Brand Logo",1080,1350,[60,175,60,60],["1col-logo-hs"]],
  ["Social Media","ig-story","IG Story",1080,1920,[250,250,60,60],["1col-hsc"]],
  ["Social Media","ig-story-brand-logo","IG Story with Brand Logo",1080,1920,[250,250,60,60],["1col-logo-hsc"]],
  ["Social Media","ig-link-bio","IG Link in Bio",860,490,[40,40,40,40],["1col-hs"]],
  ["Social Media","ig-link-bio-brand-logo","IG Link in Bio with Brand Logo",860,490,[40,40,40,40],["1col-logo-hs"]],
  ["Paid Media","paid-meta-square","META — Square",1080,1080,[54,54,54,54],["headline-subhead","logo-headline-subhead","headline-subhead-cta","logo-headline-subhead-cta"]],
  ["Paid Media","paid-meta-portrait","META — Portrait",1080,1920,[250,300,54,54],["headline-subhead","logo-headline-subhead","headline-subhead-cta","logo-headline-subhead-cta"]],
  ["Paid Media","paid-meta-landscape","META — Landscape",1200,628,[31,31,60,60],["headline-subhead","logo-headline-subhead","headline-subhead-cta","logo-headline-subhead-cta"]],
  ["Paid Media","paid-google-demand-gen-portrait","Google Demand Gen — Portrait",960,1200,[60,60,48,48],["headline-subhead","logo-headline-subhead","headline-subhead-cta","logo-headline-subhead-cta"]],
  ["Paid Media","paid-social-landscape","WA / TG / X / WX / Weibo — Landscape",1280,720,[36,36,64,64],["headline-subhead","logo-headline-subhead","headline-subhead-cta","logo-headline-subhead-cta"]],
  ["Video Graphics","article-cover","Article Cover",1200,800,[120,120,110,110],["article-left","article-right"]],
  ["Video Graphics","youtube-video-cover","Youtube Cover",960,540,[0,75,90,90],["youtube-left-quote","youtube-right-quote"]],
  ["Video Graphics","shorts-cover","Vertical Youtube, Instagram, Tiktok Shorts Cover",1080,1920,[400,400,90,90],["default-text","quote-text"]]
];
const DESIGN_GUIDANCE = {
  "paid-meta-square":"Keep key text/logo within ~90% central area",
  "paid-meta-portrait":"Keep key content away from top ~250 px and bottom ~300 px",
  "paid-meta-landscape":"Keep important content within central ~90%",
  "paid-google-demand-gen-portrait":"Keep important content within central ~90%",
  "paid-social-landscape":"Keep key content away from edges"
};
const TRAFFIC = {
  leaderboard:{layout:{"headline-only":"1_col","headline-subhead":"1_col","headline-cta":"2_col","headline-subhead-cta":"2_col","logo-headline":"2_col","logo-headline-subhead":"2_col","logo-headline-cta":"3_col","logo-headline-subhead-cta":"3_col"},font:{headline:55,subhead:36,cta:30},geo:{
    "headline-only":{headline:[508,14,440,157]},"headline-subhead":{headline:[301,14,440,157],subhead:[774,41,288,103]},"headline-cta":{headline:[326,11,440,157],cta:[908,52,200,76]},"headline-subhead-cta":{headline:[223,11,440,157],subhead:[696,39,288,103],cta:[1074,52,200,76]},"logo-headline":{logo:[286,25,350,130],headline:[674,11,440,157]},"logo-headline-subhead":{logo:[144,25,350,130],headline:[497,14,440,157],subhead:[970,41,288,103]},"logo-headline-cta":{logo:[130,25,350,130],headline:[518,11,440,157],cta:[1094,52,200,76]},"logo-headline-subhead-cta":{logo:[42,25,350,130],headline:[393,11,440,157],subhead:[866,39,288,103],cta:[1190,52,200,76]}}},
  "mobile-leaderboard":{layout:{"logo-only":"1_col","headline-only":"1_col","logo-headline":"2_col","headline-cta":"2_col","logo-cta":"2_col"},font:{headline:22,cta:15},geo:{"logo-only":{logo:[203,22.5,243,56]},"headline-only":{headline:[161,40,344,21]},"logo-headline":{logo:[25,24.5,206,47.5],headline:[252,37.5,344,21]},"headline-cta":{headline:[53,37.5,344,21],cta:[412,28.5,200,38]},"logo-cta":{logo:[76,22,243,56],cta:[374,28.5,200,38]}}},
  imu:{layout:{},font:{headline:50,subhead:36,cta:28},geo:{"logo-headline-subhead-cta":{logo:[158,97,284,130],headline:[100,204,400,143],subhead:[156,286,288,103],cta:[207,373,186,71]},"logo-headline-cta":{logo:[158,97,284,130],headline:[100,251,400,143],cta:[207,373,186,71]},"logo-cta":{logo:[158,97,284,130],cta:[207,373,186,71]},"logo-only":{logo:[144,168,313,144]},"headline-subhead-cta":{headline:[100,204,400,143],subhead:[156,286,288,103],cta:[207,373,186,71]},"headline-cta":{headline:[100,251,400,143],cta:[207,373,186,71]},"cta-only":{cta:[207,373,186,71]},"headline-subhead":{headline:[100,269,400,143],subhead:[156,351,288,103]},"headline-only":{headline:[100,305,400,143]}}}
};
const WEBSITE_LAYOUTS = {
  "jumbotron-desktop": {
    "1col-t-side-center": {headline:[900,24,400,132],subhead:[1316,24,400,132],align:"LEFT"},
    "1col-t-side-center-logo": {logo:[781,54,239,73],headline:[1134,24,400,132],subhead:[1550,24,400,132],align:"LEFT"},
    "2col-tc-side": {headline:[654,24,400,132],subhead:[1070,24,400,132],cta:[1664,51,210,78],align:"LEFT"},
    "2col-tc-side-logo": {logo:[459,54,239,73],headline:[849,24,400,132],subhead:[1265,24,400,132],cta:[1844,51,210,78],align:"LEFT"}
  },
  "jumbotron-mobile": {
    "1col-hc": {headline:[50,27,580,43],cta:[256,86,168,62]},
    "1col-hsc": {headline:[86,44,371,43],subhead:[86,88,371,45],cta:[442,56,168,62],align:"LEFT"},
    "1col-hs": {headline:[50,46,580,43],subhead:[50,89,580,45]},
    "1col-lhc": {logo:[50,30,243,115],headline:[231,38,435,43],cta:[365,88,168,62]}
  },
  "sg-carousel": {
    "2col-hc": {headline:[85,55,550,52],cta:[276,123,168,62]},
    "1col-hsc": {headline:[85,43,550,52],subhead:[85,95,550,50],cta:[276,156,168,62]},
    "1col-hs": {headline:[85,69,550,52],subhead:[85,121,550,50]},
    "1col-lhc": {logo:[85,43,221,154],headline:[259,67,412,52],cta:[381,135,168,62]},
    "1col-hc": {headline:[119,59,233,52],subhead:[334,60,301,50],cta:[276,135,168,62]},
    "2col-tc": {headline:[100,67,352,52],subhead:[100,122,352,50],cta:[452,89,168,62],align:"LEFT"}
  },
  "sg-topic": {
    "1col-hs": {headline:[281,316,638,120],subhead:[390,436,420,80]},
    "1col-hsc": {headline:[299,259,602,120],subhead:[390,379,420,80],cta:[488,491,224,83]},
    "1col-lhs": {logo:[425,203,350,130],headline:[278,397,644,120],subhead:[390,517,420,80]},
    "1col-lhsc": {logo:[425,146,350,130],headline:[266,340,668,120],subhead:[390,460,420,80],cta:[488,572,224,83]}
  }
};
const APP_LAYOUTS = {
  "in-app-banner": {
    "1col-lh": {logo:[125,68,300,130],headline:[455,73,420,120]},
    "1col-h": {headline:[200,73,600,120]},
    "1col-hs": {headline:[180,57,640,70],subhead:[220,132,560,60]},
    "1col-hc": {headline:[150,52,700,70],cta:[388,142,224,83]},
    "1col-hsc": {headline:[90,69,510,58],subhead:[90,132,510,55],cta:[690,91,224,83],align:"LEFT"},
    "2col-tc": {headline:[80,69,560,58],subhead:[80,132,560,55],cta:[710,91,224,83],align:"LEFT"},
    "2col-ltl": {logo:[100,68,284,130],headline:[420,58,480,65],subhead:[420,132,480,60],align:"LEFT"},
    "2col-ltc": {logo:[70,68,230,130],headline:[330,57,360,58],subhead:[330,128,360,55],cta:[740,91,224,83],align:"LEFT"}
  },
  "in-app-message": {
    "1col-hs": {headline:[70,303,460,100],subhead:[90,419,420,82]},
    "1col-lhs": {logo:[158,190,284,130],headline:[70,364,460,100],subhead:[90,480,420,82]},
    "1col-hsc": {headline:[70,251,460,100],subhead:[90,367,420,82],cta:[188,493,224,83]},
    "1col-lhsc": {logo:[158,130,284,130],headline:[70,304,460,100],subhead:[90,420,420,82],cta:[188,546,224,83]}
  }
};
const VIDEO_GRAPHICS_LAYOUTS = {
  "article-cover": {
    "article-left": {headline:[130,468,900,100],subhead:[130,592,900,80],align:"LEFT"},
    "article-right": {headline:[175,468,900,100],subhead:[175,592,900,80],align:"RIGHT"}
  },
  "youtube-video-cover": {
    "youtube-left-quote": {subhead:[90,323,600,72],headline:[90,387,780,92],align:"LEFT"},
    "youtube-right-quote": {subhead:[424,323,446,72],headline:[265,387,605,92],align:"RIGHT"}
  },
  "shorts-cover": {
    "default-text": {headline:[54,1040,972,116],subhead:[54,1132,972,116],align:"CENTER"},
    "quote-text": {headline:[54,1273,972,116],subhead:[54,1365,972,116],align:"CENTER"}
  }
};
const FACEBOOK_COVER_LAYOUTS = {
  "fb-cover": {"1col-hs":{headline:[105.5,82,640,76],subhead:[105.5,154,640,58],align:"CENTER"}},
  "fb-cover-brand-logo": {"1col-logo-hs":{logo:[40,68,150,68],headline:[198,72,547,76],subhead:[198,144,547,58],align:"LEFT"}}
};
const FONT_SIZES = {
  "jumbotron-desktop":{headline:64,subhead:64,cta:30},"jumbotron-mobile":{headline:36,subhead:32,cta:24},
  "sg-carousel":{headline:43,subhead:36,cta:24},"sg-topic":{headline:99,subhead:53,cta:32},
  "in-app-banner":{headline:48,subhead:43,cta:32},"in-app-message":{headline:80,subhead:53,cta:37},
  "leaderboard":{headline:55,subhead:36,cta:30},"mobile-leaderboard":{headline:22,subhead:0,cta:15},"imu":{headline:50,subhead:36,cta:28},
  "fb-cover":{headline:66.5,subhead:46.5,cta:0},"fb-cover-brand-logo":{headline:66.5,subhead:46.5,cta:0},
  "youtube-cover":{headline:93,subhead:60,cta:0},"youtube-cover-2-col":{headline:93,subhead:60,cta:0},
  "x-header":{headline:100,subhead:67,cta:0},"x-header-2-col":{headline:100,subhead:67,cta:0},
  "ig-post":{headline:93,subhead:67,cta:0},"ig-post-brand-logo":{headline:93,subhead:67,cta:0},
  "ig-story":{headline:93,subhead:67,cta:64},"ig-story-brand-logo":{headline:93,subhead:67,cta:64},
  "ig-link-bio":{headline:80,subhead:53,cta:0},"ig-link-bio-brand-logo":{headline:80,subhead:53,cta:0},
  "article-cover":{headline:92,subhead:72,cta:0},"youtube-video-cover":{headline:77,subhead:60,cta:0},"shorts-cover":{headline:96,subhead:96,cta:0},
  "paid-meta-square":{headline:72,subhead:44,cta:32},"paid-meta-portrait":{headline:84,subhead:52,cta:36},
  "paid-meta-landscape":{headline:56,subhead:34,cta:28},"paid-google-demand-gen-portrait":{headline:72,subhead:44,cta:32},
  "paid-social-landscape":{headline:60,subhead:36,cta:28}
};
let ACTIVE_FONTS={regular:{family:"Noto Sans SC",style:"Regular"},bold:{family:"Noto Sans SC",style:"Bold"}};
const rgb = hex => { const n=parseInt(hex.slice(1),16); return {r:((n>>16)&255)/255,g:((n>>8)&255)/255,b:(n&255)/255}; };
const solid = hex => [{type:"SOLID",color:rgb(hex)}];
const meta = (node,key,value) => node.setSharedPluginData(NS,key,typeof value==="string"?value:JSON.stringify(value));
const role = (node,value) => { node.name=value; meta(node,ROLE,value); };
const has = (id,token) => id.includes(token);
function genericRoles(id,formatId){
  const roles=[];
  if(has(id,"logo")||has(id,"lh")||has(id,"lhs")||has(id,"lhc")||has(id,"lhsc")||has(id,"ltl")||has(id,"ltc")) roles.push("logo");
  if(!id.includes("logo-only")&&!id.includes("cta-only")&&!/^logo-cta$/.test(id)) roles.push("headline");
  if(has(id,"hs")||has(id,"hsc")||has(id,"subhead")||has(id,"text")||has(id,"quote")||has(id,"ltl")||has(id,"ltc")||formatId==="jumbotron-desktop"||formatId==="article-cover") roles.push("subhead");
  if(has(id,"cta")||/(^|-)hc$|hsc$|lhc$|lhsc$|tc$|ltc$/.test(id)) roles.push("cta");
  return [...new Set(roles)];
}
function addText(parent,name,text,x,y,w,h,size,weight="Regular"){
  const n=figma.createText(); role(n,name); n.fontName=weight==="Bold"?ACTIVE_FONTS.bold:ACTIVE_FONTS.regular; n.characters=text; n.fontSize=Math.max(1,size); n.textAlignHorizontal="CENTER"; n.textAlignVertical="CENTER"; n.resize(w,h); n.x=x; n.y=y; n.fills=solid("#202633"); parent.appendChild(n); return n;
}
function addElement(parent,r,box,font,align="CENTER"){
  const [x,y,w,h]=box;
  if(r==="headline"){const n=addText(parent,r,"大标题大标题",x,y,w,h,font||48,"Bold");n.textAlignHorizontal=align;return n;}
  if(r==="subhead"){const n=addText(parent,r,"小标题小标题",x,y,w,h,font||32,"Regular");n.textAlignHorizontal=align;return n;}
  const n=figma.createFrame(); role(n,r); n.resize(w,h); n.x=x; n.y=y; n.clipsContent=true; n.cornerRadius=r==="cta"?h/2:6; n.fills=solid(r==="cta"?"#E90044":"#A80034"); parent.appendChild(n);
  addText(n,r+"_label",r==="logo"?"LOGO":"了解更多",0,0,w,h,font||28,"Bold").fills=solid("#FFFFFF"); return n;
}
function centeredBoxes(roles,cw,ch,formatId){
  const gap=Math.max(12,Math.round(ch*.04)), widths={logo:Math.min(cw*.42,350),headline:Math.min(cw*.66,520),subhead:Math.min(cw*.55,420),cta:Math.min(cw*.32,200)};
  const heights={logo:Math.min(ch*.22,130),headline:Math.min(ch*.18,120),subhead:Math.min(ch*.13,80),cta:Math.min(ch*.14,76)};
  const ctaFont=(FONT_SIZES[formatId]&&FONT_SIZES[formatId].cta)||28;
  if(roles.includes("cta")&&ctaFont>0){heights.cta=Math.round(ctaFont*2.6);widths.cta=Math.min(cw,Math.round(ctaFont*7));}
  const total=roles.reduce((s,r)=>s+heights[r],0)+gap*Math.max(roles.length-1,0); let y=(ch-total)/2; const out={};
  roles.forEach(r=>{out[r]=[(cw-widths[r])/2,y,widths[r],heights[r]];y+=heights[r]+gap}); return out;
}
function paidMediaBoxes(roles,w,h,safe,formatId){
  const [top,bottom,left,right]=safe, x=left, y=top, cw=w-left-right, ch=h-top-bottom;
  const landscape=w/h>1.45, out={};
  const headlineH=Math.min(ch*.22,Math.max(90,(FONT_SIZES[formatId].headline||56)*2));
  const subheadH=Math.min(ch*.15,Math.max(66,(FONT_SIZES[formatId].subhead||36)*1.8));
  const logoW=Math.min(cw*.30,320), logoH=Math.min(ch*.20,140);
  const ctaH=Math.round((FONT_SIZES[formatId].cta||30)*2.6), ctaW=Math.round((FONT_SIZES[formatId].cta||30)*7);
  const hasLogo=roles.includes("logo"), hasCta=roles.includes("cta"), gap=Math.max(20,Math.round(Math.min(cw,ch)*.035));
  if(landscape&&(hasLogo||hasCta)){
    const sideW=hasLogo&&hasCta?Math.min(cw*.23,300):Math.min(cw*.30,340);
    const textLeft=x+(hasLogo?sideW+gap:0), textRight=x+cw-(hasCta?sideW+gap:0), textW=textRight-textLeft;
    if(hasLogo) out.logo=[x,y+(ch-logoH)/2,sideW,logoH];
    const textTotal=headlineH+gap*.45+subheadH, textY=y+(ch-textTotal)/2;
    out.headline=[textLeft,textY,textW,headlineH];out.subhead=[textLeft,textY+headlineH+gap*.45,textW,subheadH];
    if(hasCta) out.cta=[x+cw-sideW+(sideW-ctaW)/2,y+(ch-ctaH)/2,ctaW,ctaH];
    return out;
  }
  const ordered=roles.map(r=>({r,h:r==="logo"?logoH:r==="headline"?headlineH:r==="subhead"?subheadH:ctaH,w:r==="logo"?logoW:r==="cta"?ctaW:Math.min(cw*.82,760)}));
  const total=ordered.reduce((sum,item)=>sum+item.h,0)+gap*Math.max(0,ordered.length-1);let cursor=y+(ch-total)/2;
  ordered.forEach(item=>{out[item.r]=[x+(cw-item.w)/2,cursor,item.w,item.h];cursor+=item.h+gap;});
  return out;
}
async function ensureFonts(){
  const available=await figma.listAvailableFontsAsync();
  const noto=available.filter(f=>f.fontName.family==="Noto Sans SC");
  if(!noto.length) throw new Error("Noto Sans SC is not available in Figma. Install/enable it, then run Build all templates again.");
  const choose=prefs=>{for(const p of prefs){const f=noto.find(x=>x.fontName.style===p);if(f)return f.fontName;}return noto[0].fontName;};
  ACTIVE_FONTS={regular:choose(["Regular","Normal","Variable"]),bold:choose(["Bold","SemiBold","Semi Bold","Black","Variable"])};
  await figma.loadFontAsync(ACTIVE_FONTS.regular); await figma.loadFontAsync(ACTIVE_FONTS.bold);
}
function pageByName(name){ return figma.root.children.find(p=>p.name===name); }
function clearPage(page){ for(const n of [...page.children]) n.remove(); }
function makeGuide(parent,name,x,y,w,h,fill,stroke){ const n=figma.createFrame(); role(n,name); n.resize(w,h); n.x=x;n.y=y;n.fills=solid(fill);n.strokes=solid(stroke);n.strokeWeight=2; parent.appendChild(n); return n; }
function makeBackground(parent,w,h){const n=figma.createRectangle();role(n,"background");n.resize(w,h);n.x=0;n.y=0;n.fills=solid("#003866");parent.appendChild(n);return n;}
function addDecorationText(parent,name,text,x,y,w,h,size,align="LEFT",color="#FFFFFF",weight="Bold"){
  const n=figma.createText();n.name=name;n.fontName=weight==="Bold"?ACTIVE_FONTS.bold:ACTIVE_FONTS.regular;n.characters=text;n.fontSize=size;n.textAlignHorizontal=align;n.textAlignVertical="CENTER";n.resize(w,h);n.x=x;n.y=y;n.fills=solid(color);parent.appendChild(n);return n;
}
function addVideoGraphicsDecorations(frame,id,variant,w,h){
  if(id==="article-cover"){
    const right=variant==="article-right";
    const shade=figma.createRectangle();shade.name="Gradient overlay";shade.resize(w*.62,h);shade.x=right?w*.38:0;shade.y=0;shade.opacity=.62;
    shade.fills=[{type:"GRADIENT_LINEAR",gradientTransform:right?[[1,0,0],[0,1,0]]:[[-1,0,1],[0,1,0]],gradientStops:[{position:0,color:{r:0.07,g:0.07,b:0.08,a:1}},{position:1,color:{r:0.07,g:0.07,b:0.08,a:0}}]}];frame.appendChild(shade);
    const topic=figma.createFrame();topic.name="Article topic";topic.resize(300,66);topic.x=right?775:130;topic.y=378;topic.fills=solid("#E90044");frame.appendChild(topic);
    addDecorationText(topic,"Article topic label","Optional - TOPIC",10,0,280,66,37,"LEFT");
  }
  if(id==="youtube-video-cover"){
    const right=variant==="youtube-right-quote";
    const shade=figma.createRectangle();shade.name="Gradient overlay";shade.resize(w*.72,h);shade.x=right?w*.28:0;shade.y=0;shade.opacity=.58;
    shade.fills=[{type:"GRADIENT_LINEAR",gradientTransform:right?[[1,0,0],[0,1,0]]:[[-1,0,1],[0,1,0]],gradientStops:[{position:0,color:{r:0,g:0,b:0,a:1}},{position:1,color:{r:0,g:0,b:0,a:0}}]}];frame.appendChild(shade);
    const zaobao=figma.createEllipse();zaobao.name="Zaobao logo";zaobao.resize(86,86);zaobao.x=49;zaobao.y=40;zaobao.fills=solid("#E90044");frame.appendChild(zaobao);addDecorationText(frame,"Zaobao mark","早",49,40,86,86,48,"CENTER");
    const brand=figma.createFrame();brand.name="Brand logo placeholder";brand.resize(210,86);brand.x=709;brand.y=40;brand.fills=solid("#A80034");frame.appendChild(brand);addDecorationText(brand,"Brand logo label","LOGO",0,0,210,86,20,"CENTER");
    const title=figma.createFrame();title.name="Program title";title.resize(205,58);title.x=right?660:95;title.y=194;title.fills=solid("#E90044");frame.appendChild(title);addDecorationText(title,"Program title label","Program Name",10,0,185,58,25.5,"LEFT");
    addDecorationText(frame,"Quote mark",right?"”":"“",right?811:90,246,57,64,64,"CENTER","#E90044");
    addDecorationText(frame,"Quote name","某某某",right?713:163,263,180,45,26.5,right?"RIGHT":"LEFT");
  }
  if(id==="shorts-cover"){
    const quote=variant==="quote-text";
    if(quote){const q=addDecorationText(frame,"Quote artwork","“",0,940,397,276,260,"CENTER","#E90044");q.opacity=.55;}
    const line=figma.createRectangle();line.name="Shorts divider";line.resize(346,4);line.x=(w-346)/2;line.y=quote?1244:1018;line.fills=solid("#E90044");frame.appendChild(line);
    for(const x of [line.x,line.x+338]){const dot=figma.createEllipse();dot.name="Divider dot";dot.resize(12,12);dot.x=x;dot.y=line.y-4;dot.fills=solid("#E90044");frame.appendChild(dot);}
    if(quote)addDecorationText(frame,"Quote name","某某某",90,1160,900,74,60,"CENTER","#FFFFFF","Regular");
  }
}
function addFacebookCoverGuides(frame,w,h){
  const sideW=(w-640)/2;
  for(const [name,x] of [["Left crop-risk area",0],["Right crop-risk area",w-sideW]]){
    const risk=figma.createRectangle();risk.name=name;risk.resize(sideW,h);risk.x=x;risk.y=0;risk.fills=solid("#E90044");risk.opacity=.10;risk.locked=true;frame.appendChild(risk);
  }
  const safe=figma.createRectangle();safe.name="Central content safe area — 640 px";safe.resize(640,h);safe.x=sideW;safe.y=0;safe.fills=[];safe.strokes=solid("#35A7FF");safe.strokeWeight=2;safe.dashPattern=[10,8];safe.locked=true;frame.appendChild(safe);
  const diameter=168, circleY=h-104;
  const circles=[
    ["Desktop profile-picture obstruction — practical guide",24],
    ["iPhone/Mobile profile-picture obstruction — practical guide",(w-diameter)/2]
  ];
  for(const [name,x] of circles){
    const circle=figma.createEllipse();circle.name=name;circle.resize(diameter,diameter);circle.x=x;circle.y=circleY;circle.fills=[{type:"SOLID",color:rgb("#E90044"),opacity:.20}];circle.strokes=solid("#E90044");circle.strokeWeight=3;circle.dashPattern=[10,8];circle.locked=true;frame.appendChild(circle);
    const shortLabel=name.startsWith("Desktop")?"DESKTOP PROFILE\nPICTURE OBSTRUCTION":"IPHONE / MOBILE PROFILE\nPICTURE OBSTRUCTION";
    const label=addDecorationText(frame,name+" label",shortLabel,x+12,circleY+20,diameter-24,58,11,"CENTER","#E90044","Bold");label.locked=true;
  }
}
async function build(scope="all"){
  await ensureFonts();
  const categories=[...new Set(CATALOG.map(x=>x[0]))];
  if(scope!=="all"&&!categories.includes(scope)) throw new Error("Unknown template set: "+scope);
  const names=scope==="all"?["00 — README","01 — Components",...categories]:[scope];
  for(const name of names){let p=pageByName(name);if(!p){p=figma.createPage();p.name=name;}clearPage(p);}
  if(scope==="all"){
    const readme=pageByName("00 — README");await figma.setCurrentPageAsync(readme);
    const doc=figma.createFrame();doc.name="AutoBanner — How to use";doc.resize(900,640);doc.fills=solid("#FFFFFF");
    addText(doc,"title","AutoBanner Template System",56,48,788,64,36,"Bold").textAlignHorizontal="LEFT";
    addText(doc,"instructions","1. Duplicate an existing variant.\n2. Keep semantic roles and metadata intact.\n3. Edit the visual layout.\n4. Run AutoBanner Template Exporter.\n5. Validate, resolve errors, then export JSON.\n\nSafe zone = non-content padding. Content area = runtime clipping region.\nCanvas coordinates are absolute pixels. Traffic Driver *_pt values map 1:1 to Figma px.",56,130,788,390,20,"Regular").textAlignHorizontal="LEFT";
    meta(doc,"schema_version","1.0");meta(doc,"kind","readme");
    const components=pageByName("01 — Components");
    const componentDefs=[["CTA / Traffic Standard","cta",200,76,"#E90044"],["CTA / Traffic IMU","cta",186,71,"#E90044"],["CTA / In App","cta",224,83,"#E90044"],["CTA / Story","cta",448,166,"#E90044"],["Logo / Default","logo",284,130,"#A80034"],["Logo / Compact","logo",206,95,"#A80034"],["Logo / Large","logo",313,144,"#A80034"]];
    for(let i=0;i<componentDefs.length;i++){const [name,r,w,h,c]=componentDefs[i];const cp=figma.createComponent();cp.name=name;cp.resize(w,h);cp.x=i*380;cp.y=80;cp.cornerRadius=r==="cta"?h/2:6;cp.fills=solid(c);role(cp,r);meta(cp,"component_variant",name.split(" / ")[1].toLowerCase());components.appendChild(cp);addText(cp,r+"_label",r==="cta"?"了解更多":"LOGO",0,0,w,h,r==="cta"?30:32,"Bold").fills=solid("#FFFFFF");}
  }
  const counters={}; const created=[];
  for(const item of CATALOG){
    const [category,id,label,w,h,safe,variants]=item; const page=pageByName(category); counters[category]=counters[category]||{x:80,y:120,rowH:0}; const c=counters[category];
    if(scope!=="all"&&category!==scope) continue;
    for(const variant of variants){
      const wrap=figma.createSection();wrap.name=`${label} / ${variant}`;wrap.x=c.x;wrap.y=c.y;wrap.resizeWithoutConstraints(w+80,h+130);page.appendChild(wrap);
      const frame=figma.createFrame();frame.name=`${id} / ${variant}`;frame.resize(w,h);frame.x=40;frame.y=70;frame.clipsContent=true;frame.fills=solid("#003866");wrap.appendChild(frame);
      const isVideoGraphics=category==="Video Graphics";
      const background=makeBackground(frame,w,h);if(isVideoGraphics)background.fills=solid(id==="youtube-video-cover"?"#000000":"#111214");
      const [t,b,l,r]=safe; const content=makeGuide(frame,"content_area",l,t,w-l-r,h-t-b,"#FFFFFF","#D6DCE7");content.clipsContent=true;if(isVideoGraphics)content.visible=false;
      const guide=makeGuide(frame,"safe_zone",l,t,w-l-r,h-t-b,"#FFFFFF","#E90044");guide.opacity=.12;guide.locked=true;guide.visible=false;
      const spec=TRAFFIC[id];
      const canonicalLayout=(WEBSITE_LAYOUTS[id]&&WEBSITE_LAYOUTS[id][variant])||(APP_LAYOUTS[id]&&APP_LAYOUTS[id][variant])||(VIDEO_GRAPHICS_LAYOUTS[id]&&VIDEO_GRAPHICS_LAYOUTS[id][variant])||(FACEBOOK_COVER_LAYOUTS[id]&&FACEBOOK_COVER_LAYOUTS[id][variant]);
      const roles=genericRoles(variant,id);
      const boxes=spec&&spec.geo[variant]?spec.geo[variant]:(canonicalLayout?Object.fromEntries(Object.entries(canonicalLayout).filter(([key])=>key!=="align")):(category==="Paid Media"?paidMediaBoxes(roles,w,h,safe,id):centeredBoxes(roles,w,h,id)));
      if(isVideoGraphics)addVideoGraphicsDecorations(frame,id,variant,w,h);
      for(const [rname,box] of Object.entries(boxes)){const font=(spec&&spec.font[rname])||(FONT_SIZES[id]&&FONT_SIZES[id][rname]);const node=addElement(frame,rname,box,font,canonicalLayout&&canonicalLayout.align||"CENTER");if(isVideoGraphics&&node.type==="TEXT")node.fills=solid("#FFFFFF");}
      if(id==="fb-cover"||id==="fb-cover-brand-logo")addFacebookCoverGuides(frame,w,h);
      const layout=spec?(spec.layout[variant]||"1_col"):(variant.startsWith("2col")?"2_col":"1_col");
      const record={schema_version:"1.0",category,format_id:id,item_name:label,layout,variant,canvas:{width:w,height:h},safe_zone:{top:t,bottom:b,left:l,right:r},design_guidance:DESIGN_GUIDANCE[id]||undefined,content_area:{x:l,y:t,width:w-l-r,height:h-t-b,background:"white",clip_content:true},semantic_roles:["background",...Object.keys(boxes)],coordinate_system:"canvas_relative_px",font_family:"Noto Sans SC",font_sizes:FONT_SIZES[id]||{},typography_units:category==="Traffic Driver"?"px_legacy_pt_name":"renderer_px"};
      meta(frame,"kind","banner_variant");meta(frame,"template",record);meta(frame,"format_id",id);meta(frame,"variant",variant);meta(frame,"layout",layout);meta(frame,"category",category);
      created.push({id:frame.id,...record}); c.x+=w+140;c.rowH=Math.max(c.rowH,h+180); if(c.x>5200){c.x=80;c.y+=c.rowH;c.rowH=0;}
    }
  }
  const target=pageByName(scope==="all"?"00 — README":scope);await figma.setCurrentPageAsync(target);figma.viewport.scrollAndZoomIntoView(target.children);figma.ui.postMessage({type:"built",scope,created});
}
function nodePage(node){let current=node;while(current&&current.type!=="PAGE")current=current.parent;return current&&current.type==="PAGE"?current:null;}
function splitTemplateName(name=""){const marker=" / ",index=name.lastIndexOf(marker);if(index<1)return null;const label=name.slice(0,index).trim(),variant=name.slice(index+marker.length).trim();return label&&variant?{label,variant}:null;}
function slug(value=""){return String(value).trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");}
function roleForNode(node){const stored=node.getSharedPluginData(NS,ROLE);if(stored)return stored;const inferred=String(node.name||"").trim().toLowerCase().replace(/[\s-]+/g,"_");return ["background","logo","headline","subhead","cta","safe_zone","content_area"].includes(inferred)?inferred:"";}
function templateFrames(){const categories=new Set(CATALOG.map(item=>item[0]));return figma.root.findAll(n=>{if(n.type!=="FRAME")return false;if(n.getSharedPluginData(NS,"kind")==="banner_variant")return true;const page=nodePage(n);return n.parent&&n.parent.type==="SECTION"&&categories.has(page&&page.name)&&!!splitTemplateName(n.parent.name);});}
function fontWeightFromStyle(style="Regular"){const value=String(style).toLowerCase();if(value.includes("black"))return 900;if(value.includes("extra bold")||value.includes("extrabold"))return 800;if(value.includes("bold"))return 700;if(value.includes("semi"))return 600;if(value.includes("medium"))return 500;if(value.includes("light"))return 300;if(value.includes("thin"))return 200;return 400;}
function readTextStyle(node){if(!node||node.type!=="TEXT")return null;const fontName=node.fontName!==figma.mixed?node.fontName:null;const lineHeight=node.lineHeight!==figma.mixed?node.lineHeight:null;return {font_family:fontName&&fontName.family||"Noto Sans SC",font_style:fontName&&fontName.style||"Regular",font_weight:fontWeightFromStyle(fontName&&fontName.style),font_size:typeof node.fontSize==="number"?Math.round(node.fontSize*100)/100:null,line_height:lineHeight&&lineHeight.unit==="PIXELS"?Math.round(lineHeight.value*100)/100:lineHeight&&lineHeight.unit==="PERCENT"?`${Math.round(lineHeight.value*100)/100}%`:"AUTO",text_align_horizontal:node.textAlignHorizontal||"LEFT",text_align_vertical:node.textAlignVertical||"TOP"};}
function relativeBounds(node,frame){
  if(!node||!node.absoluteBoundingBox||!frame.absoluteBoundingBox)return null;
  return {
    x:Math.round(node.absoluteBoundingBox.x-frame.absoluteBoundingBox.x),
    y:Math.round(node.absoluteBoundingBox.y-frame.absoluteBoundingBox.y),
    width:Math.round(node.absoluteBoundingBox.width),
    height:Math.round(node.absoluteBoundingBox.height)
  };
}
function readFrame(f){const raw=f.getSharedPluginData(NS,"template");const base=raw?JSON.parse(raw):{};const page=nodePage(f);const sectionInfo=f.parent&&f.parent.type==="SECTION"?splitTemplateName(f.parent.name):null;const frameInfo=splitTemplateName(f.name);const currentInfo=sectionInfo||frameInfo;const itemName=currentInfo&&currentInfo.label||base.item_name||base.format_id||"Untitled template";const renamedFormat=base.item_name&&slug(itemName)!==slug(base.item_name);const formatId=renamedFormat||!base.format_id?slug(itemName):base.format_id;const category=page&&CATALOG.some(item=>item[0]===page.name)?page.name:base.category;const variant=slug(currentInfo&&currentInfo.variant||base.variant||"variant");const roles={},fontSizes={},textStyles={},safeCandidates=[];let contentBounds=null;for(const n of f.findAll(()=>true)){const r=roleForNode(n);if((r==="safe_zone"||(!r&&/\b(?:safe zone|safe area)\b/i.test(n.name)))&&["FRAME","RECTANGLE"].includes(n.type)){const bounds=relativeBounds(n,f);if(bounds)safeCandidates.push({bounds,visible:n.visible!==false,semantic:r==="safe_zone"});}if(r==="content_area"&&!contentBounds)contentBounds=relativeBounds(n,f);if(["logo","headline","subhead","cta"].includes(r)&&!roles[r]){roles[r]=relativeBounds(n,f);const textNode=n.type==="TEXT"?n:n.findOne&&n.findOne(child=>child.type==="TEXT");const textStyle=readTextStyle(textNode);if(textStyle){textStyles[r]=textStyle;if(textStyle.font_size!=null)fontSizes[r]=textStyle.font_size;}}}safeCandidates.sort((a,b)=>Number(b.visible)-Number(a.visible)||Number(b.semantic)-Number(a.semantic));const safeBounds=safeCandidates[0]&&safeCandidates[0].bounds;const canvas={width:Math.round(f.width),height:Math.round(f.height)};const safeZone=safeBounds?{top:safeBounds.y,bottom:Math.max(0,canvas.height-safeBounds.y-safeBounds.height),left:safeBounds.x,right:Math.max(0,canvas.width-safeBounds.x-safeBounds.width)}:base.safe_zone||{top:0,bottom:0,left:0,right:0};const contentArea=contentBounds?{...contentBounds,background:base.content_area&&base.content_area.background||"white",clip_content:base.content_area&&base.content_area.clip_content!==false}:base.content_area||{x:safeZone.left,y:safeZone.top,width:Math.max(0,canvas.width-safeZone.left-safeZone.right),height:Math.max(0,canvas.height-safeZone.top-safeZone.bottom),background:"white",clip_content:true};const layout=base.layout||(variant.startsWith("2col")?"2_col":"1_col");return {...base,category,format_id:formatId,item_name:itemName,layout,variant,semantic_roles:["background",...Object.keys(roles)],canvas,safe_zone:safeZone,content_area:contentArea,elements:roles,actual_font_sizes:fontSizes,text_styles:textStyles,node_id:f.id};}
function validateOne(t){const e=[],w=[];if(!t.format_id)e.push("Missing format_id metadata.");if(!t.variant)e.push("Missing variant metadata.");if(!t.canvas||t.canvas.width<=0||t.canvas.height<=0)e.push("Canvas dimensions must be positive.");const req=(t.semantic_roles||[]).filter(r=>["logo","headline","subhead","cta"].includes(r));for(const r of req)if(!t.elements[r])e.push(`Required ${r} element not found.`);for(const [r,b] of Object.entries(t.elements||{})){if(b.x<0||b.y<0||b.x+b.width>t.canvas.width||b.y+b.height>t.canvas.height)e.push(`${r} is outside the canvas.`);}if(t.elements&&t.elements.cta&&t.category==="Traffic Driver"&&t.format_id!=="imu"){const expected=t.format_id==="mobile-leaderboard"?[200,38]:[200,76];if(t.elements.cta.width!==expected[0]||t.elements.cta.height!==expected[1])w.push(`CTA is ${t.elements.cta.width}×${t.elements.cta.height}px; expected ${expected[0]}×${expected[1]}px.`);}return {id:t.node_id,name:`${t.format_id}/${t.variant}`,errors:e,warnings:w};}
function validateTemplates(templates){const validation=templates.map(validateOne),seen=new Map();templates.forEach((template,index)=>{const key=`${template.category}/${template.format_id}/${template.variant}`;if(seen.has(key)){validation[index].errors.push(`Duplicate variant ID "${template.variant}". Rename the duplicated frame after the slash so each variant is unique.`);validation[seen.get(key)].errors.push(`Duplicate variant ID "${template.variant}". Rename one duplicated frame after the slash so each variant is unique.`);}else seen.set(key,index);});return validation;}
function serialize(list){const result={schema_version:"1.1",generated_by:"AutoBanner Template Exporter",templates:{}};for(const t of list){if(!result.templates[t.category])result.templates[t.category]={};if(!result.templates[t.category][t.format_id])result.templates[t.category][t.format_id]={item_name:t.item_name,canvas:t.canvas,safe_zone:t.safe_zone,...(t.design_guidance?{design_guidance:t.design_guidance}:{}),content_area:t.content_area,font_family:t.font_family||"Noto Sans SC",font_sizes:t.font_sizes||{},typography_units:t.typography_units||"renderer_px",layouts:{}};const fmt=result.templates[t.category][t.format_id];fmt.layouts[t.layout]=fmt.layouts[t.layout]||{variants:{}};const v={reference_node_id:t.node_id,font_sizes:t.actual_font_sizes||{},text_styles:t.text_styles||{}};for(const [r,b] of Object.entries(t.elements||{}))v[r]=b;fmt.layouts[t.layout].variants[t.variant]=v;}return result;}
figma.showUI(__html__,{width:420,height:680,themeColors:true});
figma.ui.onmessage=async msg=>{try{if(msg.type==="build")await build(msg.scope||"all");if(msg.type==="focus-node"){const node=await figma.getNodeByIdAsync(msg.id);if(!node||node.type==="DOCUMENT"||node.type==="PAGE")throw new Error("The affected template could not be found. Scan the document again.");let page=node.parent;while(page&&page.type!=="PAGE")page=page.parent;if(page&&page.type==="PAGE")await figma.setCurrentPageAsync(page);figma.currentPage.selection=[node];figma.viewport.scrollAndZoomIntoView([node]);figma.ui.postMessage({type:"focused",name:node.name});}if(msg.type==="scan"||msg.type==="validate"||msg.type==="export"){const scope=msg.scope||"all";const templates=templateFrames().map(readFrame).filter(t=>scope==="all"||t.category===scope);const validation=validateTemplates(templates);figma.ui.postMessage({type:msg.type,scope,templates,validation,json:JSON.stringify(serialize(templates),null,2)});}}catch(error){figma.ui.postMessage({type:"error",message:String(error&&error.message||error)});}};
