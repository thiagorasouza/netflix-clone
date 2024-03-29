/* 
  ==============
  === NAVBAR === 
  ==============
*/
const navbar = document.querySelector(".navbar");
document.addEventListener("scroll", () => {
  const position = window.scrollY;
  if (position !== 0) {
    navbar.classList.add("opaque");
  } else {
    navbar.classList.remove("opaque");
  }
});

/* 
  ============
  === HERO === 
  ============
*/
const img = document.querySelector(".hero-title img");
const ranking = document.querySelector(".hero-ranking");
const synopsis = document.querySelector(".hero-synopsis");
setTimeout(() => {
  img.classList.add("transform");
  synopsis.classList.add("transform");
  ranking.classList.add("transform");
}, 2000);

const video = document.getElementById("video");
video.addEventListener("ended", (e) => {
  img.classList.remove("transform");
  ranking.classList.remove("transform");
  synopsis.classList.remove("transform");
});

const reload = document.querySelector(".btn-hero-reload");
reload.addEventListener("click", () => {
  if (video.ended) {
    video.play();
  }
});

/* 
  ======================
  === THUMBS PREVIEW === 
  ======================
*/
const thumbs = document.querySelectorAll(".section-slider-thumb");
thumbs.forEach((thumb) => {
  let preview = {};
  let timeout = {};
  preview = document.createElement("div");
  preview.style.top = "100vh";
  preview.className = "preview";
  preview.innerHTML = `
          <div class="preview-playback">
            <video
              src="./video/grass.mp4"
              poster="./img/grass.jpg"
              muted
            ></video>
          </div>
          <div class="preview-content">
            <div class="preview-controls">
              <button class="btn-icon-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="Hawkins-Icon Hawkins-Icon-Standard"
                >
                  <path
                    d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <button class="btn-icon-gray">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="Hawkins-Icon Hawkins-Icon-Standard"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <button class="btn-icon-gray">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="Hawkins-Icon Hawkins-Icon-Standard"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <button class="btn-icon-gray btn-expand">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="Hawkins-Icon Hawkins-Icon-Standard"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="preview-title">
              <p><strong>T2:E2</strong> "Testando limites"</p>
            </div>
            <div class="preview-progress"></div>
          </div>
        `;

  thumb.addEventListener("mouseenter", () => {
    //
    timeout = setTimeout(() => createPreview(), 300);
  });

  thumb.addEventListener("mouseleave", () => {
    //
    clearTimeout(timeout);
  });

  preview.addEventListener("mouseleave", () => {
    preview.style.transform = "scale(1)";
    preview.style.opacity = "0";
    setTimeout(() => preview.remove(), 300);
  });

  function createPreview() {
    const thumbRect = thumb.getBoundingClientRect();

    // console.dir(thumb.previousElementSibling);
    const isFirst =
      !thumb.previousElementSibling ||
      thumb.previousElementSibling.getBoundingClientRect().x < 0;

    const isLast =
      !thumb.nextElementSibling ||
      thumb.nextElementSibling.getBoundingClientRect().x + thumbRect.width >
        window.innerWidth;

    if (isFirst) {
      preview.style.transformOrigin = "center left";
    } else if (isLast) {
      preview.style.transformOrigin = "center right";
    } else {
      preview.style.transformOrigin = "center center";
    }

    if (isLast) {
      preview.style.right = `${
        document.documentElement.clientWidth - thumbRect.right
      }px`;
    } else {
      preview.style.left = `${thumbRect.left}px`;
    }

    preview.style.width = `${thumbRect.width}px`;
    preview.style.top = `${window.scrollY + thumbRect.top}px`;

    const lastPreview = document.body.querySelector(".preview");

    if (lastPreview) {
      document.body.removeChild(lastPreview);
    }

    document.body.appendChild(preview);

    setTimeout(() => {
      preview.style.transform = "scale(1.4)";
      preview.style.opacity = "1";
    }, 100);
    setTimeout(() => preview.querySelector("video").play(), 300);
  }
});

// const backdrop = document.querySelector(".backdrop");
// const modal = document.querySelector(".modal");
// const expandButtons = document.querySelectorAll(".expand");
// expandButtons.forEach((button) => {});

// const profile = document.querySelector(".profile");

// const closeModal = document.querySelector(".close-button");
// closeModal.addEventListener("click", () => {
//   modal.style.display = "none";
//   backdrop.style.display = "none";
// });
