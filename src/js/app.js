export default function sortingHealthy(obj) {
  const sortObj = obj.sort((a, b) => b.health - a.health);
  return sortObj;
}
