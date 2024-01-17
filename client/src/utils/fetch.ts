import { atomWithQuery } from "jotai-tanstack-query";

type Files = {
  id: number;
  name: string;
  url: string;
};

const filesAtom = atomWithQuery(() => ({
  queryKey: ["users"],
  queryFn: async (): Promise<Files[]> => {
    const res = await fetch("http://127.0.0.1:3000/api/files");
    return res.json();
  },
}));

export default filesAtom;
