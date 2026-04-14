import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import "../protected.scss"

const Protected = ({ children }) => {
    const { loading, user } = useAuth();

    if (loading) {
        return (
            <main className="loading-screen">
                <div className="loader"></div>
                <p>Checking authentication...</p>
            </main>
        );
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};



export default Protected;