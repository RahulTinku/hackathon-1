import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { InstallComponent } from './install/install.component';
import { HelpComponent } from './help/help.component';
import { UninstallComponent } from './uninstall/uninstall.component';
import { ConfigComponent } from './config/config.component';
import { LogComponent } from './log/log.component';
import { AboutComponent } from './about/about.component';


export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: InstallComponent
    },
    //{ path: '**', redirectTo: '/', pathMatch: "full" },
    { path: 'install', component: InstallComponent },
    { path: 'uninstall', component: UninstallComponent },
    { path: 'config', component: ConfigComponent },
    { path: 'log', component: LogComponent },
    { path: 'about', component: AboutComponent },
    { path: 'tsgHelp', component: HelpComponent }
    ]);