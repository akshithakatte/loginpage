const data = [
    { userName: "user1", password: "password1" },
    { userName: "user2", password: "password2" },
    // Add more user data as needed
  ];
  
  const handleLogin = () => {
    const userNameInput = document.getElementById("userName");
    const passwordInput = document.getElementById("password");
  
    const userName = userNameInput.value;
    const password = passwordInput.value;
  
    if (!userName || !password) {
      alert("Please fill in all fields");
      return false; // Prevent form submission
    }
  
    const user = data.find((user) => user.userName === userName);
  
    if (user) {
      if (user.password === password) {
        alert(`Welcome, ${userName}`);
        window.location.href = "https://www.google.com";
      } else {
        alert("Password is incorrect, please check again");
      }
    } else {
      alert("Incorrect username");
    }
  
    return false;
  };
  