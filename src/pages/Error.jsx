import { useRouteError, useNavigate } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <h1 className="error-code">
        {error?.status || "Oops!"}
      </h1>

      <h2 className="error-title">
        Something Went Wrong
      </h2>

      <p className="error-message">
        {error?.statusText || "The page you are looking for doesn’t exist or broke reality."}
      </p>

      <button onClick={() => navigate("/")}>
        Go Back Home
      </button>
    </div>
  );
};

export default Error;
