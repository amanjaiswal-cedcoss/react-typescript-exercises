declare module "typesall" {
  export interface article {
    id: number;
    title: string;
    body: string;
  }

  export interface articlesReducer {
    articles: article[];
  }

  export interface store {
    articlesReducer: articlesReducer;
  }
}
