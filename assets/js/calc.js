function Calculator() {
  this.input = document.getElementById('input');
  this.display = document.getElementById('display');

  this.init = () => {
    this.checkChar();
    this.buttonClick();
    this.pressEnter();
    this.buttonPress();
  }

  this.errorMessage = (msg) => {
    this.input.value = this.input.value.replace('*', 'X');
    this.input.classList.add('errorMessage');
    this.display.classList.add('errorMessage');
    this.display.innerText = msg;
  }

  this.checkChar = () => {
    if (this.input.value === '') this.input.value = 0;
    this.input.addEventListener('keyup', e => {
      this.cleanInput();
      this.errorMessage("you can't type here 😃.");
    });
  }

  this.calc = () => {
    try {
      this.input.value = this.input.value.replace('X', '*');
      const inputValue = eval(this.input.value);
      this.input.value = this.input.value.replace('*', 'X');

      if (!inputValue) {
        this.errorMessage('Formatting error');
        return
      }
      this.display.innerText = inputValue;
    } catch (error) {
      this.errorMessage('Formatting error');
      return;
    }
  }

  this.setValueInput = (el) => {
    if (this.input.value == 0) this.input.value = '';
    this.input.value += el;
    this.input.focus();
  }

  this.cleanInput = () => {
    this.input.value = 0;
    this.display.innerText = '';
  }

  this.deleteOne = () => this.input.value = this.input.value.slice(0, -1);

  this.buttonClick = () => {
    document.addEventListener('click', e => {
      const el = e.target;
      if (el.classList.contains('btn-num')) this.setValueInput(el.innerText);
      if (el.classList.contains('btn-others')) this.setValueInput(el.innerText);
      if (el.classList.contains('btn-operator')) this.setValueInput(el.innerText);
      if (el.classList.contains('btn-clean')) this.cleanInput();
      if (el.classList.contains('btn-del')) this.deleteOne();
      if (this.display.innerText === 'Formatting error') this.display.innerText = '';
      this.input.classList.remove('errorMessage');
      this.display.classList.remove('errorMessage');
      if (el.classList.contains('btn-equal')) this.calc();
      if (this.input.value === '') this.input.value = 0;
    });
  }

  this.pressEnter = () => {
    document.addEventListener('keydown', e => {
      if (e.keyCode === 13) return this.calc();
    })
  }

  this.buttonPress = () => {
    document.addEventListener('keydown', e => {
      const keyCode = e.keyCode;
      if (keyCode === 96 || keyCode === 48) this.setValueInput(0);
      if (keyCode === 97 || keyCode === 49) this.setValueInput(1);
      if (keyCode === 98 || keyCode === 50) this.setValueInput(2);
      if (keyCode === 99 || keyCode === 51) this.setValueInput(3);
      if (keyCode === 100 || keyCode === 52) this.setValueInput(4);
      if (keyCode === 101 || keyCode === 53) this.setValueInput(5);
      if (keyCode === 102 || keyCode === 54) this.setValueInput(6);
      if (keyCode === 103 || keyCode === 55) this.setValueInput(7);
      if (keyCode === 104 || keyCode === 56) this.setValueInput(8);
      if (keyCode === 105 || keyCode === 57) this.setValueInput(9);
      if (keyCode === 8) this.deleteOne();
      if (keyCode === 46) this.cleanInput();
      if (keyCode === 107) this.setValueInput('+');
      if (keyCode === 109) this.setValueInput('-');
      if (keyCode === 106) this.setValueInput('*');
      if (keyCode === 111) this.setValueInput('/');
      if (keyCode === 194) this.setValueInput('.');
      if (this.display.innerText === 'Formatting error') this.display.innerText = '';
      if (this.input.value === '') this.input.value = 0;
      this.input.classList.remove('errorMessage');
      this.display.classList.remove('errorMessage');
    });
  }
}
const calc = new Calculator();
calc.init();
