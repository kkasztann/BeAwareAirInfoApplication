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
import { MHelpAboutComponent } from './m-help/m-help-about/m-help-about.component';
import { MHelpSupportComponent } from './m-help/m-help-support/m-help-support.component';
import { MHelpRateComponent } from './m-help/m-help-rate/m-help-rate.component';



@NgModule({
  declarations: [
    AppComponent,
    MHomeComponent,
    MDataComponent,
    MUserComponent,
    MHelpComponent,
    MLocationComponent,
    MHelpAboutComponent,
    MHelpSupportComponent,
    MHelpRateComponent,
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
