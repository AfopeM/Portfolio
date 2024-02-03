export interface ProjectProp {
  name: string;
  type: string;
  coverimage: string;
  displayimage: string;
  desc: string;
  roles: string[];
  features: FeatureProp[];
  challenges: ChallengeProp[];
  techstack: string[];
  links: LinkProp[];
}

export interface FeatureProp {
  title: string;
  content: string;
}

export interface ChallengeProp {
  challenge: string;
  solution: string;
}

interface LinkProp {
  name: string;
  path: string;
}
