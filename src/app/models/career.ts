export interface RequirementItem {
  text: string;
  link?: string;
}

export interface Career {
  id: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
  summary: string;
  requirements: RequirementItem[];
  pdfUrl: string;
}
