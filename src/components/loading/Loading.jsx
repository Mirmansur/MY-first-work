import "./Loading.css"; // Create this CSS file to style your loader

const Loading = () => {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
