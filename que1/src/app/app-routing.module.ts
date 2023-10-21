import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataDisplayComponent } from './data-display/data-display.component';
import { UserInputFormComponent } from './user-input-form/user-input-form.component';

const routes: Routes = [
  { path: '', component: DataDisplayComponent },
  { path: 'user-input', component: UserInputFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
