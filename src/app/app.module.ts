import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { CasesComponent } from './cases/cases.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ScanComponent } from './scan/scan.component';
import { SurveyComponent } from './survey/survey.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ScanComponent,
    CasesComponent,
    SurveyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    AppService
  ],
  entryComponents:[CasesComponent,ScanComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
