import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login.component';
import { NavbarComponent } from './components/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

// import the feature module here so you can add it to the imports array below
import { AnalyticsModule } from './modules/analytics/analytics.module';

//ng-zorr
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    NzPopoverModule,
    BrowserAnimationsModule,
    // feature modules
    AnalyticsModule, 
    // ng-zorro modules
    NgZorroAntdModule, NzPopoverModule, NzAvatarModule, NzButtonModule, NzGridModule


  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
