import { Component } from '@angular/core';

@Component({
	selector: 'app-translation',
	templateUrl: './translation.component.html',
	styleUrls: ['./translation.component.scss']
})
export class TranslationComponent {
	public title: string = 'Translation';
	public items: string[] = ['table', 'book', 'cat', 'tree', 'bicycle'];
}
