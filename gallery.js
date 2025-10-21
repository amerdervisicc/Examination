document.addEventListener('DOMContentLoaded', () => {
    initializeGallery();
});

function initializeGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('close-lightbox');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    let currentImageIndex = 0;
    const images = [];
    
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('.gallery-img');
        if (img) {
            images.push({
                src: img.src,
                alt: img.alt,
                caption: item.querySelector('.gallery-overlay h3')?.textContent || ''
            });
            
            img.addEventListener('click', () => {
                openLightbox(index);
            });
        }
    });
    
    const openLightbox = (index) => {
        currentImageIndex = index;
        lightboxImg.src = images[index].src;
        lightboxImg.alt = images[index].alt;
        
        // Update caption
        const caption = lightbox.querySelector('.lightbox-caption h3');
        if (caption) {
            caption.textContent = images[index].caption;
        }
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    };
    
    const showPrevious = () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentImageIndex].src;
        lightboxImg.alt = images[currentImageIndex].alt;
        
        const caption = lightbox.querySelector('.lightbox-caption h3');
        if (caption) {
            caption.textContent = images[currentImageIndex].caption;
        }
    };
    
    const showNext = () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        lightboxImg.src = images[currentImageIndex].src;
        lightboxImg.alt = images[currentImageIndex].alt;
        
        const caption = lightbox.querySelector('.lightbox-caption h3');
        if (caption) {
            caption.textContent = images[currentImageIndex].caption;
        }
    };
    
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
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
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