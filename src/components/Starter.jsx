import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";

function SignUpButton() {
  const clerk = useClerk();

  return (
    <button className="sign-up-btn " onClick={() => clerk.openSignUp({})}>
      Sign up
    </button>
  );
}

function SignInButton() {
  const clerk = useClerk();

  return (
    <button className="sign-in-btn" onClick={() => clerk.openSignIn({})}>
      Sign in
    </button>
  );
}

function Starter() {
  return (
    <header className=" ">
      <nav>
        <SignedOut>
          <ul>
            <li>
              <SignUpButton />
            </li>

            <li>
              <SignInButton />
            </li>
          </ul>
        </SignedOut>

        <SignedIn></SignedIn>
      </nav>
    </header>
  );
}

export default Starter;
