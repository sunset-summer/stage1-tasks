const inputs = document.querySelectorAll('.filters input');

function inputChange() {
    const suffix = this.dataset.sizing;
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', inputChange));
inputs.forEach(input => input.addEventListener('mousemove', inputChange));