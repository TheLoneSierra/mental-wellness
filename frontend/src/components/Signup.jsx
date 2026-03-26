import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { register } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        setLoading(true);

        try {
            await register(email, password);
            navigate("/mood");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[#fbf9f4] font-[Manrope] text-[#31332e] h-screen flex flex-col overflow-hidden">

            {/* NAVBAR */}
            <header className="fixed top-0 w-full z-50 flex items-center h-16 px-6 bg-[#fbf9f4]/80 backdrop-blur-md">
                <span className="font-[Noto_Serif] text-2xl font-bold text-[#246965]">
                    SerenityAI
                </span>
            </header>

            {/* MAIN */}
            <main className="flex-1 flex items-center justify-center pt-16 px-4 sm:px-6 overflow-hidden">

                <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl overflow-hidden h-full shadow-lg">

                    {/* LEFT IMAGE */}
                    <div className="hidden lg:block relative h-full">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXL0Qye-GZpu0I3WPVS4Qz9fbQjnJgnKqf-MVmCb-6fhAwf1ksBj56qU6fzM79QkEaA3eqJu79HWZ_k1EzED2o8VzPwqwLySkDrVTMXLpERXU5vRuKyjLR9IE5NLOpFTaxYM4vU4PojqFErbPZXoK2djXKFkvkyVz0QRS27YzqrsfVmqbAU6N9PnQI0RKpjVVzzPSvX5nxsWWYDCzurkU0cwC5zO8pEMipQsxgWiU8Iw8Qmp0YR4eEhWpL89ONQ3U5IauVO2yF0wuy"
                            className="absolute inset-0 w-full h-full object-cover"
                            alt="Zen Sanctuary"
                        />

                        <div className="absolute inset-0 bg-gradient-to-br from-[#246965]/20 to-transparent"></div>

                        <div className="absolute bottom-16 left-12 right-12">
                            <h1 className="font-[Noto_Serif] text-4xl text-white mb-4 font-bold">
                                Begin your journey to wellness.
                            </h1>
                            <p className="text-lg text-white/90 leading-relaxed">
                                Join thousands of others in discovering a path to mindfulness,
                                clarity, and emotional well-being with SerenityAI.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 bg-[#fbf9f4] h-full overflow-hidden">

                        {/* HEADER */}
                        <div className="flex justify-between items-center mb-10">
                            <div>
                                <h2 className="font-[Noto_Serif] text-3xl font-bold mb-2">
                                    Create Account
                                </h2>
                                <p className="text-[#5e6059] text-sm">
                                    Start your wellness journey with us today.
                                </p>
                            </div>

                            <Link
                                to="/login"
                                className="text-[#246965] font-bold text-sm hover:opacity-80"
                            >
                                Sign in
                            </Link>
                        </div>

                        {/* ERROR */}
                        {error && (
                            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        {/* FORM */}
                        <form onSubmit={handleSubmit} className="space-y-5">

                            <div>
                                <label className="text-sm ml-2 text-[#5e6059]">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full px-6 py-4 rounded-xl bg-[#f5f4ed] border border-[#e3e3db] focus:ring-2 focus:ring-[#246965] focus:bg-white outline-none"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="text-sm ml-2 text-[#5e6059]">
                                    Password
                                </label>

                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="w-full px-6 py-4 rounded-xl bg-[#f5f4ed] border border-[#e3e3db] focus:ring-2 focus:ring-[#246965] focus:bg-white outline-none"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                    <button
                                        type="button"
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7a7b75]"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <AiOutlineEyeInvisible size={20} />
                                        ) : (
                                            <AiOutlineEye size={20} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="text-sm ml-2 text-[#5e6059]">
                                    Confirm Password
                                </label>

                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="w-full px-6 py-4 rounded-xl bg-[#f5f4ed] border border-[#e3e3db] focus:ring-2 focus:ring-[#246965] focus:bg-white outline-none"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />

                                    <button
                                        type="button"
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7a7b75]"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? (
                                            <AiOutlineEyeInvisible size={20} />
                                        ) : (
                                            <AiOutlineEye size={20} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 rounded-full bg-gradient-to-r from-[#246965] to-[#135d59] text-white font-bold text-lg"
                            >
                                {loading ? "Creating Account..." : "Create Account"}
                            </button>
                        </form>

                        <p className="text-center text-sm mt-6 text-[#5e6059]">
                            Already have an account?{" "}
                            <Link to="/login" className="text-[#246965] font-bold">
                                Sign in here
                            </Link>
                        </p>

                    </div>

                </div>

            </main>

            {/* FOOTER */}
            <footer className="py-4 text-center">
                <p className="text-xs text-[#7a7b75] opacity-60">
                    © 2026 SerenityAI. All rights reserved.
                </p>
            </footer>

        </div>
    );
};

export default Signup;