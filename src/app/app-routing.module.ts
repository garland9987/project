import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { NotFoundComponent } from '@core/module/not-found/not-found.component';

const routes: Routes = [
	{ path: 'reactive-form', loadChildren: () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormModule) },
	{ path: 'guard', loadChildren: () => import('./guard/guard.module').then(m => m.GuardModule) },
	{ path: 'restful', loadChildren: () => import('./restful/restful.module').then(m => m.RestfulModule) },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload' })],
	exports: [RouterModule]
})
export class AppRoutingModule {}
