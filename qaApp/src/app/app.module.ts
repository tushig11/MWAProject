import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login.component';
import { NavbarComponent } from './components/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionComponent } from './question/question.component';
import { AnswersComponent } from './answers/answers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzListModule } from 'ng-zorro-antd/list';


// import the feature module here so you can add it to the imports array below
import { SignupComponent } from './components/signup.component';
import { JwtModule } from "@auth0/angular-jwt";
import { AnalyticsModule } from './modules/analytics/analytics.module';

//ng-zorr
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    QuestionComponent,
    AnswersComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, AppRoutingModule,
    AnalyticsModule, // feature module
    //ng-zorro modules
    NgZorroAntdModule, NzPopoverModule, NzAvatarModule, NzButtonModule, NzGridModule, NzModalModule, NzInputModule, NzSelectModule,
    NzListModule, NgZorroAntdModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:4300"]
      }
    }) 
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
