import{A as W,j,k as F,l as X,m as Y,n as k,o as q,p as z,q as V,t as H,u as K,v as U,w as J,z as Q}from"./chunk-XFRJZWLQ.js";import"./chunk-IUUQ6UMX.js";import"./chunk-PCF2OUFL.js";import"./chunk-PX6335IQ.js";import"./chunk-MDEYRTCT.js";import"./chunk-MICQSUXG.js";import"./chunk-ZB3656PH.js";import"./chunk-R53Q2LDS.js";import"./chunk-PK77DGN6.js";import"./chunk-GGC47TJI.js";import"./chunk-T6DGMH6E.js";import"./chunk-GK42REWD.js";import{a as _}from"./chunk-E7DF5XIL.js";import"./chunk-HQOOG47U.js";import"./chunk-VYTLSNHL.js";import"./chunk-JOWKLWK4.js";import"./chunk-ILJW2OYH.js";import"./chunk-YXCCXPQB.js";import"./chunk-KXKWYXKZ.js";import"./chunk-ZJAPHBS4.js";import"./chunk-D5GPMUUC.js";import"./chunk-XVTZME6V.js";import"./chunk-XVM6CAME.js";import"./chunk-MLJYEOLK.js";import"./chunk-J37BWYBF.js";import"./chunk-YBSDN7YM.js";import"./chunk-QEYD3WKO.js";import"./chunk-X5PYTWOH.js";import"./chunk-SB6TWFWD.js";import"./chunk-2OYIL7HJ.js";import"./chunk-7KKEM5OI.js";import"./chunk-7NZJWGJQ.js";import"./chunk-ZXKDPHYN.js";import"./chunk-OOHSXILY.js";import"./chunk-Q3XEHFHV.js";import{b as B}from"./chunk-UZS6FB2J.js";import"./chunk-BCRSMVOU.js";import"./chunk-XDOZR7XX.js";import"./chunk-UYOAWAU5.js";import"./chunk-QUSWZERE.js";import"./chunk-OEIBBWVX.js";import"./chunk-I2A23NIU.js";import"./chunk-6P4OUQHQ.js";import"./chunk-IQEMG6QJ.js";import"./chunk-6I6REWJ3.js";import"./chunk-XTJNORC7.js";import"./chunk-L5RZDO5Y.js";import"./chunk-5T7IASBX.js";import{a as R}from"./chunk-ODOFB2IU.js";import"./chunk-WSLWSWWW.js";import{a as A,b as D,c as b}from"./chunk-VT64R3KR.js";import"./chunk-SPASDFTO.js";import"./chunk-EIOO4VIF.js";import{Cc as w,Db as I,Ea as o,Eb as u,Ef as x,Eg as v,Ff as L,I as d,La as c,Oa as h,Pa as p,Ta as P,Wb as m,Xb as a,ba as r,db as f,eb as g,fb as s,gb as C,k as M,kb as S,lb as T,pc as E,rb as y,vc as N,yg as G}from"./chunk-VYHVRGSR.js";import"./chunk-Z7V3BZMT.js";function ot(e,t){if(e&1&&(S(0),C(1,"cnsl-settings-list",6),T()),e&2){let et=t.ngIf,i=y();o(),f("selectedId",i.id)("serviceType",i.PolicyComponentServiceType.MGMT)("settingsList",et)}}var $=(()=>{let t=class t{constructor(i,n,l){this.authService=l,this.id="",this.PolicyComponentServiceType=_,this.defaultSettingsList=[j,z,q,k,Y,V,F,X,J,H,K,U],this.settingsList=M([]);let it=[new D({type:A.ORG,routerLink:["/org"]})];i.setBreadcrumb(it),n.queryParams.pipe(d(1)).subscribe(nt=>{let{id:O}=nt;O&&(this.id=O)})}ngOnInit(){this.settingsList=this.authService.isAllowedMapper(this.defaultSettingsList,i=>i.requiredRoles.mgmt||[]).pipe(d(1))}};t.\u0275fac=function(n){return new(n||t)(c(b),c(G),c(R))},t.\u0275cmp=h({type:t,selectors:[["cnsl-org-settings"]],standalone:!1,decls:13,vars:9,consts:[[1,"max-width-container"],[1,"settings-top-view"],[1,"settings-title-row"],[1,"desc","cnsl-secondary-text"],[1,"fill-space"],[4,"ngIf"],[3,"selectedId","serviceType","settingsList"]],template:function(n,l){n&1&&(g(0,"div",0)(1,"div",1)(2,"div")(3,"div",2)(4,"h1"),I(5),m(6,"translate"),s()(),g(7,"p",3),I(8),m(9,"translate"),s()(),C(10,"span",4),s(),P(11,ot,2,3,"ng-container",5),m(12,"async"),s()),n&2&&(o(5),u(a(6,3,"DESCRIPTIONS.SETTINGS.ORG.TITLE")),o(3),u(a(9,5,"DESCRIPTIONS.SETTINGS.ORG.DESCRIPTION")),o(3),f("ngIf",a(12,7,l.settingsList)))},dependencies:[E,Q,N,x],styles:[`

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
