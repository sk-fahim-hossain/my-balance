import { Link } from "react-router-dom";

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

  const storageUsed = localStorageSpace();

  const maxStorageSize = 5 * 1024 * 1024;
  let StoragePercentage = (parseInt(storageUsed) / maxStorageSize) * 100;

  const progressValue = 0;
  return (
    <div className="p-4 bg-[#0E35FF] text-white">
      <div className="flex justify-between">
        <div>
          <span>
            Storage Used: {storageUsed} kb{" "}
            {typeof StoragePercentage === Number
              ? StoragePercentage + "%"
              : "Not Used"}
          </span>
          <br />
          <progress
            className="progress progress-secondary w-56  border"
            defaultValue={3}
            value={progressValue}
            max="100"
          ></progress>
        </div>
        <div className="flex justify-center items-center">
          <p className="rounded-badge border-2 border-black p-2 cursor-pointer justify-center items-center hover:bg-blue-900">
            <Link to="/profile">Profile</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
