import { RouterModule, Routes } from "@angular/router";
import { RememberWordComponent } from './remember-word/remember-word.component';
import { TestPlaceComponent } from './test-place/test-place.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';


const routes:Routes = [
    {path:"remeber-word",component:RememberWordComponent},
    {path:"to-do-list",component:ToDoListComponent}
];

export const routing = RouterModule.forRoot(routes);