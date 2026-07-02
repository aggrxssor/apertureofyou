import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-contact',
    standalone: false,
    templateUrl: './contact.html',
    styleUrl: './contact.css',
})
export class Contact {
    showToast = false;

    constructor(private cdr: ChangeDetectorRef) {}

    copyEmail(emailAddress: string) {
        navigator.clipboard.writeText(emailAddress).then(() => {
            
            this.showToast = true;
            
            this.cdr.detectChanges(); 
            
            setTimeout(() => {
                this.showToast = false;
                
                this.cdr.detectChanges(); 
            }, 3000);
            
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }
}
