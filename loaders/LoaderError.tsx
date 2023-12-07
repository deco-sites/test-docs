// deno-lint-ignore-file
import { badRequest, redirect } from "deco/mod.ts";
// import { MDFileContent } from "deco-sites/starting/components/ui/Types.tsx";

export interface Props {
  /** @title Product Card layout props */
  showError: boolean;
  teste: string;
}

export type loaderObject = {
  data: string;
};

/** @title Loader de erro */
const loader = (
  { showError }: Props,
  _req: Request,
  _ctx: any,
): any => {
  console.log("AQUIIAQUIIAQUIIAQUIIAQUIIAQUIIAQUIIAQUIIAQUIIAQUII");
  badRequest({ message: "Erro de teste" });
  // throw new Error("Erro de teste");
//   return redirect("http://localhost:8001/docs/pt/overview", 307) as unknown as ReturnType<any>;
  return { data: "OK" };
};

export default loader;
