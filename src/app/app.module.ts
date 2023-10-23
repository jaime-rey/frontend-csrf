import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ContentDisplayComponent } from './content-display/content-display.component';
import { ContentInputComponent } from './content-input/content-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ContentDisplayComponent,
    HttpClientModule,
    ContentInputComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
