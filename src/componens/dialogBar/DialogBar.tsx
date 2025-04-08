import React, { useEffect, useState } from 'react';

const DialogBar: React.FC = () => {
  const [data, setData] = useState({
    deathAge: "",
    retirementAge: "",
    numberOfChildren: "",
    numberOfPartners: "",
    mealPrice: "",
    savings: ""
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data") || "{}");
    setData(storedData);
  }, []);

  return (
    <div className="bg-gray-950 p-6 text-white text-xs">
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th className="px-2 py-1">Usia Meninggal</th>
            <th className="px-2 py-1">Usia Pensiun</th>
            <th className="px-2 py-1">Jumlah Anak</th>
            <th className="px-2 py-1">Jumlah Pasangan</th>
            <th className="px-2 py-1">Harga Sekali Makan</th>
            <th className="px-2 py-1">Tabungan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-2 py-1">{data.deathAge}</td>
            <td className="px-2 py-1">{data.retirementAge}</td>
            <td className="px-2 py-1">{data.numberOfChildren}</td>
            <td className="px-2 py-1">{data.numberOfPartners}</td>
            <td className="px-2 py-1">{data.mealPrice}</td>
            <td className="px-2 py-1">{data.savings}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DialogBar;
