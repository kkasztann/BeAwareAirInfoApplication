import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule,  MatButtonModule, MatIconModule, MatSidenavModule  } from '@angular/material';




import { AppComponent } from './app.component';
import { MHomeComponent } from './m-home/m-home.component';
import { MDataComponent } from './m-data/m-data.component';
import { MUserComponent } from './m-user/m-user.component';
import { MHelpComponent } from './m-help/m-help.component';
import { MLocationComponent } from './m-location/m-location.component';



@NgModule({
  declarations: [
    AppComponent,
    MHomeComponent,
    MDataComponent,
    MUserComponent,
    MHelpComponent,
    MLocationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
