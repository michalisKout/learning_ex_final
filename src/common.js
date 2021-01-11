export const Button = ({ name = "" }) => {
  return `
   <button id="${name}">${name.toUpperCase()}</button>`;
};

export const appendListOfElements = (elementsList) =>
  `${elementsList}`.replace(/,/g, "");
