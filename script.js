const quotes = [
  `"Don’t be intimidated by what you don’t know. It can be your greatest strength." – Sara Blakely`,
  `"Success is not final; failure is not fatal. It is the courage to continue that counts." – Winston Churchill`,
  `"The best way to predict the future is to create it." – Peter Drucker`,
  `"Efficiency is doing things right; effectiveness is doing the right things." – Peter Drucker`,
  `"Innovation distinguishes between a leader and a follower." – Steve Jobs`,
  `"Great things in business are never done by one person; they’re done by a team." – Steve Jobs`,
  `"Quality is not an act, it is a habit." – Aristotle`,
  `"Small daily improvements lead to stunning results." – Robin Sharma`,
  `"Hard work beats talent when talent doesn’t work hard."`,
  `"Focus on progress, not perfection."`,
  `"Your attitude determines your direction."`,
  `"Success usually comes to those who are too busy to be looking for it." – Henry David Thoreau`,
  `"Work smart, stay humble."`,
  `"Consistency builds trust and excellence."`,
  `"Every challenge is an opportunity to grow."`,
  `"Professionalism is not about the job you do, but how you do it."`,
  `"Teamwork makes complex goals achievable."`,
  `"Discipline today leads to success tomorrow."`,
  `"Continuous learning is the key to staying relevant."`,
  `"Excellence is achieved through focus, effort, and integrity."`
];

// Greeting based on time
function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  if (hour < 21) return "Good Evening";
  return "Good Night";
}

// Daily quote logic
function getQuoteOfTheDay() {
  const today = new Date().toDateString();
  const savedDate = localStorage.getItem("quoteDate");

  if (savedDate !== today) {
    const index = Math.floor(Math.random() * quotes.length);
    localStorage.setItem("dailyQuote", quotes[index]);
    localStorage.setItem("quoteDate", today);
  }

  return localStorage.getItem("dailyQuote");
}

// Set content
document.getElementById("greeting").innerText = getGreeting();
document.getElementById("quote").innerText = getQuoteOfTheDay();
