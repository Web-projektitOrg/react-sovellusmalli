import React from "react";
// import { Button } from "../components/AuthForm";
// import { useAuth } from "../context/Auth";

function Unconfirmed(props) {
// const { setAuthTokens } = useAuth();
console.log("Rendering Unconfirmed")

return (
    <div class="page-header">
    <h1>
        Hello, { props.username }!
    </h1>
    <h3>You have not confirmed your account yet.</h3>
    <p>
        Before you can access this site you need to confirm your account.
        Check your inbox, you should have received an email with a confirmation link.
    </p>
    <p>
        Need another confirmation email?
        <a href="{{ url_for('auth.resend_confirmation') }}">Click here</a>
    </p>
</div>
)
}

export default Unconfirmed;