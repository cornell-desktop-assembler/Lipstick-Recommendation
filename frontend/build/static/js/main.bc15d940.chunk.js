(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){},132:function(e,t,a){e.exports=a.p+"static/media/title.28f4ada6.png"},133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),o=a.n(i),s=(a(65),a(11)),l=a(12),c=a(15),u=a(13),p=a(14),h=a(7),m=a(29),d=a.n(m),g=a(20),y=a.n(g),b=a(18),C=a.n(b),k=a(16),E=a.n(k),v=a(25),f=a.n(v),T=a(3),O=a.n(T),w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).buttonColors=["primary","warning","info","danger"],a.titles=["Skin Tone: "+a.props.skinTone,"Skin Type: "+a.props.skinType,"Hair Color: "+a.props.hairColor,"Eye Color: "+a.props.eyeColor],a.callbacks=[a.props.onChangeSkinTone,a.props.onChangeSkinType,a.props.onChangeHairColor,a.props.onChangeEyeColor],a.indices=[0,1,2,3],a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{class:"dropdown-group"},r.a.createElement(f.a,{size:"lg",justified:!0},r.a.createElement(O.a,{as:f.a},r.a.createElement(O.a.Toggle,{variant:"primary",id:"dropdown-basic"},"Skin Tone: ",this.props.skinTone),r.a.createElement(O.a.Menu,{flip:!1,alignRight:!0},r.a.createElement(O.a.Item,{eventKey:"N/A",onSelect:this.props.onChangeSkinTone},"N/A"),r.a.createElement(O.a.Divider,null),this.props.options[0].map(function(t){return r.a.createElement(O.a.Item,{eventKey:t,onSelect:e.props.onChangeSkinTone},t)}))),r.a.createElement(O.a,{as:f.a},r.a.createElement(O.a.Toggle,{variant:"warning",id:"dropdown-basic"},"Skin Type: ",this.props.skinType),r.a.createElement(O.a.Menu,{flip:!1,alignRight:!0},r.a.createElement(O.a.Item,{eventKey:"N/A",onSelect:this.props.onChangeSkinType},"N/A"),r.a.createElement(O.a.Divider,null),this.props.options[1].map(function(t){return r.a.createElement(O.a.Item,{eventKey:t,onSelect:e.props.onChangeSkinType},t)}))),r.a.createElement(O.a,{as:f.a},r.a.createElement(O.a.Toggle,{variant:"info",id:"dropdown-basic"},"Hair Color: ",this.props.hairColor),r.a.createElement(O.a.Menu,{flip:!1,alignRight:!0},r.a.createElement(O.a.Item,{eventKey:"N/A",onSelect:this.props.onChangeHairColor},"N/A"),r.a.createElement(O.a.Divider,null),this.props.options[2].map(function(t){return r.a.createElement(O.a.Item,{eventKey:t,onSelect:e.props.onChangeHairColor},t)}))),r.a.createElement(O.a,{as:f.a},r.a.createElement(O.a.Toggle,{variant:"danger",id:"dropdown-basic"},"Eye Color: ",this.props.eyeColor),r.a.createElement(O.a.Menu,{flip:!1,alignRight:!0},r.a.createElement(O.a.Item,{eventKey:"N/A",onSelect:this.props.onChangeEyeColor},"N/A"),r.a.createElement(O.a.Divider,null),this.props.options[3].map(function(t){return r.a.createElement(O.a.Item,{eventKey:t,onSelect:e.props.onChangeEyeColor},t)})))))}}]),t}(n.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,null,r.a.createElement(E.a.Group,{controlId:"formBasicEmail"},r.a.createElement(E.a.Control,{type:"string",value:this.props.data,onChange:this.props.onChange,placeholder:"Keyword(s)"}),r.a.createElement(E.a.Text,{className:"text",size:"lg"},'Enter anything on your mind from product characteristics (like "moist") to use cases (like "interview")'))))}}]),t}(n.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,null,r.a.createElement(E.a.Group,{controlId:"formBasicEmail"},r.a.createElement(E.a.Control,{type:"string",value:this.props.data,onChange:this.props.onChange,placeholder:"Brand(s)"}),r.a.createElement(E.a.Text,{className:"text",size:"lg"},"Enter this field if you have a strong preference"))))}}]),t}(n.Component),I=(a(50),a(28)),N=a.n(I),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).onFormSubmit=function(e){e.preventDefault();a.state.characteristicInput.replace(", "," ").replace(","," ").split(" "),a.state.brandInput.replace(", "," ").replace(","," ").split(" "),a.state.skinTone,a.state.skinType,a.state.hairColor,a.state.eyeColor;a.state.submitDisabled||a.props.onClick(a.state.characteristicInput)},a.state={characteristicInput:"",brandInput:"",skinTone:"N/A",skinType:"N/A",hairColor:"N/A",eyeColor:"N/A",submitDisabled:!0,submitColor:"light"},a.handleChangeCharacteristicInput=a.handleChangeCharacteristicInput.bind(Object(h.a)(Object(h.a)(a))),a.handleChangeBrandInput=a.handleChangeBrandInput.bind(Object(h.a)(Object(h.a)(a))),a.handleChangeSkinTone=a.handleChangeSkinTone.bind(Object(h.a)(Object(h.a)(a))),a.handleChangeSkinType=a.handleChangeSkinType.bind(Object(h.a)(Object(h.a)(a))),a.handleChangeHairColor=a.handleChangeHairColor.bind(Object(h.a)(Object(h.a)(a))),a.handleChangeEyeColor=a.handleChangeEyeColor.bind(Object(h.a)(Object(h.a)(a))),a.options=[["Dark","Light","Ebony","Deep","Medium","Porcelain","Fair","Olive","Tan"],["Dry","Normal","Oily","Combination"],["Gray","Auburn","Blonde","Black","Black","Red","Brunette"],["Brown","Green","Blue","Gray","Hazel"]],a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"checkViability",value:function(){var e=this,t=!(""===this.state.characteristicInput&&"N/A"===this.state.skinTone&&"N/A"===this.state.skinType&&"N/A"===this.state.hairColor&&"N/A"===this.state.eyeColor);this.setState({submitDisabled:!t,submitColor:"light"},function(){return console.log(e.state)})}},{key:"handleChangeCharacteristicInput",value:function(e){this.setState({characteristicInput:e.target.value},this.checkViability)}},{key:"handleChangeBrandInput",value:function(e){this.setState({brandInput:e.target.value},this.checkViability)}},{key:"handleChangeSkinTone",value:function(e){this.setState({skinTone:e},this.checkViability)}},{key:"handleChangeSkinType",value:function(e){this.setState({skinType:e},this.checkViability)}},{key:"handleChangeHairColor",value:function(e){this.setState({hairColor:e},this.checkViability)}},{key:"handleChangeEyeColor",value:function(e){this.setState({eyeColor:e},this.checkViability)}},{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(E.a,{onSubmit:this.onFormSubmit},r.a.createElement(y.a,null,r.a.createElement(C.a,null,r.a.createElement(j,{data:this.state.characteristicInput,onChange:this.handleChangeCharacteristicInput}))),r.a.createElement(y.a,null,r.a.createElement(C.a,null,r.a.createElement(S,{data:this.state.brandInput,onChange:this.handleChangeBrandInput}))),r.a.createElement(y.a,null,r.a.createElement(C.a,null,r.a.createElement(w,{options:this.options,skinTone:this.state.skinTone,skinType:this.state.skinType,hairColor:this.state.hairColor,eyeColor:this.state.eyeColor,onChangeSkinTone:this.handleChangeSkinTone,onChangeSkinType:this.handleChangeSkinType,onChangeHairColor:this.handleChangeHairColor,onChangeEyeColor:this.handleChangeEyeColor}))),r.a.createElement("div",{style:{marginTop:"5.5em",marginBottom:"5.5em"}},r.a.createElement(y.a,null,r.a.createElement(C.a,null,r.a.createElement(N.a,{type:"submit",disabled:this.state.submitDisabled,variant:this.state.submitColor,size:"lg"},"Find your match!"))))))}}]),t}(n.Component),B=a(32),D=a.n(B),x=(a(103),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).pictureUrls=["https://www.sephora.com/productimages/sku/s2129922-main-zoom.jpg","https://www.sephora.com/productimages/sku/s2012748-main-zoom.jpg","https://www.sephora.com/productimages/sku/s1890623-main-zoom.jpg","https://www.sephora.com/productimages/sku/s1900083-main-zoom.jpg"],a.urls=["https://www.sephora.com/product/rouge-pur-couture-matte-slim-lipstick-P436506?icid2=products%20grid:p436506:product","https://www.sephora.com/product/mattetrance-lipstick-P421813?icid2=products%20grid:p421813:product","https://www.sephora.com/product/everlasting-love-liquid-lipstick-P384954?icid2=products%20grid:p384954:product","https://www.sephora.com/product/velvet-matte-lip-pencil-P78834?icid2=products%20grid:p78834:product"],a.titles=["YVES SAINT LAURENT","PAT MCGRATH LABS","KAT VON D","NARS"],a.texts=["Rouge Pur Couture The Slim Matte Lipstick","MatteTrance\u2122 Lipstick","Everlasting Liquid Lipstick","Velvet Matte Lipstick Pencil"],a.prices=["39.00","38.00","20.00","27.00"],a.colors=["4 Fuchsia Excentrique - soft raspberry","Omi 107 - mid-tone rose","Lovecraft - mauve pink nude","Do Me Baby - chestnut rose"],a.keywords=["super-slim","luxurious","long-wear","cult-favorite"],a.state={showDummy:!1},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"showDummy",value:function(){this.setState({showDummy:!0})}},{key:"render",value:function(){return r.a.createElement("div",null,this.props.showOutput?r.a.createElement("div",{className:"output-parent"},r.a.createElement(d.a,null,r.a.createElement(y.a,null,r.a.createElement(C.a,null,r.a.createElement(d.a,null,this.props.response.map(function(e){return r.a.createElement(y.a,null,r.a.createElement(D.a,{style:{width:"100rem"}},r.a.createElement(D.a.Body,null,r.a.createElement(D.a.Title,null,"Score: ",e.score,"; SKU: ",e.name))))}))),r.a.createElement(C.a,null,r.a.createElement(N.a,{onClick:this.showDummy()},"dummy output"))))):null)}}]),t}(n.Component)),H=a(39),M=a.n(H),R=a(59),K=a.n(R),V=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={showOutput:!1,names:[],scores:[],response:[]},a.submitQuery=a.submitQuery.bind(Object(h.a)(Object(h.a)(a))),a.returnToSearch=a.returnToSearch.bind(Object(h.a)(Object(h.a)(a))),a.sendToBackend=a.sendToBackend.bind(Object(h.a)(Object(h.a)(a))),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"submitQuery",value:function(e){this.sendToBackend(e)}},{key:"sendToBackend",value:function(e){var t=this;K.a.get("/search/?keyword="+e).then(function(e){return t.setState({response:e.data},function(){return t.printResponse()})})}},{key:"printResponse",value:function(){var e=this;this.setState({showOutput:!0},function(){return e.scrollToOutput()})}},{key:"scrollToOutput",value:function(){M()(this.output,{align:"top",duration:300})}},{key:"returnToSearch",value:function(){M()(this.top,{duration:300})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossOrigin:"anonymous"})),r.a.createElement("body",null,r.a.createElement("div",{className:"top lip-background cd-fixed-bg cd-fixed-bg--1",ref:function(t){e.top=t}},r.a.createElement("div",{className:"lip-opacity"},r.a.createElement("div",{className:"lip-container",style:{marginTop:"3.5em"}},r.a.createElement("img",{src:a(132)}),r.a.createElement(A,{onClick:this.submitQuery})))),r.a.createElement("div",null,r.a.createElement(x,{className:"output",ref:function(t){e.output=t},showOutput:this.state.showOutput,returnToSearch:this.returnToSearch,response:this.state.response}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},50:function(e,t,a){},60:function(e,t,a){e.exports=a(133)},65:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.bc15d940.chunk.js.map