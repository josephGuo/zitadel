import{a as Fe,b as Be}from"./chunk-IELPOVT6.js";import{a as Bt}from"./chunk-Q3ZFQAE4.js";import{b as $e}from"./chunk-ZJAPHBS4.js";import{a as bt,b as De}from"./chunk-XVTZME6V.js";import{a as C}from"./chunk-WT34NB3B.js";import{b as Pe}from"./chunk-UZS6FB2J.js";import{c as he}from"./chunk-BCRSMVOU.js";import{a as ke,b as Je}from"./chunk-XDOZR7XX.js";import{b as Te,c as Ee,d as je,e as xe,f as Oe,g as ve,h as Me,i as ye,j as Ie,k as Se,l as we,m as be,n as Rt,o as Ae,p as Ne,q as Le}from"./chunk-UYOAWAU5.js";import{b as wt,c as Re}from"./chunk-QUSWZERE.js";import{b as yt,c as ue,d as It,e as Ce}from"./chunk-OEIBBWVX.js";import{a as vt,b as Mt}from"./chunk-I2A23NIU.js";import{c as ot,d as ne,f as ie}from"./chunk-6P4OUQHQ.js";import{a as Ot,b as fe}from"./chunk-6I6REWJ3.js";import"./chunk-XTJNORC7.js";import"./chunk-L5RZDO5Y.js";import{a as _e,b as ge}from"./chunk-5T7IASBX.js";import"./chunk-ODOFB2IU.js";import{c as St}from"./chunk-WSLWSWWW.js";import{a as me,c as de}from"./chunk-VT64R3KR.js";import{a as Z}from"./chunk-SPASDFTO.js";import{b as W,c as ft}from"./chunk-EIOO4VIF.js";import{$e as ee,$f as Ft,Aa as Qt,Ag as G,Bg as le,Cc as _t,Db as u,Df as ae,Ea as a,Eb as x,Ed as Zt,Ef as B,Eg as at,Fa as lt,Fb as R,Fd as Xt,Ff as Et,Gb as it,I as pt,Jg as xt,La as j,Mb as k,Md as te,Mf as nn,Oa as L,Pa as Y,Rb as Q,Sa as Ht,Sb as M,Ta as g,Tb as D,Uf as ce,V as et,Vf as Jt,Wb as d,Wf as $t,Xb as _,Yb as J,Zb as Lt,ba as z,cf as q,db as c,df as oe,e as st,eb as p,f as N,fb as l,ff as ut,gb as h,if as Ct,ja as T,jf as re,ka as E,kb as I,lb as S,mf as K,nb as O,nc as mt,nf as U,ng as se,oc as dt,pa as Yt,pb as P,pc as $,pg as pe,qf as y,rb as m,rg as jt,se as gt,sf as kt,tf as F,uc as Ut,vb as Wt,vc as H,vf as Pt,wb as qt,xb as Kt,xf as ht,yb as nt,yf as Tt,yg as rt}from"./chunk-VYHVRGSR.js";import{h as ct,i as V}from"./chunk-Z7V3BZMT.js";var Ge=ct(nn()),A=ct(Ft());function rn(t,o){if(t&1&&(p(0,"mat-option",11),u(1),d(2,"translate"),l()),t&2){let e=o.$implicit;c("value",e),a(),R(" ",_(2,2,"FILTER.METHODS."+e)," ")}}function an(t,o){if(t&1){let e=O();p(0,"div",5)(1,"cnsl-form-field",6)(2,"mat-select",7),P("selectionChange",function(n){let r=T(e).ngIf,s=m();return E(s.setMethod(r,n))}),g(3,rn,3,4,"mat-option",8),l()(),p(4,"cnsl-form-field",9)(5,"input",10),P("change",function(n){let r=T(e).ngIf,s=m();return E(s.setValue(s.SubQuery.NAME,r,n))}),l()()()}if(t&2){let e=o.ngIf,i=m();a(2),c("value",e.getMethod()),a(),c("ngForOf",i.methods),a(2),c("value",e.getName())}}var X=(function(t){return t[t.NAME=0]="NAME",t})(X||{}),Ve=(()=>{let o=class o extends bt{constructor(i,n,r){super(i,n,r),this.SubQuery=X,this.searchQueries=[],this.states=[A.ProjectState.PROJECT_STATE_ACTIVE,A.ProjectState.PROJECT_STATE_INACTIVE]}ngOnInit(){this.route.queryParams.pipe(pt(1)).subscribe(i=>{let{filter:n}=i;if(n){let f=JSON.parse(n).map(w=>{if(w.nameQuery){let b=new A.ProjectNameQuery,v=new A.ProjectQuery;return b.setName(w.nameQuery.name),b.setMethod(w.nameQuery.method),v.setNameQuery(b),v}else return});this.searchQueries=f.filter(w=>w!==void 0),this.filterChanged.emit(this.searchQueries?this.searchQueries:[])}})}changeCheckbox(i,n){if(n.checked)switch(i){case X.NAME:let r=new A.ProjectNameQuery;r.setMethod(Ge.TextQueryMethod.TEXT_QUERY_METHOD_CONTAINS_IGNORE_CASE),r.setName("");let s=new A.ProjectQuery;s.setNameQuery(r),this.searchQueries.push(s);break}else switch(i){case X.NAME:let r=this.searchQueries.findIndex(s=>s.toObject().nameQuery!==void 0);r>-1&&this.searchQueries.splice(r,1);break}}setValue(i,n,r){let s=r?.target?.value??r.value;switch(i){case X.NAME:n.setName(s),this.filterChanged.emit(this.searchQueries?this.searchQueries:[]);break}}getSubFilter(i){switch(i){case X.NAME:let n=this.searchQueries.find(r=>r.toObject().nameQuery!==void 0);return n?n.getNameQuery():void 0}}setMethod(i,n){i.setMethod(n.value),this.filterChanged.emit(this.searchQueries?this.searchQueries:[])}emitFilter(){this.filterChanged.emit(this.searchQueries?this.searchQueries:[]),this.showFilter=!1,this.filterOpen.emit(!1)}resetFilter(){this.searchQueries=[],this.emitFilter()}get filterCounter(){return this.searchQueries.length}};o.\u0275fac=function(n){return new(n||o)(j(G),j(rt),j(Yt))},o.\u0275cmp=L({type:o,selectors:[["cnsl-filter-project"]],standalone:!1,features:[Ht],decls:7,vars:6,consts:[[3,"resetted","trigger","queryCount"],["id","filtercomp",1,"filter-row"],[1,"email-query"],["id","name",1,"cb",3,"change","checked"],["class","subquery",4,"ngIf"],[1,"subquery"],[1,"filter-select-method"],[3,"selectionChange","value"],[3,"value",4,"ngFor","ngForOf"],[1,"filter-input-value"],["cnslInput","","name","value",3,"change","value"],[3,"value"]],template:function(n,r){n&1&&(p(0,"cnsl-filter",0),P("resetted",function(){return r.resetFilter()})("trigger",function(){return r.emitFilter()}),p(1,"div",1)(2,"div",2)(3,"mat-checkbox",3),P("change",function(f){return r.changeCheckbox(r.SubQuery.NAME,f)}),u(4),d(5,"translate"),l(),g(6,an,6,3,"div",4),l()()()),n&2&&(c("queryCount",r.searchQueries.length),a(3),c("checked",r.getSubFilter(r.SubQuery.NAME)),a(),R("",_(5,4,"FILTER.PROJECTNAME")," "),a(2),c("ngIf",r.getSubFilter(r.SubQuery.NAME)))},dependencies:[dt,$,bt,se,pe,ne,te,vt,B],encapsulation:2});let t=o;return t})();var ze=(()=>{let o=class o{};o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=Y({type:o}),o.\u0275inj=z({imports:[_t,De,St,ie,Mt,ut,ft,Et,at]});let t=o;return t})();var We=ct(Ft());var qe=t=>({inactive:t}),Ke=(t,o)=>({active:t,inactive:o}),Dt=t=>({key:t}),fn=()=>["project.create"],un=t=>({selected:t});function Cn(t,o){t&1&&(p(0,"div",10),h(1,"mat-spinner",11),l())}function Pn(t,o){if(t&1&&(p(0,"span",21),u(1),d(2,"translate"),d(3,"timestampToDate"),d(4,"localizedDate"),l()),t&2){let e=m().$implicit;a(),it("",_(2,2,"PROJECT.PAGES.LASTMODIFIED")," ",J(4,6,_(3,4,e.details.changeDate),"EEE dd. MMM, HH:mm"))}}function hn(t,o){if(t&1&&(p(0,"span",22),u(1),l()),t&2){let e=m().$implicit;a(),x(e.name)}}function Tn(t,o){if(t&1&&(p(0,"span",22),u(1),l()),t&2){let e=m().$implicit;a(),x(e.projectName)}}function En(t,o){if(t&1&&(p(0,"span",23),u(1),d(2,"translate"),d(3,"timestampToDate"),d(4,"localizedDate"),l()),t&2){let e=m().$implicit;a(),it("",_(2,2,"PROJECT.PAGES.CREATEDON")," ",J(4,6,_(3,4,e.details.creationDate),"EEE dd. MMM, HH:mm"))}}function jn(t,o){if(t&1){let e=O();p(0,"div",12),P("click",function(n){let r=T(e).$implicit,s=m().ngIf,f=m();return E(f.navigateToProject(s,r,n))}),p(1,"div",13),g(2,Pn,5,9,"span",14),p(3,"div",15),g(4,hn,2,1,"span",16)(5,Tn,2,1,"span",16),h(6,"div",17),l(),g(7,En,5,9,"span",18),h(8,"span",19),l(),h(9,"template",20)(10,"template",20),l()}if(t&2){let e=o.$implicit,i=m(2),n=nt(3),r=nt(5);c("ngClass",M(10,qe,e.state!==i.ProjectState.PROJECT_STATE_ACTIVE)),a(2),c("ngIf",e.details&&e.details.changeDate),a(2),c("ngIf",e.name),a(),c("ngIf",e.projectName),a(),c("ngClass",D(12,Ke,e.state===i.ProjectState.PROJECT_STATE_ACTIVE,e.state===i.ProjectState.PROJECT_STATE_INACTIVE)),a(),c("ngIf",e.details&&e.details.creationDate),a(2),c("ngTemplateOutlet",n)("ngTemplateOutletContext",M(15,Dt,e)),a(),c("ngTemplateOutlet",r)("ngTemplateOutletContext",M(17,Dt,e))}}function xn(t,o){if(t&1&&(p(0,"span",21),u(1),d(2,"translate"),d(3,"timestampToDate"),d(4,"localizedDate"),l()),t&2){let e=m().$implicit;a(),it("",_(2,2,"PROJECT.PAGES.LASTMODIFIED")," ",J(4,6,_(3,4,e.details.changeDate),"EEE dd. MMM, HH:mm"))}}function On(t,o){if(t&1&&(p(0,"span",22),u(1),l()),t&2){let e=m().$implicit;a(),x(e.name)}}function vn(t,o){if(t&1&&(p(0,"span",22),u(1),l()),t&2){let e=m().$implicit;a(),x(e.projectName)}}function Mn(t,o){if(t&1&&(p(0,"span",27),u(1),l()),t&2){let e=m().$implicit;a(),x(e.projectOwnerName)}}function yn(t,o){if(t&1&&(p(0,"span",28),u(1),d(2,"translate"),d(3,"timestampToDate"),d(4,"localizedDate"),l()),t&2){let e=m().$implicit;a(),it("",_(2,2,"PROJECT.PAGES.CREATEDON")," ",J(4,6,_(3,4,e.details.creationDate),"EEE dd. MMM, HH:mm"))}}function In(t,o){if(t&1&&(I(0),h(1,"template",20),S()),t&2){let e=m().$implicit;m(2);let i=nt(3);a(),c("ngTemplateOutlet",i)("ngTemplateOutletContext",M(2,Dt,e))}}function Sn(t,o){if(t&1){let e=O();p(0,"div",24),P("click",function(n){let r=T(e).$implicit,s=m().ngIf,f=m();return E(f.navigateToProject(s,r,n))}),p(1,"div",13),g(2,xn,5,9,"span",14),p(3,"div",15),g(4,On,2,1,"span",16)(5,vn,2,1,"span",16),h(6,"div",17),l(),g(7,Mn,2,1,"span",25)(8,yn,5,9,"span",26),h(9,"span",19),l(),g(10,In,2,4,"ng-container",9),h(11,"template",20),l()}if(t&2){let e=o.$implicit,i=m().ngIf,n=m(),r=nt(5);c("ngClass",M(10,qe,e.state!==n.ProjectState.PROJECT_STATE_ACTIVE)),a(2),c("ngIf",e.details&&e.details.changeDate),a(2),c("ngIf",e.name),a(),c("ngIf",e.projectName),a(),c("ngClass",D(12,Ke,e.state===n.ProjectState.PROJECT_STATE_ACTIVE,e.state===n.ProjectState.PROJECT_STATE_INACTIVE)),a(),c("ngIf",e.projectOwnerName),a(),c("ngIf",e.details&&e.details.creationDate),a(2),c("ngIf",i===n.ProjectType.PROJECTTYPE_OWNED),a(),c("ngTemplateOutlet",r)("ngTemplateOutletContext",M(15,Dt,e))}}function wn(t,o){t&1&&(p(0,"p",29),u(1),d(2,"translate"),l()),t&2&&(a(),R(" ",_(2,1,"PROJECT.PAGES.NOITEMS")," "))}function bn(t,o){if(t&1){let e=O();p(0,"div",31),P("click",function(){T(e);let n=m(3);return E(n.addItem())}),p(1,"mat-icon",32),u(2,"add"),l(),p(3,"span"),u(4),d(5,"translate"),l(),p(6,"cnsl-action-keys",33),P("actionTriggered",function(){T(e);let n=m(3);return E(n.addItem())}),l()()}t&2&&(a(4),x(_(5,3,"PROJECT.PAGES.ADDNEW")),a(2),c("doNotUseContrast",!0)("withoutMargin",!0))}function Rn(t,o){t&1&&(I(0),g(1,bn,7,5,"ng-template",30),S()),t&2&&(a(),c("hasRole",Q(1,fn)))}function Dn(t,o){if(t&1&&(p(0,"div",3),g(1,Cn,2,0,"div",4),d(2,"async"),p(3,"div",5),g(4,jn,11,19,"div",6),l(),p(5,"div",5),g(6,Sn,12,17,"div",7)(7,wn,3,3,"p",8),d(8,"async"),g(9,Rn,2,2,"ng-container",9),l()()),t&2){let e=o.ngIf,i=m();a(),c("ngIf",_(2,5,i.loading$)),a(3),c("ngForOf",i.selection.selected),a(2),c("ngForOf",i.notPinned),a(),c("ngIf",_(8,7,i.loading$)===!1&&i.projectList.length===0),a(2),c("ngIf",e===i.ProjectType.PROJECTTYPE_OWNED)}}function An(t,o){if(t&1){let e=O();p(0,"button",35),d(1,"translate"),P("click",function(n){T(e);let r=m().key,s=m();return E(s.deleteProject(n,r))}),h(2,"i",36),l()}t&2&&c("matTooltip",k(_(1,2,"ACTIONS.DELETE")))}function Nn(t,o){if(t&1&&g(0,An,3,4,"button",34),t&2){let e=o.key,i=m();c("ngIf",e.id!==i.zitadelProjectId)}}function Ln(t,o){t&1&&h(0,"mat-icon",40)}function kn(t,o){t&1&&h(0,"mat-icon",41)}function Jn(t,o){if(t&1){let e=O();p(0,"button",37),d(1,"translate"),P("click",function(n){let r=T(e).key,s=m();return E(s.toggle(r,n))}),g(2,Ln,1,0,"mat-icon",38)(3,kn,1,0,"mat-icon",39),l()}if(t&2){let e=o.key,i=m();c("matTooltip",k(_(1,5,"ACTIONS.PIN")))("ngClass",M(7,un,i.selection.isSelected(e))),a(2),c("ngIf",i.selection.isSelected(e)),a(),c("ngIf",!i.selection.isSelected(e))}}var Ue=(()=>{let o=class o{constructor(i,n,r,s,f){this.router=i,this.dialog=n,this.storage=r,this.mgmtService=s,this.toast=f,this.projectList=[],this.totalResult=0,this.projectType$=new N(C.PROJECTTYPE_OWNED),this.emitAddProject=new lt,this.notPinned=[],this.loadingSubject=new N(!1),this.loading$=this.loadingSubject.asObservable(),this.selection=new ot(!0,[]),this.ProjectState=We.ProjectState,this.ProjectType=C,this.zitadelProjectId="",this.destroy$=new st}listenForSelectionChanges(){this.selection.changed.pipe(et(this.destroy$)).subscribe(i=>{this.projectType$.value===C.PROJECTTYPE_OWNED?this.setPrefixedItem("pinned-projects",JSON.stringify(this.selection.selected.map(n=>n.id))).then(()=>{i.added.forEach(n=>{let r=this.notPinned.findIndex(s=>s.id===n.id);this.notPinned.splice(r,1)}),this.notPinned.push(...i.removed)}):this.projectType$.value===C.PROJECTTYPE_GRANTED&&this.setPrefixedItem("pinned-granted-projects",JSON.stringify(this.selection.selected.map(n=>n.projectId))).then(()=>{i.added.forEach(n=>{let r=this.notPinned.findIndex(s=>s.projectId===n.projectId);this.notPinned.splice(r,1)}),this.notPinned.push(...i.removed)})})}ngOnInit(){this.projectType$.pipe(et(this.destroy$)).subscribe(i=>{this.getData(i).then(()=>{this.notPinned=Object.assign([],this.projectList),this.reorganizeItems(i)})})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getData(i,n,r){return V(this,null,function*(){switch(this.loadingSubject.next(!0),i){case C.PROJECTTYPE_OWNED:return this.mgmtService.listProjects(n,r).then(s=>{this.projectList=s.resultList,s.details?.totalResult?this.totalResult=s.details.totalResult:this.totalResult=0,this.totalResult>10,s.details?.viewTimestamp&&(this.viewTimestamp=s.details?.viewTimestamp),this.loadingSubject.next(!1)}).catch(s=>{this.toast.showError(s),this.loadingSubject.next(!1)});case C.PROJECTTYPE_GRANTED:return this.mgmtService.listGrantedProjects(n,r).then(s=>{this.projectList=s.resultList,s.details?.totalResult?this.totalResult=s.details.totalResult:this.totalResult=0,this.totalResult>10,s.details?.viewTimestamp&&(this.viewTimestamp=s.details?.viewTimestamp),this.loadingSubject.next(!1)}).catch(s=>{console.error(s),this.toast.showError(s),this.loadingSubject.next(!1)})}})}addItem(){this.emitAddProject.emit()}reorganizeItems(i){switch(this.selection=new ot(!0,[]),this.listenForSelectionChanges(),i){case C.PROJECTTYPE_OWNED:this.getPrefixedItem("pinned-projects").then(n=>{if(n){let r=JSON.parse(n),s=this.projectList.filter(f=>!!r.includes(f.id));this.selection.select(...s)}});break;case C.PROJECTTYPE_GRANTED:this.getPrefixedItem("pinned-granted-projects").then(n=>{if(n){let r=JSON.parse(n),s=this.projectList.filter(f=>!!r.includes(f.projectId));this.selection.select(...s)}});break}}getPrefixedItem(i){return V(this,null,function*(){let n=this.storage.getItem(Jt.organizationId,$t.session);return localStorage.getItem(`${n}:${i}`)})}setPrefixedItem(i,n){return V(this,null,function*(){let r=this.storage.getItem(Jt.organizationId,$t.session);return localStorage.setItem(`${r}:${i}`,n)})}navigateToProject(i,n,r){r&&r.srcElement&&r.srcElement.localName!=="button"&&(i===C.PROJECTTYPE_OWNED?this.router.navigate(["/projects",n.id]):i===C.PROJECTTYPE_GRANTED&&this.router.navigate(["/granted-projects",n.projectId,"grant",n.grantId]))}toggle(i,n){n.stopPropagation(),this.selection.toggle(i)}deleteProject(i,n){i.stopPropagation(),this.dialog.open(jt,{data:{confirmKey:"ACTIONS.DELETE",cancelKey:"ACTIONS.CANCEL",titleKey:"PROJECT.PAGES.DIALOG.DELETE.TITLE",descriptionKey:"PROJECT.PAGES.DIALOG.DELETE.DESCRIPTION",confirmationKey:"PROJECT.PAGES.DIALOG.DELETE.TYPENAME",confirmation:n.name},width:"400px"}).afterClosed().subscribe(s=>{s&&n.id!==this.zitadelProjectId&&this.mgmtService.removeProject(n.id).then(()=>{this.toast.showInfo("PROJECT.TOAST.DELETED",!0);let f=this.projectList.findIndex(v=>v.id===n.id);f>-1&&this.projectList.splice(f,1);let w=this.selection.selected.findIndex(v=>v.id===n.id);w>-1&&this.selection.selected.splice(w,1);let b=this.notPinned.findIndex(v=>v.id===n.id);b>-1&&this.notPinned.splice(b,1)}).catch(f=>{this.toast.showError(f)})})}};o.\u0275fac=function(n){return new(n||o)(j(G),j(gt),j(ce),j(Z),j(xt))},o.\u0275cmp=L({type:o,selectors:[["cnsl-project-grid"]],inputs:{projectType$:"projectType$",zitadelProjectId:"zitadelProjectId"},outputs:{emitAddProject:"emitAddProject"},standalone:!1,decls:6,vars:3,consts:[["deleteButton",""],["toggleButton",""],["class","grid-main-container",4,"ngIf"],[1,"grid-main-container"],["class","loading-sp-wrapper",4,"ngIf"],[1,"owned-project-grid-container"],["class","item card","matRipple","",3,"ngClass","click",4,"ngFor","ngForOf"],["class","item card","matRipple","","data-e2e","grid-card",3,"ngClass","click",4,"ngFor","ngForOf"],["class","n-items cnsl-secondary-text",4,"ngIf"],[4,"ngIf"],[1,"loading-sp-wrapper"],["diameter","25","color","primary",1,"spinner"],["matRipple","",1,"item","card",3,"click","ngClass"],[1,"text-part"],["class","top cnsl-secondary-text",4,"ngIf"],[1,"name-row"],["class","name",4,"ngIf"],[1,"state-dot",3,"ngClass"],["class","created",4,"ngIf"],[1,"fill-space"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"top","cnsl-secondary-text"],[1,"name"],[1,"created"],["matRipple","","data-e2e","grid-card",1,"item","card",3,"click","ngClass"],["class","owning-org",4,"ngIf"],["class","created cnsl-secondary-text",4,"ngIf"],[1,"owning-org"],[1,"created","cnsl-secondary-text"],[1,"n-items","cnsl-secondary-text"],["cnslHasRole","",3,"hasRole"],["matRipple","",1,"add-project-button","card",3,"click"],[1,"icon"],[3,"actionTriggered","doNotUseContrast","withoutMargin"],["color","warn","class","delete-button","mat-icon-button","","data-e2e","delete-project-button",3,"matTooltip","click",4,"ngIf"],["color","warn","mat-icon-button","","data-e2e","delete-project-button",1,"delete-button",3,"click","matTooltip"],[1,"las","la-trash"],["mat-icon-button","",1,"edit-button",3,"click","matTooltip","ngClass"],["svgIcon","mdi_pin",4,"ngIf"],["svgIcon","mdi_pin_outline",4,"ngIf"],["svgIcon","mdi_pin"],["svgIcon","mdi_pin_outline"]],template:function(n,r){n&1&&(g(0,Dn,10,9,"div",2),d(1,"async"),g(2,Nn,1,1,"ng-template",null,0,Lt)(4,Jn,4,9,"ng-template",null,1,Lt)),n&2&&c("ngIf",_(1,1,r.projectType$))},dependencies:[mt,dt,$,Ut,Ot,W,q,_e,Ct,wt,Zt,H,B,It,yt],styles:[`

.view-toggle[_ngcontent-%COMP%] {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 0.5rem;
}
.view-toggle[_ngcontent-%COMP%]   .anim-list[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.view-toggle[_ngcontent-%COMP%]   button.left-button[_ngcontent-%COMP%] {
  margin-right: 1rem;
}
.grid-main-container[_ngcontent-%COMP%] {
  position: relative;
}
.grid-main-container[_ngcontent-%COMP%]   .loading-sp-wrapper[_ngcontent-%COMP%] {
  display: block;
  margin: 1rem 0.5rem 0 0.5rem;
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1rem;
  box-sizing: border-box;
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  padding: 0 1rem;
  flex-basis: 100%;
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {
  position: relative;
  z-index: 100;
  margin: 1rem;
  flex-basis: 270px;
  display: flex;
  text-decoration: none;
  cursor: pointer;
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: 1rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
  min-height: 166px;
  transition: box-shadow 0.1s ease-in;
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  height: 50px;
  width: 50px;
  margin: 1rem;
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text-part[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 70px;
  padding: 0.5rem 1rem 0 0;
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text-part[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  margin-bottom: 0;
  margin-top: 0.5rem;
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text-part[_ngcontent-%COMP%]   .name-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  margin: 1rem 0 0.5rem 0;
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text-part[_ngcontent-%COMP%]   .name-row[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {
  font-size: 1.2rem;
  margin-right: 0.5rem;
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text-part[_ngcontent-%COMP%]   .name-row[_ngcontent-%COMP%]   .state-dot[_ngcontent-%COMP%] {
  height: 8px;
  width: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text-part[_ngcontent-%COMP%]   .name-row[_ngcontent-%COMP%]   .state-dot.active[_ngcontent-%COMP%] {
  background-color: var(--success);
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text-part[_ngcontent-%COMP%]   .name-row[_ngcontent-%COMP%]   .state-dot.inactive[_ngcontent-%COMP%] {
  background-color: var(--warn);
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text-part[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {
  font-size: 0.8rem;
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text-part[_ngcontent-%COMP%]   .owning-org[_ngcontent-%COMP%] {
  font-size: 0.8rem;
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text-part[_ngcontent-%COMP%]   .created[_ngcontent-%COMP%] {
  font-size: 0.8rem;
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text-part[_ngcontent-%COMP%]   .organization[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text-part[_ngcontent-%COMP%]   .organization[_ngcontent-%COMP%]   .org_avatar[_ngcontent-%COMP%] {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  margin: 0;
  margin-right: 1rem;
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text-part[_ngcontent-%COMP%]   .fill-space[_ngcontent-%COMP%] {
  flex: 1;
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text-part[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  margin: 2px 0;
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .delete-button[_ngcontent-%COMP%] {
  opacity: 0;
  -webkit-user-select: none;
  user-select: none;
  position: absolute;
  bottom: 0;
  right: 30px;
  margin: 0;
  margin-bottom: 0.25rem;
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .delete-button[_ngcontent-%COMP%]:not(:hover) {
  color: #8795a1;
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .edit-button[_ngcontent-%COMP%] {
  opacity: 0;
  -webkit-user-select: none;
  user-select: none;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
  margin-bottom: 0.25rem;
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .edit-button[_ngcontent-%COMP%]:not(:hover) {
  color: var(--grey);
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .edit-button.selected[_ngcontent-%COMP%] {
  opacity: 1;
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .delete-button[_ngcontent-%COMP%], 
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .edit-button[_ngcontent-%COMP%] {
  opacity: 1;
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item.selected[_ngcontent-%COMP%]   .delete-button[_ngcontent-%COMP%], 
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item.selected[_ngcontent-%COMP%]   .edit-button[_ngcontent-%COMP%] {
  opacity: 1;
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item.selected[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {
  opacity: 1;
}
@media only screen and (max-width: 450px) {
  .grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {
    flex-basis: 100%;
  }
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .add-project-button[_ngcontent-%COMP%] {
  z-index: 100;
  flex-basis: 270px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 166px;
  border-radius: 0.5rem;
  margin: 1rem;
  box-sizing: border-box;
  transition: box-shadow 0.1s ease-in;
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .add-project-button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  align-self: center;
  margin-bottom: 1rem;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 2.5rem;
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .add-project-button[_ngcontent-%COMP%]:hover {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
}
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .add-project-button[_ngcontent-%COMP%]:hover   .icon.disabled[_ngcontent-%COMP%], 
.grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .add-project-button[_ngcontent-%COMP%]:hover   span.disabled[_ngcontent-%COMP%] {
  color: gray;
}
@media only screen and (max-width: 450px) {
  .grid-main-container[_ngcontent-%COMP%]   .owned-project-grid-container[_ngcontent-%COMP%]   .add-project-button[_ngcontent-%COMP%] {
    flex-basis: 100%;
  }
}
.n-items[_ngcontent-%COMP%] {
  padding: 0 1rem;
  font-size: 0.8rem;
  flex-basis: 100%;
}`],data:{animation:[K("cardAnimation",[F("* => *",[ht("@animate",Tt("100ms",Pt()),{optional:!0})])]),K("animate",[F(":enter",[U(".2s ease-in",kt([y({opacity:0,transform:"translateY(-50%)",offset:0}),y({opacity:.5,transform:"translateY(-10px) scale(1.1)",offset:.3}),y({opacity:1,transform:"translateY(0)",offset:1})]))]),F(":leave",[U(".2s ease-out",kt([y({opacity:1,transform:"scale(1.1)",offset:0}),y({opacity:.5,transform:"scale(.5)",offset:.3}),y({opacity:0,transform:"scale(0)",offset:1})]))])])]}});let t=o;return t})();var Ze=ct(Ft());var Fn=()=>["project.create"],Bn=()=>[10,20,50,100],Gn=()=>["/projects","create"],At=t=>["/projects",t],Nt=(t,o)=>["/granted-projects",t,"grant",o],Vn=(t,o)=>({active:t,inactive:o});function zn(t,o){if(t&1){let e=O();p(0,"cnsl-filter-project",22),P("filterChanged",function(n){T(e);let r=m().ngIf,s=m();return E(s.applySearchQuery(r,n))})("filterOpen",function(n){T(e);let r=m(2);return E(r.filterOpen=n)}),l()}}function Yn(t,o){if(t&1){let e=O();p(0,"a",24)(1,"div",25)(2,"mat-icon",26),u(3,"add"),l(),p(4,"span"),u(5),d(6,"translate"),l(),p(7,"cnsl-action-keys",27),P("actionTriggered",function(){T(e);let n=m(3);return E(n.gotoRouterLink(["/projects","create"]))}),l()()()}t&2&&(c("routerLink",Q(4,Gn)),a(5),x(_(6,2,"ACTIONS.NEW")))}function Qn(t,o){if(t&1&&g(0,Yn,8,5,"a",23),t&2){let e=m().ngIf,i=m();c("ngIf",e===i.ProjectType.PROJECTTYPE_OWNED)}}function Hn(t,o){if(t&1){let e=O();p(0,"th",28)(1,"div",29)(2,"mat-checkbox",30),P("change",function(n){T(e);let r=m(2);return E(n?r.masterToggle():null)}),l()()()}if(t&2){let e=m(2);a(2),c("checked",e.selection.hasValue()&&e.isAllSelected())("indeterminate",e.selection.hasValue()&&!e.isAllSelected())}}function Wn(t,o){if(t&1){let e=O();p(0,"td",31)(1,"div",29)(2,"mat-checkbox",32),P("click",function(n){return T(e),E(n.stopPropagation())})("change",function(n){let r=T(e).$implicit,s=m(2);return E(n?s.selection.toggle(r):null)}),l()()()}if(t&2){let e=o.$implicit,i=m(2);a(2),c("checked",i.selection.isSelected(e))}}function qn(t,o){t&1&&(p(0,"th",28),u(1),d(2,"translate"),l()),t&2&&(a(),x(_(2,1,"PROJECT.NAME")))}function Kn(t,o){if(t&1&&(p(0,"span"),u(1),l()),t&2){let e=m().$implicit;a(),x(e.name)}}function Un(t,o){if(t&1&&(p(0,"span"),u(1),l()),t&2){let e=m().$implicit;a(),x(e.projectName)}}function Zn(t,o){if(t&1&&(p(0,"td",33),g(1,Kn,2,1,"span",34)(2,Un,2,1,"span",34),l()),t&2){let e=o.$implicit,i=m().ngIf,n=m();c("routerLink",i===n.ProjectType.PROJECTTYPE_OWNED?M(3,At,e.id):D(5,Nt,e.projectId,e.grantId)),a(),c("ngIf",e.name),a(),c("ngIf",e.projectName)}}function Xn(t,o){t&1&&(p(0,"th",28),u(1),d(2,"translate"),l()),t&2&&(a(),x(_(2,1,"PROJECT.TABLE.RESOURCEOWNER")))}function ti(t,o){if(t&1&&(p(0,"td",35),u(1),l()),t&2){let e=o.$implicit;a(),R(" ",e.projectOwnerName," ")}}function ei(t,o){t&1&&(p(0,"th",28),u(1),d(2,"translate"),l()),t&2&&(a(),x(_(2,1,"PROJECT.TABLE.STATE")))}function ni(t,o){if(t&1&&(p(0,"span",37),u(1),d(2,"translate"),l()),t&2){let e=m().$implicit,i=m(2);c("ngClass",D(4,Vn,e.state===i.ProjectState.PROJECT_STATE_ACTIVE,e.state===i.ProjectState.PROJECT_STATE_INACTIVE)),a(),x(_(2,2,"PROJECT.STATE."+e.state))}}function ii(t,o){if(t&1&&(p(0,"td",33),g(1,ni,3,7,"span",36),l()),t&2){let e=o.$implicit,i=m().ngIf,n=m();c("routerLink",i===n.ProjectType.PROJECTTYPE_OWNED?M(2,At,e.id):D(4,Nt,e.projectId,e.grantId)),a(),c("ngIf",e.state)}}function oi(t,o){t&1&&(p(0,"th",28),u(1),d(2,"translate"),l()),t&2&&(a(),x(_(2,1,"PROJECT.TABLE.CREATIONDATE")))}function ri(t,o){if(t&1&&(p(0,"span"),u(1),d(2,"timestampToDate"),d(3,"localizedDate"),l()),t&2){let e=m().$implicit;a(),x(J(3,3,_(2,1,e.details.creationDate),"EEE dd. MMM, HH:mm"))}}function ai(t,o){if(t&1&&(p(0,"td",33),g(1,ri,4,6,"span",34),l()),t&2){let e=o.$implicit,i=m().ngIf,n=m();c("routerLink",i===n.ProjectType.PROJECTTYPE_OWNED?M(2,At,e.id):D(4,Nt,e.projectId,e.grantId)),a(),c("ngIf",e.details.creationDate)}}function ci(t,o){t&1&&(p(0,"th",28),u(1),d(2,"translate"),l()),t&2&&(a(),x(_(2,1,"PROJECT.TABLE.CHANGEDATE")))}function si(t,o){if(t&1&&(p(0,"span"),u(1),d(2,"timestampToDate"),d(3,"localizedDate"),l()),t&2){let e=m().$implicit;a(),x(J(3,3,_(2,1,e.details.changeDate),"EEE dd. MMM, HH:mm"))}}function pi(t,o){if(t&1&&(p(0,"td",33),g(1,si,4,6,"span",34),l()),t&2){let e=o.$implicit,i=m().ngIf,n=m();c("routerLink",i===n.ProjectType.PROJECTTYPE_OWNED?M(2,At,e.id):D(4,Nt,e.projectId,e.grantId)),a(),c("ngIf",e.details.changeDate)}}function li(t,o){t&1&&h(0,"th",28)}function mi(t,o){if(t&1){let e=O();p(0,"button",39),d(1,"translate"),P("click",function(){T(e);let n=m().$implicit,r=m(2);return E(r.deleteProject(n.id,n.name))}),h(2,"i",40),l()}t&2&&c("matTooltip",k(_(1,2,"ACTIONS.DELETE")))}function di(t,o){if(t&1&&(p(0,"td",31)(1,"cnsl-table-actions"),g(2,mi,3,4,"button",38),l()()),t&2){let e=o.$implicit,i=m(2);a(2),c("ngIf",e.id!==i.zitadelProjectId)}}function _i(t,o){t&1&&h(0,"tr",41)}function gi(t,o){t&1&&h(0,"tr",42)}function fi(t,o){t&1&&(p(0,"div",43),h(1,"i",44),p(2,"span"),u(3),d(4,"translate"),l()()),t&2&&(a(3),x(_(4,1,"PROJECT.TABLE.EMPTY")))}function ui(t,o){if(t&1){let e=O();p(0,"div",1)(1,"cnsl-refresh-table",2),d(2,"async"),P("refreshed",function(){let n=T(e).ngIf,r=m();return E(r.refreshPage(n))}),g(3,zn,1,0,"cnsl-filter-project",3)(4,Qn,1,1,"ng-template",4),p(5,"div",5)(6,"table",6),I(7,7),g(8,Hn,3,2,"th",8)(9,Wn,3,1,"td",9),S(),I(10,10),g(11,qn,3,3,"th",8)(12,Zn,3,8,"td",11),S(),I(13,12),g(14,Xn,3,3,"th",8)(15,ti,2,1,"td",13),S(),I(16,14),g(17,ei,3,3,"th",8)(18,ii,2,7,"td",11),S(),I(19,15),g(20,oi,3,3,"th",8)(21,ai,2,7,"td",11),S(),I(22,16),g(23,ci,3,3,"th",8)(24,pi,2,7,"td",11),S(),I(25,17),g(26,li,1,0,"th",8)(27,di,3,1,"td",9),S(),g(28,_i,1,0,"tr",18)(29,gi,1,0,"tr",19),l()(),g(30,fi,5,3,"div",20),d(31,"async"),p(32,"cnsl-paginator",21),P("page",function(){let n=T(e).ngIf,r=m();return E(r.changePage(n))}),l()()()}if(t&2){let e=m();a(),c("hideRefresh",!0)("timestamp",e.viewTimestamp)("selection",e.selection)("loading",_(2,14,e.loading$)),a(2),c("ngIf",!e.selection.hasValue()),a(),c("hasRole",Q(18,Fn)),a(2),c("dataSource",e.dataSource),a(22),c("matHeaderRowDef",e.displayedColumns),a(),c("matRowDefColumns",e.displayedColumns),a(),c("ngIf",_(31,16,e.loading$)===!1&&!(!(e.dataSource==null||e.dataSource.data==null)&&e.dataSource.data.length)),a(2),c("timestamp",e.viewTimestamp)("length",e.totalResult)("pageSize",20)("pageSizeOptions",Q(19,Bn))}}var Xe=(()=>{let o=class o{constructor(i,n,r,s,f){this.translate=i,this.mgmtService=n,this.toast=r,this.dialog=s,this.router=f,this.totalResult=0,this.dataSource=new be,this.emitAddProject=new lt,this.projectType$=new N(C.PROJECTTYPE_OWNED),this.projectList=[],this.displayedColumns=["name","state","creationDate","changeDate","actions"],this.selection=new ot(!0,[]),this.loadingSubject=new N(!1),this.loading$=this.loadingSubject.asObservable(),this.grid=!0,this.filterOpen=!1,this.zitadelProjectId="",this.ProjectState=Ze.ProjectState,this.ProjectType=C,this.destroy$=new st,this.INITIAL_PAGE_SIZE=20}gotoRouterLink(i){this.router.navigate(i)}ngOnInit(){this.projectType$.pipe(et(this.destroy$)).subscribe(i=>{switch(i){case C.PROJECTTYPE_OWNED:this.displayedColumns=["name","state","creationDate","changeDate","actions"];break;case C.PROJECTTYPE_GRANTED:this.displayedColumns=["name","projectOwnerName","state","creationDate","changeDate"];break}this.getData(i,this.INITIAL_PAGE_SIZE,0)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}isAllSelected(){let i=this.selection.selected.length,n=this.dataSource.data.length;return i===n}masterToggle(){this.isAllSelected()?this.selection.clear():this.dataSource.data.forEach(i=>this.selection.select(i))}changePage(i){this.getData(i,this.paginator.pageSize,this.paginator.pageSize*this.paginator.pageIndex)}addProject(){this.emitAddProject.emit()}applySearchQuery(i,n){this.selection.clear(),this.getData(i,this.paginator.pageSize,this.paginator.pageSize*this.paginator.pageIndex,n)}getData(i,n,r,s){return V(this,null,function*(){switch(this.loadingSubject.next(!0),i){case C.PROJECTTYPE_OWNED:this.mgmtService.listProjects(n,r,s).then(f=>{this.projectList=f.resultList,f.details?.totalResult?this.totalResult=f.details.totalResult:this.totalResult=0,f.details?.viewTimestamp&&(this.viewTimestamp=f.details?.viewTimestamp),this.dataSource.data=this.projectList,this.loadingSubject.next(!1)}).catch(f=>{this.toast.showError(f),this.loadingSubject.next(!1)});break;case C.PROJECTTYPE_GRANTED:this.mgmtService.listGrantedProjects(n,r,s).then(f=>{this.projectList=f.resultList,f.details?.totalResult?this.totalResult=f.details.totalResult:this.totalResult=0,f.details?.viewTimestamp&&(this.viewTimestamp=f.details?.viewTimestamp),this.dataSource.data=this.projectList,this.loadingSubject.next(!1)}).catch(f=>{this.toast.showError(f),this.loadingSubject.next(!1)});break}})}reactivateSelectedProjects(){let i=this.selection.selected.map(n=>{n.id&&this.mgmtService.reactivateProject(n.id)});Promise.all(i).then(()=>{this.toast.showInfo("PROJECT.TOAST.REACTIVATED",!0)}).catch(n=>{this.toast.showError(n)})}deactivateSelectedProjects(){let i=this.selection.selected.map(n=>{n.id&&this.mgmtService.deactivateProject(n.id)});Promise.all(i).then(()=>{this.toast.showInfo("PROJECT.TOAST.DEACTIVATED",!0)}).catch(n=>{this.toast.showError(n)})}refreshPage(i){this.selection.clear(),this.getData(i,this.paginator.pageSize,this.paginator.pageIndex*this.paginator.pageSize)}deleteProject(i,n){this.dialog.open(jt,{data:{confirmKey:"ACTIONS.DELETE",cancelKey:"ACTIONS.CANCEL",titleKey:"PROJECT.PAGES.DIALOG.DELETE.TITLE",descriptionKey:"PROJECT.PAGES.DIALOG.DELETE.DESCRIPTION",confirmationKey:"PROJECT.PAGES.DIALOG.DELETE.TYPENAME",confirmation:n},width:"400px"}).afterClosed().subscribe(s=>{this.zitadelProjectId&&s&&i!==this.zitadelProjectId&&this.mgmtService.removeProject(i).then(()=>{this.toast.showInfo("PROJECT.TOAST.DELETED",!0),setTimeout(()=>{this.refreshPage(C.PROJECTTYPE_OWNED)},1e3)}).catch(f=>{this.toast.showError(f)})})}};o.\u0275fac=function(n){return new(n||o)(j(ae),j(Z),j(xt),j(gt),j(G))},o.\u0275cmp=L({type:o,selectors:[["cnsl-project-list"]],viewQuery:function(n,r){if(n&1&&Wt(Rt,5),n&2){let s;qt(s=Kt())&&(r.paginator=s.first)}},inputs:{projectType$:"projectType$",zitadelProjectId:"zitadelProjectId"},outputs:{emitAddProject:"emitAddProject"},standalone:!1,decls:2,vars:3,consts:[["class","projects-table-wrapper",4,"ngIf"],[1,"projects-table-wrapper"],[3,"refreshed","hideRefresh","timestamp","selection","loading"],["actions","",3,"filterChanged","filterOpen",4,"ngIf"],["actions","","cnslHasRole","",3,"hasRole"],[1,"table-wrapper"],["mat-table","",1,"table",3,"dataSource"],["matColumnDef","select"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["class","pointer","mat-cell","",3,"routerLink",4,"matCellDef"],["matColumnDef","projectOwnerName"],["class","pointer","mat-cell","",4,"matCellDef"],["matColumnDef","state"],["matColumnDef","creationDate"],["matColumnDef","changeDate"],["matColumnDef","actions","stickyEnd",""],["mat-header-row","",4,"matHeaderRowDef"],["class","highlight","mat-row","",4,"matRowDef","matRowDefColumns"],["class","no-content-row",4,"ngIf"],[1,"paginator",3,"page","timestamp","length","pageSize","pageSizeOptions"],["actions","",3,"filterChanged","filterOpen"],["color","primary","mat-raised-button","",3,"routerLink",4,"ngIf"],["color","primary","mat-raised-button","",3,"routerLink"],[1,"cnsl-action-button"],[1,"icon"],[3,"actionTriggered"],["mat-header-cell",""],[1,"selection"],["color","primary",3,"change","checked","indeterminate"],["mat-cell",""],["color","primary",3,"click","change","checked"],["mat-cell","",1,"pointer",3,"routerLink"],[4,"ngIf"],["mat-cell","",1,"pointer"],["class","state",3,"ngClass",4,"ngIf"],[1,"state",3,"ngClass"],["actions","","color","warn","mat-icon-button","","data-e2e","delete-project-button",3,"matTooltip","click",4,"ngIf"],["actions","","color","warn","mat-icon-button","","data-e2e","delete-project-button",3,"click","matTooltip"],[1,"las","la-trash"],["mat-header-row",""],["mat-row","",1,"highlight"],[1,"no-content-row"],[1,"las","la-exclamation"]],template:function(n,r){n&1&&(g(0,ui,33,20,"div",0),d(1,"async")),n&2&&c("ngIf",_(1,1,r.projectType$))},dependencies:[mt,$,le,Ot,Te,je,Me,xe,Ee,ye,Oe,ve,Ie,Se,Rt,W,oe,q,vt,Ct,Ve,wt,ke,Ne,H,B,It,yt],styles:[`

h1[_ngcontent-%COMP%] {
  margin-top: 0;
}
.view-toggle[_ngcontent-%COMP%] {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.view-toggle[_ngcontent-%COMP%]   .icon-button[_ngcontent-%COMP%] {
  display: block;
  border-radius: 0.5rem;
}
.projects-table-wrapper[_ngcontent-%COMP%] {
  padding-top: 0.5rem;
}`],data:{animation:[K("list",[F(":enter",[ht("@animate",Tt(80,Pt()))])]),K("animate",[F(":enter",[y({opacity:0,transform:"translateY(-100%)"}),U("100ms",y({opacity:1,transform:"translateY(0)"}))]),F(":leave",[y({opacity:1,transform:"translateY(0)"}),U("100ms",y({opacity:0,transform:"translateY(100%)"}))])])]}});let t=o;return t})();function Pi(t,o){t&1&&h(0,"i",16)}function hi(t,o){t&1&&h(0,"i",17)}function Ti(t,o){if(t&1){let e=O();p(0,"cnsl-project-grid",18),P("emitAddProject",function(){T(e);let n=m();return E(n.addProject())}),l()}if(t&2){let e=m();c("projectType$",e.projectType$)("zitadelProjectId",e.zitadelProjectId)}}function Ei(t,o){if(t&1&&h(0,"cnsl-project-list",19),t&2){let e=m();c("projectType$",e.projectType$)("zitadelProjectId",e.zitadelProjectId)}}var tn=(()=>{let o=class o{constructor(i,n,r,s,f){this.route=i,this.router=n,this.activatedRoute=r,this.mgmtService=s,this.zitadelProjectId="",this.projectType$=new N(C.PROJECTTYPE_OWNED),this.projectType=C.PROJECTTYPE_OWNED,this.ProjectType=C,this.grid=!0,this.activatedRoute.queryParams.pipe(pt(1)).subscribe(b=>{let v=b.type;v&&v==="owned"?this.setType(C.PROJECTTYPE_OWNED):v&&v==="granted"&&this.setType(C.PROJECTTYPE_GRANTED)}),s.getIAM().then(b=>{this.zitadelProjectId=b.iamProjectId});let w={type:me.ORG,routerLink:["/org"]};f.setBreadcrumb([w])}addProject(){this.router.navigate(["/projects","create"])}setType(i){this.projectType$.next(i),this.router.navigate([],{relativeTo:this.route,queryParams:{type:i===C.PROJECTTYPE_OWNED?"owned":i===C.PROJECTTYPE_GRANTED?"granted":"owned"},replaceUrl:!0,queryParamsHandling:"merge",skipLocationChange:!1})}};o.\u0275fac=function(n){return new(n||o)(j(rt),j(G),j(rt),j(Z),j(de))},o.\u0275cmp=L({type:o,selectors:[["cnsl-projects"]],standalone:!1,decls:31,vars:35,consts:[[1,"max-width-container"],[1,"enlarged-container"],[1,"project-title-row"],["mat-icon-button","","href","https://zitadel.com/docs/guides/manage/console/projects-overview","rel","noreferrer","target","_blank"],[1,"icon"],[1,"sub","cnsl-secondary-text","max-width-description",3,"innerHTML"],[1,"projects-controls"],[1,"project-toggle-group"],[3,"clicked","label","count","active"],[1,"fill-space"],["mat-icon-button","","data-e2e","toggle-grid",1,"grid-btn",3,"click"],["class","show list view las la-th-list",4,"ngIf"],["class","las la-border-all",4,"ngIf"],[1,"sub","cnsl-secondary-text","max-width-description"],[3,"projectType$","zitadelProjectId","emitAddProject",4,"ngIf"],[3,"projectType$","zitadelProjectId",4,"ngIf"],[1,"show","list","view","las","la-th-list"],[1,"las","la-border-all"],[3,"emitAddProject","projectType$","zitadelProjectId"],[3,"projectType$","zitadelProjectId"]],template:function(n,r){n&1&&(p(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),u(4),d(5,"translate"),l(),p(6,"a",3)(7,"mat-icon",4),u(8,"info_outline"),l()()(),h(9,"p",5),d(10,"translate"),p(11,"div",6)(12,"div",7)(13,"cnsl-nav-toggle",8),d(14,"translate"),d(15,"async"),d(16,"async"),P("clicked",function(){return r.setType(r.ProjectType.PROJECTTYPE_OWNED)}),l(),p(17,"cnsl-nav-toggle",8),d(18,"translate"),d(19,"async"),d(20,"async"),P("clicked",function(){return r.setType(r.ProjectType.PROJECTTYPE_GRANTED)}),l()(),h(21,"span",9),p(22,"button",10),P("click",function(){return r.grid=!r.grid}),g(23,Pi,1,0,"i",11)(24,hi,1,0,"i",12),l()(),p(25,"p",13),u(26),d(27,"async"),d(28,"translate"),l(),g(29,Ti,1,2,"cnsl-project-grid",14)(30,Ei,1,2,"cnsl-project-list",15),l()()),n&2&&(a(4),x(_(5,15,"DESCRIPTIONS.PROJECTS.TITLE")),a(5),c("innerHTML",_(10,17,"DESCRIPTIONS.PROJECTS.DESCRIPTION"),Qt),a(4),c("label",k(_(14,19,"DESCRIPTIONS.PROJECTS.OWNED.TITLE")))("count",_(15,21,r.mgmtService.ownedProjectsCount))("active",_(16,23,r.projectType$)===r.ProjectType.PROJECTTYPE_OWNED),a(4),c("label",k(_(18,25,"DESCRIPTIONS.PROJECTS.GRANTED.TITLE")))("count",_(19,27,r.mgmtService.grantedProjectsCount))("active",_(20,29,r.projectType$)===r.ProjectType.PROJECTTYPE_GRANTED),a(6),c("ngIf",r.grid),a(),c("ngIf",!r.grid),a(2),R(" ",_(28,33,_(27,31,r.projectType$)===r.ProjectType.PROJECTTYPE_OWNED?"DESCRIPTIONS.PROJECTS.OWNED.DESCRIPTION":"DESCRIPTIONS.PROJECTS.GRANTED.DESCRIPTION")," "),a(3),c("ngIf",r.grid),a(),c("ngIf",!r.grid))},dependencies:[$,W,q,Fe,Xe,Ue,H,B],styles:[`

.project-title-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
}
.project-title-row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  margin: 0;
}
.project-title-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {
  font-size: 1.2rem;
  height: 1.2rem;
  width: 1.2rem;
}
.sub[_ngcontent-%COMP%] {
  margin-bottom: 1.5rem;
  font-size: 14px;
}`]});let t=o;return t})();var ji=[{path:"",component:tn,data:{animation:"HomePage"}},{path:"create",loadChildren:()=>import("./chunk-LHX45KJR.js"),canActivate:[Bt],data:{animation:"AddPage",roles:["project.create"]}},{path:"app-create",canActivate:[Bt],data:{animation:"AddPage",roles:["project.app.write"]},loadChildren:()=>import("./chunk-ARTYDJJP.js")},{path:":projectid",loadChildren:()=>import("./chunk-QW7X2WMY.js")}],en=(()=>{let o=class o{};o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=Y({type:o}),o.\u0275inj=z({imports:[at.forChild(ji),at]});let t=o;return t})();var ar=(()=>{let o=class o{};o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=Y({type:o}),o.\u0275inj=z({imports:[_t,en,Et,ee,fe,we,Ae,St,ft,ut,ge,Mt,$e,re,ze,Re,Je,he,Pe,Ce,ue,Le,Xt,Be]});let t=o;return t})();export{ar as default};
