describe("9-module-1-task", function() {

    it ('проверям корректность наследования', function () {

        function Animal() {
        }

        Animal.prototype.walk = function () {};


        function Rabbit() {
        }

        extendClass(Rabbit, Animal);

        Rabbit.prototype.jump = function () {};

        let rabbit = new Rabbit();

        expect(rabbit instanceof Rabbit).toEqual(true);
        expect(rabbit instanceof Animal).toEqual(true);
        expect(typeof rabbit.walk).toEqual('function');
        expect(typeof rabbit.jump).toEqual('function');

    });


});