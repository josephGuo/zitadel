import{a as Ce}from"./chunk-UYYTB2QB.js";import{a as se,b as ue}from"./chunk-AEJ7XCPW.js";import{a as _e}from"./chunk-RMJL3OED.js";import{a as ge}from"./chunk-7CLPDI4B.js";import{f as S,k as le}from"./chunk-RUSXLRL2.js";import{a as fe}from"./chunk-5P2HTZGB.js";import{d as X}from"./chunk-72TNO34J.js";import{a as de}from"./chunk-D3CLAMB4.js";import{a as ce,b as me,c as pe}from"./chunk-XPIKKLBW.js";import{a as oe,d as ae}from"./chunk-SQUI755M.js";import{e as R}from"./chunk-OW5R3MTS.js";import{Eb as l,Ee as U,Fa as t,Fb as s,Gb as O,Gf as Z,Hg as re,Ja as C,Je as W,Kb as b,Ke as j,Lb as N,Ma as A,Mb as F,Nb as L,Od as k,Qe as q,Qf as he,Ra as u,Re as z,Sb as w,Ve as H,We as K,Xb as o,Yb as a,Ye as J,af as Q,eb as m,fb as r,ff as Y,gb as n,hb as f,ja as x,ka as E,kg as $,lb as P,mb as v,mc as G,ob as h,oc as B,pc as V,pg as ee,qb as M,rg as te,sb as g,sg as ne,vc as D,yg as ie}from"./chunk-6LERPP6H.js";import{g as ve,h as y}from"./chunk-PGTUUCJB.js";var I=ve(he());var we=()=>["iam.write"],Ie=()=>["org.create"],ye=()=>({standalone:!0});function be(i,p){if(i&1){let e=h();P(0),r(1,"h1"),l(2),o(3,"translate"),n(),r(4,"form",5),M("ngSubmit",function(){x(e);let c=g(3);return E(c.next())}),r(5,"div",6)(6,"cnsl-form-field",7)(7,"cnsl-label"),l(8),o(9,"translate"),n(),f(10,"input",8),n(),r(11,"cnsl-form-field",7)(12,"cnsl-label"),l(13),o(14,"translate"),n(),f(15,"input",9),n()(),r(16,"div",10)(17,"button",11),l(18),o(19,"translate"),n()()(),v()}if(i&2){let e=g(3);t(2),s(a(3,6,"ORG.PAGES.ORGDETAIL_TITLE")),t(2),m("formGroup",e.orgForm),t(4),s(a(9,8,"ORG_DETAIL.DETAIL.NAME")),t(5),s(a(14,10,"ORG_DETAIL.DETAIL.DOMAIN")),t(4),m("disabled",e.orgForm.invalid),t(),O(" ",a(19,12,"ACTIONS.CONTINUE")," ")}}function Ne(i,p){if(i&1&&(r(0,"mat-option",31),l(1),o(2,"translate"),n()),i&2){let e=p.$implicit;m("value",e),t(),O(" ",a(2,2,"GENDERS."+e)," ")}}function Fe(i,p){if(i&1&&(r(0,"mat-option",31),l(1),o(2,"translate"),n()),i&2){let e=p.$implicit;m("value",e),t(),O(" ",a(2,2,"LANGUAGES."+e)," ")}}function Re(i,p){if(i&1&&f(0,"cnsl-password-complexity-view",35),i&2){let e=g(6);m("policy",e.policy)("password",e.password)}}function Te(i,p){i&1&&(r(0,"cnsl-form-field",36)(1,"cnsl-label"),l(2),o(3,"translate"),n(),f(4,"input",37),n()),i&2&&(t(2),s(a(3,1,"USER.PASSWORD.NEW")))}function Ae(i,p){i&1&&(r(0,"cnsl-form-field",36)(1,"cnsl-label"),l(2),o(3,"translate"),n(),f(4,"input",38),n()),i&2&&(t(2),s(a(3,1,"USER.PASSWORD.CONFIRM")))}function Le(i,p){if(i&1&&(P(0),r(1,"p",15),l(2),o(3,"translate"),n(),u(4,Re,1,2,"cnsl-password-complexity-view",32),r(5,"form",33),u(6,Te,5,3,"cnsl-form-field",34)(7,Ae,5,3,"cnsl-form-field",34),n(),v()),i&2){let e=g(5);t(2),s(a(3,5,"USER.CREATE.PASSWORDSECTION")),t(2),m("ngIf",e.policy),t(),m("formGroup",e.pwdForm),t(),m("ngIf",e.password),t(),m("ngIf",e.confirmPassword)}}function Ge(i,p){if(i&1){let e=h();r(0,"form",14)(1,"div",6)(2,"p",15),l(3),o(4,"translate"),n(),r(5,"cnsl-form-field",7)(6,"cnsl-label"),l(7),o(8,"translate"),n(),f(9,"input",16),n(),r(10,"cnsl-form-field",7)(11,"cnsl-label"),l(12),o(13,"translate"),n(),f(14,"input",17),n(),r(15,"cnsl-form-field",7)(16,"cnsl-label"),l(17),o(18,"translate"),n(),f(19,"input",18),n(),r(20,"cnsl-form-field",7)(21,"cnsl-label"),l(22),o(23,"translate"),n(),f(24,"input",19),n(),r(25,"cnsl-form-field",7)(26,"cnsl-label"),l(27),o(28,"translate"),n(),f(29,"input",20),n(),r(30,"p",15),l(31),o(32,"translate"),n(),r(33,"cnsl-form-field",7)(34,"cnsl-label"),l(35),o(36,"translate"),n(),r(37,"mat-select",21),u(38,Ne,3,4,"mat-option",22),n()(),r(39,"cnsl-form-field",7)(40,"cnsl-label"),l(41),o(42,"translate"),n(),r(43,"mat-select",23),u(44,Fe,3,4,"mat-option",22),o(45,"async"),n()(),r(46,"div",24)(47,"mat-checkbox",25),l(48),o(49,"translate"),n(),r(50,"mat-checkbox",26),F("ngModelChange",function(c){x(e);let d=g(4);return N(d.usePassword,c)||(d.usePassword=c),E(c)}),M("change",function(){x(e);let c=g(4);return E(c.initPwdValidators())}),l(51),o(52,"translate"),n(),r(53,"cnsl-info-section",27)(54,"span"),l(55),o(56,"translate"),n()()(),u(57,Le,8,7,"ng-container",4),n(),r(58,"div",10)(59,"button",28),M("click",function(){x(e);let c=g(4);return E(c.previous())}),l(60),o(61,"translate"),n(),f(62,"span",29),r(63,"button",30),M("click",function(){x(e);let c=g(4);return E(c.finish())}),l(64),o(65,"translate"),n()()()}if(i&2){let e=g(4);m("formGroup",e.userForm),t(3),s(a(4,21,"USER.CREATE.NAMEANDEMAILSECTION")),t(4),s(a(8,23,"USER.PROFILE.USERNAME")),t(5),s(a(13,25,"USER.PROFILE.EMAIL")),t(5),s(a(18,27,"USER.PROFILE.FIRSTNAME")),t(5),s(a(23,29,"USER.PROFILE.LASTNAME")),t(5),s(a(28,31,"USER.PROFILE.NICKNAME")),t(4),s(a(32,33,"USER.CREATE.GENDERLANGSECTION")),t(4),s(a(36,35,"USER.PROFILE.GENDER")),t(3),m("ngForOf",e.genders),t(3),s(a(42,37,"USER.PROFILE.PREFERRED_LANGUAGE")),t(3),m("ngForOf",a(45,39,e.langSvc.supported$)),t(4),O(" ",a(49,41,"USER.LOGINMETHODS.EMAIL.ISVERIFIED")," "),t(2),b("ngModel",e.usePassword),m("ngModelOptions",w(51,ye)),t(),O(" ",a(52,43,"ORG.PAGES.USEPASSWORD")),t(4),s(a(56,45,"USER.CREATE.INITMAILDESCRIPTION")),t(2),m("ngIf",e.usePassword&&e.pwdForm),t(3),O(" ",a(61,47,"ACTIONS.BACK")," "),t(3),m("disabled",e.orgForm.invalid||e.userForm.invalid||(e.usePassword&&e.pwdForm?e.pwdForm.invalid:!1)),t(),O(" ",a(65,49,"ACTIONS.FINISH")," ")}}function Be(i,p){if(i&1&&(P(0),r(1,"h1"),l(2),o(3,"translate"),n(),r(4,"div",12),u(5,Ge,66,52,"form",13),n(),v()),i&2){let e=g(3);t(2),s(a(3,2,"ORG.PAGES.ORGDETAILUSER_TITLE")),t(3),m("ngIf",e.userForm)}}function Ve(i,p){if(i&1&&(P(0),u(1,be,20,14,"ng-container",4)(2,Be,6,4,"ng-container",4),v()),i&2){let e=g(2);t(),m("ngIf",e.currentCreateStep===1),t(),m("ngIf",e.currentCreateStep===e.createSteps)}}function De(i,p){if(i&1){let e=h();r(0,"mat-slide-toggle",3),M("change",function(c){x(e);let d=g();return E(d.changeSelf(c))}),F("ngModelChange",function(c){x(e);let d=g();return N(d.forSelf,c)||(d.forSelf=c),E(c)}),l(1),o(2,"translate"),n(),u(3,Ve,3,2,"ng-container",4)}if(i&2){let e=g();m("disabled",e.currentCreateStep!==1),b("ngModel",e.forSelf),t(),O(" ",a(2,4,"ORG.PAGES.USERSELFACCOUNT")," "),t(2),m("ngIf",!e.forSelf)}}function ke(i,p){if(i&1){let e=h();P(0),r(1,"h1"),l(2),o(3,"translate"),n(),r(4,"form",5),M("ngSubmit",function(){x(e);let c=g(3);return E(c.createOrgForSelf())}),r(5,"div",6)(6,"cnsl-form-field",7)(7,"cnsl-label"),l(8),o(9,"translate"),n(),f(10,"input",39),n()(),r(11,"div",10)(12,"button",40),l(13),o(14,"translate"),n()()(),v()}if(i&2){let e=g(3);t(2),s(a(3,5,"ORG.PAGES.ORGDETAIL_TITLE_WITHOUT_DOMAIN")),t(2),m("formGroup",e.orgForm),t(4),s(a(9,7,"ORG_DETAIL.DETAIL.NAME")),t(4),m("disabled",e.orgForm.invalid),t(),O(" ",a(14,9,"ACTIONS.CREATE")," ")}}function Ue(i,p){if(i&1&&(r(0,"div"),u(1,ke,15,11,"ng-container",4),n()),i&2){let e=g(2);t(),m("ngIf",e.currentCreateStep===1)}}function We(i,p){if(i&1&&u(0,Ue,2,1,"div",4),i&2){let e=g();m("ngIf",e.forSelf)}}var dt=(()=>{let p=class p{constructor(_,c,d,T,Oe,xe,Ee,Se,Me){this.router=_,this.toast=c,this.location=d,this.fb=T,this.newMgmtService=Oe,this.passwordComplexityValidatorFactory=xe,this.langSvc=Ee,this.newOrganizationService=Se,this.orgForm=this.fb.group({name:["",[S]],domain:[""]}),this.genders=[I.Gender.GENDER_FEMALE,I.Gender.GENDER_MALE,I.Gender.GENDER_UNSPECIFIED],this.usePassword=!1,this.forSelf=!0,this.setupOrgMutation=R(this.newOrganizationService.setupOrgMutationOptions),this.addOrgMutation=R(this.newOrganizationService.addOrgMutationOptions),this.createSteps=2,this.currentCreateStep=1;let Pe=new me({type:ce.INSTANCE,name:"Instance",routerLink:["/instance"]});Me.setBreadcrumb([Pe]),this.initForm()}finish(){return y(this,null,function*(){let _={org:{name:this.name?.value,domain:this.domain?.value},user:{case:"human",value:{email:{email:this.email?.value,isEmailVerified:this.isVerified?.value},userName:this.userName?.value,profile:{firstName:this.firstName?.value,lastName:this.lastName?.value,nickName:this.nickName?.value,gender:this.gender?.value,preferredLanguage:this.preferredLanguage?.value},password:this.usePassword&&this.password?this.password.value:void 0}}};try{yield this.setupOrgMutation.mutateAsync(_),yield this.router.navigate(["/orgs"])}catch(c){this.toast.showError(c)}})}next(){this.currentCreateStep++}previous(){this.currentCreateStep--}initForm(){this.userForm=this.fb.group({userName:["",[S]],firstName:["",[S]],lastName:["",[S]],email:["",[S]],isVerified:[!1,[]],gender:[""],nickName:[""],preferredLanguage:[""]})}initPwdValidators(){this.usePassword?this.newMgmtService.getDefaultPasswordComplexityPolicy().then(_=>{this.pwdForm=this.fb.group({password:["",this.passwordComplexityValidatorFactory.buildValidators(_.policy)],confirmPassword:["",[S,le()]]})}):this.pwdForm=this.fb.group({password:["",[]],confirmPassword:["",[]]})}changeSelf(_){_.checked?(this.createSteps=1,this.orgForm=this.fb.group({name:["",[S]]})):(this.createSteps=2,this.orgForm=this.fb.group({name:["",[S]],domain:[""]}))}createOrgForSelf(){return y(this,null,function*(){if(this.name?.value)try{yield this.addOrgMutation.mutateAsync(this.name.value),yield this.router.navigate(["/orgs"])}catch(_){this.toast.showError(_)}})}get name(){return this.orgForm.get("name")}get domain(){return this.orgForm.get("domain")}get userName(){return this.userForm?.get("userName")??null}get firstName(){return this.userForm?.get("firstName")??null}get lastName(){return this.userForm?.get("lastName")??null}get email(){return this.userForm?.get("email")??null}get isVerified(){return this.userForm?.get("isVerified")??null}get nickName(){return this.userForm?.get("nickName")??null}get preferredLanguage(){return this.userForm?.get("preferredLanguage")??null}get gender(){return this.userForm?.get("gender")??null}get password(){return this.pwdForm?.get("password")??null}get confirmPassword(){return this.pwdForm?.get("confirmPassword")??null}close(){this.location.back()}};p.\u0275fac=function(c){return new(c||p)(C(ie),C(re),C(G),C(Q),C(oe),C(se),C(_e),C(ae),C(pe))},p.\u0275cmp=A({type:p,selectors:[["cnsl-org-create"]],standalone:!1,decls:5,vars:10,consts:[[3,"closed","title","createSteps","currentCreateStep"],[1,"org-create-main-content"],["cnslHasRole","",3,"hasRole"],["color","primary",1,"example-margin",3,"change","ngModelChange","disabled","ngModel"],[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"content"],[1,"formfield"],["cnslInput","","formControlName","name"],["cnslInput","","formControlName","domain"],[1,"org-create-btn-container"],["color","primary","mat-raised-button","","cdkFocusInitial","","type","submit",1,"big-button",3,"disabled"],[1,"user"],["class","form",3,"formGroup",4,"ngIf"],[1,"form",3,"formGroup"],[1,"section","cnsl-secondary-text"],["cnslInput","","formControlName","userName","required",""],["cnslInput","","formControlName","email","required",""],["cnslInput","","formControlName","firstName","required",""],["cnslInput","","formControlName","lastName","required",""],["cnslInput","","formControlName","nickName"],["formControlName","gender"],[3,"value",4,"ngFor","ngForOf"],["formControlName","preferredLanguage"],[1,"email-is-verified"],["formControlName","isVerified",1,"block-checkbox"],[1,"block-checkbox",3,"ngModelChange","change","ngModel","ngModelOptions"],[1,"full-width","desc"],["color","primary","type","button","mat-stroked-button","",1,"small-button",3,"click"],[1,"fill-space"],["color","primary","mat-raised-button","",1,"big-button",3,"click","disabled"],[3,"value"],["class","complexity-view",3,"policy","password",4,"ngIf"],[1,"pwd-form",3,"formGroup"],["class","pwd",4,"ngIf"],[1,"complexity-view",3,"policy","password"],[1,"pwd"],["cnslInput","","autocomplete","off","name","firstpassword","formControlName","password","type","password"],["cnslInput","","autocomplete","off","name","confirmPassword","formControlName","confirmPassword","type","password"],["cnslInput","","formControlName","name","data-e2e","org-name-input"],["color","primary","mat-raised-button","","cdkFocusInitial","","type","submit","data-e2e","create-org-button",1,"big-button",3,"disabled"]],template:function(c,d){c&1&&(r(0,"cnsl-create-layout",0),o(1,"translate"),M("closed",function(){return d.close()}),r(2,"div",1),u(3,De,4,6,"ng-template",2)(4,We,1,1,"ng-template",2),n()()),c&2&&(m("title",L(a(1,6,"ORG.PAGES.CREATE")))("createSteps",d.createSteps)("currentCreateStep",d.currentCreateStep),t(3),m("hasRole",w(8,we)),t(),m("hasRole",w(9,Ie)))},dependencies:[B,V,z,U,W,j,J,q,H,K,$,ee,te,ne,Y,X,k,ge,de,fe,ue,Ce,D,Z],styles:[`

h1[_ngcontent-%COMP%] {
  font-weight: 500;
}
.org-create-main-content[_ngcontent-%COMP%] {
  max-width: 35rem;
}
.org-create-main-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -0.5rem;
}
.org-create-main-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .formfield[_ngcontent-%COMP%] {
  flex: 1 1 33%;
  margin: 0 0.5rem;
}
.org-create-main-content[_ngcontent-%COMP%]   .margin-right[_ngcontent-%COMP%] {
  margin-right: 0.5rem;
}
.org-create-main-content[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {
  flex: 1;
}
.org-create-main-content[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {
  padding-top: 1rem;
}
.org-create-main-content[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
}
.org-create-main-content[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]   .continue-button[_ngcontent-%COMP%] {
  margin-top: 3rem;
  display: block;
  height: 3.5rem;
  padding: 0 4rem;
}
.org-create-main-content[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -0.5rem;
}
.org-create-main-content[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {
  padding: 0.5rem;
  flex-basis: 100%;
  font-size: 0.9rem;
}
.org-create-main-content[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .content.nowrap[_ngcontent-%COMP%] {
  flex-wrap: nowrap;
}
.org-create-main-content[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .formfield[_ngcontent-%COMP%] {
  flex: 1 0 33%;
  margin: 0 0.5rem;
}
.org-create-main-content[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .email-is-verified[_ngcontent-%COMP%] {
  flex-basis: 100%;
  margin: 1.5rem 0.5rem 0 0.5rem;
}
.org-create-main-content[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .email-is-verified[_ngcontent-%COMP%]   .block-checkbox[_ngcontent-%COMP%] {
  display: block;
  margin: 0.25rem 0;
}
.org-create-main-content[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .pwd-form[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.org-create-main-content[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .pwd-form[_ngcontent-%COMP%]   .pwd[_ngcontent-%COMP%] {
  flex: 1;
  margin: 0 0.5rem;
}
.org-create-main-content[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}
.org-create-main-content[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .formfield[_ngcontent-%COMP%] {
  width: 400px;
}
.org-create-main-content[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .formfield[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  font-size: 1.5rem;
}
.org-create-main-content[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .formfield.autocomplete[_ngcontent-%COMP%] {
  margin-top: 1rem;
}
.org-create-main-content[_ngcontent-%COMP%]   .org-create-btn-container[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  margin-top: 3rem;
}
.org-create-main-content[_ngcontent-%COMP%]   .org-create-btn-container[_ngcontent-%COMP%]   .small-button[_ngcontent-%COMP%] {
  display: block;
}
.org-create-main-content[_ngcontent-%COMP%]   .org-create-btn-container[_ngcontent-%COMP%]   .fill-space[_ngcontent-%COMP%] {
  flex: 1;
}
.org-create-main-content[_ngcontent-%COMP%]   .org-create-btn-container[_ngcontent-%COMP%]   .big-button[_ngcontent-%COMP%] {
  display: block;
  padding: 0 4rem;
  height: 3.5rem;
}
.org-create-main-content[_ngcontent-%COMP%]   .complexity-view[_ngcontent-%COMP%] {
  width: 100%;
  margin: 0 0.5rem;
}`]});let i=p;return i})();export{dt as a};
