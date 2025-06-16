const zones = {
  forest: {
    fact: "Forests cover 31% of Earth's land and house 80% of terrestrial species.",
    sound: "https://www.fesliyanstudios.com/play-mp3/387",
  },
  savannah: {
    fact: "Savannahs are home to elephants, lions, giraffes, and more!",
    sound: "https://www.fesliyanstudios.com/play-mp3/6630",
  },
  ocean: {
    fact: "Oceans cover 71% of Earth's surface and are largely unexplored.",
    sound: "https://www.fesliyanstudios.com/play-mp3/6764",
  },
  mountain: {
    fact: "Mountains host 25% of land animals and provide water to 1/2 of humanity.",
    sound: "https://www.fesliyanstudios.com/play-mp3/6489",
  }
};

let exploredZones = new Set();

function exploreZone(zone) {
  const factArea = document.getElementById("factArea");
  factArea.innerText = zones[zone].fact;

  // Mark as explored
  exploredZones.add(zone);
  const percentage = Math.floor((exploredZones.size / 4) * 100);
  updateProgress(percentage);

  // Play sound
  const audio = new Audio(zones[zone].sound);
  audio.play();
}

function updateProgress(percent) {
  const circle = document.querySelector(".circle");
  const progressText = document.getElementById("progressText");
  circle.setAttribute("stroke-dasharray", `${percent}, 100`);
  progressText.textContent = `${percent}%`;
}