const Loading = () => {
  return (
    <div className="flex h-[50vw] flex-row items-center justify-center gap-2">
      <div className="h-4 w-4 animate-bounce rounded-full bg-blue-700"></div>
      <div className="h-4 w-4 animate-bounce rounded-full bg-blue-700 [animation-delay:-.3s]"></div>
      <div className="h-4 w-4 animate-bounce rounded-full bg-blue-700 [animation-delay:-.5s]"></div>
    </div>
  );
};
export default Loading;
