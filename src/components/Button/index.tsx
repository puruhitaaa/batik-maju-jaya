interface ButtonProps {
  variant:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  text: string;
  type: 'button' | 'submit';
  isDisabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  text,
  type,
  variant,
  onClick,
  isDisabled = false,
}: ButtonProps) => {
  switch (variant) {
    case 'primary':
      return (
        <button
          disabled={isDisabled}
          type={type}
          onClick={onClick}
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:bg-blue-300"
        >
          {text}
        </button>
      );
    case 'secondary':
      return (
        <button
          disabled={isDisabled}
          type={type}
          onClick={onClick}
          className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:bg-purple-300"
        >
          {text}
        </button>
      );
    case 'success':
      return (
        <button
          disabled={isDisabled}
          type={type}
          onClick={onClick}
          className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:bg-green-300"
        >
          {text}
        </button>
      );
    case 'danger':
      return (
        <button
          disabled={isDisabled}
          type={type}
          onClick={onClick}
          className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:bg-red-300"
        >
          {text}
        </button>
      );
    case 'warning':
      return (
        <button
          disabled={isDisabled}
          type={type}
          onClick={onClick}
          className="inline-block px-6 py-2.5 bg-amber-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-amber-600 hover:shadow-lg focus:bg-amber-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-700 active:shadow-lg transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:bg-amber-300"
        >
          {text}
        </button>
      );
    case 'info':
      return (
        <button
          disabled={isDisabled}
          type={type}
          onClick={onClick}
          className="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:bg-blue-300"
        >
          {text}
        </button>
      );
    case 'light':
      return (
        <button
          disabled={isDisabled}
          type={type}
          onClick={onClick}
          className="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:bg-gray-100"
        >
          {text}
        </button>
      );
    case 'dark':
      return (
        <button
          disabled={isDisabled}
          type={type}
          onClick={onClick}
          className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          {text}
        </button>
      );
    default:
      return <button>Hello world</button>;
  }
};

export default Button;
