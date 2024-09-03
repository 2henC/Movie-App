const CircularProgressBar = () => {
  return (
    <div>
      <svg width={"50px"} height={"50px"}>
        {/* Circle Base */}
        <circle
          r={"20px"}
          cx={"25px"}
          cy={"25px"}
          stroke="white"
          strokeWidth="2px"
        />

        {/* Circle dùng để tính và hiển thị điểm số  */}
        <circle
          r={"20px"}
          cx={"25px"}
          cy={"25px"}
          stroke="green"
          strokeWidth="2px"
          fill="none"
          // transform="rotate(-90 25 25)" // xoay 90 độ ngược chiều kim đồng hồ quanh tâm (25, 25)
          transform="rotate(-90)"
          style={{ transformOrigin: "center" }}
          // strokeDasharray={"1"} // dash = 1px; dash 1 | gap 1 | dash | gap | ...
          // strokeDasharray={"1 3"} // dash = 1px; gap = 3px; dash 1 | gap 3 | dash | gap | ...
          // Khi này chu vi = 2*pi*r = 2*3.14*20 = 125.6px
          strokeDasharray={125.6}
          // offset = 5px => chu vi mất đi 5px về phía bên phải bằng cách dịch chuyển điểm bắt đầu của dash về bên trái 5px
          strokeDashoffset={5}
          strokeLinecap="round"
        />
        <text
          x={"25px"}
          y={"27px"}
          fill="white"
          alignmentBaseline="middle"
          textAnchor="middle"
          // fontSize={"20px"}
        >
          95
        </text>
      </svg>
    </div>
  );
};
export default CircularProgressBar;
