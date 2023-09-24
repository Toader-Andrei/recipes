import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { CooksComponent } from './components/cooks/cooks.component';
import { NotificationsComponent } from './components/notifications/notifications.component';

@NgModule({
  declarations: [AppComponent, FormComponent, RecipesComponent, CooksComponent, NotificationsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
