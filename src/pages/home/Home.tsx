import { useState } from "react";
import "./home.css";
import GameSetupDialog from "../../componens/gameSetupDialog/GameSetupDialog";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonClicked, setButtonClicked] = useState("");

  // Fungsi untuk membuka modal
  const openModal = (buttonName: string) => {
    setButtonClicked(buttonName);
    setIsModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center flex-col p-6">
      <div className="text-white font-lora italic text-4xl text-center max-w-3xl leading-tight drop-shadow-lg mt-10">
        Get the Financial Freedom You Deserve
      </div>

      {/* Kontainer Tombol */}
      <div className="mt-10 w-full flex justify-center">
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            onClick={() => openModal("Mulai")}
          >
            Mulai
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
            onClick={() => openModal("Seting")}
          >
            Seting
          </button>
        </div>
      </div>

      {/* Modal Popup dengan efek blur dan lebih lebar */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform scale-100 transition-all duration-300 ease-in-out text-white w-full max-w-2xl relative">
            
            {/* Tombol Close (X) di pojok kanan atas */}
            <button
              className="absolute top-4 right-4 text-white text-6xl font-bold hover:opacity-70 transition"
              onClick={closeModal}
            >
              ×
            </button>

            {buttonClicked === "Mulai" ? (
              <GameSetupDialog />
            ) : (
              <div className="text-center text-xl mb-4">
                Tombol "{buttonClicked}" Ditekan!
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
