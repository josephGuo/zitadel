import{b as E,c as j}from"./chunk-PQSRKYLX.js";import{Cc as S,Eb as m,Fa as o,Fb as P,Gb as w,Ma as x,Na as u,Ra as s,Tb as y,Ub as I,aa as _,eb as r,ef as k,fb as a,gb as c,hb as M,hf as D,ja as f,ka as C,kf as F,lf as N,nc as b,ob as v,pc as T,qb as h,sb as p,tb as O,ub as g}from"./chunk-6LERPP6H.js";var z=[[["","card-actions",""]],"*"],B=["[card-actions]","*"],q=(n,t)=>({nomargin:n,warn:t}),A=n=>({"bottom-margin":n});function G(n,t){n&1&&(a(0,"mat-icon"),m(1,"keyboard_arrow_down"),c())}function H(n,t){n&1&&(a(0,"mat-icon"),m(1,"keyboard_arrow_up"),c())}function J(n,t){if(n&1){let e=v();a(0,"div",6)(1,"h2",7),m(2),c(),M(3,"span",8),g(4),a(5,"button",9),h("click",function(){f(e);let i=p(2);return C(i.expanded=!i.expanded)}),s(6,G,2,0,"mat-icon",10)(7,H,2,0,"mat-icon",10),c()()}if(n&2){let e=p(2);o(2),P(e.title),o(4),r("ngIf",!e.expanded),o(),r("ngIf",e.expanded)}}function K(n,t){if(n&1&&(a(0,"p",11),m(1),c()),n&2){let e=p(2);o(),w(" ",e.description," ")}}function L(n,t){if(n&1&&(a(0,"div",3),s(1,J,8,3,"div",4)(2,K,2,1,"p",5),c()),n&2){let e=p();r("ngClass",y(3,A,e.expanded)),o(),r("ngIf",e.title),o(),r("ngIf",e.description)}}function Q(n,t){n&1&&(a(0,"div",12),g(1,1),c())}var Y=(()=>{let t=class t{constructor(){this.title="",this.description="",this.expanded=!0,this.warn=!1,this.nomargin=!1}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=x({type:t,selectors:[["cnsl-card"]],inputs:{title:"title",description:"description",expanded:"expanded",warn:"warn",nomargin:"nomargin"},standalone:!1,ngContentSelectors:B,decls:3,vars:6,consts:[["data-e2e","app-card",1,"card",3,"ngClass"],["class","header",3,"ngClass",4,"ngIf"],["class","card-content",4,"ngIf"],[1,"header",3,"ngClass"],["class","row",4,"ngIf"],["class","desc cnsl-secondary-text",4,"ngIf"],[1,"row"],["data-e2e","app-card-title",1,"title"],[1,"fill-space"],["type","button","matTooltip","Expand or collapse","mat-icon-button","",1,"button",3,"click"],[4,"ngIf"],[1,"desc","cnsl-secondary-text"],[1,"card-content"]],template:function(i,d){i&1&&(O(z),a(0,"div",0),s(1,L,3,5,"div",1)(2,Q,2,0,"div",2),c()),i&2&&(r("ngClass",I(3,q,d.nomargin,d.warn)),o(),r("ngIf",d.title||d.description),o(),r("ngIf",d.expanded))},dependencies:[b,T,E,k,F],styles:[`

.card[_ngcontent-%COMP%] {
  margin: 1rem 0;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  padding-top: 1rem;
  min-width: 300px;
}
.card.nomargin[_ngcontent-%COMP%] {
  margin: 0;
}
.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {
  margin-top: 0;
}
.card[_ngcontent-%COMP%]   .header.bottom-margin[_ngcontent-%COMP%] {
  margin-bottom: 1rem;
}
.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-overflow: ellipsis;
  overflow: hidden;
}
.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .fill-space[_ngcontent-%COMP%] {
  flex: 1;
}
.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {
  margin-right: -0.5rem;
}
.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {
  font-size: 14px;
  margin-top: 0.5rem;
}
.card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  width: 100%;
}
@media only screen and (max-width: 500px) {
  .card[_ngcontent-%COMP%] {
    margin: 0.5rem 0;
    padding: 1rem;
  }
}`],changeDetection:0});let n=t;return n})();var an=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=u({type:t}),t.\u0275inj=_({imports:[S,j,D,N]});let n=t;return n})();export{Y as a,an as b};
