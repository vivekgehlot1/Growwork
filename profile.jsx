import React, { useState } from 'react';

function FreelancerProfile() {
    const [profile, setProfile] = useState({
        name: '',
        skills: '',
        experience: '',
        portfolio: '',
        availability: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit profile to backend
        console.log('Profile Submitted:', profile);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="text" name="skills" placeholder="Skills" onChange={handleChange} required />
            <input type="text" name="experience" placeholder="Experience" onChange={handleChange} required />
            <input type="url" name="portfolio" placeholder="Portfolio URL" onChange={handleChange} required />
            <input type="text" name="availability" placeholder="Availability" onChange={handleChange} required />
            <button type="submit">Create Profile</button>
        </form>
    );
}

export default FreelancerProfile;
