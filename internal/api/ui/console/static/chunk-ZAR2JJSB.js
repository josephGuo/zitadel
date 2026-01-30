import{j,k as F,l as X,m as Y,n as k,o as q,p as z,q as V,t as H,u as K,v as U,w as J,x as Q,y as W}from"./chunk-IOJL6FVW.js";import"./chunk-CO7LMBWH.js";import"./chunk-U2VSOHUP.js";import"./chunk-7CQ7CM6H.js";import"./chunk-PCF2OUFL.js";import"./chunk-2XCREN5O.js";import"./chunk-QOMVCDSO.js";import"./chunk-FI3W372V.js";import"./chunk-UUZLNCG2.js";import"./chunk-4KYYTG57.js";import"./chunk-H2ORNDG5.js";import"./chunk-JETPLXKR.js";import"./chunk-7CD2C76U.js";import"./chunk-4AKP2FT7.js";import"./chunk-AUJK7NUV.js";import"./chunk-GUW4ENHR.js";import"./chunk-BILYJSCP.js";import"./chunk-OQVQV5HT.js";import"./chunk-3HJ5OC3E.js";import{a as _}from"./chunk-E7DF5XIL.js";import"./chunk-75ZTNGRM.js";import"./chunk-UYYTB2QB.js";import"./chunk-RMJL3OED.js";import"./chunk-RUSXLRL2.js";import"./chunk-DTPLHADY.js";import{b as B}from"./chunk-ZZKPYGAY.js";import"./chunk-PRBHDVD4.js";import"./chunk-S55A2IVM.js";import"./chunk-MK26QKBF.js";import"./chunk-YC7ITNI6.js";import"./chunk-7XIPBNUD.js";import"./chunk-NSIIQGTB.js";import"./chunk-DE7G22BT.js";import"./chunk-M2QKKQCL.js";import"./chunk-ZJKPLARA.js";import"./chunk-RHUY7FOD.js";import"./chunk-M2KZUTT5.js";import"./chunk-NKHZARK3.js";import"./chunk-5P2HTZGB.js";import"./chunk-72TNO34J.js";import"./chunk-COXL3EBZ.js";import"./chunk-67YX77UN.js";import"./chunk-D3CLAMB4.js";import{a as A,b as D,c as b}from"./chunk-XPIKKLBW.js";import"./chunk-K2OCEHCC.js";import"./chunk-TG24S5LF.js";import"./chunk-PQSRKYLX.js";import{e as R}from"./chunk-SQUI755M.js";import"./chunk-OW5R3MTS.js";import{Cc as w,Cg as v,Eb as I,Fa as o,Fb as u,G as d,Gf as x,Hf as L,Ja as c,Ma as h,Na as p,Ra as P,Xb as m,Yb as a,aa as r,eb as f,fb as g,gb as s,hb as C,j as M,lb as S,mb as T,pc as E,sb as y,vc as N,wg as G}from"./chunk-6LERPP6H.js";import"./chunk-PGTUUCJB.js";function ot(e,t){if(e&1&&(S(0),C(1,"cnsl-settings-list",6),T()),e&2){let et=t.ngIf,i=y();o(),f("selectedId",i.id)("serviceType",i.PolicyComponentServiceType.MGMT)("settingsList",et)}}var $=(()=>{let t=class t{constructor(i,n,l){this.authService=l,this.id="",this.PolicyComponentServiceType=_,this.defaultSettingsList=[j,z,q,k,Y,V,F,X,J,H,K,U],this.settingsList=M([]);let it=[new D({type:A.ORG,routerLink:["/org"]})];i.setBreadcrumb(it),n.queryParams.pipe(d(1)).subscribe(nt=>{let{id:O}=nt;O&&(this.id=O)})}ngOnInit(){this.settingsList=this.authService.isAllowedMapper(this.defaultSettingsList,i=>i.requiredRoles.mgmt||[]).pipe(d(1))}};t.\u0275fac=function(n){return new(n||t)(c(b),c(G),c(R))},t.\u0275cmp=h({type:t,selectors:[["cnsl-org-settings"]],standalone:!1,decls:13,vars:9,consts:[[1,"max-width-container"],[1,"settings-top-view"],[1,"settings-title-row"],[1,"desc","cnsl-secondary-text"],[1,"fill-space"],[4,"ngIf"],[3,"selectedId","serviceType","settingsList"]],template:function(n,l){n&1&&(g(0,"div",0)(1,"div",1)(2,"div")(3,"div",2)(4,"h1"),I(5),m(6,"translate"),s()(),g(7,"p",3),I(8),m(9,"translate"),s()(),C(10,"span",4),s(),P(11,ot,2,3,"ng-container",5),m(12,"async"),s()),n&2&&(o(5),u(a(6,3,"DESCRIPTIONS.SETTINGS.ORG.TITLE")),o(3),u(a(9,5,"DESCRIPTIONS.SETTINGS.ORG.DESCRIPTION")),o(3),f("ngIf",a(12,7,l.settingsList)))},dependencies:[E,Q,N,x],styles:[`

.settings-top-view[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  padding-top: 2rem;
}
.settings-top-view[_ngcontent-%COMP%]   .settings-title-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
}
.settings-top-view[_ngcontent-%COMP%]   .settings-title-row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  margin: 0;
}
.settings-top-view[_ngcontent-%COMP%]   .settings-title-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 1.2rem;
  height: 1.2rem;
  line-height: 1.2rem;
}
.settings-top-view[_ngcontent-%COMP%]   .fill-space[_ngcontent-%COMP%] {
  flex: 1;
}
.settings-top-view[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
}
.desc[_ngcontent-%COMP%] {
  margin-bottom: 2rem;
  font-size: 14px;
}`]});let e=t;return e})();var st=[{path:"",component:$}],tt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=p({type:t}),t.\u0275inj=r({imports:[v.forChild(st),v]});let e=t;return e})();var Nt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=p({type:t}),t.\u0275inj=r({imports:[w,tt,W,B,L]});let e=t;return e})();export{Nt as default};
