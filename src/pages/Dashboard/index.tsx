import React, { useState } from "react";
import { Button } from "components";
import axios from "axios";
import Cookies from "js-cookie";
import { API_BASE_URL } from "config/common";
import styles from "./styles.scss";

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const userGenerator = async () => {
        try {
            const accessToken = Cookies.get("accessToken");
            const response = await axios.get(`${API_BASE_URL}sf/users`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: accessToken
                }
            });
            const responseData = response.data;
            if (responseData.users) {
                setUsers(responseData.users);
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className={styles.dashboardWrapper}>
            <div className={styles.dashboardTitleContainer}>
                <h2>Dashboard</h2>
                <Button label="users" onClick={userGenerator} />
            </div>
            <div className={styles.dashboardUserWrapper}>
                {users && users.map((user) => <h4>{user}</h4>)}
            </div>
        </div>
    );
};

export default Dashboard;
