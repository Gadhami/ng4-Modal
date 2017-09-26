import { Component, Input, OnInit, HostListener } from '@angular/core';

// Interface
import { IModalWindow } from '../../interfaces/modal-window';

@Component({
    selector   : 'app-modal-window',
    templateUrl: './modal-window.component.html',
    styleUrls  : ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit
{
    @Input() modal: IModalWindow;

    // ========================================================================
    constructor() { }

    // ========================================================================
    ngOnInit()
    {
        this.modal.showCloseBtn = this.modal.showCloseBtn ? this.modal.showCloseBtn : true;
    }

    // ========================================================================
    showModal()
    {
        this.modal.isVisible = true;

        // Add 3d perspective
        if (this.modal.hasPerspective)
        {
            setTimeout(() => {
                document.documentElement.classList.add('md-perspective');
            }, 25);
        }
    }

    // ========================================================================
    @HostListener('document:keydown.esc')
    closeModal(e)
    {
        if (e)
        {
            e.stopPropagation();
        }

        // Hide modal window
        this.modal.isVisible = false;

        // Remove 3d perspective
        if (this.modal.hasPerspective)
        {
            document.documentElement.classList.remove('md-perspective');
        }

        // Callback function
        if (this.modal.onClose)
        {
            this.modal.onClose();
        }

        return false;
    }

    // ========================================================================
}
