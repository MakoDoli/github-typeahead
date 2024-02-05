export default function Spinner() {
  return (
    <div className="bg-gradient-to-r from-stone-800 via-stone-300 to-white w-[3rem] h-[3rem] absolute top-1/4 left-1/4 animate-spin rounded-full border-3 flex justify-center items-center">
      <div className="bg-white w-[2.5rem] h-[2.5rem] rounded-full"></div>
    </div>
  );
}
