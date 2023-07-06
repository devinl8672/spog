import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TestComponent } from './test/test.component';
import { MainContentComponent } from './main-content/main-content.component';
import { TitleBoxComponent } from './title-box/title-box.component';
import { BoxComponent } from './box/box.component';
import { ItemBoxComponent } from './item-box/item-box.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TestComponent,
    MainContentComponent,
    TitleBoxComponent,
    BoxComponent,
    ItemBoxComponent
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
