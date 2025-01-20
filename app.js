const video = document.getElementById("video");
const captureBtn = document.getElementById("capture-btn");
const canvas = document.getElementById("canvas");
const photo = document.getElementById("photo");
const downloadLink = document.getElementById("download-link");
const downloadBtn = document.getElementById("download-btn");
const constraints = {
  video: true,
};

// گرفتن دسترسی کاربر به دوربین
navigator.mediaDevices
  .getUserMedia(constraints)
  .then((stream) => {
    // نمایش ویدیو در وب‌کم
    video.srcObject = stream;
  })
  .catch((err) => {
    console.error("مشکل در دسترسی به دوربین:", err);
  });

// گرفتن عکس از دوربین
captureBtn.addEventListener("click", () => {
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  photo.src = canvas.toDataURL("image/png");
  downloadLink.href = canvas.toDataURL("image/png");
  downloadLink.style.display = "block";
});

// دانلود عکس
downloadBtn.addEventListener("click", () => {
  downloadLink.click();
});
