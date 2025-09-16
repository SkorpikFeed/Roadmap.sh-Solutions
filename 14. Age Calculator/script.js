const DateTime = luxon.DateTime;

const picker = datepicker("#age-picker", {
  formatter: (input, date, instance) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    input.value = `${day}/${month}/${year}`;
  },
  minDate: new Date(1900, 0, 1),
  maxDate: new Date(),
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.getElementById("age-picker").value;
  const birthDate = DateTime.fromFormat(input, "dd/MM/yyyy");
  const now = DateTime.now();

  if (!birthDate.isValid) {
    document.getElementById("answear").textContent = "Invalid date format";
    return;
  }

  const diff = now.diff(birthDate, ["years", "months", "days"]).toObject();
  document.getElementById("answear").textContent = `You are ${Math.floor(
    diff.years
  )} years, ${Math.floor(diff.months)} months, and ${Math.floor(
    diff.days
  )} days old.`;
});

picker.calendarContainer.style.setProperty("min-width", "100%");
picker.calendarContainer.style.setProperty("transform", "translateY(43px)");
picker.calendarContainer.style.setProperty("border", "2px solid black");
picker.calendarContainer.style.setProperty("border-radius", "5px");
picker.calendarContainer.style.setProperty("box-sizing", "border-box");
