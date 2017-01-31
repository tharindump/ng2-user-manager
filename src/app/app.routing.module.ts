import { UserDetailComponent } from './users/user-detail.component';
import { UserDashBoardCompnent } from './users/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: UserDashBoardCompnent},
    {path: 'user/:username', component: UserDetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [AppRoutingModule]
})
export class AppRoutingModule {}