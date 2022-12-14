const loginLogout = async (event) => {
  event.preventDefault();
  const choice = event.target.textContent.trim();
  console.log(choice);

  if (choice === "Logout") {
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    console.log(response);
    if (response.ok) {
      document.location.replace("/login");
    } else {
      alert(response.statusText);
    }
  } else {
    document.location.replace("/login");
  }
};

document.querySelector(".auth").addEventListener("click", loginLogout);
