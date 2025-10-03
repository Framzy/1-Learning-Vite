const sayGoodbye = (name: string): void => {
  const nameContent = document.getElementById("last") as HTMLElement;

  nameContent.textContent = `Goodbye ${name}`;
};

export { sayGoodbye };
