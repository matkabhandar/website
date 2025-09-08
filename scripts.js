// ===== Image Popup Viewer =====
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
const galleryImages = Array.from(document.querySelectorAll(".image-grid img"));

// Open image
galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showPopupImage();
    document.body.style.overflow = "hidden"; // prevent background scroll
  });
});

function showPopupImage() {
  popup.style.display = "flex";
  popupImg.src = galleryImages[currentIndex].src;
}

// Close popup
closeBtn.addEventListener("click", closePopup);
popup.addEventListener("click", e => {
  if (e.target === popup) closePopup();
});

function closePopup() {
  popup.style.display = "none";
  document.body.style.overflow = "auto";
}

// Prev / Next
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showPopupImage();
});
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showPopupImage();
});

// Keyboard Navigation
document.addEventListener("keydown", e => {
  if (popup.style.display === "flex") {
    if (e.key === "Escape") closePopup();
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "ArrowRight") nextBtn.click();
  }
});
