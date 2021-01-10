import { RouterModule, Routes } from "@angular/router";
import { KngCreatorComponent } from "./kng-creator/kng-creator.component";
import { RememberWordComponent } from './remember-word/remember-word.component';
import { TestPlaceComponent } from './test-place/test-place.component';
import { ToDoListComponent } from './todo-list/todo-list.component';
import { TodoManageComponent } from "./todo-manage/todo-manage.component";


const routes:Routes = [
    {path:"remeber-word",component:RememberWordComponent},
    {path:"todo-list",component:ToDoListComponent},
    {path:"todo-manage",component:TodoManageComponent},
    {path:'kng-creator',component:KngCreatorComponent}
];

export const routing = RouterModule.forRoot(routes);