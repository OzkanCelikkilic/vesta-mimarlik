# Vesta Mimarlık - Corporate Website

## 1. Overview

This project is the official corporate website for **Vesta Mimarlık**, a construction subcontracting company based in Kocaeli, Türkiye. The site serves as a digital portfolio and primary contact point for the company, showcasing their services and completed projects.

It is built as a high-performance, fully responsive, single-page static website. The entire site is crafted from scratch using pure HTML, CSS, and Vanilla JavaScript, with no external frameworks, ensuring maximum speed and simplicity. It is securely hosted on GitHub Pages with a custom domain (`vestamimarlik.com.tr`) and enforced HTTPS.

## 2. Live Demo

The website is live and can be viewed at:
**[https://vestamimarlik.com.tr](https://vestamimarlik.com.tr)**

*(Buraya sitenizin bir veya iki ekran görüntüsünü ekleyebilirsiniz)*
## 3. Features

* **Fully Responsive:** Adapts seamlessly to all screen sizes, from mobile to desktop.
* **Single-Page Application (SPA) Feel:** Smooth-scrolling navigation provides a fluid user experience.
* **Interactive Project Gallery:** Project items open in a modal (pop-up) window, featuring a custom JavaScript-powered image slider.
* **SEO Optimized:** Includes semantic HTML, dynamic meta tags (Title, Description), and a `favicon` to ensure visibility on search engines.
* **Google Search Console Integration:** A `sitemap.xml` has been submitted for efficient indexing.
* **Secure:** Deployed with an enforced HTTPS (SSL) certificate.

## 4. Technologies Used

* **HTML5:** Used for the core structure and semantic markup.
* **CSS3:** Used for all custom styling, animations, and responsive layouts (Flexbox & CSS Grid).
* **Vanilla JavaScript (ES6+):** Powers all interactive components without any libraries.
* **GitHub Pages:** Used for static site hosting and deployment.

## 5. Key Components Explained

This project relies on custom-built JavaScript components for its core functionality:

1.  **Smooth Scrolling:** The navigation links (`<a href="#...">`) use an event listener to capture clicks, calculate the target section's position, and perform a `window.scrollTo` with `'smooth'` behavior.
2.  **Project Modal & Gallery:**
    * Clicking a "Projeyi İncele" button identifies the target modal via a `data-modal` attribute.
    * The corresponding modal is displayed by changing its CSS `display` property to `block`.
    * Inside the modal, a custom gallery script controls an array of `gallery-slide` elements, showing/hiding them by toggling an `.active` class in response to "Next" and "Previous" button clicks.
3.  **Contact Form (`mailto` Handler):**
    * The form's `onsubmit` event is captured by the `handleSend` function.
    * JavaScript performs client-side validation (checking for empty fields and valid email format).
    * If valid, it dynamically constructs a `mailto:` link, encoding the form's `name`, `subject`, and `body` into URL parameters, and then opens the user's default email client.

## 6. Setup / Local Development

To run this project locally, no complex installation is required.

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/OzkanCelikkilic/vestamimarlik.com.tr.git](https://github.com/OzkanCelikkilic/vestamimarlik.com.tr.git)
    ```
    *(Repo adınız farklıysa bunu güncelleyin)*

2.  **Navigate to the Directory:**
    ```bash
    cd vestamimarlik.com.tr
    ```

3.  **Open the File:**
    * Simply open the `index.html` file in your web browser to view the site.
