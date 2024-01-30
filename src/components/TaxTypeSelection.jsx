export default function TaxTypeSelection({ setTaxType }) {
  return (
    <div>
      <select name="" id="" onChange={(e) => setTaxType(e.target.value)}>
        <option value="sales">Sales tax rates</option>
        <option value="income">Income tax rates</option>
      </select>
    </div>
  );
}
