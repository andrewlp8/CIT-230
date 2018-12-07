document.querySelector('input[type=range]').addEventListener('input', function rangeChange() {
    // trigger the CSS to update
    this.setAttribute('value', this.value);
  });