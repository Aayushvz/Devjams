import ListingCard from "../ListingCard";
import "../../styles/Section3.css";

export default function Section3() {
  const DummyData = [
    {
      id: 1,
      ProductName: "Laptop",
      Quantity: 10,
      Rate: 300,
      UUID: "550e8400-e29b-41d4-a716-446655440000",
      Description:
        "High-performance laptops suitable for programming and design.",
      isAvailable: true,
      age_months: 24,
      RentType: "daily",
      date_of_rent: "10-04-2024",
      time_of_rent: "10:30:00",
    },
    {
      id: 2,
      ProductName: "Projector",
      Quantity: 5,
      Rate: 500,
      UUID: "550e8400-e29b-41d4-a716-446655440001",
      Description: "HD projectors for presentations and movie nights.",
      isAvailable: true,
      age_months: 36,
      RentType: "daily",
      date_of_rent: "12-05-2024",
      time_of_rent: "14:00:00",
    },
    {
      id: 3,
      ProductName: "Textbook - Algorithms",
      Quantity: 20,
      Rate: 50,
      UUID: "550e8400-e29b-41d4-a716-446655440002",
      Description:
        "Comprehensive algorithms textbook for computer science students.",
      isAvailable: true,
      age_months: 12,
      RentType: "daily",
      date_of_rent: null,
      time_of_rent: null,
    },
    {
      id: 4,
      ProductName: "Cricket Set",
      Quantity: 8,
      Rate: 200,
      UUID: "550e8400-e29b-41d4-a716-446655440003",
      Description: "Complete cricket set including bats, balls, and stumps.",
      isAvailable: true,
      age_months: 18,
      RentType: "daily",
      date_of_rent: "15-06-2024",
      time_of_rent: "16:45:00",
    },
    {
      id: 5,
      ProductName: "DSLR Camera",
      Quantity: 7,
      Rate: 400,
      UUID: "550e8400-e29b-41d4-a716-446655440004",
      Description: "Professional DSLR cameras for photography enthusiasts.",
      isAvailable: true,
      age_months: 30,
      RentType: "daily",
      date_of_rent: null,
      time_of_rent: null,
    },
    {
      id: 6,
      ProductName: "Guitar",
      Quantity: 15,
      Rate: 150,
      UUID: "550e8400-e29b-41d4-a716-446655440005",
      Description: "Acoustic guitars for music practice and performances.",
      isAvailable: true,
      age_months: 20,
      RentType: "hourly",
      date_of_rent: "01-07-2024",
      time_of_rent: "09:15:00",
    },
    {
      id: 7,
      ProductName: "Bicycle",
      Quantity: 12,
      Rate: 100,
      UUID: "550e8400-e29b-41d4-a716-446655440006",
      Description: "Mountain and road bicycles for easy campus commuting.",
      isAvailable: true,
      age_months: 15,
      RentType: "daily",
      date_of_rent: null,
      time_of_rent: null,
    },
    {
      id: 8,
      ProductName: "Power Bank",
      Quantity: 30,
      Rate: 20,
      UUID: "550e8400-e29b-41d4-a716-446655440007",
      Description:
        "Portable power banks to keep your devices charged on the go.",
      isAvailable: true,
      age_months: 6,
      RentType: "hourly",
      date_of_rent: "05-08-2024",
      time_of_rent: "11:00:00",
    },
    {
      id: 9,
      ProductName: "Blender",
      Quantity: 6,
      Rate: 250,
      UUID: "550e8400-e29b-41d4-a716-446655440008",
      Description: "Kitchen blender for making smoothies and shakes.",
      isAvailable: true,
      age_months: 9,
      RentType: "daily",
      date_of_rent: null,
      time_of_rent: null,
    },
    {
      id: 10,
      ProductName: "Study Table",
      Quantity: 10,
      Rate: 350,
      UUID: "550e8400-e29b-41d4-a716-446655440009",
      Description: "Ergonomic study tables for comfortable studying and work.",
      isAvailable: true,
      age_months: 27,
      RentType: "daily",
      date_of_rent: "10-09-2024",
      time_of_rent: "13:30:00",
    },
  ];

  return (
    <>
      <div className="section-title">
        Available <br /> Rentals
      </div>
      <div className="listing-grid">
        {DummyData.map((item) => (
          <ListingCard key={item.id} product={item} />
        ))}
      </div>
    </>
  );
}
