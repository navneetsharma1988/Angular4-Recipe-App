import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appDropdown]'             // attribute selector syntax
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

   /* @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }*/

    @HostListener('mouseenter') mouseover(event: Event) {
        this.isOpen = true;
    }

    @HostListener('mouseleave') mouseleave(event: Event) {
        this.isOpen = false;
    }


    constructor() {
    }

}
