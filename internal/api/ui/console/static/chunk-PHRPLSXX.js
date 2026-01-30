import{j,k as F,l as X,m as Y,n as k,o as q,p as z,q as V,t as H,u as K,v as U,w as J,x as Q,y as W}from"./chunk-IX7Z6LZY.js";import"./chunk-BBNIQZBI.js";import"./chunk-PCF2OUFL.js";import"./chunk-AK45FVKI.js";import"./chunk-2MK6VSXG.js";import"./chunk-MICQSUXG.js";import"./chunk-HNMSBYRB.js";import"./chunk-ZQVLDS55.js";import"./chunk-GMBIKOCD.js";import"./chunk-JKNGT3RE.js";import"./chunk-NF7KX6IB.js";import"./chunk-2BCUBFSN.js";import{a as _}from"./chunk-E7DF5XIL.js";import"./chunk-W3TCSVUY.js";import"./chunk-NNCD7LAT.js";import"./chunk-6X6SYJGZ.js";import"./chunk-MJCJ65GG.js";import"./chunk-VYPTZYGY.js";import"./chunk-XEO3GX2L.js";import"./chunk-77H4WKEO.js";import"./chunk-MUQ6NIO3.js";import"./chunk-CBYR6NJF.js";import"./chunk-5EUHHTSC.js";import"./chunk-6VRCYLM2.js";import"./chunk-TNQLR3Q3.js";import"./chunk-YSRNKSUY.js";import"./chunk-PVR33S3Z.js";import"./chunk-IM5424YV.js";import"./chunk-O65FVMVC.js";import"./chunk-O3FAX7RB.js";import"./chunk-2KLAJAWK.js";import"./chunk-56HA6H4U.js";import"./chunk-ZHF57A2X.js";import{b as B}from"./chunk-LNDP37VM.js";import"./chunk-DK7MEGY5.js";import"./chunk-NFQ42LWB.js";import"./chunk-3F4ONUP6.js";import"./chunk-OUJJIWYM.js";import"./chunk-EKMVAXG4.js";import"./chunk-FXUXEXCK.js";import"./chunk-PODDILNI.js";import"./chunk-KIYQFBGH.js";import"./chunk-KKWMTTLU.js";import"./chunk-MMBPSHE7.js";import{e as R}from"./chunk-H4USRU6D.js";import"./chunk-6QV4WOKH.js";import"./chunk-UPKVHIR3.js";import{a as A,b as D,c as b}from"./chunk-6VMQVWI4.js";import"./chunk-GURR7JFO.js";import"./chunk-WWX5QICP.js";import{Bg as v,Cc as w,Db as I,Ea as o,Eb as u,Ff as x,G as d,Gf as L,La as c,Oa as h,Pa as p,Ta as P,Wb as m,Xb as a,aa as r,db as f,eb as g,fb as s,gb as C,j as M,kb as S,lb as T,pc as E,rb as y,vc as N,vg as G}from"./chunk-SVRRUXWX.js";import"./chunk-Z7V3BZMT.js";function ot(e,t){if(e&1&&(S(0),C(1,"cnsl-settings-list",6),T()),e&2){let et=t.ngIf,i=y();o(),f("selectedId",i.id)("serviceType",i.PolicyComponentServiceType.MGMT)("settingsList",et)}}var $=(()=>{let t=class t{constructor(i,n,l){this.authService=l,this.id="",this.PolicyComponentServiceType=_,this.defaultSettingsList=[j,z,q,k,Y,V,F,X,J,H,K,U],this.settingsList=M([]);let it=[new D({type:A.ORG,routerLink:["/org"]})];i.setBreadcrumb(it),n.queryParams.pipe(d(1)).subscribe(nt=>{let{id:O}=nt;O&&(this.id=O)})}ngOnInit(){this.settingsList=this.authService.isAllowedMapper(this.defaultSettingsList,i=>i.requiredRoles.mgmt||[]).pipe(d(1))}};t.\u0275fac=function(n){return new(n||t)(c(b),c(G),c(R))},t.\u0275cmp=h({type:t,selectors:[["cnsl-org-settings"]],standalone:!1,decls:13,vars:9,consts:[[1,"max-width-container"],[1,"settings-top-view"],[1,"settings-title-row"],[1,"desc","cnsl-secondary-text"],[1,"fill-space"],[4,"ngIf"],[3,"selectedId","serviceType","settingsList"]],template:function(n,l){n&1&&(g(0,"div",0)(1,"div",1)(2,"div")(3,"div",2)(4,"h1"),I(5),m(6,"translate"),s()(),g(7,"p",3),I(8),m(9,"translate"),s()(),C(10,"span",4),s(),P(11,ot,2,3,"ng-container",5),m(12,"async"),s()),n&2&&(o(5),u(a(6,3,"DESCRIPTIONS.SETTINGS.ORG.TITLE")),o(3),u(a(9,5,"DESCRIPTIONS.SETTINGS.ORG.DESCRIPTION")),o(3),f("ngIf",a(12,7,l.settingsList)))},dependencies:[E,Q,N,x],styles:[`

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
