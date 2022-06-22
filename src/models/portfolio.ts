export interface Portfolio {
  about?: boolean;
  setAbout: (about: boolean) => void;
  project?: boolean;
  setProject: (project: boolean) => void;
  contact?: boolean;
  setContact: (contact: boolean) => void;
  experience?: boolean;
  setExperience: (experience: boolean) => void;
}
