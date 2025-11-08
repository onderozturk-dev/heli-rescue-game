const MAX_GROUND_PEOPLE = 20;

function getGroundPeopleCount() {
  if (helicopter.hasPerson && people[helicopter.personIndex]) {
    return people.length - 1;
  }
  return people.length;
}

function checkGameOverByCrowd() {
  const ground = getGroundPeopleCount();
  const yerdeEl = document.getElementById("yerde");
  if (yerdeEl) yerdeEl.textContent = ground;

  if (ground >= MAX_GROUND_PEOPLE) {
    alert("Kaybettiniz. Çok fazla sivil sayısı");
    window.location.reload();
  }
}
