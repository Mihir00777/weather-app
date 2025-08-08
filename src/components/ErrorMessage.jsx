const ErrorMessage = ({ message, onDismiss }) => (
  <div className="bg-red-500/20 backdrop-blur-md border border-red-400/30 rounded-2xl p-4 md:p-6 mb-8 animate-fade-in">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <h4 className="text-white font-semibold mb-2">Oops! Something went wrong</h4>
        <p className="text-white/90">{message}</p>
      </div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="ml-4 p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      )}
    </div>
  </div>
);

export default ErrorMessage;
