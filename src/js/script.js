document.getElementById('menu').addEventListener('change', function () {
  const menuList = document.getElementById('menu_list');
  menuList.style.display = this.checked ? 'block' : 'none';
})

let colors=document.querySelectorAll(".color");
let condition_color = false;
let condition_unit = false;

document.querySelector(".add_to_cart").addEventListener('click', function (){
  if(condition_color && condition_unit){
    let unit = Number(document.querySelector(".quantity_selector").value);
    let cart_num = Number(document.querySelector("#cart_pop").textContent);
    document.querySelector("#cart_pop").style.display = "block";
    document.querySelector("#cart_pop").textContent = unit+cart_num;
    document.querySelector(".quantity_selector").value=0;
    for(color of colors){
      color.classList.remove("color_selected");
    }
    condition_color = false;
    condition_unit = false;
    alert("Producto añadido correctamente");
  }else if (!condition_color) {
    alert("Elija un color");
  } else {
    alert("Elija una cantidad");
  }
});

for(color of colors) {
  color.addEventListener('click', function (){
    color_selected(this);
  });
};
document.querySelector(".quantity_selector").addEventListener('change', function (){
  if(document.querySelector(".quantity_selector").value>0){
    condition_unit = true;
  }else condition_unit = false;
});

function color_selected(element){
  for(color of colors){
    color.classList.remove("color_selected");
  }
  element.classList.add("color_selected");
  condition_color = true;
}