function App() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.3)",
          display: "flex",
          width: "900px",
          height: "500px",
          padding: "1.5rem 1rem",
          borderRadius: "0.25rem",
        }}
      >
        <div>
          <h4>명함</h4>
          <div>
            이름: 이인우 Manager 전화번호: 010-2830-1103 이메일:
            liw0627@lavarwave.co.kr 부서: Tech-본부 / 서비스 개발실(팀)
            회사:(주)라바웨이브 www.lavarwave.co.kr 회사 위치: 서울특별시 강남구
            헌릉로571길 32 (세곡동) 우편 번호: 06376 회사 번호: 02-1811-9634
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
