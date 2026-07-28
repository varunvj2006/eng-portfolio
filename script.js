const projectData = {
  benchbot: {
    rarity: "LEGENDARY MISSION",
    title: "BenchBot Distributed Control",
    summary: "A ROS-based robotics architecture linking high-level control on a Raspberry Pi 5 to STM32F401 motor and servo firmware.",
    objective: "Build a dependable distributed control platform that separates high-level robotic decision-making from real-time low-level actuation and feedback.",
    contributions: [
      "Created a distributed ROS control architecture on Raspberry Pi 5 running Ubuntu 22.04 LTS.",
      "Programmed STM32F401 firmware for precise PWM-based servo actuation.",
      "Integrated quadrature encoder feedback for closed-loop motion control.",
      "Developed signal-decoding routines for servo feedback data.",
      "Debugged timing and signal integrity with oscilloscopes and function generators."
    ],
    tags: ["STM32F401", "Embedded C", "ROS", "Raspberry Pi 5", "PWM", "Encoders", "Ubuntu Linux"],
    value: "Demonstrates deterministic low-level control, layered architecture, feedback integration, communication debugging, and disciplined hardware validation."
  },
  electrium: {
    rarity: "EPIC MISSION",
    title: "Dual-STM32 Vehicle Control",
    summary: "A distributed embedded architecture for an electric human-powered vehicle, separating power and speed control from user interface and system feedback.",
    objective: "Coordinate vehicle sensing, control, status reporting, and safety functions across two microcontrollers using a reliable CAN interface.",
    contributions: [
      "Developed embedded firmware for two STM32 microcontrollers.",
      "Configured CAN communication for sensor, control, and status data.",
      "Integrated Hall-effect current sensing for battery and power monitoring.",
      "Supported KiCad-based power-distribution integration.",
      "Implemented shutdown, LED, buzzer, and fault-response behaviour."
    ],
    tags: ["STM32", "CAN Bus", "Hall Sensor", "KiCad", "Power Distribution", "Fault Handling"],
    value: "Shows practical vehicle-electronics experience across firmware, sensing, distributed control, human feedback, and safety-oriented power integration."
  },
  security: {
    rarity: "RARE MISSION",
    title: "Semantic Cybersecurity Pipeline",
    summary: "A Tor-enabled Python crawler and semantic filtering workflow for collecting, ranking, reviewing, and storing cybersecurity-relevant information.",
    objective: "Automate the acquisition and semantic screening of decentralized cybersecurity content while keeping execution observable and outputs structured.",
    contributions: [
      "Designed a Tor-based crawler using Python, Requests, and BeautifulSoup.",
      "Built an embedding and cosine-similarity filtering pipeline.",
      "Created chunked processing and JSONL storage for downstream AI workflows.",
      "Developed a Tkinter interface for live execution monitoring.",
      "Applied IoT security, firmware-analysis, and vulnerability-research concepts."
    ],
    tags: ["Python", "Tor", "Requests", "BeautifulSoup", "Embeddings", "Tkinter", "JSONL"],
    value: "Demonstrates modular software design, explicit data interfaces, observable execution, structured output handling, and embedded-security awareness."
  },
  watering: {
    rarity: "UNCOMMON MISSION",
    title: "Automated Plant Watering",
    summary: "An end-to-end STM32 system that combines soil sensing, control logic, water actuation, LCD feedback, calibration, and physical design.",
    objective: "Deliver water automatically based on measured soil moisture while keeping the system understandable and reliable for the user.",
    contributions: [
      "Programmed the STM32 control firmware in C.",
      "Integrated ADC-based soil-moisture sensing.",
      "Controlled a servo-driven water-delivery mechanism.",
      "Added LCD status feedback.",
      "Calibrated the sensor interface and designed 3D-printed parts in SOLIDWORKS."
    ],
    tags: ["STM32", "C", "ADC", "Servo", "LCD", "SOLIDWORKS"],
    value: "Shows complete product thinking across sensing, firmware, calibration, actuation, user feedback, troubleshooting, and mechanical integration."
  },
  fpga: {
    rarity: "UNCOMMON MISSION",
    title: "FPGA Traffic Light Controller",
    summary: "A VHDL finite-state-machine controller using clock division, timed state transitions, simulation, and physical FPGA validation.",
    objective: "Implement deterministic traffic-light sequencing in digital hardware and verify timing both in simulation and on the FPGA board.",
    contributions: [
      "Designed the finite-state-machine architecture in VHDL.",
      "Implemented clock dividers and timed state counters.",
      "Created LED and seven-segment display behaviour.",
      "Validated operation through Quartus simulation.",
      "Debugged the final design on physical FPGA hardware."
    ],
    tags: ["VHDL", "Quartus", "FPGA", "Finite-State Machine", "Digital Logic"],
    value: "Demonstrates state-machine design, timing analysis, hardware description languages, simulation discipline, and board-level verification."
  },
  sniffd: {
    rarity: "RARE MISSION",
    title: "Sniffd AI",
    summary: "A fragrance-recommendation prototype that converts natural-language descriptions into structured notes and retrieves relevant products.",
    objective: "Turn subjective fragrance requests into searchable technical attributes and return useful recommendations through an interactive software interface.",
    contributions: [
      "Integrated local AI inference through Ollama and Python.",
      "Connected product retrieval using Google Search API integration.",
      "Built the user interface with JavaScript and HTML/CSS.",
      "Implemented query caching and request handling.",
      "Improved search response time by approximately 25%."
    ],
    tags: ["Python", "Ollama", "JavaScript", "HTML/CSS", "Google API", "Caching"],
    value: "Shows practical AI integration, API use, performance optimization, front-end development, and translation of ambiguous user needs into structured data."
  }
};

