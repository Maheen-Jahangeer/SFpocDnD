import React, { useEffect, useState } from "react";
import { Button } from "components";
import axios from "axios";
import Cookies from "js-cookie";
import { API_BASE_URL } from "config/common";
import styles from "./styles.scss";

const Login = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    //initial call
    const codeGenerator = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}login/code`);
            const responseData = response.data;
            const code = responseData.code;
            Cookies.set("code", code);
            if (code) {
                setIsAdmin(true);
            }
        } catch (err) {
            console.log("error", err);
        }
    };
    useEffect(() => {
        codeGenerator();
    }, []);

    const accessTokenGenerator = async () => {
        try {
            const authCode = Cookies.get("code");
            const response = await axios.get(`${API_BASE_URL}login/token`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authCode
                }
            });
            const responseData = response.data;
            const accessToken = responseData.access_token;
            const refreshToken = responseData.refresh_token;
            Cookies.set("access_token", accessToken);
            Cookies.set("refresh_token", refreshToken);
        } catch (err) {
            console.log("failed to get access token", err);
        }
    };
    return (
        <div className={styles.loginWrapper}>
            <div className={styles.loginContainer}>
                <Button label="Login" variant="secondary" />
                {isAdmin && (
                    <>
                        <h6>OR</h6>
                        <Button
                            label="Salesforce Login"
                            onClick={accessTokenGenerator}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default Login;
