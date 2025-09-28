<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Coquetta Beauty</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css"
    />
    <style>
      body {
        font-family: "Helvetica Neue", Arial, sans-serif;
        background-color: #ffffff;
        color: #333;
      }
      nav strong {
        font-size: 1.3rem;
        letter-spacing: 1px;
      }
      main.container {
        padding: 3rem 1rem;
      }
      section img {
        border-radius: 8px;
        object-fit: cover;
      }
      footer {
        margin-top: 3rem;
        padding: 2rem 0;
        text-align: center;
        border-top: 1px solid #eee;
      }
    </style>
  </head>
  <body>
    <!-- Navigation -->
    <nav class="container-fluid">
      <ul>
        <li><strong>Coquetta Beauty</strong></li>
      </ul>
      <ul>
        <li><a href="#">Shop</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#" role="button">Contact</a></li>
      </ul>
    </nav>

    <!-- Hero / Main Area -->
    <main class="container">
      <div class="grid">
        <section>
          <hgroup>
            <h2>Welcome to Coquetta Beauty</h2>
            <h3>Clean. Conscious. Confident.</h3>
          </hgroup>
          <p>
            Skincare and beauty products that celebrate your natural radiance —
            inspired by the philosophy of mindful beauty.
          </p>
          <figure>
            <img
              src="https://source.unsplash.com/1200x600/?skincare,beauty"
              alt="Hero Image"
            />
            <figcaption>
              <a
                href="https://unsplash.com/s/photos/skincare"
                target="_blank"
                >Images from Unsplash</a
              >
            </figcaption>
          </figure>

          <h3>Our Promise</h3>
          <p>
            At Coquetta Beauty, we believe in clean formulations, ethically
            sourced ingredients, and products that truly care for your skin.
          </p>

          <h3>Our Collections</h3>
          <p>
            Explore our carefully curated line of skincare and self-care
            essentials — crafted to fit seamlessly into your daily rituals.
          </p>
        </section>
      </div>
    </main>

    <!-- Featured Products -->
    <section class="container">
      <div class="grid">
        <article>
          <img
            src="https://source.unsplash.com/400x400/?serum,skincare"
            alt="Product 1"
          />
          <h3>Radiance Serum</h3>
          <p>Hydrate and brighten your skin with our lightweight serum.</p>
        </article>
        <article>
          <img
            src="https://source.unsplash.com/400x400/?cream,skincare"
            alt="Product 2"
          />
          <h3>Nourishing Cream</h3>
          <p>Rich, soothing cream designed to restore and protect.</p>
        </article>
        <article>
          <img
            src="https://source.unsplash.com/400x400/?oil,skincare"
            alt="Product 3"
          />
          <h3>Botanical Oil</h3>
          <p>A blend of natural oils to lock in lasting moisture.</p>
        </article>
      </div>
    </section>

    <!-- Subscribe Section -->
    <section aria-label="Subscribe example">
      <div class="container">
        <article>
          <hgroup>
            <h2>Join Our Community</h2>
            <h3>Get updates, tips, and exclusive offers.</h3>
          </hgroup>
          <form class="grid">
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="First name"
              aria-label="First name"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              aria-label="Email address"
              required
            />
            <button type="submit" onclick="event.preventDefault()">
              Subscribe
            </button>
          </form>
        </article>
      </div>
    </section>

    <!-- Footer -->
    <footer class="container">
      <small>
        <a href="#">Privacy Policy</a> • <a href="#">Terms of Service</a>
      </small>
    </footer>
  </body>
</html>
