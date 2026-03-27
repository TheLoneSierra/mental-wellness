import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logoutUser = async () => {
            try {
                const token = localStorage.getItem("token");

                // 1. Call backend logout
                if (token) {
                    await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/logout`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    });
                }

            } catch (err) {
                console.error("Logout error:", err);
            } finally {
                // 2. DESTROY AUTH STATE (this is the real logout)
                localStorage.removeItem("token");
                localStorage.removeItem("user");

                // if you ever used sessionStorage
                sessionStorage.clear();

                // 3. Redirect to home
                navigate("/");
            }
        };

        logoutUser();
    }, [navigate]);

    return null;
};

export default Logout;