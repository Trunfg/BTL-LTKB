const buttons = document.querySelectorAll('.ghe');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // xoá class "selected" của button được chọn trước đó
    const selected = document.querySelector('.selected');
    if (selected) {
      selected.classList.remove('selected');
    }
    // thêm class "selected" cho button được click
    button.classList.add('selected');
  });
});