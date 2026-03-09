import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <div className='flex justify-center items-center'>
        <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin'></div>
        <p className="ml-4 text-blue-500 font-semibold">{progress.toFixed(2)}%</p>
      </div>
    </Html>
  );
};

export default Loader;
