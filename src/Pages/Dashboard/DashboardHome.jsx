import { useAuth } from "../../Context/AuthContext";


const DashboardHome = () =>{

    const user = useAuth();

    const username = user?.email ? user.email.split("@")[0] : "Admin";
    return (
        <>
        <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">
        Welcome, {username}!
      </h1>
      <p>This is your dashboard.</p>
    </div>
        </>
    )
}
export default DashboardHome;