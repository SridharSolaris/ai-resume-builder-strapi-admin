import type { Schema, Attribute } from '@strapi/strapi';

export interface SkillsSkills extends Schema.Component {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
    icon: 'lightbulb';
  };
  attributes: {
    name: Attribute.String;
    rating: Attribute.Integer;
  };
}

export interface ExperienceExperience extends Schema.Component {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    companyName: Attribute.String;
    city: Attribute.String;
    state: Attribute.String;
    workSummary: Attribute.Text;
    startDate: Attribute.String;
    endDate: Attribute.String;
  };
}

export interface EducationEducation extends Schema.Component {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Education';
    icon: 'book';
  };
  attributes: {
    universityName: Attribute.String;
    degree: Attribute.String;
    major: Attribute.String;
    startDate: Attribute.String;
    endDate: Attribute.String;
    description: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'skills.skills': SkillsSkills;
      'experience.experience': ExperienceExperience;
      'education.education': EducationEducation;
    }
  }
}
