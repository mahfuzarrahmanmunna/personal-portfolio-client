import React from 'react';

const AboutMe = () => {
    return (
        <section id="about" className="bg-base-100 dark:bg-gray-900 py-16 px-6 lg:px-20">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center text-primary mb-4">
                    About <span className="text-accent">Me</span>
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
                    I'm Md: Mahfuzar Rahman Munna, a passionate MERN Stack Developer from Bangladesh.
                    I come from a humble background — my mother works in garments, and my father is a rickshaw puller.
                    But I carry big dreams. I'm currently pursuing my diploma in Computer Science and determined to study BSc in Japan with the MEXT scholarship.
                    I love building full-stack web applications and constantly challenging myself to grow.
                </p>

                {/* Details Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <Detail label="Name" value="Md: Mahfuzar Rahman Munna" />
                        <Detail label="Role" value="MERN Stack Developer" />
                        <Detail label="Education" value="Diploma in CSE (1.5 Years Left)" />
                        <Detail label="Goal" value="BSc in CSE (Japan via MEXT Scholarship)" />
                        <Detail label="Location" value="Bangladesh" />
                        <Detail label="Background" value="Mother: Garments Worker | Father: Rickshaw Puller" />
                    </div>

                    <div className="space-y-4">
                        <Detail label="Experience" value="Real Projects: Course Platform, Job App, Portfolio" />
                        <Detail label="Skills" value="HTML, CSS, JavaScript, React, Node.js, MongoDB, Firebase" />
                        <Detail label="Tools" value="Tailwind, DaisyUI, JWT, Express.js, GitHub" />
                        <Detail label="Soft Skills" value="Fast Learner, Resilient, Ambitious, Focused" />
                        <Detail label="YouTube Channel" value="Motivation Niche (Automation-Based)" />
                        <Detail label="Hobbies" value="Watching Anime, Learning, Building Projects" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const Detail = ({ label, value }) => (
    <div className="bg-base-200 dark:bg-gray-800 p-4 rounded-xl shadow-sm">
        <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase">{label}</p>
        <p className="text-lg font-medium text-gray-800 dark:text-white">{value}</p>
    </div>
);

export default AboutMe;
