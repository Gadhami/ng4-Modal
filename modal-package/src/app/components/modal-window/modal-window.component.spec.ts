import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA                 } from '@angular/core';

import { ModalWindowComponent } from './modal-window.component';
import { IModalWindow         } from '../../interfaces/modal-window';

// ========================================================================
describe('ModalWindowComponent', () =>
{
    let component: ModalWindowComponent;
    let fixture  : ComponentFixture<ModalWindowComponent>;
    let modal    : IModalWindow;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas     : [NO_ERRORS_SCHEMA],
            declarations: [ModalWindowComponent]
        })
        .compileComponents();
    }));

    beforeEach(() =>
    {
        fixture   = TestBed.createComponent(ModalWindowComponent);
        component = fixture.componentInstance;

        component.modal =
        {
            id: 'modal',
            title: 'Modal Window Title',
            content: 'lorem ipsum dolores...',
            buttonText: 'Sure',
            cssClass: '',
            isVisible: false,
            hasPerspective: false,
        };

        fixture.detectChanges();
    });

    // ========================================================================
    it('should be created', () =>
    {
        expect(component).toBeTruthy();
    });
    // ========================================================================
});
