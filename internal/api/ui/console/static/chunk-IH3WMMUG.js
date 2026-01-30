import{a as F,b as U}from"./chunk-NDZ45CA6.js";import{c as G}from"./chunk-4NR27B3U.js";import{c as K}from"./chunk-NUYXM4W4.js";import{Cc as T,Eb as p,Fa as s,Fb as x,Gb as _,Gf as N,Hf as L,Ja as g,Ma as M,Na as y,Ra as b,Sb as D,Xb as d,Yb as m,aa as C,eb as f,fb as l,ff as B,gb as r,hb as j,hf as E,ja as h,ka as I,ob as R,pc as S,qb as c,sb as u,se as v,te as O,we as P,xe as w,ye as A,ze as k}from"./chunk-UYIM6G44.js";var z=()=>["select","key","displayname","group"];function H(n,e){if(n&1){let a=R();l(0,"cnsl-project-roles-table",8),c("changedSelection",function(t){h(a);let i=u();return I(i.selectRoles(t))}),r()}if(n&2){let a=u();f("displayedColumns",D(5,z))("projectId",a.projectId)("grantId",a.grantId)("selectedKeys",a.selectedRoleKeysList)("showSelectionActionButton",!1)}}var $=(()=>{let e=class e{constructor(o,t){this.dialogRef=o,this.data=t,this.projectId="",this.grantId="",this.selectedRoleKeysList=[],this.selectedRoleKeys=[],this.projectId=t.projectId,this.grantId=t.grantId,this.selectedRoleKeysList=t.selectedRoleKeysList}selectRoles(o){this.selectedRoleKeys=o}closeDialog(){this.dialogRef.close(!1)}closeDialogWithSuccess(){this.dialogRef.close({roles:this.selectedRoleKeys})}};e.\u0275fac=function(t){return new(t||e)(g(v),g(O))},e.\u0275cmp=M({type:e,selectors:[["cnsl-user-grant-role-dialog"]],standalone:!1,decls:14,vars:10,consts:[["mat-dialog-title","",1,"title"],["mat-dialog-content",""],[1,"dialog-table-wrapper"],["class","role-table",3,"displayedColumns","projectId","grantId","selectedKeys","showSelectionActionButton","changedSelection",4,"ngIf"],["mat-dialog-actions","",1,"action"],["mat-stroked-button","",3,"click"],[1,"fill-space"],["mat-raised-button","","color","primary",1,"ok-button",3,"click"],[1,"role-table",3,"changedSelection","displayedColumns","projectId","grantId","selectedKeys","showSelectionActionButton"]],template:function(t,i){t&1&&(l(0,"span",0),p(1),d(2,"translate"),r(),l(3,"div",1)(4,"div",2),b(5,H,1,6,"cnsl-project-roles-table",3),r()(),l(6,"div",4)(7,"button",5),c("click",function(){return i.closeDialog()}),p(8),d(9,"translate"),r(),j(10,"span",6),l(11,"button",7),c("click",function(){return i.closeDialogWithSuccess()}),p(12),d(13,"translate"),r()()),t&2&&(s(),x(m(2,4,i.data.i18nTitle)),s(4),f("ngIf",i.projectId),s(3),_(" ",m(9,6,"ACTIONS.CANCEL")," "),s(4),_(" ",m(13,8,"ACTIONS.CHANGE")," "))},dependencies:[S,P,A,w,B,F,N],styles:[`

.title[_ngcontent-%COMP%] {
  font-size: 1.2rem;
  margin-top: 0;
}
.dialog-table-wrapper[_ngcontent-%COMP%] {
  max-height: 500px;
  overflow-y: auto;
}
.dialog-table-wrapper[_ngcontent-%COMP%]   .role-table[_ngcontent-%COMP%] {
  display: block;
  width: 100%;
  margin-top: 1rem;
}
.action[_ngcontent-%COMP%] {
  display: flex;
}
.action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  border-radius: 0.5rem;
}
.action[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%] {
  margin-left: 0.5rem;
}
.action[_ngcontent-%COMP%]   .fill-space[_ngcontent-%COMP%] {
  flex: 1;
}`]});let n=e;return n})();var pe=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=y({type:e}),e.\u0275inj=C({imports:[T,G,k,E,K,L,U]});let n=e;return n})();export{$ as a,pe as b};
