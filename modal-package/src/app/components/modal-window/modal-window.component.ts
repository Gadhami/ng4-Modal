import { Component, Input } from '@angular/core';
import { IModalWindow     } from '../../interfaces/modal-window';

@Component({
    selector   : 'app-modal-window',
    templateUrl: './modal-window.component.html',
    styleUrls  : ['./modal-window.component.scss']
})
export class ModalWindowComponent
{
    @Input() modal: IModalWindow;

    // ========================================================================
    constructor() { }

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
    }
    // ========================================================================
}
