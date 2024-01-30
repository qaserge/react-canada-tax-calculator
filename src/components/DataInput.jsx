export default function DataInput({ setAmount }) {
  return (
    <div>
      <input
        type="number"
        pattern="[0-9]*"
        min="0"
        placeholder="Enter the ammount"
        onChange={(e) => setAmount(e.target.value)}
      />
    </div>
  );
}
