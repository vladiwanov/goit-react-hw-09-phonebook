(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[6],{108:function(t,e,n){"use strict";n.r(e);var a=n(3),o=n(37),i=n(38),r=n(40),s=n(39),c=n(0),l=n(12),u=n(11),b=n(98),m=n.n(b),p=n(1),h=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={email:"",password:""},t.onHandleChange=function(e){var n=e.target,o=n.name,i=n.value;t.setState(Object(a.a)({},o,i))},t.onHandleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({email:"",password:""})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.email,n=t.password;return Object(p.jsxs)("div",{className:m.a.loginForm,children:[Object(p.jsx)("h2",{children:"\u0412\u043e\u0439\u0442\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442"}),Object(p.jsxs)("form",{className:m.a.formContent,onSubmit:this.onHandleSubmit,children:[Object(p.jsx)("label",{children:Object(p.jsx)("input",{type:"email",name:"email",value:e,onChange:this.onHandleChange,className:m.a.formInput})}),Object(p.jsx)("label",{children:Object(p.jsx)("input",{type:"password",name:"password",value:n,onChange:this.onHandleChange,className:m.a.formInput})}),Object(p.jsx)("button",{type:"submit",className:m.a.button,disabled:!e||!n,children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}}]),n}(c.Component);e.default=Object(l.b)(null,(function(t){return{onSubmit:function(e){return t(u.a.logIn(e))}}}))(h)},98:function(t,e,n){t.exports={loginForm:"LoginView_loginForm__3VrQL",formContent:"LoginView_formContent__3XEb-",formInput:"LoginView_formInput__3K4Zv",formRegisterButton:"LoginView_formRegisterButton__165Tn",button:"LoginView_button__2FJOQ"}}}]);
//# sourceMappingURL=6.6117695f.chunk.js.map