import { atomWithMutation, atomWithQuery } from "jotai-tanstack-query";

type Files = {
  files: [
    {
      id: string;
      name: string;
      url: string;
    }
  ];
};

export const filesAtom = atomWithQuery(() => ({
  queryKey: ["files"],
  queryFn: async (): Promise<Files> => {
    const res = await fetch("http://127.0.0.1:3000/api/block");
    return res.json();
  },
}));

export const filesMutation = atomWithMutation(() => ({
  mutationKey: ["files"],
  mutationFn: async ({ files }: { files: FormData }) => {
    await fetch(`http://127.0.0.1:3000/api/block`, {
      method: "POST",
      body: files,
    });
  },
}));
