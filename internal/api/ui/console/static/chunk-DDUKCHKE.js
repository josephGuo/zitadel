import{b as O}from"./chunk-NUYXM4W4.js";import{Eb as r,Fa as o,Fb as v,Gf as T,Jb as x,Ma as d,Nb as _,Ra as u,Ta as f,Xb as c,Yb as p,eb as l,ef as I,fb as n,gb as i,kf as M,pc as b,qb as C,sb as g,tb as S,ub as y}from"./chunk-UYIM6G44.js";var E=["*"];function P(e,t){if(e&1&&(n(0,"span",7),r(1),c(2,"translate"),c(3,"translate"),i()),e&2){let m=g();o(),x("",p(2,4,"ACTIONS.STEP")," ",m.currentCreateStep," ",p(3,6,"ACTIONS.OF")," ",m.createSteps)}}var G=(()=>{let t=class t{constructor(){this.currentCreateStep=1,this.createSteps=1,this.title="",this.closed=new f}close(){this.closed.emit()}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=d({type:t,selectors:[["cnsl-create-layout"]],inputs:{currentCreateStep:"currentCreateStep",createSteps:"createSteps",title:"title"},outputs:{closed:"closed"},standalone:!1,ngContentSelectors:E,decls:12,vars:6,consts:[[1,"max-width-container"],[1,"enlarged-container"],[1,"create-layout-container"],["mat-icon-button","",3,"click","matTooltip"],[1,"abort"],["class","abort-2",4,"ngIf"],[1,"create-layout-content"],[1,"abort-2"]],template:function(a,s){a&1&&(S(),n(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),c(4,"translate"),C("click",function(){return s.close()}),n(5,"mat-icon"),r(6,"close"),i()(),n(7,"span",4),r(8),i(),u(9,P,4,8,"span",5),i(),n(10,"div",6),y(11),i()()()),a&2&&(o(3),l("matTooltip",_(p(4,4,"ACTIONS.CLOSE"))),o(5),v(s.title),o(),l("ngIf",s.createSteps>1))},dependencies:[b,O,I,M,T],styles:[`

.create-layout-container[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}
.create-layout-container[_ngcontent-%COMP%]   .abort[_ngcontent-%COMP%] {
  font-size: 1.2rem;
  margin-left: 1.5rem;
  text-transform: uppercase;
  font-size: 14px;
  opacity: 0.8;
  letter-spacing: 0.05em;
}
.create-layout-container[_ngcontent-%COMP%]   .abort-2[_ngcontent-%COMP%] {
  margin-left: 2rem;
  white-space: nowrap;
  font-size: 12px;
  padding: 0.25rem 1rem;
  border: 1px solid rgba(135, 149, 161, 0.2);
  border-radius: 50vw;
}
.create-layout-content[_ngcontent-%COMP%] {
  padding-left: 4.5rem;
}`]});let e=t;return e})();export{G as a};
