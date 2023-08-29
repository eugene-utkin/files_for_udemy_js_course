const getJSON = function() {
  const res = await fetch(`${API_URL}/${id}`);
  const data = await res.json();

  if (!res.ok) throw new Error(`${data.message} (${res.status})`);
}