import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component';
import { CoreModule }   from './core/core.module';
import { HeroesComponent } from './heroes/heroes.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
