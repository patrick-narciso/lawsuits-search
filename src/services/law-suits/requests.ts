import HttpClient from "@/utils/http-client";
import { SearchType } from "@/entities/Request";
import { ResponseType } from "@/entities/Response";

class RequestsServiceApi extends HttpClient {
  public constructor() {
    super(process.env.BASE_URL as string);
  }

  public createSearchByLawSuit = (
    lawSuit: string,
    searchType: SearchType,
    responseType?: ResponseType
  ) => {
    return this.instance.post("/requests", {
      search: {
        search_type: searchType,
        search_key: lawSuit,
        accept_cache: true,
        response_type: responseType,
      },
    });
  };

  public createSearchByLawSuits = (
    lawSuits: string[],
    searchType: SearchType,
    responseType?: ResponseType
  ) => {
    return Promise.all(
      lawSuits.map((lawSuit) =>
        this.createSearchByLawSuit(lawSuit, searchType, responseType)
      )
    );
  };
}

export const RequestsService = new RequestsServiceApi();
