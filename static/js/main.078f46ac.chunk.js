(this.webpackJsonpknuffel=this.webpackJsonpknuffel||[]).push([[0],[,,,,,,,,,,,,function(e,c,t){},function(e,c,t){},,function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var n=t(1),r=t.n(n),a=t(7),i=t.n(a),s=(t(12),t(13),t(2)),d=t(3),l=t(0),o=function(e){var c=e.data,t=e.freezeRow;return Object(l.jsxs)("li",{className:"row",children:[Object(l.jsx)("div",{children:"Aces"}),Object(l.jsx)("div",{children:"Count and add only Aces"}),Object(l.jsx)("div",{id:"Aces",className:"".concat(c[0].frozen?"frozen":c[0].checked?"checked":""),onClick:t,children:c[0].value})]})},u=function(e){var c=e.data,t=e.freezeRow;return Object(l.jsxs)("li",{className:"row",children:[Object(l.jsx)("div",{children:"Twos"}),Object(l.jsx)("div",{children:"Count and add only Twos"}),Object(l.jsx)("div",{id:"Twos",className:"".concat(c[1].frozen?"frozen":c[1].checked?"checked":""),onClick:t,children:c[1].value})]})},j=function(e){var c=e.data,t=e.freezeRow;return Object(l.jsxs)("li",{className:"row",children:[Object(l.jsx)("div",{children:"Threes"}),Object(l.jsx)("div",{children:"Count and add only Threes"}),Object(l.jsx)("div",{id:"Threes",className:"".concat(c[2].frozen?"frozen":c[2].checked?"checked":""),onClick:t,children:c[2].value})]})},f=function(e){var c=e.data,t=e.freezeRow;return Object(l.jsxs)("li",{className:"row",children:[Object(l.jsx)("div",{children:"Fours"}),Object(l.jsx)("div",{children:"Count and add only Fours"}),Object(l.jsx)("div",{id:"Fours",className:"".concat(c[3].frozen?"frozen":c[3].checked?"checked":""),onClick:t,children:c[3].value})]})},h=function(e){var c=e.data,t=e.freezeRow;return Object(l.jsxs)("li",{className:"row",children:[Object(l.jsx)("div",{children:"Fives"}),Object(l.jsx)("div",{children:"Count and add only Fives"}),Object(l.jsx)("div",{id:"Fives",className:"".concat(c[4].frozen?"frozen":c[4].checked?"checked":""),onClick:t,children:c[4].value})]})},b=function(e){var c=e.data,t=e.freezeRow;return Object(l.jsxs)("li",{className:"row",children:[Object(l.jsx)("div",{children:"Sixes"}),Object(l.jsx)("div",{children:"Count and add only Sixes"}),Object(l.jsx)("div",{id:"Sixes",className:"".concat(c[5].frozen?"frozen":c[5].checked?"checked":""),onClick:t,children:c[5].value})]})},O=function(e){var c=e.bonus,t=e.setBonus,r=e.countLeft;return Object(n.useEffect)((function(){r>=63&&t(35)}),[r]),Object(l.jsxs)("li",{className:"row",children:[Object(l.jsx)("div",{children:"Bonus"}),Object(l.jsx)("div",{children:"Score 35"}),Object(l.jsx)("div",{children:c})]})},v=function(e){var c=e.dice,t=e.data,r=e.setData,a=e.freezeRow;return Object(n.useEffect)((function(){var e=c.map((function(e){return e.number}));if(e.length&&(e=e.sort(),Object(s.a)(new Set(e)).length<=3&&(e[0]===e[2]||e[1]===e[3]||e[2]===e[4]))){var n=Object(s.a)(t),a=e.reduce((function(e,c){return e+c}),0);n[6].value=a,r(n)}}),[c]),Object(l.jsxs)("li",{className:"row",children:[Object(l.jsx)("div",{children:"3 of a kind"}),Object(l.jsx)("div",{children:"Add Total of all dice"}),Object(l.jsx)("div",{id:"ThreeOfAKind",className:"".concat(t[6].frozen?"frozen":t[6].checked?"checked":""),onClick:a,children:t[6].value})]})},x=function(e){var c=e.dice,t=e.data,r=e.setData,a=e.freezeRow;return Object(n.useEffect)((function(){var e=c.map((function(e){return e.number}));if(e.length){e=e.sort();var n=Object(s.a)(new Set(e));if(n.length<=2&&n[0]!==n[n.length-1]){var a=Object(s.a)(t),i=e.reduce((function(e,c){return e+c}),0);a[7].value=i,r(a)}}}),[c]),Object(l.jsxs)("li",{className:"row",children:[Object(l.jsx)("div",{children:"4 of a kind"}),Object(l.jsx)("div",{children:"Add Total of all dice"}),Object(l.jsx)("div",{id:"FourOfAKind",className:"".concat(t[7].frozen?"frozen":t[7].checked?"checked":""),onClick:a,children:t[7].value})]})},m=function(e){var c=e.data,t=e.setData,r=e.dice,a=e.freezeRow;return Object(n.useEffect)((function(){var e=r.map((function(e){return e.number}));if(e.length){e=e.sort();var n=Object(s.a)(new Set(e));if(2===n.length&&n[1]!==n[3]){var a=Object(s.a)(c);a[8].value=25,t(a)}}}),[r]),Object(l.jsxs)("li",{className:"row",children:[Object(l.jsx)("div",{children:"Full House"}),Object(l.jsx)("div",{children:"Score 25"}),Object(l.jsx)("div",{id:"FullHouse",className:"".concat(c[8].frozen?"frozen":c[8].checked?"checked":""),onClick:a,children:c[8].value})]})},k=function(e){var c=e.data,t=e.setData,r=e.dice,a=e.freezeRow;return Object(n.useEffect)((function(){var e=Object(s.a)(c),n=[];if(r.length)for(var a=0;a<5;a++)n.push(r[a].number);n.includes(1)&&n.includes(2)&&n.includes(3)&&n.includes(4)||n.includes(2)&&n.includes(3)&&n.includes(4)&&n.includes(5)||n.includes(3)&&n.includes(4)&&n.includes(5)&&n.includes(6)?e[9].value=30:e[9].value=0,t(e)}),[r]),Object(l.jsxs)("li",{className:"row",children:[Object(l.jsx)("div",{children:"Small Straight"}),Object(l.jsx)("div",{children:"Score 30"}),Object(l.jsx)("div",{id:"SmStraight",className:"".concat(c[9].frozen?"frozen":c[9].checked?"checked":""),onClick:a,children:c[9].value})]})},z=function(e){var c=e.data,t=e.setData,r=e.dice,a=e.freezeRow;return Object(n.useEffect)((function(){var e=Object(s.a)(c),n=[];if(r.length)for(var a=0;a<5;a++)n.push(r[a].number);n.includes(1)&&n.includes(2)&&n.includes(3)&&n.includes(4)&&n.includes(5)||n.includes(2)&&n.includes(3)&&n.includes(4)&&n.includes(5)&&n.includes(6)?e[10].value=40:e[10].value=0,t(e)}),[r]),Object(l.jsxs)("li",{className:"row",children:[Object(l.jsx)("div",{children:"Large Straight"}),Object(l.jsx)("div",{children:"Score 40"}),Object(l.jsx)("div",{id:"LgStraight",className:"".concat(c[10].frozen?"frozen":c[10].checked?"checked":""),onClick:a,children:c[10].value})]})},w=function(e){var c=e.dice,t=e.data,r=e.freezeRow;return Object(n.useEffect)((function(){var e=c.map((function(e){return e.number}));e.length&&(e.every((function(c){return c===e[0]}))&&(Object(s.a)(t)[11].value=50))}),[c]),Object(l.jsxs)("li",{className:"row",children:[Object(l.jsx)("div",{children:"Knuffle"}),Object(l.jsx)("div",{children:"Score 50"}),Object(l.jsx)("div",{id:"Knuffle",className:"".concat(t[11].frozen?"frozen":t[11].checked?"checked":""),onClick:r,children:t[11].value})]})},g=function(e){var c=e.data,t=e.setData,r=e.dice,a=e.freezeRow;return Object(n.useEffect)((function(){if(!1===c[12].frozen){var e=Object(s.a)(c),n=r.map((function(e){return e.number})).reduce((function(e,c){return e+c}),0);e[12].value=n,t(e)}}),[r]),Object(l.jsxs)("li",{className:"row",children:[Object(l.jsx)("div",{children:"Chance"}),Object(l.jsx)("div",{children:"Total Score of all Dice"}),Object(l.jsx)("div",{id:"Chance",className:"".concat(c[12].frozen?"frozen":c[12].checked?"checked":""),onClick:a,children:c[12].value})]})},S=function(e){var c=e.countLeft;return Object(l.jsxs)("li",{className:"row",children:[Object(l.jsx)("div",{children:"Total Left"}),Object(l.jsx)("div",{children:"----------------------------------\x3e"}),Object(l.jsx)("div",{children:c})]})},C=function(e){var c=e.data,t=e.playSignal,r=e.countRight,a=e.setCountRight,i=0;return Object(n.useEffect)((function(){for(var e=Object(s.a)(c),t=6;t<13;t++)i+=e[t].value;a(i)}),[t]),Object(l.jsxs)("li",{className:"row",children:[Object(l.jsx)("div",{children:"Total Right"}),Object(l.jsx)("div",{children:"----------------------------------\x3e"}),Object(l.jsx)("div",{children:r})]})},N=function(e){var c=e.totalScore;return Object(l.jsxs)("li",{className:"row",children:[Object(l.jsx)("div",{children:"Overall Score"}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{id:"OverallScore",children:c})]})},R=function(e){var c,t=e.numberRolls,n=e.setNumberRolls,r=e.dice,a=e.setDice,i=e.play,d=e.setMessage,o=e.data,u=function(e){var c;switch(e.target.id){case"firstDice":c=0;break;case"secondDice":c=1;break;case"thirdDice":c=2;break;case"fourthDice":c=3;break;case"fifthDice":c=4;break;default:c=-1}if("DIV"===e.target.nodeName)if(e.target.classList.contains("selected")){e.target.classList.remove("selected");var t=Object(s.a)(r);t[c].selected=!1,a(t)}else{e.target.classList.add("selected");var n=Object(s.a)(r);n[c].selected=!0,a(n)}};return t<3&&(c=Object(l.jsxs)("div",{className:"diceDivs",children:[Object(l.jsx)("div",{id:"firstDice",onClick:u,children:Object(l.jsx)("span",{children:r[0].number})}),Object(l.jsx)("div",{id:"secondDice",onClick:u,children:Object(l.jsx)("span",{children:r[1].number})}),Object(l.jsx)("div",{id:"thirdDice",onClick:u,children:Object(l.jsx)("span",{children:r[2].number})}),Object(l.jsx)("div",{id:"fourthDice",onClick:u,children:Object(l.jsx)("span",{children:r[3].number})}),Object(l.jsx)("div",{id:"fifthDice",onClick:u,children:Object(l.jsx)("span",{children:r[4].number})})]})),Object(l.jsxs)("li",{className:"buttonrow",children:[Object(l.jsxs)("button",{onClick:function(){if(3===t){n(t-1);for(var e=[],c=0;c<5;c++)e.push({id:c,number:Math.floor(6*Math.random())+1,selected:!1});a(e)}else if(t>0){n(t-1);var i=Object(s.a)(r);i.filter((function(e){return!1===e.selected})).forEach((function(e){return e.number=Math.floor(6*Math.random())+1})),a(i),d("Click on the dice to keep them")}else 0===t&&d("Log in one row to transfer the points")},children:[t," rolls left"]}),Object(l.jsx)("button",{className:"".concat(o.some((function(e){return!1===e.frozen&&!0===e.checked}))?"":"grey"),onClick:i,children:" Play "}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{children:c})]})},p=function(e){var c=e.message,t=e.setMessage,r=e.data,a=e.totalScore;return Object(n.useEffect)((function(){r.some((function(e){return!0===e.checked&&!1===e.frozen}))?t("Press the left button to roll the dice/Click on the dice to keep them for the next roll/Press the Play button after selecting a number"):r.every((function(e){return!0===e.frozen}))&&t("Your final score is: ")}),[r]),Object(l.jsx)("li",{className:"row",children:Object(l.jsxs)("div",{children:[c," ","".concat(r.every((function(e){return e.frozen}))?a:"")," "]})})},D=function(){var e=Object(n.useState)(3),c=Object(d.a)(e,2),t=c[0],r=c[1],a=Object(n.useState)([]),i=Object(d.a)(a,2),D=i[0],y=i[1],E=Object(n.useState)(0),F=Object(d.a)(E,2),L=F[0],T=F[1],A=Object(n.useState)(0),K=Object(d.a)(A,2),M=K[0],P=K[1],B=Object(n.useState)(0),H=Object(d.a)(B,2),I=H[0],J=H[1],V=Object(n.useState)("Press the left button to roll the dice"),Y=Object(d.a)(V,2),q=Y[0],G=Y[1],Q=Object(n.useState)(0),U=Object(d.a)(Q,2),W=U[0],X=U[1],Z=Object(n.useState)(0),$=Object(d.a)(Z,2),_=$[0],ee=$[1],ce=Object(n.useState)(0),te=Object(d.a)(ce,2),ne=te[0],re=te[1],ae=Object(n.useState)(0),ie=Object(d.a)(ae,2),se=ie[0],de=ie[1],le=Object(n.useState)(0),oe=Object(d.a)(le,2),ue=oe[0],je=oe[1],fe=Object(n.useState)([{name:"ones",value:0,checked:!1,frozen:!1},{name:"twos",value:0,checked:!1,frozen:!1},{name:"threes",value:0,checked:!1,frozen:!1},{name:"fours",value:0,checked:!1,frozen:!1},{name:"fives",value:0,checked:!1,frozen:!1},{name:"sixes",value:0,checked:!1,frozen:!1},{name:"threeofakind",value:0,checked:!1,frozen:!1},{name:"fourofakind",value:0,checked:!1,frozen:!1},{name:"fullhouse",value:0,checked:!1,frozen:!1},{name:"smallstraight",value:0,checked:!1,frozen:!1},{name:"largestraight",value:0,checked:!1,frozen:!1},{name:"knuffle",value:0,checked:!1,frozen:!1},{name:"chance",value:0,checked:!1,frozen:!1}]),he=Object(d.a)(fe,2),be=he[0],Oe=he[1],ve={Aces:0,Twos:1,Threes:2,Fours:3,Fives:4,Sixes:5,ThreeOfAKind:6,FourOfAKind:7,FullHouse:8,SmStraight:9,LgStraight:10,Knuffle:11,Chance:12};Object(n.useEffect)((function(){for(var e=Object(s.a)(be),c=function(c){if(!1===be[c].frozen){var t=D.map((function(e){return e.number})).reduce((function(e,t){return t===c+1?e+c+1:e}),0);e[c].value=t,Oe(e)}},t=0;t<6;t++)c(t)}),[D]),Object(n.useEffect)((function(){for(var e=Object(s.a)(be),c=0;c<13;c++)!0===e[c].checked&&(e[c].frozen=!0),Oe(e)}),[L]),Object(n.useEffect)((function(){de(W+_)}),[W,_]),Object(n.useEffect)((function(){for(var e=0,c=Object(s.a)(be),t=0;t<6;t++)!0===c[t].frozen&&(e+=c[t].value);X(35===ne?e+35:e)}),[L,ne]);var xe=function(e){var c=ve[e.target.id],t=Object(s.a)(be);!1===t[c].frozen&&(!0===t[c].checked?t[c].checked=!1:(t.filter((function(e){return!1===e.frozen&&!0===e.checked})).forEach((function(e){return e.checked=!1})),t[c].checked=!0),Oe(t))};return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"rowsContainer",children:[Object(l.jsxs)("ul",{className:"leftContainer",children:[Object(l.jsx)(o,{data:be,freezeRow:xe}),Object(l.jsx)(u,{data:be,freezeRow:xe}),Object(l.jsx)(j,{data:be,freezeRow:xe}),Object(l.jsx)(f,{data:be,freezeRow:xe}),Object(l.jsx)(h,{data:be,freezeRow:xe}),Object(l.jsx)(b,{data:be,freezeRow:xe}),Object(l.jsx)(O,{bonus:ne,playSignal:L,setBonus:re,countLeft:W}),Object(l.jsx)(S,{data:be,bonus:ne,playSignal:L,countLeft:W,setCountLeft:X}),Object(l.jsx)(R,{numberRolls:t,setNumberRolls:r,dice:D,setDice:y,play:function(){P(M+1);var e=Object(s.a)(be);e.filter((function(e){return 1==e.checked})).length&&(T(L+1),r(3),e.filter((function(e){return!1===e.checked})).forEach((function(e){return e.value=0})),e.filter((function(e){return!0===e.checked})).forEach((function(e){return e.frozen=!0})),Oe(e),J(0))},setMessage:G,data:be})]}),Object(l.jsxs)("ul",{className:"rightContainer",children:[Object(l.jsx)(v,{dice:D,data:be,setData:Oe,freezeRow:xe}),Object(l.jsx)(x,{dice:D,data:be,setData:Oe,freezeRow:xe}),Object(l.jsx)(m,{dice:D,data:be,setData:Oe,freezeRow:xe}),Object(l.jsx)(k,{data:be,setData:Oe,dice:D,freezeRow:xe}),Object(l.jsx)(z,{data:be,setData:Oe,dice:D,freezeRow:xe}),Object(l.jsx)(w,{dice:D,data:be,freezeRow:xe,knuffle:ue,setKnuffle:je}),Object(l.jsx)(g,{dice:D,data:be,setData:Oe,freezeRow:xe}),Object(l.jsx)(S,{data:be,bonus:ne,playSignal:L,countLeft:W,setCountLeft:X}),Object(l.jsx)(C,{data:be,playSignal:L,countRight:_,setCountRight:ee}),Object(l.jsx)(N,{totalScore:se})]})]}),Object(l.jsx)(p,{data:be,totalScore:se,playSignal:L,playPush:M,playCount:I,setPlayCount:J,message:q,setMessage:G,numberRolls:t})]})};t(15),t(16);var y=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{className:"header",children:" Knuffle. "}),Object(l.jsx)(D,{})]})},E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(c){var t=c.getCLS,n=c.getFID,r=c.getFCP,a=c.getLCP,i=c.getTTFB;t(e),n(e),r(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root")),E()}],[[17,1,2]]]);
//# sourceMappingURL=main.078f46ac.chunk.js.map