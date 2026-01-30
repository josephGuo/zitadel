import{a as bt}from"./chunk-IN2WKMGQ.js";import{a as Ct}from"./chunk-DDUKCHKE.js";import{f as P}from"./chunk-SAN4XI3J.js";import{c as ht}from"./chunk-4NR27B3U.js";import{a as yt}from"./chunk-HTRO5VUB.js";import{c as J}from"./chunk-NUYXM4W4.js";import{Af as mt,Cc as V,Cg as T,Eb as d,Ee as Y,Fa as r,Fb as y,Gb as w,Gf as lt,Hf as pt,Hg as gt,Ja as c,Je as q,Ke as U,Ma as A,Na as v,Nb as M,Ne as K,Pe as u,Ra as I,Re as W,Ve as $,We as z,Xb as p,Yb as s,_e as H,a as N,aa as h,af as Q,bf as X,cf as Z,eb as l,ef as tt,eg as Rt,fb as m,ff as et,gb as a,hb as f,hf as nt,ja as x,ka as j,kf as it,lb as D,lf as ot,mb as k,mc as L,ob as F,oc as B,of as R,pc as G,pf as S,pg as st,qb as g,rg as ct,sb as O,sf as C,sg as dt,vf as E,wg as ut,xf as rt,yg as ft,zf as at}from"./chunk-UYIM6G44.js";import{g as Mt}from"./chunk-PGTUUCJB.js";var Et=Mt(Rt());function St(i,t){if(i&1){let _=F();m(0,"button",13),p(1,"translate"),g("click",function(){x(_);let n=O().index,o=O();return j(o.removeEntry(n))}),f(2,"i",14),a()}i&2&&l("matTooltip",M(s(1,2,"ACTIONS.REMOVE")))}function Tt(i,t){if(i&1&&(m(0,"div",5),D(1,6),m(2,"div",7)(3,"cnsl-form-field",8)(4,"cnsl-label"),d(5),p(6,"translate"),a(),f(7,"input",9),a(),m(8,"cnsl-form-field",8)(9,"cnsl-label"),d(10),p(11,"translate"),a(),f(12,"input",10),a(),m(13,"cnsl-form-field",8)(14,"cnsl-label"),d(15),p(16,"translate"),a(),f(17,"input",11),a()(),I(18,St,3,4,"button",12),k(),a()),i&2){let _=t.$implicit,e=t.index;l("@animate",void 0),r(),l("formGroup",_),r(4),y(s(6,6,"PROJECT.ROLE.KEY")),r(5),y(s(11,8,"PROJECT.ROLE.DISPLAY_NAME")),r(5),y(s(16,10,"PROJECT.ROLE.GROUP")),r(3),l("ngIf",e!==0)}}var _t=(()=>{let t=class t{constructor(e,n,o,b,Ot,wt){this.router=e,this.route=n,this.toast=o,this.mgmtService=b,this.fb=Ot,this._location=wt,this.subscription=new N,this.projectId="",this.formGroup=this.fb.group({key:new u("",[P]),displayName:new u(""),group:new u("")}),this.formArray=new H([this.formGroup])}addEntry(){let e=this.fb.group({key:new u("",[P]),displayName:new u(""),group:new u("")});this.formArray.push(e)}removeEntry(e){this.formArray.removeAt(e)}ngOnInit(){this.subscription=this.route.params.subscribe(e=>this.getData(e))}ngOnDestroy(){this.subscription.unsubscribe()}getData({projectid:e}){this.projectId=e}addRole(){let e=this.formArray.value.map(n=>{let o=new Et.BulkAddProjectRolesRequest.Role;return o.setKey(n.key),o.setDisplayName(n.displayName),o.setGroup(n.group),o});this.mgmtService.bulkAddProjectRoles(this.projectId,e).then(()=>{this.toast.showInfo("PROJECT.TOAST.ROLESCREATED",!0),this.router.navigate(["projects",this.projectId],{queryParams:{id:"roles",new:!0}})}).catch(n=>{this.toast.showError(n)})}close(){this._location.back()}};t.\u0275fac=function(n){return new(n||t)(c(ft),c(ut),c(gt),c(yt),c(Q),c(L))},t.\u0275cmp=A({type:t,selectors:[["cnsl-project-role-create"]],standalone:!1,decls:13,vars:18,consts:[[3,"closed","title","createSteps","currentCreateStep"],[3,"ngSubmit"],["class","newrole-content",4,"ngFor","ngForOf"],["color","primary","type","button","data-e2e","new-project-role-button","mat-stroked-button","",1,"add-line-btn",3,"click"],["color","primary","mat-raised-button","","type","submit","data-e2e","save-button",1,"continue-button",3,"disabled"],[1,"newrole-content"],[3,"formGroup"],[1,"newrole"],[1,"formfield"],["cnslInput","","formControlName","key","data-e2e","role-key-input"],["cnslInput","","formControlName","displayName","data-e2e","role-display-name-input"],["cnslInput","","formControlName","group","data-e2e","role-group-input"],["mat-icon-button","","type","button","color","warn",3,"matTooltip","click",4,"ngIf"],["mat-icon-button","","type","button","color","warn",3,"click","matTooltip"],[1,"las","la-trash"]],template:function(n,o){n&1&&(m(0,"cnsl-create-layout",0),p(1,"translate"),g("closed",function(){return o.close()}),m(2,"h1"),d(3),p(4,"translate"),a(),m(5,"form",1),g("ngSubmit",function(){return o.addRole()}),I(6,Tt,19,12,"div",2),m(7,"button",3),g("click",function(){return o.addEntry()}),d(8),p(9,"translate"),a(),m(10,"button",4),d(11),p(12,"translate"),a()()()),n&2&&(l("title",M(s(1,10,"PROJECT.ROLE.ADDTITLE")))("createSteps",1)("currentCreateStep",1),r(3),y(s(4,12,"PROJECT.ROLE.ADDDESCRIPTION")),r(2),l("@list",void 0),r(),l("ngForOf",o.formArray.controls),r(2),w(" ",s(9,14,"PROJECT.ROLE.ADDNEWLINE")," "),r(2),l("disabled",o.formArray.invalid),r(),w(" ",s(12,16,"ACTIONS.SAVE")," "))},dependencies:[B,G,W,Y,q,U,K,$,z,st,ct,dt,Ct,et,tt,it,lt],styles:[`

.add-line-btn[_ngcontent-%COMP%] {
  margin-bottom: 1rem;
  border-radius: 0.5rem;
}
.newrole-content[_ngcontent-%COMP%] {
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1254901961);
  margin-bottom: 1rem;
  display: flex;
}
.newrole-content[_ngcontent-%COMP%]   .newrole[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr;
  flex: 1;
}
@media only screen and (min-width: 1000px) {
  .newrole-content[_ngcontent-%COMP%]   .newrole[_ngcontent-%COMP%] {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
}
.newrole-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  align-self: flex-end;
  margin-bottom: 1rem;
}
.continue-button[_ngcontent-%COMP%] {
  margin-top: 3rem;
  display: block;
  height: 3.5rem;
  padding: 0 4rem;
}
@media only screen and (max-width: 450px) {
  .continue-button[_ngcontent-%COMP%] {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
}`],data:{animation:[R("list",[E(":enter",[at("@animate",mt(80,rt()))])]),R("animate",[E(":enter",[C({opacity:0,transform:"translateY(-100%)"}),S("100ms",C({opacity:1,transform:"translateY(0)"}))]),E(":leave",[C({opacity:1,transform:"translateY(0)"}),S("100ms",C({opacity:0,transform:"translateY(100%)"}))])])]}});let i=t;return i})();var Pt=[{path:"",component:_t,data:{animation:"AddPage"}}],It=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=v({type:t}),t.\u0275inj=h({imports:[T.forChild(Pt),T]});let i=t;return i})();var le=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=v({type:t}),t.\u0275inj=h({imports:[It,V,X,Z,ht,bt,nt,J,ot,pt]});let i=t;return i})();export{le as default};
