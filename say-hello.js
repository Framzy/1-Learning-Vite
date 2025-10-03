const sayHello = (name) => {
  const nameContent = document.getElementById("name");

  nameContent.textContent = "Hello " + name;
};

export { sayHello };
