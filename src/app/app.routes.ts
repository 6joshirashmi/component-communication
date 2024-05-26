import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildSiblingComponent } from './child-sibling/child-sibling.component';
import { ChildComponent } from './child/child.component';

export const routes: Routes = [

    {path:'parent' , component:ParentComponent},
    {path:'childsibling' , component:ChildSiblingComponent},
    {path:'child' , component:ChildComponent},
    // {path:'/' , component:},
    // {path:'/' , component:},
];
