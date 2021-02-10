import { RouterModule, Routes } from "@angular/router";
import { KngCreatorComponent } from "./kng-creator/kng-creator.component";
import { RememberWordDesktopComponent } from './remember-word/remember-word-desktop/remember-word-desktop.component';
import { ToDoListComponent } from './todo/todo-list/todo-list.component';
import { TodoManageComponent } from "./todo/todo-manage/todo-manage.component";


const routes:Routes = [
    {path:"remeber-word",component:RememberWordDesktopComponent},
    {path:"todo-list",component:ToDoListComponent},
    {path:"todo-manage",component:TodoManageComponent},
    {path:'kng-creator',component:KngCreatorComponent}
];

export const routing = RouterModule.forRoot(routes);