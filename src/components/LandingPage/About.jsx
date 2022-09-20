import React from "react";

const About = () => {
  return (
    <div>
      <section>
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
            Learn More About Cranky
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 lg:gap-16 lg:grid-cols-2">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt="Party"
                src="https://i0.wp.com/crankyflier.com/wp-content/uploads/headshot.jpg?resize=150%2C150&ssl=1"
                className="absolute inset-0 object-cover w-full h-full"
              />
            </div>

            <div className="lg:py-16">
              <article className="space-y-4 text-gray-600">
                My name is Brett Snyder, and I am the President and Chief
                Airline Dork of Cranky Flier LLC. I’ve had the airline bug since
                I was young. As a kid, I never missed a chance to go to LAX and
                pick up airline timetables. My grandmother even took me to an
                airport hotel for my birthday one year so I could watch the
                planes land. By the age of 12, I had become a travel agent. Soon
                after I was volunteering at Traveler’s Aid. Since that time,
                I’ve worked in several places in the industry. Here’s what I’ve
                done in the past. USAir Sales Intern (1996-1997) America West
                Sales Intern (1997-1999) United Dulles Operations Intern (1999)
                America West Pricing Analyst/Sr Analyst/Manager (1999-2002) Eos
                Intern (2003) United Marketing Planning Product Manager
                (2004-2005) PriceGrabber.com Business Director of Travel
                (2005-2007) Today, my main focus is this blog along with my
                Cranky Concierge air travel assistance service, Cranky Daily
                news, and Cranky Network Weekly competitive network analysis. I
                occasionally freelance and consult for other companies, but not
                for airlines. To see a list of everything I’m doing today, head
                to my ethics page. If you’d like to send me an email about
                anything related to the blog or the industry, you can reach me
                at cf@crankyflier.com.
              </article> 
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
