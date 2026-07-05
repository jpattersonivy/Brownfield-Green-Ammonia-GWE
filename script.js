// Brownfield Green Ammonia Energy System
// Global Site Script
"use strict";

/* ============================================================
   GLOBAL CONSTANTS & WEBSITE INFO
============================================================ */
const WEBSITE_NAME = "Brownfield Green Ammonia Energy System";
const ORGANIZATION_NAME = "Brownfield Green Energy Solutions";
const UPDATE_INTERVAL = 12 * 60 * 60 * 1000; // 12 hours

let currentPage = window.location.pathname.split("/").pop() || "index.html";
let darkModeEnabled = false;

/* ============================================================
   DOM ELEMENTS
============================================================ */
let footerYear, menuButton;

/* ============================================================
   INITIALIZATION
============================================================ */
document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  footerYear = document.getElementById("footer-year");
  menuButton = document.getElementById("menu-button");

  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  setupEventListeners();
  initializePage();

  console.log(`${WEBSITE_NAME} initialized successfully.`);
}

/* ============================================================
   EVENT LISTENERS
============================================================ */
function setupEventListeners() {
  if (menuButton) {
    menuButton.addEventListener("click", () => {
      document.body.classList.toggle("menu-open");
    });
  }

  // Dark mode toggle
  const darkToggle = document.getElementById("dark-toggle");
  if (darkToggle) {
    darkToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      darkModeEnabled = !darkModeEnabled;
    });
  }
}

/* ============================================================
   PAGE ROUTER
============================================================ */
function initializePage() {
  switch (currentPage) {
    case "index.html":
      initializeHomePage();
      break;
    case "about.html":
      initializeAboutPage();
      break;
    case "dashboard.html":
      initializeDashboardPage();
      break;
    case "outreach.html":
      initializeOutreachPage();
      break;
    case "contact.html":
      initializeContactPage();
      break;
    default:
      console.warn(`No initialization defined for ${currentPage}.`);
      break;
  }
}

/* ============================================================
   HOME PAGE
============================================================ */
function initializeHomePage() {
  const Title = document.getElementById("home-title");
  const Description = document.getElementById("home-description");
  const dashboardButton = document.getElementById("dashboard-button");

  if (Title) {
    Title.textContent = "Welcome to the Brownfield Green Ammonia Energy Monitoring System";
  }
  if (Description) {
    Description.textContent =
      "Discover the impact of this green ammonia energy form on our environment and health. Explore real-time data, research, and contribute to a sustainable future.";
  }
  if (dashboardButton) {
    dashboardButton.addEventListener("click", () => {
      window.location.href = "dashboard.html";
    });
  }
}

/* ============================================================
   ABOUT PAGE
============================================================ */
function initializeAboutPage() {
  const title = document.getElementById("about-title");
  const description = document.getElementById("about-description");

  if (title) title.textContent = "About Our Initiative";
  if (description)
    description.textContent =
      "Our mission is to provide a sustainable future for communities leading up to 2050 and beyond through developing an understanding of energy via Green Ammonia.";

  const goalsList = document.getElementById("goals-list");
  const goals = [
    "Promote energy literacy and awareness in the community.",
    "Provide clear and transparent diagnostics of the energy system.",
    "Educate the community on the real-world effects of the energy system.",
    "Encourage community engagement and participation in energy-related initiatives."
  ];

  if (goalsList) {
    goals.forEach(goal => {
      const li = document.createElement("li");
      li.textContent = goal;
      goalsList.appendChild(li);
    });
  }
}

/* ============================================================
   DASHBOARD PAGE
============================================================ */
async function initializeDashboardPage() {
  await loadMetrics();
  setInterval(loadMetrics, UPDATE_INTERVAL);
}

async function loadMetrics() {
  try {
    const response = await fetch("data/metrics.json");
    const metricsData = await response.json();
    displayMetrics(metricsData);
  } catch (error) {
    console.error("Error loading metrics:", error);
  }
}

function displayMetrics(metricsData) {
  const powerOutput = document.getElementById("powerOutput");
  const efficiency = document.getElementById("efficiency");
  const lastUpdated = document.getElementById("lastUpdated");

  if (powerOutput) powerOutput.textContent = metricsData.powerOutput ?? "N/A";
  if (efficiency) efficiency.textContent = metricsData.efficiency ?? "N/A";
  if (lastUpdated) lastUpdated.textContent = metricsData.lastUpdated ?? "N/A";
}

/* ============================================================
   OUTREACH PAGE
============================================================ */
function initializeOutreachPage() {
  // Outreach simulation handled in outreach.js
  console.log("Outreach Page Loaded");
}

/* ============================================================
   CONTACT PAGE
============================================================ */
function initializeContactPage() {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Message sent! Thank you for contacting us.");
      contactForm.reset();
    });
  }
}
