import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'jobs',
        pathMatch: 'full'
    },
    {
        path: 'jobs',
        loadChildren: '../jobs/jobs.module#JobsModule'
    },
    // {
    //   path: 'login',
    //   component: LoginComponent
    // },
    // {
    //   path: 'admin',
    //   canActivate: [AuthGuardService],
    //   loadChildren: '../admin/admin.module#AdminModule'
    // },
    // {
    //   path: 'form',
    //   loadChildren: '../form/form.module#FormModule'
    // },
    // {
    //   path: '**',
    //   component: NotFoundComponent
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
