"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[418],{9418:function(t,e,n){n.r(e),n.d(e,{default:function(){return C}});var r=n(5861),a=n(9439),c=n(7757),o=n.n(c),i=n(2791),u=n(9434),s=n(3697),l=n(6052),d=function(){var t=(0,u.I0)();return{filter:(0,u.v9)((function(t){return t.contacts.filter})),contacts:(0,u.v9)((function(t){return t.contacts.items})),isLoaging:(0,u.v9)((function(t){return t.contacts.loader})),error:(0,u.v9)((function(t){return t.contacts.error})),setFilter:function(e){t((0,s.M)(e))},getContacts:function(){t(l.m.getContacts())},addContact:function(e){t(l.m.addContact(e))},deleteContact:function(e){t(l.m.deleteContact(e))}}},f=n(3166),m=n(3329),h=function(){var t=d(),e=t.contacts,n=t.addContact,c=(0,i.useState)(""),u=(0,a.Z)(c,2),s=u[0],l=u[1],h=(0,i.useState)(""),p=(0,a.Z)(h,2),v=p[0],x=p[1],j=function(t){var e=t.target,n=e.name,r=e.value;switch(n){case"name":l(r);break;case"number":x(r)}console.log(n,r)},b=function(){var t=(0,r.Z)(o().mark((function t(r){var a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.preventDefault(),(a=e.some((function(t){return t.name===s.toLowerCase()&&t.number===v||t.number===v})))?(0,f.Rr)("".concat(s," or ").concat(v," is already in contacts")):n({name:s,number:v}),!a&&(0,f.Qm)("the contact is in the list  \ud83d\ude03"),l(""),x("");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,m.jsx)("div",{children:(0,m.jsxs)("form",{onSubmit:b,children:[(0,m.jsx)("input",{type:"text",name:"name",value:s,placeholder:"Name",pattern:"^[a-zA-Z\\s]+$",title:"Name may contain only latin letters",required:!0,onChange:j}),(0,m.jsx)("input",{type:"tel",name:"number",value:v,placeholder:"phone number",pattern:"^\\d{3}-\\d{2}-\\d{2}$",title:"The phone number should look like this: 012-34-56",required:!0,onChange:j}),(0,m.jsx)("button",{type:"submit ",children:"Add contact"})]})})},p=function(){var t=d(),e=t.filter,n=t.setFilter;return(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{children:"Filter contacts by name"}),(0,m.jsx)("input",{type:"text",name:"filter",value:e,placeholder:"Find contact by name",onChange:function(t){return n(t.target.value)}})]})},v=function(t){var e=t.id,n=t.name,r=t.phone,a=(0,u.I0)(),c=d(),o=c.deleteContact,s=c.setFilter;return(0,i.useEffect)((function(){a(l.m.getContacts())}),[a]),(0,m.jsxs)("li",{children:[(0,m.jsxs)("p",{children:[n,": ",r]}),(0,m.jsx)("button",{type:"button",onClick:function(){o(e),(0,f.v7)("".concat(n," tel:").concat(r," is deleted")),s("")},children:"Delete"})]})},x=n(8809),j=n(9869),b=function(){var t=(0,u.v9)(j.Z.getIsLoggedIn),e=(0,u.I0)(),n=d(),r=n.contacts,a=n.isLoaging,c=n.filter;(0,i.useEffect)((function(){e(l.m.getContacts())}),[e]);var o=function(){var t=c.toLowerCase();if(r)return r.filter((function(e){return e.name.toLowerCase().includes(t)}))}();return(0,m.jsxs)("div",{children:[a&&(0,m.jsx)(x.a,{}),t&&(0,m.jsx)("ul",{children:r&&o.map((function(t){var e=t.id,n=t.name,r=t.number;return(0,m.jsx)(v,{id:e,name:n,phone:r},e)}))})]})},C=function(){return(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{children:"Enter a name and phone number to add a contact"}),(0,m.jsx)(h,{}),(0,m.jsx)(p,{}),(0,m.jsx)(b,{})]})}}}]);
//# sourceMappingURL=418.55967801.chunk.js.map