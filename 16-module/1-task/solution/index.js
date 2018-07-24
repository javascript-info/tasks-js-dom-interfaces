/**
 * processGenerator
 * @param {Generator} gen - генератор
 * @returns {Promise}
 */
function processGenerator(gen) {

    return new Promise(resolve => {

        function next(val) {
            let result = gen.next(val);

            if (result.done) {
                resolve(result.value);
            }

            if (result.value instanceof Promise) {
                result.value.then(next)
            }

        }

        next();
    });

}


