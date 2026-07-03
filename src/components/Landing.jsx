import "./Landing.css";

const Landing = () => {
  return (
    <>
      <div className="landing-container">
        <aside>
          <h1>
            Conference Expense <br />
            Planner
          </h1>
          <p>Organize your event budget with confidence.</p>
          <button>Get Started</button>
        </aside>
        <article>
          <p>
            Welcome to BudgetEase Solutions, where we make conference budgeting
            simple and efficient. Our platform is designed to help you organize
            expenses, monitor costs, and keep your event finances under control
            from start to finish.
          </p>
          <p>
            Our Conference Expense Planner provides an easy-to-use interface for
            tracking every aspect of your event budget. From venue costs and
            catering to transportation and equipment, you can manage everything
            in one place.
          </p>
          <p>
            Whether you're planning a business conference, workshop, seminar, or
            corporate meeting, our solution helps you stay organized, reduce
            unnecessary spending, and make smarter financial decisions with
            confidence.
          </p>
        </article>
      </div>
    </>
  );
};

export default Landing;
