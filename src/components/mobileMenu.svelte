<script>
    const initApp = () => {
  const hamburgerBtn = document.querySelector("#hamburgerButton");
  const darkBg = document.querySelector("#darkBgMobile");
  const mobileMenu = document.querySelector("#mobileMenu");
  const searchBtnsm = document.querySelector("#searchBtnsm");
  const searchBtnlg = document.querySelector("#searchBtnlg");
  const searchMenu = document.querySelector("#searchContainer");
  const closeSearch = document.querySelector("#closeSearch");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    darkBg.classList.toggle("hidden");
    darkBg.classList.toggle("flex");
  };

  const toggleSearch = () => {
    searchMenu.classList.toggle("hidden");
    searchMenu.classList.toggle("flex");
  };

  const fixedBackground = () => {
    document.body.style.overflowY =
      document.body.style.overflowY === "hidden" ? "visible" : "hidden";
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  hamburgerBtn.addEventListener("click", fixedBackground);
  darkBg.addEventListener("click", fixedBackground);
  darkBg.addEventListener("click", toggleMenu);
  closeSearch.addEventListener("click", toggleSearch);
  searchBtnsm.addEventListener("click", toggleSearch);
  searchBtnlg.addEventListener("click", toggleSearch);
};

document.addEventListener("DOMContentLoaded", initApp);

</script>

<div
class="hidden w-[60%] origin-left z-[999] fixed animate-fade-in-down h-[100vh] lg:hidden flex-col top-[100px] left-0 bg-white overflow-x-hidden border-b-[1px] border-gray-300"
id="mobileMenu"
>
<div
  class="border-t-[1px] border-gray-300 w-full h-[10vh] text-[18px] flex justify-start items-center pl-[5vw]"
>
  <li class="list-none">
    <a href="#" class="hover:text-yellow-600">Home</a>
  </li>
</div>
<div
  class="border-t-[1px] border-gray-300 w-full h-[10vh] text-[18px] flex justify-start items-center pl-[5vw]"
>
  <li class="list-none">
    <a href="#" class="hover:text-yellow-600">Catalogue</a>
  </li>
</div>
<div
  class="border-t-[1px] border-gray-300 w-full h-[10vh] text-[18px] flex justify-start items-center pl-[5vw]"
>
  <li class="list-none">
    <a href="#" class="hover:text-yellow-600">Fashion</a>
  </li>
</div>
<div
  class="border-t-[1px] border-gray-300 w-full h-[10vh] text-[18px] flex justify-start items-center pl-[5vw]"
>
  <li class="list-none">
    <a href="#" class="hover:text-yellow-600">Favorite</a>
  </li>
</div>
<div
  class="border-t-[1px] border-gray-300 w-full h-[10vh] text-[18px] flex justify-start items-center pl-[5vw]"
>
  <li class="list-none">
    <a href="#" class="hover:text-yellow-600">Lifestyle</a>
  </li>
</div>
<div
  class="border-t-[1px] border-gray-300 w-full h-[10vh] text-[14px] md:text-[18px] flex justify-center items-center"
>
  <li class="list-none">
    <a href="#"> © Fashion Clothings 2022</a>
  </li>
</div>
</div>