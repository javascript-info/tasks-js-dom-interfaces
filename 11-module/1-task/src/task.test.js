describe("11-module-1-task", function() {

    beforeEach(function () {
        let div = document.createElement('div');
        let tooltip = new Tooltip();
        let text = "привет мир";

        div.innerHTML = `
            <div class="wrapper">
                <span class="left_top" data-tooltip="${text}">Верх</span>
                <span class="left_bottom" data-tooltip="${text}" style="position: absolute; bottom: 0; left: 0">Низ</span>
            </div>  
        `;

        document.body.appendChild(div);
        tooltip.attach(div);

        this.div = div;
        this.text = text;
        this.tooltip = tooltip;
    });

    afterEach(function () {
        this.tooltip.detach(this.div);
        this.div.remove();
    });

    it ("проверяем показ и скртыие подсказки", function () {
        let tooltip = this.tooltip;
        let span = this.div.querySelector('.left_top[data-tooltip]');

        expect(tooltip.el.matches('body .tooltip')).toEqual(true);

        span.dispatchEvent(new Event('mouseover', {bubbles: true}));
        expect(tooltip.el.classList.contains(`${tooltip.name}_active`)).toEqual(true);
        expect(tooltip.el.innerHTML).toEqual(this.text);

        span.dispatchEvent(new Event('mouseout', {bubbles: true}));
        expect(tooltip.el.classList.contains(`${tooltip.name}_active`)).toEqual(false);
    });

    it ("наведение на элемент без data-tooltip не вызывает показ подсказки", function () {
        let div = this.div;
        let tooltip = this.tooltip;

        div.querySelector('.wrapper').dispatchEvent(new Event('mouseover', {bubbles: true}));
        expect(tooltip.el.classList.contains(`${tooltip.name}_active`)).toEqual(false);
    });

    it ("тултип показывается под элементом если это возможно", function () {
        let tooltip = this.tooltip;
        let span = this.div.querySelector('.left_top[data-tooltip]');

        span.dispatchEvent(new Event('mouseover', {bubbles: true}));

        let spanRect = span.getBoundingClientRect();
        let elRect = tooltip.el.getBoundingClientRect();

        expect(spanRect.bottom < elRect.top).toEqual(true);
        expect(spanRect.left === elRect.left).toEqual(true);
    });

    it ("если не возможно показать тултип сниху, то нужно показать с верху", function () {
        let tooltip = this.tooltip;
        let span = this.div.querySelector('.left_bottom[data-tooltip]');

        span.dispatchEvent(new Event('mouseover', {bubbles: true}));
        expect(document.documentElement.clientHeight > tooltip.el.getBoundingClientRect().bottom).toEqual(true);
    });


    it ("после detach события не должны обрабатываться", function () {
        let tooltip = this.tooltip;
        let span = this.div.querySelector('.left_bottom[data-tooltip]');

        tooltip.detach();

        span.dispatchEvent(new Event('mouseover', {bubbles: true}));
        expect(tooltip.el.classList.contains(`${tooltip.name}_active`)).toEqual(false);
    });

});