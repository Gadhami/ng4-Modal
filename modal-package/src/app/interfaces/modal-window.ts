export interface IModalWindow
{
    id: string;
    title: string;
    cssClass: string;
    buttonText?: string;

    // Mutually exclusive: either use content (ie. string) or pass your component to act as your content
    content?  : any;
    component?: any;

    isVisible: boolean;
    hasPerspective?: boolean;

    // Callback function
    onClose?: Function;
}
