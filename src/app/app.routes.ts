import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './components/page/page.component';

const ROUTES: Routes = [
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
});

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
