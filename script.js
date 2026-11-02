const toggle = document.querySelector('.menu-button');
const links = document.querySelector('.site-nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}


/* Ask visitors to confirm they are 18 or older. */
(() => {
  let ageConfirmed = false;
  try {
    ageConfirmed = window.localStorage.getItem("papa-age-confirmed") === "true";
  } catch (_) {
    // If storage is unavailable, ask again on each page visit.
  }

  if (ageConfirmed) return;

  const dialog = document.createElement("dialog");
  dialog.className = "age-gate";
  dialog.setAttribute("aria-labelledby", "age-gate-title");
  dialog.innerHTML = `
    <div class="age-gate__panel">
      <p class="age-gate__brand">PA PA Wine</p>
      <h2 id="age-gate-title">Are you 18 or older?</h2>
      <p class="age-gate__copy">Please confirm your age to enter the PA PA website.</p>
      <div class="age-gate__actions">
        <button class="age-gate__button" type="button" autofocus>I am 18 or older</button>
        <button class="age-gate__button age-gate__button--secondary" type="button">I am under 18</button>
      </div>
      <p class="age-gate__note">By continuing, you confirm that you are at least 18 years old.</p>
    </div>
  `;

  document.body.append(dialog);
  dialog.addEventListener("cancel", (event) => event.preventDefault());

  const [confirmButton, declineButton] = dialog.querySelectorAll("button");
  confirmButton.addEventListener("click", () => {
    try {
      window.localStorage.setItem("papa-age-confirmed", "true");
    } catch (_) {
      // The visitor can still continue for this page view.
    }
    dialog.close();
    dialog.remove();
  });

  declineButton.addEventListener("click", () => {
    dialog.querySelector(".age-gate__panel").innerHTML = `
      <p class="age-gate__brand">PA PA Wine</p>
      <h2 id="age-gate-title">You must be 18 or older to enter.</h2>
      <p class="age-gate__copy">This website is intended for adults aged 18 and over.</p>
    `;
  });

  dialog.showModal();
})();
