import incomeTaxRates from "../income-tax-rates";
import salesTaxRates from "../sales-tax-rates";

export default function Output({ amount, taxType, province }) {
  let taxRate = 0;
  const numericAmount = parseFloat(amount);
  let total = 0;

  if (taxType === "sales") {
    taxRate = salesTaxRates.find(
      (salesTaxRate) => salesTaxRate.province === province
    ).totalRate;

    total = (numericAmount * taxRate) / 100 + numericAmount;
  }

  if (taxType === "income") {
    taxRate = incomeTaxRates
      .find((incomeTaxRate) => incomeTaxRate.name === province)
      .taxRanges.find(
        (taxRange) =>
          taxRange.min <= numericAmount && taxRange.max >= numericAmount
      ).rate;

    total = numericAmount - (numericAmount * taxRate) / 100;
  }

  return (
    <div>
      <p>Amount: {amount ? amount : 0}$</p>
      <p>Tax rate: {taxRate}%</p>
      <hr />

      <p>
        {taxType === "sales" ? "Total with taxes:" : "Total after taxes:"}{" "}
        {total}
      </p>
    </div>
  );
}
