function checkPersonPickup() {
  if (helicopter.hasPerson) return;
  for (let i = 0; i < people.length; i++) {
    if (isColliding(helicopter, people[i])) {
      helicopter.hasPerson = true;
      helicopter.personIndex = i;
      return;
    }
  }
}
