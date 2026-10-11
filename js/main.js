(function () {
  const nav = document.getElementById("site-nav");
  const toggle = document.getElementById("nav-toggle");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  function fillCarousel() {
    const track = document.getElementById("uni-carousel");
    if (!track || !window.CCC) return;
    CCC.universities.forEach(function (u) {
      const a = document.createElement("a");
      a.className = "uni-tile";
      a.href = "universities.html#uni-" + u.id;
      a.innerHTML =
        '<img src="' +
        u.logo +
        '" alt="" width="480" height="300" loading="lazy">' +
        "<span>" +
        u.name +
        "</span>";
      track.appendChild(a);
    });

    const viewport = track;
    document.querySelectorAll("[data-carousel]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const dir = btn.getAttribute("data-carousel") === "next" ? 1 : -1;
        viewport.scrollBy({ left: dir * 280, behavior: "smooth" });
      });
    });
  }

  function fact(label, value) {
    if (!value) return "";
    return "<li><strong>" + label + ":</strong> " + value + "</li>";
  }

  function fillUniversities() {
    const grid = document.getElementById("university-grid");
    const tableBody = document.getElementById("compare-body");
    if (!grid || !window.CCC) return;

    CCC.universities.forEach(function (u) {
      const article = document.createElement("article");
      article.className = "university-card anchor-target";
      article.id = "uni-" + u.id;

      const tags = (u.tags || [])
        .map(function (t) {
          return '<span class="badge">' + t + "</span>";
        })
        .join("");

      const confirmBadge = u.nameNeedsConfirmation
        ? '<span class="badge badge-warn">Name pending confirmation</span>'
        : "";

      const extraId = "extra-" + u.id;
      const posters = (u.posters || [])
        .map(function (p) {
          return (
            '<img src="' +
            p.src +
            '" alt="' +
            p.alt +
            '" width="420" height="560" loading="lazy">'
          );
        })
        .join("");

      const extraBits = [];
      if (u.type) extraBits.push(fact("Institution type", u.type));
      extraBits.push(fact("Language of instruction", u.language));
      extraBits.push(fact("Program duration", u.duration));
      extraBits.push(fact("Tuition", u.tuition));
      extraBits.push(fact("Accommodation", u.accommodation));
      extraBits.push(fact("Intakes", u.intakes));
      extraBits.push(fact("Scholarships", u.scholarship));
      extraBits.push(fact("Recognition", u.recognition));

      const limited = !u.degrees.length || u.nameNeedsConfirmation;
      const limitedNote = limited
        ? "<p class=\"note\">Contact us to confirm details for this institution.</p>"
        : "";

      article.innerHTML =
        '<img src="' +
        u.image +
        '" alt="Campus visual placeholder for ' +
        u.name +
        '" width="1400" height="900" loading="lazy">' +
        '<div class="uni-body">' +
        "<h2>" +
        u.name +
        "</h2>" +
        '<p class="uni-meta">' +
        u.location +
        "</p>" +
        '<div class="tags">' +
        confirmBadge +
        tags +
        "</div>" +
        "<p>" +
        u.overview +
        "</p>" +
        '<ul class="uni-facts">' +
        fact("Programs", u.degrees.length ? u.degrees.join(", ") : CCC.confirmPlaceholder) +
        fact("Location", u.location) +
        "</ul>" +
        limitedNote +
        '<div class="uni-actions">' +
        '<a class="btn btn-primary" href="contact.html?university=' +
        encodeURIComponent(u.id) +
        '">Request Info</a>' +
        '<button class="btn btn-ghost" type="button" data-expand="' +
        extraId +
        '" aria-expanded="false" aria-controls="' +
        extraId +
        '">More details</button>' +
        "</div>" +
        '<div class="uni-extra" id="' +
        extraId +
        '" hidden>' +
        '<ul class="uni-facts">' +
        extraBits.join("") +
        "</ul>" +
        (posters ? '<div class="poster-row">' + posters + "</div>" : "") +
        "</div>" +
        "</div>";

      grid.appendChild(article);

      if (tableBody) {
        const tr = document.createElement("tr");
        tr.innerHTML =
          "<td><a href=\"#uni-" +
          u.id +
          "\">" +
          u.name +
          "</a></td>" +
          "<td>" +
          u.location +
          "</td>" +
          "<td>" +
          (u.degrees.length ? u.degrees.join(", ") : CCC.confirmPlaceholder) +
          "</td>" +
          "<td>" +
          u.language +
          "</td>" +
          "<td>" +
          u.duration +
          "</td>" +
          "<td>" +
          u.tuition +
          "</td>" +
          "<td>" +
          u.accommodation +
          "</td>" +
          "<td>" +
          u.intakes +
          "</td>" +
          "<td>" +
          u.scholarship +
          "</td>" +
          "<td>" +
          u.recognition +
          "</td>";
        tableBody.appendChild(tr);
      }
    });

    grid.addEventListener("click", function (e) {
      const btn = e.target.closest("[data-expand]");
      if (!btn) return;
      const panel = document.getElementById(btn.getAttribute("data-expand"));
      if (!panel) return;
      const willOpen = panel.hasAttribute("hidden");
      panel.toggleAttribute("hidden", !willOpen);
      btn.setAttribute("aria-expanded", String(willOpen));
      btn.textContent = willOpen ? "Hide details" : "More details";
    });
  }

  function fillContactForm() {
    const form = document.getElementById("inquiry-form");
    if (!form || !window.CCC) return;

    const uniSelect = document.getElementById("preferred-university");
    const programSelect = document.getElementById("intended-program");
    const intakeSelect = document.getElementById("preferred-intake");

    CCC.programs.forEach(function (p) {
      const opt = document.createElement("option");
      opt.value = p.label;
      opt.textContent = p.label;
      programSelect.appendChild(opt);
    });
    const otherP = document.createElement("option");
    otherP.value = "Not sure yet";
    otherP.textContent = "Not sure yet";
    programSelect.appendChild(otherP);

    CCC.universities.forEach(function (u) {
      const opt = document.createElement("option");
      opt.value = u.name;
      opt.textContent = u.name;
      uniSelect.appendChild(opt);
    });
    const otherU = document.createElement("option");
    otherU.value = "Not sure / another university";
    otherU.textContent = "Not sure / another university";
    uniSelect.appendChild(otherU);

    CCC.intakes.forEach(function (i) {
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = i;
      intakeSelect.appendChild(opt);
    });

    const params = new URLSearchParams(window.location.search);
    const uniId = params.get("university");
    if (uniId) {
      const match = CCC.universities.find(function (u) {
        return u.id === uniId;
      });
      if (match) uniSelect.value = match.name;
    }

    const status = document.getElementById("form-status");
    const fallback = document.getElementById("form-fallbacks");
    const waLink = document.getElementById("whatsapp-send");
    const mailLink = document.getElementById("mailto-send");

    function composeMessage() {
      const data = new FormData(form);
      return [
        "Connect China Consultants inquiry",
        "Name: " + data.get("fullName"),
        "Email: " + data.get("email"),
        "Country: " + data.get("country"),
        "Program: " + data.get("program"),
        "University: " + data.get("university"),
        "Intake: " + data.get("intake"),
        "Message: " + data.get("message")
      ].join("\n");
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.className = "form-status";
      status.textContent = "";
      fallback.hidden = true;

      if (form.website && form.website.value) {
        status.textContent = "Submission blocked.";
        status.classList.add("fail");
        return;
      }

      if (!form.reportValidity()) {
        status.textContent = "Please correct the highlighted fields.";
        status.classList.add("fail");
        return;
      }

      const submitBtn = form.querySelector("[type=submit]");
      submitBtn.disabled = true;
      submitBtn.textContent = "Preparing…";

      const body = composeMessage();
      const wa =
        CCC.site.whatsappUrl + "?text=" + encodeURIComponent(body);
      const mail =
        "mailto:" +
        CCC.site.email +
        "?subject=" +
        encodeURIComponent("Student inquiry from " + form.fullName.value) +
        "&body=" +
        encodeURIComponent(body);

      waLink.href = wa;
      mailLink.href = mail;

      window.setTimeout(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit inquiry";
        fallback.hidden = false;
        status.classList.add("success");
        status.textContent =
          "Your inquiry is ready. Email delivery is not configured on this site yet. Open WhatsApp or your email app to send the message yourself — nothing has been delivered automatically.";
      }, 400);
    });
  }

  fillCarousel();
  fillUniversities();
  fillContactForm();
})();
