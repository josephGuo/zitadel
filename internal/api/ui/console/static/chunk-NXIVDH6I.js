import{a as we,b as Ne,c as be,d as Re,e as Fe}from"./chunk-R53Q2LDS.js";import{a as Oe}from"./chunk-Q3XEHFHV.js";import{a as Ae,b as V,c as W,d as ke,e as Se}from"./chunk-OEIBBWVX.js";import{d as he,f as ye}from"./chunk-6P4OUQHQ.js";import{c as xe}from"./chunk-WSLWSWWW.js";import{c as ce}from"./chunk-EIOO4VIF.js";import{$e as ge,Cc as w,Ce as de,Db as p,Ea as r,Eb as f,Ef as H,Fb as M,Ff as j,Gb as ie,He as me,Jb as oe,Kb as ae,La as C,Lb as re,Md as pe,Ne as fe,Oa as k,Oe as ue,Pa as I,Se as Me,Ta as g,Wb as c,Xb as d,Yb as T,aa as Q,af as De,ag as Be,ba as y,ca as Z,db as m,df as B,ea as K,eb as l,fb as s,ff as F,gb as S,hg as _e,ig as Ee,ja as _,ka as E,kb as ee,lb as te,nb as O,ng as Ce,oc as se,og as Ie,pb as v,pc as x,pg as ve,qe as N,qg as Te,rb as D,re as b,ue as R,ve as P,wd as $,we as L,xd as J,xe as Y,yb as ne,yd as le}from"./chunk-VYHVRGSR.js";import{h as A}from"./chunk-Z7V3BZMT.js";var He=A(Ae(),1),Pe=A(Ae(),1),h=Pe.default||He,G=new Z("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:je});function je(){return{useUtc:!1}}function Ve(n,i){let e=Array(n);for(let t=0;t<n;t++)e[t]=i(t);return e}var We=(()=>{class n extends J{_options=K(G,{optional:!0});_localeData;constructor(){super();let e=K($,{optional:!0});this.setLocale(e||h.locale())}setLocale(e){super.setLocale(e);let t=h.localeData(e);this._localeData={firstDayOfWeek:t.firstDayOfWeek(),longMonths:t.months(),shortMonths:t.monthsShort(),dates:Ve(31,a=>this.createDate(2017,0,a+1).format("D")),longDaysOfWeek:t.weekdays(),shortDaysOfWeek:t.weekdaysShort(),narrowDaysOfWeek:t.weekdaysMin()}}getYear(e){return this.clone(e).year()}getMonth(e){return this.clone(e).month()}getDate(e){return this.clone(e).date()}getDayOfWeek(e){return this.clone(e).day()}getMonthNames(e){return e=="long"?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(e){return e=="long"?this._localeData.longDaysOfWeek:e=="short"?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(e){return this.clone(e).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(e){return this.clone(e).daysInMonth()}clone(e){return e.clone().locale(this.locale)}createDate(e,t,a){let o=this._createMoment({year:e,month:t,date:a}).locale(this.locale);return o.isValid(),o}today(){return this._createMoment().locale(this.locale)}parse(e,t){return e&&typeof e=="string"?this._createMoment(e,t,this.locale):e?this._createMoment(e).locale(this.locale):null}format(e,t){return e=this.clone(e),this.isValid(e),e.format(t)}addCalendarYears(e,t){return this.clone(e).add({years:t})}addCalendarMonths(e,t){return this.clone(e).add({months:t})}addCalendarDays(e,t){return this.clone(e).add({days:t})}toIso8601(e){return this.clone(e).format()}deserialize(e){let t;if(e instanceof Date)t=this._createMoment(e).locale(this.locale);else if(this.isDateInstance(e))return this.clone(e);if(typeof e=="string"){if(!e)return null;t=this._createMoment(e,h.ISO_8601).locale(this.locale)}return t&&this.isValid(t)?this._createMoment(t).locale(this.locale):super.deserialize(e)}isDateInstance(e){return h.isMoment(e)}isValid(e){return this.clone(e).isValid()}invalid(){return h.invalid()}setTime(e,t,a,o){return this.clone(e).set({hours:t,minutes:a,seconds:o,milliseconds:0})}getHours(e){return e.hours()}getMinutes(e){return e.minutes()}getSeconds(e){return e.seconds()}parseTime(e,t){return this.parse(e,t)}addSeconds(e,t){return this.clone(e).add({seconds:t})}_createMoment(e,t,a){let{strict:o,useUtc:u}=this._options||{};return u?h.utc(e,t,a,o):h(e,t,a,o)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Q({token:n,factory:n.\u0275fac})}return n})(),Ue={parse:{dateInput:"l",timeInput:"LT"},display:{dateInput:"l",timeInput:"LT",monthYearLabel:"MMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY",timeOptionLabel:"LT"}};var Le=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=I({type:n});static \u0275inj=y({providers:[ze()]})}return n})();function ze(n=Ue,i){let e=[{provide:J,useClass:We,deps:[$,G]},{provide:le,useValue:n}];return i&&e.push({provide:G,useValue:i}),e}var X=A(Be());function qe(n,i){if(n&1&&(l(0,"mat-option",15),p(1),c(2,"translate"),s()),n&2){let e=i.$implicit;m("value",e),r(),M(" ",d(2,2,"USER.MACHINE.KEYTYPES."+e)," ")}}function Qe(n,i){if(n&1&&(l(0,"span",16),p(1),c(2,"translate"),c(3,"localizedDate"),s()),n&2){let e=D();r(),ie(" ",d(2,2,"USER.MACHINE.CHOOSEDATEAFTER"),": ",T(3,4,e.dateControl.errors.matDatepickerMin.min.toDate(),"EEE dd. MMM")," ")}}var Ze=(function(n){return n.MACHINE="MACHINE",n.AUTHNKEY="AUTHNKEY",n})(Ze||{}),Dt=(()=>{let i=class i{constructor(t,a){this.dialogRef=t,this.data=a,this.startDate=new Date,this.types=[],this.dateControl=new fe("",[]),this.types=[X.KeyType.KEY_TYPE_JSON],this.type=X.KeyType.KEY_TYPE_JSON;let o=new Date;this.startDate.setDate(o.getDate()+1)}closeDialog(){this.dialogRef.close(!1)}closeDialogWithSuccess(){this.dialogRef.close({type:this.type,date:this.dateControl.value})}};i.\u0275fac=function(a){return new(a||i)(C(N),C(b))},i.\u0275cmp=k({type:i,selectors:[["cnsl-add-key-dialog"]],standalone:!1,decls:29,vars:27,consts:[["picker",""],["mat-dialog-title","",1,"title"],["mat-dialog-content",""],[1,"desc","cnsl-secondary-text"],[1,"form-field"],[3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],[1,"add-key-form-field"],["cnslInput","",3,"matDatepicker","min","formControl"],["cnslSuffix","",2,"top","0",3,"for"],[3,"startAt"],["cnslError","",4,"ngIf"],["mat-dialog-actions","",1,"action"],["mat-stroked-button","",3,"click"],["color","primary","mat-raised-button","",1,"ok-button",3,"click","disabled"],[3,"value"],["cnslError",""]],template:function(a,o){if(a&1){let u=O();l(0,"span",1),p(1),c(2,"translate"),s(),l(3,"div",2)(4,"p",3),p(5),c(6,"translate"),s(),l(7,"cnsl-form-field",4)(8,"cnsl-label"),p(9),c(10,"translate"),s(),l(11,"mat-select",5),re("ngModelChange",function(z){return _(u),ae(o.type,z)||(o.type=z),E(z)}),g(12,qe,3,4,"mat-option",6),s()(),l(13,"cnsl-form-field",7)(14,"cnsl-label"),p(15),c(16,"translate"),s(),S(17,"input",8)(18,"mat-datepicker-toggle",9)(19,"mat-datepicker",10,0),g(21,Qe,4,7,"span",11),s()(),l(22,"div",12)(23,"button",13),v("click",function(){return _(u),E(o.closeDialog())}),p(24),c(25,"translate"),s(),l(26,"button",14),v("click",function(){return _(u),E(o.closeDialogWithSuccess())}),p(27),c(28,"translate"),s()()}if(a&2){let u=ne(20);r(),f(d(2,15,"USER.MACHINE.ADD.TITLE")),r(4),f(d(6,17,"USER.MACHINE.ADD.DESCRIPTION")),r(4),f(d(10,19,"USER.MACHINE.TYPE")),r(2),oe("ngModel",o.type),r(),m("ngForOf",o.types),r(3),M("",d(16,21,"USER.MACHINE.CHOOSEEXPIRY")," (optional)"),r(2),m("matDatepicker",u)("min",o.startDate)("formControl",o.dateControl),r(),m("for",u),r(),m("startAt",o.startDate),r(2),m("ngIf",o.dateControl&&o.dateControl.errors&&(o.dateControl.errors.matDatepickerMin==null?null:o.dateControl.errors.matDatepickerMin.min)),r(3),M(" ",d(25,23,"ACTIONS.CANCEL")," "),r(2),m("disabled",o.type===void 0||o.dateControl.invalid),r(),M(" ",d(28,25,"ACTIONS.ADD")," ")}},dependencies:[se,x,B,Ce,ve,Te,Ie,he,pe,de,me,ue,R,L,P,we,Ne,be,Me,H,V],styles:[`

.title[_ngcontent-%COMP%] {
  font-size: 1.2rem;
  margin-top: 0;
}
.desc[_ngcontent-%COMP%] {
  font-size: 14px;
}
.add-key-form-field[_ngcontent-%COMP%] {
  width: 100%;
  position: relative;
}
.action[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
}
.action[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%] {
  margin-left: 0.5rem;
}`]});let n=i;return n})();var Nt=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=I({type:i}),i.\u0275inj=y({imports:[w,j,F,xe,ye,ce,ge,Y,Re,Le,De,W]});let n=i;return n})();var Ye=A(Fe());function et(n,i){if(n&1&&(l(0,"p",9),p(1),c(2,"timestampToDate"),c(3,"localizedDate"),s()),n&2){let e=D(2);r(),M(" ",T(3,3,d(2,1,e.keyResponse.details.creationDate),"EEE dd. MMM yyyy, HH:mm")," ")}}function tt(n,i){if(n&1&&(l(0,"div",7)(1,"p",8),p(2),c(3,"translate"),s(),l(4,"p",9),p(5),c(6,"localizedDate"),s()()),n&2){let e=D(2);r(2),f(d(3,2,"USER.MACHINE.EXPIRATIONDATE")),r(3),M(" ",T(6,4,e.expirationDate,"EEE dd. MMM yyyy, HH:mm")," ")}}function nt(n,i){if(n&1){let e=O();ee(0),l(1,"div",7)(2,"p",8),p(3),c(4,"translate"),s(),l(5,"p",9),p(6),s(),l(7,"p",9),p(8),s()(),l(9,"div",7)(10,"p",8),p(11),c(12,"translate"),s(),g(13,et,4,6,"p",10),s(),g(14,tt,7,7,"div",11),l(15,"button",12),v("click",function(){_(e);let a=D();return E(a.saveFile())}),p(16,"Download"),s(),te()}if(n&2){let e=D();r(3),f(d(4,6,"USER.MACHINE.ID")),r(3),f(e.keyResponse==null?null:e.keyResponse.id),r(2),f(e.keyResponse==null?null:e.keyResponse.keyId),r(3),f(d(12,8,"USER.MACHINE.CREATIONDATE")),r(2),m("ngIf",e.keyResponse.details&&e.keyResponse.details.creationDate),r(),m("ngIf",e.expirationDate)}}var Bt=(()=>{let i=class i{constructor(t,a){if(this.dialogRef=t,this.data=a,this.expirationDate="",this.InfoSectionType=_e,this.keyResponse=a.key,this.keyResponse.keyDetails){let o=JSON.parse(atob(this.keyResponse.keyDetails.toString()));this.expirationDate=o.expirationDate}}saveFile(){let t=atob(this.keyResponse.keyDetails.toString()),a=new Blob([t],{type:"text/plain;charset=utf-8"}),o=this.keyResponse.keyId?this.keyResponse.keyId:this.keyResponse.id;(0,Ye.saveAs)(a,`${o}.json`)}closeDialog(){this.dialogRef.close(!1)}};i.\u0275fac=function(a){return new(a||i)(C(N),C(b))},i.\u0275cmp=k({type:i,selectors:[["cnsl-show-key-dialog"]],standalone:!1,decls:13,vars:11,consts:[["mat-dialog-title","",1,"title"],["mat-dialog-content",""],[1,"desc",3,"type"],[4,"ngIf"],["mat-dialog-actions","",1,"action"],[1,"fill-space"],["color","primary","mat-raised-button","",1,"ok-button",3,"click"],[1,"row"],[1,"left","cnsl-secondary-text"],[1,"right"],["class","right",4,"ngIf"],["class","row",4,"ngIf"],["mat-stroked-button","","color","primary",1,"download-button",3,"click"]],template:function(a,o){a&1&&(l(0,"span",0),p(1),c(2,"translate"),s(),l(3,"div",1)(4,"cnsl-info-section",2),p(5),c(6,"translate"),s(),g(7,nt,17,10,"ng-container",3),s(),l(8,"div",4),S(9,"span",5),l(10,"button",6),v("click",function(){return o.closeDialog()}),p(11),c(12,"translate"),s()()),a&2&&(r(),f(d(2,5,"USER.MACHINE.ADDED.TITLE")),r(3),m("type",o.InfoSectionType.WARN),r(),f(d(6,7,"USER.MACHINE.ADDED.DESCRIPTION")),r(2),m("ngIf",o.keyResponse),r(4),M(" ",d(12,9,"ACTIONS.CLOSE")," "))},dependencies:[x,B,R,L,P,Ee,H,V,ke],styles:[`

.title[_ngcontent-%COMP%] {
  font-size: 1.2rem;
  margin-top: 0;
}
.form-field[_ngcontent-%COMP%] {
  width: 100%;
}
.action[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
}
.action[_ngcontent-%COMP%]   .fill-space[_ngcontent-%COMP%] {
  flex: 1;
}
.action[_ngcontent-%COMP%]   .ok-button[_ngcontent-%COMP%] {
  margin-left: 0.5rem;
}
.row[_ngcontent-%COMP%] {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.row[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], 
.row[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {
  font-size: 14px;
  flex: 1 0 auto;
}
.row[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {
  margin-right: 1rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
}
.row[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
}
.download-button[_ngcontent-%COMP%] {
  margin-bottom: 1rem;
}`]});let n=i;return n})();var Gt=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=I({type:i}),i.\u0275inj=y({imports:[w,j,F,W,Y,Oe,Se]});let n=i;return n})();export{Le as a,Ze as b,Dt as c,Nt as d,Bt as e,Gt as f};
