import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
    transform(value: Array<any>, field: string): Array<any> {
        if (value == null) {
            return null;
        }

        if (!field) {
            return value;
        }

        if (field.startsWith('-')) {
            field = field.substring(1);
            if (typeof value[field] === 'string' || value[field] instanceof String) {
                return [...value].sort((a, b) => b[field].localeCompare(a[field]));
            }
            return [...value].sort((a, b) => a[field] < b[field] ? 1 : a[field] > b[field] ? -1 : 0);
        } else {
            if (typeof value[field] === 'string' || value[field] instanceof String) {
                return [...value].sort((a, b) => -b[field].localeCompare(a[field]));
            }
            return [...value].sort((a, b) => a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0);
        }
    }
}
