import { Header } from "@/app/components";
import { ResponsesService } from "@/services/law-suits/responses";
import moment from "moment";

async function getResponse(responseId: string) {
  try {
    return await ResponsesService.getResponseById(responseId);
  } catch (e) {
    throw new Error("An error has occurred");
  }
}

export default async function LawSuit({ params }: { params: { id: string } }) {
  const response = await getResponse(params.id);
  const { response_data: data } = response;

  return (
    <>
      <Header title={`${data.code} - ${data.tribunal_acronym}`} />
      <div className="flex justify-center align-center">
        <div className="bg-white divide-y divide-gray-400 border-green-600 rounded border-2 px-4 py-4 mt-10 mb-10 mr-8 ml-8 h-fit">
          <p className="text-lg">
            <strong>{data.name}</strong>
          </p>
          <div>
            <p>
              <strong>Juíz:</strong> {data.judge || "Não informado"}
            </p>
            <p>
              <strong>Tribunal:</strong> {data.tribunal_acronym}
            </p>
            <p>
              <strong>Processo:</strong> {data.code}
            </p>
            <p>
              <strong>Data de Distribuição:</strong>{" "}
              {moment(data.distribution_date).format("LLL")}
            </p>
          </div>
          <ul className="bg-white divide-y divide-gray-600">
            <p className="mt-4 mb-4">
              <strong>Últimas movimentações</strong>
            </p>
            {data.steps.map((step, index) => {
              if (index > 9) return;
              return (
                <li key={step._id} className="mb-2">
                  {step.content} -{" "}
                  <strong>{moment(step.step_date).format("LLL")}</strong>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
