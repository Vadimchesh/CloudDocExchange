import { FC } from "react";
import filesAtom from "@/utils/fetch";
import { useAtom } from "jotai";

const Files: FC = () => {
  const [{ data, isSuccess }] = useAtom(filesAtom);

  return (
    <div>
      {isSuccess &&
        data.files.map((file) => (
          <ul key={file.id}>
            <li>{file.id}</li>
            <li>{file.name}</li>
            <li>{file.url}</li>
          </ul>
        ))}
    </div>
  );
};

export default Files;
