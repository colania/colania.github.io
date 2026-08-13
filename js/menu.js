function toggleMenu() {
    var menuList = document.getElementsByClassName("menu-list")[0];
    var menuButton = document.getElementById("menu-btn");  
    if(menuList.classList.contains("active")){
      menuList.classList.remove("active");
      menuButton.innerHTML = '<span class="menu-toggle-symbol" aria-hidden="true"></span><span>菜单</span>';
    }else{
      menuList.classList.add("active");
      menuButton.innerHTML = '<span class="menu-toggle-symbol menu-toggle-symbol-open" aria-hidden="true"></span><span>收起</span>';
    }
}
