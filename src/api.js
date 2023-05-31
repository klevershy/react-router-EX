export async function getVans() {
  // fetch("/api/vans")
  //     .then((res) => res.json())
  //     .then((data) => setVans(data.vans));
  const res = await fetch("/api/vans");
  const data = await res.json();
  return data.vans;
}
