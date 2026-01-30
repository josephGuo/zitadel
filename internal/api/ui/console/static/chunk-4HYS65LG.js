import{Eb as l,Ee as A,Fa as t,Fb as f,Gb as u,Gf as k,Hb as b,Ja as c,Je as E,Kb as y,Lb as D,Ma as M,Mb as v,Qe as N,Xb as r,Yb as s,eb as _,fb as i,ff as P,gb as a,pg as B,qb as g,rg as w,se as h,sg as j,te as I,we as S,xe as O,ye as T}from"./chunk-6LERPP6H.js";var q=(()=>{let o=class o{constructor(m,n){this.dialogRef=m,this.data=n,this.name="",this.name=n.name??""}closeDialog(m=""){this.dialogRef.close(m)}};o.\u0275fac=function(n){return new(n||o)(c(h),c(I))},o.\u0275cmp=M({type:o,selectors:[["cnsl-name-dialog"]],standalone:!1,decls:20,vars:18,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"desc","cnsl-secondary-text"],[1,"formfield"],["data-e2e","name","cnslInput","",3,"ngModelChange","ngModel"],["mat-dialog-actions","",1,"action"],["mat-stroked-button","",3,"click"],["data-e2e","dialog-submit","color","primary","mat-raised-button","",3,"click","disabled"]],template:function(n,e){n&1&&(i(0,"h1",0)(1,"span"),l(2),r(3,"translate"),a()(),i(4,"div",1)(5,"p",2),l(6),r(7,"translate"),a(),i(8,"cnsl-form-field",3)(9,"cnsl-label"),l(10),r(11,"translate"),a(),i(12,"input",4),v("ngModelChange",function(p){return D(e.name,p)||(e.name=p),p}),a()()(),i(13,"div",5)(14,"button",6),g("click",function(){return e.closeDialog()}),l(15),r(16,"translate"),a(),i(17,"button",7),g("click",function(){return e.closeDialog(e.name)}),l(18),r(19,"translate"),a()()),n&2&&(t(2),b("",s(3,8,e.data.titleKey)," ",e.data==null?null:e.data.number),t(4),f(s(7,10,e.data.descKey)),t(4),f(s(11,12,e.data.labelKey)),t(2),y("ngModel",e.name),t(3),u(" ",s(16,14,"ACTIONS.CLOSE")," "),t(2),_("disabled",!e.name),t(),u(" ",s(19,16,"ACTIONS.RENAME")," "))},dependencies:[S,T,O,P,B,w,j,A,E,N,k],styles:[`

h1[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  margin: 0;
}
.desc[_ngcontent-%COMP%] {
  font-size: 14px;
}
.formfield[_ngcontent-%COMP%] {
  width: 100%;
}
.action[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
}
.action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  border-radius: 0.5rem;
}`]});let d=o;return d})();export{q as a};
