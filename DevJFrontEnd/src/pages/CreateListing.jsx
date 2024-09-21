import { useSelector } from "react-redux";
import "../../styles/CL.css";
import supabase from "../../utils/supabase";
import { useState } from "react";

export default function CreateListing() {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [rate, setRate] = useState(0);
  const [description, setDescription] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);
  const [age, setAge] = useState(0);
  const [rentType, setRentType] = useState("");
  const [image, setImage] = useState("");

  const user = useSelector((state) => state.cart.user);
  console.log(user);

  async function HandleSubmit(e) {
    e.preventDefault();
    let { data, error } = await supabase
      .from("Listings")
      .insert([
        {
          ProductName: productName,
          Quantity: quantity,
          Rate: rate,
          Description: description,
          isAvailable: isAvailable,
          AgeMonths: age,
          RentType: rentType,
          imgurl: image,
          UUID: user,
        },
      ])
      .select();
    if (error) console.log("Error inserting data:", error.message);
    console.log(data);
  }
  
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        color: "black",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          textDecoration: "underline",
        }}
      >
        <h1>Create Listing</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          width: "100%",
          height: "100%",
          color: "black",
          backgroundColor: "white",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            width: "75%",
            height: "75%",
            color: "black",
            gap: "15px",
          }}
          onSubmit={HandleSubmit}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
              width: "100%",
              color: "black",
              padding: "10px",
              backgroundColor: "white",
            }}
          >
            <div>
              <InputField
                text="ProductName"
                value={productName}
                type={"text"}
                setState={setProductName}
              />
              <InputField
                text="Quantity"
                value={quantity}
                type={"number"}
                setState={setQuantity}
              />
              <InputField
                text="Rate"
                value={rate}
                type={"number"}
                setState={setRate}
              />
            </div>

            <div>
              <InputField
                text="Description"
                value={description}
                type={"text"}
                setState={setDescription}
              />
              <InputField
                text="isAvailable"
                value={isAvailable}
                type={"text"}
                setState={setIsAvailable}
              />
              <InputField
                text="Age (months)"
                value={age}
                type={"number"}
                setState={setAge}
              />
            </div>

            <div>
              <InputField
                text="RentType"
                value={rentType}
                type={"text"}
                setState={setRentType}
              />
              <InputField
                text="Image"
                value={image}
                type={"text"}
                setState={setImage}
              />
            </div>
          </div>

          <button
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "lightgray",
              color: "black",
              border: "1px solid gray",
            }}
          >
            Create Listing
          </button>
        </form>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
export const InputField = ({ text, value, type, setState }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "start" }}
    >
      <label style={{ marginBottom: "4px", color: "black", fontWeight: 900 }}>
        {text}
      </label>
      <input
        type={type}
        style={{
          backgroundColor: "white",
          color: "black",
          width: "100%",
          border: "1px solid gray",
          padding: "20px",
          borderRadius: "8px",
        }}
        placeholder="Enter listing details"
        value={value}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
};
