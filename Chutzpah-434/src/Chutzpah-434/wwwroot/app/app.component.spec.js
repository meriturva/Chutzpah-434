System.register(['./app.component'], function(exports_1) {
    var app_component_1;
    return {
        setters:[
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            describe('AppComponent', function () {
                it('Sum method returns correct value', function () {
                    var simpleComponent = new app_component_1.AppComponent();
                    expect(simpleComponent.sumNumbers(5, 6)).toEqual(11);
                });
                it('Sum method with log and error', function () {
                    var simpleComponent = new app_component_1.AppComponent();
                    console.log("Test output!!! Just go to test output and see logs!!");
                    expect(simpleComponent.sumNumbers(5, 6)).toEqual(12);
                });
            });
        }
    }
});
//# sourceMappingURL=app.component.spec.js.map