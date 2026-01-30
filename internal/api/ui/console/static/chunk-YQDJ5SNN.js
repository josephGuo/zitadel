import{a as k,b as F}from"./chunk-DE7G22BT.js";import{Eb as r,Fa as e,Fb as g,Gb as P,Gf as h,Hb as T,Ja as E,Je as y,Kb as L,Lb as A,Ma as C,Mb as S,Qe as B,Ra as O,Xb as l,Yb as s,bg as x,eb as m,fb as i,ff as G,gb as o,kg as j,oc as b,qb as u,se as M,te as R,we as v,xe as D,ye as N}from"./chunk-6LERPP6H.js";import{g as V}from"./chunk-PGTUUCJB.js";var d=V(x());function w(p,n){if(p&1&&(i(0,"mat-radio-button",9)(1,"span",10),r(2),l(3,"translate"),o()()),p&2){let I=n.$implicit;m("value",I),e(2),g(s(3,2,"PROJECT.PAGES.PRIVATELABEL."+I+".TITLE"))}}var X=(()=>{let n=class n{constructor(c,a){this.dialogRef=c,this.data=a,this.setting=d.PrivateLabelingSetting.PRIVATE_LABELING_SETTING_UNSPECIFIED,this.settings=[d.PrivateLabelingSetting.PRIVATE_LABELING_SETTING_UNSPECIFIED,d.PrivateLabelingSetting.PRIVATE_LABELING_SETTING_ENFORCE_PROJECT_RESOURCE_OWNER_POLICY,d.PrivateLabelingSetting.PRIVATE_LABELING_SETTING_ALLOW_LOGIN_USER_RESOURCE_OWNER_POLICY],this.setting=a.setting}closeDialog(c){this.dialogRef.close(c)}};n.\u0275fac=function(a){return new(a||n)(E(M),E(R))},n.\u0275cmp=C({type:n,selectors:[["cnsl-project-private-labeling-dialog"]],standalone:!1,decls:19,vars:19,consts:[["mat-dialog-title","",1,"title"],["mat-dialog-content",""],[1,"desc","cnsl-secondary-text"],[1,"project-radio-group",3,"ngModelChange","ngModel"],["class","radio-button",3,"value",4,"ngFor","ngForOf"],[1,"info"],["mat-dialog-actions","",1,"action"],["cdkFocusInitial","","mat-stroked-button","",3,"click"],["cdkFocusInitial","","color","primary","mat-raised-button","",3,"click","disabled"],[1,"radio-button",3,"value"],[1,"label"]],template:function(a,t){a&1&&(i(0,"h1",0),r(1),l(2,"translate"),o(),i(3,"div",1)(4,"p",2),r(5),l(6,"translate"),o(),i(7,"mat-radio-group",3),S("ngModelChange",function(_){return A(t.setting,_)||(t.setting=_),_}),O(8,w,4,4,"mat-radio-button",4),o(),i(9,"cnsl-info-section",5),r(10),l(11,"translate"),o()(),i(12,"div",6)(13,"button",7),u("click",function(){return t.closeDialog()}),r(14),l(15,"translate"),o(),i(16,"button",8),u("click",function(){return t.closeDialog(t.setting)}),r(17),l(18,"translate"),o()()),a&2&&(e(),T("",s(2,9,"PROJECT.PAGES.PRIVATELABEL.DIALOG.TITLE")," ",t.data==null?null:t.data.number),e(4),g(s(6,11,"PROJECT.PAGES.PRIVATELABEL.DIALOG.DESCRIPTION")),e(2),L("ngModel",t.setting),e(),m("ngForOf",t.settings),e(2),g(s(11,13,"PROJECT.PAGES.PRIVATELABEL."+t.setting+".DESC")),e(4),P(" ",s(15,15,"ACTIONS.CLOSE")," "),e(2),m("disabled",t.setting===void 0),e(),P(" ",s(18,17,"ACTIONS.OK")," "))},dependencies:[b,v,N,D,G,y,B,k,F,j,h],styles:[`

.title[_ngcontent-%COMP%] {
  font-size: 1.2rem;
  margin: 0;
}
.desc[_ngcontent-%COMP%] {
  font-size: 0.9rem;
}
.project-radio-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}
.project-radio-group[_ngcontent-%COMP%]   .radio-button[_ngcontent-%COMP%] {
  margin: 0.5rem 0;
}
.project-radio-group[_ngcontent-%COMP%]   .radio-button[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {
  white-space: normal;
}
.info[_ngcontent-%COMP%] {
  margin: 1rem 0;
  display: block;
}
.action[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
}
.action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  border-radius: 0.5rem;
}`]});let p=n;return p})();export{X as a};
