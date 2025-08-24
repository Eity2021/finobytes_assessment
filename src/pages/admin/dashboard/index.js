import Main from "./Main";

export default function AdminDashboard() {
  const auth = JSON.parse(localStorage.getItem("auth"));
  return (
    <div >
      <Main />
    </div>

  )
}
