export type ProjectType = {
  id: string;
  imageUrl: string;
  technologies: string[];
  repoUrl?: string;
  demoUrl?: string;
};

export type HeroTypes = {
  role: string;
  subtitle: string;
  contact: string;
  github: string;
};

export type ContactTypes = {
  title: string;
  connectTitle: string;
  description: string;
  form: {
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    submitLabel: string;
    placeholders: {
      name: string;
      email: string;
      message: string;
    };
  };
};

export type AboutTypes = {
  title: string;
  paragraph: string;
  auxParagraph: string;
  goalTitle: string;
  goalText: string;
  learningTitle: string;
  learningText: string;
};
