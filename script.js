// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // Scroll-to-Top Button
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.textContent = "⬆️";
  scrollToTopBtn.classList.add("scroll-to-top");
  document.body.appendChild(scrollToTopBtn);
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });
  
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  
  // Modal Popup for Additional Information
  function openModal() {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-btn">&times;</span>
        <h2>Welcome to Our Platform</h2>
        <p>Our platform provides solutions designed to improve productivity and simplify your work life.</p>
        <button class="cta-btn">Get Started</button>
      </div>
    `;
  
    document.body.appendChild(modal);
  
    // Close Modal Event
    modal.querySelector(".close-btn").addEventListener("click", () => {
      modal.remove();
    });
  
    // Close Modal on Outside Click
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }
  
  // Open modal when the page loads after a delay
  window.addEventListener("load", () => {
    setTimeout(openModal, 2000); // Opens modal 2 seconds after page load
  });
  