const sayHello = (name) => {
  const nameContent = document.getElementById("first");

  nameContent.textContent = `Hello ${name}`;
};

export { sayHello };
