import{a as R,b as E,c as V,d as T,f as b,j as L}from"./chunk-CBYR6NJF.js";import{a as N}from"./chunk-MMBPSHE7.js";import{$ as y,Db as u,Ea as l,Eb as h,Fb as v,Ff as S,Hb as g,Oa as P,Rb as I,Sb as O,Ta as d,Wb as w,Xb as _,Yb as C,Zb as x,db as o,eb as a,fb as m,gb as s,pc as M,rb as c,yb as f}from"./chunk-SVRRUXWX.js";var le=(()=>{let t=class t{constructor(){}buildValidators(i){let p=[b];return i?.minLength&&p.push(L(Number(i.minLength))),i?.hasLowercase&&p.push(T),i?.hasUppercase&&p.push(V),i?.hasNumber&&p.push(E),i?.hasSymbol&&p.push(R),p}};t.\u0275fac=function(p){return new(p||t)},t.\u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var U=()=>({value:70}),A=e=>({value:e});function D(e,t){e&1&&s(0,"i",9)}function G(e,t){if(e&1&&(a(0,"div",11),s(1,"mat-progress-spinner",12),m()),e&2){let n=t.ngIf,i=c(3);l(),o("color",n?"warn":"valid")("value",(i.password==null||i.password.value==null?null:i.password.value.length)/i.minLength*100)}}function k(e,t){if(e&1&&d(0,G,2,2,"div",10),e&2){c();let n=f(5),i=c();o("ngIf",i.password&&i.password.errors&&i.password.errors.minlength||(i.password==null||i.password.value==null?null:i.password.value.length)===0)("ngIfElse",n)}}function z(e,t){e&1&&s(0,"i",13)}function F(e,t){if(e&1&&(a(0,"div",4),d(1,D,1,0,"i",8)(2,k,1,2,"ng-template",null,0,x)(4,z,1,0,"ng-template",null,1,x),a(6,"span",7),u(7),w(8,"translate"),m()()),e&2){let n=f(3),i=c();l(),o("ngIf",(i.password==null||i.password.value==null?null:i.password.value.length)===0)("ngIfElse",n),l(6),g("",C(8,5,"USER.PASSWORD.MINLENGTHERROR",O(8,A,i.policy.minLength))," (",i.password==null||i.password.value==null?null:i.password.value.length,"/",i.policy.minLength,") ")}}function W(e,t){e&1&&s(0,"i",9)}function j(e,t){e&1&&s(0,"i",13)}function H(e,t){if(e&1&&(a(0,"div",4),d(1,W,1,0,"i",6)(2,j,1,0,"i",5),a(3,"span",7),u(4),w(5,"translate"),m()()),e&2){let n=c();l(),o("ngIf",(n.password==null?null:n.password.pristine)||(n.password==null||n.password.errors==null?null:n.password.errors.errorssymbolerror)),l(),o("ngIf",(n.password==null?null:n.password.dirty)&&!(!(n.password==null||n.password.errors==null)&&n.password.errors.errorssymbolerror)),l(2),v(" ",_(5,3,"ERRORS.SYMBOLERROR"))}}function X(e,t){e&1&&s(0,"i",9)}function Y(e,t){e&1&&s(0,"i",13)}function q(e,t){if(e&1&&(a(0,"div",4),d(1,X,1,0,"i",6)(2,Y,1,0,"i",5),a(3,"span",7),u(4),w(5,"translate"),m()()),e&2){let n=c();l(),o("ngIf",(n.password==null?null:n.password.pristine)||(n.password==null||n.password.errors==null?null:n.password.errors.errorsnumbererror)),l(),o("ngIf",(n.password==null?null:n.password.dirty)&&!(!(n.password==null||n.password.errors==null)&&n.password.errors.errorsnumbererror)),l(2),v(" ",_(5,3,"ERRORS.NUMBERERROR"))}}function J(e,t){e&1&&s(0,"i",9)}function K(e,t){e&1&&s(0,"i",13)}function Q(e,t){if(e&1&&(a(0,"div",4),d(1,J,1,0,"i",6)(2,K,1,0,"i",5),a(3,"span",7),u(4),w(5,"translate"),m()()),e&2){let n=c();l(),o("ngIf",(n.password==null?null:n.password.pristine)||(n.password==null||n.password.errors==null?null:n.password.errors.errorsuppercasemissing)),l(),o("ngIf",(n.password==null?null:n.password.dirty)&&!(!(n.password==null||n.password.errors==null)&&n.password.errors.errorsuppercasemissing)),l(2),v(" ",_(5,3,"ERRORS.UPPERCASEMISSING"))}}function Z(e,t){e&1&&s(0,"i",9)}function $(e,t){e&1&&s(0,"i",13)}function ee(e,t){if(e&1&&(a(0,"div",4),d(1,Z,1,0,"i",6)(2,$,1,0,"i",5),a(3,"span",7),u(4),w(5,"translate"),m()()),e&2){let n=c();l(),o("ngIf",(n.password==null?null:n.password.pristine)||(n.password==null||n.password.errors==null?null:n.password.errors.errorslowercasemissing)),l(),o("ngIf",(n.password==null?null:n.password.dirty)&&!(!(n.password==null||n.password.errors==null)&&n.password.errors.errorslowercasemissing)),l(2),h(_(5,3,"ERRORS.LOWERCASEMISSING"))}}function ne(e,t){e&1&&s(0,"i",13)}function te(e,t){e&1&&s(0,"i",9)}var pe=(()=>{let t=class t{constructor(){this.password=null}get minLength(){return Number(this.policy.minLength)}};t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=P({type:t,selectors:[["cnsl-password-complexity-view"]],inputs:{password:"password",policy:"policy"},standalone:!1,decls:12,vars:14,consts:[["showSpinner",""],["trueminlength",""],[1,"validation-col"],["class","val",4,"ngIf"],[1,"val"],["class","las la-check green",4,"ngIf"],["class","las la-times red",4,"ngIf"],[1,"cnsl-secondary-text"],["class","las la-times red",4,"ngIf","ngIfElse"],[1,"las","la-times","red"],["class","complexity-sp-wrapper",4,"ngIf","ngIfElse"],[1,"complexity-sp-wrapper"],["diameter","20","mode","determinate",1,"complexity-spinner",3,"color","value"],[1,"las","la-check","green"]],template:function(p,r){p&1&&(a(0,"div",2),d(1,F,9,10,"div",3)(2,H,6,5,"div",3)(3,q,6,5,"div",3)(4,Q,6,5,"div",3)(5,ee,6,5,"div",3),a(6,"div",4),d(7,ne,1,0,"i",5)(8,te,1,0,"i",6),a(9,"span",7),u(10),w(11,"translate"),m()()()),p&2&&(l(),o("ngIf",r.policy.minLength),l(),o("ngIf",r.policy.hasSymbol),l(),o("ngIf",r.policy.hasNumber),l(),o("ngIf",r.policy.hasUppercase),l(),o("ngIf",r.policy.hasLowercase),l(2),o("ngIf",(r.password==null||r.password.value==null?null:r.password.value.length)===0||(r.password==null||r.password.value==null?null:r.password.value.length)<=70),l(),o("ngIf",(r.password==null||r.password.value==null?null:r.password.value.length)>70),l(2),g("",C(11,10,"USER.PASSWORD.MAXLENGTHERROR",I(13,U))," (",r.password==null||r.password.value==null?null:r.password.value.length,"/",70,") "))},dependencies:[M,N,S],styles:[`

.validation-col[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0;
  width: 100%;
}
.validation-col.between[_ngcontent-%COMP%] {
  margin: 0 0.5rem;
}
.validation-col[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  flex-basis: 50%;
  padding: 2px 0;
}
.validation-col[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 14px;
}
.validation-col[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%]   .complexity-sp-wrapper[_ngcontent-%COMP%] {
  height: 20px;
  width: 20px;
  margin-right: 1rem;
}
.validation-col[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%]   .complexity-sp-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.validation-col[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%]   .complexity-sp-wrapper[_ngcontent-%COMP%]   .complexity-spinner[color=valid][_ngcontent-%COMP%] {
  color: #56a392;
}
.validation-col[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  margin-right: 1rem;
  font-size: 20px;
}
.validation-col[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%]   i.green[_ngcontent-%COMP%] {
  color: #56a392;
}
.validation-col[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%]   i.red[_ngcontent-%COMP%] {
  color: var(--warn);
}`]});let e=t;return e})();export{le as a,pe as b};
