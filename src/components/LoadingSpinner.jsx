const LoadingSpinner = ({ message = "Loading..." }) => (
  <div className="text-center my-8">
    <div className="inline-block w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin mb-4"></div>
    <p className="text-white text-lg font-medium">{message}</p>
  </div>
);
export default LoadingSpinner;
