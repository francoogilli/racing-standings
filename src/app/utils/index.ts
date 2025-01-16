function formatDateToShort(dateString: string): string {
  const date = new Date(dateString);
  date.setDate(date.getDate() + 1);

  const day = date.getDate();
  const month = date.toLocaleString("es-ES", { month: "short" });

  return `${day} ${month}.`;
}
function formatDateRange(dateStart: string, dateEnd: string): string {
  const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  const start = new Date(dateStart);
  const end = new Date(dateEnd);

  const startDay = start.getDate() + 1;
  const startMonth = months[start.getMonth()];

  const endDay = end.getDate() + 1;
  const endMonth = months[end.getMonth()];

  if (startMonth === endMonth) {
    return `${startMonth} ${startDay} - ${endDay}`;
  }

  return `${startMonth} ${startDay} - ${endMonth} ${endDay}`;
}

const translateCircuitName = (name: string) => {
  const translations: { [key: string]: string } = {
    Thailand: "Tailandia",
    "United States of America": "EE. UU",
    Australia: "Australia",
    Germany: "Alemania",
    France: "Francia",
    Italy: "Italia",
    Spain: "España",
    Japan: "Japón",
    "United Kingdom of Great Britain and Northern Ireland": "Gran Bre.",
    Austria: "Austria",
    Argentina: "Argentina",
    Brazil: "Brasil",
    "Czechia": "Chequia",
    "San Marino": "San Mar.",
    Netherlands: "Holanda",
    Portugal: "Portugal",
    Finland: "Finlandia",
    Malaysia: "Malasia",
    Qatar: "Qatar",
  };

  return translations[name] || name;
};

export { formatDateToShort, translateCircuitName, formatDateRange };
