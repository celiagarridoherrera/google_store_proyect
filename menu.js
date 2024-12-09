document.getElementById('menu').addEventListener('change', function () {
    const menuList = document.getElementById('menu_list');
      menuList.style.display = this.checked ? 'block' : 'none';
  })