const searchInput = document.getElementById("searchInput");
const resultsContainer = document.getElementById("resultsContainer");
const resultCount = document.getElementById("resultCount");
const totalCount = document.getElementById("totalCount");
const filterButtons = document.querySelectorAll(".filter-btn");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const showAllBtn = document.getElementById("showAllBtn");
const resetBtn = document.getElementById("resetBtn");
const backToTopBtn = document.getElementById("backToTopBtn");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const lockScreen = document.getElementById("lockScreen");
const passwordInput = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");
const passwordError = document.getElementById("passwordError");
const lockBtn = document.getElementById("lockBtn");

let selectedCategory = "all";
let forceShowAll = false;

function normalizeText(text) {
    return text
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function afficherResultats() {
    const searchValue = normalizeText(searchInput.value.trim());

    let resultats = amendes.filter(amende => {
        const texteComplet = normalizeText(`
            ${amende.numero}
            ${amende.categorie}
            ${amende.titreCategorie}
            ${amende.description}
            ${amende.montant}
            ${amende.motsCles.join(" ")}
        `);

        const correspondRecherche = searchValue === "" || texteComplet.includes(searchValue);
        const correspondCategorie = selectedCategory === "all" || amende.categorie === selectedCategory;

        return correspondRecherche && correspondCategorie;
    });

    resultsContainer.innerHTML = "";

    if (searchValue === "" && selectedCategory === "all" && forceShowAll === false) {
        resultCount.textContent = "Tape un mot-clé ou sélectionne une catégorie.";
        return;
    }

    if (resultats.length === 0) {
        resultCount.textContent = "0 résultat trouvé.";
        resultsContainer.innerHTML = `
            <div class="no-result">
                Aucun résultat ne correspond à ta recherche.
            </div>
        `;
        return;
    }

    resultCount.textContent = `${resultats.length} résultat(s) trouvé(s).`;

    resultats.forEach(amende => {
        const card = document.createElement("article");
        card.className = "ao-card";

        card.innerHTML = `
            <div class="ao-card-header">
                <span class="ao-number">AO ${amende.numero}</span>
                <span class="ao-amount">${amende.montant == null ? 'Montant non indiqué' : amende.montant + ' CHF'}</span>
            </div>

            <p class="ao-description">${amende.description}</p>

            <div class="ao-meta">
                <strong>Catégorie :</strong> ${amende.titreCategorie}
            </div>

            <div class="card-actions">
                <button class="copy-btn" onclick="copierAmende('${amende.numero}')">
                    Copier l’amende
                </button>
            </div>
        `;

        resultsContainer.appendChild(card);
    });
}

function copierAmende(numero) {
    const amende = amendes.find(item => item.numero === numero);

    if (!amende) {
        return;
    }

    const montantTexte = amende.montant == null ? "Montant non indiqué" : `${amende.montant} CHF`;
    const texte = `AO ${amende.numero} - ${amende.description} - ${montantTexte}`;

    navigator.clipboard.writeText(texte)
        .then(() => {
            alert("Amende copiée dans le presse-papiers.");
        })
        .catch(() => {
            alert("Impossible de copier automatiquement.");
        });
}

function resetFiltres() {
    selectedCategory = "all";
    forceShowAll = false;
    searchInput.value = "";

    filterButtons.forEach(btn => btn.classList.remove("active"));

    const allButton = document.querySelector('[data-category="all"]');
    allButton.classList.add("active");

    afficherResultats();
}

searchInput.addEventListener("input", () => {
    forceShowAll = false;
    afficherResultats();
});

clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchInput.focus();
    forceShowAll = false;
    afficherResultats();
});

showAllBtn.addEventListener("click", () => {
    searchInput.value = "";
    selectedCategory = "all";
    forceShowAll = true;

    filterButtons.forEach(btn => btn.classList.remove("active"));

    const allButton = document.querySelector('[data-category="all"]');
    allButton.classList.add("active");

    afficherResultats();
});

resetBtn.addEventListener("click", resetFiltres);

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        selectedCategory = button.dataset.category;
        forceShowAll = false;

        afficherResultats();
    });
});
if (totalCount) {
    totalCount.textContent = `Base actuelle : ${amendes.length} amendes enregistrées`;
}
window.addEventListener("scroll", () => {
    if (!backToTopBtn) {
        return;
    }

    if (window.scrollY > 400) {
        backToTopBtn.classList.add("visible");
    } else {
        backToTopBtn.classList.remove("visible");
    }
});

if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
function appliquerThemeSauvegarde() {
    const themeSauvegarde = localStorage.getItem("themeAO");

    if (themeSauvegarde === "dark") {
        document.body.classList.add("dark-mode");

        if (themeToggleBtn) {
            themeToggleBtn.textContent = "☀️ Mode jour";
        }
    } else {
        document.body.classList.remove("dark-mode");

        if (themeToggleBtn) {
            themeToggleBtn.textContent = "🌙 Mode nuit";
        }
    }
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("themeAO", "dark");
            themeToggleBtn.textContent = "☀️ Mode jour";
        } else {
            localStorage.setItem("themeAO", "light");
            themeToggleBtn.textContent = "🌙 Mode nuit";
        }
    });
}

appliquerThemeSauvegarde();
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js")
            .then(() => {
                console.log("Service worker enregistré.");
            })
            .catch(error => {
                console.log("Erreur service worker :", error);
            });
    });
}
/* VERROUILLAGE PAR MOT DE PASSE */

const APP_PASSWORD = "ao2023";

function verifierAcces() {
    const accesAutorise = sessionStorage.getItem("aoAccessGranted");

    if (accesAutorise === "true") {
        lockScreen.classList.add("hidden");
    } else {
        lockScreen.classList.remove("hidden");

        setTimeout(() => {
            passwordInput.focus();
        }, 200);
    }
}

function deverrouillerApplication() {
    const motDePasseEntre = passwordInput.value.trim();

    if (motDePasseEntre === APP_PASSWORD) {
        sessionStorage.setItem("aoAccessGranted", "true");
        passwordInput.value = "";
        passwordError.textContent = "";
        lockScreen.classList.add("hidden");
    } else {
        passwordError.textContent = "Mot de passe incorrect.";
        passwordInput.value = "";
        passwordInput.focus();
    }
}

function verrouillerApplication() {
    sessionStorage.removeItem("aoAccessGranted");
    lockScreen.classList.remove("hidden");
    passwordInput.value = "";
    passwordError.textContent = "";

    setTimeout(() => {
        passwordInput.focus();
    }, 200);
}

if (unlockBtn) {
    unlockBtn.addEventListener("click", deverrouillerApplication);
}

if (passwordInput) {
    passwordInput.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            deverrouillerApplication();
        }
    });
}

if (lockBtn) {
    lockBtn.addEventListener("click", verrouillerApplication);
}

verifierAcces();