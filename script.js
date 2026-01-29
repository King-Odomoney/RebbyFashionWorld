// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Navbar scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Booking Form Submission
const bookingForm = document.getElementById('bookingForm');
const successMessage = document.getElementById('successMessage');

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(bookingForm);
        const data = Object.fromEntries(formData);
        
        // Create WhatsApp message
        const message = `
🎨 *New Booking Request - Rebby Fashion World*

👤 *Name:* ${data.name}
📞 *Phone:* ${data.phone}
📧 *Email:* ${data.email || 'Not provided'}
✂️ *Service:* ${data.service}
📅 *Preferred Date:* ${data.date}
🕐 *Preferred Time:* ${data.time}
${data.occasion ? `🎉 *Occasion:* ${data.occasion}` : ''}

💬 *Additional Details:*
${data.message || 'None provided'}

---
Sent via Rebby Fashion World website
        `.trim();
        
        // Open WhatsApp with pre-filled message
        const whatsappUrl = `https://wa.me/2349026940268?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        
        // Show success message
        if (successMessage) {
            successMessage.classList.add('show');
        }
        
        // Reset form
        bookingForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            if (successMessage) {
                successMessage.classList.remove('show');
            }
        }, 5000);
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const contactSuccessMessage = document.getElementById('successMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        const message = `
📧 *New Contact Message - Rebby Fashion World*

👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📞 *Phone:* ${data.phone || 'Not provided'}
${data.subject ? `📋 *Subject:* ${data.subject}` : ''}

💬 *Message:*
${data.message}

---
Sent via contact form
        `.trim();
        
        const whatsappUrl = `https://wa.me/2349026940268?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        
        if (contactSuccessMessage) {
            contactSuccessMessage.classList.add('show');
        }
        contactForm.reset();
        
        setTimeout(() => {
            if (contactSuccessMessage) {
                contactSuccessMessage.classList.remove('show');
            }
        }, 5000);
    });
}

// Set minimum date for booking to today
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
