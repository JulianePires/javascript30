const container = document.querySelector("#data");
const panels = document.createElement("div");
panels.className = "Panels";

//Inicializa a matriz de vetores para armazenar as frases
let matrixPanels = [];
for (var x = 0; x < 5; x++) {
  matrixPanels[x] = [];
}
//Panel 1
matrixPanels[0][0] = "Build";
matrixPanels[0][1] = "";
matrixPanels[0][2] = "Structure";

//Panel 2
matrixPanels[1][0] = "Create";
matrixPanels[1][1] = "";
matrixPanels[1][2] = "Style";

//Panel 3
matrixPanels[2][0] = "Bring";
matrixPanels[2][1] = "";
matrixPanels[2][2] = "Life";

//Panel 4
matrixPanels[3][0] = "Make";
matrixPanels[3][1] = "";
matrixPanels[3][2] = "Dinamic";

//Panel 5
matrixPanels[4][0] = "Manage";
matrixPanels[4][1] = "";
matrixPanels[4][2] = "Data";

for (var i = 0; i < 5; i++) {
  //Cria os painéis
  const panel = document.createElement("div");
  panel.className = `Panel Panel${i + 1}`;
  //Percorre a matriz adicionando os elementos ao elemento 'p'
  for (var j = 0; j < 3; j++) {
    var p = document.createElement("p");
    text = document.createTextNode(matrixPanels[i][j]);
    p.appendChild(text);
    panel.appendChild(p);
  }
  panels.appendChild(panel);
}

container.appendChild(panels);

const paineis = document.querySelectorAll(".Panel");

function toggleOpen() {
  console.log("Hello");
  this.classList.toggle("open");
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

paineis.forEach((panel) => panel.addEventListener("click", toggleOpen));
paineis.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
