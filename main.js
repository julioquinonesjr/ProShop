// Tiny cart counter placeholder
document.querySelectorAll(".card").forEach((card) =>
  card.addEventListener("click", () => {
    const cart = document.querySelector(".cart");
    const current = parseInt(cart.textContent) || 0;
    cart.textContent = `${current + 1} Cart`;
  })
);

// Smooth-scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach((a) =>
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  })
);