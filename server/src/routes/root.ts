import { FastifyPluginAsync } from "fastify";

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", async function (request, reply) {
    return { root: true };
  });
  fastify.post("/api/files", async function (request, reply) {
    return { fileName: "sample.pdf" };
  });
  fastify.get("/api/files", async function (request, reply) {
    return {
      files: [
        {
          id: "1",
          name: "file.pdf",
          url: "http://s3.bucket.com/file.pdf",
        },
        {
          id: "2",
          name: "file2.pdf",
          url: "http://s3.bucket.com/file2.pdf",
        },
        {
          id: "3",
          name: "file3.pdf",
          url: "http://s3.bucket.com/file3.pdf",
        },
      ],
    };
  });
};

export default root;
