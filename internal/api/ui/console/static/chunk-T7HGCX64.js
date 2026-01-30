import{e as D}from"./chunk-H4USRU6D.js";import"./chunk-6QV4WOKH.js";import{Ba as C,Bg as S,Cc as L,Db as I,Ea as a,Eb as M,Ff as j,Gf as B,La as O,Mb as v,Oa as E,Pa as u,Rb as z,Ta as c,Wb as _,Xb as x,Zb as h,aa as f,db as r,eb as l,ef as k,fb as y,gb as m,gf as N,jf as w,kb as P,kf as U,lb as T,pc as b,rb as s,yb as p,yg as R}from"./chunk-SVRRUXWX.js";import"./chunk-Z7V3BZMT.js";var $=()=>["/users/me"];function q(t,e){if(t&1&&m(0,"img",12),t&2){let o=s(2);r("src",o.labelpolicy.logoUrlDark,C)}}function J(t,e){if(t&1&&m(0,"img",12),t&2){let o=s(3);r("src",o.labelpolicy.logoUrl,C)}}function K(t,e){if(t&1&&c(0,J,1,1,"img",11),t&2){let o=s(2),n=p(5);r("ngIf",o.labelpolicy.logoUrl)("ngIfElse",n)}}function H(t,e){if(t&1&&(P(0),c(1,q,1,1,"img",11)(2,K,1,2,"ng-template",null,1,h),T()),t&2){let o=p(3),n=s();a(),r("ngIf",n.dark&&n.labelpolicy.logoUrlDark)("ngIfElse",o)}}function Q(t,e){t&1&&m(0,"img",14)}function V(t,e){t&1&&m(0,"img",15)}function W(t,e){if(t&1&&c(0,Q,1,0,"img",13)(1,V,1,0,"ng-template",null,2,h),t&2){let o=p(2),n=s();r("ngIf",n.dark)("ngIfElse",o)}}var A="labelPolicyOnSignout",F=(()=>{let e=class e{constructor(n){this.dark=!0,this.queryParams={state:""};let i=localStorage.getItem("theme");this.dark=i==="dark-theme"?!0:i!=="light-theme";let g=localStorage.getItem(A);if(!g){n.labelPolicyLoading$.next(!1);return}let d=JSON.parse(g);localStorage.removeItem(A),d&&(this.labelpolicy=d,n.labelPolicyLoading$.next(!1))}};e.\u0275fac=function(i){return new(i||e)(O(D))},e.\u0275cmp=E({type:e,selectors:[["cnsl-signedout"]],standalone:!1,decls:16,vars:14,consts:[["zitadelLogo",""],["lighttheme",""],["zitadellighttheme",""],[1,"signed-out-wrap"],[1,"block"],[1,"signed-out-header"],[4,"ngIf","ngIfElse"],[1,"cnsl-secondary-text"],["color","primary","mat-raised-button","",3,"matTooltip","routerLink"],[1,"cnsl-action-button"],[1,"las","la-sign-in-alt"],["alt","logo",3,"src",4,"ngIf","ngIfElse"],["alt","logo",3,"src"],["alt","zitadel logo","src","./assets/images/zitadel-logo-light.svg",4,"ngIf","ngIfElse"],["alt","zitadel logo","src","./assets/images/zitadel-logo-light.svg"],["alt","zitadel logo","src","./assets/images/zitadel-logo-dark.svg"]],template:function(i,g){if(i&1&&(l(0,"div",3)(1,"div",4)(2,"div",5),c(3,H,4,2,"ng-container",6)(4,W,3,2,"ng-template",null,0,h),l(6,"p",7),I(7),_(8,"translate"),y(),l(9,"a",8),_(10,"translate"),l(11,"div",9),m(12,"i",10),l(13,"span"),I(14),_(15,"translate"),y()()()()()()),i&2){let d=p(5);a(3),r("ngIf",g.labelpolicy)("ngIfElse",d),a(4),M(x(8,7,"USER.SIGNEDOUT")),a(2),r("matTooltip",v(x(10,9,"ACTIONS.LOGIN")))("routerLink",z(13,$)),a(5),M(x(15,11,"USER.SIGNEDOUT_BTN"))}},dependencies:[b,R,k,w,j],styles:[`

.signed-out-wrap[_ngcontent-%COMP%] {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.signed-out-wrap[_ngcontent-%COMP%]   .signed-out-header[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
.signed-out-wrap[_ngcontent-%COMP%]   .signed-out-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  font-size: 3rem;
}
.signed-out-wrap[_ngcontent-%COMP%]   .signed-out-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  text-align: center;
  font-size: 14px;
  margin: 2rem 0 3rem 0;
}
.signed-out-wrap[_ngcontent-%COMP%]   .signed-out-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  height: 140px;
  object-fit: contain;
  object-position: center;
  max-width: 170px;
}`]});let t=e;return t})();var X=[{path:"",component:F}],Y=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=u({type:e}),e.\u0275inj=f({imports:[S.forChild(X),S]});let t=e;return t})();var _t=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=u({type:e}),e.\u0275inj=f({imports:[L,Y,N,U,B]});let t=e;return t})();export{_t as default};
