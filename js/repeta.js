const counter = {
    value: 0,
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    },
};

const decrementBtn = document.querySelector('.js-decrement');
const increment = document.querySelector('.js-increment');
const valueElement = document.querySelector('.js-value');

decrementBtn.addEventListener('click', function () {
    console.log('клікнули на декремент');

    counter.decrement();
    console.log(counter);
    valueElement.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
    console.log(клікнули на інкремент);

    counter.increment();
    console.log(counter);
    valueElement.textContent = counter.value;
});

