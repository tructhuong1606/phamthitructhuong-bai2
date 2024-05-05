var images = document.querySelectorAll('.image img');
var gallery = document.querySelector('.gallery');
var galleryImg = document.querySelector('.gallery-inner img');
var close = document.querySelector('.close');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

var currentIndex = 0;
var slideInterval; // Biến để lưu trữ đối tượng setInterval

function showGallery() {
    gallery.classList.add('show');
    galleryImg.src = images[currentIndex].src;
}

function autoSlide() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    galleryImg.src = images[currentIndex].src;
}

// Bắt sự kiện khi click vào từng ảnh
images.forEach((item, index) => {
    item.addEventListener('click', function() {
        currentIndex = index;
        showGallery();
    });
});

// Bắt sự kiện click để đóng gallery
close.addEventListener('click', function() {
    gallery.classList.remove('show');
});

// Bắt sự kiện keydown (ESC) để đóng gallery
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 27) {
        gallery.classList.remove('show');
    }
});

// Bắt sự kiện click nút previous
prev.addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1;
    }
    galleryImg.src = images[currentIndex].src;
});

// Bắt sự kiện click nút next
next.addEventListener('click', function() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    galleryImg.src = images[currentIndex].src;
});

// Tự động chuyển ảnh sau mỗi 3 giây (3000ms)
slideInterval = setInterval(autoSlide, 3000);

// Dừng tự động chuyển ảnh khi gallery được mở
gallery.addEventListener('mouseover', function() {
    clearInterval(slideInterval);
});

// Tiếp tục tự động chuyển ảnh khi gallery được đóng
gallery.addEventListener('mouseout', function() {
    slideInterval = setInterval(autoSlide, 3000);
});
