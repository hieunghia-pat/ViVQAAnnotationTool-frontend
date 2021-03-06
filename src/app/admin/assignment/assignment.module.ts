import { NgModule } from '@angular/core';
import { AssignmentComponent } from './assignment.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { AnnotatorsAssignmentComponent } from './annotators-assignment/annotators-assignment.component';
import { SubsetsAssignmentComponent } from './subsets-assignment/subsets-assignment.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AssignmentComponent,
    AnnotatorsAssignmentComponent,
    SubsetsAssignmentComponent
  ],
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressBarModule
  ],
  providers: [
    { 
      provide: MAT_DATE_LOCALE, 
      useValue: 'en-GB' 
    }
  ]
})
export class AssignmentModule { }