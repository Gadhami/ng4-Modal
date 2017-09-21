import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule                  } from '@angular/common';

import { ModalWindowComponent } from '../../components/modal-window/modal-window.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ModalWindowComponent,
    ],
    exports: [
        ModalWindowComponent,
    ]
})
export class ModalModule
{
    public static forRoot(): ModuleWithProviders
    {
        return {
            ngModule: ModalModule,
            // providers: [
            //     NotificationService
            // ]
        };
    }
}
