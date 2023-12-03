import React from "react";

const TopBar = () => {
  const localStorageSpace = () => {
    let allStrings = "";
    for (const key of Object.keys(window.localStorage)) {
      allStrings += window.localStorage[key];
    }
    return allStrings
      ? 3 + (allStrings.length * 16) / (8 * 1024)
      : "Empty (0 KB)";
  };

  const maxStorageSize = 5 * 1024 * 1024;
  const storageUsedFloat = localStorageSpace();
  const storageUsed = parseInt(storageUsedFloat).toFixed(3);
  const StoragePercentage = (parseInt(storageUsed) / maxStorageSize) * 100;

  console.log(StoragePercentage.toFixed(2));
  return (
    <div className="p-4 bg-[#0E35FF] text-white">
      <div className="flex justify-between">
        <div>
          <p>Storage Used: {storageUsed && storageUsed}kb</p>
          <p> {StoragePercentage.toFixed(3)}%</p>
          <progress
            className="progress progress-secondary w-56  border"
            value={StoragePercentage.toFixed(3)}
            max="100"
          ></progress>
        </div>
        <div className="rounded border-2 border-black p-1 cursor-pointer">
          <p>Here Profile Pic and Name</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
