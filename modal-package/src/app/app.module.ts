import { BrowserModule } from '@angular/platform-browser';
import { NgModule      } from '@angular/core';

import { ModalModule   } from './modules/modal/modal.module';

import { AppComponent       } from './components/app/app.component';
import { DummyDataComponent } from './components/dummy-data/dummy-data.component';
import { TopNavComponent    } from './components/top-nav/top-nav.component';

@NgModule({
    declarations: [
        AppComponent,
        DummyDataComponent,
        TopNavComponent,
    ],
    imports: [
        BrowserModule,
        ModalModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
        DummyDataComponent
    ]
})
export class AppModule { }
