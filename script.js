const data = [
  { name: "Landing Page CTA", a: 0, b: 0, winner: "-" },
  { name: "Pricing Button Color", a: 0, b: 0, winner: "-" }
];

const tbody = document.getElementById("experiments");

function render() {
  tbody.innerHTML = "";
  data.forEach(e => {
    tbody.innerHTML += `
      <tr>
        <td>${e.name}</td>
        <td>${e.a}%</td>
        <td>${e.b}%</td>
        <td class="winner">${e.winner}</td>
      </tr>
    `;
  });
}

function run() {
  data.forEach(e => {
    e.a = Math.floor(Math.random() * 100);
    e.b = Math.floor(Math.random() * 100);
    e.winner = e.a > e.b ? "A" : "B";
  });
  render();
}

render();
