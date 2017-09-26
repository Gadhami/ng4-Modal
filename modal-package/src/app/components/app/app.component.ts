import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';

import { IModalWindow         } from '../../interfaces/modal-window';

import { DummyDataComponent   } from '../../components/dummy-data/dummy-data.component';
import { ModalWindowComponent } from '../modal-window/modal-window.component';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.css']
})
export class AppComponent implements OnInit
{
    // True = Blur document content when modal dialog is showing. Do nothing otherwise
    blurContent   : boolean;

    activeModalIdx: number;
    modals        : IModalWindow[];
    @ViewChildren('modalWindow') modalWindow: QueryList<ModalWindowComponent>;

    // Normally you would need something like this: (instead of a QueryList<...>)
    // @ViewChild('modalWindow') modalWindow: ElementRef<ModalWindowComponent>;

    // ========================================================================
    ngOnInit()
    {
        this.modals =
        [
            {
                id        : 'modal-1',
                isVisible : false,
                title     : 'Fade in &amp; Scale',
                cssClass  : 'md-effect-1',
                component : DummyDataComponent,
                buttonText: 'Close',
            },
            {
                id        : 'modal-2',
                isVisible : false,
                title     : 'Slide in (right)',
                cssClass  : 'md-effect-2',
                component : DummyDataComponent,
                buttonText: 'OK'
            },
            {
                id        : 'modal-3',
                isVisible : false,
                title     : 'Slide in (bottom)',
                cssClass  : 'md-effect-3',
                content   : 'Bisou bisou!',
                buttonText: 'Got it!'
            },
            {
                id        : 'modal-4',
                isVisible : false,
                title     : 'Newspaper',
                cssClass  : 'md-effect-4',
                component : DummyDataComponent,
                buttonText: 'OK'
            },
            {
                id        : 'modal-5',
                isVisible : false,
                title     : 'Fall',
                cssClass  : 'md-effect-5',
                component : DummyDataComponent,
                buttonText: 'OK'
            },
            {
                id        : 'modal-6',
                isVisible : false,
                title     : 'Side Fall',
                cssClass  : 'md-effect-6',
                component : DummyDataComponent,
                buttonText: 'OK'
            },
            {
                id        : 'modal-7',
                isVisible : false,
                title     : 'Sticky Up',
                cssClass  : 'md-effect-7',
                component : DummyDataComponent,
                buttonText: 'OK'
            },
            {
                id        : 'modal-8',
                isVisible : false,
                title     : '3D Flip (horizontal)',
                cssClass  : 'md-effect-8',
                component : DummyDataComponent,
                buttonText: 'OK'
            },
            {
                id        : 'modal-9',
                isVisible : false,
                title     : '3D Flip (vertical)',
                cssClass  : 'md-effect-9',
                component : DummyDataComponent,
                buttonText: 'OK'
            },
            {
                id        : 'modal-10',
                isVisible : false,
                title     : '3D Sign',
                cssClass  : 'md-effect-10',
                component : DummyDataComponent,
                buttonText: 'OK'
            },
            {
                id        : 'modal-11',
                isVisible : false,
                title     : 'Super Scaled',
                cssClass  : 'md-effect-11',
                component : DummyDataComponent,
                buttonText: 'OK'
            },
            {
                id        : 'modal-12',
                isVisible : false,
                title     : 'Just Me',
                cssClass  : 'md-effect-12',
                component : DummyDataComponent,
                buttonText: 'OK'
            },
            {
                id        : 'modal-13',
                isVisible : false,
                title     : '3D Slit',
                cssClass  : 'md-effect-13',
                component : DummyDataComponent,
                buttonText: 'OK'
            },
            {
                id        : 'modal-14',
                isVisible : false,
                title     : '3D Rotate Bottom',
                cssClass  : 'md-effect-14',
                component : DummyDataComponent,
                buttonText: 'OK'
            },
            {
                id        : 'modal-15',
                isVisible : false,
                title     : '3D Rotate In Left',
                cssClass  : 'md-effect-15',
                component : DummyDataComponent,
                buttonText: 'OK'
            },
            {
                id        : 'modal-16',
                isVisible : false,
                title     : 'Blur',
                cssClass  : 'md-effect-16',
                component : DummyDataComponent,
                buttonText: 'OK',
                onClose   : this.onModalClose.bind(this),
            },

            // The following styles add a 3d perspective to the html element
            {
                id            : 'modal-17',
                isVisible     : false,
                title         : 'Let me in',
                cssClass      : 'md-effect-17',
                component     : DummyDataComponent,
                buttonText    : 'OK',
                hasPerspective: true,
                showCloseBtn  : false,
            },
            {
                id            : 'modal-18',
                isVisible     : false,
                title         : 'Make way!',
                cssClass      : 'md-effect-18',
                component     : DummyDataComponent,
                buttonText    : 'OK',
                hasPerspective: true,
            },
            {
                id            : 'modal-19',
                isVisible     : false,
                title         : 'Slip from top',
                cssClass      : 'md-effect-19',
                component     : DummyDataComponent,
                buttonText    : 'OK',
                hasPerspective: true,
            },

            {
                id            : 'modal-20',
                isVisible     : false,
                title         : 'Vertical Expand',
                cssClass      : 'md-effect-20',
                component     : DummyDataComponent,
                buttonText    : 'OK',
                hasPerspective: false,
            },
            // Jelly
            {
                id            : 'modal-21',
                isVisible     : false,
                title         : 'Jelly',
                cssClass      : 'don',
                component     : DummyDataComponent,
                buttonText    : 'OK',
                hasPerspective: false,
            },
        ];
    }

    // ========================================================================
    showModal(index: number, blur?: boolean)
    {
        this.blurContent    = blur || false;

        this.activeModalIdx = index;
        this.modalWindow.toArray()[index].showModal();
    }

    // ========================================================================
    onModalClose()
    {
        if (this.blurContent)
        {
            // Disable Blur
            this.blurContent = false;
        }
    }
    // ========================================================================
}
