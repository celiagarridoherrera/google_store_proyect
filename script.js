document.getElementById('menu').addEventListener('change', function () {
  const menuList = document.getElementById('menu_list');
  enuList.style.display = this.checked ? 'block' : 'none';
})

document.querySelector(".add_to_cart").addEventListener('click', function (){
  let unit = Number(document.querySelector(".quantity_selector").value);
  let cart_num = Number(document.querySelector("#cart_pop").textContent);
  document.querySelector("#cart_pop").textContent = unit+cart_num;
});