import re

def check_password_strength(password):
    score = 0
    feedback = []

    if len(password) >= 8:
        score += 1
    else:
        feedback.append("At least 8 characters")

    if re.search(r"[A-Z]", password):
        score += 1
    else:
        feedback.append("Add uppercase letters")

    if re.search(r"[a-z]", password):
        score += 1
    else:
        feedback.append("Add lowercase letters")

    if re.search(r"[0-9]", password):
        score += 1
    else:
        feedback.append("Add numbers")

    if re.search(r"[!@#$%^&*]", password):
        score += 1
    else:
        feedback.append("Add special symbols")

    if score <= 2:
        level = "Weak"
        color = "red"
    elif score == 3:
        level = "Medium"
        color = "orange"
    else:
        level = "Strong"
        color = "green"

    return level, color, feedback
