import { RequestStatus } from "./Request";

export interface LawSuitResponse {
  page: number;
  page_data: LawSuitResponsePageDatum[];
  page_count: number;
  all_count: number;
  all_pages_count: number;
}

export interface LawSuitResponsePageDatum {
  request_id: string;
  response_id: string;
  response_type: ResponseType;
  response_data: ResponseDataPageDatum;
  user_id: string;
  created_at: Date;
  request_status: RequestStatus;
  request_created_at: Date;
  tags: FluffyTags;
}

export interface ResponseData {
  code: string;
  instance: number;
  page: number;
  page_count: number;
  all_count: number;
  all_pages_count: number;
  page_data: ResponseDataPageDatum[];
}

export interface ResponseDataPageDatum {
  name: string;
  code: string;
  distribution_date: Date;
  steps: Step[];
  last_step: Step;
  tribunal: string;
  tribunal_acronym: string;
  judge: string;
  updated_at: Date;
  _id: string;
}

export interface Step {
  content: string;
  step_date: Date;
  step_id: string;
  step_type?: string;
  steps_count: number;
  _id: string;
  tags: PurpleTags;
}

export interface PurpleTags {
  crawl_id: string;
}

export enum ResponseType {
  Steps = "steps",
  Attachments = "attachments",
  LawSuits = "lawsuits",
  Parties = "parties",
}

export interface FluffyTags {
  dashboard_id: null;
  document_related: string;
}
