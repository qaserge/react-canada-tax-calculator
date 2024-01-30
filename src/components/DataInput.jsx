export default function DataInput({ setAmount }) {
  return (
    <div>
      <input
        type="number"
        placeholder="Enter the ammount"
        onChange={(e) => setAmount(e.target.value)}
      />
    </div>
  );
}
