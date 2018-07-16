import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TDFComponent } from './tdf/tdf.component';
import { confirmvalidationdirective } from './tdf/confirm-validation.directive';

@NgModule({
  declarations: [
    AppComponent,
    confirmvalidationdirective,
    TDFComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
