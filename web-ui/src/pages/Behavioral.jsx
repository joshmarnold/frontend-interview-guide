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
            examples ready. greatfrontend.com has a great guide.
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
    </div>
  );
};

export default Behavioral;
