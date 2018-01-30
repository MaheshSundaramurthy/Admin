webpackJsonp([12],{1754:function(a,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=t(0),e=t(12),r=t(311),i=t(4),n=t(819),l=(t.n(n),t(305)),d=t(304),c=t(1878),p=t(1923);t.d(o,"RegisterModule",(function(){return m}));var m=(function(){function a(){}return a})();m=__decorate([t.i(s.NgModule)({imports:[e.CommonModule,r.a,i.ReactiveFormsModule,i.FormsModule,n.LaddaModule,l.a,d.a,p.a],declarations:[c.a]})],m)},1878:function(a,o,t){"use strict";var s=t(0),e=t(30),r=t(4),i=t(27),n=t(207),l=(t.n(n),t(827)),d=t(58),c=t(1924),p=t(1977);t.n(p);t.d(o,"a",(function(){return m}));var m=(function(){function a(a,o,t,s,e){this.router=a,this.fb=o,this.toastr=t,this.auth=s,this.translate=e,this.inProgress=!1,this.submitted=!1,this.registration=new c.a,this.form=o.group({firstName:["",r.Validators.compose([r.Validators.required,r.Validators.minLength(1)])],lastName:["",r.Validators.compose([r.Validators.required,r.Validators.minLength(1)])],email:["",r.Validators.compose([r.Validators.required,l.a.validate])],passwords:o.group({password:["",r.Validators.compose([r.Validators.required,r.Validators.minLength(1)])],repeatPassword:["",r.Validators.compose([r.Validators.required,r.Validators.minLength(1)])]},{validator:l.b.validate("password","repeatPassword")})}),this.firstName=this.form.controls.firstName,this.lastName=this.form.controls.lastName,this.email=this.form.controls.email,this.passwords=this.form.controls.passwords,this.password=this.passwords.controls.password,this.repeatPassword=this.passwords.controls.repeatPassword}return a.prototype.onSubmit=function(a){var o=this;this.submitted=!0,this.inProgress=!0,this.form.valid&&(console.log("Registration: ",this.registration),this.auth.register(this.registration).finally((function(){o.inProgress=!1})).subscribe((function(a){a&&(o.toastr.success(o.translate.instant("ds.messages.registrationSucceeded")),o.router.navigate(["/login"]))}),(function(a){o.toastr.error(o.translate.instant("ds.messages.registrationFailed")+" "+a.message)})))},a})();m=__decorate([t.i(s.Component)({selector:"register",template:t(1975),host:{id:"register"}}),__metadata("design:paramtypes",[e.c,r.FormBuilder,n.ToastsManager,d.a,i.c])],m)},1923:function(a,o,t){"use strict";var s=t(30),e=t(1878);t.d(o,"a",(function(){return i}));var r=[{path:"",component:e.a}],i=s.a.forChild(r)},1924:function(a,o,t){"use strict";t.d(o,"a",(function(){return s}));var s=(function(){function a(){this.data={},this.version=1}return a})()},1944:function(a,o){a.exports='.h-center{position:absolute;left:50%;transform:translate(-50%, 0)}.v-center{position:absolute;top:50%;transform:translate(0, -50%)}.auth-main{display:-webkit-box;display:-moz-box;display:box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-moz-box-orient:vertical;box-orient:vertical;-webkit-box-direction:normal;-moz-box-direction:normal;box-direction:normal;-webkit-flex-direction:column;-moz-flex-direction:column;flex-direction:column;-ms-flex-direction:column;-webkit-align-self:center;-moz-align-self:center;align-self:center;-ms-flex-item-align:center;width:100%}.header-block{width:570px;margin:0 auto;border-radius:5px;background-color:#fff;padding:32px}@media (max-width: 659px){.header-block{width:100%}}.header-block a.al-logo{text-align:center;float:none}.header-block a.al-logo img{margin-left:0;height:auto}.footer-block{width:570px;position:relative;margin:1rem auto 0;padding:16px;border-radius:5px}@media (max-width: 659px){.footer-block{width:100%}}.footer-block .ds-language-switcher{float:right}.footer-block .ds-language-switcher .al-dropdown ul.dropdown-menu.language-dropdown{max-width:10rem;top:23px;padding:0.25rem 0;border-radius:0px}.footer-block .ds-language-switcher .al-dropdown ul.dropdown-menu.language-dropdown:after{display:none}.footer-block .ds-language-switcher .al-dropdown>a{color:#67a4c8;white-space:nowrap}.footer-block .ds-language-switcher .al-dropdown>a:hover{color:#588baa}.footer-block .ds-language-switcher .al-dropdown a#language-dd .language-name{font-size:18px}.auth-block{width:570px;margin:0 auto;border-radius:5px;background-color:rgba(62,119,148,0.12);box-shadow:0 0 14px rgba(62,119,148,0.23);color:#666;padding:32px}@media (max-width: 659px){.auth-block{width:100%}}.auth-block h1{font-weight:300;margin-bottom:28px;text-align:center}.auth-block p{font-size:18px}.auth-block a{text-decoration:none;outline:none;transition:all 0.2s ease;color:#67a4c8}.auth-block a:hover{color:#588baa}.auth-block .control-label{line-height:1.3em;display:flex;align-self:center;padding-top:11px;color:#666}.auth-block .form-group{margin-bottom:18px}.auth-input{width:300px;margin-bottom:24px}.auth-input input{display:block;width:100%;border:none;font-size:18px;padding:4px 10px;outline:none}a.forgot-pass{display:block;text-align:right;margin-bottom:-20px;float:right;z-index:2;position:relative}.auth-link{display:block;font-size:18px;margin-bottom:33px}.auth-sep{margin-top:36px;margin-bottom:24px;line-height:20px;font-size:18px;text-align:center;display:block;position:relative}.auth-sep>span{display:table-cell;width:30%;white-space:nowrap;padding:0 24px;color:#666}.auth-sep>span>span{margin-top:-12px;display:block}.auth-sep:before,.auth-sep:after{border-top:solid 1px #666;content:"";height:1px;width:35%;display:table-cell}.al-share-auth{text-align:center}.al-share-auth .al-share{float:none;margin:0;padding:0;display:inline-block}.al-share-auth .al-share li{margin-left:24px}.al-share-auth .al-share li:first-child{margin-left:0}.al-share-auth .al-share li i{font-size:36px}.btn-auth{color:#fff !important}#register{display:-webkit-box;display:-moz-box;display:box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-moz-box-flex:1;box-flex:1;-webkit-flex:1 auto;-moz-flex:1 auto;-ms-flex:1 auto;flex:1 auto}\n'},1975:function(a,o){a.exports='<div class="auth-main">\n\n  <div class="header-block">\n    <a routerLink="/pages/services/list" class="al-logo clearfix">\n      <img src="{{ ( \'app/digitalstate-logo-dark.png\' | baAppPicture ) }}" />\n    </a>\n  </div>\n\n  <div class="auth-block">\n    <h1>{{\'register.title\' | translate}}</h1>\n\n    <form [formGroup]="form" (ngSubmit)="onSubmit(form.value)" class="form-horizontal">\n      <div class="form-group row" [ngClass]="{\'has-error\': (!firstName.valid && firstName.touched), \'has-success\': (firstName.valid && firstName.touched)}">\n        <label for="firstName" class="col-sm-3 control-label">{{ \'ds.microservices.entity.property.firstName\' | translate }}</label>\n\n        <div class="col-sm-9">\n          <input [formControl]="firstName" [(ngModel)]="registration.data.firstName" type="text" class="form-control" id="firstName">\n        </div>\n      </div>\n\n      <div class="form-group row" [ngClass]="{\'has-error\': (!lastName.valid && lastName.touched), \'has-success\': (lastName.valid && lastName.touched)}">\n        <label for="lastName" class="col-sm-3 control-label">{{ \'ds.microservices.entity.property.lastName\' | translate }}</label>\n\n        <div class="col-sm-9">\n          <input [formControl]="lastName" [(ngModel)]="registration.data.lastName" type="text" class="form-control" id="lastName">\n        </div>\n      </div>\n\n      <div class="form-group row" [ngClass]="{\'has-error\': (!username.valid && username.touched), \'has-success\': (username.valid && username.touched)}">\n        <label for="username" class="col-sm-3 control-label">{{\'login.username\' | translate}}</label>\n\n        <div class="col-sm-9">\n          <input [formControl]="username" [(ngModel)]="registration.username" type="text" class="form-control" id="username">\n        </div>\n      </div>\n\n      <div class="form-group row" [ngClass]="{\'has-error\': (!password.valid && password.touched), \'has-success\': (password.valid && password.touched)}">\n        <label for="password" class="col-sm-3 control-label">{{\'login.password\' | translate}}</label>\n\n        <div class="col-sm-9">\n          <input [formControl]="password" [(ngModel)]="registration.password" type="password" class="form-control" id="password">\n        </div>\n      </div>\n\n      <div class="form-group row" [ngClass]="{\'has-error\': (!repeatPassword.valid && repeatPassword.touched), \'has-success\': (repeatPassword.valid && repeatPassword.touched)}">\n        <label for="repeat-password" class="col-sm-3 control-label">{{\'register.repeat\' | translate}}</label>\n\n        <div class="col-sm-9">\n          <input [formControl]="repeatPassword" type="password" class="form-control" id="repeat-password">\n          <span *ngIf="!passwords.valid && (password.touched || repeatPassword.touched)" class="help-block sub-little-text text-danger">{{\'general.forms.passwordsDoNotMatch\' | translate}}</span>\n        </div>\n      </div>\n\n      <div class="form-group row">\n        <div class="col-sm-3"></div>\n\n        <div class="col-sm-9">\n          <md-checkbox [id]="is-organization" [formControl]="isOrganization">{{\'register.isOrgnization\' | translate}}</md-checkbox>\n          \x3c!--<input [formControl]="isOrganization" type="checkbox" class="form-control d-inline-block w-auto" id="is-organization">--\x3e\n          \x3c!--<label for="is-organization" class="control-label d-inline-block">{{\'register.isOrgnization\' | translate}}</label>--\x3e\n        </div>\n      </div>\n\n      <div class="form-group row">\n        <div class="offset-sm-3 col-sm-9">\n          <button [disabled]="!form.valid || inProgress" [ladda]="inProgress" type="submit" class="btn btn-primary btn-auth">{{\'register.signUpButton\' | translate}}</button>\n        </div>\n      </div>\n    </form>\n\n    \x3c!--<div class="auth-sep"><span><span>or Sign up with one click</span></span></div>--\x3e\n\n    \x3c!--<div class="al-share-auth">--\x3e\n      \x3c!--<ul class="al-share clearfix">--\x3e\n        \x3c!--<li><i class="socicon socicon-facebook" title="Share on Facebook"></i></li>--\x3e\n        \x3c!--<li><i class="socicon socicon-twitter" title="Share on Twitter"></i></li>--\x3e\n        \x3c!--<li><i class="socicon socicon-google" title="Share on Google Plus"></i></li>--\x3e\n      \x3c!--</ul>--\x3e\n    \x3c!--</div>--\x3e\n  </div>\n\n  <div class="footer-block">\n    <div class="row">\n      <div class="col-8">\n        <span class="auth-link">{{\'register.loginPrompt\' | translate}} <br>\n          <a routerLink="/login">{{\'register.loginLink\' | translate}}</a>\n        </span>\n      </div>\n      <div class="col-4">\n        <ds-language-switcher></ds-language-switcher>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n'},1977:function(a,o,t){var s=t(1944);"string"==typeof s&&(s=[[a.i,s,""]]);t(46)(s,{});s.locals&&(a.exports=s.locals)}});