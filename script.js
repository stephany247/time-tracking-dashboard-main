const buttons = document.querySelectorAll(".timeframe-btn");
const cards = document.querySelectorAll(".card");

// Function to fetch and update data based on timeframe
function updateData(timeframe) {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      cards.forEach((card, i) => {
        const currentHours = card.querySelector(".current-hours");
        const previousHours = card.querySelector(".previous-hours");

        currentHours.textContent = `${data[i].timeframes[timeframe].current}hrs`;

        const timeframeText = {
          daily: "Last day",
          weekly: "Last week",
          monthly: "Last month",
        };

        previousHours.textContent = `${timeframeText[timeframe]} - ${data[i].timeframes[timeframe].previous}hrs`;
      });

      // Update active button styling
      buttons.forEach((btn) => {
        //Reset all buttons to an inactive state
        btn.classList.remove("text-white");
        btn.classList.add("text-paleBlue");
      });

      //Find the active button
      const activeButton = Array.from(buttons).find(
        (btn) => btn.dataset.timeframe === timeframe
      );

      //Style the active button
      if (activeButton) {
        activeButton.classList.add("text-white");
        activeButton.classList.remove("text-paleBlue");
      }
    })

    .catch((error) => console.error("Error fetching data:", error));
}

// Initialize with daily data on page load
document.addEventListener("DOMContentLoaded", () => {
  updateData("daily");
});

// Add event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Use data-timeframe attribute
    const timeframe = button.dataset.timeframe;
    updateData(timeframe);
    button.classList.remove("text-paleBlue");
    button.classList.add("text-white");
  });
});
