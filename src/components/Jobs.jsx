import { useState, useEffect } from "react";
import LocationPin from "../assets/icons/Location.svg";
import Share from "../assets/icons/Share.svg";
import Button from "./Button.jsx";

// Helper function to highlight text
function highlightText(text, query, showHighlight) {
  if (!query || !showHighlight) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.split(regex).map((part, index) =>
    regex.test(part) ? (
      <span key={index} className="highlight">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function JobListings({ jobsData, searchTerm }) {
  const [visibleJobs, setVisibleJobs] = useState(12);
  const [showHighlight, setShowHighlight] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = () => {
    if (isLoading) return; // prevent multiple clicks

    setIsLoading(true);

    // ⏳ run actual load after 2s
    setTimeout(() => {
      setVisibleJobs((prev) => prev + 12);
      setIsLoading(false);
    }, 2000);
  };

  // Trigger highlight for 3 seconds whenever searchTerm changes
  useEffect(() => {
    if (searchTerm.position || searchTerm.location) {
      setShowHighlight(true);
      const timer = setTimeout(() => setShowHighlight(false), 3000);
      return () => clearTimeout(timer);
    } else {
      setShowHighlight(false);
    }
  }, [searchTerm]);

  const filteredJobs = jobsData.filter((job) => {
    if (!searchTerm.position && !searchTerm.location) return true;

    const matchesPosition = job.title
      .toLowerCase()
      .includes(searchTerm.position.toLowerCase());
    const matchesLocation = job.location
      .toLowerCase()
      .includes(searchTerm.location.toLowerCase());

    return matchesPosition && matchesLocation;
  });

  return (
    <section className="jobs-section">
      <div className="container">
        <h3 className="section-title" data-aos="fade">
          Popular Openings Today
        </h3>

        <div className="jobs-grid">
          {filteredJobs.length > 0 ? (
            filteredJobs.slice(0, visibleJobs).map((job, index) => (
              <div
                key={job.id}
                className="job-card"
                data-aos="fade"
                data-aos-delay={index * 100}
              >
                <div className="job-img-wrap">
                  <img src={job.image} alt={job.title} className="job-image" />
                  <div className="job-details">
                    <span className="job-salary">Salary: {job.salary}</span>
                    <span className="job-expiry">Expires in {job.expiry}</span>
                  </div>
                </div>

                <div className="job-header">
                  <div className="job-icon">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="job-logo"
                    />
                  </div>
                  <div className="job-texts">
                    <h4 className="job-title">
                      {highlightText(
                        job.title,
                        searchTerm.position,
                        showHighlight
                      )}
                    </h4>
                    <p className="job-company">{job.company}</p>
                    <p className="job-location">
                      <img src={LocationPin} alt="Location" />
                      {highlightText(
                        job.location,
                        searchTerm.location,
                        showHighlight
                      )}
                    </p>
                  </div>

                  <a className="job-share-btn">
                    <img src={Share} alt="Share" />
                  </a>
                </div>

                <p className="job-description">{job.description}</p>
                <button className="btn">Apply</button>
              </div>
            ))
          ) : (
            <p className="no-job">No jobs found.</p>
          )}
        </div>

        {visibleJobs < filteredJobs.length && (
          <div className="load-more-container">
            <Button
              text="Load More"
              onClick={loadMore}
              showArrow
              className={isLoading ? "loading-s" : ""}
              data-aos="fade"
              data-aos-delay="300"
            />
          </div>
        )}
      </div>
    </section>
  );
}
