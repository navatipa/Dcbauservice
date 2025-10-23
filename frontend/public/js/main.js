// Initialize AOS
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
}

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Language Switcher
let currentLang = 'de';

function switchLanguage(lang) {
    currentLang = lang;
    
    // Update button states
    document.querySelectorAll('.lang-switcher button').forEach(btn => {
        btn.classList.remove('active');
    });
    const langBtn = document.getElementById(`lang-${lang}`);
    if (langBtn) langBtn.classList.add('active');
    
    // Update all translatable elements
    document.querySelectorAll('[data-de]').forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Smooth Scroll
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Like Button Functionality
function initializeLikes() {
    const likeButtons = document.querySelectorAll('.like-button');
    
    likeButtons.forEach(button => {
        const postId = button.dataset.postId;
        const countElement = button.querySelector('.like-count');
        
        // Load like count from localStorage
        const likeData = JSON.parse(localStorage.getItem(`likes_${postId}`) || '{}');
        const count = likeData.count || 0;
        const isLiked = likeData.isLiked || false;
        
        if (countElement) countElement.textContent = count;
        if (isLiked) button.classList.add('liked');
        
        button.addEventListener('click', function() {
            const currentCount = parseInt(countElement.textContent) || 0;
            const newIsLiked = !button.classList.contains('liked');
            const newCount = newIsLiked ? currentCount + 1 : Math.max(0, currentCount - 1);
            
            button.classList.toggle('liked');
            if (countElement) countElement.textContent = newCount;
            
            // Save to localStorage
            localStorage.setItem(`likes_${postId}`, JSON.stringify({
                count: newCount,
                isLiked: newIsLiked
            }));
            
            // GA4 tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'blog_like', {
                    'post_id': postId,
                    'action': newIsLiked ? 'like' : 'unlike'
                });
            }
        });
    });
}

// Comment Form Submission
function initializeComments() {
    const commentForms = document.querySelectorAll('.comment-form');
    
    commentForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const postId = this.dataset.postId;
            const name = this.querySelector('[name=\"name\"]').value;
            const email = this.querySelector('[name=\"email\"]').value;
            const comment = this.querySelector('[name=\"comment\"]').value;
            
            // Save comment to localStorage
            const comments = JSON.parse(localStorage.getItem(`comments_${postId}`) || '[]');
            comments.push({
                name,
                email,
                comment,
                date: new Date().toISOString()
            });
            localStorage.setItem(`comments_${postId}`, JSON.stringify(comments));
            
            // Display comment
            displayComment({ name, comment, date: new Date() });
            
            // GA4 tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'blog_comment', {
                    'post_id': postId
                });
            }
            
            // Reset form
            this.reset();
            alert('Vielen Dank für Ihren Kommentar!');
        });
    });
}

function displayComment(comment) {
    const commentsContainer = document.querySelector('.comments-list');
    if (!commentsContainer) return;
    
    const commentEl = document.createElement('div');
    commentEl.className = 'comment-item';
    commentEl.innerHTML = `
        <div class=\"comment-header\">
            <strong>${comment.name}</strong>
            <span class=\"comment-date\">${new Date(comment.date).toLocaleDateString('de-DE')}</span>
        </div>
        <p>${comment.comment}</p>
    `;
    commentsContainer.appendChild(commentEl);
}

// Load Comments on Page Load
function loadComments() {
    const commentsContainer = document.querySelector('.comments-list');
    if (!commentsContainer) return;
    
    const postId = commentsContainer.dataset.postId;
    const comments = JSON.parse(localStorage.getItem(`comments_${postId}`) || '[]');
    
    comments.forEach(comment => displayComment(comment));
}

// Contact Form Validation & Tracking
const contactForms = document.querySelectorAll('.contact-form');
contactForms.forEach(form => {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!data.name || !data.email || !data.message) {
            alert('Bitte füllen Sie alle Pflichtfelder aus.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
            return;
        }
        
        // GA4 tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submission', {
                'form_type': 'contact',
                'interested_in_job': data.job_interest === 'on'
            });
        }
        
        try {
            // Send to FormSubmit.co
            const response = await fetch('https://formsubmit.co/ajax/dc@bauservice.one', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                alert('Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.');
                this.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut oder rufen Sie uns direkt an.');
        }
    });
});

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', function() {
    initializeLikes();
    initializeComments();
    loadComments();
});

// Page View Tracking
if (typeof gtag !== 'undefined') {
    gtag('event', 'page_view', {
        'page_title': document.title,
        'page_location': window.location.href,
        'page_path': window.location.pathname
    });
}
