const reviewFormHandler = async (event) => {
  event.preventDefault();

  const review = document.querySelector("#review").value.trim();

  if (review) {
    const response = await fetch("/api/reviews", {
      method: "POST",
      body: JSON.stringify({ review }),
      // headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#review-form")
  .addEventListener("submit", reviewFormHandler);
