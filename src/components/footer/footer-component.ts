import { Component } from '@angular/core';

@Component({
    selector: 'wa-footer',
    templateUrl: './footer.html',
    styleUrls: ['./footer.css']
})
export class FooterComponent {
    public year: number = new Date().getFullYear();
}