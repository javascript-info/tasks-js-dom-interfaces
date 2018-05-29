calendar[Symbol.iterator] = function () {
    let current = this.from;
    let to = this.to;

    return {

        next() {

            if (current < to) {
                current.setDate(current.getDate() + 1);

                let value = current.getDate().toString();

                if (value.length === 1) {
                    value = `0${value}`;
                }

                if ([0,6].indexOf(current.getDay()) !== -1) {
                    value = `[${value}]`;
                }

                return { done: false, value }
            }

            return { done: true };
        }

    }

};