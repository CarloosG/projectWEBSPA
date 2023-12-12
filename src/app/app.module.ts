import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CancionListComponent } from './cancion-list/cancion-list.component';
import { CreateCancionComponent } from './create-cancion/create-cancion.component';
import { FormsModule } from '@angular/forms';
import { UpdateCancionComponent } from './update-cancion/update-cancion.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CancionListComponent,
    CreateCancionComponent,
    UpdateCancionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
