const folderData = {

    ai_ml: [
        {
            title: "HADS Prediction System",
            image: "assets/f.png",
            description: "A machine-learning platform for HADS prediction.",
            tags: ["Python", "TensorFlow", "BiLSTM"]
        },

        {
            title: "HydraFlow",
            image: "assets/f.png",
            description: "AI-driven hydrological modeling.",
            tags: ["Python", "AI", "Simulation"]
        }
    ],

    multimodal: [
        {
            title: "Multimodal DAG Orchestrator",
            image: "assets/f.png",
            description: "Adaptive orchestration of specialized AI models.",
            tags: ["Python", "DAG", "AI", "Orchestration"]
        }
    ],

    webapps: [
        {
            title: "SRMFlows",
            image: "assets/f.png",
            description: "A campus navigation application.",
            tags: ["Svelte", "JavaScript", "Maps"]
        }
    ]

};
document.addEventListener("mousemove", (e) => {
  const v = document.getElementById("v-line");
  const h = document.getElementById("h-line");
  v.style.left = `${e.clientX}px`;
    h.style.top = `${e.clientY}px`;
});
function tohome() {
  document.getElementById("home").style.display = "flex";
  document.getElementById("projects").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("contact").style.display = "none";
}

function toproj() {
  document.getElementById("home").style.display = "none";
  document.getElementById("projects").style.display = "flex";
  document.getElementById("about").style.display = "none";
  document.getElementById("contact").style.display = "none";
}
function toabout() {
  document.getElementById("home").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("about").style.display = "flex";
  document.getElementById("contact").style.display = "none";
}
function tocontact() {
  document.getElementById("home").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("contact").style.display = "flex";
}
function openfolder(ele) {
  const viewpane = document.getElementById("viewpane");
  const content = document.getElementById("content");
  viewpane.style.display = "flex";
  content.innerHTML = "";
  const items = folderData[ele];
  if (!items) {
    content.innerHTML = "<button onclick=exitcontent()>back</button><p>Folder is empty! Explore other folders...";
    return;
  }
  items.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("content-card");
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="card-info">
      <h2>${item.title}</h2>
      <p>${item.description}</p>
      <div class="content-tags">
      ${item.tags.map(tag => ` <span>${tag}</span>`).join("")}
      </div>
      </div>
      `;
    content.appendChild(card);
  })
}
