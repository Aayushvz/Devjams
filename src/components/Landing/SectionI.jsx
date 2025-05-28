import { getImageUrl } from "../../utils/imageUtils";

export default function SectionI() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}
      >
        <h2 style={
            {
                width: "70%",
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                fontSize: 72,
                fontFamily: "Poppins",
                fontWeight: "600",
                
            }
        }>Services Available</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            textDecoration: "underline",
          }}
        >
          <img src={getImageUrl("pi4.png")} width={650} height={252} />
          <img src={getImageUrl("pi4.png")} width={650} height={252} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            textDecoration: "underline",
          }}
        >
          <img src={getImageUrl("pi4.png")} width={650} height={252} />
          <img src={getImageUrl("pi4.png")} width={650} height={252} />
        </div>
      </div>
    </>
  );
}
