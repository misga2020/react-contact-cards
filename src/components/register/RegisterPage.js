import RegisterForm from "./RegisterForm";

const RegisterPage = (props) => {
    return (
        <div>
            <RegisterForm />
            <div>
                <p>Aleardy have an account? <a href="/login">Login</a>.</p>
            </div>
        </div>
    )
}

export default RegisterPage;