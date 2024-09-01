const PaginaIndicator = () => {
  return (
    <div className="absolute bottom-[10%] right-8">
      <ul className="flex gap-1">
        <li className="h-2 w-14 cursor-pointer bg-slate-100"></li>
        <li className="h-2 w-14 cursor-pointer bg-slate-600"></li>
        <li className="h-2 w-14 cursor-pointer bg-slate-600"></li>
        <li className="h-2 w-14 cursor-pointer bg-slate-600"></li>
      </ul>
    </div>
  );
};
export default PaginaIndicator;
