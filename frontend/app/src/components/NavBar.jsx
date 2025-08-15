import React, { useState } from "react";
import Modal from "./Modal";
import CreateJobForm from "./CreateJobForm";

export default function NavBar({ onJobCreated }) {
  const [createOpen, setCreateOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleCreateJob = (jobData) => {
    if (jobData) {
       if (onJobCreated) onJobCreated();
    }
    setCreateOpen(false);
  };

  return (
    <header className="relative bg-white border border-[#fcfcfc] top-[2px] rounded-[122px] w-[890px] h-[80px] mx-auto my-[21px] flex items-center justify-center box-border shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-between w-full px-[20px]">
        <img src="/logo.svg" alt="Logo" className="w-[44px] h-[44.68px]" />
        <nav className="flex items-center justify-between gap-[20px]">
          {["Home", "Find Jobs", "Find Talents", "About us", "Testimonals"].map(
            (item, idx) => (
              <a
                key={idx}
                href="#"
                className="w-[102px] h-[48px] rounded-[12px] px-[5px] py-[5px] flex items-center justify-center gap-[11.14px] 
                             opacity-100 text-[#303030] font-medium text-[16px] 
                             transition-all duration-200 ease-in-out left-2 
                             hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-md "
              >
                {item}
              </a>
            )
          )}
        </nav>

        <button
          onClick={() => setCreateOpen(true)}
          className="w-[133px] h-[48px] rounded-[25px] bg-gradient-to-b from-[#A128FF] to-[#6100AD] 
                       font-semibold text-[16px] text-white 
                       transition-all duration-200 ease-in-out cursor-pointer
                       hover:translate-y-1 hover:shadow-lg hover:opacity-90"
        >
          Create Jobs
        </button>
      </div>
      {createOpen && (
        <Modal isOpen={createOpen} onClose={() => setCreateOpen(false)}>
          <CreateJobForm
            onSubmit={handleCreateJob}
            onClose={() => setCreateOpen(false)}
          />
        </Modal>
      )}
    </header>
  );
}
