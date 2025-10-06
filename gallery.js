document.addEventListener('DOMContentLoaded', function() {
    initializeGallery();
});

function initializeGallery() {
    var galleryItems = document.querySelectorAll('.gallery-item');
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var closeBtn = document.getElementById('close-lightbox');
    var prevBtn = document.getElementById('prev-btn');
    var nextBtn = document.getElementById('next-btn');
    
    var currentImageIndex = 0;
    var images = [];
    
    galleryItems.forEach(function(item, index) {
        var img = item.querySelector('.gallery-img');
        if (img) {
            images.push({
                src: img.src,
                alt: img.alt
            });
            
            img.addEventListener('click', function() {
                openLightbox(index);
            });
        }
    });
    
    function openLightbox(index) {
        currentImageIndex = index;
        lightboxImg.src = images[index].src;
        lightboxImg.alt = images[index].alt;
        lightbox.style.display = 'flex';
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
    }
    
    function showPrevious() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentImageIndex].src;
        lightboxImg.alt = images[currentImageIndex].alt;
    }
    
    function showNext() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        lightboxImg.src = images[currentImageIndex].src;
        lightboxImg.alt = images[currentImageIndex].alt;
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', showPrevious);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', showNext);
    }

    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    
    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                showPrevious();
            } else if (e.key === 'ArrowRight') {
                showNext();
            }
        }
    });
}