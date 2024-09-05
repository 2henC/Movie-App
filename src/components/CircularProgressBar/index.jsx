import PropTypes from "prop-types";
const CircularProgressBar = ({ size = 3, strokeWidth = 0.25, voteAverage }) => {
  const radius = size / 2 - strokeWidth;
  voteAverage = Math.round(voteAverage * 10);
  return (
    <div>
      <svg width={`${size}vw`} height={`${size}vw`}>
        {/* Circle Base */}
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          stroke="white"
          strokeWidth={`${strokeWidth}vw`}
        />

        {/* Circle dùng để tính và hiển thị điểm số  */}
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          stroke={
            voteAverage > 70 ? "green" : voteAverage > 40 ? "yellow" : "red"
          }
          strokeWidth={`${strokeWidth}vw`}
          fill="none"
          // transform="rotate(-90 25 25)" // xoay 90 độ ngược chiều kim đồng hồ quanh tâm (25, 25)
          transform="rotate(-90)"
          style={{ transformOrigin: "center" }}
          // strokeDasharray={"1"} // dash = 1px; dash 1 | gap 1 | dash | gap | ...
          // strokeDasharray={"1 3"} // dash = 1px; gap = 3px; dash 1 | gap 3 | dash | gap | ...
          // Khi này chu vi = 2*pi*r = 2*3.14*20 = 125.6px
          strokeDasharray={`${2 * Math.PI * radius}vw`}
          // offset = 5px => chu vi mất đi 5px về phía bên phải bằng cách dịch chuyển điểm bắt đầu của dash về bên trái 5px
          strokeDashoffset={` ${2 * Math.PI * radius - (voteAverage / 100) * 2 * Math.PI * radius}vw`}
          strokeLinecap="round" // Đầu mút của đường tròn là round (có thể thay bằng butt hoặc square)
        />
        <text
          x={`${size / 2}vw`}
          y={`${size / 2}vw`}
          fill="white"
          alignmentBaseline="middle"
          textAnchor="middle"
          fontSize={"1vw"}
          fontWeight={"bold"}
        >
          {voteAverage}
        </text>
      </svg>
    </div>
  );
};

CircularProgressBar.propTypes = {
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  voteAverage: PropTypes.number,
};

export default CircularProgressBar;
