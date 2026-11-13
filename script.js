const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("enquiry-form").addEventListener("submit", event => {
  event.preventDefault();
  const email = (window.SOE_CONFIG || {}).contactEmail || "";
  const note = document.getElementById("form-note");
  if (!email || email.includes("ADD_OFFICIAL")) {
    note.textContent = "Please add SOE's approved public email address in config.js before using this enquiry form.";
    note.style.color = "#ffb28b";
    return;
  }
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent("SOE website enquiry — " + data.get("type"));
  const body = encodeURIComponent(
    "Name: " + data.get("name") + "\nEmail: " + data.get("email") +
    "\nEnquiry type: " + data.get("type") + "\nArea of interest: " + data.get("interest") +
    "\n\nMessage:\n" + data.get("message")
  );
  window.location.href = "mailto:" + email + "?subject=" + subject + "&body=" + body;
});
