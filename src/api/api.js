export async function getLists() {
  const response = await fetch('http://localhost:3000/lists');
  const lists = response.json();
  return lists;
}

export async function getListbyId(id) {
  const response = await fetch(`http://localhost:3000/lists/${id}`);
  const list = response.json();
  return list;
}
