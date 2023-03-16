const HomePage = () => {
  return (
    <div className="container mx-auto">
      <div className="p-3 text-xl ">
        Welcome to my blog! 🤓👋
        <p className="text-gray-500">
          Here, you will find articles on a variety of topics, including
          technology, science, health, and lifestyle. I hope you enjoy reading
          my posts and find them informative and engaging.
        </p>
      </div>

      <div className="grid grid-cols-2 shadow p-5 rounded-lg select-none">
        <article>
          <span className="font-medium">Recent Articles:</span>
          <ol className="cursor-pointer p-3">
            <li className="my-3">
              1. How to Stay Productive While Working from Home{" "}
            </li>
            <li className="my-3">
              2. The Benefits of Regular Exercise for Mental Health{" "}
            </li>
            <li className="my-3">
              3. The Advantages of Renewable Energy Sources{" "}
            </li>
            <li className="my-3">
              4. How to Choose the Right Diet Plan for Your Needs
            </li>
            <li className="my-3">5. Tips for Better Sleep Hygiene</li>
          </ol>
        </article>

        <div>
          <span className="font-medium">
            Most watched: How to Choose the Right Diet Plan for Your Needs
          </span>

          <ol className="cursor-pointer">
            <li className="my-3">
              Choosing the right diet plan can be overwhelming, especially with
              so many options available. Here are some tips to help you make the
              right choice:
            </li>
            <li className="my-3">
              1. Consider your goals: What are you hoping to achieve by changing
              your diet? Are you looking to lose weight, improve your health, or
              manage a specific condition?
            </li>
            <li className="my-3">
              2. Think about your lifestyle: Consider your schedule, budget, and
              any dietary restrictions you may have when choosing a diet plan.
            </li>
            <li className="my-3">
              3. Consult a professional: If you are unsure which diet plan is
              right for you, consider consulting a registered dietitian or
              nutritionist for personalized advice.
            </li>
          </ol>
        </div>
      </div>
      <p className="footer text-gray-400">
        © 2023-2024 BLOG, Myanmar. All rights reserved.
      </p>
    </div>
  );
};

export default HomePage;
