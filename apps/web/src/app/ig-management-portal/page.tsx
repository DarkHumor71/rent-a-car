"use client";

import { useState, type SubmitEvent } from "react";
import { publicAssetPath } from "@/data/site-config";
import styles from "./management-login.module.scss";

export default function ManagementLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("");

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(
      "This portal is ready for secure authentication, but no sign-in service is connected yet.",
    );
  }

  return (
    <main className={styles.managementLogin}>
      <section
        className={styles.managementLoginPanel}
        aria-labelledby="login-title"
      >
        <div className={styles.managementLoginBrand}>
          <a href="/" aria-label="Infinity Group home">
            <img
              className={styles.managementLoginLogo}
              src={publicAssetPath("/brand/Infinity-Logo.webp")}
              alt="Infinity Group Lebanon"
            />
          </a>
          <span>Management Portal</span>
        </div>

        <div className={styles.managementLoginContent}>
          <p className={styles.managementLoginKicker}>
            <span /> Authorized personnel
          </p>
          <h1 id="login-title">Welcome back</h1>
          <p className={styles.managementLoginIntro}>
            Sign in to manage the Infinity Group fleet and reservations.
          </p>

          <form className={styles.managementLoginForm} onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              placeholder="Enter your username"
              required
            />

            <div className={styles.managementPasswordHeading}>
              <label htmlFor="password">Password</label>
            </div>
            <div className={styles.managementPasswordField}>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((visible) => !visible)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <button className={styles.managementSignIn} type="submit">
              Sign in <span aria-hidden="true">→</span>
            </button>
            {status ? (
              <p className={styles.managementLoginStatus} role="status">
                {status}
              </p>
            ) : null}
          </form>

          <p className={styles.managementLoginHelp}>
            Need access? Contact your system administrator.
          </p>
        </div>

        <p className={styles.managementLoginCopyright}>
          © {new Date().getFullYear()} Infinity Group Lebanon
        </p>
      </section>

      <aside className={styles.managementLoginVisual} aria-hidden="true">
        <div className={styles.managementLoginVisualCopy}>
          <p>Infinity Group</p>
          <h2>
            Fleet operations,
            <br />
            <em>clearly managed.</em>
          </h2>
        </div>
        <div className="management-login-road" />
      </aside>
    </main>
  );
}
