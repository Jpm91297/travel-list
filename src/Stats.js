export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((x) => x.packed).length;
  const percent = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {numItems > 0 ? (
        <em>
          💼You have {numItems} items on your list, already packed {numPacked} (
          {percent}%)
        </em>
      ) : (
        <em>Add something! 🚀</em>
      )}
    </footer>
  );
}
