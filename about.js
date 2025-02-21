/* script.js */
const teamMembers = ["Alex Rivera", "Maya Patel", "James Wilson", "Sophia Lee", "Liam Scott", "Emily Davis", "Michael Brown", "Olivia Green", "Daniel White", "Isabella Hall"];
const teamGrid = document.getElementById('teamGrid');
teamMembers.forEach(name => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `<h3>🤝 ${name}</h3><p>Club Member</p>`;
  teamGrid.appendChild(card);
});
