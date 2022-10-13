import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { ListDetailsComponent } from './list-details/list-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ScrollTrackerDirective } from './shared/scroll-tracker.directive';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ListContainerComponent,
    ListDetailsComponent,
    PageNotFoundComponent,
    ScrollTrackerDirective,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,   

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
