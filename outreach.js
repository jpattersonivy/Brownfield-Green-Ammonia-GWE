// js/pages/outreach.js

// Simulated data for each site
const siteData = {
  norway: {
    name: "Norway — Herøya Industrial Park",
    info: "Norway’s Herøya plant is the world’s leading brownfield green ammonia retrofit.",
    progress: 75
  },
  sriLanka: {
    name: "Sri Lanka — Emerging Pilot Region",
    info: "Sri Lanka’s solar potential and rising energy costs make it ideal for a pilot project.",
    progress: 40
  },
  kenya: {
    name: "Kenya — East African Development Hub",
    info: "Kenya’s agricultural sector relies heavily on fertilizer imports. A green ammonia pilot could support local production.",
    progress: 55
  },
  puertoRico: {
    name: "Puerto Rico — Caribbean Pilot Site",
    info: "Puerto Rico’s grid instability highlights the need for resilient ammonia-powered microgrids.",
    progress: 30
  }
};

// Show info in extraInfo panel
function showInfo(site) {
  const data = siteData[site];
  const info = document.getElementById("extraInfo");
  info.textContent = `${data.name}: ${data.info} (Progress: ${data.progress}%)`;
  info.style.color = "#0077cc";
}

// Update progress bars
function updateProgressBars() {
  Object.keys(siteData).forEach(site => {
    const bar = document.querySelector(`#${site}Card .progress-bar-fill`);
    if (bar) {
      bar.style.width = siteData[site].progress + "%";
      bar.textContent = siteData[site].progress + "%";
    }
  });
}

// Simulate progress updates
function simulateUpdates() {
  Object.keys(siteData).forEach(site => {
    let change = Math.floor(Math.random() * 5) - 2; // -2 to +2
    siteData[site].progress = Math.max(0, Math.min(100, siteData[site].progress + change));
  });
  updateProgressBars();
}

// Refresh display every 5 seconds
setInterval(() => {
  simulateUpdates();
  const currentText = document.getElementById("extraInfo").textContent;
  if (currentText) {
    const activeSite = Object.keys(siteData).find(site => currentText.includes(siteData[site].name));
    if (activeSite) showInfo(activeSite);
  }
}, 5000);

// Info expansion for cards
document.querySelectorAll(".infoBtn").forEach(button => {
  button.addEventListener("click", function() {
    showInfo(this.getAttribute("data-site"));
  });
});

// Map click events
document.querySelectorAll("#worldMap circle").forEach(region => {
  region.addEventListener("click", () => showInfo(region.id));
});

// Tooltip hover effects
const tooltip = document.getElementById("tooltip");
document.querySelectorAll("#worldMap circle").forEach(region => {
  region.addEventListener("mousemove", (e) => {
    tooltip.textContent = siteData[region.id].name;
    tooltip.style.left = e.pageX + 10 + "px";
    tooltip.style.top = e.pageY + 10 + "px";
    tooltip.style.opacity = 1;
  });
  region.addEventListener("mouseleave", () => {
    tooltip.style.opacity = 0;
  });
});
