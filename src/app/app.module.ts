import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InstallComponent } from './install/install.component';
import { UninstallComponent } from './uninstall/uninstall.component';
import { ConfigComponent } from './config/config.component';
import { LogComponent } from './log/log.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';


@NgModule({
  declarations: [
    AppComponent,
    InstallComponent,
    UninstallComponent,
    ConfigComponent,
    LogComponent,
    AboutComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
