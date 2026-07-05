// js/pages/about.js

document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  document.getElementById("footer-year").textContent = new Date().getFullYear();

  // Simulated statistics
  const stats = {
    renewableProjects: 12,
    communityMembers: 250,
    researchPartners: 8,
    environmentalSensors: 45
  };

  document.getElementById("renewable-projects").textContent = stats.renewableProjects;
  document.getElementById("community-members").textContent = stats.communityMembers;
  document.getElementById("research-partners").textContent = stats.researchPartners;
  document.getElementById("environmental-sensors").textContent = stats.environmentalSensors;

  // Timeline simulation
  const timelineContainer = document.getElementById("timeline-container");
  const timelineEvents = [
    { year: "2026 through 2030", text: "Initial research and feasibility studies" },
    { year: "2031 through 2034", text: "Pilot osmotic energy systems deployed" },
    { year: "2035 through 2045", text: "Community education programs launched" },
    { year: "2045 through 2050", text: "Expanded environmental monitoring network" },
    { year: "2050 and beyond", text: "Scaling renewable projects globally" }
  ];

  timelineEvents.forEach(event => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.innerHTML = `<span class="timeline-year">${event.year}</span> — ${event.text}`;
    timelineContainer.appendChild(item);
  });

  // Partner organizations simulation
  const partnersGrid = document.getElementById("partners-grid");
  const partners = ["University of Oslo", "Kenya Renewable Alliance", "Sri Lanka Solar Initiative", "Caribbean Energy Council"];
  partners.forEach(partner => {
    const card = document.createElement("div");
    card.className = "partner-card";
    card.textContent = partner;
    partnersGrid.appendChild(card);
  });
});
