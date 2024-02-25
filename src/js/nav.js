// Nav Toggle Button Control
// Purpose: Hide and show mobile navigation menu
//
// 1. Assign the navigation toggle button to "navToggle" variable
// 2. Assign the navigation content div to "navContent" variable
// 3. "toggle" function to hide/show the navigation content
// 4. Add click listener to navToggle to call toggle() on navContent when navToggle is clicked

(function buttonControlInit() {
  const navToggle = document.querySelector("#nav_toggle");
  const navContent = document.querySelector("#nav_content");
  const homeNavContent = document.querySelector("#home_nav_content")
  const nav = document.querySelector("nav");

  function toggleNav() {
    // Check if navContent exists before toggling class
    if (navContent) {
      navContent.classList.toggle("hidden");
    } else {
      console.error("navContent element not found!");
    }

    // Assuming homeNavContent might be null in some pages
    if (homeNavContent) {
      homeNavContent.classList.toggle("mobile-nav-background");
      homeNavContent.classList.toggle("hidden");
    } else {
      console.error("homeNavContent element not found!");
    }
  }

  // Bind the toggleNav function to the click event of navToggle if navToggle exists
  if (navToggle) {
    navToggle.addEventListener('click', toggleNav);
  } else {
    console.error("navToggle button not found!");
  }


  navToggle.addEventListener("click", toggleNav);

  // FAQ Dropdown Control
  // 1. Gather all <detail> elements into an array
  // 2. Assign a click listener to each one
  // 3. Click listener toggles "open" class when clicked

  const detailsArray = document.querySelectorAll("details");

  function toggleDetails(e) {
    e.target.classList.toggle("open");
  }
  detailsArray.forEach((el) => el.addEventListener("toggle", toggleDetails));
})();
