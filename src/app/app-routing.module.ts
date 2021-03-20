import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { MainComponent } from './main/main.component';
import { ArticleComponent} from './article/article.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: 'articles', component: MainComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: '404', component: NotFoundComponent},
  {path: '', component: MainComponent},
  {path: ':key', component: ArticleComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
