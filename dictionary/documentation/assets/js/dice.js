
document.querySelectorAll(".dice-check").forEach((check) => {
  const valueInput = check.querySelector(".dice-check__value");
  const button = check.querySelector(".dice-check__roll");
  const result = check.querySelector(".dice-check__result");
  const diceImage = check.querySelector(".dice-check__image");
  const imageBase = check.dataset.imageBase;

  let catastropheCheck = false;

  function show(message, status) {
    result.textContent = message;
    result.className =
      "dice-check__result dice-check__result--" + status;
  }

  function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function updateDiceImage(roll) {
    diceImage.src = `${imageBase}${roll}.png`;
    diceImage.alt = `Würfel zeigt eine ${roll}`;
  }

  button.addEventListener("click", () => {
    const property = Math.max(
      1,
      Math.min(5, Number.parseInt(valueInput.value, 10) || 1)
    );

    valueInput.value = property;

    const roll = rollDie();

    // Update the displayed die after every roll.
    updateDiceImage(roll);

    // Second roll: determine whether the first roll of 6
    // leads to a catastrophe.
    if (catastropheCheck) {
      catastropheCheck = false;
      button.textContent = "Jetzt würfeln";
      valueInput.disabled = false;

      if (roll === 6) {
        show(
          "💥 Katastrophe! Zweite 6 gewürfelt.",
          "catastrophe"
        );
      } else {
        show(
          `Zweiter Wurf: ${roll}. Keine Katastrophe, aber die Probe ist nicht geschafft.`,
          "fail"
        );
      }

      return;
    }

    // A roll of 1 is always an exceptional success.
    if (roll === 1) {
      show(
        "🎉 Eine 1! Super, sehr gut geschafft!",
        "success"
      );
      return;
    }

    // A roll of 6 triggers the catastrophe check.
    if (roll === 6) {
      catastropheCheck = true;
      button.textContent = "Nochmal würfeln";
      valueInput.disabled = true;

      show(
        "🎲 Eine 6! Probe nicht geschafft. Katastrophenprüfung: Würfle erneut!",
        "warning"
      );

      return;
    }

    // Rolls 2–5 succeed when the roll is at or below
    // the property value.
    if (roll <= property) {
      show(
        `🎲 Eine ${roll}! Geschafft (Eigenschaft: ${property}).`,
        "success"
      );
    } else {
      show(
        `🎲 Eine ${roll}! Nicht geschafft (Eigenschaft: ${property}).`,
        "fail"
      );
    }
  });
});
