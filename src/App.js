import "./App.css"; // App.css 파일에 추가된 스타일을 import

import React, { useState, useEffect } from "react";

const App = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch('http://192.168.0.12:8080/userInfo/showDB')
            .then(response => response.json())
            .then(data => setUserData(data));
    }, []);

    return (
        <div>
            <h1>DB 정보</h1>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>UserName</th>
                        <th>SearchTerm</th>
                        <th>GptTerm</th>
                        <th>SearchTime</th>
                        <th>ChatbotTime</th>
                        <th>GptTime</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user, index) => (
                        <tr key={index}>
                            <td>{user.userId}</td>
                            <td>{user.userName}</td>
                            <td>{user.searchTerm}</td>
                            <td>{user.gptTerm}</td>
                            <td>{user.searchTime}</td>
                            <td>{user.chatbotTime}</td>
                            <td>{user.gptTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
