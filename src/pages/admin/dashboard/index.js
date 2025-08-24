import Main from "./Main";

export default function AdminDashboard() {
  const auth = JSON.parse(localStorage.getItem("auth"));
  console.log("auth", auth)
  return (
    <div >
      <Main />
    </div>

  )
}
