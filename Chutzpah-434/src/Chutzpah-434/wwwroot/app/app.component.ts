import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent {
    sumNumbers(firstNumber: number, secondNumber: number): number {
        var result: number = firstNumber + secondNumber;
        console.log(`Here the result:${result}`);
        return result;
    }
}