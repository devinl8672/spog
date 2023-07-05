import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TestComponent } from './test/test.component';
import { MainContentComponent } from './main-content/main-content.component';
import { TitleBoxComponent } from './title-box/title-box.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TestComponent,
    MainContentComponent,
    TitleBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
