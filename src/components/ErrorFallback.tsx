interface Iprops {
  error: error;
  resetErrorBoundary: () => void;
}

interface error {
  message: string;
}

export function ErrorFallback(props: Iprops) {
  console.log('error')
  const { error, resetErrorBoundary } = props;
  return (
    <>
      <div className="alert alert-warning w-100" role="alert">
        {error.message}
      </div>
      <button className="border-1" onClick={resetErrorBoundary}>
          Try Again
        </button>
    </>
  );
}
