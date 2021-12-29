import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { HeaderComponent } from './header/header.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { HomeComponent } from './home/home.component';
import { MyworkComponent } from './mywork/mywork.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactformComponent } from './contactform/contactform.component';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { DataprotectionComponent } from './dataprotection/dataprotection.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    HeaderComponent,
    ImprintComponent,
    MyskillsComponent,
    HomeComponent,
    MyworkComponent,
    AboutmeComponent,
    ContactformComponent,
    FooterComponent,
    DataprotectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
