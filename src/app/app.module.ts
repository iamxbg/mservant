import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { TopComponent } from './top/top.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RememberWordComponent } from './remember-word/remember-word.component';
import { TestPlaceComponent } from './test-place/test-place.component'
import { routing } from './app.routing';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { RememberWordsServiceService } from './remember-word/remember-words-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent,
    TopComponent,
    RememberWordComponent,
    TestPlaceComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [RememberWordsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