const loadouts = {
  embedded: {
    rarity: "LEGENDARY LOADOUT",
    title: "Embedded Firmware",
    description: "Low-level control, sensor acquisition, deterministic communication, and physical-system integration.",
    stats: [
      ["C / C++", 92],
      ["STM32 HAL", 90],
      ["CAN / PWM / ADC", 88],
      ["Real-Time Debugging", 84]
    ],
    chips: ["STM32CubeIDE", "Encoders", "Servo Control", "Sensor Integration"],
    icon: "STM32"
  },
  software: {
    rarity: "EPIC LOADOUT",
    title: "Software Engineering",
    description: "Data pipelines, APIs, automation tools, interfaces, and Linux-based development workflows.",
    stats: [
      ["Python", 91],
      ["Git / Linux", 87],
      ["APIs / JSON", 84],
      ["JavaScript", 80]
    ],
    chips: ["Docker", "Requests", "BeautifulSoup", "Tkinter", "React"],
    icon: "PY"
  },
  hardware: {
    rarity: "RARE LOADOUT",
    title: "Hardware Integration",
    description: "Signal-level validation, power integration, physical interfaces, and board-aware debugging.",
    stats: [
      ["Oscilloscope", 88],
      ["Signal Debugging", 86],
      ["KiCad", 80],
      ["Power Systems", 78]
    ],
    chips: ["Function Generator", "DMM", "Current Sensing", "PCB Integration"],
    icon: "PCB"
  },
  design: {
    rarity: "UNCOMMON LOADOUT",
    title: "Digital & Mechanical",
    description: "Digital logic, finite-state systems, CAD modelling, and practical mechanical implementation.",
    stats: [
      ["VHDL / Verilog", 82],
      ["Finite-State Machines", 86],
      ["SOLIDWORKS", 78],
      ["Prototyping", 83]
    ],
    chips: ["Quartus", "FPGA", "AutoCAD", "3D Printing"],
    icon: "CAD"
  }
};

const bootScreen = document.getElementById("bootScreen");
const deployButton = document.getElementById("deployButton");
const soundToggle = document.getElementById("soundToggle");
const soundIcon = document.getElementById("soundIcon");
const xpFill = document.getElementById("xpFill");
const xpText = document.getElementById("xpText");
const missionModal = document.getElementById("missionModal");
const toast = document.getElementById("toast");
const randomMission = document.getElementById("randomMission");

let soundEnabled = true;
let lastFocusedElement = null;
let audioContext = null;

function playTone(frequency = 480, duration = 0.06, type = "square", volume = 0.035) {
  if (!soundEnabled) return;
  try {
    audioContext ??= new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = type;
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(volume, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
  } catch {
    // Audio is an optional enhancement.
  }
}

function deploy() {
  bootScreen.classList.add("hidden");
  playTone(280, .08, "sawtooth", .05);
  setTimeout(() => playTone(520, .1, "square", .04), 70);
}

deployButton.addEventListener("click", deploy);
window.addEventListener("keydown", event => {
  if (event.key === "Enter" && !bootScreen.classList.contains("hidden")) {
    deploy();
  }
});

soundToggle.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  soundToggle.setAttribute("aria-pressed", String(soundEnabled));
  soundIcon.textContent = soundEnabled ? "SFX ON" : "SFX OFF";
  if (soundEnabled) playTone(620);
});

document.querySelectorAll("a, button, .mission-card").forEach(element => {
  element.addEventListener("mouseenter", () => playTone(270, .025, "square", .012));
});

