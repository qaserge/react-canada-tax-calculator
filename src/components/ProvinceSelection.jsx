export default function ProvinceSelection({ setProvince }) {
  return (
    <div>
      <select name="" id="" onChange={(e) => setProvince(e.target.value)}>
        <option value="Quebec">Quebec</option>
        <option value="Alberta">Alberta</option>
        <option value="British Columbia">British Columbia</option>
        <option value="Manitoba">Manitoba</option>
        <option value="New Brunswick">New Brunswick</option>
        <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
        <option value="Northwest Territories">Northwest Territories</option>
        <option value="Nova Scotia">Nova Scotia</option>
        <option value="Nunavut">Nunavut</option>
        <option value="Ontario">Ontario</option>
        <option value="Prince Edward Island">Prince Edward Island</option>
        <option value="Saskatchewan">Saskatchewan</option>
        <option value="Yukon">Yukon</option>
      </select>
    </div>
  );
}
