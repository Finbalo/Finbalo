// Toggle dropdown menu when dropdown icon is clicked
function toggleDropdownMenu(event) {
  const button = event.currentTarget;
  const container = button.closest(".dropdown-container");
  const menu = container.querySelector(".dropdown-menu");

  // Close all other dropdowns
  document.querySelectorAll(".dropdown-menu.show").forEach((openMenu) => {
    if (openMenu !== menu) {
      openMenu.classList.remove("show");
    }
  });

  //   Toggle the clicked dropdown
  menu.classList.toggle("show");
}

// show current option
function selectOption(event, option) {
  const item = event.currentTarget;
  const container = item.closest(".dropdown-container");
  const currentOption = container.querySelector(".current-option");
  const menu = container.querySelector(".dropdown-menu");

  currentOption.textContent = option;
  menu.classList.remove("show");
}

// Close all dropdowns when clicking outside
document.addEventListener("click", function (event) {
  const containers = document.querySelectorAll(".dropdown-container");
  let isInsideAnyDropdown = false;

  containers.forEach((container) => {
    if (container.contains(event.target)) {
      isInsideAnyDropdown = true;
    }
  });

  if (!isInsideAnyDropdown) {
    document.querySelectorAll(".dropdown-menu.show").forEach((menu) => {
      menu.classList.remove("show");
    });
  }
});
