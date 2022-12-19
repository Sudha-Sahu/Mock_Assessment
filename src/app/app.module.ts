import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { MockAssessmentComponent } from './mock-assessment/mock-assessment.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatHint } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InstructionpageComponent } from './instructionpage/instructionpage.component';
import { RouterModule } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FinalsubmissionComponent } from './finalsubmission/finalsubmission.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    MockAssessmentComponent,
    InstructionpageComponent,
    FinalsubmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatFormFieldModule, MatInputModule,
    RouterModule, MatRadioModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
