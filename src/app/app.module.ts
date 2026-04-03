import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ErrorMessagesComponent } from './components/error-messages/error-messages.component';
import { MainReportComponent } from './components/main-report/main-report.component';
import { ReportFormComponent } from './components/report-form/report-form.component';
import { ItemChecklistComponent } from './components/item-checklist/item-checklist.component';

@NgModule({
  declarations: [AppComponent, RegisterFormComponent, ErrorMessagesComponent, MainReportComponent, ReportFormComponent, ItemChecklistComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
