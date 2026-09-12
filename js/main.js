(function () {
  var header = document.getElementById("site-header");
  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var revealTargets = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealTargets.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  var form = document.getElementById("cta-form");
  var emailInput = document.getElementById("cta-email");
  var errorEl = document.getElementById("cta-error");
  var successEl = document.getElementById("cta-success");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var value = emailInput.value.trim();
      var isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

      if (!isValid) {
        errorEl.textContent = "Entrez une adresse email valide.";
        emailInput.classList.add("has-error");
        emailInput.focus();
        return;
      }

      errorEl.textContent = "";
      emailInput.classList.remove("has-error");
      form.hidden = true;
      successEl.hidden = false;
    });

    emailInput.addEventListener("input", function () {
      if (emailInput.classList.contains("has-error")) {
        emailInput.classList.remove("has-error");
        errorEl.textContent = "";
      }
    });
  }

  var toggleButtons = document.querySelectorAll(".pricing-toggle-btn");
  var amountValue = document.querySelector(".pricing-amount-value");
  var annualNote = document.querySelector(".pricing-annual");

  if (toggleButtons.length && amountValue && annualNote) {
    toggleButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var period = btn.dataset.period;
        toggleButtons.forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
        });
        amountValue.textContent = amountValue.dataset[period];
        annualNote.textContent = annualNote.dataset[period + "Text"];
      });
    });
  }
})();
