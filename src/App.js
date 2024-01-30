import "./App.css";
import DataInput from "./components/DataInput";
import TaxTypeSelection from "./components/TaxTypeSelection";
import ProvinceSelection from "./components/ProvinceSelection";
import Output from "./components/Output";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [taxType, setTaxType] = useState("sales");
  const [province, setProvince] = useState("Quebec");

  return (
    <div className="App">
      <DataInput setAmount={setAmount} />
      <TaxTypeSelection setTaxType={setTaxType} />
      <ProvinceSelection setProvince={setProvince} />
      <Output amount={amount} taxType={taxType} province={province} />
    </div>
  );
}

export default App;
