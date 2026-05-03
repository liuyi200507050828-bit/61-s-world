// 61照片墙轮播
const galleryPhotos = [
  "images/gallery/image1.jpg",
  "images/gallery/image2.jpg",
  "images/gallery/image3.jpg",
  "images/gallery/image4.jpg",
  "images/gallery/image5.jpg",
  "images/gallery/image6.jpg",
];

let currentGalleryIndex = 0;

const galleryImage = document.querySelector("#galleryImage");
const galleryCaption = document.querySelector("#galleryCaption");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

if (galleryImage && galleryCaption && prevButton && nextButton) {
  prevButton.addEventListener("click", () => showGalleryPhoto(currentGalleryIndex - 1));
  nextButton.addEventListener("click", () => showGalleryPhoto(currentGalleryIndex + 1));
}

function showGalleryPhoto(nextIndex) {
  currentGalleryIndex = (nextIndex + galleryPhotos.length) % galleryPhotos.length;
  galleryImage.classList.add("is-switching");

  window.setTimeout(() => {
    galleryImage.src = galleryPhotos[currentGalleryIndex];
    galleryImage.alt = `61的照片墙照片 ${currentGalleryIndex + 1}`;
    galleryCaption.textContent = `${currentGalleryIndex + 1} / ${galleryPhotos.length}`;
    galleryImage.classList.remove("is-switching");
  }, 180);
}

// 小猫宝蓝 modal + 照片轮播
const catPhotos = [
  "images/cat/cat1.jpg",
  "images/cat/cat2.jpg",
  "images/cat/cat3.jpg",
  "images/cat/cat4.jpg",
];

let currentCatIndex = 0;

const catCard = document.querySelector(".cat-card");
const catModal = document.querySelector("#catModal");
const catImage = document.querySelector("#catImage");
const catCaption = document.querySelector("#catCaption");
const catPrevButton = document.querySelector(".cat-prev-button");
const catNextButton = document.querySelector(".cat-next-button");
const closeCatButtons = document.querySelectorAll("[data-close-cat]");

if (catCard && catModal && catImage && catCaption && catPrevButton && catNextButton) {
  catCard.addEventListener("click", openCatModal);
  catPrevButton.addEventListener("click", () => showCatPhoto(currentCatIndex - 1));
  catNextButton.addEventListener("click", () => showCatPhoto(currentCatIndex + 1));
  closeCatButtons.forEach((button) => button.addEventListener("click", closeCatModal));
}

function openCatModal() {
  currentCatIndex = 0;
  updateCatPhoto();
  catModal.classList.add("is-open");
  catModal.setAttribute("aria-hidden", "false");
}

function showCatPhoto(nextIndex) {
  currentCatIndex = (nextIndex + catPhotos.length) % catPhotos.length;
  catImage.classList.add("is-switching");

  window.setTimeout(() => {
    updateCatPhoto();
    catImage.classList.remove("is-switching");
  }, 180);
}

function updateCatPhoto() {
  catImage.src = catPhotos[currentCatIndex];
  catImage.alt = `小猫宝蓝照片 ${currentCatIndex + 1}`;
  catCaption.textContent = `${currentCatIndex + 1} / ${catPhotos.length}`;
}

function closeCatModal() {
  if (!catModal) return;
  catModal.classList.remove("is-open");
  catModal.setAttribute("aria-hidden", "true");
}

// 家庭成员 modal
const familyModal = document.querySelector("#familyModal");
const modalPhoto = document.querySelector("#modalPhoto");
const modalName = document.querySelector("#modalName");
const modalRole = document.querySelector("#modalRole");
const familyHotspots = document.querySelectorAll(".family-hotspot");
const closeModalButtons = document.querySelectorAll("[data-close-modal]");

if (familyModal && modalPhoto && modalName && modalRole) {
  familyHotspots.forEach((hotspot) => {
    hotspot.addEventListener("click", () => {
      modalPhoto.src = hotspot.dataset.photo;
      modalPhoto.alt = `${hotspot.dataset.name}的照片`;
      modalName.textContent = hotspot.dataset.name;
      modalRole.textContent = hotspot.dataset.role;

      familyModal.classList.add("is-open");
      familyModal.setAttribute("aria-hidden", "false");
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", closeFamilyModal);
  });
}

function closeFamilyModal() {
  if (!familyModal) return;
  familyModal.classList.remove("is-open");
  familyModal.setAttribute("aria-hidden", "true");
}

// 通用键盘关闭
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCatModal();
    closeFamilyModal();
  }
});
