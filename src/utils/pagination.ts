const ELEMENTS_PER_PAGE = 5;

export const getTotalPages = (amountOfElements: number): number => Math.max(1, Math.ceil(amountOfElements / ELEMENTS_PER_PAGE))

export const getCurrentElements = <T>(elements: T[], actualPage: number): T[] => {
  const start = (actualPage - 1) * ELEMENTS_PER_PAGE;
  return elements.slice(start, start + ELEMENTS_PER_PAGE);
}

