interface AlertProps {
  variant: 'success' | 'error';
  text: string;
}

const Alert = ({ variant, text }: AlertProps) => {
  return (
    <div
      className={`shadow-lg mx-auto w-96 absolute top-0 right-0 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3 ${
        variant === 'success' ? 'bg-green-500' : 'bg-red-500'
      }`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-mdb-autohide="false"
    >
      <div
        className={`flex justify-between items-center py-2 px-3 bg-clip-padding border-b rounded-t-lg ${
          variant === 'success'
            ? 'bg-green-500 border-green-400'
            : 'bg-red-500 border-red-400'
        }`}
      >
        <p className="font-bold text-white flex items-center">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="check-circle"
            className="w-4 h-4 mr-2 fill-current"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
            ></path>
          </svg>
          Batik Maju Jaya
        </p>

        <div className="flex items-center">
          <p className="text-white opacity-90 text-xs">11 mins ago</p>
          <button
            type="button"
            className="btn-close btn-close-white box-content w-4 h-4 ml-2 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
            data-mdb-dismiss="toast"
            aria-label="Close"
          />
        </div>
      </div>

      <div className="p-3 bg-green-500 rounded-b-lg break-words text-white">
        {text}
      </div>
    </div>
  );
};

export default Alert;
