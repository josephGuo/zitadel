import{a as $t,b as Jt}from"./chunk-LZSCDJPE.js";import"./chunk-KXKWYXKZ.js";import{a as Dt,b as Qt}from"./chunk-ZJAPHBS4.js";import"./chunk-D5GPMUUC.js";import"./chunk-MLJYEOLK.js";import{g as K}from"./chunk-TJ4YYGSM.js";import{a as Lt,b as Bt,c as q}from"./chunk-2OYIL7HJ.js";import"./chunk-OOHSXILY.js";import"./chunk-Q3XEHFHV.js";import{b as kt}from"./chunk-UZS6FB2J.js";import"./chunk-XDOZR7XX.js";import"./chunk-UYOAWAU5.js";import"./chunk-QUSWZERE.js";import"./chunk-OEIBBWVX.js";import{b as Gt}from"./chunk-I2A23NIU.js";import{f as Ot}from"./chunk-6P4OUQHQ.js";import"./chunk-6I6REWJ3.js";import"./chunk-XTJNORC7.js";import"./chunk-L5RZDO5Y.js";import{a as Ft,b as J}from"./chunk-5T7IASBX.js";import{a as wt}from"./chunk-ODOFB2IU.js";import{a as Vt}from"./chunk-LKR6PDSW.js";import{a as Nt}from"./chunk-ALA4MQ7O.js";import{c as U}from"./chunk-WSLWSWWW.js";import{a as W,b as X,c as Rt}from"./chunk-VT64R3KR.js";import{a as At}from"./chunk-SPASDFTO.js";import{c as V}from"./chunk-EIOO4VIF.js";import{$e as L,Cc as k,Ce as ft,Db as d,Ea as a,Eb as O,Ef as Q,Eg as H,Fa as ot,Fb as b,Ff as $,G as et,Hb as mt,He as Ct,Ie as _t,Jg as Pt,Kg as jt,La as C,Le as ht,Mb as pt,Md as gt,Mf as Xt,Ne as yt,Oa as N,Pa as v,Pe as St,Pf as Yt,Rb as lt,Se as Mt,Ta as S,U as nt,V as R,W as it,Wb as g,Xb as f,af as B,ba as x,db as s,df as xt,e as A,eb as c,fb as m,ff as D,gb as G,j as Z,ja as h,jf as vt,ka as y,kb as I,lb as P,mc as dt,nb as M,ng as bt,oc as ut,pb as _,pc as F,pg as Tt,qg as Et,r as tt,rb as l,vb as rt,wb as at,xb as ct,yb as st,yg as It}from"./chunk-VYHVRGSR.js";import{h as Y}from"./chunk-Z7V3BZMT.js";var Ut=Y(Xt()),u=Y(Yt());var ee=["auto"];function ne(e,t){e&1&&(c(0,"mat-option",8),G(1,"mat-spinner",9),m())}function ie(e,t){if(e&1&&(c(0,"mat-option",10)(1,"div",11)(2,"div",12)(3,"span"),d(4),m(),G(5,"span",13),c(6,"span",14),d(7),m()()()()),e&2){let r=t.$implicit;s("value",r),a(4),O(r.name),a(3),O(r.primaryDomain)}}var Kt=(()=>{let t=class t{constructor(i,n){this.authService=i,this.auth=n,this.myControl=new yt,this.filteredOrgs=[],this.isLoading=!1,this.selectionChanged=new ot,this.unsubscribed$=new A,this.myControl.valueChanges.pipe(R(this.unsubscribed$),et(200),it(()=>this.isLoading=!0),nt(o=>{let p=new u.OrgQuery,T=new u.OrgStateQuery;T.setState(u.OrgState.ORG_STATE_ACTIVE),p.setStateQuery(T);let j=[p];if(o){let w=new u.OrgQuery,E=new u.OrgNameQuery;E.setName(o),E.setMethod(Ut.TextQueryMethod.TEXT_QUERY_METHOD_CONTAINS_IGNORE_CASE),w.setNameQuery(E),j=[p,w]}return Z(this.auth.listMyProjectOrgs(void 0,0,j)).pipe(tt(w=>w.resultList.sort((E,Wt)=>E.name.localeCompare(Wt.name))))})).subscribe(o=>{this.isLoading=!1,this.filteredOrgs=o})}ngOnInit(){let i=new u.OrgQuery,n=new u.OrgStateQuery;n.setState(u.OrgState.ORG_STATE_ACTIVE),i.setStateQuery(n),this.auth.listMyProjectOrgs(void 0,0,[i]).then(o=>{this.filteredOrgs=o.resultList})}ngOnDestroy(){this.unsubscribed$.next()}displayFn(i){return i?`${i.name}`:""}selected(i){this.selectionChanged.emit(i.option.value)}};t.\u0275fac=function(n){return new(n||t)(C(jt),C(wt))},t.\u0275cmp=N({type:t,selectors:[["cnsl-search-org-autocomplete"]],viewQuery:function(n,o){if(n&1&&rt(ee,5),n&2){let p;at(p=ct())&&(o.matAutocomplete=p.first)}},outputs:{selectionChanged:"selectionChanged"},standalone:!1,decls:14,vars:11,consts:[["nameInput",""],["auto","matAutocomplete"],[1,"full-width"],["cnslInput","","type","text","placeholder","Organization XY","data-e2e","add-org-input",3,"formControl","matAutocomplete"],[3,"optionSelected","displayWith"],["class","is-loading",4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],[1,"org-autocomplete-target-desc"],[1,"is-loading"],["diameter","30"],[3,"value"],["data-e2e","org-option",1,"org-option"],[1,"org-option-column"],[1,"fill-space"],[1,"smaller","cnsl-secondary-text"]],template:function(n,o){if(n&1){let p=M();c(0,"form")(1,"cnsl-form-field",2)(2,"cnsl-label"),d(3),g(4,"translate"),m(),G(5,"input",3,0),c(7,"mat-autocomplete",4,1),_("optionSelected",function(j){return h(p),y(o.selected(j))}),S(9,ne,2,0,"mat-option",5)(10,ie,8,3,"mat-option",6),m(),c(11,"span",7),d(12),g(13,"translate"),m()()()}if(n&2){let p=st(8);a(3),O(f(4,7,"PROJECT.GRANT.CREATE.SEL_ORG_FORMFIELD")),a(2),s("formControl",o.myControl)("matAutocomplete",p),a(2),s("displayWith",o.displayFn),a(2),s("ngIf",o.isLoading),a(),s("ngForOf",o.filteredOrgs),a(2),b(" ",f(13,9,"PROJECT.GRANT.CREATE.SEL_ORG_DESC")," ")}},dependencies:[ut,F,Lt,gt,Bt,bt,Tt,Et,St,ft,Ct,_t,Mt,Ft,ht,Q],styles:[`

.full-width[_ngcontent-%COMP%] {
  width: 100%;
}
input[_ngcontent-%COMP%] {
  max-width: 500px;
}
.org-option[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
}
.org-option[_ngcontent-%COMP%]   .org-option-column[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
}
.org-option[_ngcontent-%COMP%]   .org-option-column[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  line-height: normal;
}
.org-option[_ngcontent-%COMP%]   .org-option-column[_ngcontent-%COMP%]   .fill-space[_ngcontent-%COMP%] {
  flex: 1;
}
.org-option[_ngcontent-%COMP%]   .org-option-column[_ngcontent-%COMP%]   .smaller[_ngcontent-%COMP%] {
  font-size: 13px;
}
.org-autocomplete-target-desc[_ngcontent-%COMP%] {
  font-size: 14px;
  display: block;
  margin-top: 0.5rem;
}`]});let e=t;return e})();var qt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=v({type:t}),t.\u0275inj=x({imports:[k,q,K,D,U,V,B,J,L,$,Ot]});let e=t;return e})();var re=()=>["select","key","displayname","group","creationDate","changeDate"];function ae(e,t){if(e&1&&(c(0,"span"),d(1),g(2,"translate"),m()),e&2){let r=l(2);a(),mt(" ",f(2,3,"PROJECT.GRANT.CREATE.FOR_ORG")," ",r.org.name," - ",r.org.primaryDomain," ")}}function ce(e,t){if(e&1){let r=M();I(0),c(1,"h1"),d(2),g(3,"translate"),m(),c(4,"cnsl-search-org-autocomplete",3),_("selectionChanged",function(n){h(r);let o=l();return y(o.selectOrg(n))}),m(),S(5,ae,3,5,"span",1),P()}if(e&2){let r=l();a(2),O(f(3,2,"PROJECT.GRANT.CREATE.SEL_ORG")),a(3),s("ngIf",r.org)}}function se(e,t){if(e&1){let r=M();c(0,"cnsl-card")(1,"cnsl-project-roles-table",4),_("changedSelection",function(n){h(r);let o=l(2);return y(o.selectRoles(n))}),m()()}if(e&2){let r=l(2);a(),s("displayedColumns",lt(2,re))("projectId",r.projectId)}}function me(e,t){if(e&1&&(I(0),c(1,"h1"),d(2),g(3,"translate"),m(),S(4,se,2,3,"cnsl-card",1),P()),e&2){let r=l();a(2),O(f(3,2,"PROJECT.GRANT.CREATE.SEL_ROLES")),a(2),s("ngIf",r.projectId)}}function pe(e,t){if(e&1){let r=M();I(0),c(1,"button",5),_("click",function(){h(r);let n=l();return y(n.next())}),d(2),g(3,"translate"),m(),P()}if(e&2){let r=l();a(),s("disabled",!r.org),a(),b(" ",f(3,2,"ACTIONS.CONTINUE")," ")}}function le(e,t){if(e&1){let r=M();I(0),c(1,"button",6),_("click",function(){h(r);let n=l();return y(n.previous())}),d(2),g(3,"translate"),m(),c(4,"button",7),_("click",function(){h(r);let n=l();return y(n.addGrant())}),d(5),g(6,"translate"),m(),P()}if(e&2){let r=l();a(2),b(" ",f(3,3,"ACTIONS.BACK")," "),a(2),s("disabled",!r.org),a(),b(" ",f(6,5,"ACTIONS.SAVE")," ")}}var de="projectid",zt=(()=>{let t=class t{constructor(i,n,o,p,T){this.route=i,this.toast=n,this.mgmtService=o,this._location=p,this.breadcrumbService=T,this.projectId="",this.grantId="",this.rolesKeyList=[],this.createSteps=2,this.currentCreateStep=1,this.destroy$=new A}ngOnInit(){this.route.params.pipe(R(this.destroy$)).subscribe(i=>{this.projectId=i.projectid;let n=[new X({type:W.ORG,routerLink:["/org"]}),new X({type:W.PROJECT,name:"",param:{key:de,value:this.projectId},routerLink:["/projects",this.projectId]})];this.breadcrumbService.setBreadcrumb(n)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}searchOrg(i){this.mgmtService.getOrgByDomainGlobal(i).then(n=>{if(n.org){let o=n.org;this.org=o}}).catch(n=>{this.toast.showError(n)})}close(){this._location.back()}addGrant(){this.org&&this.mgmtService.addProjectGrant(this.org.id,this.projectId,this.rolesKeyList).then(()=>{this.close()}).catch(i=>{this.toast.showError(i)})}selectOrg(i){this.org=i}selectRoles(i){this.rolesKeyList=i}next(){this.currentCreateStep++}previous(){this.currentCreateStep--}};t.\u0275fac=function(n){return new(n||t)(C(It),C(Pt),C(At),C(dt),C(Rt))},t.\u0275cmp=N({type:t,selectors:[["cnsl-project-grant-create"]],standalone:!1,decls:7,vars:10,consts:[[3,"closed","title","createSteps","currentCreateStep"],[4,"ngIf"],[1,"btn-container"],[1,"block",3,"selectionChanged"],[3,"changedSelection","displayedColumns","projectId"],["color","primary","mat-raised-button","","cdkFocusInitial","","data-e2e","project-grant-continue",1,"big-button",3,"click","disabled"],["mat-stroked-button","",1,"small-button",3,"click"],["color","primary","mat-raised-button","","cdkFocusInitial","","data-e2e","save-project-grant-button",1,"big-button",3,"click","disabled"]],template:function(n,o){n&1&&(c(0,"cnsl-create-layout",0),g(1,"translate"),_("closed",function(){return o.close()}),S(2,ce,6,4,"ng-container",1)(3,me,5,4,"ng-container",1),c(4,"div",2),S(5,pe,4,4,"ng-container",1)(6,le,7,7,"ng-container",1),m()()),n&2&&(s("title",pt(f(1,8,"PROJECT.GRANT.CREATE.TITLE")))("createSteps",o.createSteps)("currentCreateStep",o.currentCreateStep),a(2),s("ngIf",o.currentCreateStep===1),a(),s("ngIf",o.currentCreateStep===2),a(2),s("ngIf",o.currentCreateStep===1),a(),s("ngIf",o.currentCreateStep===o.createSteps))},dependencies:[F,xt,Nt,Dt,$t,Kt,Q],styles:[`

form[_ngcontent-%COMP%] {
  max-width: 35rem;
}
form[_ngcontent-%COMP%]   .org-domain[_ngcontent-%COMP%] {
  margin-right: 1rem;
}
.domain-button[_ngcontent-%COMP%] {
  margin-right: 1rem;
  margin-bottom: 1rem;
  display: block;
}
.btn-container[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
}
.btn-container[_ngcontent-%COMP%]   .small-button[_ngcontent-%COMP%] {
  display: block;
}
.btn-container[_ngcontent-%COMP%]   .big-button[_ngcontent-%COMP%] {
  display: block;
  padding: 0 4rem;
  height: 3.5rem;
}`]});let e=t;return e})();var ue=[{path:"",component:zt,data:{animation:"AddPage"}}],Ht=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=v({type:t}),t.\u0275inj=x({imports:[H.forChild(ue),H]});let e=t;return e})();var On=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=v({type:t}),t.\u0275inj=x({imports:[Ht,k,q,K,D,Vt,U,Qt,Gt,Jt,V,vt,kt,B,J,L,$,qt]});let e=t;return e})();export{On as default};
