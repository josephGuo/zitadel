import{a as $t,b as Wt}from"./chunk-ZJAPHBS4.js";import{a as St}from"./chunk-BCRSMVOU.js";import{b as Et,c as Dt,d as It,e as At,f as kt,g as Vt,h as Bt,i as Rt,j as Ft,k as Nt,l as zt,m as Lt,p as Ht,q as jt}from"./chunk-UYOAWAU5.js";import{b as Ot,c as Tt,d as Pt,e as wt}from"./chunk-OEIBBWVX.js";import{a as xt,b as bt}from"./chunk-5T7IASBX.js";import{c as vt}from"./chunk-WSLWSWWW.js";import{b as it,c as at}from"./chunk-EIOO4VIF.js";import{$e as ct,Cc as q,Ce as ot,Db as p,Ea as a,Eb as M,Ef as v,Fa as I,Fb as x,Ff as ut,He as rt,Ie as lt,Jb as V,Jg as yt,Kb as B,La as b,Lb as R,Le as mt,Mb as F,Nb as N,Oa as O,Oe as st,Pa as $,Pe as dt,Rb as z,T as H,Ta as _,Wb as d,Xb as c,Yb as Y,ba as j,cf as pt,db as s,df as w,eb as l,fb as m,ff as ft,g as L,gb as u,if as _t,ja as C,jf as gt,ka as h,kb as A,lb as k,nb as T,ng as Mt,oc as G,pb as y,pc as P,pg as Ct,qe as J,qg as ht,r as D,rb as g,re as X,ue as Z,vb as W,vc as K,ve as tt,wb as U,we as et,xb as Q,xe as nt}from"./chunk-VYHVRGSR.js";import{i as E}from"./chunk-Z7V3BZMT.js";var Ut=()=>({standalone:!0});function Jt(t,n){if(t&1&&(l(0,"p",12),p(1),d(2,"timestampToDate"),d(3,"localizedDate"),m()),t&2){let o=g();a(),M(Y(3,3,c(2,1,o.ts),"dd. MMM, HH:mm"))}}function Xt(t,n){if(t&1){let o=T();l(0,"form",13),y("ngSubmit",function(){let e=C(o).index,r=g();return h(r.saveElement(e))}),l(1,"div",14)(2,"cnsl-form-field",15,0)(4,"cnsl-label"),p(5),d(6,"translate"),m(),l(7,"input",16),R("ngModelChange",function(e){let r=C(o).$implicit;return B(r.key,e)||(r.key=e),h(e)}),m()(),l(8,"cnsl-form-field",15,1)(10,"cnsl-label"),p(11),d(12,"translate"),m(),l(13,"input",16),R("ngModelChange",function(e){let r=C(o).$implicit;return B(r.value,e)||(r.value=e),h(e)}),m()(),l(14,"button",17),d(15,"translate"),u(16,"i",18),m(),l(17,"button",19),d(18,"translate"),y("click",function(){let e=C(o).index,r=g();return h(r.removeEntry(e))}),u(19,"i",20),m()()()}if(t&2){let o=n.$implicit,i=n.index,e=g();a(2),s("id",N("key",i)),a(3),M(c(6,16,"METADATA.KEY")),a(2),V("ngModel",o.key),s("ngModelOptions",z(24,Ut)),a(),s("id",N("value",i)),a(3),M(c(12,18,"METADATA.VALUE")),a(2),V("ngModel",o.value),s("ngModelOptions",z(25,Ut)),a(),s("matTooltip",F(c(15,20,"ACTIONS.SAVE")))("disabled",!(o.key&&o.value)),a(3),s("matTooltip",F(c(18,22,"ACTIONS.REMOVE")))("disabled",e.metadata.length<2&&i===0&&!o.key)}}var xe=(()=>{let n=class n{constructor(i,e,r){this.toast=i,this.dialogRef=e,this.data=r,this.metadata=[];let f=new TextDecoder;this.metadata=r.metadata.map(({key:Yt,value:S})=>({key:Yt,value:typeof S=="string"?S:f.decode(S)}))}addEntry(){this.metadata.push({key:"",value:""})}removeEntry(i){return E(this,null,function*(){let e=this.metadata[i].key;if(!e){this.metadata.splice(i,1);return}try{yield this.data.removeFcn(e)}catch(r){this.toast.showError(r);return}this.toast.showInfo("METADATA.REMOVESUCCESS",!0),this.metadata.splice(i,1),this.metadata.length===0&&this.addEntry()})}saveElement(i){return E(this,null,function*(){let{key:e,value:r}=this.metadata[i];if(!(!e||!r))try{yield this.data.setFcn(e,r),this.toast.showInfo("METADATA.SETSUCCESS",!0)}catch(f){this.toast.showError(f)}})}closeDialog(){this.dialogRef.close()}};n.\u0275fac=function(e){return new(e||n)(b(yt),b(J),b(X))},n.\u0275cmp=O({type:n,selectors:[["cnsl-metadata-dialog"]],standalone:!1,decls:19,vars:11,consts:[["key",""],["value",""],[1,"title-row"],["mat-dialog-title","",1,"metadata-title"],[1,"fill-space"],["class","ts cnsl-secondary-text",4,"ngIf"],["mat-dialog-content","",1,"metadata-dialog-content"],[3,"ngSubmit",4,"ngFor","ngForOf"],["mat-stroked-button","","type","button",3,"click"],[1,"cnsl-action-button"],["mat-dialog-actions","",1,"action"],["cdkFocusInitial","","mat-stroked-button","",1,"ok-button",3,"click"],[1,"ts","cnsl-secondary-text"],[3,"ngSubmit"],[1,"content"],[1,"formfield",3,"id"],["cnslInput","",3,"ngModelChange","ngModel","ngModelOptions"],["mat-icon-button","","type","submit","color","primary",1,"set-button",3,"disabled","matTooltip"],[1,"las","la-save"],["mat-icon-button","","type","button","color","warn",1,"rm-button",3,"click","disabled","matTooltip"],[1,"las","la-trash"]],template:function(e,r){e&1&&(l(0,"div",2)(1,"h1",3),p(2),d(3,"translate"),m(),u(4,"span",4),_(5,Jt,4,6,"p",5),m(),l(6,"div",6),_(7,Xt,20,26,"form",7),l(8,"button",8),y("click",function(){return r.addEntry()}),l(9,"div",9)(10,"mat-icon"),p(11,"add"),m(),l(12,"span"),p(13),d(14,"translate"),m()()()(),l(15,"div",10)(16,"button",11),y("click",function(){return r.closeDialog()}),p(17),d(18,"translate"),m()()),e&2&&(a(2),M(c(3,5,"METADATA.TITLE")),a(3),s("ngIf",r.ts),a(2),s("ngForOf",r.metadata),a(6),x(" ",c(14,7,"ACTIONS.ADD")),a(4),x(" ",c(18,9,"ACTIONS.CLOSE")," "))},dependencies:[G,P,Z,et,tt,w,pt,Mt,Ct,ht,it,_t,dt,ot,rt,lt,st,mt,v,Ot,Pt],styles:[`

.title-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
}
.title-row[_ngcontent-%COMP%]   .metadata-title[_ngcontent-%COMP%] {
  font-size: 1.3rem;
  margin: 0;
}
.title-row[_ngcontent-%COMP%]   .fill-space[_ngcontent-%COMP%] {
  flex: 1;
}
.title-row[_ngcontent-%COMP%]   .ts[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 14px;
}
.title-row[_ngcontent-%COMP%]   .icon-button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {
  font-size: 1.2rem;
}
.metadata-dialog-content[_ngcontent-%COMP%] {
  min-width: 400px;
}
.metadata-dialog-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  margin: 0 -0.5rem;
}
.metadata-dialog-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .formfield[_ngcontent-%COMP%] {
  flex: 1;
  margin: 0 0.5rem;
}
@media only screen and (max-width: 450px) {
  .metadata-dialog-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .formfield[_ngcontent-%COMP%] {
    flex-basis: 100%;
  }
}
.metadata-dialog-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .rm-button[_ngcontent-%COMP%], 
.metadata-dialog-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .set-button[_ngcontent-%COMP%] {
  margin-top: 14px;
}
.action[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
}
.action[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%] {
  margin-left: 0.5rem;
}
.action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  border-radius: 0.5rem;
}`]});let t=n;return t})();function Zt(t,n){t&1&&u(0,"mat-spinner",3)}function te(t,n){t&1&&(l(0,"th",14),p(1),d(2,"translate"),m()),t&2&&(a(),M(c(2,1,"METADATA.KEY")))}function ee(t,n){if(t&1&&(l(0,"span",17),p(1),m()),t&2){let o=g().$implicit;a(),x(" ",o.key," ")}}function ne(t,n){if(t&1&&(l(0,"td",15),_(1,ee,2,1,"span",16),m()),t&2){let o=n.$implicit;a(),s("ngIf",o==null?null:o.key)}}function ie(t,n){t&1&&(l(0,"th",14),p(1),d(2,"translate"),m()),t&2&&(a(),M(c(2,1,"METADATA.VALUE")))}function ae(t,n){if(t&1&&(l(0,"span",17),p(1),m()),t&2){let o=g().$implicit;a(),x(" ",o.value," ")}}function oe(t,n){if(t&1&&(l(0,"td",15),_(1,ae,2,1,"span",16),m()),t&2){let o=n.$implicit;a(),s("ngIf",o==null?null:o.value)}}function re(t,n){t&1&&u(0,"tr",18)}function le(t,n){t&1&&u(0,"tr",19)}function me(t,n){t&1&&(l(0,"div",20),u(1,"i",21),l(2,"span"),p(3),d(4,"translate"),m()()),t&2&&(a(3),M(c(4,1,"USER.MFA.EMPTY")))}function se(t,n){if(t&1){let o=T();l(0,"cnsl-refresh-table",4),y("refreshed",function(){C(o);let e=g();return h(e.refresh.emit())}),l(1,"button",5),y("click",function(){C(o);let e=g();return h(e.editClicked.emit())}),p(2),d(3,"translate"),m(),l(4,"table",6),A(5,7),_(6,te,3,3,"th",8)(7,ne,2,1,"td",9),k(),A(8,10),_(9,ie,3,3,"th",8)(10,oe,2,1,"td",9),k(),_(11,re,1,0,"tr",11)(12,le,1,0,"tr",12),m(),_(13,me,5,3,"div",13),m()}if(t&2){let o=n.ngIf,i=g();s("loading",i.loading),a(),s("disabled",i.disabled),a(),x(" ",c(3,7,"ACTIONS.EDIT")," "),a(2),s("dataSource",o),a(7),s("matHeaderRowDef",i.displayedColumns),a(),s("matRowDefColumns",i.displayedColumns),a(),s("ngIf",!i.loading&&!(!(o==null||o.data==null)&&o.data.length))}}var Fe=(()=>{let n=class n{set metadata(i){this.metadata$.next(i)}constructor(){this.disabled=!1,this.loading=!1,this.editClicked=new I,this.refresh=new I,this.displayedColumns=["key","value"],this.metadata$=new L(1)}ngOnInit(){this.dataSource$=this.metadata$.pipe(D(i=>{let e=new TextDecoder;return i.map(({key:r,value:f})=>({key:r,value:typeof f=="string"?f:e.decode(f)}))}),H([]),D(i=>new Lt(i)))}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=O({type:n,selectors:[["cnsl-metadata"]],viewQuery:function(e,r){if(e&1&&W(St,5),e&2){let f;U(f=Q())&&(r.sort=f.first)}},inputs:{metadata:"metadata",disabled:"disabled",loading:"loading",description:"description"},outputs:{editClicked:"editClicked",refresh:"refresh"},standalone:!1,decls:5,vars:8,consts:[[1,"metadata-details",3,"title","description"],["card-actions","","class","spinner","diameter","20",4,"ngIf"],[3,"loading","refreshed",4,"ngIf"],["card-actions","","diameter","20",1,"spinner"],[3,"refreshed","loading"],["actions","","mat-raised-button","","color","primary",1,"edit",3,"click","disabled"],["mat-table","",1,"table",3,"dataSource"],["matColumnDef","key"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","value"],["mat-header-row","",4,"matHeaderRowDef"],["class","highlight","mat-row","",4,"matRowDef","matRowDefColumns"],["class","no-content-row",4,"ngIf"],["mat-header-cell",""],["mat-cell",""],["class","centered",4,"ngIf"],[1,"centered"],["mat-header-row",""],["mat-row","",1,"highlight"],[1,"no-content-row"],[1,"las","la-exclamation"]],template:function(e,r){e&1&&(l(0,"cnsl-card",0),d(1,"translate"),_(2,Zt,1,0,"mat-spinner",1)(3,se,14,9,"cnsl-refresh-table",2),d(4,"async"),m()),e&2&&(s("title",c(1,4,"DESCRIPTIONS.METADATA_TITLE"))("description",r.description),a(2),s("ngIf",r.loading),a(),s("ngIf",c(4,6,r.dataSource$)))},dependencies:[P,xt,$t,w,Ht,Et,It,Bt,At,Dt,Rt,kt,Vt,Ft,Nt,K,v],styles:[`

.metadata-details[_ngcontent-%COMP%] {
  padding-bottom: 1rem;
}
.metadata-details[_ngcontent-%COMP%]   .refresh[_ngcontent-%COMP%] {
  margin-left: 0.5rem;
  font-size: 1.2rem;
}
.metadata-details[_ngcontent-%COMP%]   .refresh[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 1.2rem;
}
.metadata-details[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%] {
  font-size: 14px;
}
.metadata-details[_ngcontent-%COMP%]   .meta-row[_ngcontent-%COMP%] {
  display: flex;
  margin-bottom: 0.5rem;
  align-items: center;
}
.metadata-details[_ngcontent-%COMP%]   .meta-row[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%] {
  flex: 1;
  font-size: 13px;
  margin-right: 0.5rem;
}
.metadata-details[_ngcontent-%COMP%]   .meta-row[_ngcontent-%COMP%]   .fill-space[_ngcontent-%COMP%] {
  flex: 1;
}
.metadata-details[_ngcontent-%COMP%]   .meta-row[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%] {
  font-size: 13px;
}
.metadata-details[_ngcontent-%COMP%]   .metadata-set[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
}
.metadata-details[_ngcontent-%COMP%]   .metadata-set[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%] {
  font-size: 14px;
}
.border-t[_ngcontent-%COMP%] {
  border-top: 1px solid rgba(129, 134, 138, 0.2509803922);
}
.edit[_ngcontent-%COMP%] {
  font-size: 14px;
  cursor: pointer;
}
.empty-desc[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 14px;
  margin-bottom: 0.5rem;
}
.refresh-btn[_ngcontent-%COMP%] {
  float: left;
}
.refresh-btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {
  font-size: 1.2rem;
}`]});let t=n;return t})();var an=(()=>{let n=class n{};n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=$({type:n}),n.\u0275inj=j({imports:[q,nt,bt,Wt,ft,ut,vt,at,gt,ct,Tt,wt,jt,zt]});let t=n;return t})();export{xe as a,Fe as b,an as c};
