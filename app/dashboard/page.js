import Dashboard from "@/components/Dashboard";
import Loading from "@/components/Loading";
import Login from "@/components/Login";
import Main from "@/components/Main";
import { useAuth } from "@/context/AuthContext";

export const metadata = {
    title:"Rood • Dashboard"
};

export default function DashboardPage() {
    // const isAuthenticated = true;

    return (
        <Main>
            <Dashboard />
        </Main>
    );
}
