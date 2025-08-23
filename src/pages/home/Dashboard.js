
import Cards from "./Cards";
import Charts from "./Charts";

export default function Dashboard() {
  const auth = JSON.parse(localStorage.getItem("auth"));
  console.log("auth" ,auth)
  return (
    <div >
      Dashboard
    </div>

  )
}
