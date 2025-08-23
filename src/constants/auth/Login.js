import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../features/auth/authApi";
import { userLoggedIn } from "../../features/auth/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const [resLogin, { data, isLoading, error: loginError }] = useLoginMutation();

    useEffect(() => {
    if (data?.token) {
      dispatch(userLoggedIn());
      // dispatch(setUser(data));
      navigate("/");
    }
  }, [data, dispatch]);
    
  // On form submit
  const onSubmit = (formData) => {
    console.log(formData); 
    resLogin({
      email: formData.email,
      password: formData.password,
    });

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-primary"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Minimum 12 characters" } })}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-primary"
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}

          <button
            type="submit"
            className="bg-primary text-white p-2 rounded hover:bg-primary transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
