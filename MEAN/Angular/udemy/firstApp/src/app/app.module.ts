import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import * as fromAlerts from './alerts';
import * as fromAssignments from './assignments/';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ...fromAlerts.components,
    ...fromAssignments.components,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }