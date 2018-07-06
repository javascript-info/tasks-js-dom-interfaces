(function () {

    class Tooltip {

        /**
         * Имя компонента
         * @property {string}
         */
        get name() {
            return 'tooltip';
        }

        /**
         * Отступ
         */
        get indent() {
            return 5;
        }

        constructor() {
            /**
             * Данное свойство содержит ссылку на
             * елемент содержащий подсказку
             * @type {HTMLDivElement}
             */
            this.el = document.createElement('div');
            this.el.style.position = 'absolute';

            this.el.classList.add(this.name);
            this.el.classList.toggle(`${this.name}_active`, false);

            this.listeners = [];

            document.body.appendChild(this.el);


            // необходимо привязать контекст,
            // чтобы во всех обработчиках использовать именно эту функцию
            // и для того, чтобы потом можно было удалить обработчик

            this.onShow = this.onShow.bind(this);
            this.onHide = this.onHide.bind(this);
        }

        delegate(eventName, element, cssSelector, callback) {
            let fn = event => {

                if (!event.target.matches(cssSelector)) {
                    return;
                }

                callback(event);
            };


            element.addEventListener(eventName, fn);
            this.listeners.push({ fn, element, eventName });

            return this;
        }

        onShow(event) {
            this.el.innerHTML = event.target.getAttribute('data-tooltip');
            this.el.classList.toggle(`${this.name}_active`, true);

            let spanRect = event.target.getBoundingClientRect();
            let elRect = this.el.getBoundingClientRect();

            let top = spanRect.bottom + this.indent;

            if (top + elRect.height > document.documentElement.clientHeight) {
                // если тултип не влезает по высоте, то поднимаем его над элементом
                top = spanRect.top - elRect.height - this.indent;
            }

            this.el.style.top = `${top}px`;
        }

        onHide() {
            this.el.classList.toggle(`${this.name}_active`, false);
        }

        /**
         * Метод подключает включает работу подсказок
         * на элементе
         *
         * @param {Element} root - элемент, внутри которого, нужно включить работу подсказок
         */
        attach(root) {

            this
                .delegate('mouseover', root, '[data-tooltip]', this.onShow)
                .delegate('mouseout', root, '[data-tooltip]', this.onHide);

        }

        /**
         * Удаляет все обработчики компонента
         */
        detach() {

            for (let {fn, element, eventName} of this.listeners) {
                element.removeEventListener(eventName, fn);
            }

        }
    }

    window.Tooltip = Tooltip;
})();