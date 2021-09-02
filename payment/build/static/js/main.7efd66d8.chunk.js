(this.webpackJsonppayment=this.webpackJsonppayment||[]).push([[0],{40:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(25),o=s.n(c),i=s(8),r=s(2),l=(s(40),s(0)),d=Object(r.e)((function(){return Object(l.jsxs)("div",{className:"home-container",children:[Object(l.jsx)("div",{className:"main-header",children:Object(l.jsx)("h1",{children:"DONATE"})}),Object(l.jsx)("div",{className:"sub-header",children:Object(l.jsx)("h2",{children:"Together we can make a difference"})}),Object(l.jsx)("div",{className:"donate-button",children:Object(l.jsx)(i.b,{to:"/StripeContainer",className:"btn donate-btn",children:Object(l.jsx)("p",{className:"btn-text",children:"Donate Now"})})})]})})),u=s(28),h=s(29),m=s(35),j=s(33),b=(s(47),function(e){Object(m.a)(s,e);var t=Object(j.a)(s);function s(){return Object(u.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){var e=this.props.location;console.log(e);var t="/"===e.pathname?"active-item":"",s="/About"===e.pathname?"active-item":"",n="/Donate"===e.pathname?"active-item":"";return Object(l.jsxs)("nav",{children:[Object(l.jsx)(i.b,{to:"/",className:"menu-item ".concat(n),children:"Help Gears"}),Object(l.jsxs)("ul",{className:"nav-links",children:[Object(l.jsx)(i.b,{to:"/",className:"menu-item ".concat(t),children:"Home"}),Object(l.jsx)(i.b,{to:"/About",className:"menu-item ".concat(s),children:"About"})]})]})}}]),s}(a.a.Component)),p=Object(r.e)(b),x=(s(48),function(){return Object(l.jsxs)("div",{className:"about-container",children:[Object(l.jsxs)("div",{className:"about-left",children:[Object(l.jsx)("h2",{className:"left-head",children:"Welcome to Help Gears"}),Object(l.jsx)("p",{className:"about-first",children:"Homelessness is a growing problem all over the world and an increasing number of homeless students don't get their education. When basic needs such as running water, food, and a bed cannot be met, it stands to reason that academic success suffers. By gaining a better understanding of all the obstacles homeless students face, 4 administrators and educators are better equipped to be an empathetic voice that advocates for them in the classroom and beyond."}),Object(l.jsx)("p",{className:"about-second",children:"Between 2008 and 2014, homelessness in public school increased by 90 percent, jumping from 680,000 to more than 1.3 million students. Approximately 35 percent of homeless population is under the age of 24. As of 2017, approximately 14 percent of community college students were homeless, and up to two-thirds don\u2019t have enough food."}),Object(l.jsx)("p",{className:"about-third",children:"Combined with the critical support of a host of renowned organisations backing our team of qualified professionals, Help Gears is changing the future for homeless students who are needed to be educated."})]}),Object(l.jsxs)("div",{className:"about-right",children:[Object(l.jsxs)("div",{className:"Support",children:[Object(l.jsx)("h2",{className:"right-head",children:"How to gear us?"}),Object(l.jsx)("p",{className:"support-text",children:"From donating money to fund our work, just make some initial amounts to help our students to get good food, clothing and education. Kindly support our programme"})]}),Object(l.jsxs)("div",{className:"Grows",children:[Object(l.jsx)("h2",{className:"right-head",children:"How your gears grows us?"}),Object(l.jsx)("p",{className:"Grows-text",children:"We will use everything you give \u2013 in cash or kind \u2013 to provide much needed care to the Students and their family across the cities in which we are active. This includes Education; buying medications; paying for life saving operations; and equipping our team with the kit they need. "})]}),Object(l.jsxs)("div",{className:"Impact",children:[Object(l.jsx)("h2",{className:"right-head",children:"The impact your support will have"}),Object(l.jsx)("p",{className:"Impact-text",children:"By supporting Help Gears your donations will fund an increase in our outreach so we can help more students. By enabling us to deliver this much needed programme, we can ensure that the students will get top most education with free of cost."})]})]})]})}),O=(s(49),s(30)),f=s(10),g=s(15),v=s.n(g),y=s(31),N=s(34),w=s(32),S=s.n(w),k=s.p+"static/media/success.680e20de.gif",E=(s(69),{iconStyle:"solid",style:{base:{iconColor:"#c4f0ff",color:"#fff",fontWeight:500,fontFamily:"Roboto, Open Sans, Segoe UI, sans-serif",fontSize:"16px",fontSmoothing:"antialiased",":-webkit-autofill":{color:"#fce883"},"::placeholder":{color:"#87bbfd"}},invalid:{iconColor:"#ffc7ee",color:"#ffc7ee"}}});function I(){var e=Object(n.useState)(!1),t=Object(N.a)(e,2),s=t[0],a=t[1],c=Object(f.useStripe)(),o=Object(f.useElements)(),i=function(){var e=Object(y.a)(v.a.mark((function e(t){var s,n,i,r,l,d,u;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,c.createPaymentMethod({type:"card",card:o.getElement(f.CardElement)});case 3:if(s=e.sent,n=s.error,i=s.paymentMethod,n){e.next=24;break}return e.prev=7,r=i.id,console.log("Id: ",r),l=document.getElementById("amount"),d=document.getElementById("causes"),u=document.getElementById("emailId"),e.next=15,S.a.post("http://localhost:3000/payment",{amount:l.value,causes:d.value,emailId:u.value,id:r});case 15:e.sent.data.success&&(console.log("Successful payment"),a(!0)),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(7),console.log("Error",e.t0);case 22:e.next=25;break;case 24:console.log(">>> ",n.message);case 25:case"end":return e.stop()}}),e,null,[[7,19]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)(l.Fragment,{children:s?Object(l.jsxs)("div",{className:"splash-image",children:[Object(l.jsx)("img",{src:k,className:"success",alt:"success"}),Object(l.jsx)("h2",{className:"success-text",children:"Hurray! Payment Successful "})]}):Object(l.jsx)("form",{onSubmit:i,children:Object(l.jsxs)("div",{className:"vector",children:[Object(l.jsx)("fieldset",{className:"details-group",children:Object(l.jsxs)("div",{className:"details",children:[Object(l.jsx)("h1",{className:"start-donate",children:"Start Donating "}),Object(l.jsxs)("label",{className:"container",children:[Object(l.jsx)("span",{children:"Name   "}),Object(l.jsx)("input",{type:"text",id:"name",name:"name"})]}),Object(l.jsxs)("label",{className:"container",children:[Object(l.jsx)("span",{children:"Phone  "}),Object(l.jsx)("input",{type:"number",id:"phone",name:"phone"})]}),Object(l.jsxs)("label",{className:"container",children:[Object(l.jsx)("span",{children:"Amount  "}),Object(l.jsx)("input",{type:"number",id:"amount",name:"amount"})]}),Object(l.jsxs)("label",{className:"container",children:[Object(l.jsx)("span",{children:"Causes  "}),Object(l.jsxs)("select",{id:"causes",class:"field",children:[Object(l.jsx)("option",{value:"Food",children:"Food"}),Object(l.jsx)("option",{value:"Clothing",children:"Clothing"}),Object(l.jsx)("option",{value:"Education",children:"Education"})]})]}),Object(l.jsxs)("label",{className:"container",children:[Object(l.jsx)("span",{children:"EmailId  "}),Object(l.jsx)("input",{type:"text",id:"emailId",name:"EmailId"})]})]})}),Object(l.jsx)("fieldset",{className:"FormGroup",children:Object(l.jsx)("div",{className:"FormRow",children:Object(l.jsx)(f.CardElement,{options:E})})}),Object(l.jsx)("div",{className:"pay-btn",children:Object(l.jsx)("button",{children:"Pay"})})]})})})}var C=Object(O.a)("pk_test_51JOcaoSJc7FCuHyuhoDu6b0vLkMVMHJJGUPgPuXgW7Hgi4eKyIfmcTmRltzRS64o4IbWZBAgr07e489zXo1Zt7w700NBz1SUQM");function H(){return Object(l.jsx)(f.Elements,{stripe:C,children:Object(l.jsx)(I,{})})}var B=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(p,{}),Object(l.jsx)(r.a,{path:"/",exact:!0,component:d}),Object(l.jsx)(r.a,{path:"/about",exact:!0,component:x}),Object(l.jsx)(r.a,{path:"/StripeContainer",exact:!0,component:H})]})})};o.a.render(Object(l.jsx)(B,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.7efd66d8.chunk.js.map