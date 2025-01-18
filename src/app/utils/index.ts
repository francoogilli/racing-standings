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
    THA: "Tailandia",
    AME: "Texas",
    AUS: "Australia",
    AUT: "Austria",
    GER: "Alemania",
    FRA: "Francia",
    ITA: "Italia",
    SPA: "España",
    ARA: "Aragon",
    HUN: "Hungria",
    VAL: "Valencia",
    CAT: "Catalunya",
    INA: "Indonesia",
    JPN: "Japón",
    GBR: "Gran Bre.",
    ARG: "Argentina",
    CZE: "Chequia",
    RSM: "San Mar.",
    NED: "Holanda",
    POR: "Portugal",
    MAL: "Malasia",
    QAT: "Qatar",
  };

  return translations[name] || name;
};

export { formatDateToShort, translateCircuitName, formatDateRange };
