describe("12-module-1-task", function() {

    it ("проверяем сборку, что в window.app содержится корректный input", function () {
        expect(window.app.input.hasOwnProperty('el')).toEqual(true);
        expect(window.app.input.name).toEqual('input');
        expect(typeof window.app.input.render).toEqual('function');
        expect(typeof window.app.input.setValue).toEqual('function');
    });


});