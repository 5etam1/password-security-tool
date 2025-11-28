const passwordInput = document.getElementById("password");
const levelSpan = document.getElementById("level");
const reqLength = document.getElementById("req-length");
const reqUpper = document.getElementById("req-uppercase");
const reqLower = document.getElementById("req-lowercase");
const reqNumber = document.getElementById("req-number");
const reqSpecial = document.getElementById("req-special");

passwordInput.addEventListener("input", () => {
  const pwd = passwordInput.value;
  let score = 0;

  // Check each requirement
  if (pwd.length >= 8) { score++; reqLength.style.color = "lime"; } else { reqLength.style.color = "red"; }
  if (/[A-Z]/.test(pwd)) { score++; reqUpper.style.color = "lime"; } else { reqUpper.style.color = "red"; }
  if (/[a-z]/.test(pwd)) { score++; reqLower.style.color = "lime"; } else { reqLower.style.color = "red"; }
  if (/[0-9]/.test(pwd)) { score++; reqNumber.style.color = "lime"; } else { reqNumber.style.color = "red"; }
  if (/[!@#$%^&*]/.test(pwd)) { score++; reqSpecial.style.color = "lime"; } else { reqSpecial.style.color = "red"; }

  // Set password strength
  if (score <= 2) { levelSpan.textContent = "Weak"; levelSpan.style.color = "red"; }
  else if (score === 3) { levelSpan.textContent = "Medium"; levelSpan.style.color = "orange"; }
  else { levelSpan.textContent = "Strong"; levelSpan.style.color = "lime"; }
});
