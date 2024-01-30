import incomeTaxRates from "../income-tax-rates";
import salesTaxRates from "../sales-tax-rates";

export default function Output({ amount, taxType, province }) {
  let taxRate = 0;
  if (taxType === "sales") {
    taxRate = salesTaxRates.find(
      (salesTaxRate) => salesTaxRate.province === province
    ).totalRate;
  }

  const numericAmount = parseFloat(amount);

  return (
    <div>
      <p>Amount: {amount}</p>
      <p>Tax rate: {taxRate}%</p>
      <hr />
      <p>Total: {(numericAmount * taxRate) / 100 + numericAmount}</p>
    </div>
  );
}
