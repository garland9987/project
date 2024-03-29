import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'month'
})
export class MonthPipe implements PipeTransform {

	transform(month: number, format?: string): string {
		if(format === 'short') {
			switch(month) {
				case 0: return 'Jan';
				case 1: return 'Feb';
				case 2: return 'Mar';
				case 3: return 'Apr';
				case 4: return 'May';
				case 5: return 'Jun';
				case 6: return 'Jul';
				case 7: return 'Aug';
				case 8: return 'Sep';
				case 9: return 'Oct';
				case 10: return 'Nov';
				case 11: return 'Dec';
				default: return '';
			}
		}

		switch(month) {
			case 0: return 'January';
			case 1: return 'February';
			case 2: return 'March';
			case 3: return 'April';
			case 4: return 'May';
			case 5: return 'June';
			case 6: return 'July';
			case 7: return 'August';
			case 8: return 'September';
			case 9: return 'October';
			case 10: return 'November';
			case 11: return 'December';
			default: return '';
		}
	}
}
