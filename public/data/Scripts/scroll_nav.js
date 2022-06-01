window.onscroll = () => {scrollNavbar()};

scrollNavbar = () => {
    // Target elements
    const navBar = document.getElementById("navbar");
    const links = document.querySelectorAll("#navbar .active");

  if (document.documentElement.scrollTop > 50) {
    navBar.classList.add("fixed-header");

    // Change the color of links on scroll
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.add('scrolled-active');
    }

  } else {
    navBar.classList.remove("fixed-header");
    
    // Change the color of links back to default
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.remove('scrolled-active');
    }
  }
}