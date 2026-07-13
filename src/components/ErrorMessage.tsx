interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="max-w-2xl mx-auto mt-10 bg-red-500/10 border border-red-500 text-red-400 rounded-xl p-5 text-center">
      {message}
    </div>
  );
};

export default ErrorMessage;