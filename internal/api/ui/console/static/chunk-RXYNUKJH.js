import{a as Y}from"./chunk-IN2WKMGQ.js";import{a as X}from"./chunk-DDUKCHKE.js";import{c as Z}from"./chunk-4NR27B3U.js";import{a as K,c as Q}from"./chunk-SXDFF7OK.js";import{a as H}from"./chunk-HTRO5VUB.js";import{c as N}from"./chunk-NUYXM4W4.js";import{Cc as T,Cg as y,Eb as C,Ee as w,Fa as a,Fb as M,Gb as S,Gf as G,Hf as J,Hg as U,Ja as m,Je as A,Kb as j,Ke as F,Lb as b,Ma as P,Mb as O,Na as f,Nb as _,Ne as R,Qe as B,Re as x,Sb as v,Xb as p,Yb as l,aa as u,bf as k,eb as g,eg as rt,fb as r,ff as L,gb as s,hf as D,mc as E,md as I,pg as q,qb as h,rg as W,sg as V,yg as z}from"./chunk-UYIM6G44.js";import{g as it}from"./chunk-PGTUUCJB.js";var tt=it(rt());var at=()=>({standalone:!0}),et=(()=>{let t=class t{constructor(o,n,i,d,c){this.router=o,this.toast=n,this.mgmtService=i,this._location=d,this.project=new tt.AddProjectRequest().toObject();let ot={type:K.ORG,routerLink:["/org"]};c.setBreadcrumb([ot])}saveProject(){this.mgmtService.addProject(this.project).then(o=>{this.toast.showInfo("PROJECT.TOAST.CREATED",!0),this.router.navigate(["projects",o.id],{queryParams:{new:!0}})}).catch(o=>{this.toast.showError(o)})}close(){this._location.back()}};t.\u0275fac=function(n){return new(n||t)(m(z),m(U),m(H),m(E),m(Q))},t.\u0275cmp=P({type:t,selectors:[["cnsl-project-create"]],standalone:!1,decls:15,vars:19,consts:[[3,"closed","title","createSteps","currentCreateStep"],["cdkFocusRegionStart","",3,"ngSubmit"],[1,"column"],["hintLabel","The name is required!",1,"formfield"],["cnslInput","","cdkFocusInitial","","autofocus","",3,"ngModelChange","ngModel","ngModelOptions"],["color","primary","mat-raised-button","","cdkFocusInitial","","type","submit","data-e2e","continue-button",1,"continue-button",3,"disabled"]],template:function(n,i){n&1&&(r(0,"cnsl-create-layout",0),p(1,"translate"),h("closed",function(){return i.close()}),r(2,"h1"),C(3),p(4,"translate"),s(),r(5,"form",1),h("ngSubmit",function(){return i.saveProject()}),r(6,"div",2)(7,"cnsl-form-field",3)(8,"cnsl-label"),C(9),p(10,"translate"),s(),r(11,"input",4),O("ngModelChange",function(c){return b(i.project.name,c)||(i.project.name=c),c}),s()()(),r(12,"button",5),C(13),p(14,"translate"),s()()()),n&2&&(g("title",_(l(1,10,"PROJECT.PAGES.CREATE")))("createSteps",1)("currentCreateStep",1),a(3),M(l(4,12,"PROJECT.PAGES.CREATE_DESC")),a(6),M(l(10,14,"PROJECT.NAME")),a(2),j("ngModel",i.project.name),g("ngModelOptions",v(18,at)),a(),g("disabled",!i.project.name),a(),S(" ",l(14,16,"ACTIONS.CONTINUE")," "))},dependencies:[x,w,A,F,B,R,X,q,W,V,L,G],styles:[`

h1[_ngcontent-%COMP%] {
  font-weight: 500;
}
.margin-right[_ngcontent-%COMP%] {
  margin-right: 0.5rem;
}
.column[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}
.column[_ngcontent-%COMP%]   .formfield[_ngcontent-%COMP%] {
  max-width: 400px;
  display: block;
}
.column[_ngcontent-%COMP%]   .formfield.autocomplete[_ngcontent-%COMP%] {
  margin-top: 1rem;
}
.column[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 0.8rem;
}
.column[_ngcontent-%COMP%]   .access-token[_ngcontent-%COMP%] {
  width: 400px;
}
.continue-button[_ngcontent-%COMP%] {
  margin-top: 3rem;
  display: block;
  height: 3.5rem;
  padding: 0 4rem;
}`]});let e=t;return e})();var mt=[{path:"",component:et,data:{animation:"AddPage"}}],nt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=f({type:t}),t.\u0275inj=u({imports:[y.forChild(mt),y]});let e=t;return e})();var xt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=f({type:t}),t.\u0275inj=u({imports:[I,nt,T,k,Y,Z,D,N,J]});let e=t;return e})();export{xt as default};
