import {AppComponent} from './app.component';

describe('AppComponent', () => {
    it('Sum method returns correct value', () => {
        let simpleComponent = new AppComponent();
        expect(simpleComponent.sumNumbers(5, 6)).toEqual(11);
    });

    it('Sum method with log and error', () => {
        let simpleComponent = new AppComponent();
        console.log("Test output!!! Just go to test output and see logs!!");
        expect(simpleComponent.sumNumbers(5, 6)).toEqual(12);
    });
});
