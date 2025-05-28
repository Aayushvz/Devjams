import "../../styles/key.css";
import SearchBar from "../io/SearchBar";

export default function Section1() {
  return (
    <>
      <div
        style={{
          alignItems: "center",
          width: "100%",
          height: "70%",
          textAlign: "center",
          color: "black",
          fontSize: 72,
          fontFamily: "Poppins",
          fontWeight: "600",
          wordWrap: "break-word",
        }}
      >
        <img
          src="/Vrent/lul_1.gif"
          width={"100%"}
          height={"100%"}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
            opacity: "70%",
          }}
          alt="background"
        />
        <div>Take Full Control Of Your</div>
        <div>Personal Needs at VIT</div>

        <SearchBar />
      </div>
      <div
        style={{
          position: "absolute",
          top: 179,
          left: 297,
        }}
        className="image"
      >
        <img src="/Vrent/Group316.png" width={111} height={116} alt="Group316" />
      </div>
      <div
        style={{
          position: "absolute",
          top: 374,
          left: 121,
        }}
        className="image"
      >
        <img src="/Vrent/Group315.png" width={193} height={192} alt="Group315" />
      </div>
      <div
        style={{
          position: "absolute",
          top: 600,
          left: 320,
        }}
        className="image"
      >
        <img src="/Vrent/Group317.png" width={300} height={280} alt="Group317" />
      </div>
      <div
        style={{
          position: "absolute",
          top: 179,
          right: 253,
        }}
        className="image"
      >
        <img src="/Vrent/Group319.png" width={150} height={150} alt="Group319" />
      </div>
      <div
        style={{
          position: "absolute",
          top: 450,
          right: 222,
        }}
        className="image"
      >
        <img src="/Vrent/Group318.png" width={345} height={363} alt="Group318" />
      </div>
    </>
  );
}
