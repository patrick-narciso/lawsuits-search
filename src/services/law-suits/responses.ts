import HttpClient from "@/utils/http-client";
import { LawSuitResponse, LawSuitResponsePageDatum } from "@/entities/Response";
import { RequestStatus } from "@/entities/Request";

class ResponsesServiceApi extends HttpClient {
  public constructor() {
    super(process.env.BASE_URL as string);
  }

  public getResponseById = (responseId: string) => {
    return this.instance.get<
      LawSuitResponsePageDatum,
      LawSuitResponsePageDatum
    >(`/responses/${responseId}`);
  };

  public getResponses = () => {
    return this.instance.get<LawSuitResponse, LawSuitResponse>("/responses", {
      params: {
        request_status: RequestStatus.Completed,
      },
    });
  };
}

export const ResponsesService = new ResponsesServiceApi();
