const setUniqueID = (arr) => {
  let id = Math.floor(Math.random() * 100);
  let idExists = arr.find((obj) => obj.id === id);

  while (idExists) {
    id = Math.floor(Math.random() * 100);
  }

  return id;
};

export default setUniqueID;
