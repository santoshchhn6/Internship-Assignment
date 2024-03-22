const ProgressBar = ({ percentage = 0 }) => {
  return (
    <>
      <h4>Progress</h4>
      <div
        style={{
          background: "white",
          border: "1px solid #8884d8",
          width: "100%",
          height: "40px",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            background: "#8884d8",
            width: `${percentage}%`,
            height: "40px",
          }}
        ></div>
        <span>{percentage}%</span>
      </div>
    </>
  );
};

export default ProgressBar;
