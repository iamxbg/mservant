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
import { routing } from './app.routing';
import { ToDoListComponent } from './todo/todo-list/todo-list.component';
import { RememberWordsServiceService } from './remember-word/remember-words-service.service';
import { ToDoRecordComponent } from './todo/todo-record/todo-record.component';
import { ToDoResultComponent } from './todo/todo-result/todo-result.component';
import { MilestoneBarComponent } from './milestone-bar/milestone-bar.component';
import { ToDoCommentComponent } from './todo/todo-comment/todo-comment.component';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';
import { TodoManageComponent } from './todo/todo-manage/todo-manage.component';
import { TodoCreateComponent } from './todo/todo-create/todo-create.component';
import { TodoEventComponent } from './todo/todo-event/todo-event.component';
import { TodoEventTimeComponent } from './todo/todo-event-time/todo-event-time.component';
import { KngCreatorComponent } from './kng-creator/kng-creator.component';
import { TreeSelecterComponent } from './tree-selecter/tree-selecter.component';
import { TimePipe } from './pipe/time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent,
    TopComponent,
    RememberWordComponent,
    ToDoListComponent,
    ToDoRecordComponent,
    ToDoResultComponent,
    MilestoneBarComponent,
    ToDoCommentComponent,
    TodoDetailComponent,
    TodoManageComponent,
    TodoCreateComponent,
    TodoEventComponent,
    TodoEventTimeComponent,
	KngCreatorComponent,
    TreeSelecterComponent,
    TimePipe
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
