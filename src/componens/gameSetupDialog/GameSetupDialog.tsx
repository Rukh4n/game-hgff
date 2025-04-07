import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GameSetupDialog: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    deathAge: "",
    retirementAge: "",
    numberOfChildren: "",
    numberOfPartners: "",
    mealPrice: "",
  });

  const [errors, setErrors] = useState({
    deathAge: false,
    retirementAge: false,
    numberOfChildren: false,
    numberOfPartners: false,
    mealPrice: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const handleStart = () => {
    const newErrors = {
      deathAge: formData.deathAge === "",
      retirementAge: formData.retirementAge === "",
      numberOfChildren: formData.numberOfChildren === "",
      numberOfPartners: formData.numberOfPartners === "",
      mealPrice: formData.mealPrice === "",
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((error) => error);

    if (!hasError) {
      localStorage.setItem("data", JSON.stringify(formData));
      console.log("Data disimpan:", formData);
      navigate("/play-game");
    } else {
      console.warn("Harap isi semua input terlebih dahulu.");
    }
  };

  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-white text-2xl mb-4 text-center">Game Setup</h2>
        <div className="space-y-4">
          <InputField
            label="Mau Meninggal di usia berapa"
            name="deathAge"
            value={formData.deathAge}
            onChange={handleChange}
            error={errors.deathAge}
          />
          <InputField
            label="Pensiun Di Umur Berapa"
            name="retirementAge"
            value={formData.retirementAge}
            onChange={handleChange}
            error={errors.retirementAge}
          />
          <InputField
            label="Jumlah Anak"
            name="numberOfChildren"
            value={formData.numberOfChildren}
            onChange={handleChange}
            error={errors.numberOfChildren}
          />
          <InputField
            label="Jumlah Pasangan"
            name="numberOfPartners"
            value={formData.numberOfPartners}
            onChange={handleChange}
            error={errors.numberOfPartners}
          />
          <InputField
            label="Harga sekali Makan Saat ini"
            name="mealPrice"
            value={formData.mealPrice}
            onChange={handleChange}
            error={errors.mealPrice}
          />
          <button
            onClick={handleStart}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 items-center">
      <label className="text-white text-sm">{label}</label>
      <div className="flex flex-col">
        <input
          type="number"
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full p-2 rounded-md bg-gray-700 text-white border ${
            error ? "border-red-500" : "border-gray-600"
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {error && (
          <span className="text-red-400 text-xs mt-1">Input ini wajib diisi</span>
        )}
      </div>
    </div>
  );
};

export default GameSetupDialog;
