import Link from "next/link";
import moment from "moment";
import { ResponsesService } from "@/services/law-suits/responses";
import { RequestsService } from "@/services/law-suits/requests";
import { Header } from "@/app/components";
import LawSuitsCNJ from "@/mock/cnj.json";
import { SearchType } from "@/entities/Request";

async function createSearch() {
  try {
    return await RequestsService.createSearchByLawSuits(
      LawSuitsCNJ.lawsuits_cnj,
      SearchType.CNJ
    );
  } catch (e) {
    throw new Error("An error has occurred");
  }
}

async function getResponses() {
  try {
    return await ResponsesService.getResponses();
  } catch (e) {
    throw new Error("An error has occurred");
  }
}

export default async function Home() {
  const request = await createSearch();
  const response = await getResponses();

  return (
    <>
      <Header title="Processos Encontrados" />
      <div className="flex justify-center align-center">
        <ul
          role="list"
          className="bg-white divide-y divide-gray-600 border-green-600 rounded border-2 px-4 py-4 mt-10 mb-10 mr-8 ml-8 h-fit"
        >
          {response.page_data?.map((res) => {
            const { response_data } = res;
            return (
              <Link
                key={response_data._id}
                href={`/processo/${res.response_id}`}
              >
                <li className="flex justify-between gap-x-6 py-5 cursor-pointer">
                  <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {response_data.name}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        <strong>Juíz: </strong>
                        {response_data.judge || "Não informado"}
                      </p>
                    </div>
                  </div>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">
                      {response_data.tribunal_acronym}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {moment(response_data.last_step.step_date)
                        .locale("pt-br")
                        .format("LLL")}
                    </p>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}
