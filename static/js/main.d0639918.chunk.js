(this["webpackJsonppayment-method"]=this["webpackJsonppayment-method"]||[]).push([[0],[,,,,,,,,,,,function(e,c,t){},function(e,c,t){},function(e,c,t){},,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var a=t(1),s=t.n(a),n=t(6),l=t.n(n),i=(t(11),t(2)),r=(t(12),t(13),t(0)),o=function(){return Object(r.jsx)("div",{className:"timer",children:Object(r.jsx)("img",{src:"./images/timer.svg",alt:""})})},d=t(5),j=(t(15),t(16),t(4)),m=t.n(j),b=function(e){var c=e.fill,t=e.moneyFill,s=e.get,n=e.id,l=e.setCardId,o=e.cardId,d=Object(a.useState)(!1),j=Object(i.a)(d,2),b=j[0],u=j[1],h=2*t;return Object(r.jsxs)("div",{id:n,onClick:function(){l(n),u(!b)},className:m()("card",{chosen:n===o}),children:[Object(r.jsxs)("div",{className:"card__regular-text",children:[Object(r.jsx)("span",{className:"card__fill",children:c}),Object(r.jsx)("span",{className:"card__money-fill",children:"".concat("$ ").concat(t)})]}),Object(r.jsxs)("div",{className:"card__color-text",children:[Object(r.jsx)("span",{className:"card__get",children:s}),Object(r.jsx)("span",{className:"card__money-get",children:"".concat("$ ").concat(h)})]}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{className:m()("card__ellipse",{"card__ellipse--chosen":n===o}),alt:"",src:n!==o?"./images/ellipse-inactive.svg":"./images//ellipse-active.svg"})})]})},u=(t(17),function(e){var c=e.cards,t=e.cardId,a=e.payMethod,s=c.find((function(e){return e.id===t}));console.log(s);var n=3*s.moneyFill,l="You have chosen card pay method. $".concat(n," will be credited to your account."),i="You have chosen bitcoin pay method. $".concat(n," will be credited to your account."),o="You have chosen check pay method. $".concat(n," will be credited to your account.");return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"enrollment",children:[Object(r.jsxs)("p",{className:"enrollment__text",children:[Object(r.jsx)("span",{className:"enrollment__text--big-colored",children:"$".concat(3*s.moneyFill)}),Object(r.jsx)("span",{className:"enrollment__text--small-colored",children:",00 "}),Object(r.jsx)("span",{className:"enrollment__text--regular",children:"\u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0447\u0438\u0441\u043b\u0435\u043d\u043e \u0432\u0430\u043c \u043d\u0430 \u0441\u0447\u0435\u0442"})]}),Object(r.jsx)("button",{onClick:function(){return function(){switch(a){case"card":alert(l);break;case"bitcoin":alert(i);break;case"bill":alert(o);break;default:return}}()},className:"enrollment__button",type:"button",children:"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c"})]})})}),h=[{id:1,fill:"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043d\u0430",moneyFill:50,get:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c"},{id:2,fill:"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043d\u0430",moneyFill:100,get:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c"},{id:3,fill:"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043d\u0430",moneyFill:500,get:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c"}],_=function(e){var c=e.payMethod,t=Object(a.useState)(0),s=Object(i.a)(t,2),n=s[0],l=s[1];return Object(r.jsxs)("div",{className:"cards",children:[Object(r.jsx)("div",{className:"cards__wrapper",children:h.map((function(e){return Object(r.jsx)("div",{className:"cards__card",children:Object(r.jsx)(b,Object(d.a)(Object(d.a)({},e),{},{id:e.id,setCardId:l,cardId:n}))},e.id)}))}),Object(r.jsx)("div",{children:0!==n&&Object(r.jsx)(u,{payMethod:c,cardId:n,cards:h})})]})},O=function(e){var c=e.setShowModal,t=Object(a.useState)("card"),s=Object(i.a)(t,2),n=s[0],l=s[1],d=Object(a.useState)("./images/bank-card-img.svg"),j=Object(i.a)(d,2),m=j[0],b=j[1];return Object(r.jsxs)("div",{className:"modal",children:[Object(r.jsx)("div",{className:"modal__percent",children:"+100%"}),Object(r.jsx)("button",{onClick:function(){c(!1)},className:"modal__close",type:"button"}),Object(r.jsx)("div",{className:"modal__timer",children:Object(r.jsx)(o,{})}),Object(r.jsx)("h2",{className:"modal__heading",children:"\u0423\u0432\u0435\u043b\u0438\u0447\u044c\u0442\u0435 \u0441\u0432\u043e\u0439 \u0434\u0435\u043f\u043e\u0437\u0438\u0442!"}),Object(r.jsxs)("div",{className:"modal__select-wrapper",children:[Object(r.jsx)("img",{src:function(e){switch(e){case"card":return"./images/bank-card-img.svg";case"bitcoin":return"./images/bitcoin-1.svg";case"bill":return"./images/bill.svg";default:return"./images/bank-card-img.svg"}}(m),alt:"",className:"modal__img ".concat("bitcoin"===n?"modal__img--transformed":"")}),Object(r.jsxs)("select",{className:"modal__select",value:n,onChange:function(e){var c=e.target;l(c.value),b(c.value)},children:[Object(r.jsx)("option",{value:"card",className:"modal__select-option",children:"\u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043a\u0430\u0440\u0442\u0430"}),Object(r.jsx)("option",{value:"bitcoin",className:"modal__select-option",children:"\u0411\u0438\u0442\u043a\u043e\u0438\u043d"}),Object(r.jsx)("option",{value:"bill",className:"modal__select-option",children:"\u0412\u044b\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0447\u0435\u0442"})]}),Object(r.jsx)("img",{className:"modal__arrow",src:"./images/arrow.svg",alt:""})]}),Object(r.jsx)("div",{className:"modal__cards",children:Object(r.jsx)(_,{payMethod:n})}),Object(r.jsxs)("div",{className:"modal__bottom",children:[Object(r.jsx)("p",{className:"modal__info",children:"\u041f\u0440\u0438 \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0441\u0447\u0435\u0442\u0430 \u0441 \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0439 \u043a\u0430\u0440\u0442\u044b \u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u043f\u043e \u043a\u0443\u0440\u0441\u0443 \u0431\u0430\u043d\u043a\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0430"}),Object(r.jsx)("a",{className:"modal__link",href:"#",children:"\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})]})]})};var x=function(){var e=Object(a.useState)(!1),c=Object(i.a)(e,2),t=c[0],s=c[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("button",{onClick:function(){console.log(t),s(!0)},id:"button","\u0441lassName":"button",type:"button",children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u043a\u0443"}),t&&Object(r.jsx)(O,{setShowModal:s})]})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(c){var t=c.getCLS,a=c.getFID,s=c.getFCP,n=c.getLCP,l=c.getTTFB;t(e),a(e),s(e),n(e),l(e)}))};l.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),g()}],[[18,1,2]]]);
//# sourceMappingURL=main.d0639918.chunk.js.map