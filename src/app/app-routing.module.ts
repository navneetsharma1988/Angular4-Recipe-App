import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';
import { ErrorComponent} from './core/error/error.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
    // { path: '', redirectTo: '/signup', pathMatch: 'full' },
    { path : '', component: HomeComponent },
    // loadChildren property allows to lazy loaded angular module or component
    // and canLoad guard provides only allows to lazy loaded route by implementing CanLoad interface
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGuard]},
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'error', component: ErrorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
