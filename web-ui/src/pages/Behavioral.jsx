import { IconExternalLink, IconLink } from "@tabler/icons-react";

const Behavioral = () => {
  return (
    <div>
      {/* https://www.greatfrontend.com/behavioral-interview-guidebook */}
      <h4>
        <a
          href="https://www.greatfrontend.com/behavioral-interview-guidebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          greatfrontend.com/behavorial-interview-guidebook
          <IconExternalLink size="1rem" />
        </a>{" "}
        is a great guide.
      </h4>
      <div>
        <h3>My Personal Tips</h3>
        <ul>
          <li>
            <strong>Be honest:</strong> If you don't know something, say so.
            Don't risk it and try to fake it. Follow up questions will expose
            you.
          </li>
          <li>
            <strong>Be specific:</strong> Interviewers want to hear about your
            experiences.
          </li>
          <li>
            <strong>Be prepared:</strong> Review the STAR method and have
            examples ready.
            <ul>
              <li>
                Figure out exactly what's expected of you at your level.{" "}
                <a
                  href="https://www.greatfrontend.com/behavioral-interview-guidebook#typical-behavioral-interview-leveling-expectations"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  greatfrontend.com/behavioral-interview-leveling-expectations
                  <IconExternalLink size="1rem" />
                </a>
              </li>
              <li>
                Prepare 10-15 stories of past experience. Write them down and
                refer to them during the interview.
              </li>
              <li>
                Find 20-30 behavioral questions online and make sure you can
                answer them with your stories. This is efficient because you
                only have to practice those stories. The main thing to pracitce
                is identifying quickly which story to use for each question.
              </li>
              <li>
                <strong>Dont reuse stories:</strong> Its best to have a backup
                for each story.
              </li>
              <li>
                Have results ready for each story. Quantifiable results are
                best.
                <div className="flex between" style={{ margin: "15px 0" }}>
                  <div>
                    <h4 style={{ margin: 0 }}>Qualitative Results:</h4>
                    <ul>
                      <li>Enhanced customer satisfaction</li>
                      <li>Improved team collaboration</li>
                      <li>Increased trust in the platform</li>
                      <li>Reduced future incidents</li>
                      <li>Streamlined operations</li>
                      <li>Strengthened product reliability</li>
                      <li>Elevated user experience</li>
                      <li>Increased feature adoption</li>
                    </ul>
                  </div>
                  <div>
                    <h4 style={{ margin: 0 }}>Quantifiable Results:</h4>
                    <ul>
                      <li>Reduced incident reports by X%</li>
                      <li>Increased feature usage by Y%</li>
                      <li>Decreased customer complaints by Z%</li>
                      <li>Improved response time by A hours</li>
                      <li>Enhanced performance efficiency by B%</li>
                      <li>Increased customer retention rate by C%</li>
                      <li>Saved D hours of manual work per week</li>
                      <li>Achieved E% completion ahead of schedule</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <strong>Be confident:</strong> You've made it this far. You're
            qualified.
          </li>
          <li>
            <strong>Be yourself:</strong> You're not just a developer. You're a
            person.
          </li>
        </ul>
      </div>
      <br></br>
      <p>
        Also, dont forget the basics. "Tell me about yourself", "Why do you want
        to work here"
      </p>

      <div className="divider"></div>

      <p>
        The following is a summary and example of the STAR method. Again, the
        greatfrontend.com is a more comprehensive guide.
      </p>
      <p>Follow the STAR method when answering behavioral questions:</p>
      <ul>
        <li>
          <strong>Situation:</strong> Describe the situation you were in or the
          task that you needed to accomplish. You must describe a specific event
          or situation, not a generalized description of what you have done in
          the past. Be sure to give enough detail for the interviewer to
          understand.
        </li>
        <li>
          <strong>Task:</strong> What goal were you working towards?
        </li>
        <li>
          <strong>Action:</strong> Describe the actions you took to address the
          situation with an appropriate amount of detail and keep the focus on
          you. What specific steps did you take and what was your particular
          contribution? Be careful that you don't describe what the team or
          group did when talking about a project, but what you actually did. Use
          the word "I," not "we" when describing actions.
        </li>
        <li>
          <strong>Result:</strong> Describe the outcome of your actions and
          don't be shy about taking credit for your behavior. What happened? How
          did the event end? What did you accomplish? What did you learn?
        </li>
      </ul>
      <br></br>
      <p>
        <strong>Example:</strong> "Tell me about a time when you optimized an
        application's performance. What was the problem, and how did you solve
        it?"
      </p>
      <p>
        <strong>STAR Method:</strong>
      </p>
      <ul>
        <li>
          <strong>Situation:</strong> "In my previous role, our e-commerce
          application experienced slow loading times during peak traffic hours,
          leading to a high cart abandonment rate."
        </li>
        <li>
          <strong>Task:</strong> "I was tasked with identifying the performance
          bottlenecks and implementing optimizations to improve the
          application's speed and user experience."
        </li>
        <li>
          <strong>Action:</strong> "I conducted a thorough performance analysis
          using profiling tools and identified that the database queries were
          the main bottleneck. I optimized the queries by adding appropriate
          indexes, reducing the number of round trips to the database, and
          implementing caching mechanisms. I also minified and bundled the
          front-end assets, employed lazy loading for non-critical resources,
          and implemented server-side rendering for faster initial page loads."
        </li>
        <li>
          <strong>Result:</strong> "The optimizations I implemented resulted in
          a 60% reduction in average page load time, leading to a 20% increase
          in conversion rates and a significant reduction in cart abandonment.
          The improved performance also received positive feedback from users
          and stakeholders. This experience strengthened my skills in
          performance optimization and taught me the importance of proactive
          monitoring and continuous improvement."
        </li>
      </ul>
    </div>
  );
};

export default Behavioral;
