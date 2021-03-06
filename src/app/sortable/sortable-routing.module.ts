import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SortableComponent } from './sortable.component';

const routes: Routes = [
	{ path: '', component: SortableComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SortableRoutingModule {}
