import { TailSpin } from "react-loader-spinner";

function CustomLoading() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <TailSpin color="#3B82F6" />
    </div>
  );
}

export default CustomLoading;
