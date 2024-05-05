export interface LinkedInData {
  success: boolean;
  status: number;
  data: {
    firstName: string;
    lastName: string;
    fullName: string;
    publicIdentifier: string;
    headline: string;
    associatedHashtags: string;
    connections: number;
    followers: number;
    emailRequired: string;
    creatorWebsite:
      | {
          name: string;
          link: string;
        }
      | string;
    openConnection: boolean | string;
    memberId: string;
    urn: string;
    addressCountryOnly: string;
    addressWithCountry: string;
    addressWithoutCountry: string;
    profilePic: string;
    backgroundPicture: string;
    updates: any[];
    about?: string;
    experiences: {
      companyId?: string;
      companyUrn?: string;
      companyLink1: string;
      companyLink2?: string;
      logo?: string;
      title: string;
      subtitle: string;
      caption: string;
      metadata?: string;
      breakdown: boolean;
      subComponents: {
        description: {
          title?: string;
          type: string;
          text: string;
          thumbnail?: string;
        }[];
      }[];
    }[];

    educations: {
      companyId?: string;
      companyUrn?: string;
      companyLink1: string;
      logo?: string;
      title: string;
      subtitle: string;
      caption: string;
      breakdown: boolean;
      subComponents: {
        description: {
          type?: string;
          text?: string;
          thumbnail?: string;
        }[];
      }[];
    }[];
    licenseAndCertificates: {
      companyId?: string;
      companyUrn?: string;
      companyLink1: string | null;
      logo?: string;
      title: string;
      subtitle: string;
      caption: string;
      metadata?: string;
      breakdown: boolean;
      subComponents: {
        description: any[];
      }[];
    }[];
    honorsAndAwards: any[];
    languages: {
      title: string;
      caption: string;
      breakdown: boolean;
      subComponents: {
        description: any[];
      }[];
    }[];
    volunteerAndAwards: any[];
    verifications: any[];
    promos: any[];
    highlights: any[];
    projects: {
      title: string;
      breakdown: boolean;
      subtitle?: string;
      subComponents: {
        description: {
          type: string;
          text: string;
          thumbnail?: string;
        }[];
      }[];
    }[];
    publications: any[];
    patents: any[];
    courses: any[];
    testScores: any[];
    organizations: any[];
    volunteerCauses: any[];
    skills: {
      name: string;
      passedSkillAssessment: boolean;
      endorsementsCount?: number;
    }[];
    interests: {
      section_name: string;
      section_components: {
        titleV2: string;
        caption: string;
        subtitle?: string;
        size: string;
        textActionTarget: string;
        subComponents: {
          insightComponent?: {
            text: string;
            actionTarget: string;
          };
        }[];
      }[];
    }[];
  };
}
