function createItemElement(title, date) {
  const newItem = document.createElement("div");
  newItem.classList.add("posts", "items-post");
  newItem.id = Math.random().toString(36).substring(7);
  const container = document.createElement("div");
  container.classList.add("container-colour");

  // Generate a unique id for the container
  const id = newItem.id;

  // Set the background color of the container
  container.style.backgroundColor = localStorage.getItem(`postColor-${id}`);

  const titleElement = document.createElement("h6");
  titleElement.textContent = title;

  const dateElement = document.createElement("span");
  dateElement.classList.add("add--date");
  dateElement.textContent = date;

  container.appendChild(titleElement);
  container.appendChild(dateElement);
  newItem.appendChild(container);

  itemContainer.appendChild(newItem);
}