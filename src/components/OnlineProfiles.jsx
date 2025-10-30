import React from 'react';

const OnlineProfiles = () => {
  const profiles = [
    {
      name: "LinkedIn",
      description: "Professional networking and career updates",
      icon: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/shyamli-rupam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "LeetCode",
      description: "Algorithm and data structure problem solving",
      icon: "leetcode-icon",
      link: "https://leetcode.com/u/shyamli_29/",
      logo: "https://leetcode.com/static/images/LeetCode_logo_rvs.png"
    },
    {
      name: "CodeChef",
      description: "Competitive programming contests and ratings",
      icon: "codechef-icon",
      link: "https://www.codechef.com/users/real_enigma029",
      logo: "https://cdn.codechef.com/sites/all/themes/abessive/cc-logo.png"
    },
    {
      name: "GitHub",
      description: "Code repositories and open source contributions",
      icon: "fab fa-github",
      link: "https://github.com/Shy029"
    }
  ];

  return (
    <section id="coding-profiles" className="coding-profiles">
      <div className="container">
        <h2 className="section-title">Online Profiles</h2>
        <div className="profiles-grid">
          {profiles.map((profile, index) => (
            <div key={index} className="profile-card">
              <div className={`profile-icon ${profile.icon}`}>
                {profile.logo ? (
                  <img src={profile.logo} alt={`${profile.name} Logo`} />
                ) : (
                  <i className={profile.icon}></i>
                )}
              </div>
              <h3>{profile.name}</h3>
              <p>{profile.description}</p>
              <a href={profile.link} target="_blank" rel="noopener noreferrer" className="profile-link">
                <i className="fas fa-external-link-alt"></i> View Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineProfiles;
