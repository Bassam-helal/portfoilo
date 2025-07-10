  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });


   const scrollToTopBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });
  const toggleBtn = document.getElementById("darkModeToggle");
  const body = document.body;

  // تحقق من الوضع المخزن مسبقًا
  if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    toggleBtn.classList.replace("bx-moon", "bx-sun");
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // تبديل الأيقونة
    toggleBtn.classList.toggle("bx-moon");
    toggleBtn.classList.toggle("bx-sun");

    // حفظ الوضع
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "enabled");
    } else {
      localStorage.setItem("dark-mode", "disabled");
    }
  });


 