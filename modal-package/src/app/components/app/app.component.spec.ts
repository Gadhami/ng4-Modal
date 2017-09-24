import { TestBed, async      } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA    } from '@angular/core';

import { AppComponent        } from './app.component';

// ============================================================================
describe('AppComponent', () =>
{
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            schemas     : [NO_ERRORS_SCHEMA],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));

    // ============================================================================
    it('should create the app', async(() =>
    {
        const fixture = TestBed.createComponent(AppComponent);
        const app     = fixture.debugElement.componentInstance;

        expect(app).toBeTruthy();
    }));

    // ============================================================================
    it('should render demo buttons', async(() =>
    {
        const fixture  = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelectorAll('button[data-modal]').length).toBe(19);
    }));

    // ============================================================================
    it('should display modal window', async(() =>
    {
        const fixture    = TestBed.createComponent(AppComponent);

        const component  = fixture.componentInstance;
        component.modals = [{
            id: 'modal',
            title: 'Modal Window Title',
            content: 'lorem ipsum dolores...',
            buttonText: 'Sure',
            cssClass: '',
            isVisible: false,
            hasPerspective: false,
        }];

        fixture.detectChanges();

        component.showModal(0, true);

        const compiled   = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.blur')).toBeTruthy();
    }));
    // ============================================================================
});
