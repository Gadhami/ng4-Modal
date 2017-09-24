import { Component, Input } from '@angular/core';

import { IModalWindow } from '../../interfaces/modal-window';

@Component({
    selector   : 'app-modal-window',
    templateUrl: './modal-window.component.html',
    styleUrls  : ['./modal-window.component.css']
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

        this.modal.isVisible = false;

        if (this.modal.hasPerspective)
        {
            document.documentElement.classList.remove('md-perspective');
        }

        if (this.modal.onClose)
        {
            // console.log('Modal Closed');
            this.modal.onClose();
        }
    }
    // ========================================================================
}
