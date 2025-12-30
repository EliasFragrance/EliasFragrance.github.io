// Highlight current nav link based on URL
(function() {
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("[data-nav]").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.setAttribute("aria-current", "page");
  });
})();

// Contact form mailto helper (no backend required)
function openMailto(e){
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector("[name='name']").value.trim();
  const email = form.querySelector("[name='email']").value.trim();
  const message = form.querySelector("[name='message']").value.trim();

  const subject = encodeURIComponent(`Website inquiry from ${name || "Someone"}`);
  const body = encodeURIComponent(
`Name: ${name}
Email: ${email}

Message:
${message}
`);

  // TODO: replace with your email
  const to = "alexander.elias.work@gmail.com";
  location.href = `mailto:${to}?subject=${subject}&body=${body}`;
}
