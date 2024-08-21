export type Article = {
  id?: string;
  title?: string;
  authors?: string;
  source?: string;
  pubyear?: number;
  doi?: string;
  claim?: string;
  evidence?: string;
};

export const DefaulEmptyArticle: Article = {
  id: undefined,
  title: "",
  authors: "",
  source: "",
  pubyear: 0,
  doi: "",
  claim: "",
  evidence: "",
};