function updateXP() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.round((window.scrollY / scrollable) * 100) : 0;
  xpFill.style.width = `${progress}%`;
  xpText.textContent = `${progress} / 100`;
}

window.addEventListener("scroll", updateXP, { passive: true });
updateXP();

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function openProject(projectKey) {
  const project = projectData[projectKey];
  if (!project) return;

  lastFocusedElement = document.activeElement;
  document.getElementById("modalRarity").textContent = project.rarity;
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalSummary").textContent = project.summary;
  document.getElementById("modalObjective").textContent = project.objective;
  document.getElementById("modalValue").textContent = project.value;

  const contributionList = document.getElementById("modalContributions");
  contributionList.innerHTML = "";
  project.contributions.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    contributionList.appendChild(li);
  });

  const tagContainer = document.getElementById("modalTags");
  tagContainer.innerHTML = "";
  project.tags.forEach(tag => {
    const span = document.createElement("span");
    span.textContent = tag;
    tagContainer.appendChild(span);
  });

  missionModal.hidden = false;
  document.body.classList.add("modal-open");
  missionModal.querySelector(".modal-close").focus();
  playTone(620, .08, "sawtooth", .04);
}

function closeProject() {
  missionModal.hidden = true;
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus();
}

document.querySelectorAll(".mission-card").forEach(card => {
  card.addEventListener("click", event => {
    if (event.target.closest("button") || event.currentTarget === event.target || event.target.closest(".mission-content") || event.target.closest(".mission-visual")) {
      openProject(card.dataset.project);
    }
  });

  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(card.dataset.project);
    }
  });
});

document.querySelectorAll("[data-close-modal]").forEach(element => {
  element.addEventListener("click", closeProject);
});

window.addEventListener("keydown", event => {
  if (event.key === "Escape" && !missionModal.hidden) closeProject();

  if (!missionModal.hidden && event.key === "Tab") {
    const focusable = [...missionModal.querySelectorAll("button, a, [tabindex]:not([tabindex='-1'])")];
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach(item => item.classList.remove("active"));
    button.classList.add("active");

    document.querySelectorAll(".mission-card").forEach(card => {
      const categories = card.dataset.category.split(" ");
      card.classList.toggle("hidden-card", filter !== "all" && !categories.includes(filter));
    });

    showToast(filter === "all" ? "All missions visible" : `${filter.toUpperCase()} missions selected`);
    playTone(430, .06, "square", .025);
  });
});

randomMission.addEventListener("click", () => {
  const keys = Object.keys(projectData);
  const key = keys[Math.floor(Math.random() * keys.length)];
  openProject(key);
  showToast("Random mission deployed");
});

function setLoadout(key) {
  const loadout = loadouts[key];
  if (!loadout) return;

  document.querySelectorAll(".loadout-tab").forEach(tab => {
    const active = tab.dataset.loadout === key;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });

  document.getElementById("loadoutRarity").textContent = loadout.rarity;
  document.getElementById("loadoutTitle").textContent = loadout.title;
  document.getElementById("loadoutDescription").textContent = loadout.description;
  document.querySelector(".mcu-model span").textContent = loadout.icon;

  const stats = document.getElementById("statList");
  stats.innerHTML = "";
  loadout.stats.forEach(([name, score]) => {
    const row = document.createElement("div");
    row.innerHTML = `<span>${name}</span><i><b style="width:${score}%"></b></i><em>${score}</em>`;
    stats.appendChild(row);
  });

  const chips = document.getElementById("inventoryChips");
  chips.innerHTML = "";
  loadout.chips.forEach(chip => {
    const span = document.createElement("span");
    span.textContent = chip;
    chips.appendChild(span);
  });

  playTone(520, .06, "triangle", .03);
}

document.querySelectorAll(".loadout-tab").forEach(tab => {
  tab.addEventListener("click", () => setLoadout(tab.dataset.loadout));
});

document.addEventListener("mousemove", event => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const x = (event.clientX / window.innerWidth - .5) * 10;
  const y = (event.clientY / window.innerHeight - .5) * 10;
  document.querySelectorAll(".hero-orb").forEach((orb, index) => {
    const factor = index ? -.7 : 1;
    orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
  });
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [
          { opacity: 0, transform: "translateY(24px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        { duration: 540, easing: "cubic-bezier(.2,.7,.2,1)", fill: "both" }
      );
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12 });

document.querySelectorAll(".mission-card, .quest-entry, .contact-panel, .loadout-shell").forEach(item => revealObserver.observe(item));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", () => playTone(390, .05, "triangle", .02));
});
